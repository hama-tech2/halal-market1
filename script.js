/* ═══════════════════════════════════════════════
   HALAL MARKET  |  script.js  v5 — with live server
═══════════════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger);

/* ── REVIEW DATA ─────────────────────────────── */
const REVIEWS = [
  { name:'ئاکۆ عومەر',
    ckb:'کاڵاکانی تازە و نرخەکانی زۆر باشن. دووکانی پێویستم بۆ مانگی کرد!',
    ar:'المنتجات طازجة والأسعار ممتازة. أصبح متجري المفضل!',
    en:'Fresh products and great prices. My go-to store every week!', stars:5 },
  { name:'سارا حسن',
    ckb:'خزمەتگوزاری زۆر باشە و شوێنەکەش بیناوی و سەلامەتە.',
    ar:'الخدمة رائعة والمكان نظيف جداً.',
    en:'Wonderful service and a very clean space.', stars:5 },
  { name:'محمد خالد',
    ckb:'داشکاندنەکانیان هەموو هەفتەیەک نوێن. پیشنیاری دەکەم.',
    ar:'العروض الأسبوعية دائماً جديدة. أنصح بالزيارة.',
    en:'Weekly offers are always fresh. Highly recommended.', stars:5 },
  { name:'ریوار بەکر',
    ckb:'برنج و کاڵای خواردنی کوالێتییەکەی زۆر باشە.',
    ar:'جودة الأرز والمواد الغذائية ممتازة.',
    en:'Rice and food quality is excellent.', stars:4 },
  { name:'دلاور ئەحمەد',
    ckb:'هەموو ئەوەی پێویستمە لێرەدا دەدۆزمەوە. زۆر سوپاس.',
    ar:'أجد كل ما أحتاجه هنا. شكراً جزيلاً.',
    en:'I find everything I need here. Thank you so much.', stars:5 },
];

