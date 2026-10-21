import { Marked } from 'marked';
import { esc, slugify, stripTags } from './util.mjs';

const ALERT = /^\s*<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(?:<br>)?\s*/i;
const SHORTCODE = /^\[\[([\w-]+)(?:\s+([^\]]*))?\]\]$/;
const CUSTOM_ID = /\s*\{(#[^}]+)\}\s*$/;

export function parseFrontMatter(source) {
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(source);
  if (!match) return { data: {}, body: source };
  const data = {};
  for (const line of match[1].split('\n')) {
    const m = /^([\w-]+):\s*(.*)$/.exec(line);
    if (!m) continue;
    let value = m[2].trim();
    if (/^(true|false)$/.test(value)) value = value === 'true';
    else if (/^-?\d+(\.\d+)?$/.test(value)) value = Number(value);
    else if (/^".*"$/.test(value)) value = value.slice(1, -1);
    data[m[1]] = value;
  }
  return { data, body: source.slice(match[0].length) };
}

/**
 * Render markdown for one page.
 * ctx.resolve(href) maps site-relative page links to the page's language.
 * ctx.component(name, arg) returns HTML for [[shortcodes]].
 */
export function renderMarkdown(body, ctx) {
  const headings = [];
  const usedIds = new Set();

  const uniqueId = (id) => {
    let candidate = id || 'section';
    let n = 2;
    while (usedIds.has(candidate)) candidate = `${id}-${n++}`;
    usedIds.add(candidate);
    return candidate;
  };

  const marked = new Marked({ gfm: true, breaks: false });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        let inner = this.parser.parseInline(tokens);
        let ids = [];
        const custom = CUSTOM_ID.exec(inner);
        if (custom) {
          ids = custom[1].split(/\s+/).map((s) => s.replace(/^#/, '')).filter(Boolean);
          inner = inner.replace(CUSTOM_ID, '');
        }
        const text = stripTags(inner);
        const id = uniqueId(ids[0] || slugify(text));
        const aliases = ids.slice(1).map((a) => `<span class="anchor-alias" id="${esc(a)}"></span>`).join('');
        headings.push({ depth, id, text });
        const anchor = depth >= 2 && depth <= 3 ? `<a class="heading-anchor" href="#${esc(id)}" aria-label="${esc(text)}">#</a>` : '';
        return `${aliases}<h${depth} id="${esc(id)}">${inner}${anchor}</h${depth}>\n`;
      },
      paragraph({ tokens, text }) {
        const sc = SHORTCODE.exec(text.trim());
        if (sc && ctx.component) {
          const html = ctx.component(sc[1], sc[2] || '');
          if (html != null) return html + '\n';
        }
        return `<p>${this.parser.parseInline(tokens)}</p>\n`;
      },
      blockquote({ tokens }) {
        const inner = this.parser.parse(tokens);
        const alert = ALERT.exec(inner);
        if (alert) {
          const kind = alert[1].toLowerCase();
          const label = ctx.alertLabel ? ctx.alertLabel(kind) : kind;
          return `<aside class="callout callout--${kind}" role="note"><p class="callout__label">${esc(label)}</p><p>${inner.replace(ALERT, '')}</aside>\n`;
        }
        return `<blockquote>${inner}</blockquote>\n`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const resolved = ctx.resolve ? ctx.resolve(href) : href;
        const external = /^https?:\/\//.test(resolved) && !resolved.startsWith(ctx.siteUrl || '\u0000');
        const attrs = [`href="${esc(resolved)}"`];
        if (title) attrs.push(`title="${esc(title)}"`);
        if (external) attrs.push('rel="noopener"', 'class="ext"');
        return `<a ${attrs.join(' ')}>${text}</a>`;
      },
      image({ href, title, text }) {
        const src = ctx.resolve ? ctx.resolve(href) : href;
        return `<img src="${esc(src)}" alt="${esc(text)}"${title ? ` title="${esc(title)}"` : ''} loading="lazy" decoding="async">`;
      },
      table(token) {
        const head = token.header.map((cell) => `<th${cell.align ? ` style="text-align:${cell.align}"` : ''}>${this.parser.parseInline(cell.tokens)}</th>`).join('');
        const rows = token.rows
          .map((row) => `<tr>${row.map((cell) => `<td${cell.align ? ` style="text-align:${cell.align}"` : ''}>${this.parser.parseInline(cell.tokens)}</td>`).join('')}</tr>`)
          .join('\n');
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
      },
      code({ text, lang }) {
        const cls = lang ? ` class="language-${esc(lang)}"` : '';
        return `<div class="code"><pre><code${cls}>${esc(text)}</code></pre><button class="code__copy" type="button" data-copy>${esc(ctx.copyLabel || 'Copy')}</button></div>\n`;
      },
    },
  });

  const tokens = marked.lexer(body);
  const faq = ctx.extractFaq ? extractFaq(tokens, marked) : [];
  const steps = ctx.extractSteps ? extractSteps(tokens) : [];
  const html = marked.parser(tokens);
  return { html, headings, faq, steps };
}

// Question/answer pairs from "### question" headings followed by answer blocks.
function extractFaq(tokens, marked) {
  const pairs = [];
  let current = null;
  for (const token of tokens) {
    if (token.type === 'heading' && token.depth <= 3) {
      if (current) pairs.push(current);
      current = token.depth === 3 ? { q: token.text.replace(CUSTOM_ID, '').trim(), answer: [] } : null;
      continue;
    }
    if (current && token.type !== 'space') current.answer.push(token);
  }
  if (current) pairs.push(current);
  const plain = new Marked({ gfm: true });
  return pairs
    .filter((p) => p.answer.length)
    .map((p) => ({
      q: stripTags(plain.parseInline(p.q)),
      a: stripTags(plain.parser(p.answer)),
    }));
}

// Steps of the first ordered list, for HowTo structured data.
function extractSteps(tokens) {
  const list = tokens.find((t) => t.type === 'list' && t.ordered);
  if (!list) return [];
  const plain = new Marked({ gfm: true });
  return list.items.map((item) => stripTags(plain.parseInline(item.text.split('\n')[0])));
}

// Markdown twin for LLMs: absolute links, no shortcodes or custom anchors.
export function markdownTwin(body, ctx) {
  return body
    .replace(/^\[\[([\w-]+)(?:\s+([^\]]*))?\]\]$/gm, (_, name, arg) => (ctx.componentMd ? ctx.componentMd(name, arg || '') : ''))
    .replace(/(^#{1,6} .*?)[ \t]*\{#[^}]+\}[ \t]*$/gm, '$1')
    .replace(/\]\((\/[^)\s]*)\)/g, (_, href) => `](${ctx.absolute(href)})`)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
