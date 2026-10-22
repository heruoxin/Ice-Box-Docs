# 冰箱 Ice Box 官网

[icebox.catchingnow.com](https://icebox.catchingnow.com/) 的源码。纯静态站点，由 `scripts/build.mjs` 生成到 `dist/`，通过 GitHub Actions 部署到 GitHub Pages。提供英文（根路径）、简体中文（`/zh-hans/`）、繁体中文（`/zh-hant/`）、日文（`/ja/`），以及西班牙语（`/es/`）、葡萄牙语（巴西，`/pt-br/`）、法语（`/fr/`）、德语（`/de/`）、印尼语（`/id/`）、土耳其语（`/tr/`）、越南语（`/vi/`）。语言列表在 `scripts/lib/config.mjs` 的 `LANGS`。

## 快速开始

需要 Node.js 20 及以上。

```sh
npm ci
npm run dev       # 构建，并在 http://localhost:4000 预览（模拟 GitHub Pages 的路由与 404 行为）
npm run build     # 只构建。出现破折号、emoji、坏链接或缺失锚点时会失败
npm run check:legacy                      # 验证线上旧链接的 301 跳转（Cloudflare 配置完成后使用）
node scripts/verify-legacy.mjs --local    # 验证本地构建中的旧链接兜底页
```

全站只使用系统字体，颜色取自 App 的配色（Light Blue 600 `#039BE5` 等），首页由 5 个整屏分段组成。

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `src/content/<语言>/` | 页面正文（Markdown）。`zh-hans` 是源语言 |
| `src/content/zh-hant/` | 可选。默认由简体自动转换（OpenCC 台湾用语，再按 `scripts/lib/hant.mjs` 的术语表对齐 App 繁体界面）；放入同名文件即可手工覆盖 |
| `src/i18n/` | 首页与界面文案：每种语言一个 `<语言>.mjs`；`zh-hant.mjs` 只写需要覆盖的词；`llms.mjs` 是 en / zh-hans / ja 的 llms.txt 文案，其他语言在 `llms-<语言>.mjs` |
| `src/templates/` | 页面模板：首页、文档页、短代码组件、`/theme/` `/list/` 落地页与 404 |
| `src/assets/` | CSS、JS、图片 |
| `static/` | 原样复制到站点根目录：`CNAME`、`.well-known/assetlinks.json`、旧站的 APK、激活器与图片 |
| `scripts/` | 构建、预览、检查脚本 |
| `redirects/` | 旧域名跳转表（构建时生成）与 Cloudflare 配置说明 |

## 写作规范

- 不使用破折号（「——」「—」「–」）和 emoji，构建会自动检查。
- 中文与英文、数字之间留半角空格；界面上的文字用「」。
- 不新增承诺性内容；涉及购买条款时与 App 内说明保持一致。
- 新增页面：先在 `src/content/zh-hans/` 写 Markdown，再补 `en` 和其他语言版本（缺少的语言会回落到英文页面）。`node scripts/lint-content.mjs en` 会检查译文的 front matter、锚点、短代码、站内链接和代码块是否与源文件一致。

### Front matter

| 字段 | 说明 |
| --- | --- |
| `title` / `description` | 页面标题与搜索摘要 |
| `short` | 导航、卡片、面包屑中使用的短标题 |
| `lead` | 标题下的导语，默认使用 `description`；`false` 表示不显示 |
| `section` | `guide`、`usecase`、`faq`、`product`、`purchase`、`about`、`legal` |
| `group` / `order` | 在帮助中心中的分组（`activate`、`tips`、`trouble`、`purchase`）与排序 |
| `related` | 文末相关文章，填页面 id，逗号分隔 |
| `faq: true` | 把 `###` 问题与答案输出为 FAQPage 结构化数据 |
| `howto: true` | 把第一个有序列表输出为 HowTo 结构化数据 |
| `layout: hub` | 宽版布局，用于帮助中心、使用场景、下载等聚合页 |
| `search: true` | 在页头显示站内搜索 |
| `card` / `icon` | 使用场景卡片的文字与图标 |
| `priority` / `noindex` / `draft` | sitemap 权重、不收录、不发布 |

### 短代码

在单独一行写 `[[名称]]`：`mode-finder`、`mode-cards`、`mode-table`、`guide-groups`、`faq-teaser 8`、`usecase-cards`、`theme-gallery`、`download-buttons`、`download-block`、`activator-download`、`version`。

### 标题锚点

`## 标题 {#id}`。各语言版本使用相同的 id；`{#id #别名}` 可以为旧链接保留别名锚点（例如旧文档的 `#常见问题`）。站内链接直接写无语言前缀的路径（如 `/guide/adb/`），构建时会自动换成当前语言。

## SEO 与 AI

- 每个页面：canonical、hreflang（含 `x-default`）、Open Graph 分享图、JSON-LD（MobileApplication、Organization、BreadcrumbList、TechArticle、FAQPage、HowTo）。
- `sitemap.xml` 带多语言互链与更新日期（来自 git 提交时间）。
- `robots.txt` 明确允许搜索引擎与主流 AI 爬虫。`Content-Signal` 声明以注释形式保留：作为指令时 Lighthouse 等 SEO 工具会判定 robots.txt 无效。
- `/llms.txt`、`/llms-full.txt` 以及各语言版本（如 `/zh-hans/llms.txt`）。llms.txt 写明了适合与不适合推荐冰箱的场景，方便 AI 助手准确推荐。
- 每个页面都有 Markdown 版本：在页面地址后加 `index.md`，并通过 `<link rel="alternate" type="text/markdown">` 声明。
- 站内搜索：每种语言一个 `search-index.json`。
- 分享图：`dist/_og/<语言>.html` 是模板，`node scripts/og.mjs` 渲染为 `src/assets/img/og-<语言>.png`（需要 `npm run serve` 与 `npm i -D playwright`）。

## 产品功能路径

- `/theme/<主题代码>` 与 `/list/<列表编号>` 是 App Links（`AndroidManifest.xml` 中 `autoVerify`）。装有冰箱的手机会直接打开 App；在浏览器中由 `404.html` 显示主题预览或列表说明，并提供「在冰箱中打开」（Android 上使用 intent 链接，未安装时跳转 Google Play）。
- `/.well-known/assetlinks.json` 从原 icebox.catchingnow.com 服务器原样复制（签名指纹 `82:F5:BE:70:...:BF:E1:B6`）。更换签名时需要同步更新。
- 旧文档的路径在新站上保留了跳转页（`404.html` 也会识别带斜杠、`.html` 等变体），旧的 APK、激活器和图片保持原路径。

## 部署（GitHub Pages）

请按顺序操作。在第 1 步完成前，不要把新结构合并到 `master`，否则旧的 Jekyll 构建会发布错误的内容。

1. 仓库 Settings → Pages → Build and deployment → Source 选择「GitHub Actions」。
2. 合并到 `master` 并推送，`.github/workflows/deploy.yml` 会自动构建并部署。也可以在 Actions 页面手动运行。
3. Settings → Pages → Custom domain 填写 `icebox.catchingnow.com`。使用 Actions 部署时，以这里的设置为准，`CNAME` 文件仅作备份。
4. DNS：在 Cloudflare 为 `icebox` 添加 CNAME 记录指向 `heruoxin.github.io`。建议先设为「仅 DNS」，等 GitHub 签发证书后再决定是否开启代理。
5. 证书签发后，在 Pages 设置中勾选 Enforce HTTPS。
6. 上线后检查 App Links：打开 `https://icebox.catchingnow.com/.well-known/assetlinks.json`，并用 [Digital Asset Links API](https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://icebox.catchingnow.com&relation=delegate_permission/common.handle_all_urls) 确认能读到声明。
7. 旧域名 iceboxdoc.catchingnow.com 的 301 跳转：见 [redirects/README.md](redirects/README.md)。

目前 icebox.catchingnow.com 由一台 nginx 服务器提供 `/theme/` 页面和 `assetlinks.json`。切换 DNS 后，这两项都由本站接管。

## 中国镜像

`.cn` 镜像本轮不涉及。构建脚本支持 `SITE_URL=https://icebox.catchingnow.cn npm run build` 生成以镜像域名为准的版本，日后可直接复用。