/* ── TRANSLATIONS ─────────────────────────────── */
const TX = {
  ckb:{
    eyebrow:'هەولێر · کوردستان',
    sub:'تازەترین کاڵا · باشترین نرخ · دووکانی متمانەپێکراوی کوردستان',
    btn1:'داشکاندنەکان', btn2:'شوێنەکانمان',
    wu1t:'تازە · هەموو ڕۆژ',   wu1s:'کاڵای تازە کە ڕۆژانە دێت',
    wu2t:'١٠٠٪ حلال',           wu2s:'دەستپیشخەری متمانەپێکراو',
    wu3t:'باشترین نرخ',         wu3s:'ئۆفەرە تازەکان هەموو هەفتەیەک',
    wu4t:'٢ لق',                wu4s:'بنصڵاوە و بەحرکە',
    promoTitle:'داشکاندنەکان', promoSub:'ئۆفەرە تازەکان',
    b1tag:'لقی یەکەم', b2tag:'لقی دووەم',
    map1:'شوێنی لقی ١', map2:'شوێنی لقی ٢',
    aboutTitle:'دەربارەمان', aboutSub:'کێین و چییین',
    aboutPill:'دەربارە', aboutCapH:'حلال مارکێت',
    aboutCapP:'دووکانێکی تازەیی و سەلامەتی خواردنە کە بە باشترین کوالێتی و نرخ خزمەتی کڕیارەکانی هەولێر دەکات. لقی یەکەم لە بنصڵاوە، لقی دووەم لە بەحرکەیە.',
    locsTitle:'شوێنەکانمان', locsSub:'هەر دوو لقەکانمان',
    loc1:'حلال مارکێت – لقی یەکەم',
    loc1addr:'جووتسایدی بنصڵاوە تەنيشت مزگەوتی اسراو و ميعراج',
    loc2:'حلال مارکێت – لقی دووەم',
    loc2addr:'بەحركە - بەرامبەر بەنزینخانەی بەحركە',
    open:'کراوەیە',
    revTitle:'نرخاندنی کڕیارەکان', revSub:'نرخاندنی کڕیارەکانمان',
    revCount:'+٢٠٠ نرخاندن',
    revCtaLbl:'کاڵاکانمان باشت بوون؟',
    likeText:'نرخاندنت بنێرە', likeCount:'+٢٠٠', likeDone:'سوپاس! 🌟',
    workerTitle:'کارمەندی پێویستمانە',
    workerSub:'ئەگەر دەتەوێت کار بکەیت، پەیوەندیمان بکە',
    wc1tag:'لقی یەکەم', wc1h:'حلال مارکێت ١',
    wc1p:'ئەگەر دەتەوێت کارمەندی حلال مارکێت لقی یەکەم بیت، پەیامێک بنێرە یان پەیوەندیمان بکە.',
    wc2tag:'لقی دووەم', wc2h:'حلال مارکێت ٢',
    wc2p:'ئەگەر دەتەوێت کارمەندی حلال مارکێت لقی دووەم بیت، پەیامێک بنێرە یان پەیوەندیمان بکە.',
    waBtn:'پەیام بنێرە',
    copy:'© ٢٠٢٥ حلال مارکێت · هەولێر',
    navHome:'سەرەکی', navDisc:'داشکاندن', navLocs:'شوێن', navWork:'کارمەند', navAbout:'دەربارە',
    drHome:'سەرەکی', drDisc:'داشکاندن', drLocs:'شوێنەکان', drWork:'کارمەند', drAbout:'دەربارە',
    dnHome:'سەرەکی', dnDisc:'داشکاندن', dnLocs:'شوێن', dnWork:'کارمەند', dnAbout:'دەربارە',
    langLabel:'عربي',
  },
  ar:{
    eyebrow:'أربيل · كوردستان',
    sub:'أطازج المنتجات · أفضل الأسعار · متجرك الموثوق في كوردستان',
    btn1:'العروض', btn2:'فروعنا',
    wu1t:'طازج · كل يوم',      wu1s:'منتجات طازجة يومياً',
    wu2t:'١٠٠٪ حلال',           wu2s:'معتمد وموثوق',
    wu3t:'أفضل الأسعار',        wu3s:'عروض أسبوعية متجددة',
    wu4t:'فرعان',               wu4s:'بنسلاوة وبحرگة',
    promoTitle:'العروض', promoSub:'أحدث الأسعار',
    b1tag:'الفرع الأول', b2tag:'الفرع الثاني',
    map1:'موقع الفرع ١', map2:'موقع الفرع ٢',
    aboutTitle:'عن هلال ماركت', aboutSub:'من نحن وماذا نقدم',
    aboutPill:'عنّا', aboutCapH:'هلال ماركت',
    aboutCapP:'متجر متخصص بالمواد الغذائية الطازجة بأعلى جودة وأفضل الأسعار يخدم عملاء أربيل. الفرع الأول في بنسلاوة، الفرع الثاني في بحرگة.',
    locsTitle:'فروعنا', locsSub:'كلا الفرعين',
    loc1:'هلال ماركت – الفرع الأول',
    loc1addr:'بنسلاوة سايدين بجانب جامع الاسراء والمعراج',
    loc2:'هلال ماركت – الفرع الثاني',
    loc2addr:'بحرگة - مقابل محطة وقود بحرگة',
    open:'مفتوح',
    revTitle:'آراء عملائنا', revSub:'ماذا يقول عملاؤنا',
    revCount:'+٢٠٠ تقييم',
    revCtaLbl:'أعجبك متجرنا؟',
    likeText:'أرسل تقييمك', likeCount:'+٢٠٠', likeDone:'شكراً! 🌟',
    workerTitle:'نحن نبحث عن موظفين',
    workerSub:'إذا أردت العمل معنا، تواصل معنا',
    wc1tag:'الفرع الأول', wc1h:'هلال ماركت ١',
    wc1p:'إذا أردت العمل في هلال ماركت الفرع الأول، أرسل رسالة أو اتصل بنا.',
    wc2tag:'الفرع الثاني', wc2h:'هلال ماركت ٢',
    wc2p:'إذا أردت العمل في هلال ماركت الفرع الثاني، أرسل رسالة أو اتصل بنا.',
    waBtn:'أرسل رسالة',
    copy:'© ٢٠٢٥ هلال ماركت · أربيل',
    navHome:'الرئيسية', navDisc:'العروض', navLocs:'الفروع', navWork:'التوظيف', navAbout:'عنّا',
    drHome:'الرئيسية', drDisc:'العروض', drLocs:'الفروع', drWork:'التوظيف', drAbout:'عنّا',
    dnHome:'الرئيسية', dnDisc:'العروض', dnLocs:'الفروع', dnWork:'التوظيف', dnAbout:'عنّا',
    langLabel:'عربي',
  },
  en:{
    eyebrow:'Erbil · Kurdistan',
    sub:'Freshest products · Best prices · Your trusted supermarket in Kurdistan',
    btn1:'View Deals', btn2:'Our Locations',
    wu1t:'Fresh Daily',          wu1s:'New stock delivered every day',
    wu2t:'100% Halal',           wu2s:'Certified and trusted',
    wu3t:'Best Prices',          wu3s:'Weekly deals every week',
    wu4t:'2 Branches',           wu4s:'Binaslawa & Baharka',
    promoTitle:'Discounts', promoSub:'Latest offers',
    b1tag:'Branch One', b2tag:'Branch Two',
    map1:'Location 1', map2:'Location 2',
    aboutTitle:'About Us', aboutSub:'Who we are',
    aboutPill:'About', aboutCapH:'Halal Market',
    aboutCapP:'A fresh and quality grocery store serving Erbil customers with the best products at great prices. Branch One in Binaslawa, Branch Two in Baharka.',
    locsTitle:'Our Locations', locsSub:'Both our branches',
    loc1:'Halal Market – Branch One',
    loc1addr:"Binaslawa Two-Way, Next to Al-Isra and Al-Mi'raj Mosque",
    loc2:'Halal Market – Branch Two',
    loc2addr:'Baharka - Opposite Baharka Gas Station',
    open:'Open Now',
    revTitle:'Customer Reviews', revSub:'What our customers say',
    revCount:'+200 reviews',
    revCtaLbl:'Enjoying Halal Market?',
    likeText:'Leave a review', likeCount:'+200', likeDone:'Thank you! 🌟',
    workerTitle:'We Are Hiring',
    workerSub:'If you want to work with us, get in touch',
    wc1tag:'Branch One', wc1h:'Halal Market 1',
    wc1p:'If you want to work at Halal Market Branch One, send us a message or call us.',
    wc2tag:'Branch Two', wc2h:'Halal Market 2',
    wc2p:'If you want to work at Halal Market Branch Two, send us a message or call us.',
    waBtn:'Send Message',
    copy:'© 2025 Halal Market · Erbil',
    navHome:'Home', navDisc:'Deals', navLocs:'Locations', navWork:'Jobs', navAbout:'About',
    drHome:'Home', drDisc:'Discounts', drLocs:'Locations', drWork:'Jobs', drAbout:'About',
    dnHome:'Home', dnDisc:'Deals', dnLocs:'Locations', dnWork:'Jobs', dnAbout:'About',
    langLabel:'EN',
  },
};

/* ── STATE ────────────────────────────────────── */
let lang = 'ckb', drwOpen = false, langOpen = false, liked = false;

