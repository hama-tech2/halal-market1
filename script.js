/* ══════════════════════════════════════════════════
   HALAL MARKET v3 — script.js
   Full GSAP animations + all interactions
══════════════════════════════════════════════════ */

/* ── REVIEWS DATA ─────────────────────────────── */
const REVIEWS = [
  {
    name: 'ئاکۆ عومەر',
    ckb: 'کاڵاکانی تازە و نرخەکانی زۆر باشن. دووکانی پێویستم بۆ مانگی کرد!',
    ar:  'المنتجات طازجة والأسعار ممتازة. أصبح متجري المفضل!',
    en:  'Fresh products and great prices. My go-to store every week!',
    stars: 5
  },
  {
    name: 'سارا حسن',
    ckb: 'خزمەتگوزاری زۆر باشە و شوێنەکەش بیناوی و سەلامەتە.',
    ar:  'الخدمة رائعة والمكان نظيف جداً.',
    en:  'Wonderful service and very clean place.',
    stars: 5
  },
  {
    name: 'محمد خالد',
    ckb: 'داشکاندنەکانیان هەموو هەفتەیەک نوێن. پیشنیاری دەکەم.',
    ar:  'العروض الأسبوعية دائماً جديدة. أنصح بالزيارة.',
    en:  'Weekly offers are always fresh. Highly recommended.',
    stars: 5
  },
  {
    name: 'ریوار بەکر',
    ckb: 'برنج و کاڵای خواردنی کوالێتییەکەی زۆر باشە.',
    ar:  'جودة الأرز والمواد الغذائية ممتازة.',
    en:  'Rice and food quality is excellent.',
    stars: 4
  },
  {
    name: 'دلاور ئەحمەد',
    ckb: 'هەموو ئەوەی پێویستمە لێرەدا دەدۆزمەوە. زۆر سوپاس.',
    ar:  'أجد كل ما أحتاجه هنا. شكراً جزيلاً.',
    en:  'I find everything I need here. Thank you so much.',
    stars: 5
  },
];

