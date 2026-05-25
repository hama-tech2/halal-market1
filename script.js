/* ═══════════════════════════════════════════════
   HALAL MARKET  |  script.js  v4 final
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

/* ── Why-us items stagger ─────────────────────── */
gsap.from('.wu-item', {
  y: 30, opacity: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
  scrollTrigger: { trigger: '.why-us', start: 'top 88%', toggleActions: 'play none none none' },
});

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
   REVIEW SCORE  0 → 4.9  ★ CORRECT VERSION
   Proxy object animated with gsap.to()
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
   LIKE BUTTON + CONFETTI
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
   Kurdish default. Button shows "عربي" (next choice).
   Click → 3-option dropdown.
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

  // Update hero side overlay for LTR
  const side = $qs('.hero-ov-side');
  if (side) {
    side.style.background = l === 'en'
      ? 'linear-gradient(to left,rgba(4,3,8,.5) 0%,transparent 50%)'
      : 'linear-gradient(to right,rgba(4,3,8,.5) 0%,transparent 50%)';
  }

  // Checkmarks
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

  // Hero
  st('h-eyebrow', t.eyebrow);
  st('h-sub',     t.sub);
  st('h-btn1',    t.btn1);
  st('h-btn2',    t.btn2);

  // Lang button label
  st('lang-label', t.langLabel);

  // Why-us
  st('wu1-title', t.wu1t); st('wu1-sub', t.wu1s);
  st('wu2-title', t.wu2t); st('wu2-sub', t.wu2s);
  st('wu3-title', t.wu3t); st('wu3-sub', t.wu3s);
  st('wu4-title', t.wu4t); st('wu4-sub', t.wu4s);

  // Promo
  st('promo-title', t.promoTitle); st('promo-sub', t.promoSub);
  st('b1-tag', t.b1tag); st('b2-tag', t.b2tag);
  st('map-btn1', t.map1); st('map-btn2', t.map2);

  // About
  st('about-title',  t.aboutTitle); st('about-sub',  t.aboutSub);
  st('about-pill',   t.aboutPill);
  st('about-cap-h',  t.aboutCapH);  st('about-cap-p', t.aboutCapP);

  // Locations
  st('locs-title',  t.locsTitle); st('locs-sub',   t.locsSub);
  st('loc1-name',   t.loc1);      st('loc1-addr',  t.loc1addr);
  st('loc2-name',   t.loc2);      st('loc2-addr',  t.loc2addr);
  st('lopen1', t.open); st('lopen2', t.open);

  // Reviews
  st('rev-title',    t.revTitle);  st('rev-sub',    t.revSub);
  st('rev-count',    t.revCount);
  st('rev-cta-lbl',  t.revCtaLbl);
  if (!liked) { st('like-text', t.likeText); st('like-count', t.likeCount) }

  // Worker
  st('worker-title', t.workerTitle); st('worker-sub', t.workerSub);
  st('wc1-tag',  t.wc1tag); st('wc1-title', t.wc1h); st('wc1-txt', t.wc1p);
  st('wc2-tag',  t.wc2tag); st('wc2-title', t.wc2h); st('wc2-txt', t.wc2p);
  st('wc1-wa', t.waBtn);    st('wc2-wa', t.waBtn);

  // Footer
  st('footer-copy', t.copy);

  // Mobile nav
  st('mn-home',  t.navHome); st('mn-disc',  t.navDisc);
  st('mn-locs',  t.navLocs); st('mn-work',  t.navWork); st('mn-about', t.navAbout);

  // Drawer
  st('di-home',  t.drHome); st('di-promo', t.drDisc);
  st('di-locs',  t.drLocs); st('di-work',  t.drWork); st('di-about', t.drAbout);

  // Desktop nav
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

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
applyTranslations();