/* ── HELPERS ──────────────────────────────────── */
const $   = id  => document.getElementById(id);
const $qs = sel => document.querySelector(sel);
function go(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth'}) }
function st(id, v){ const e=$(id); if(e) e.textContent=v }

/* ════════════════════════════════════════════════
   TICKER
════════════════════════════════════════════════ */
(function(){
  const items = [
    'حلال مارکێت · Halal Market',
    'کاڵای تازە · Fresh Daily',
    'باشترین نرخ · Best Prices',
    'هەولێر · Erbil Kurdistan',
    '٠٧٥١ ٧٩٨ ٥٩٧١',
    '٠٧٥٠ ٧٣٦ ٤٦١٥',
  ];
  const track = $('ticker-track');
  if (!track) return;
  let h = '';
  for (let i = 0; i < 4; i++) items.forEach(x => { h += `<span>${x}</span>` });
  track.innerHTML = h;
})();

/* ════════════════════════════════════════════════
   HEADER — smart hide on scroll down, show on scroll up
════════════════════════════════════════════════ */
(function(){
  const hdr = $('hdr');
  if (!hdr) return;
  let lastY = 0, ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      hdr.classList.toggle('scrolled', y > 28);
      if (y > 100) {
        if (y > lastY + 5) hdr.classList.add('hidden');
        if (y < lastY - 8) hdr.classList.remove('hidden');
      } else {
        hdr.classList.remove('hidden');
      }
      lastY = y;
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
})();

/* ════════════════════════════════════════════════
   SCROLL PROGRESS
════════════════════════════════════════════════ */
(function(){
  const bar = $('scroll-prog');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
})();

/* ════════════════════════════════════════════════
   CUSTOM CURSOR (desktop)
════════════════════════════════════════════════ */
(function(){
  if (window.innerWidth <= 640) return;
  const dot  = $('cur-dot');
  const ring = $('cur-ring');
  if (!dot || !ring) return;
  let rx = 0, ry = 0, mx = 0, my = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    gsap.to(dot, { x: mx, y: my, duration: 0.08, ease: 'none' });
  });
  (function raf() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    gsap.set(ring, { x: rx, y: ry });
    requestAnimationFrame(raf);
  })();

  document.querySelectorAll('a,button,.loc-card,.wc-card,.rev-card,.wu-item')
    .forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hov'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hov'));
    });
  document.addEventListener('mousedown', () => gsap.to(ring, { scale: 0.72, duration: 0.12 }));
  document.addEventListener('mouseup',   () => gsap.to(ring, { scale: 1, duration: 0.22, ease: 'back.out(2)' }));
})();

/* ════════════════════════════════════════════════
   VIDEO
════════════════════════════════════════════════ */
(function(){
  const v = $('hero-vid');
  if (!v) return;
  const p = v.play();
  if (p) p.catch(() => { v.muted = true; v.play().catch(() => {}) });
  v.addEventListener('error', () => { v.parentElement.style.display = 'none' });
})();

/* ════════════════════════════════════════════════
   CANVAS PARTICLES
════════════════════════════════════════════════ */
(function(){
  const canvas = $('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];

  function mkP() {
    return {
      x: Math.random() * W, y: H + 4,
      r: Math.random() * 1.3 + 0.2,
      vx: (Math.random() - 0.5) * 0.24, vy: -(Math.random() * 0.34 + 0.08),
      a: Math.random() * 0.5, da: Math.random() * 0.002 + 0.001,
      gold: Math.random() > 0.45,
    };
  }
  function init() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    pts = Array.from({ length: 40 }, () => { const p = mkP(); p.y = Math.random() * H; return p; });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy; p.a -= p.da;
      if (p.a <= 0 || p.y < -5) { pts[i] = mkP(); return }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(212,168,67,${p.a})`
        : `rgba(255,250,235,${p.a * 0.48})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  init(); draw();
  window.addEventListener('resize', init, { passive: true });
})();

/* ════════════════════════════════════════════════
   HERO GSAP ENTRANCE
════════════════════════════════════════════════ */
(function(){
  const tl = gsap.timeline({ delay: 0.2 });
  tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0);
  tl.to('#hw1', { y: '0%', duration: 0.95, ease: 'power4.out' }, 0.2);
  tl.to('#hw2', { y: '0%', duration: 0.95, ease: 'power4.out' }, 0.35);
  tl.to('.hero-sub',  { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, 0.65);
  tl.to('.hero-ctas', { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, 0.82);

  gsap.to('.hero-vid-wrap video', {
    scale: 1.06, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
  });
  gsap.to('.hero-body', {
    y: -42, opacity: 0.5, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: '65% top', scrub: 1.2 },
  });
})();

/* ════════════════════════════════════════════════
   SCROLL REVEAL  [data-reveal]
════════════════════════════════════════════════ */
(function(){
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const d = parseFloat(el.getAttribute('data-delay') || 0);
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.78, delay: d, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });
})();

/* ── About image clip-path wipe ─────────────── */
(function(){
  const img = $qs('.about-img');
  if (!img) return;
  gsap.fromTo(img,
    { clipPath: 'inset(0 100% 0 0)', scale: 1.08 },
    { clipPath: 'inset(0 0% 0 0)',   scale: 1,
      duration: 1.2, ease: 'power4.inOut',
      scrollTrigger: { trigger: '.about-card', start: 'top 80%', toggleActions: 'play none none none' } }
  );
})();

/* ── Location cards stagger ──────────────────── */
gsap.from('.loc-card', {
  y: 46, opacity: 0, duration: 0.72, stagger: 0.15, ease: 'power3.out',
  scrollTrigger: { trigger: '.locs-grid', start: 'top 84%', toggleActions: 'play none none none' },
});

/* ── Worker cards stagger ────────────────────── */
gsap.from('.wc-card', {
  y: 46, opacity: 0, duration: 0.72, stagger: 0.15, ease: 'power3.out',
  scrollTrigger: { trigger: '.worker-grid', start: 'top 84%', toggleActions: 'play none none none' },
});

/* ── Sec-bar scale reveal ────────────────────── */
document.querySelectorAll('.sec-bar').forEach(bar => {
  gsap.from(bar, {
    scaleY: 0, transformOrigin: 'top center', duration: 0.55, ease: 'power3.out',
    scrollTrigger: { trigger: bar.closest('.sec-head'), start: 'top 87%', toggleActions: 'play none none none' },
  });
});