/* ── TRANSLATIONS ─────────────────────────────── */
const TX = {
  ckb: {
    eyebrow: 'هەولێر · کوردستان',
    sub: 'تازەترین کاڵا · باشترین نرخ · دووکانی متمانەپێکراوی کوردستان',
    btn1: 'داشکاندنەکان', btn2: 'شوێنەکانمان',
    promoTitle: 'داشکاندنەکان', promoSub: 'ئۆفەرە تازەکان',
    b1lbl: 'لقی یەکەم', b2lbl: 'لقی دووەم',
    mapBtn1: 'شوێنی لقی ١', mapBtn2: 'شوێنی لقی ٢',
    aboutTitle: 'دەربارەمان', aboutSub: 'کێین و چییین',
    aboutTag: 'دەربارە',
    aboutCapH: 'حلال مارکێت',
    aboutCapP: 'دووکانێکی تازەیی و سەلامەتی خواردنە کە بە باشترین کوالێتی و نرخ خزمەتی کڕیارەکانی هەولێر دەکات. لقی یەکەم لە بنصڵاوە، لقی دووەم لە بەحرکەیە.',
    locsTitle: 'شوێنەکانمان', locsSub: 'هەر دوو لقەکانمان',
    loc1: 'حلال مارکێت – لقی یەکەم',
    loc1addr: 'جووتسایدی بنصڵاوە تەنيشت مزگەوتی اسراو و ميعراج',
    loc2: 'حلال مارکێت – لقی دووەم',
    loc2addr: 'بەحركە - بەرامبەر بەنزینخانەی بەحركە',
    open: 'کراوەیە',
    revTitle: 'نرخاندنی کڕیارەکان', revSub: 'نرخاندنی کڕیارەکانمان',
    revCount: '+٢٠٠ نرخاندن',
    workerTitle: 'کارمەندی پێویستمانە',
    workerSub: 'ئەگەر دەتەوێت کار بکەیت، پەیوەندیمان بکە',
    wc1tag: 'لقی یەکەم', wc1h: 'حلال مارکێت ١',
    wc1p: 'ئەگەر دەتەوێت کارمەندی حلال مارکێت لقی یەکەم بیت، پەیامێک بنێرە یان پەیوەندیمان بکە.',
    wc2tag: 'لقی دووەم', wc2h: 'حلال مارکێت ٢',
    wc2p: 'ئەگەر دەتەوێت کارمەندی حلال مارکێت لقی دووەم بیت، پەیامێک بنێرە یان پەیوەندیمان بکە.',
    waBtn: 'پەیام بنێرە',
    copy: '© ٢٠٢٥ حلال مارکێت · هەولێر',
    navHome:'سەرەکی', navDisc:'داشکاندن', navLocs:'شوێن', navWork:'کارمەند', navAbout:'دەربارە',
    drHome:'سەرەکی', drDisc:'داشکاندن', drLocs:'شوێنەکان', drWork:'کارمەند', drAbout:'دەربارە',
    dnHome:'سەرەکی', dnDisc:'داشکاندن', dnLocs:'شوێن', dnWork:'کارمەند', dnAbout:'دەربارە',
    langLabel: 'عربي',
  },
  ar: {
    eyebrow: 'أربيل · كوردستان',
    sub: 'أطازج المنتجات · أفضل الأسعار · متجرك الموثوق في كوردستان',
    btn1: 'العروض', btn2: 'فروعنا',
    promoTitle: 'العروض', promoSub: 'أحدث الأسعار',
    b1lbl: 'الفرع الأول', b2lbl: 'الفرع الثاني',
    mapBtn1: 'موقع الفرع ١', mapBtn2: 'موقع الفرع ٢',
    aboutTitle: 'عن هلال ماركت', aboutSub: 'من نحن وماذا نقدم',
    aboutTag: 'عنّا',
    aboutCapH: 'هلال ماركت',
    aboutCapP: 'متجر متخصص بالمواد الغذائية الطازجة بأعلى جودة وأفضل الأسعار يخدم عملاء أربيل. الفرع الأول في بنسلاوة، الفرع الثاني في بحرگة.',
    locsTitle: 'فروعنا', locsSub: 'كلا الفرعين',
    loc1: 'هلال ماركت – الفرع الأول',
    loc1addr: 'بنسلاوة سايدين بجانب جامع الاسراء والمعراج',
    loc2: 'هلال ماركت – الفرع الثاني',
    loc2addr: 'بحرگة - مقابل محطة وقود بحرگة',
    open: 'مفتوح',
    revTitle: 'آراء عملائنا', revSub: 'ماذا يقول عملاؤنا',
    revCount: '+٢٠٠ تقييم',
    workerTitle: 'نحن نبحث عن موظفين',
    workerSub: 'إذا أردت العمل معنا، تواصل معنا',
    wc1tag: 'الفرع الأول', wc1h: 'هلال ماركت ١',
    wc1p: 'إذا أردت العمل في هلال ماركت الفرع الأول، أرسل رسالة أو اتصل بنا.',
    wc2tag: 'الفرع الثاني', wc2h: 'هلال ماركت ٢',
    wc2p: 'إذا أردت العمل في هلال ماركت الفرع الثاني، أرسل رسالة أو اتصل بنا.',
    waBtn: 'أرسل رسالة',
    copy: '© ٢٠٢٥ هلال ماركت · أربيل',
    navHome:'الرئيسية', navDisc:'العروض', navLocs:'الفروع', navWork:'التوظيف', navAbout:'عنّا',
    drHome:'الرئيسية', drDisc:'العروض', drLocs:'الفروع', drWork:'التوظيف', drAbout:'عنّا',
    dnHome:'الرئيسية', dnDisc:'العروض', dnLocs:'الفروع', dnWork:'التوظيف', dnAbout:'عنّا',
    langLabel: 'عربي',
  },
  en: {
    eyebrow: 'Erbil · Kurdistan',
    sub: 'Freshest products · Best prices · Your trusted supermarket in Kurdistan',
    btn1: 'View Deals', btn2: 'Our Locations',
    promoTitle: 'Discounts', promoSub: 'Latest offers',
    b1lbl: 'Branch One', b2lbl: 'Branch Two',
    mapBtn1: 'Location 1', mapBtn2: 'Location 2',
    aboutTitle: 'About Us', aboutSub: 'Who we are',
    aboutTag: 'About',
    aboutCapH: 'Halal Market',
    aboutCapP: 'A fresh and quality grocery store serving Erbil customers with the best products at great prices. Branch One in Binaslawa, Branch Two in Baharka.',
    locsTitle: 'Our Locations', locsSub: 'Both our branches',
    loc1: 'Halal Market – Branch One',
    loc1addr: "Binaslawa Two-Way, Next to Al-Isra and Al-Mi'raj Mosque",
    loc2: 'Halal Market – Branch Two',
    loc2addr: 'Baharka - Opposite Baharka Gas Station',
    open: 'Open Now',
    revTitle: 'Customer Reviews', revSub: 'What our customers say',
    revCount: '+200 reviews',
    workerTitle: 'We Are Hiring',
    workerSub: 'If you want to work with us, get in touch',
    wc1tag: 'Branch One', wc1h: 'Halal Market 1',
    wc1p: 'If you want to work at Halal Market Branch One, send us a message or call us.',
    wc2tag: 'Branch Two', wc2h: 'Halal Market 2',
    wc2p: 'If you want to work at Halal Market Branch Two, send us a message or call us.',
    waBtn: 'Send Message',
    copy: '© 2025 Halal Market · Erbil',
    navHome:'Home', navDisc:'Deals', navLocs:'Locations', navWork:'Jobs', navAbout:'About',
    drHome:'Home', drDisc:'Discounts', drLocs:'Locations', drWork:'Jobs', drAbout:'About',
    dnHome:'Home', dnDisc:'Deals', dnLocs:'Locations', dnWork:'Jobs', dnAbout:'About',
    langLabel: 'EN',
  },
};

