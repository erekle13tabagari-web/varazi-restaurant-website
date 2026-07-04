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

  /* ---- Signature dishes: infinite marquee, mouse-steered on hover ---- */
  const track = document.querySelector('.sig-track');
  if (track) {
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

  /* ---- Reservation form (demo handler) ---- */
  const form = document.querySelector('#reservation-form');
  if (form) {
    const note = form.querySelector('.form-note');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const first = ((((form.querySelector('[name=name]') || {}).value) || '').trim().split(' ')[0]) || '';
      const ka = window.__varaziLang === 'ka';
      if (note) {
        note.textContent = ka
          ? `მადლობა${first ? ', ' + first : ''}! თქვენი ჯავშანი მიღებულია — მალე დაგიდასტურებთ ტელეფონით.`
          : `Thank you${first ? ', ' + first : ''} — your table request has been received. We will confirm by phone shortly.`;
        note.classList.add('show');
      }
      form.reset();
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

  /* ---- Footer year ---- */
  const y = document.querySelector('#year');
  if (y) y.textContent = new Date().getFullYear();

})();
