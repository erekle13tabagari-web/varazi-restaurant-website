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

  /* ---- Gallery lightbox: click a photo to enlarge, arrows to browse ---- */
  const galGrid = document.querySelector('.gal-grid');
  if (galGrid) {
    const tiles = [].slice.call(galGrid.querySelectorAll('.gal-item'));
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Photo viewer');
    box.innerHTML =
      '<button class="lb-btn lb-close" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3l10 10M13 3 3 13"/></svg></button>' +
      '<button class="lb-btn lb-prev" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button>' +
      '<button class="lb-btn lb-next" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button>' +
      '<div class="lb-stage"><div class="lb-frame"><img class="lb-img" alt=""></div>' +
      '<div class="lb-cap"><span class="lb-title"></span><span class="lb-count"></span>' +
      '<a class="lb-menu" hidden>View in menu</a></div></div>';
    document.body.appendChild(box);

    const imgEl = box.querySelector('.lb-img');
    const titleEl = box.querySelector('.lb-title');
    const countEl = box.querySelector('.lb-count');
    const menuEl = box.querySelector('.lb-menu');
    const prevBtn = box.querySelector('.lb-prev');
    const nextBtn = box.querySelector('.lb-next');

    let shots = [];   // the tiles the active filter is currently showing
    let at = 0;
    let lastFocus = null;

    const show = (i) => {
      if (!shots.length) return;
      at = (i + shots.length) % shots.length;
      const src = shots[at].querySelector('img');
      const paint = () => imgEl.classList.add('ready');
      imgEl.classList.remove('ready');
      imgEl.onload = paint;
      imgEl.src = src.currentSrc || src.src;
      imgEl.alt = src.alt || '';
      if (imgEl.complete) paint();
      titleEl.textContent = src.alt || '';
      countEl.textContent = (at + 1) + ' / ' + shots.length;
      const href = shots[at].getAttribute('href');
      if (href) { menuEl.href = href; menuEl.hidden = false; } else { menuEl.hidden = true; }
      const solo = shots.length < 2;
      prevBtn.hidden = solo;
      nextBtn.hidden = solo;
      [1, -1].forEach(d => {            // preload neighbours so arrows feel instant
        const n = shots[(at + d + shots.length) % shots.length].querySelector('img');
        if (n) { const pre = new Image(); pre.src = n.currentSrc || n.src; }
      });
    };

    const open = (tile) => {
      shots = tiles.filter(t => !t.hidden);
      const i = shots.indexOf(tile);
      if (i < 0) return;
      lastFocus = document.activeElement;
      show(i);
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
      nextBtn.focus();
    };
    const close = () => {
      box.classList.remove('open');
      document.body.style.overflow = '';
      imgEl.classList.remove('ready');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    tiles.forEach(t => {
      if (t.tagName !== 'A') { t.tabIndex = 0; t.setAttribute('role', 'button'); }
      /* Food tiles are menu links — the lightbox offers that link instead of following it */
      t.addEventListener('click', (e) => { e.preventDefault(); open(t); });
      t.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(t); }
      });
    });

    prevBtn.addEventListener('click', () => show(at - 1));
    nextBtn.addEventListener('click', () => show(at + 1));
    box.querySelector('.lb-close').addEventListener('click', close);
    box.addEventListener('click', (e) => {          // click the backdrop to dismiss
      if (e.target === box || e.target.classList.contains('lb-stage') ||
          e.target.classList.contains('lb-frame') || e.target.classList.contains('lb-cap')) close();
    });
    document.addEventListener('keydown', (e) => {
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(at - 1);
      else if (e.key === 'ArrowRight') show(at + 1);
    });

    let swipeFrom = null;
    box.addEventListener('touchstart', (e) => { swipeFrom = e.changedTouches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', (e) => {
      if (swipeFrom === null) return;
      const dx = e.changedTouches[0].clientX - swipeFrom;
      if (Math.abs(dx) > 45) show(at + (dx < 0 ? 1 : -1));
      swipeFrom = null;
    }, { passive: true });
  }

  /* ---- Reels & clips play on the site instead of opening Instagram ----
     A tile plays inline as soon as it carries one of these attributes:
       data-video="assets/video/clip.mp4"   self-hosted file  (most reliable)
       data-youtube="VIDEO_ID"              YouTube / Shorts
       data-reel="REEL_ID"                  Instagram reel
     Tiles with none of them keep their existing link-out behaviour. */
  {
    const players = [].slice.call(document.querySelectorAll('[data-video],[data-youtube],[data-reel]'));
    if (players.length) {
      const modal = document.createElement('div');
      modal.className = 'lightbox vbox';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Video player');
      modal.innerHTML =
        '<button class="lb-btn lb-close" aria-label="Close"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 3l10 10M13 3 3 13"/></svg></button>' +
        '<div class="vbox-frame"></div>';
      document.body.appendChild(modal);

      const frame = modal.querySelector('.vbox-frame');
      let lastFocus = null;

      const stop = () => {
        modal.classList.remove('open');
        frame.innerHTML = '';                 // removing the player is what stops the sound
        document.body.style.overflow = '';
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      };

      const play = (card) => {
        const mp4 = card.dataset.video, yt = card.dataset.youtube, reel = card.dataset.reel;
        frame.className = 'vbox-frame' + (card.dataset.wide === 'true' ? ' wide' : '') + (reel ? ' ig' : '');
        if (mp4) {
          frame.innerHTML = '<video controls autoplay playsinline src="' + mp4 + '"></video>';
        } else if (yt) {
          frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + yt +
            '?autoplay=1&rel=0" title="Varazi video" allow="autoplay; encrypted-media; picture-in-picture; web-share"' +
            ' allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
        } else if (reel) {
          frame.innerHTML = '<iframe src="https://www.instagram.com/reel/' + reel +
            '/embed/" title="Varazi reel" allowtransparency="true" allowfullscreen' +
            ' referrerpolicy="strict-origin-when-cross-origin" scrolling="no"></iframe>';
        }
        lastFocus = document.activeElement;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        modal.querySelector('.lb-close').focus();
      };

      players.forEach(card => {
        card.style.cursor = 'pointer';
        if (card.tagName !== 'A') { card.tabIndex = 0; card.setAttribute('role', 'button'); }
        card.addEventListener('click', (e) => { e.preventDefault(); play(card); });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(card); }
        });
      });

      modal.querySelector('.lb-close').addEventListener('click', stop);
      modal.addEventListener('click', (e) => { if (e.target === modal) stop(); });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) stop();
      });
    }
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