/* ── STATE ────────────────────────────────────── */
let lang = 'ckb';
let drawerOpen = false;
let langMenuOpen = false;

/* ── HELPERS ──────────────────────────────────── */
const $ = id => document.getElementById(id);
function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
function $s(id, v) { const e = $(id); if (e) e.textContent = v; }
function $h(id, v) { const e = $(id); if (e) e.innerHTML = v; }

/* ══════════════════════════════════════════════
   GSAP SETUP
══════════════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger);

/* ── HERO VIDEO ───────────────────────────────  */
(function initVideo() {
  const v = $('hero-vid');
  if (!v) return;
  const p = v.play();
  if (p !== undefined) {
    p.catch(() => { v.muted = true; v.play().catch(() => {}); });
  }
  v.addEventListener('error', () => {
    v.parentElement.style.display = 'none';
  });
})();

/* ── CANVAS PARTICLES ─────────────────────────  */
(function initParticles() {
  const canvas = $('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.4 + 0.1),
      life: Math.random(),
      decay: Math.random() * 0.003 + 0.001,
      gold: Math.random() > 0.5,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 55 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0 || p.y < -10) {
        particles[i] = createParticle();
        particles[i].y = H + 5;
        return;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(212,168,67,${p.life * 0.55})`
        : `rgba(255,255,240,${p.life * 0.3})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', init, { passive: true });
})();

/* ── SCROLL PROGRESS BAR ──────────────────────  */
(function initScrollBar() {
  const bar = $('scroll-bar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    bar.style.width = (pct * 100) + '%';
  }, { passive: true });
})();

/* ── HEADER SCROLL EFFECT ─────────────────────  */
(function initHdr() {
  const hdr = $('hdr');
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();

/* ── CUSTOM CURSOR ────────────────────────────  */
(function initCursor() {
  if (window.innerWidth <= 640) return;
  const dot  = $('cur-dot');
  const ring = $('cur-ring');
  let rx = 0, ry = 0, mx = 0, my = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    gsap.to(dot, { x: mx, y: my, duration: 0.1, ease: 'power2.out' });
  });

  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    gsap.set(ring, { x: rx, y: ry });
    requestAnimationFrame(animRing);
  }
  animRing();

  // Scale cursor on clickable elements
  document.querySelectorAll('a, button, .mag, .tilt').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(dot, { scale: 0, duration: 0.2 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
    });
  });

  // Click burst
  document.addEventListener('mousedown', () => {
    gsap.to(ring, { scale: 0.7, duration: 0.12 });
  });
  document.addEventListener('mouseup', () => {
    gsap.to(ring, { scale: 1, duration: 0.22, ease: 'back.out(2)' });
  });
})();