/* ════════════════════════════════════════════════
   REVIEW SCORE  0 → 4.9
════════════════════════════════════════════════ */
(function(){
  const el = $('rev-score-el');
  if (!el) return;
  const proxy = { val: 0.0 };
  ScrollTrigger.create({
    trigger: '.rev-summary',
    start:   'top 85%',
    once:    true,
    onEnter() {
      gsap.to(proxy, {
        val:       4.9,
        duration:  1.8,
        ease:      'power3.out',
        onUpdate() { el.textContent = proxy.val.toFixed(1) },
        onComplete(){ el.textContent = '4.9' },
      });
    },
  });
})();

/* ── Review bar fill ─────────────────────────── */
document.querySelectorAll('.rbf').forEach(bar => {
  const w = bar.getAttribute('data-w') + '%';
  gsap.to(bar, {
    width: w, duration: 1.3, ease: 'power3.out',
    scrollTrigger: { trigger: bar, start: 'top 88%', toggleActions: 'play none none none' },
  });
});

/* ── Drag-to-scroll reviews ──────────────────── */
(function(){
  const track = $('rev-cards');
  if (!track) return;
  let isDown = false, sx = 0, sl = 0;
  track.addEventListener('mousedown',  e => { isDown = true; sx = e.pageX - track.offsetLeft; sl = track.scrollLeft });
  track.addEventListener('mouseleave', () => isDown = false);
  track.addEventListener('mouseup',    () => isDown = false);
  track.addEventListener('mousemove',  e => {
    if (!isDown) return; e.preventDefault();
    track.scrollLeft = sl - (e.pageX - track.offsetLeft - sx) * 1.4;
  });
})();

/* ════════════════════════════════════════════════
   LIKE BUTTON + CONFETTI (reviews section)
════════════════════════════════════════════════ */
function handleLike(e) {
  if (liked) return;
  liked = true;
  const btn = $('like-btn');
  const t   = TX[lang];

  btn.classList.add('liked');
  st('like-text',  t.likeDone);
  st('like-count', '');

  gsap.fromTo(btn, { scale: 0.92 }, { scale: 1, duration: 0.55, ease: 'elastic.out(1.2,.5)' });
  gsap.fromTo(btn,
    { boxShadow: '0 0 0 rgba(212,168,67,0)' },
    { boxShadow: '0 0 30px rgba(212,168,67,.55)', duration: 0.22, yoyo: true, repeat: 3, ease: 'power2.inOut' }
  );
  launchConfetti(e.clientX, e.clientY);
}

function launchConfetti(cx, cy) {
  const COLORS = ['#d4a843','#f0c656','#ffffff','#c8962c','#fffbe8','#e8c06a','#fff8dc'];
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-p';
    p.style.background = COLORS[i % COLORS.length];
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    document.body.appendChild(p);
    const angle  = (i / 22) * Math.PI * 2;
    const spread = 52 + Math.random() * 70;
    const tx = Math.cos(angle) * spread;
    const ty = Math.sin(angle) * spread - 52;
    gsap.set(p, { x: cx, y: cy, xPercent: -50, yPercent: -50 });
    gsap.to(p, {
      x: cx + tx, y: cy + ty,
      rotation: Math.random() * 520,
      opacity: 0, scale: 0,
      duration: 0.65 + Math.random() * 0.45,
      ease: 'power2.out',
      onComplete: () => p.remove(),
    });
  }
}

/* ── Button ripple ────────────────────────────── */
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const r = this.getBoundingClientRect();
    const rip = document.createElement('span');
    rip.style.cssText = `position:absolute;left:${e.clientX-r.left}px;top:${e.clientY-r.top}px;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.26);transform:translate(-50%,-50%) scale(0);pointer-events:none;z-index:10;`;
    this.appendChild(rip);
    gsap.to(rip, { scale: 24, opacity: 0, duration: 0.5, ease: 'power2.out', onComplete: () => rip.remove() });
  });
});

/* ════════════════════════════════════════════════
   DRAWER
════════════════════════════════════════════════ */
function toggleDrawer() { drwOpen ? closeDrawer() : openDrawer() }
function openDrawer() {
  drwOpen = true;
  $('drw-ov').classList.add('open');
  $('ham').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drwOpen = false;
  $('drw-ov').classList.remove('open');
  $('ham').classList.remove('open');
  document.body.style.overflow = '';
}
function handleOvClick(e) { if (e.target === $('drw-ov')) closeDrawer() }

/* ════════════════════════════════════════════════
   LANGUAGE SWITCHER
════════════════════════════════════════════════ */
function toggleLang() {
  langOpen = !langOpen;
  $('lang-menu').classList.toggle('open', langOpen);
  $('lang-chev').classList.toggle('open', langOpen);
  $('lang-btn').setAttribute('aria-expanded', langOpen);
}
document.addEventListener('click', e => {
  const w = $('lang-wrap');
  if (w && !w.contains(e.target) && langOpen) {
    langOpen = false;
    $('lang-menu').classList.remove('open');
    $('lang-chev').classList.remove('open');
  }
});

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir  = l === 'en' ? 'ltr' : 'rtl';

  const side = $qs('.hero-ov-side');
  if (side) {
    side.style.background = l === 'en'
      ? 'linear-gradient(to left,rgba(4,3,8,.5) 0%,transparent 50%)'
      : 'linear-gradient(to right,rgba(4,3,8,.5) 0%,transparent 50%)';
  }

  ['ckb','ar','en'].forEach(x => {
    const opt = $(`lo-${x}`);
    const ck  = $(`lck-${x}`);
    if (opt) opt.classList.toggle('active', x === l);
    if (ck)  ck.style.opacity = x === l ? '1' : '0';
  });

  langOpen = false;
  $('lang-menu').classList.remove('open');
  $('lang-chev').classList.remove('open');

  applyTranslations();
  ScrollTrigger.refresh();
}

