(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE = 'cubic-bezier(0.2, 0, 0, 1)';
  const pageLang = document.documentElement.dataset.lang || 'en';
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
  };

  /* ---------- Header: follows the color of the section under it ---------- */

  const masthead = $('[data-masthead]');
  const sections = $$('main > [data-tone]');
  if (masthead) {
    if (sections.length && 'IntersectionObserver' in window) {
      const head = masthead.offsetHeight;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) masthead.dataset.tone = e.target.dataset.tone; });
      }, { rootMargin: `-${head}px 0px -${Math.max(0, window.innerHeight - head - 2)}px 0px` });
      sections.forEach((s) => io.observe(s));
    } else {
      const onScroll = () => masthead.classList.toggle('is-raised', window.scrollY > 4);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  const langBox = $('[data-lang]');
  if (langBox) {
    document.addEventListener('click', (e) => { if (!langBox.contains(e.target)) langBox.open = false; });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') langBox.open = false; });
  }
  $$('[data-lang-switch]').forEach((a) => a.addEventListener('click', () => store.set('icebox-lang', a.dataset.langSwitch)));

  /* ---------- Language suggestion ---------- */

  const hint = $('[data-lang-hint]');
  if (hint && hint.dataset.alts) {
    const preferred = (() => {
      const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']).map((l) => String(l).toLowerCase());
      const rules = JSON.parse(hint.dataset.detect || '[]').map(([code, re]) => [code, new RegExp(re)]);
      for (const l of langs) {
        const hit = rules.find(([, re]) => re.test(l));
        if (hit) return hit[0];
      }
      return 'en';
    })();
    const alts = JSON.parse(hint.dataset.alts);
    const texts = JSON.parse(hint.dataset.hints);
    if (!store.get('icebox-lang') && !store.get('icebox-hint-off') && preferred !== pageLang && alts[preferred] && texts[preferred]) {
      const tx = texts[preferred];
      hint.innerHTML = '<span></span><a></a><button type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>';
      hint.querySelector('span').textContent = tx.text;
      const a = hint.querySelector('a');
      a.textContent = tx.go;
      a.href = alts[preferred];
      a.lang = preferred;
      a.addEventListener('click', () => store.set('icebox-lang', preferred));
      const close = hint.querySelector('button');
      close.setAttribute('aria-label', tx.close);
      close.addEventListener('click', () => { hint.classList.remove('is-on'); store.set('icebox-hint-off', '1'); });
      hint.hidden = false;
      setTimeout(() => hint.classList.add('is-on'), 1200);
    }
  }

  /* ---------- Copy ---------- */

  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy], [data-copy-text]');
    if (!btn) return;
    const text = btn.hasAttribute('data-copy-text') ? btn.getAttribute('data-copy-text') : ($('code', btn.parentElement) || {}).textContent || '';
    try {
      await navigator.clipboard.writeText(text);
      const label = btn.textContent;
      btn.textContent = document.documentElement.dataset.copied || 'OK';
      setTimeout(() => { btn.textContent = label; }, 1400);
    } catch { /* clipboard unavailable */ }
  });

  /* ---------- Table of contents ---------- */

  const toc = $('[data-toc]');
  if (toc && 'IntersectionObserver' in window) {
    const links = $$('a', toc);
    const byId = new Map(links.map((a) => [decodeURIComponent(a.hash.slice(1)), a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('is-active', a === byId.get(e.target.id)));
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    byId.forEach((_, id) => { const h = document.getElementById(id); if (h) io.observe(h); });
  }

  /* ---------- Mode chooser ---------- */

  $$('[data-chooser]').forEach((card) => {
    const modes = JSON.parse(card.dataset.modes);
    const state = { root: 'no', pc: 'yes', android: 'new' };
    const swap = $('[data-swap]', card);
    const androidRow = $('[data-q="android"]', card);
    const pick = () => {
      if (state.root === 'yes') return 'root';
      if (state.pc === 'yes') return 'deviceOwner';
      return state.android === 'new' ? 'wireless' : 'qr';
    };
    let current = 'deviceOwner';
    const render = () => {
      androidRow.hidden = !(state.root === 'no' && state.pc === 'no');
      const id = pick();
      if (id === current) return;
      current = id;
      const m = modes[id];
      const apply = () => {
        $('[data-name]', card).textContent = m.name;
        $('[data-href]', card).href = m.href;
      };
      if (reduce) { apply(); return; }
      swap.classList.add('is-out');
      setTimeout(() => { apply(); swap.classList.remove('is-out'); }, 140);
    };
    $$('[data-q]', card).forEach((row) => {
      $$('button', row).forEach((b) => b.addEventListener('click', () => {
        $$('button', row).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        state[row.dataset.q] = b.dataset.v;
        render();
      }));
    });
  });

  /* ---------- Search ---------- */

  const search = $('[data-search]');
  if (search) {
    const input = $('[data-search-input]', search);
    const list = $('[data-search-results]', search);
    let index = null;
    let active = -1;
    const load = async () => {
      if (!index) { try { index = await (await fetch(search.dataset.index)).json(); } catch { index = []; } }
      return index;
    };
    const norm = (s) => String(s).toLowerCase().normalize('NFKC');
    const run = async () => {
      const q = norm(input.value.trim());
      if (!q) { list.hidden = true; return; }
      const terms = q.split(/\s+/).filter(Boolean);
      const items = (await load())
        .map((it) => {
          let score = 0;
          for (const term of terms) {
            const s = (norm(it.t).includes(term) ? 6 : 0) + (norm(it.h || '').includes(term) ? 3 : 0) + (norm(it.x || '').includes(term) ? 1 : 0);
            if (!s) return null;
            score += s;
          }
          return { it, score };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8);
      list.textContent = '';
      active = -1;
      if (!items.length) {
        const li = document.createElement('li');
        li.className = 'search__empty';
        li.textContent = search.dataset.empty;
        list.appendChild(li);
      }
      items.forEach(({ it }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = it.u;
        const strong = document.createElement('strong');
        strong.textContent = it.t;
        const span = document.createElement('span');
        const x = it.x || '';
        const i = norm(x).indexOf(terms[0]);
        span.textContent = (i > 30 ? '…' : '') + x.slice(Math.max(0, i - 30), Math.max(0, i - 30) + 90) + '…';
        a.append(strong, span);
        li.appendChild(a);
        list.appendChild(li);
      });
      list.hidden = false;
    };
    input.addEventListener('focus', load, { once: true });
    input.addEventListener('input', run);
    input.addEventListener('keydown', (e) => {
      const links = $$('a', list);
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && links.length) {
        e.preventDefault();
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
        links.forEach((l, i) => l.classList.toggle('is-active', i === active));
      } else if (e.key === 'Enter' && links[active]) {
        e.preventDefault();
        location.href = links[active].href;
      } else if (e.key === 'Escape') list.hidden = true;
    });
    document.addEventListener('click', (e) => { if (!search.contains(e.target)) list.hidden = true; });
  }

  /* ---------- Reveal: copy settles in as its section arrives ---------- */

  const reveals = $$('.reveal');
  if (reveals.length) {
    if (reduce || !('IntersectionObserver' in window)) reveals.forEach((el) => el.classList.add('is-in'));
    else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
      }, { threshold: 0.2 });
      reveals.forEach((el) => io.observe(el));
    }
  }

  /* ---------- Phone ---------- */

  const STOP = Symbol('stop');

  class Phone {
    constructor(root) {
      this.root = root;
      this.screen = $('.device__screen', root);
      this.sheet = $('.ib', root);
      this.apps = $$('.ib__app', root);
      this.bar = $('.ib__bar', root);
      this.fab = $('[data-fab]', root);
      this.track = $('.ib__track', root);
      this.toastEl = $('.toast', root);
      this.open = $('[data-open]', root);
      this.back = $('[data-back]', root);
      this.off = $('.off', root);
      this.power = $('[data-power]', root);
      this.tap = $('.tap', root);
      const host = root.closest('[data-phone-strings]');
      this.strings = host ? JSON.parse(host.dataset.phoneStrings) : {};
      this.initial = this.apps.filter((a) => a.classList.contains('is-frozen')).map((a) => a.dataset.app);
      this.busy = false;
      this.toastTimer = 0;
      this.tapTimer = 0;
      this.setClock();
      this.bindFab();
      this.apps.forEach((app) => app.addEventListener('click', () => this.launch(app)));
      this.back.addEventListener('click', () => this.close());
      this.power.addEventListener('click', () => this.lock());
    }

    setClock() {
      const now = new Date();
      const hm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      $$('.sb__time, .home__clock, .off__time', this.root).forEach((el) => { el.textContent = hm; });
      try {
        const locale = { 'zh-hans': 'zh-CN', 'zh-hant': 'zh-TW' }[pageLang] || document.documentElement.lang || 'en-US';
        $('.home__date', this.root).textContent = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric', weekday: 'long' }).format(now);
      } catch { /* keep the rendered date */ }
    }

    app(id) { return this.apps.find((a) => a.dataset.app === id); }

    // Center of an element in screen pixels.
    center(el) {
      const box = this.screen.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const k = this.screen.offsetWidth / box.width || 1;
      return { x: (r.left - box.left + r.width / 2) * k, y: (r.top - box.top + r.height / 2) * k };
    }

    // Touch indicator, like Android's "show taps".
    showTap(el, ms = 240) {
      if (!this.tap || reduce) return;
      const c = this.center(el);
      this.tapBase = c;
      this.tap.style.transition = 'none';
      this.tap.style.left = `${c.x}px`;
      this.tap.style.top = `${c.y}px`;
      this.tap.classList.remove('is-on');
      void this.tap.offsetWidth;
      this.tap.classList.add('is-on');
      clearTimeout(this.tapTimer);
      this.tapTimer = setTimeout(() => this.tap.classList.remove('is-on'), ms);
    }

    toast(text) {
      const span = $('span', this.toastEl);
      span.textContent = text;
      this.toastEl.classList.add('is-on');
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => this.toastEl.classList.remove('is-on'), 1300);
    }

    freezeAll(list = this.apps) {
      const targets = list.filter((a) => !a.classList.contains('is-frozen'));
      targets.forEach((a, i) => setTimeout(() => a.classList.add('is-frozen'), reduce ? 0 : i * 28));
      if (targets.length) setTimeout(() => this.toast(this.strings.frozen || ''), reduce ? 0 : targets.length * 28 + 60);
      return targets.length;
    }

    maxShift() { return this.bar.clientWidth - this.fab.offsetWidth - 6; }

    moveFab(x, ms) {
      const t = ms ? `transform ${ms}ms ${EASE}` : 'none';
      this.fab.style.transition = t;
      this.track.style.transition = ms ? `width ${ms}ms ${EASE}` : 'none';
      this.fab.style.transform = x ? `translateX(${x}px)` : '';
      this.track.style.width = x ? `${x + this.fab.offsetWidth / 2}px` : '0';
      if (this.tap && this.tapBase && this.tap.classList.contains('is-on')) {
        this.tap.style.transition = ms ? `left ${ms}ms ${EASE}` : 'none';
        this.tap.style.left = `${this.tapBase.x + x}px`;
      }
    }

    // Slide the snowflake button across the bar: freezes everything, as in the app.
    async slide(shown) {
      if (this.busy) return;
      this.busy = true;
      const ms = reduce ? 0 : 260;
      if (shown) this.showTap(this.fab, ms + 80);
      this.moveFab(this.maxShift(), ms);
      await wait(ms);
      this.freezeAll();
      this.moveFab(0, reduce ? 0 : 200);
      await wait(200);
      this.busy = false;
    }

    bindFab() {
      let start = null;
      let dx = 0;
      this.fab.addEventListener('pointerdown', (e) => {
        if (this.busy) return;
        start = e.clientX;
        dx = 0;
        this.fab.setPointerCapture(e.pointerId);
        this.fab.classList.add('is-dragging');
      });
      this.fab.addEventListener('pointermove', (e) => {
        if (start === null) return;
        dx = Math.max(0, Math.min(this.maxShift(), e.clientX - start));
        this.moveFab(dx, 0);
      });
      const end = async () => {
        if (start === null) return;
        start = null;
        this.fab.classList.remove('is-dragging');
        if (dx < 4) { this.moveFab(0, 0); this.slide(); return; }
        if (dx > this.maxShift() * 0.5) {
          this.busy = true;
          this.moveFab(this.maxShift(), 90);
          await wait(90);
          this.freezeAll();
          this.moveFab(0, 200);
          await wait(200);
          this.busy = false;
        } else this.moveFab(0, 160);
      };
      this.fab.addEventListener('pointerup', end);
      this.fab.addEventListener('pointercancel', end);
      this.fab.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.slide(); } });
      this.fab.addEventListener('click', (e) => { if (e.detail === 0) this.slide(); });
    }

    async launch(app, shown) {
      if (this.busy || this.open.classList.contains('is-on')) return;
      this.busy = true;
      if (shown) { this.showTap(app); await wait(reduce ? 0 : 90); }
      if (app.classList.contains('is-frozen')) {
        app.classList.remove('is-frozen');
        this.toast(this.strings.defrosted || '');
        await wait(reduce ? 0 : 180);
      }
      const c = this.center($('.ib__icon', app));
      this.open.style.setProperty('--c', app.dataset.color);
      $('.app-open__title', this.open).textContent = app.getAttribute('aria-label') || '';
      this.open.style.transformOrigin = `${c.x}px ${c.y}px`;
      this.open.classList.add('is-on');
      this.toastEl.classList.remove('is-on');
      const anim = this.open.animate([{ opacity: 0, transform: 'scale(.14)' }, { opacity: 1, transform: 'scale(1)' }], { duration: reduce ? 0 : 240, easing: EASE, fill: 'forwards' });
      await anim.finished.catch(() => {});
      this.busy = false;
    }

    async close(shown) {
      if (!this.open.classList.contains('is-on')) return;
      if (shown) { this.showTap(this.back); await wait(reduce ? 0 : 90); }
      const anim = this.open.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.14)' }], { duration: reduce ? 0 : 180, easing: EASE, fill: 'forwards' });
      await anim.finished.catch(() => {});
      this.open.classList.remove('is-on');
    }

    // Power key: the screen goes dark, and Auto Freeze puts the app back on ice.
    async lock() {
      if (this.busy) return;
      this.busy = true;
      this.power.classList.add('is-down');
      await wait(120);
      this.power.classList.remove('is-down');
      if (this.open.classList.contains('is-on')) { this.open.getAnimations().forEach((a) => a.cancel()); this.open.classList.remove('is-on'); }
      this.off.classList.add('is-on');
      await wait(reduce ? 200 : 900);
      this.off.classList.remove('is-on');
      await wait(reduce ? 0 : 160);
      this.freezeAll();
      await wait(300);
      this.busy = false;
    }

    async panel(open) {
      const ms = reduce ? 0 : open ? 300 : 220;
      this.sheet.style.transition = ms ? `transform ${ms}ms ${open ? 'cubic-bezier(0, 0, 0, 1)' : 'cubic-bezier(0.4, 0, 1, 1)'}` : 'none';
      this.sheet.classList.toggle('is-closed', !open);
      await wait(ms);
    }

    // Back to the opening state, instantly. Called while the panel is out of view.
    reset() {
      this.open.getAnimations().forEach((a) => a.cancel());
      this.open.classList.remove('is-on');
      this.off.classList.remove('is-on');
      this.toastEl.classList.remove('is-on');
      clearTimeout(this.toastTimer);
      this.moveFab(0, 0);
      this.root.classList.add('no-anim');
      this.apps.forEach((a) => a.classList.toggle('is-frozen', this.initial.includes(a.dataset.app)));
      void this.root.offsetWidth;
      this.root.classList.remove('no-anim');
      this.busy = false;
    }
  }

  // Plays a storyboard on a phone while it is on screen. A touch from the visitor pauses it,
  // and a few seconds later the phone quietly starts over.
  class Director {
    constructor(phone, script) {
      this.phone = phone;
      this.script = script;
      this.gen = 0;
      this.visible = false;
      this.paused = false;
      this.idle = 0;
      const io = new IntersectionObserver((entries) => {
        this.visible = entries[0].intersectionRatio >= 0.45;
        if (this.visible && !this.paused) this.start();
        else if (!this.visible) this.stop();
      }, { threshold: [0, 0.45, 1] });
      io.observe(phone.root);
      document.addEventListener('visibilitychange', () => { if (document.hidden) this.stop(); else if (this.visible && !this.paused) this.start(); });
      phone.root.addEventListener('pointerdown', () => this.hold(), true);
      phone.root.addEventListener('keydown', () => this.hold(), true);
    }

    start() {
      if (this.running) return;
      this.running = true;
      const gen = ++this.gen;
      const step = async (ms) => { await wait(ms); if (gen !== this.gen) throw STOP; };
      (async () => {
        try {
          await this.script(this.phone, step, true);
          while (gen === this.gen) await this.script(this.phone, step, false);
        } catch (e) { if (e !== STOP) throw e; }
      })();
    }

    stop() { this.gen++; this.running = false; }

    hold() {
      this.stop();
      this.paused = true;
      clearTimeout(this.idle);
      this.idle = setTimeout(async () => {
        this.paused = false;
        if (!this.visible || this.phone.busy) { this.hold(); return; }
        await this.phone.panel(false);
        this.phone.reset();
        await this.phone.panel(true);
        this.start();
      }, 6000);
    }
  }

  // Hero: slide to freeze everything, open one app again, then Ice Box reopens fresh.
  async function heroStory(p, step, first) {
    if (!first) { await p.panel(false); await step(520); p.reset(); await p.panel(true); }
    await step(first ? 1100 : 900);
    await p.slide(true);
    await step(1700);
    await p.launch(p.app('music'), true);
    await step(1400);
    await p.close(true);
    await step(1100);
  }

  // Auto Freeze: open a frozen app, press the power key, and it is frozen again.
  async function lockStory(p, step, first) {
    await step(first ? 1100 : 1400);
    await p.launch(p.app('camera'), true);
    await step(1500);
    await p.lock();
    await step(1200);
  }

  $$('[data-device]').forEach((root) => {
    const phone = new Phone(root);
    if (reduce || !('IntersectionObserver' in window)) return;
    const story = root.dataset.device === 'lock' ? lockStory : heroStory;
    new Director(phone, story);
  });
})();