/* ══════════════════════════════════════════════
   HERO ENTRANCE ANIMATIONS
══════════════════════════════════════════════ */
(function heroAnim() {
  const tl = gsap.timeline({ delay: 0.2 });

  // Eyebrow
  tl.to('.hero-eyebrow', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
  }, 0.1);

  // Title words reveal (translateY from 110% → 0)
  tl.to('#hw1', {
    y: '0%', duration: 0.9, ease: 'power4.out',
  }, 0.3);
  tl.to('#hw2', {
    y: '0%', duration: 0.9, ease: 'power4.out',
  }, 0.46);

  // Subtitle
  tl.to('.hero-sub', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
  }, 0.78);

  // Buttons
  tl.to('.hero-btns', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
  }, 0.95);

  // Parallax: video very slowly zooms out as you scroll
  gsap.to('.hero-vid-wrap video', {
    scale: 1.08,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Hero content slight parallax up on scroll
  gsap.to('.hero-body', {
    y: -60,
    opacity: 0.4,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
})();

/* ══════════════════════════════════════════════
   SCROLL REVEAL — all [data-rv] elements
══════════════════════════════════════════════ */
(function initScrollReveal() {
  document.querySelectorAll('[data-rv]').forEach(el => {
    const delay = parseFloat(el.getAttribute('data-rv-d') || 0);

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });
})();

/* ══════════════════════════════════════════════
   SECTION TITLE REVEAL (slide from side)
══════════════════════════════════════════════ */
(function initTitleReveal() {
  document.querySelectorAll('.stitle[data-rv]').forEach(el => {
    gsap.from(el.querySelector('.stitle-h'), {
      x: document.documentElement.dir === 'ltr' ? -50 : 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
    gsap.from(el.querySelector('.stbar'), {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
})();

/* ══════════════════════════════════════════════
   ABOUT IMAGE — clip-path reveal
══════════════════════════════════════════════ */
(function initAboutReveal() {
  const wrap = document.querySelector('.about-img-clip');
  if (!wrap) return;
  const img  = wrap.querySelector('.about-img');

  gsap.fromTo(img,
    { clipPath: 'inset(0 100% 0 0)', scale: 1.1 },
    {
      clipPath: 'inset(0 0% 0 0)',
      scale: 1,
      duration: 1.3,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: wrap,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    }
  );
})();

/* ══════════════════════════════════════════════
   REVIEW BARS — fill animation
══════════════════════════════════════════════ */
(function initRevBars() {
  const fills = document.querySelectorAll('.rbr-fill');
  fills.forEach(fill => {
    const target = fill.getAttribute('data-w') + '%';
    gsap.to(fill, {
      width: target,
      duration: 1.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: fill,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });
})();

/* ══════════════════════════════════════════════
   MAGNETIC BUTTONS
══════════════════════════════════════════════ */
(function initMagnetic() {
  if (window.innerWidth <= 640) return;

  document.querySelectorAll('.mag').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) * 0.32;
      const dy = (e.clientY - cy) * 0.32;
      gsap.to(el, { x: dx, y: dy, duration: 0.35, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' });
    });
  });
})();

/* ══════════════════════════════════════════════
   3D TILT — cards
══════════════════════════════════════════════ */
(function initTilt() {
  if (window.innerWidth <= 640) return;

  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const rx = ((e.clientY - cy) / rect.height) * -8;
      const ry = ((e.clientX - cx) / rect.width)  *  8;
      gsap.to(card, {
        rotationX: rx, rotationY: ry,
        transformPerspective: 900,
        ease: 'power2.out', duration: 0.3,
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationX: 0, rotationY: 0,
        duration: 0.6, ease: 'elastic.out(1,0.5)',
      });
    });
  });
})();

/* ══════════════════════════════════════════════
   BUTTON RIPPLE on click
══════════════════════════════════════════════ */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute;
      left:${e.clientX - rect.left}px;
      top:${e.clientY - rect.top}px;
      width:8px; height:8px;
      border-radius:50%;
      background:rgba(255,255,255,.35);
      transform:translate(-50%,-50%) scale(0);
      pointer-events:none;
      z-index:10;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    gsap.to(ripple, {
      scale: 30, opacity: 0,
      duration: 0.55, ease: 'power2.out',
      onComplete: () => ripple.remove(),
    });
  });
});

/* ══════════════════════════════════════════════
   TICKER
══════════════════════════════════════════════ */
(function initTicker() {
  const items = [
    'حلال مارکێت · Halal Market',
    'کاڵای تازە · Fresh Products',
    'باشترین نرخ · Best Prices',
    'هەولێر · Erbil Kurdistan',
    '٠٧٥١٧٩٨٥٩٧١',
    '٠٧٥٠٧٣٦٤٦١٥',
  ];
  const w = $('ticker');
  let h = '';
  for (let i = 0; i < 4; i++) items.forEach(x => { h += `<span>${x}</span>`; });
  w.innerHTML = h;
})();

