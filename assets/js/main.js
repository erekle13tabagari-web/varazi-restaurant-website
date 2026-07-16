/* ============================================================
   VARAZI — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Sticky nav background on scroll ---- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  if (toggle && mobile) {
    const close = () => { toggle.classList.remove('open'); mobile.classList.remove('open'); document.body.style.overflow = ''; };
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      mobile.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  /* ---- Scroll reveal ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }
  // Safety net: if the observer never fired (e.g. tab loaded in the background,
  // throttled renderer), force everything visible so content is never stuck hidden.
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (reveals.length && !document.querySelector('.reveal.in')) {
        reveals.forEach(el => el.classList.add('in'));
      }
    }, 1800);
  });

  /* ---- Signature dishes: infinite marquee, mouse-steered on hover ----
     Skipped on touch devices: there is no cursor to steer with, so the CSS
     turns the same markup into a native swipe strip instead. */
  const track = document.querySelector('.sig-track');
  const coarsePointer = window.matchMedia && window.matchMedia('(hover:none)').matches;
  if (track && !coarsePointer) {
    const viewport = track.parentElement;
    const originals = [].slice.call(track.children);
    // Duplicate the cards so the loop is seamless
    originals.forEach((c) => {
      const clone = c.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
    track.querySelectorAll('img').forEach(img => img.addEventListener('dragstart', e => e.preventDefault()));

    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const baseSpeed = reduce ? 0 : 0.55;   // gentle auto-scroll (px / frame)
    const maxSteer = 7;                     // top steer speed when hovering (px / frame)

    let pos = 0, vel = 0, hovering = false, ratio = 0.5, setW = 1;
    const measure = () => {
      const firstClone = track.children[originals.length];
      setW = (firstClone ? firstClone.offsetLeft : track.scrollWidth / 2) || 1;
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);

    const frame = () => {
      let target;
      if (hovering) {
        let d = (ratio - 0.5) * 2;          // -1 (far left) .. +1 (far right)
        if (Math.abs(d) < 0.14) d = 0;      // dead zone in the middle -> rest
        target = d * maxSteer;
      } else {
        target = baseSpeed;
      }
      vel += (target - vel) * 0.07;         // ease toward the target speed
      pos += vel;
      pos = ((pos % setW) + setW) % setW;   // wrap -> endless loop, no jump
      track.style.transform = `translateX(${-pos}px)`;
      requestAnimationFrame(frame);
    };

    viewport.addEventListener('mouseenter', () => { hovering = true; });
    viewport.addEventListener('mouseleave', () => { hovering = false; });
    viewport.addEventListener('mousemove', (e) => {
      const r = viewport.getBoundingClientRect();
      ratio = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    });

    requestAnimationFrame(frame);
  }

  /* ---- Back-to-top button (appears after ~2 screens of scroll) ---- */
  (function () {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(btn);
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const toggle = () => btn.classList.toggle('show', window.scrollY > window.innerHeight * 2);
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
  })();

  /* ---- Menu page: category tabs (smooth scroll + active) ---- */
  const tabs = document.querySelectorAll('.menu-tabs button');
  if (tabs.length) {
    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.cat);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    const cats = document.querySelectorAll('.menu-cat');
    const catObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === e.target.id));
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    cats.forEach(c => catObs.observe(c));
  }

  /* ---- Instagram reels: arrows + edge fades in place of a scrollbar ---- */
  const reelsTrack = document.querySelector('.reels-track');
  const reelsView = reelsTrack && reelsTrack.closest('.reels-viewport');
  if (reelsTrack && reelsView) {
    const prev = reelsView.querySelector('.reels-nav.prev');
    const next = reelsView.querySelector('.reels-nav.next');

    // Travel two cards at a time, but never more than a screenful
    const step = () => {
      const card = reelsTrack.querySelector('.reel-card');
      const gap = parseFloat(getComputedStyle(reelsTrack).columnGap) || 16;
      const one = card ? card.getBoundingClientRect().width + gap : 200;
      return Math.min(one * 2, reelsTrack.clientWidth);
    };
    const update = () => {
      const max = reelsTrack.scrollWidth - reelsTrack.clientWidth;
      const x = reelsTrack.scrollLeft;
      const atStart = x <= 4, atEnd = x >= max - 4;
      reelsView.classList.toggle('can-prev', !atStart);
      reelsView.classList.toggle('can-next', !atEnd && max > 4);
      if (prev) prev.disabled = atStart;
      if (next) next.disabled = atEnd || max <= 4;
    };

    if (prev) prev.addEventListener('click', () => reelsTrack.scrollBy({ left: -step(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => reelsTrack.scrollBy({ left: step(), behavior: 'smooth' }));
    reelsTrack.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('load', update);
    update();
  }

  /* ---- Gallery tiles: spin the brand mark until each photo arrives ---- */
  document.querySelectorAll('.gal-item img').forEach(img => {
    const tile = img.closest('.gal-item');
    if (!tile || img.complete) return;
    tile.classList.add('is-loading');
    const done = () => tile.classList.remove('is-loading');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  });

  /* ---- Reservation form (demo handler) ---- */
  const form = document.querySelector('#reservation-form');
  if (form) {
    const note = form.querySelector('.form-note');
    const submit = form.querySelector('[type=submit]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const first = ((((form.querySelector('[name=name]') || {}).value) || '').trim().split(' ')[0]) || '';
      const ka = window.__varaziLang === 'ka';
      if (note) note.classList.remove('show');

      // Show the mark turning while the request is "sent", then confirm.
      if (submit) submit.classList.add('is-sending');
      window.setTimeout(() => {
        if (submit) submit.classList.remove('is-sending');
        if (note) {
          note.textContent = ka
            ? `მადლობა${first ? ', ' + first : ''}! თქვენი ჯავშანი მიღებულია — მალე დაგიდასტურებთ ტელეფონით.`
            : `Thank you${first ? ', ' + first : ''} — your table request has been received. We will confirm by phone shortly.`;
          note.classList.add('show');
        }
        form.reset();
      }, 900);
    });
  }

  /* ---- Newsletter (demo) ---- */
  document.querySelectorAll('.news form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = f.querySelector('input');
      if (input) { input.value = ''; input.placeholder = 'Subscribed ✓'; }
    });
  });

  /* ---- Gallery page: Photos/Video panels + photo category filters ---- */
  const galTabs = document.querySelectorAll('.gallery-tabs button');
  if (galTabs.length) {
    const panels = document.querySelectorAll('.gal-panel');
    const filters = document.querySelectorAll('.gal-filters button');
    const items = document.querySelectorAll('.gal-grid .gal-item');
    const empty = document.querySelector('.gal-empty');

    const showPanel = (name) => {
      galTabs.forEach(b => b.classList.toggle('active', b.dataset.panel === name));
      panels.forEach(p => p.classList.toggle('active', p.id === name));
    };
    const applyFilter = (cat) => {
      filters.forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
      let shown = 0;
      items.forEach(el => {
        const show = cat === 'all' || el.dataset.cat === cat;
        el.hidden = !show;
        if (show) shown++;
      });
      if (empty) empty.style.display = shown ? 'none' : 'block';
    };

    galTabs.forEach(b => b.addEventListener('click', () => showPanel(b.dataset.panel)));
    filters.forEach(b => b.addEventListener('click', () => applyFilter(b.dataset.filter)));

    // Deep links: #video, #food, #interior, #exterior — used by "The Ambiance" on the home page
    const fromHash = () => {
      const h = (location.hash || '').replace('#', '');
      if (h === 'video') { showPanel('video'); return true; }
      if (h === 'food' || h === 'interior' || h === 'exterior') { showPanel('photos'); applyFilter(h); return true; }
      return false;
    };
    if (fromHash()) {
      const top = document.querySelector('#gallery-top');
      if (top) requestAnimationFrame(() => top.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    window.addEventListener('hashchange', fromHash);
  }

  /* ---- WhatsApp floating contact ---- */
  const waFab = document.querySelector('.wa-fab');
  const waPop = document.querySelector('.wa-pop');
  if (waFab && waPop) {
    const setOpen = (open) => {
      waPop.classList.toggle('open', open);
      waFab.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    waFab.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!waPop.classList.contains('open'));
    });
    const waClose = waPop.querySelector('.wa-close');
    if (waClose) waClose.addEventListener('click', () => setOpen(false));
    document.addEventListener('click', (e) => {
      if (!waPop.contains(e.target) && !waFab.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---- Footer year ---- */
  const y = document.querySelector('#year');
  if (y) y.textContent = new Date().getFullYear();

})();