/* ════════════════════════════════════════════════
   APPLY TRANSLATIONS
════════════════════════════════════════════════ */
function applyTranslations() {
  const t = TX[lang];

  st('h-eyebrow', t.eyebrow);
  st('h-sub',     t.sub);
  st('h-btn1',    t.btn1);
  st('h-btn2',    t.btn2);

  st('lang-label', t.langLabel);

  st('promo-title', t.promoTitle); st('promo-sub', t.promoSub);

  st('about-title',  t.aboutTitle); st('about-sub',  t.aboutSub);
  st('about-pill',   t.aboutPill);
  st('about-cap-h',  t.aboutCapH);  st('about-cap-p', t.aboutCapP);

  st('locs-title',  t.locsTitle); st('locs-sub',   t.locsSub);
  st('loc1-name',   t.loc1);      st('loc1-addr',  t.loc1addr);
  st('loc2-name',   t.loc2);      st('loc2-addr',  t.loc2addr);
  st('lopen1', t.open); st('lopen2', t.open);

  st('rev-title',    t.revTitle);  st('rev-sub',    t.revSub);
  st('rev-count',    t.revCount);
  st('rev-cta-lbl',  t.revCtaLbl);
  if (!liked) { st('like-text', t.likeText); st('like-count', t.likeCount) }

  st('worker-title', t.workerTitle); st('worker-sub', t.workerSub);
  st('wc1-tag',  t.wc1tag); st('wc1-title', t.wc1h); st('wc1-txt', t.wc1p);
  st('wc2-tag',  t.wc2tag); st('wc2-title', t.wc2h); st('wc2-txt', t.wc2p);
  st('wc1-wa', t.waBtn);    st('wc2-wa', t.waBtn);

  st('footer-copy', t.copy);

  st('mn-home',  t.navHome); st('mn-disc',  t.navDisc);
  st('mn-locs',  t.navLocs); st('mn-work',  t.navWork); st('mn-about', t.navAbout);

  st('di-home',  t.drHome); st('di-promo', t.drDisc);
  st('di-locs',  t.drLocs); st('di-work',  t.drWork); st('di-about', t.drAbout);

  st('dn-home-t',  t.dnHome); st('dn-promo-t', t.dnDisc);
  st('dn-locs-t',  t.dnLocs); st('dn-work-t',  t.dnWork); st('dn-about-t', t.dnAbout);

  buildReviews();
}

/* ════════════════════════════════════════════════
   BUILD REVIEWS
════════════════════════════════════════════════ */
function buildReviews() {
  const c = $('rev-cards');
  if (!c) return;
  c.innerHTML = REVIEWS.map(r => {
    const stars = Array.from({ length: 5 }, (_, i) =>
      `<i class="fas fa-star" style="opacity:${i < r.stars ? 1 : .18}"></i>`
    ).join('');
    return `<div class="rev-card">
      <div class="rv-stars">${stars}</div>
      <p class="rv-txt">${r[lang] || r.en}</p>
      <div class="rv-footer">
        <div class="rv-av">👤</div>
        <span class="rv-name">${r.name}</span>
      </div>
    </div>`;
  }).join('');
}

/* ════════════════════════════════════════════════
   ACTIVE NAV  (IntersectionObserver)
════════════════════════════════════════════════ */
(function(){
  const map = {
    hero:    { mnb: 'mnb-hero',   dn: 'dn-hero'   },
    promo:   { mnb: 'mnb-promo',  dn: 'dn-promo'  },
    about:   { mnb: 'mnb-about',  dn: 'dn-about'  },
    locs:    { mnb: 'mnb-locs',   dn: 'dn-locs'   },
    reviews: { mnb: 'mnb-about',  dn: null        },
    worker:  { mnb: 'mnb-worker', dn: 'dn-worker' },
  };
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const m = map[entry.target.id];
      if (!m) return;
      document.querySelectorAll('.mnb').forEach(b => b.classList.remove('act'));
      document.querySelectorAll('.dn').forEach(b =>  b.classList.remove('act'));
      if (m.mnb) $(m.mnb)?.classList.add('act');
      if (m.dn)  $(m.dn)?.classList.add('act');
    });
  }, { threshold: 0.22 });
  ['hero','promo','about','locs','reviews','worker'].forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
})();

applyTranslations();


/* ═══════════════════════════════════════════════════════════════
   ═══════════════════════════════════════════════════════════════
   LIVE SERVER — Supabase + Cloudflare R2
   Fill in the two placeholders below, then everything works.
   ═══════════════════════════════════════════════════════════════
   ═══════════════════════════════════════════════════════════════ */
const SUPABASE_URL = 'https://xtgdiugwygvijcurcnxb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_RpfYTbJQOXWVzmKIWNro9Q_ATKgPEOA';
const UPLOAD_WORKER_URL = 'PASTE_YOUR_CLOUDFLARE_WORKER_URL_HERE'; // e.g. https://halal-image-upload.yourname.workers.dev

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ── APP STATE ────────────────────────────────── */
let currentUser = null;
let currentProfile = null;
let isAdmin = false;
let authMode = 'login';
let allPosts = [];
let marketFilter = 'all';
let feedExpanded = false;
let selectedAdminFiles = [];
let lightboxPost = null;
let lightboxIndex = 0;
let countdownTimer = null;
let replyingTo = null;
const MAX_RAW_MB = 15;

/* ════════════════════════════════════════════════
   AUTH
════════════════════════════════════════════════ */
async function initAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) await onLoggedIn(session);
  supabase.auth.onAuthStateChange((event, session) => {
    if (session) onLoggedIn(session);
    else onLoggedOut();
  });
}

async function onLoggedIn(session) {
  currentUser = session.user;
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', currentUser.id).single();
  currentProfile = profile;
  const { data: adminCheck } = await supabase.rpc('is_admin');
  isAdmin = adminCheck === true;
  updateAccountUI();
  loadFeed();
}

function onLoggedOut() {
  currentUser = null;
  currentProfile = null;
  isAdmin = false;
  updateAccountUI();
  loadFeed();
}

