/* ═══════════════════════════════════════════════════
   HALAL MARKET v3  |  script.js
   – GSAP hero, scroll reveal, tilt, magnetic
   – Fixed review score: 0 → 4.9
   – Like button + confetti (pure frontend)
   – Language switcher (1 button, Kurdish default)
═══════════════════════════════════════════════════ */

/* ── DATA ─────────────────────────────────────── */
const REVIEWS = [
  { name:'ئاکۆ عومەر',   ckb:'کاڵاکانی تازە و نرخەکانی زۆر باشن. دووکانی پێویستم بۆ مانگی کرد!',       ar:'المنتجات طازجة والأسعار ممتازة. أصبح متجري المفضل!',       en:'Fresh products and great prices. My go-to store every week!',       stars:5 },
  { name:'سارا حسن',     ckb:'خزمەتگوزاری زۆر باشە و شوێنەکەش بیناوی و سەلامەتە.',                      ar:'الخدمة رائعة والمكان نظيف جداً.',                            en:'Wonderful service and a very clean space.',                          stars:5 },
  { name:'محمد خالد',    ckb:'داشکاندنەکانیان هەموو هەفتەیەک نوێن. پیشنیاری دەکەم.',                    ar:'العروض الأسبوعية دائماً جديدة. أنصح بالزيارة.',              en:'Weekly offers are always fresh. Highly recommended.',                stars:5 },
  { name:'ریوار بەکر',   ckb:'برنج و کاڵای خواردنی کوالێتییەکەی زۆر باشە.',                             ar:'جودة الأرز والمواد الغذائية ممتازة.',                         en:'Rice and food quality is excellent.',                                stars:4 },
  { name:'دلاور ئەحمەد', ckb:'هەموو ئەوەی پێویستمە لێرەدا دەدۆزمەوە. زۆر سوپاس.',                     ar:'أجد كل ما أحتاجه هنا. شكراً جزيلاً.',                       en:'I find everything I need here. Thank you so much.',                  stars:5 },
];

/* ── TRANSLATIONS ─────────────────────────────── */
const TX = {
  ckb:{
    eyebrow:'هەولێر · کوردستان',
    sub:'تازەترین کاڵا · باشترین نرخ · دووکانی متمانەپێکراوی کوردستان',
    btn1:'داشکاندنەکان', btn2:'شوێنەکانمان',
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
let lang = 'ckb';
let drawerOpen = false;
let langOpen = false;
let likeUsed = false;

/* ── HELPERS ──────────────────────────────────── */
const $ = id => document.getElementById(id);
function go(id){ document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }) }
function st(id, v){ const e=$(id); if(e) e.textContent=v }
function si(id, v){ const e=$(id); if(e) e.innerHTML=v }

/* ════════════════════════════════════════════════
   GSAP INIT
════════════════════════════════════════════════ */
gsap.registerPlugin(ScrollTrigger);

/* ── VIDEO INIT ───────────────────────────────── */
(function(){
  const v = $('hero-vid');
  if (!v) return;
  const p = v.play();
  if (p) p.catch(() => { v.muted = true; v.play().catch(() => {}) });
  v.addEventListener('error', () => { v.parentElement.style.display='none' });
})();