/* ══════════════════════════════════════════════
   DRAWER
══════════════════════════════════════════════ */
function toggleDrawer() { drawerOpen ? closeDrawer() : openDrawer(); }
function openDrawer() {
  drawerOpen = true;
  $('drw-ov').classList.add('open');
  $('ham').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawerOpen = false;
  $('drw-ov').classList.remove('open');
  $('ham').classList.remove('open');
  document.body.style.overflow = '';
}
function handleOvClick(e) {
  if (e.target === $('drw-ov')) closeDrawer();
}

/* ══════════════════════════════════════════════
   LANGUAGE MENU
══════════════════════════════════════════════ */
function toggleLangMenu() {
  langMenuOpen = !langMenuOpen;
  const drop  = $('lang-drop');
  const chev  = $('lang-chev');
  drop.classList.toggle('open', langMenuOpen);
  chev.classList.toggle('open', langMenuOpen);
}

// Close lang menu when clicking outside
document.addEventListener('click', e => {
  const wrap = $('lang-wrap');
  if (wrap && !wrap.contains(e.target) && langMenuOpen) {
    langMenuOpen = false;
    $('lang-drop').classList.remove('open');
    $('lang-chev').classList.remove('open');
  }
});

/* ══════════════════════════════════════════════
   LANGUAGE SYSTEM
══════════════════════════════════════════════ */
function setLang(l) {
  lang = l;
  document.documentElement.lang  = l;
  document.documentElement.dir   = l === 'en' ? 'ltr' : 'rtl';

  // Update hero side overlay direction
  const side = document.querySelector('.hero-ov-side');
  if (side) {
    side.style.background = l === 'en'
      ? 'linear-gradient(to left,rgba(4,3,8,.75) 0%,transparent 55%)'
      : 'linear-gradient(to right,rgba(4,3,8,.75) 0%,transparent 55%)';
  }

  // Update nav labels (re-run title reveal for direction)
  ['ckb','ar','en'].forEach(x => {
    const lo = $(`lo-${x}`);
    const lck = $(`lck-${x}`);
    if (lo)  lo.classList.toggle('active', x === l);
    if (lck) lck.style.opacity = x === l ? '1' : '0';
  });

  // Close menu
  langMenuOpen = false;
  $('lang-drop').classList.remove('open');
  $('lang-chev').classList.remove('open');

  applyTranslations();
}

function applyTranslations() {
  const t = TX[lang];

  // Hero
  $s('h-eyebrow', t.eyebrow);
  $s('h-sub',     t.sub);
  $s('h-btn1',    t.btn1);
  $s('h-btn2',    t.btn2);

  // Language button label
  $s('lang-label', t.langLabel);

  // Promo
  $s('promo-title', t.promoTitle); $s('promo-sub', t.promoSub);
  $s('b1-lbl',  t.b1lbl);  $s('b2-lbl',  t.b2lbl);
  $s('map-btn1', t.mapBtn1); $s('map-btn2', t.mapBtn2);

  // About
  $s('about-title', t.aboutTitle); $s('about-sub', t.aboutSub);
  $s('about-tag',   t.aboutTag);
  $s('about-cap-h', t.aboutCapH);
  $s('about-cap-p', t.aboutCapP);

  // Locations
  $s('locs-title', t.locsTitle); $s('locs-sub', t.locsSub);
  $s('loc1-name', t.loc1); $s('loc1-addr', t.loc1addr);
  $s('loc2-name', t.loc2); $s('loc2-addr', t.loc2addr);
  $s('lopen1', t.open); $s('lopen2', t.open);

  // Reviews
  $s('rev-title', t.revTitle); $s('rev-sub', t.revSub); $s('rev-count', t.revCount);

  // Worker
  $s('worker-title', t.workerTitle); $s('worker-sub', t.workerSub);
  $s('wc1-tag',   t.wc1tag); $s('wc1-title', t.wc1h); $s('wc1-txt', t.wc1p);
  $s('wc2-tag',   t.wc2tag); $s('wc2-title', t.wc2h); $s('wc2-txt', t.wc2p);
  $s('wc1-wa', t.waBtn); $s('wc2-wa', t.waBtn);

  // Footer
  $s('footer-copy', t.copy);

  // Mobile nav
  $s('mn-home', t.navHome); $s('mn-disc', t.navDisc);
  $s('mn-locs', t.navLocs); $s('mn-work', t.navWork); $s('mn-about', t.navAbout);

  // Drawer
  $s('dr-home',   t.drHome); $s('dr-disc',   t.drDisc);
  $s('dr-locs',   t.drLocs); $s('dr-worker', t.drWork); $s('dr-about', t.drAbout);

  // Desktop nav
  $s('dn-hlbl', t.dnHome); $s('dn-dlbl', t.dnDisc);
  $s('dn-llbl', t.dnLocs); $s('dn-wlbl', t.dnWork); $s('dn-albl', t.dnAbout);

  buildReviews();
}