function updateAccountUI() {
  const icon = $('acc-icon');
  const newPostBtn = $('admin-newpost-btn');
  if (icon) icon.className = currentUser ? 'fas fa-user-check' : 'fas fa-user';
  if (newPostBtn) newPostBtn.style.display = isAdmin ? 'inline-flex' : 'none';
}

function handleAccountClick() {
  if (currentUser) openProfileModal();
  else openAuthModal();
}

function openAuthModal() { $('auth-modal-ov').classList.add('open'); }
function closeAuthModal() { $('auth-modal-ov').classList.remove('open'); $('auth-error').textContent=''; }

function setAuthMode(mode) {
  authMode = mode;
  $('auth-tab-login').classList.toggle('active', mode === 'login');
  $('auth-tab-signup').classList.toggle('active', mode === 'signup');
  st('auth-submit-txt', mode === 'login' ? 'چوونەژوورەوە' : 'خۆتۆمارکردن');
}

async function submitAuth() {
  const email = $('auth-email').value.trim();
  const password = $('auth-password').value;
  const errEl = $('auth-error');
  errEl.textContent = '';
  if (!email || !password) { errEl.textContent = 'ئیمەیل و وشەی نهێنی پێویستە'; return; }

  const { error } = authMode === 'login'
    ? await supabase.auth.signInWithPassword({ email, password })
    : await supabase.auth.signUp({ email, password });

  if (error) { errEl.textContent = error.message; return; }
  closeAuthModal();
}

async function doLogout() {
  await supabase.auth.signOut();
  closeProfileModal();
}

/* ════════════════════════════════════════════════
   PROFILE
════════════════════════════════════════════════ */
function openProfileModal() {
  $('profile-avatar-img').src = currentProfile?.avatar_url || ('https://api.dicebear.com/7.x/thumbs/svg?seed=' + currentUser.id);
  $('profile-name-input').value = currentProfile?.display_name || '';
  const changedAt = currentProfile?.name_changed_at ? new Date(currentProfile.name_changed_at) : null;
  const daysLeft = changedAt ? 30 - Math.floor((Date.now() - changedAt.getTime()) / 86400000) : 0;
  $('profile-name-note').textContent = daysLeft > 0 ? `دەتوانیت ناو بگۆڕیت دوای ${daysLeft} ڕۆژی تر` : '';
  $('profile-modal-ov').classList.add('open');
}
function closeProfileModal() { $('profile-modal-ov').classList.remove('open'); }

async function saveProfileName() {
  const newName = $('profile-name-input').value.trim();
  if (!newName) return;
  const changedAt = currentProfile?.name_changed_at ? new Date(currentProfile.name_changed_at) : null;
  const daysLeft = changedAt ? 30 - Math.floor((Date.now() - changedAt.getTime()) / 86400000) : 0;
  if (daysLeft > 0) { alert(`دەتوانیت ناو بگۆڕیت دوای ${daysLeft} ڕۆژی تر`); return; }

  const { error } = await supabase.from('profiles')
    .update({ display_name: newName, name_changed_at: new Date().toISOString() })
    .eq('id', currentUser.id);
  if (!error) {
    currentProfile.display_name = newName;
    currentProfile.name_changed_at = new Date().toISOString();
    closeProfileModal();
  }
}

async function handleAvatarChange(e) {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const blob = await compressImage(file, 400, 0.85);
    const url = await uploadImageToR2(blob);
    await supabase.from('profiles').update({ avatar_url: url }).eq('id', currentUser.id);
    currentProfile.avatar_url = url;
    $('profile-avatar-img').src = url;
  } catch (err) {
    alert('کێشەیەک ڕوویدا لە بارکردنی وێنە');
  }
}

/* ════════════════════════════════════════════════
   IMAGE COMPRESSION + UPLOAD TO R2 (via Worker)
════════════════════════════════════════════════ */
function compressImage(file, maxWidth = 1600, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('compress failed')), 'image/webp', quality);
      };
      img.onerror = () => reject(new Error('image load failed'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('file read failed'));
    reader.readAsDataURL(file);
  });
}

