/**
 * swarm.js — "the page builds itself" intro.
 *
 * The real site is already rendered; while <html> has .swarm (decided by the gate script in
 * <head>), unbuilt elements are invisible (space kept) and a few coloured cursors ("agents") build each
 * one as it scrolls into view: drag a selection box with W × H, show alignment guides, type the
 * text, click. Plays at most once every BUILD_EVERY_MS per browser (localStorage "swarmBuiltAt").
 *
 * URL overrides: ?build=1 forces it, ?build=0 disables it (the param is stripped from the URL).
 * prefers-reduced-motion and automated browsers always get the plain site.
 */
(function () {
  const STAMP_KEY = "swarmBuiltAt";

  // Keep in sync with the selector list in swarm.css.
  const TARGETS = [
    "#hero .max-w-3xl > *",
    ".section-header",
    "#about .space-y-4 > p",
    ".info-panel",
    ".promo-strip",
    "#projects .card",
    ".tile",
    ".exp-row",
    "#contact .grid > div:first-child",
    ".contact-link",
  ].join(",");

  // Text inside a built panel that gets typed afterwards.
  const INNER_TEXT = "h3, h4, p, li";

  // Agents by kind of work. Each prefers its own kind and helps with the others when idle;
  // QA has no role and just picks up whatever is waiting.
  const AGENTS = [
    { name: "Layout", color: "#ff4d6d", role: "block" }, // selection boxes: cards, tiles, buttons
    { name: "Copy", color: "#2f9bff", role: "text" },    // types the text
    { name: "Media", color: "#ff9f1c", role: "img" },    // carries the screenshots in
    { name: "Grid", color: "#8b5cf6", role: "block" },
    { name: "Type", color: "#06b6d4", role: "text" },
    { name: "Editor", color: "#ec4899", role: "text" },
    { name: "QA", color: "#10b981", role: null },
  ];

  // Global animation speed (1 = the original pacing).
  const BASE_SPEED = 1.7;

  const hasI18n = () => typeof i18n !== "undefined"; // top-level const, not on window
  const lang = () => (hasI18n() ? i18n.getCurrentLang() : "en");
  const tr = (key) => (hasI18n() ? i18n.t(lang(), key) : key);

  // Strip ?build=… so a reload doesn't force it again.
  try {
    const url = new URL(location.href);
    if (url.searchParams.has("build")) {
      url.searchParams.delete("build");
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  } catch (e) {}

  document.addEventListener("DOMContentLoaded", () => {
    addReplayLink();
    if (!document.documentElement.classList.contains("swarm")) return;
    // AOS would fight the ghost/reveal styles; the swarm replaces it on this visit.
    document.querySelectorAll("[data-aos]").forEach((el) => el.removeAttribute("data-aos"));
    const start = () => run();
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(start, start);
  });

  function addReplayLink() {
    const footerP = document.querySelector("footer .container > p");
    if (!footerP) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sw-replay";
    btn.dataset.i18n = "swarm_replay";
    btn.textContent = tr("swarm_replay");
    btn.addEventListener("click", () => {
      try { localStorage.removeItem(STAMP_KEY); } catch (e) {}
      location.href = location.pathname + "?build=1";
    });
    footerP.append(" · ", btn);
  }

  // ── Engine ─────────────────────────────────────────────────────────────────
  function run() {
    // queue: on-screen elements waiting to be built; imgs: screenshots waiting to be carried in.
    const S = { stopped: false, stamped: false, queue: [], imgs: [], busy: 0, done: 0 };
    const targets = Array.from(document.querySelectorAll(TARGETS));
    let total = targets.length; // grows as blocks hand their inner text over to be typed
    const pending = new Set(targets);

    const layer = div("", document.body);
    layer.id = "sw-layer";

    // Speed up when there's a backlog (visitor scrolling fast).
    const speed = () => BASE_SPEED * Math.min(2.5, 1 + Math.max(0, S.queue.length - 2) * 0.3);
    const ease = (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    function tween(ms, fn) {
      return new Promise((resolve) => {
        const d = ms / speed();
        let t0 = null;
        function frame(now) {
          if (S.stopped) return resolve();
          if (t0 === null) t0 = now;
          const p = Math.min(1, (now - t0) / d);
          fn(p);
          p < 1 ? requestAnimationFrame(frame) : resolve();
        }
        requestAnimationFrame(frame);
      });
    }
    const wait = (ms) => tween(ms, () => {});

    // ── Agents ──
    const agents = AGENTS.map((def, i) => {
      const el = div("sw-cursor", layer);
      el.innerHTML =
        `<svg viewBox="0 0 20 26"><path d="M2 2 L2 21 L7 16.5 L10.5 24 L13.5 22.7 L10.2 15.5 L17 15.5 Z" ` +
        `fill="${def.color}" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>` +
        `<span class="sw-name" style="background:${def.color}">${def.name}</span>`;
      const guides = ["h", "h", "v", "v"].map((k) => {
        const g = div("sw-guide " + k, layer);
        g.style.borderColor = def.color;
        return g;
      });
      const box = div("sw-box", layer);
      box.style.borderColor = def.color;
      box.style.background = def.color + "14";
      const dim = div("sw-dim", box);
      dim.style.background = def.color;
      const caret = div("sw-caret", layer);
      caret.style.background = def.color;
      // Start just outside the viewport, spread around the edges.
      const side = i % 4;
      const x = side === 0 ? -40 : side === 1 ? innerWidth + 40 : Math.random() * innerWidth;
      const y = side === 2 ? -40 : side === 3 ? innerHeight + 40 : Math.random() * innerHeight;
      const a = { ...def, i, el, guides, box, dim, caret, x, y };
      render(a);
      return a;
    });

    function render(a) {
      a.el.style.transform = `translate(${a.x - 2}px, ${a.y - 2}px)`;
    }

    // Curved flight towards a (possibly moving, e.g. while scrolling) point.
    async function move(a, getPt, ms, onFrame) {
      const sx = a.x, sy = a.y;
      const t = getPt();
      const dist = Math.hypot(t.x - sx, t.y - sy);
      const bend = (Math.random() - 0.5) * 0.6;
      await tween(ms || clamp(dist * 0.9, 250, 900), (p) => {
        const e = ease(p), pt = getPt();
        const cx = (sx + pt.x) / 2 - (pt.y - sy) * bend;
        const cy = (sy + pt.y) / 2 + (pt.x - sx) * bend;
        a.x = (1 - e) * (1 - e) * sx + 2 * (1 - e) * e * cx + e * e * pt.x;
        a.y = (1 - e) * (1 - e) * sy + 2 * (1 - e) * e * cy + e * e * pt.y;
        render(a);
        if (onFrame) onFrame();
      });
    }

    function setGuides(a, l, t, w, h, on) {
      const [top, bottom, left, right] = a.guides;
      top.style.top = t + "px";
      bottom.style.top = t + h + "px";
      left.style.left = l + "px";
      right.style.left = l + w + "px";
      a.guides.forEach((g) => g.classList.toggle("on", on));
    }

    function ripple(a) {
      const r = div("sw-ripple", layer);
      r.style.borderColor = a.color;
      r.style.left = a.x + "px";
      r.style.top = a.y + "px";
      setTimeout(() => r.remove(), 600);
    }

    function finish(el) {
      el.style.clipPath = "";
      el.classList.remove("sw-live", "sw-wait");
      el.classList.add("sw-done");
      if (pending.delete(el)) S.done++;
      updateHud();
    }

    // Block: drag out a selection box with live W × H, then drop the element in.
    // The panel appears empty: its text is handed to the text agents to be typed, and its
    // screenshots to Media to be carried in. Buttons and tech tags come with the panel.
    async function blockTask(a, el) {
      const R = () => el.getBoundingClientRect();
      const imgs = Array.from(el.querySelectorAll("img"));
      imgs.forEach((img) => img.classList.add("sw-await"));
      const texts = Array.from(el.querySelectorAll(INNER_TEXT)).filter(
        (t) => !t.closest(".btn, button, .tech-tag") && t.textContent.trim()
      );
      texts.forEach((t) => {
        t.classList.add("sw-wait");
        pending.add(t);
      });
      total += texts.length;
      await move(a, () => ({ x: R().left, y: R().top }));
      a.box.style.opacity = 1;
      let w = 0, h = 0;
      const paint = () => {
        const r = R();
        Object.assign(a.box.style, { left: r.left + "px", top: r.top + "px", width: w + "px", height: h + "px" });
        setGuides(a, r.left, r.top, w, h, true);
        return r;
      };
      const r0 = R();
      await tween(clamp(Math.hypot(r0.width, r0.height) * 1.1, 450, 1100), (p) => {
        const e = ease(p), r = R();
        w = r.width * e; h = r.height * e;
        a.dim.textContent = `${Math.round(w)} × ${Math.round(h)}`;
        paint();
        a.x = r.left + w; a.y = r.top + h;
        render(a);
      });
      ripple(a);
      finish(el);
      await tween(380, (p) => {
        const r = paint();
        a.box.style.opacity = 1 - p;
        a.x = r.left + w; a.y = r.top + h;
        render(a);
      });
      a.box.style.opacity = 0;
      setGuides(a, 0, 0, 0, 0, false);
      S.imgs.push(...imgs);
      texts.forEach((t) => io.observe(t)); // queued for typing once on screen
    }

    // Fly off the nearest side edge, grab the picture, carry it in and drop it into its frame.
    async function deliver(a, img) {
      const R = () => img.getBoundingClientRect();
      const fromLeft = R().left + R().width / 2 < innerWidth / 2;
      await move(a, () => ({ x: fromLeft ? -40 : innerWidth + 40, y: clamp(R().top + R().height / 2, 90, innerHeight - 90) }), 420);
      const clone = document.createElement("img");
      clone.alt = "";
      clone.src = img.currentSrc || img.src;
      clone.className = "sw-carry";
      clone.style.borderColor = a.color;
      layer.appendChild(clone);
      const cw = clamp(R().width * 0.35, 90, 190);
      const ratio = R().height / Math.max(1, R().width) || 0.6;
      const ch = cw * ratio;
      const hang = () => {
        Object.assign(clone.style, {
          left: a.x - cw / 2 + "px", top: a.y + 10 + "px", width: cw + "px", height: ch + "px",
          transform: "rotate(-4deg)",
        });
      };
      hang();
      await move(a, () => ({ x: R().left + R().width / 2, y: R().top + R().height / 2 - ch / 2 - 10 }), 600, hang);
      const sx = a.x - cw / 2, sy = a.y + 10;
      await tween(280, (p) => {
        const e = ease(p), r = R();
        Object.assign(clone.style, {
          left: sx + (r.left - sx) * e + "px", top: sy + (r.top - sy) * e + "px",
          width: cw + (r.width - cw) * e + "px", height: ch + (r.height - ch) * e + "px",
          transform: `rotate(${-4 * (1 - e)}deg)`,
        });
        a.x = r.left + r.width / 2; a.y = r.top + r.height / 2;
        render(a);
      });
      ripple(a);
      img.classList.remove("sw-await");
      clone.style.opacity = 0;
      setTimeout(() => clone.remove(), 400);
      await wait(120);
    }

    // The text's real line boxes (relative to el), so empty space — e.g. a grid cell stretched
    // taller than its text — is never "typed".
    function lineBoxes(el) {
      const r = el.getBoundingClientRect();
      const range = document.createRange();
      range.selectNodeContents(el);
      const rects = Array.from(range.getClientRects()).filter((q) => q.width > 1 && q.height > 1);
      rects.sort((p, q) => p.top - q.top || p.left - q.left);
      const lines = [];
      rects.forEach((q) => {
        const last = lines[lines.length - 1];
        const cy = (q.top + q.bottom) / 2;
        if (last && cy > last.top && cy < last.bottom) {
          last.left = Math.min(last.left, q.left); last.right = Math.max(last.right, q.right);
          last.top = Math.min(last.top, q.top); last.bottom = Math.max(last.bottom, q.bottom);
        } else {
          lines.push({ left: q.left, right: q.right, top: q.top, bottom: q.bottom });
        }
      });
      return lines.map((l) => ({ left: l.left - r.left, right: l.right - r.left, top: l.top - r.top, bottom: l.bottom - r.top }));
    }

    // Text: typed out line by line, left → right.
    async function textTask(a, el) {
      const R = () => el.getBoundingClientRect();
      const lines = lineBoxes(el);
      if (!lines.length) return finish(el);
      const widths = lines.map((l) => l.right - l.left);
      const total = widths.reduce((x, y) => x + y, 0);
      const n = Math.max(4, el.textContent.trim().length);
      const box = {
        left: Math.min(...lines.map((l) => l.left)), right: Math.max(...lines.map((l) => l.right)),
        top: lines[0].top, bottom: lines[lines.length - 1].bottom,
      };

      await move(a, () => ({ x: R().left + lines[0].left, y: R().top + lines[0].top + (lines[0].bottom - lines[0].top) * 0.8 }));
      el.classList.add("sw-live");
      a.caret.style.opacity = 1;
      await tween(clamp(n * (lines.length === 1 ? 45 : 16), 500, 2800), (p) => {
        const r = R();
        setGuides(a, r.left + box.left, r.top + box.top, box.right - box.left, box.bottom - box.top, true);
        let d = (Math.floor(p * n) / n) * total; // typewriter steps
        let k = 0;
        while (k < lines.length - 1 && d > widths[k]) { d -= widths[k]; k++; }
        const L = lines[k], x = L.left + Math.min(d, widths[k]);
        // Everything above the current line + the current line up to the caret
        // (-40px on the left so list bullets show with their line).
        el.style.clipPath =
          `polygon(-40px -8px, ${r.width + 8}px -8px, ${r.width + 8}px ${L.top}px, ${x}px ${L.top}px, ` +
          `${x}px ${L.bottom}px, -40px ${L.bottom}px)`;
        const cx = r.left + x, cy = r.top + L.top, ch = L.bottom - L.top;
        Object.assign(a.caret.style, { left: cx + "px", top: cy + "px", height: ch + "px" });
        a.x = cx + 3; a.y = cy + ch * 0.75;
        render(a);
      });
      a.caret.style.opacity = 0;
      finish(el);
      setGuides(a, 0, 0, 0, 0, false);
    }

    const isText = (el) =>
      /^(P|H1|H2|H3|H4|LI)$/.test(el.tagName) || el.classList.contains("section-header") || el.matches("#contact .grid > div:first-child");

    // ── Work queue: only what's on screen gets built; what scrolls past just appears. ──
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!pending.has(target) || target._taken) return;
          if (isIntersecting) {
            if (!S.queue.includes(target)) {
              S.queue.push(target);
              S.queue.sort((x, y) => (x.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
            }
          } else if (S.queue.includes(target)) {
            S.queue.splice(S.queue.indexOf(target), 1);
            finish(target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => io.observe(t));

    // Safety net: a fast scroll can jump over an element without the observer ever seeing it
    // on screen; anything already scrolled past and not being worked on just appears.
    let scrollQueued = false;
    const onScroll = () => {
      if (scrollQueued) return;
      scrollQueued = true;
      requestAnimationFrame(() => {
        scrollQueued = false;
        pending.forEach((el) => {
          if (el._taken || el.getBoundingClientRect().bottom > 0) return;
          if (S.queue.includes(el)) S.queue.splice(S.queue.indexOf(el), 1);
          finish(el);
        });
      });
    };
    addEventListener("scroll", onScroll, { passive: true });

    // Keyboard users: anything focused is built instantly.
    const onFocus = (e) => {
      const t = e.target.closest(TARGETS);
      if (t && pending.has(t)) {
        if (S.queue.includes(t)) S.queue.splice(S.queue.indexOf(t), 1);
        finish(t);
      }
    };
    document.addEventListener("focusin", onFocus);

    // Idle agents wait along the right edge.
    const parkingSpot = (i) => ({ x: innerWidth - 100, y: 110 + i * 56 });

    // Own kind of work first; otherwise help with whatever is waiting.
    function takeTask(a) {
      const pick = (kind) => {
        if (kind === "img") return S.imgs.length ? { kind, el: S.imgs.shift() } : null;
        const i = S.queue.findIndex((el) => (isText(el) ? "text" : "block") === kind);
        return i < 0 ? null : { kind, el: S.queue.splice(i, 1)[0] };
      };
      return pick(a.role) || pick("img") || pick("block") || pick("text");
    }

    async function agentLoop(a) {
      await wait(300 + a.i * 60); // let the IntersectionObserver fill the queue first
      while (!S.stopped && (pending.size || S.imgs.length)) {
        const task = takeTask(a);
        if (!task) {
          if (!S.busy) stamp(); // first screen built → count it as seen
          await move(a, () => parkingSpot(a.i), 700);
          await wait(250);
          continue;
        }
        task.el._taken = true;
        S.busy++;
        try {
          if (task.kind === "img") await deliver(a, task.el);
          else await (task.kind === "text" ? textTask(a, task.el) : blockTask(a, task.el));
        } finally {
          S.busy--;
        }
      }
      if (!S.stopped) await move(a, () => ({ x: innerWidth + 60, y: a.y }), 600);
    }

    function stamp() {
      if (S.stamped) return;
      S.stamped = true;
      try { localStorage.setItem(STAMP_KEY, String(Date.now())); } catch (e) {}
    }

    function teardown() {
      io.disconnect();
      document.removeEventListener("focusin", onFocus);
      removeEventListener("scroll", onScroll);
      layer.remove();
    }

    function skip() {
      S.stopped = true;
      stamp();
      pending.forEach((el) => finish(el));
      document.querySelectorAll(".sw-await").forEach((img) => img.classList.remove("sw-await"));
      teardown();
      hud.remove();
    }

    // ── HUD ──
    const hud = div("", document.body);
    hud.id = "sw-hud";
    hud.setAttribute("aria-hidden", "true");
    hud.innerHTML =
      `<span class="sw-dots">${AGENTS.map((d) => `<i style="background:${d.color}"></i>`).join("")}</span>` +
      `<span class="sw-label"></span><span class="sw-count"></span><button type="button"></button>`;
    hud.querySelector("button").addEventListener("click", skip);
    function updateHud() {
      if (!hud.isConnected) return;
      const doneAll = S.done >= total;
      hud.querySelector(".sw-label").textContent = tr(doneAll ? "swarm_done" : "swarm_building").replace("{n}", AGENTS.length);
      hud.querySelector(".sw-count").textContent = doneAll ? "" : `${S.done}/${total}`;
      hud.querySelector("button").textContent = tr("swarm_skip");
      hud.querySelector("button").hidden = doneAll;
    }
    updateHud();

    Promise.all(agents.map(agentLoop)).then(() => {
      if (S.stopped) return;
      stamp();
      teardown();
      updateHud();
      setTimeout(() => { hud.style.opacity = 0; }, 2500);
      setTimeout(() => hud.remove(), 3000);
    });
  }

  function div(cls, parent) {
    const d = document.createElement("div");
    if (cls) d.className = cls;
    parent.appendChild(d);
    return d;
  }
})();
