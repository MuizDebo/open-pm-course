// Course analytics events. Loaded only when a GoatCounter code is set in astro.config.mjs.
// GoatCounter counts page views on its own; this adds a few events that answer:
//   - what do people search for?           -> "search: <query>"
//   - which outside resources do they open? -> "outbound: <host/path>"
//   - which cross-references do they follow?-> "crossref: <lesson path>"
//   - do they read as far as the assignment?-> "reached-assignment: <lesson path>"
//   - do they plan their study time?        -> "planner: download"
// No cookies, no user identifiers. See the Privacy page on the site.
(() => {
  const BASE = '/open-pm-course';
  const here = location.pathname.replace(BASE, '') || '/';
  const queue = [];

  const send = (path, title) => {
    const gc = window.goatcounter;
    if (gc && typeof gc.count === 'function') gc.count({ path, title: title || path, event: true });
    else queue.push([path, title]);
  };
  // count.js loads async; flush anything sent before it arrived.
  let tries = 0;
  const flusher = setInterval(() => {
    const gc = window.goatcounter;
    if (gc && typeof gc.count === 'function') {
      while (queue.length) {
        const [p, t] = queue.shift();
        gc.count({ path: p, title: t || p, event: true });
      }
      clearInterval(flusher);
    } else if (++tries > 40) clearInterval(flusher);
  }, 500);
  window.opmTrack = send;

  // Search terms: one event per settled query, at least three characters.
  let searchTimer;
  let lastQuery = '';
  document.addEventListener('input', (e) => {
    const input = e.target;
    if (!(input instanceof HTMLInputElement) || !input.closest('site-search')) return;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const q = input.value.trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 60);
      if (q.length < 3 || q === lastQuery) return;
      lastQuery = q;
      send(`search: ${q}`, 'Search');
    }, 1500);
  });

  // Outbound links and cross-references.
  document.addEventListener(
    'click',
    (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null;
      if (!a) return;
      let url;
      try {
        url = new URL(a.href, location.href);
      } catch {
        return;
      }
      if (url.host === location.host) {
        if (a.classList.contains('xref')) send(`crossref: ${url.pathname.replace(BASE, '')}`, `Cross-reference from ${here}`);
        return;
      }
      send(`outbound: ${url.host}${url.pathname}`.slice(0, 120), `Outbound from ${here}`);
    },
    true,
  );

  // Read as far as the assignment panel.
  const panel = document.querySelector('.sl-markdown-content .assignment');
  if (panel && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        send(`reached-assignment: ${here}`, 'Reached the assignment');
        io.disconnect();
      }
    });
    io.observe(panel);
  }
})();