async function uploadImageToR2(blob) {
  const { data: { session } } = await supabase.auth.getSession();
  const fd = new FormData();
  fd.append('file', blob, 'image.webp');
  const res = await fetch(UPLOAD_WORKER_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${session.access_token}` },
    body: fd,
  });
  if (!res.ok) throw new Error('upload failed: ' + (await res.text()));
  const data = await res.json();
  return data.url;
}

/* ════════════════════════════════════════════════
   ADMIN — NEW POST
════════════════════════════════════════════════ */
function openAdminModal() {
  selectedAdminFiles = [];
  $('admin-title').value = '';
  $('admin-detail').value = '';
  $('admin-days').value = 7;
  $('admin-images').value = '';
  $('admin-image-preview').innerHTML = '';
  $('admin-error').textContent = '';
  $('admin-modal-ov').classList.add('open');
}
function closeAdminModal() { $('admin-modal-ov').classList.remove('open'); }

function handleAdminImagesChange(e) {
  const files = Array.from(e.target.files);
  const errEl = $('admin-error');
  errEl.textContent = '';
  for (const f of files) {
    if (f.size > MAX_RAW_MB * 1024 * 1024) {
      errEl.textContent = `وێنەی "${f.name}" زۆر گەورەیە. تکایە وێنەکە بچووک بکەوە یان وێنەیەکی تر هەڵبژێرە.`;
      continue;
    }
    selectedAdminFiles.push(f);
  }
  renderAdminPreview();
}

function renderAdminPreview() {
  const wrap = $('admin-image-preview');
  wrap.innerHTML = selectedAdminFiles.map((f, i) => `
    <div class="admin-thumb" data-i="${i}">
      <img src="${URL.createObjectURL(f)}">
      <button onclick="removeAdminImage(${i})">×</button>
      ${i > 0 ? `<button class="thumb-move" onclick="moveAdminImage(${i},-1)">↑</button>` : ''}
      ${i < selectedAdminFiles.length - 1 ? `<button class="thumb-move" onclick="moveAdminImage(${i},1)">↓</button>` : ''}
    </div>`).join('');
}
function removeAdminImage(i) { selectedAdminFiles.splice(i, 1); renderAdminPreview(); }
function moveAdminImage(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= selectedAdminFiles.length) return;
  [selectedAdminFiles[i], selectedAdminFiles[j]] = [selectedAdminFiles[j], selectedAdminFiles[i]];
  renderAdminPreview();
}

async function submitNewPost() {
  const errEl = $('admin-error');
  const title = $('admin-title').value.trim();
  const detail = $('admin-detail').value.trim();
  const days = parseInt($('admin-days').value, 10) || 7;
  const ratio = $('admin-ratio').value;
  const marketId = parseInt($('admin-market').value, 10);

  if (!title) { errEl.textContent = 'ناونیشان پێویستە'; return; }
  if (selectedAdminFiles.length === 0) { errEl.textContent = 'لانیکەم یەک وێنە پێویستە'; return; }

  const btn = $('admin-submit-btn');
  btn.disabled = true;
  st('admin-submit-txt', 'بارکردن...');

  try {
    const urls = [];
    for (const file of selectedAdminFiles) {
      const blob = await compressImage(file, 1600, 0.8);
      const url = await uploadImageToR2(blob);
      urls.push(url);
    }

    const discountEnd = new Date(Date.now() + days * 86400000).toISOString();
    const { data: post, error: postErr } = await supabase.from('posts').insert({
      location_id: marketId,
      title, detail,
      discount_days: days,
      discount_end: discountEnd,
      gallery_ratio: ratio,
      created_by: currentUser.id,
    }).select().single();
    if (postErr) throw postErr;

    const imageRows = urls.map((url, i) => ({ post_id: post.id, image_url: url, sort_order: i }));
    const { error: imgErr } = await supabase.from('post_images').insert(imageRows);
    if (imgErr) throw imgErr;

    closeAdminModal();
    loadFeed();
  } catch (err) {
    errEl.textContent = 'هەڵەیەک ڕوویدا: ' + err.message;
  } finally {
    btn.disabled = false;
    st('admin-submit-txt', 'بڵاوکردنەوە');
  }
}

async function deleteCurrentPost() {
  if (!lightboxPost) return;
  if (!confirm('دڵنیایت لە سڕینەوە؟')) return;
  await supabase.from('posts').delete().eq('id', lightboxPost.id);
  closeLightbox();
  loadFeed();
}

/* ════════════════════════════════════════════════
   FEED
════════════════════════════════════════════════ */
async function loadFeed() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*, locations(name), post_images(image_url, sort_order), likes(user_id)')
    .order('created_at', { ascending: false });

  if (error) { console.error(error); return; }

  const now = Date.now();
  allPosts = (posts || []).filter(p => {
    const endPlus3 = new Date(p.discount_end).getTime() + 3 * 86400000;
    return endPlus3 > now;
  });

  const hasActive = allPosts.some(p => new Date(p.discount_end).getTime() > now);
  const dnDot = $('dn-hot-dot');
  const mnbDot = $('mnb-hot-dot');
  if (dnDot) dnDot.style.display = hasActive ? 'inline-block' : 'none';
  if (mnbDot) mnbDot.style.display = hasActive ? 'block' : 'none';

  renderFeed();
}

function setMarketFilter(m) {
  marketFilter = m;
  document.querySelectorAll('.mtab').forEach(t => t.classList.toggle('active', t.dataset.market === m));
  renderFeed();
}

function renderFeed() {
  const filtered = marketFilter === 'all'
    ? allPosts
    : allPosts.filter(p => String(p.location_id) === marketFilter);

  const wrap = $('discount-feed');
  const emptyMsg = $('feed-empty');
  const moreBtn = $('feed-more-btn');
  if (!wrap) return;

  if (filtered.length === 0) {
    wrap.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (moreBtn) moreBtn.style.display = 'none';
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';

  const visible = feedExpanded ? filtered : filtered.slice(0, 3);
  wrap.innerHTML = visible.map(postCardHtml).join('');
  if (moreBtn) {
    moreBtn.style.display = filtered.length > 3 ? 'inline-flex' : 'none';
    st('feed-more-txt', feedExpanded ? 'کەمتری پیشان بدە' : 'زیاتر ببینە');
  }

  startCountdowns();
}

function toggleFeedExpand() { feedExpanded = !feedExpanded; renderFeed(); }

function postCardHtml(p) {
  const cover = (p.post_images || []).slice().sort((a,b)=>a.sort_order-b.sort_order)[0];
  const coverUrl = cover ? cover.image_url : '';
  const ended = new Date(p.discount_end).getTime() < Date.now();
  const likeCount = (p.likes || []).length;
  const marketName = p.locations?.name || '';
  return `
    <article class="post-card" data-id="${p.id}" onclick="openLightbox('${p.id}')">
      ${ended ? '<span class="post-ended-badge">داشکاندن تەواو بوو</span>' : ''}
      <div class="post-cover"><img src="${coverUrl}" loading="lazy"></div>
      <div class="post-body">
        <h4 class="post-title">${escapeHtml(p.title)}</h4>
        <p class="post-countdown" data-end="${p.discount_end}"></p>
        <div class="post-meta">
          <span>${escapeHtml(marketName)}</span>
          <span><i class="fas fa-heart"></i> ${likeCount}</span>
        </div>
      </div>
    </article>`;
}

function escapeHtml(s) {
  return (s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function startCountdowns() {
  if (countdownTimer) clearInterval(countdownTimer);
  updateCountdowns();
  countdownTimer = setInterval(updateCountdowns, 1000);
}
function updateCountdowns() {
  document.querySelectorAll('.post-countdown').forEach(el => {
    const end = new Date(el.dataset.end).getTime();
    const diff = end - Date.now();
    if (diff <= 0) { el.textContent = 'داشکاندن تەواو بوو'; el.classList.add('ended'); return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    el.textContent = d > 0 ? `${d} ڕۆژ و ${h} کاژێر ماوە` : `${h} کاژێر و ${m} خولەک ماوە`;
  });
}

document.addEventListener('click', e => {
  const tab = e.target.closest('.mtab');
  if (tab) setMarketFilter(tab.dataset.market);
});

/* ════════════════════════════════════════════════
   LIGHTBOX
════════════════════════════════════════════════ */
async function openLightbox(postId) {
  lightboxPost = allPosts.find(p => p.id === postId);
  if (!lightboxPost) return;
  lightboxIndex = 0;

  st('lb-title', lightboxPost.title);
  st('lb-detail', lightboxPost.detail || '');
  const delBtn = $('lb-admin-delete');
  if (delBtn) delBtn.style.display = isAdmin ? 'inline-flex' : 'none';

  renderLightboxImages();
  renderLightboxLike();
  await loadComments(postId);

  $('lightbox-ov').classList.add('open');
}
function closeLightbox() {
  $('lightbox-ov').classList.remove('open');
  lightboxPost = null;
}

function renderLightboxImages() {
  const imgs = (lightboxPost.post_images || []).slice().sort((a,b)=>a.sort_order-b.sort_order);
  const ratio = lightboxPost.gallery_ratio || '1:1';
  const box = $('lb-imgs');
  box.parentElement.style.setProperty('--ratio', ratio.replace(':', '/'));
  box.innerHTML = imgs.map((img, i) => `<img src="${img.image_url}" class="${i===lightboxIndex?'active':''}">`).join('');
}
function lbPrev() {
  const imgs = $('lb-imgs').children;
  if (imgs.length === 0) return;
  lightboxIndex = (lightboxIndex - 1 + imgs.length) % imgs.length;
  Array.from(imgs).forEach((im,i)=>im.classList.toggle('active', i===lightboxIndex));
}
function lbNext() {
  const imgs = $('lb-imgs').children;
  if (imgs.length === 0) return;
  lightboxIndex = (lightboxIndex + 1) % imgs.length;
  Array.from(imgs).forEach((im,i)=>im.classList.toggle('active', i===lightboxIndex));
}

function renderLightboxLike() {
  const likes = lightboxPost.likes || [];
  st('lb-like-count', likes.length);
  const likedNow = currentUser && likes.some(l => l.user_id === currentUser.id);
  $('lb-like-btn').classList.toggle('liked', !!likedNow);
}

async function toggleLike() {
  if (!currentUser) { openAuthModal(); return; }
  const likes = lightboxPost.likes || [];
  const already = likes.find(l => l.user_id === currentUser.id);
  if (already) {
    await supabase.from('likes').delete().eq('post_id', lightboxPost.id).eq('user_id', currentUser.id);
    lightboxPost.likes = likes.filter(l => l.user_id !== currentUser.id);
  } else {
    await supabase.from('likes').insert({ post_id: lightboxPost.id, user_id: currentUser.id });
    lightboxPost.likes = [...likes, { user_id: currentUser.id }];
  }
  renderLightboxLike();
}

/* ════════════════════════════════════════════════
   COMMENTS
════════════════════════════════════════════════ */
async function loadComments(postId) {
  const { data, error } = await supabase
    .from('comments')
    .select('*, profiles(display_name, avatar_url)')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });
  if (error) { console.error(error); return; }
  renderComments(data || []);
}

function renderComments(comments) {
  const top = comments.filter(c => !c.parent_comment_id);
  const replies = comments.filter(c => c.parent_comment_id);
  const box = $('lb-comments');
  box.innerHTML = top.map(c => {
    const myReplies = replies.filter(r => r.parent_comment_id === c.id);
    return `
      <div class="comment-row">
        <img class="comment-av" src="${c.profiles?.avatar_url || ('https://api.dicebear.com/7.x/thumbs/svg?seed=' + c.user_id)}">
        <div class="comment-body">
          <span class="comment-name">${escapeHtml(c.profiles?.display_name || 'بەکارهێنەر')}</span>
          <p class="comment-text">${escapeHtml(c.content)}</p>
          ${myReplies.map(r => `
            <div class="comment-reply">
              <span class="comment-name admin-tag">ئەدمین</span>
              <p class="comment-text">${escapeHtml(r.content)}</p>
            </div>`).join('')}
          ${isAdmin ? `<button class="comment-reply-btn" onclick="replyTo('${c.id}')">وەڵام</button>` : ''}
          ${(isAdmin || (currentUser && currentUser.id === c.user_id)) ? `<button class="comment-del-btn" onclick="deleteComment('${c.id}')">سڕینەوە</button>` : ''}
        </div>
      </div>`;
  }).join('');
}

function replyTo(commentId) {
  replyingTo = commentId;
  const input = $('lb-comment-input');
  input.placeholder = 'وەڵامدانەوە...';
  input.focus();
}

async function submitComment() {
  if (!currentUser) { openAuthModal(); return; }
  const input = $('lb-comment-input');
  const content = input.value.trim();
  if (!content) return;
  const row = { post_id: lightboxPost.id, user_id: currentUser.id, content };
  if (replyingTo) row.parent_comment_id = replyingTo;
  const { error } = await supabase.from('comments').insert(row);
  if (!error) {
    input.value = '';
    replyingTo = null;
    input.placeholder = 'کۆمێنتێک بنووسە...';
    await loadComments(lightboxPost.id);
  }
}

async function deleteComment(id) {
  await supabase.from('comments').delete().eq('id', id);
  await loadComments(lightboxPost.id);
}

/* ════════════════════════════════════════════════
   BACKEND INIT
════════════════════════════════════════════════ */
initAuth();
loadFeed();