/* ══════════════════════════════════════════════
   BUILD REVIEWS
══════════════════════════════════════════════ */
function buildReviews() {
  const c = $('rev-cards');
  if (!c) return;
  c.innerHTML = REVIEWS.map(r => {
    const stars = Array.from({ length: 5 }, (_, i) =>
      `<i class="fas fa-star" style="opacity:${i < r.stars ? '1' : '.2'}"></i>`
    ).join('');
    return `
      <div class="rev-card">
        <div class="rev-card-stars">${stars}</div>
        <p class="rev-txt">${r[lang] || r.en}</p>
        <div class="rev-footer">
          <div class="rev-av">👤</div>
          <span class="rev-name">${r.name}</span>
        </div>
      </div>
    `;
  }).join('');

  // Drag to scroll reviews
  initDragScroll(c);
}

function initDragScroll(el) {
  let isDown = false, startX, scrollLeft;
  el.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
    el.style.userSelect = 'none';
  });
  el.addEventListener('mouseleave', () => { isDown = false; });
  el.addEventListener('mouseup',    () => { isDown = false; el.style.userSelect = ''; });
  el.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.4;
    el.scrollLeft = scrollLeft - walk;
  });
}

/* ══════════════════════════════════════════════
   ACTIVE NAV — IntersectionObserver
══════════════════════════════════════════════ */
(function initActiveNav() {
  const sectionMap = {
    hero:    { mnb: 'mnb-hero',   dn: 'dn-hero'   },
    promo:   { mnb: 'mnb-promo',  dn: 'dn-promo'  },
    locs:    { mnb: 'mnb-locs',   dn: 'dn-locs'   },
    worker:  { mnb: 'mnb-worker', dn: 'dn-worker' },
    about:   { mnb: 'mnb-about',  dn: 'dn-about'  },
    reviews: { mnb: 'mnb-about',  dn: null        },
  };

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      const map = sectionMap[id];
      if (!map) return;
      // Reset all
      document.querySelectorAll('.mnb').forEach(b => b.classList.remove('act'));
      document.querySelectorAll('.dn').forEach(b => b.classList.remove('act'));
      // Set active
      if (map.mnb) $(map.mnb)?.classList.add('act');
      if (map.dn)  $(map.dn)?.classList.add('act');
    });
  }, { threshold: 0.2 });

  Object.keys(sectionMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
})();

/* ══════════════════════════════════════════════
   PROMO SECTION — image reveal on scroll
══════════════════════════════════════════════ */
gsap.fromTo('.promo-img img',
  { scale: 1.08 },
  {
    scale: 1,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.promo-img',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  }
);

/* ══════════════════════════════════════════════
   LOCATION CARDS — stagger slide in
══════════════════════════════════════════════ */
gsap.from('.loc-card', {
  y: 60, opacity: 0, duration: 0.8,
  stagger: 0.18, ease: 'power3.out',
  scrollTrigger: {
    trigger: '.loc-grid',
    start: 'top 82%',
    toggleActions: 'play none none none',
  },
});

/* ══════════════════════════════════════════════
   WORKER CARDS — stagger
══════════════════════════════════════════════ */
gsap.from('.wc', {
  y: 60, opacity: 0, duration: 0.8,
  stagger: 0.18, ease: 'power3.out',
  scrollTrigger: {
    trigger: '.worker-grid',
    start: 'top 82%',
    toggleActions: 'play none none none',
  },
});

/* ══════════════════════════════════════════════
   REVIEW SCORE — number count up
══════════════════════════════════════════════ */
(function initScoreCount() {
  const el = document.querySelector('.rev-big');
  if (!el) return;
  gsap.from({ val: 0 }, {
    val: 4.9,
    duration: 1.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.rev-sum',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    onUpdate() {
      el.textContent = this.targets()[0].val.toFixed(1);
    },
  });
})();

/* ══════════════════════════════════════════════
   FOOTER LOGO — float animation
══════════════════════════════════════════════ */
gsap.to('.footer-logo', {
  y: -8, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1,
});

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
applyTranslations();