/* ── CANVAS PARTICLES ─────────────────────────── */
(function(){
  const canvas = $('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];

  function newP(){
    return {
      x: Math.random() * W,
      y: H + 4,
      r: Math.random() * 1.4 + 0.3,
      vx:(Math.random() - 0.5) * 0.28,
      vy:-(Math.random() * 0.38 + 0.1),
      a: Math.random() * 0.55,
      da:Math.random() * 0.0025 + 0.001,
      gold: Math.random() > 0.45,
    };
  }

  function init(){
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    pts = Array.from({ length:48 }, () => {
      const p = newP(); p.y = Math.random() * H; return p;
    });
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach((p,i) => {
      p.x += p.vx; p.y += p.vy; p.a -= p.da;
      if (p.a <= 0 || p.y < -6){ pts[i] = newP(); return }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.gold
        ? `rgba(212,168,67,${p.a})`
        : `rgba(255,250,235,${p.a * 0.55})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  init(); draw();
  window.addEventListener('resize', init, { passive:true });
})();

/* ── SCROLL PROGRESS ──────────────────────────── */
window.addEventListener('scroll', () => {
  const prog = $('scroll-prog');
  if (!prog) return;
  const max = document.body.scrollHeight - window.innerHeight;
  prog.style.width = ((window.scrollY / max) * 100) + '%';
}, { passive:true });

/* ── HEADER SCROLL SHADOW ─────────────────────── */
window.addEventListener('scroll', () => {
  $('hdr')?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive:true });

/* ── CUSTOM CURSOR ────────────────────────────── */
(function(){
  if (window.innerWidth <= 640) return;
  const dot  = $('cur-dot');
  const ring = $('cur-ring');
  if (!dot || !ring) return;
  let rx=0, ry=0, mx=0, my=0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    gsap.to(dot, { x:mx, y:my, duration:0.08, ease:'none' });
  });

  (function trackRing(){
    rx += (mx-rx) * 0.1;
    ry += (my-ry) * 0.1;
    gsap.set(ring, { x:rx, y:ry });
    requestAnimationFrame(trackRing);
  })();

  /* Hover state on interactive elements */
  const hoverEls = document.querySelectorAll('a,button,.loc-card,.wc-card,.rev-card');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hov'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hov'));
  });

  /* Click shrink */
  document.addEventListener('mousedown', () => gsap.to(ring, { scale:0.72, duration:0.12 }));
  document.addEventListener('mouseup',   () => gsap.to(ring, { scale:1, duration:0.22, ease:'back.out(2)' }));
})();

/* ════════════════════════════════════════════════
   TICKER
════════════════════════════════════════════════ */
(function(){
  const items = [
    'حلال مارکێت · Halal Market',
    'کاڵای تازە · Fresh Products',
    'باشترین نرخ · Best Prices',
    'هەولێر · Erbil Kurdistan',
    '٠٧٥١ ٧٩٨ ٥٩٧١',
    '٠٧٥٠ ٧٣٦ ٤٦١٥',
  ];
  const track = $('ticker-track');
  let html = '';
  for (let i=0; i<4; i++) items.forEach(x => { html += `<span>${x}</span>` });
  track.innerHTML = html;
})();

/* ════════════════════════════════════════════════
   HERO ENTRANCE  —  GSAP timeline
════════════════════════════════════════════════ */
(function heroEntrance(){
  const tl = gsap.timeline({ delay:0.22 });

  // Eyebrow fade up
  tl.to('.hero-eyebrow', {
    opacity:1, y:0,
    duration:0.7, ease:'power3.out',
  }, 0);

  // Title: word mask reveal  (translateY 105% → 0)
  tl.to('#hw1', {
    y:'0%', duration:1, ease:'power4.out',
  }, 0.18);

  tl.to('#hw2', {
    y:'0%', duration:1, ease:'power4.out',
  }, 0.34);

  // Subtitle
  tl.to('.hero-sub', {
    opacity:1, y:0, duration:0.8, ease:'power3.out',
  }, 0.68);

  // Buttons
  tl.to('.hero-actions', {
    opacity:1, y:0, duration:0.7, ease:'power3.out',
  }, 0.86);

  // Subtle video zoom-in as you scroll
  gsap.to('.hero-video-wrap video', {
    scale:1.07, ease:'none',
    scrollTrigger:{
      trigger:'#hero', start:'top top', end:'bottom top',
      scrub:1.5,
    },
  });

  // Hero body drifts up on scroll
  gsap.to('.hero-body', {
    y:-50, opacity:0.5, ease:'none',
    scrollTrigger:{
      trigger:'#hero', start:'top top', end:'70% top',
      scrub:1.2,
    },
  });
})();

/* ════════════════════════════════════════════════
   SCROLL REVEAL  —  [data-reveal] elements
════════════════════════════════════════════════ */
(function initReveal(){
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const delay = parseFloat(el.getAttribute('data-delay') || 0);
    gsap.to(el, {
      opacity:1, y:0, duration:0.8, delay,
      ease:'power3.out',
      scrollTrigger:{
        trigger:el, start:'top 88%',
        toggleActions:'play none none none',
      },
    });
  });
})();

/* ── About image: clip-path wipe ─────────────── */
(function(){
  const img = document.querySelector('.about-img');
  if (!img) return;
  gsap.fromTo(img,
    { clipPath:'inset(0 100% 0 0)', scale:1.08 },
    { clipPath:'inset(0 0% 0 0)',   scale:1,
      duration:1.2, ease:'power4.inOut',
      scrollTrigger:{ trigger:'.about-card', start:'top 80%', toggleActions:'play none none none' },
    }
  );
})();

/* ── Location cards stagger ──────────────────── */
gsap.from('.loc-card', {
  y:50, opacity:0, duration:0.75, stagger:0.16, ease:'power3.out',
  scrollTrigger:{ trigger:'.locs-grid', start:'top 84%', toggleActions:'play none none none' },
});

/* ── Worker cards stagger ────────────────────── */
gsap.from('.wc-card', {
  y:50, opacity:0, duration:0.75, stagger:0.16, ease:'power3.out',
  scrollTrigger:{ trigger:'.worker-grid', start:'top 84%', toggleActions:'play none none none' },
});

/* ════════════════════════════════════════════════
   REVIEW SCORE ANIMATION  —  FIXED (0 → 4.9)
   Using gsap.to() on a proxy object — correct way
════════════════════════════════════════════════ */
(function initScoreAnim(){
  const el = $('rev-score-el');
  if (!el) return;

  // Proxy object — we animate this, not the DOM directly
  const proxy = { val: 0 };

  ScrollTrigger.create({
    trigger: '.rev-summary',
    start: 'top 85%',
    once: true,
    onEnter(){
      gsap.to(proxy, {
        val: 4.9,
        duration: 1.9,
        ease: 'power3.out',
        onUpdate(){
          el.textContent = proxy.val.toFixed(1);
        },
        onComplete(){
          el.textContent = '4.9';
        },
      });
    },
  });
})();

/* ── Review rating bars fill ─────────────────── */
(function(){
  document.querySelectorAll('.rbf').forEach(bar => {
    const w = bar.getAttribute('data-w') + '%';
    gsap.to(bar, {
      width: w, duration:1.3, ease:'power3.out',
      scrollTrigger:{ trigger:bar, start:'top 88%', toggleActions:'play none none none' },
    });
  });
})();

/* ── Drag-to-scroll reviews ─────────────────── */
(function(){
  const track = $('rev-cards');
  if (!track) return;
  let down=false, sx=0, sl=0;
  track.addEventListener('mousedown', e =>{ down=true; sx=e.pageX-track.offsetLeft; sl=track.scrollLeft });
  track.addEventListener('mouseleave', () => down=false );
  track.addEventListener('mouseup',   () => down=false );
  track.addEventListener('mousemove', e =>{
    if (!down) return; e.preventDefault();
    track.scrollLeft = sl - (e.pageX - track.offsetLeft - sx) * 1.4;
  });
})();

/* ════════════════════════════════════════════════
   LIKE BUTTON  —  Confetti interaction
════════════════════════════════════════════════ */
function handleLike(e){
  if (likeUsed) return;
  likeUsed = true;

  const btn = $('like-btn');
  const t   = TX[lang];

  // State change
  btn.classList.add('liked');
  st('like-text',  t.likeDone);
  st('like-count', '');

  // Micro-bounce
  gsap.fromTo(btn,
    { scale:0.94 },
    { scale:1, duration:0.5, ease:'elastic.out(1.2,0.5)' }
  );

  // Gold glow pulse
  gsap.fromTo(btn,
    { boxShadow:'0 0 0px rgba(212,168,67,0)' },
    { boxShadow:'0 0 36px rgba(212,168,67,.55)', duration:0.25,
      yoyo:true, repeat:3, ease:'power2.inOut' }
  );

  // Confetti burst
  launchConfetti(e.clientX, e.clientY);
}

function launchConfetti(cx, cy){
  const COLORS = ['#d4a843','#f0c656','#fff','#c8962c','#fffbe8','#e8c06a'];
  const COUNT  = 18;

  for (let i=0; i<COUNT; i++){
    const p = document.createElement('div');
    p.className = 'confetti-p';
    p.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(p);

    const angle  = (i / COUNT) * Math.PI * 2;
    const spread = 55 + Math.random() * 70;
    const tx = Math.cos(angle) * spread;
    const ty = Math.sin(angle) * spread - 45;

    gsap.set(p, { x:cx, y:cy, xPercent:-50, yPercent:-50 });
    gsap.to(p, {
      x: cx + tx,
      y: cy + ty,
      rotation: Math.random() * 540,
      opacity: 0,
      scale: 0,
      duration: 0.7 + Math.random() * 0.5,
      ease:'power2.out',
      onComplete: () => p.remove(),
    });
  }
}

/* ════════════════════════════════════════════════
   DRAWER
════════════════════════════════════════════════ */
function toggleDrawer(){ drawerOpen ? closeDrawer() : openDrawer() }

function openDrawer(){
  drawerOpen = true;
  $('drw-ov').classList.add('open');
  $('ham').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer(){
  drawerOpen = false;
  $('drw-ov').classList.remove('open');
  $('ham').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOvClick(e){
  if (e.target === $('drw-ov')) closeDrawer();
}

/* ════════════════════════════════════════════════
   LANGUAGE SWITCHER
   Default display lang: Kurdish (ckb)
   Button label: shows Arabic ("عربي") when Kurdish active
   Dropdown: 3 options shown on click
════════════════════════════════════════════════ */
function toggleLang(){
  langOpen = !langOpen;
  $('lang-menu').classList.toggle('open', langOpen);
  $('lang-chev').classList.toggle('open', langOpen);
}

// Close when clicking outside
document.addEventListener('click', e => {
  const w = $('lang-wrap');
  if (w && !w.contains(e.target) && langOpen){
    langOpen = false;
    $('lang-menu').classList.remove('open');
    $('lang-chev').classList.remove('open');
  }
});

function setLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir  = l === 'en' ? 'ltr' : 'rtl';

  // Update hero side overlay
  const side = document.querySelector('.hero-ov-side');
  if (side){
    side.style.background = l === 'en'
      ? 'linear-gradient(to left,rgba(5,4,8,.72) 0%,transparent 52%)'
      : 'linear-gradient(to right,rgba(5,4,8,.72) 0%,transparent 52%)';
  }

  // Check marks
  ['ckb','ar','en'].forEach(x => {
    const opt = $(`lo-${x}`);
    const ck  = $(`lck-${x}`);
    if (opt) opt.classList.toggle('active', x===l);
    if (ck)  ck.style.opacity = x===l ? '1' : '0';
  });

  // Close menu
  langOpen = false;
  $('lang-menu').classList.remove('open');
  $('lang-chev').classList.remove('open');

  applyTranslations();
}

/* ── Apply all translations ──────────────────── */
function applyTranslations(){
  const t = TX[lang];

  // Hero
  st('h-eyebrow', t.eyebrow);
  st('h-sub',     t.sub);
  st('h-btn1',    t.btn1);
  st('h-btn2',    t.btn2);

  // Lang button label
  st('lang-label', t.langLabel);

  // Promo
  st('promo-title', t.promoTitle); st('promo-sub', t.promoSub);
  st('b1-tag', t.b1tag); st('b2-tag', t.b2tag);
  st('map-btn1', t.map1); st('map-btn2', t.map2);

  // About
  st('about-title',  t.aboutTitle); st('about-sub',  t.aboutSub);
  st('about-pill',   t.aboutPill);
  st('about-cap-h',  t.aboutCapH);  st('about-cap-p', t.aboutCapP);

  // Locations
  st('locs-title', t.locsTitle); st('locs-sub',  t.locsSub);
  st('loc1-name',  t.loc1);      st('loc1-addr', t.loc1addr);
  st('loc2-name',  t.loc2);      st('loc2-addr', t.loc2addr);
  st('lopen1', t.open); st('lopen2', t.open);

  // Reviews
  st('rev-title',    t.revTitle);  st('rev-sub',   t.revSub);
  st('rev-count',    t.revCount);
  st('rev-cta-lbl',  t.revCtaLbl);
  if (!likeUsed){
    st('like-text',  t.likeText);
    st('like-count', t.likeCount);
  }

  // Worker
  st('worker-title', t.workerTitle); st('worker-sub', t.workerSub);
  st('wc1-tag',  t.wc1tag);  st('wc1-title', t.wc1h); st('wc1-txt', t.wc1p);
  st('wc2-tag',  t.wc2tag);  st('wc2-title', t.wc2h); st('wc2-txt', t.wc2p);
  st('wc1-wa', t.waBtn);     st('wc2-wa', t.waBtn);

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

/* ── Build review cards ──────────────────────── */
function buildReviews(){
  const c = $('rev-cards');
  if (!c) return;
  c.innerHTML = REVIEWS.map(r => {
    const stars = Array.from({length:5}, (_,i) =>
      `<i class="fas fa-star" style="opacity:${i<r.stars?1:.18}"></i>`
    ).join('');
    return `
      <div class="rev-card">
        <div class="rv-stars">${stars}</div>
        <p class="rv-txt">${r[lang]||r.en}</p>
        <div class="rv-footer">
          <div class="rv-av">👤</div>
          <span class="rv-name">${r.name}</span>
        </div>
      </div>`;
  }).join('');
}

/* ════════════════════════════════════════════════
   ACTIVE SECTION  —  IntersectionObserver
════════════════════════════════════════════════ */
(function(){
  const map = {
    hero:    { mnb:'mnb-hero',   dn:'dn-hero'   },
    promo:   { mnb:'mnb-promo',  dn:'dn-promo'  },
    about:   { mnb:'mnb-about',  dn:'dn-about'  },
    locs:    { mnb:'mnb-locs',   dn:'dn-locs'   },
    reviews: { mnb:'mnb-about',  dn:null        },
    worker:  { mnb:'mnb-worker', dn:'dn-worker' },
  };

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const m = map[entry.target.id];
      if (!m) return;
      document.querySelectorAll('.mnb').forEach(b => b.classList.remove('act'));
      document.querySelectorAll('.dn').forEach(b =>  b.classList.remove('act'));
      if (m.mnb) $( m.mnb)?.classList.add('act');
      if (m.dn)  $( m.dn )?.classList.add('act');
    });
  }, { threshold:0.22 });

  ['hero','promo','about','locs','reviews','worker'].forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
})();

/* ════════════════════════════════════════════════
   BUTTON RIPPLE  on click
════════════════════════════════════════════════ */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e){
    const r = this.getBoundingClientRect();
    const rip = document.createElement('span');
    rip.style.cssText = `
      position:absolute;
      left:${e.clientX - r.left}px;
      top:${e.clientY - r.top}px;
      width:6px; height:6px; border-radius:50%;
      background:rgba(255,255,255,.3);
      transform:translate(-50%,-50%) scale(0);
      pointer-events:none; z-index:10;
    `;
    this.appendChild(rip);
    gsap.to(rip, {
      scale:28, opacity:0, duration:0.55, ease:'power2.out',
      onComplete: () => rip.remove(),
    });
  });
});

/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */
applyTranslations();
