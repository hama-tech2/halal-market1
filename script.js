/* ═══════════════════════════════════════════════
   HALAL MARKET | script.js v6 — crash-safe + live server
═══════════════════════════════════════════════ */

/* GSAP is optional. If it fails to load, the site still works fully;
   it just loses the entrance animations. Content is NEVER hidden without it. */
const GSAP_OK = (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined');
if (GSAP_OK) {
  gsap.registerPlugin(ScrollTrigger);
  // Arm the hidden start-states only now that we know GSAP can un-hide them.
  document.documentElement.classList.add('reveal-armed');
}

/* ── HELPERS ── */
const $   = id  => document.getElementById(id);
const $qs = sel => document.querySelector(sel);
function go(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth'}) }
function st(id, v){ const e=$(id); if(e) e.textContent=v }
function escapeHtml(s){ return (s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])) }

/* ── REVIEW DATA ── */
const REVIEWS = [
  { name:'ئاکۆ عومەر', ckb:'کاڵاکانی تازە و نرخەکانی زۆر باشن. دووکانی پێویستم بۆ مانگی کرد!', ar:'المنتجات طازجة والأسعار ممتازة. أصبح متجري المفضل!', en:'Fresh products and great prices. My go-to store every week!', stars:5 },
  { name:'سارا حسن', ckb:'خزمەتگوزاری زۆر باشە و شوێنەکەش بیناوی و سەلامەتە.', ar:'الخدمة رائعة والمكان نظيف جداً.', en:'Wonderful service and a very clean space.', stars:5 },
  { name:'محمد خالد', ckb:'داشکاندنەکانیان هەموو هەفتەیەک نوێن. پیشنیاری دەکەم.', ar:'العروض الأسبوعية دائماً جديدة. أنصح بالزيارة.', en:'Weekly offers are always fresh. Highly recommended.', stars:5 },
  { name:'ریوار بەکر', ckb:'برنج و کاڵای خواردنی کوالێتییەکەی زۆر باشە.', ar:'جودة الأرز والمواد الغذائية ممتازة.', en:'Rice and food quality is excellent.', stars:4 },
  { name:'دلاور ئەحمەد', ckb:'هەموو ئەوەی پێویستمە لێرەدا دەدۆزمەوە. زۆر سوپاس.', ar:'أجد كل ما أحتاجه هنا. شكراً جزيلاً.', en:'I find everything I need here. Thank you so much.', stars:5 },
];

/* ── TRANSLATIONS ── */
const TX = {
  ckb:{ eyebrow:'هەولێر · کوردستان', sub:'تازەترین کاڵا · باشترین نرخ · دووکانی متمانەپێکراوی کوردستان', btn1:'داشکاندنەکان', btn2:'شوێنەکانمان',
    promoTitle:'داشکاندنەکان', promoSub:'ئۆفەرە تازەکان', mAll:'هەموو', m1:'حلال مارکێت ١', m2:'حلال مارکێت ٢', newPost:'داشکاندنێکی نوێ', feedEmpty:'هێشتا هیچ داشکاندنێک نییە', seeMore:'زیاتر ببینە', seeLess:'کەمتر پیشان بدە', cdD:'ڕۆژ', cdH:'کاژێر', cdM:'خولەک', cdS:'چرکە', cdEnded:'تەواو بوو', commented:'کۆمێنتیان کرد', notifNew:'داشکاندنی نوێ زیادکرا! 🏷️',
    aboutTitle:'بۆچی حلال مارکێت؟', aboutSub:'هۆکارەکانی هەڵبژاردنمان', aboutEyebrow:'کوالێتی کە متمانەی پێدەکەیت', aboutHead:'حلال مارکێت', aboutPara:'دووکانێکی تازەیی و سەلامەتی خواردنە کە بە باشترین کوالێتی و نرخی گونجاو خزمەتی کڕیارەکانی هەولێر دەکات. هەموو هەفتەیەک داشکاندنی نوێ، بەرهەمی تازە، و خزمەتگوزاری متمانەپێکراو. لقی یەکەم لە بنصڵاوە، لقی دووەم لە بەحرکە.', statL1:'لق لە هەولێر', statL2:'حەلاڵ و سەلامەت', statL3:'کڕیاری دڵخۆش', ab1:'تازە و پاک', ab2:'کوالێتی باش', ab3:'متمانە و دڵنیایی',
    locsTitle:'شوێنەکانمان', locsSub:'هەر دوو لقەکانمان', loc1:'حلال مارکێت – لقی یەکەم', loc1addr:'جووتسایدی بنصڵاوە تەنيشت مزگەوتی اسراو و ميعراج', loc2:'حلال مارکێت – لقی دووەم', loc2addr:'بەحركە - بەرامبەر بەنزینخانەی بەحركە', open:'کراوەیە',
    revTitle:'نرخاندنی کڕیارەکان', revSub:'نرخاندنی کڕیارەکانمان', revCount:'+٢٠٠ نرخاندن', revCtaLbl:'کاڵاکانمان باشت بوون؟', likeText:'نرخاندنت بنێرە', likeCount:'+٢٠٠', likeDone:'سوپاس! 🌟',
    workerTitle:'کارمەندی پێویستمانە', workerSub:'ئەگەر دەتەوێت کار بکەیت، پەیوەندیمان بکە', wc1tag:'لقی یەکەم', wc1h:'حلال مارکێت ١', wc1p:'ئەگەر دەتەوێت کارمەندی حلال مارکێت لقی یەکەم بیت، پەیامێک بنێرە یان پەیوەندیمان بکە.', wc2tag:'لقی دووەم', wc2h:'حلال مارکێت ٢', wc2p:'ئەگەر دەتەوێت کارمەندی حلال مارکێت لقی دووەم بیت، پەیامێک بنێرە یان پەیوەندیمان بکە.', waBtn:'پەیام بنێرە',
    copy:'© ٢٠٢٥ حلال مارکێت · هەولێر', navHome:'سەرەکی', navDisc:'داشکاندن', navLocs:'شوێن', navWork:'کارمەند', navAbout:'دەربارە', langLabel:'عربي' },
  ar:{ eyebrow:'أربيل · كوردستان', sub:'أطازج المنتجات · أفضل الأسعار · متجرك الموثوق في كوردستان', btn1:'العروض', btn2:'فروعنا',
    promoTitle:'العروض', promoSub:'أحدث الأسعار', mAll:'الكل', m1:'حلال ماركت ١', m2:'حلال ماركت ٢', newPost:'عرض جديد', feedEmpty:'لا توجد عروض بعد', seeMore:'عرض المزيد', seeLess:'عرض أقل', cdD:'يوم', cdH:'ساعة', cdM:'دقيقة', cdS:'ثانية', cdEnded:'انتهى', commented:'علّقوا', notifNew:'عرض جديد أُضيف! 🏷️',
    aboutTitle:'لماذا هلال ماركت؟', aboutSub:'أسباب اختيارنا', aboutEyebrow:'جودة تثق بها', aboutHead:'هلال ماركت', aboutPara:'متجر متخصص بالمواد الغذائية الطازجة بأعلى جودة وأفضل الأسعار يخدم عملاء أربيل. عروض جديدة كل أسبوع، منتجات طازجة، وخدمة موثوقة. الفرع الأول في بنسلاوة، الفرع الثاني في بحرگة.', statL1:'فرعان في أربيل', statL2:'حلال وآمن', statL3:'عميل سعيد', ab1:'طازج ونظيف', ab2:'جودة عالية', ab3:'ثقة وأمان',
    locsTitle:'فروعنا', locsSub:'كلا الفرعين', loc1:'هلال ماركت – الفرع الأول', loc1addr:'بنسلاوة سايدين بجانب جامع الاسراء والمعراج', loc2:'هلال ماركت – الفرع الثاني', loc2addr:'بحرگة - مقابل محطة وقود بحرگة', open:'مفتوح',
    revTitle:'آراء عملائنا', revSub:'ماذا يقول عملاؤنا', revCount:'+٢٠٠ تقييم', revCtaLbl:'أعجبك متجرنا؟', likeText:'أرسل تقييمك', likeCount:'+٢٠٠', likeDone:'شكراً! 🌟',
    workerTitle:'نحن نبحث عن موظفين', workerSub:'إذا أردت العمل معنا، تواصل معنا', wc1tag:'الفرع الأول', wc1h:'هلال ماركت ١', wc1p:'إذا أردت العمل في هلال ماركت الفرع الأول، أرسل رسالة أو اتصل بنا.', wc2tag:'الفرع الثاني', wc2h:'هلال ماركت ٢', wc2p:'إذا أردت العمل في هلال ماركت الفرع الثاني، أرسل رسالة أو اتصل بنا.', waBtn:'أرسل رسالة',
    copy:'© ٢٠٢٥ هلال ماركت · أربيل', navHome:'الرئيسية', navDisc:'العروض', navLocs:'الفروع', navWork:'التوظيف', navAbout:'عنّا', langLabel:'عربي' },
  en:{ eyebrow:'Erbil · Kurdistan', sub:'Freshest products · Best prices · Your trusted supermarket in Kurdistan', btn1:'View Deals', btn2:'Our Locations',
    promoTitle:'Discounts', promoSub:'Latest offers', mAll:'All', m1:'Halal Market 1', m2:'Halal Market 2', newPost:'New Deal', feedEmpty:'No deals yet', seeMore:'See more', seeLess:'See less', cdD:'DAYS', cdH:'HRS', cdM:'MIN', cdS:'SEC', cdEnded:'Ended', commented:'commented', notifNew:'New discount added! 🏷️',
    aboutTitle:'Why Halal Market?', aboutSub:'Reasons to choose us', aboutEyebrow:'Quality You Can Trust', aboutHead:'Halal Market', aboutPara:'A fresh and quality grocery store serving Erbil customers with the best products at great prices. New discounts every week, fresh products, and trusted service. Branch One in Binaslawa, Branch Two in Baharka.', statL1:'Branches in Erbil', statL2:'Halal & Safe', statL3:'Happy Customers', ab1:'Fresh & Clean', ab2:'High Quality', ab3:'Trust & Safety',
    locsTitle:'Our Locations', locsSub:'Both our branches', loc1:'Halal Market – Branch One', loc1addr:"Binaslawa Two-Way, Next to Al-Isra and Al-Mi'raj Mosque", loc2:'Halal Market – Branch Two', loc2addr:'Baharka - Opposite Baharka Gas Station', open:'Open Now',
    revTitle:'Customer Reviews', revSub:'What our customers say', revCount:'+200 reviews', revCtaLbl:'Enjoying Halal Market?', likeText:'Leave a review', likeCount:'+200', likeDone:'Thank you! 🌟',
    workerTitle:'We Are Hiring', workerSub:'If you want to work with us, get in touch', wc1tag:'Branch One', wc1h:'Halal Market 1', wc1p:'If you want to work at Halal Market Branch One, send us a message or call us.', wc2tag:'Branch Two', wc2h:'Halal Market 2', wc2p:'If you want to work at Halal Market Branch Two, send us a message or call us.', waBtn:'Send Message',
    copy:'© 2025 Halal Market · Erbil', navHome:'Home', navDisc:'Deals', navLocs:'Locations', navWork:'Jobs', navAbout:'About', langLabel:'EN' },
};

/* ── STATE ── */
let lang='ckb', drwOpen=false, langOpen=false, liked=false;

/* ════ TICKER ════ */
(function(){
  const items=['حلال مارکێت · Halal Market','کاڵای تازە · Fresh Daily','باشترین نرخ · Best Prices','هەولێر · Erbil Kurdistan','٠٧٥١ ٧٩٨ ٥٩٧١','٠٧٥٠ ٧٣٦ ٤٦١٥'];
  const track=$('ticker-track'); if(!track)return;
  let h=''; for(let i=0;i<4;i++) items.forEach(x=>{h+=`<span>${x}</span>`}); track.innerHTML=h;
})();

/* ════ HEADER hide/show ════ */
(function(){
  const hdr=$('hdr'); if(!hdr)return;
  let lastY=0,ticking=false;
  window.addEventListener('scroll',()=>{
    if(ticking)return;
    requestAnimationFrame(()=>{
      const y=window.scrollY;
      hdr.classList.toggle('scrolled',y>28);
      if(y>100){ if(y>lastY+5)hdr.classList.add('hidden'); if(y<lastY-8)hdr.classList.remove('hidden'); }
      else hdr.classList.remove('hidden');
      lastY=y; ticking=false;
    });
    ticking=true;
  },{passive:true});
})();

/* ════ SCROLL PROGRESS ════ */
(function(){
  const bar=$('scroll-prog'); if(!bar)return;
  window.addEventListener('scroll',()=>{
    const max=document.body.scrollHeight-window.innerHeight;
    bar.style.width=(window.scrollY/max*100)+'%';
  },{passive:true});
})();

/* ════ CUSTOM CURSOR (desktop, needs GSAP) ════ */
(function(){
  if(window.innerWidth<=640||!GSAP_OK)return;
  const dot=$('cur-dot'),ring=$('cur-ring'); if(!dot||!ring)return;
  document.body.classList.add('custom-cursor-on');
  let rx=0,ry=0,mx=0,my=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;gsap.to(dot,{x:mx,y:my,duration:.08,ease:'none'})});
  (function raf(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;gsap.set(ring,{x:rx,y:ry});requestAnimationFrame(raf)})();
  document.querySelectorAll('a,button,.loc-card,.wc-card,.rev-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('hov'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('hov'));
  });
})();

/* ════ VIDEO ════ */
(function(){
  const v=$('hero-vid'); if(!v)return;
  const p=v.play(); if(p)p.catch(()=>{v.muted=true;v.play().catch(()=>{})});
  v.addEventListener('error',()=>{v.parentElement.style.display='none'});
})();

/* ════ CANVAS PARTICLES ════ */
(function(){
  const canvas=$('hero-canvas'); if(!canvas)return;
  const ctx=canvas.getContext('2d'); let W,H,pts=[];
  function mkP(){return{x:Math.random()*W,y:H+4,r:Math.random()*1.3+.2,vx:(Math.random()-.5)*.24,vy:-(Math.random()*.34+.08),a:Math.random()*.5,da:Math.random()*.002+.001,gold:Math.random()>.45}}
  function init(){W=canvas.width=canvas.offsetWidth;H=canvas.height=canvas.offsetHeight;pts=Array.from({length:40},()=>{const p=mkP();p.y=Math.random()*H;return p})}
  function draw(){ctx.clearRect(0,0,W,H);pts.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;p.a-=p.da;if(p.a<=0||p.y<-5){pts[i]=mkP();return}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.gold?`rgba(212,168,67,${p.a})`:`rgba(255,250,235,${p.a*.48})`;ctx.fill()});requestAnimationFrame(draw)}
  init();draw();
  window.addEventListener('resize',init,{passive:true});
})();

/* ════ HERO ENTRANCE + SCROLL REVEAL (only if GSAP) ════ */
if(GSAP_OK){
  const tl=gsap.timeline({delay:.2});
  tl.to('.hero-eyebrow',{opacity:1,y:0,duration:.7,ease:'power3.out'},0);
  tl.to('#hw1',{y:'0%',duration:.95,ease:'power4.out'},.2);
  tl.to('#hw2',{y:'0%',duration:.95,ease:'power4.out'},.35);
  tl.to('.hero-sub',{opacity:1,y:0,duration:.75,ease:'power3.out'},.65);
  tl.to('.hero-ctas',{opacity:1,y:0,duration:.65,ease:'power3.out'},.82);
  gsap.to('.hero-vid-wrap video',{scale:1.06,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:1.5}});
  gsap.to('.hero-body',{y:-42,opacity:.5,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'65% top',scrub:1.2}});

  document.querySelectorAll('[data-reveal]').forEach(el=>{
    const d=parseFloat(el.getAttribute('data-delay')||0);
    gsap.to(el,{opacity:1,y:0,duration:.78,delay:d,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none none'}});
  });
  document.querySelectorAll('.loc-card').forEach((el,i)=>{
    gsap.from(el,{y:46,opacity:0,duration:.72,delay:i*.15,ease:'power3.out',scrollTrigger:{trigger:'.locs-grid',start:'top 84%',toggleActions:'play none none none'}});
  });
  document.querySelectorAll('.wc-card').forEach((el,i)=>{
    gsap.from(el,{y:46,opacity:0,duration:.72,delay:i*.15,ease:'power3.out',scrollTrigger:{trigger:'.worker-grid',start:'top 84%',toggleActions:'play none none none'}});
  });
  document.querySelectorAll('.sec-bar').forEach(bar=>{
    gsap.from(bar,{scaleY:0,transformOrigin:'top center',duration:.55,ease:'power3.out',scrollTrigger:{trigger:bar.closest('.sec-head'),start:'top 87%',toggleActions:'play none none none'}});
  });
  const scoreEl=$('rev-score-el');
  if(scoreEl){
    const proxy={val:0};
    ScrollTrigger.create({trigger:'.rev-summary',start:'top 85%',once:true,onEnter(){gsap.to(proxy,{val:4.9,duration:1.8,ease:'power3.out',onUpdate(){scoreEl.textContent=proxy.val.toFixed(1)},onComplete(){scoreEl.textContent='4.9'}})}});
  }
  document.querySelectorAll('.rbf').forEach(bar=>{
    gsap.to(bar,{width:bar.getAttribute('data-w')+'%',duration:1.3,ease:'power3.out',scrollTrigger:{trigger:bar,start:'top 88%',toggleActions:'play none none none'}});
  });
} else {
  // No GSAP: still fill the review bars and score so nothing looks broken.
  const scoreEl=$('rev-score-el'); if(scoreEl)scoreEl.textContent='4.9';
  document.querySelectorAll('.rbf').forEach(bar=>{bar.style.width=bar.getAttribute('data-w')+'%'});
}

/* ════ DRAG-SCROLL REVIEWS ════ */
(function(){
  const track=$('rev-cards'); if(!track)return;
  let isDown=false,sx=0,sl=0;
  track.addEventListener('mousedown',e=>{isDown=true;sx=e.pageX-track.offsetLeft;sl=track.scrollLeft});
  track.addEventListener('mouseleave',()=>isDown=false);
  track.addEventListener('mouseup',()=>isDown=false);
  track.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();track.scrollLeft=sl-(e.pageX-track.offsetLeft-sx)*1.4});
})();

/* ════ REVIEW LIKE + CONFETTI ════ */
function handleLike(e){
  if(liked)return; liked=true;
  const btn=$('like-btn'),t=TX[lang];
  btn.classList.add('liked'); st('like-text',t.likeDone); st('like-count','');
  if(GSAP_OK){
    gsap.fromTo(btn,{scale:.92},{scale:1,duration:.55,ease:'elastic.out(1.2,.5)'});
    launchConfetti(e.clientX,e.clientY);
  }
}
function launchConfetti(cx,cy){
  if(!GSAP_OK)return;
  const COLORS=['#d4a843','#f0c656','#ffffff','#c8962c','#fffbe8','#e8c06a','#fff8dc'];
  for(let i=0;i<22;i++){
    const p=document.createElement('div'); p.className='confetti-p';
    p.style.background=COLORS[i%COLORS.length]; p.style.borderRadius=Math.random()>.5?'50%':'3px';
    document.body.appendChild(p);
    const angle=(i/22)*Math.PI*2, spread=52+Math.random()*70;
    const tx=Math.cos(angle)*spread, ty=Math.sin(angle)*spread-52;
    gsap.set(p,{x:cx,y:cy,xPercent:-50,yPercent:-50});
    gsap.to(p,{x:cx+tx,y:cy+ty,rotation:Math.random()*520,opacity:0,scale:0,duration:.65+Math.random()*.45,ease:'power2.out',onComplete:()=>p.remove()});
  }
}
document.querySelectorAll('.cta-btn').forEach(btn=>{
  btn.addEventListener('click',function(e){
    if(!GSAP_OK)return;
    const r=this.getBoundingClientRect();
    const rip=document.createElement('span');
    rip.style.cssText=`position:absolute;left:${e.clientX-r.left}px;top:${e.clientY-r.top}px;width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.26);transform:translate(-50%,-50%) scale(0);pointer-events:none;z-index:10;`;
    this.appendChild(rip);
    gsap.to(rip,{scale:24,opacity:0,duration:.5,ease:'power2.out',onComplete:()=>rip.remove()});
  });
});

/* ════ DRAWER ════ */
function toggleDrawer(){ drwOpen?closeDrawer():openDrawer() }
function openDrawer(){ drwOpen=true; $('drw-ov').classList.add('open'); $('ham').classList.add('open'); document.body.style.overflow='hidden' }
function closeDrawer(){ drwOpen=false; $('drw-ov').classList.remove('open'); $('ham').classList.remove('open'); document.body.style.overflow='' }
function handleOvClick(e){ if(e.target===$('drw-ov'))closeDrawer() }

/* ════ LANGUAGE ════ */
function toggleLang(){
  langOpen=!langOpen;
  $('lang-menu').classList.toggle('open',langOpen);
  $('lang-chev').classList.toggle('open',langOpen);
}
document.addEventListener('click',e=>{
  const w=$('lang-wrap');
  if(w&&!w.contains(e.target)&&langOpen){langOpen=false;$('lang-menu').classList.remove('open');$('lang-chev').classList.remove('open')}
});
function setLang(l){
  lang=l;
  document.documentElement.lang=l;
  document.documentElement.dir=l==='en'?'ltr':'rtl';
  ['ckb','ar','en'].forEach(x=>{
    const opt=$(`lo-${x}`),ck=$(`lck-${x}`);
    if(opt)opt.classList.toggle('active',x===l);
    if(ck)ck.style.opacity=x===l?'1':'0';
  });
  langOpen=false; $('lang-menu').classList.remove('open'); $('lang-chev').classList.remove('open');
  applyTranslations();
  if(GSAP_OK)ScrollTrigger.refresh();
}

/* ════ APPLY TRANSLATIONS ════ */
function applyTranslations(){
  const t=TX[lang];
  st('h-eyebrow',t.eyebrow); st('h-sub',t.sub); st('h-btn1',t.btn1); st('h-btn2',t.btn2);
  st('lang-label',t.langLabel);
  const gTxt={ckb:'چوونەژوورەوە بە گووگڵ',ar:'الدخول عبر جوجل',en:'Continue with Google'};
  const orTxt={ckb:'یان',ar:'أو',en:'or'};
  st('google-btn-txt',gTxt[lang]); st('auth-or',orTxt[lang]);
  st('promo-title',t.promoTitle); st('promo-sub',t.promoSub);
  st('mtab-all',t.mAll); st('mtab-1',t.m1); st('mtab-2',t.m2);
  st('admin-newpost-txt',t.newPost); st('feed-empty',t.feedEmpty); st('collapse-fab-txt',t.seeLess);
  st('dn-home-t',t.navHome); st('dn-promo-t',t.navDisc); st('dn-locs-t',t.navLocs); st('dn-about-t',t.navAbout);
  st('about-title',t.aboutTitle); st('about-sub',t.aboutSub); st('about-eyebrow',t.aboutEyebrow); st('about-head',t.aboutHead); st('about-para',t.aboutPara);
  st('stat-l1',t.statL1); st('stat-l2',t.statL2); st('stat-l3',t.statL3);
  st('ab1',t.ab1); st('ab2',t.ab2); st('ab3',t.ab3);
  st('locs-title',t.locsTitle); st('locs-sub',t.locsSub); st('loc1-name',t.loc1); st('loc1-addr',t.loc1addr); st('loc2-name',t.loc2); st('loc2-addr',t.loc2addr); st('lopen1',t.open); st('lopen2',t.open);
  st('rev-title',t.revTitle); st('rev-sub',t.revSub); st('rev-count',t.revCount); st('rev-cta-lbl',t.revCtaLbl);
  if(!liked){st('like-text',t.likeText);st('like-count',t.likeCount)}
  st('worker-title',t.workerTitle); st('worker-sub',t.workerSub);
  st('wc1-tag',t.wc1tag); st('wc1-title',t.wc1h); st('wc1-txt',t.wc1p); st('wc2-tag',t.wc2tag); st('wc2-title',t.wc2h); st('wc2-txt',t.wc2p); st('wc1-wa',t.waBtn); st('wc2-wa',t.waBtn);
  st('footer-copy',t.copy);
  st('mn-home',t.navHome); st('mn-disc',t.navDisc); st('mn-locs',t.navLocs); st('mn-about',t.navAbout);
  st('di-home',t.navHome); st('di-promo',t.navDisc); st('di-locs',t.navLocs); st('di-work',t.navWork); st('di-about',t.navAbout);
  buildReviews();
}

/* ════ BUILD REVIEWS ════ */
function buildReviews(){
  const c=$('rev-cards'); if(!c)return;
  c.innerHTML=REVIEWS.map(r=>{
    const stars=Array.from({length:5},(_,i)=>`<i class="fas fa-star" style="opacity:${i<r.stars?1:.18}"></i>`).join('');
    return `<div class="rev-card"><div class="rv-stars">${stars}</div><p class="rv-txt">${r[lang]||r.en}</p><div class="rv-footer"><div class="rv-av">👤</div><span class="rv-name">${r.name}</span></div></div>`;
  }).join('');
}

/* ════ ACTIVE NAV ════ */
(function(){
  const map={hero:{mnb:'mnb-hero',dn:'dn-hero'},promo:{mnb:'mnb-promo',dn:'dn-promo'},about:{mnb:'mnb-about',dn:'dn-about'},locs:{mnb:'mnb-locs',dn:'dn-locs'},reviews:{mnb:'mnb-about',dn:null},worker:{mnb:'mnb-about',dn:null}};
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const m=map[entry.target.id]; if(!m)return;
      if(entry.target.id==='promo' && typeof markDiscountsSeen==='function'){ markDiscountsSeen(); }
      document.querySelectorAll('.mnb').forEach(b=>b.classList.remove('act'));
      document.querySelectorAll('.dn').forEach(b=>b.classList.remove('act'));
      if(m.mnb)$(m.mnb)?.classList.add('act');
      if(m.dn)$(m.dn)?.classList.add('act');
    });
  },{threshold:.22});
  ['hero','promo','about','locs','reviews','worker'].forEach(id=>{const el=$(id);if(el)obs.observe(el)});
})();

applyTranslations();


/* ═══════════════════════════════════════════════════════════════
   LIVE SERVER — Supabase + Cloudflare R2
   UPLOAD_WORKER_URL gets filled in during the Cloudflare step.
═══════════════════════════════════════════════════════════════ */
const SUPABASE_URL = 'https://xtgdiugwygvijcurcnxb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_RpfYTbJQOXWVzmKIWNro9Q_ATKgPEOA';
const UPLOAD_WORKER_URL = 'https://halal-market.mahmadmajed149.workers.dev';

const SERVER_READY = (typeof window.supabase !== 'undefined');
let sb = null;
if (SERVER_READY) sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    flowType: 'pkce',
    detectSessionInUrl: true,
    persistSession: true,
    autoRefreshToken: true
  }
});

let currentUser=null, currentProfile=null, isAdmin=false, authMode='login';
let allPosts=[], marketFilter='all', feedExpanded=false;
let selectedAdminFiles=[], lightboxPost=null, lightboxIndex=0, countdownTimer=null, replyingTo=null;
const MAX_RAW_MB=15;

/* ── AUTH ── */
async function initAuth(){
  if(!SERVER_READY)return;

  // Listen FIRST so we never miss the login event.
  sb.auth.onAuthStateChange((event,s)=>{
    if(s){ onLoggedIn(s, event); } else { onLoggedOut(); }
  });

  // If Google just sent us back with ?code=..., exchange it for a real session.
  const url=new URL(window.location.href);
  if(url.searchParams.get('code')){
    try{ await sb.auth.exchangeCodeForSession(window.location.href); }
    catch(e){ console.warn('code exchange failed',e); }
    history.replaceState(null,'',window.location.pathname); // clean the ?code=... after
  }

  const { data:{ session } } = await sb.auth.getSession();
  if(session) await onLoggedIn(session,'INITIAL');
}

async function onLoggedIn(session, event){
  currentUser=session.user;
  // maybeSingle() returns null instead of throwing when the row isn't there yet.
  let profile=null;
  try{
    const res=await sb.from('profiles').select('*').eq('id',currentUser.id).maybeSingle();
    profile=res.data;
  }catch(e){ console.warn('profile fetch failed, will retry',e); }

  // Brand-new Google user: the trigger may not have finished. Wait briefly + retry once.
  if(!profile){
    await new Promise(r=>setTimeout(r,900));
    try{
      const res=await sb.from('profiles').select('*').eq('id',currentUser.id).maybeSingle();
      profile=res.data;
    }catch(e){ console.warn('profile retry failed',e); }
  }
  currentProfile=profile;

  try{ const { data:ok } = await sb.rpc('is_admin'); isAdmin=ok===true; }catch{ isAdmin=false; }

  updateAccountUI();
  loadFeed();

  // Just close the login popup. Do NOT auto-open profile — site opens normally.
  if(event==='SIGNED_IN'){
    closeAuthModal();
  }
}

function onLoggedOut(){ currentUser=null;currentProfile=null;isAdmin=false;updateAccountUI();loadFeed(); }
function updateAccountUI(){
  const icon=$('acc-icon'); if(icon)icon.className=currentUser?'fas fa-user-check':'fas fa-user';
  const b=$('admin-newpost-btn'); if(b)b.style.display=isAdmin?'inline-flex':'none';
}
function handleAccountClick(){
  if(!SERVER_READY){ alert('پەیوەندی سێرڤەر هێشتا ئامادە نییە'); return; }
  currentUser?openProfileModal():openAuthModal();
}
function openAuthModal(){ $('auth-modal-ov').classList.add('open') }
function closeAuthModal(){ $('auth-modal-ov').classList.remove('open'); $('auth-error').textContent='' }
function setAuthMode(m){
  authMode=m;
  $('auth-tab-login').classList.toggle('active',m==='login');
  $('auth-tab-signup').classList.toggle('active',m==='signup');
  st('auth-submit-txt',m==='login'?'چوونەژوورەوە':'خۆتۆمارکردن');
}
async function submitAuth(){
  const email=$('auth-email').value.trim(), password=$('auth-password').value, err=$('auth-error');
  err.textContent='';
  if(!email||!password){err.textContent='ئیمەیل و وشەی نهێنی پێویستە';return}
  const { error } = authMode==='login'
    ? await sb.auth.signInWithPassword({email,password})
    : await sb.auth.signUp({email,password});
  if(error){err.textContent=error.message;return}
  closeAuthModal();
}
async function signInWithGoogle(){
  if(!SERVER_READY){ alert('پەیوەندی سێرڤەر هێشتا ئامادە نییە'); return; }
  const { error } = await sb.auth.signInWithOAuth({
    provider:'google',
    options:{ redirectTo: window.location.origin + window.location.pathname }
  });
  if(error) $('auth-error').textContent = error.message;
}
async function doLogout(){ await sb.auth.signOut(); closeProfileModal(); }

/* ── PROFILE ── */
function openProfileModal(){
  $('profile-avatar-img').src=currentProfile?.avatar_url||('https://api.dicebear.com/7.x/thumbs/svg?seed='+currentUser.id);
  $('profile-name-input').value=currentProfile?.display_name||'';
  const changed=currentProfile?.name_changed_at?new Date(currentProfile.name_changed_at):null;
  const daysLeft=changed?30-Math.floor((Date.now()-changed.getTime())/86400000):0;
  $('profile-name-note').textContent=daysLeft>0?`دەتوانیت ناو بگۆڕیت دوای ${daysLeft} ڕۆژ`:'';
  $('profile-modal-ov').classList.add('open');
}
function closeProfileModal(){ $('profile-modal-ov').classList.remove('open') }
async function saveProfileName(){
  const newName=$('profile-name-input').value.trim(); if(!newName)return;
  const changed=currentProfile?.name_changed_at?new Date(currentProfile.name_changed_at):null;
  const daysLeft=changed?30-Math.floor((Date.now()-changed.getTime())/86400000):0;
  if(daysLeft>0){alert(`دەتوانیت ناو بگۆڕیت دوای ${daysLeft} ڕۆژ`);return}
  const { error } = await sb.from('profiles').update({display_name:newName,name_changed_at:new Date().toISOString()}).eq('id',currentUser.id);
  if(!error){currentProfile.display_name=newName;currentProfile.name_changed_at=new Date().toISOString();closeProfileModal()}
}
async function handleAvatarChange(e){
  const file=e.target.files[0]; if(!file)return;
  try{
    const blob=await compressImage(file,400,120);
    const url=await uploadImageToR2(blob);
    await sb.from('profiles').update({avatar_url:url}).eq('id',currentUser.id);
    currentProfile.avatar_url=url; $('profile-avatar-img').src=url;
  }catch{ alert('کێشەیەک ڕوویدا لە بارکردنی وێنە') }
}

/* ── IMAGE COMPRESS + UPLOAD ── */
// Compress toward a target max file size (default ~500KB) while keeping quality high.
// Starts at high quality/large size; only steps down if the result exceeds targetKB.
function compressImage(file, maxWidth=2000, targetKB=500){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const img=new Image();
      img.onload=()=>{
        const scale=Math.min(1,maxWidth/img.width);
        const canvas=document.createElement('canvas');
        canvas.width=Math.round(img.width*scale);
        canvas.height=Math.round(img.height*scale);
        canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
        const targetBytes=targetKB*1024;
        // Try qualities from high to lower until it fits under the target size.
        const qualities=[0.92,0.86,0.8,0.74,0.68,0.6];
        let idx=0;
        const tryQ=()=>{
          canvas.toBlob(blob=>{
            if(!blob){ reject(new Error('compress failed')); return; }
            if(blob.size<=targetBytes || idx>=qualities.length-1){ resolve(blob); return; }
            idx++; tryQ();
          },'image/webp',qualities[idx]);
        };
        tryQ();
      };
      img.onerror=()=>reject(new Error('image load failed'));
      img.src=e.target.result;
    };
    reader.onerror=()=>reject(new Error('read failed'));
    reader.readAsDataURL(file);
  });
}
async function uploadImageToR2(blob){
  if(UPLOAD_WORKER_URL.includes('PASTE_YOUR')) throw new Error('Worker URL not set yet');
  const { data:{ session } } = await sb.auth.getSession();
  const fd=new FormData(); fd.append('file',blob,'image.webp');
  const res=await fetch(UPLOAD_WORKER_URL,{method:'POST',headers:{Authorization:`Bearer ${session.access_token}`},body:fd});
  if(!res.ok)throw new Error('upload failed: '+(await res.text()));
  return (await res.json()).url;
}

/* ── ADMIN NEW POST ── */
function openAdminModal(){
  selectedAdminFiles=[];
  $('admin-title').value=''; $('admin-detail').value=''; $('admin-days').value=7;
  $('admin-images').value=''; $('admin-image-preview').innerHTML=''; $('admin-error').textContent='';
  $('admin-modal-ov').classList.add('open');
}
function closeAdminModal(){ $('admin-modal-ov').classList.remove('open') }
function handleAdminImagesChange(e){
  const files=Array.from(e.target.files), err=$('admin-error'); err.textContent='';
  for(const f of files){
    if(f.size>MAX_RAW_MB*1024*1024){ err.textContent=`وێنەی "${f.name}" زۆر گەورەیە. تکایە بچووکتری بکەوە.`; continue; }
    selectedAdminFiles.push(f);
  }
  renderAdminPreview();
}
function renderAdminPreview(){
  $('admin-image-preview').innerHTML=selectedAdminFiles.map((f,i)=>`
    <div class="admin-thumb">
      <img src="${URL.createObjectURL(f)}">
      <button class="thumb-x" onclick="removeAdminImage(${i})">×</button>
      ${i>0?`<button class="thumb-move thumb-left" onclick="moveAdminImage(${i},-1)">‹</button>`:''}
      ${i<selectedAdminFiles.length-1?`<button class="thumb-move thumb-right" onclick="moveAdminImage(${i},1)">›</button>`:''}
    </div>`).join('');
}
function removeAdminImage(i){ selectedAdminFiles.splice(i,1); renderAdminPreview() }
function moveAdminImage(i,dir){
  const j=i+dir; if(j<0||j>=selectedAdminFiles.length)return;
  [selectedAdminFiles[i],selectedAdminFiles[j]]=[selectedAdminFiles[j],selectedAdminFiles[i]];
  renderAdminPreview();
}
async function submitNewPost(){
  const err=$('admin-error');
  const title=$('admin-title').value.trim(), detail=$('admin-detail').value.trim();
  const days=parseInt($('admin-days').value,10)||7, ratio=$('admin-ratio').value, marketId=parseInt($('admin-market').value,10);
  if(!title){err.textContent='ناونیشان پێویستە';return}
  if(selectedAdminFiles.length===0){err.textContent='لانیکەم یەک وێنە پێویستە';return}
  const btn=$('admin-submit-btn'); btn.disabled=true; st('admin-submit-txt','بارکردن...');
  try{
    const urls=[];
    for(const file of selectedAdminFiles){ urls.push(await uploadImageToR2(await compressImage(file,2000,500))); }
    const discountEnd=new Date(Date.now()+days*86400000).toISOString();
    const { data:post, error:pErr } = await sb.from('posts').insert({location_id:marketId,title,detail,discount_days:days,discount_end:discountEnd,gallery_ratio:ratio,created_by:currentUser.id}).select().single();
    if(pErr)throw pErr;
    const rows=urls.map((url,i)=>({post_id:post.id,image_url:url,sort_order:i}));
    const { error:iErr } = await sb.from('post_images').insert(rows);
    if(iErr)throw iErr;
    closeAdminModal(); loadFeed();
  }catch(e){ err.textContent='هەڵە: '+e.message; }
  finally{ btn.disabled=false; st('admin-submit-txt','بڵاوکردنەوە'); }
}
async function deleteCurrentPost(){
  if(!lightboxPost)return;
  if(!confirm('دڵنیایت لە سڕینەوە؟'))return;
  await sb.from('posts').delete().eq('id',lightboxPost.id);
  closeLightbox(); loadFeed();
}

/* ── FEED ── */
async function loadFeed(){
  if(!SERVER_READY)return;
  const { data:posts, error } = await sb.from('posts')
    .select('*, locations(name), post_images(image_url,sort_order), likes(user_id), comments(content,user_id,created_at,profiles(display_name,avatar_url))')
    .order('created_at',{ascending:false});
  if(error){console.error(error);return}
  const now=Date.now();
  allPosts=(posts||[]).filter(p=>new Date(p.discount_end).getTime()+3*86400000>now);
  const hasActive=allPosts.some(p=>new Date(p.discount_end).getTime()>now);
  const dnDot=$('dn-hot-dot'), mnbDot=$('mnb-hot-dot'), notifDot=$('notif-dot');
  if(dnDot)dnDot.style.display=hasActive?'inline-block':'none';
  if(mnbDot)mnbDot.style.display=hasActive?'block':'none';
  // Notification: only show dot/toast if there's an UNSEEN newest discount
  const newestId = allPosts.length ? allPosts[0].id : null;
  let lastSeen = null;
  try{ lastSeen = localStorage.getItem('hm_lastSeenPost'); }catch(e){}
  const hasUnseen = hasActive && newestId && newestId !== lastSeen;

  if(notifDot)notifDot.style.display=hasUnseen?'block':'none';
  if(dnDot)dnDot.style.display=hasUnseen?'inline-block':'none';
  if(mnbDot)mnbDot.style.display=hasUnseen?'block':'none';

  if(hasUnseen && !window.__notifShown){
    window.__notifShown=true;
    setTimeout(showNotifToast, 2500);
  }
  renderFeed();
}

// Call this when user views discounts — clears the unseen dot
function markDiscountsSeen(){
  const newestId = allPosts.length ? allPosts[0].id : null;
  if(newestId){ try{ localStorage.setItem('hm_lastSeenPost', newestId); }catch(e){} }
  ['notif-dot','dn-hot-dot','mnb-hot-dot'].forEach(id=>{ const e=$(id); if(e)e.style.display='none'; });
  hideNotifToast();
}

let notifToastTimer=null;
function showNotifToast(){
  const t=$('notif-toast'); if(!t)return;
  st('notif-toast-txt', TX[lang].notifNew || 'داشکاندنی نوێ!');
  t.classList.add('show');
  clearTimeout(notifToastTimer);
  notifToastTimer=setTimeout(hideNotifToast, 4500);
}
function hideNotifToast(){ $('notif-toast')?.classList.remove('show'); }
function setMarketFilter(m){
  marketFilter=m;
  document.querySelectorAll('.mtab').forEach(t=>t.classList.toggle('active',t.dataset.market===m));
  renderFeed();
}
function renderFeed(){
  const filtered=marketFilter==='all'?allPosts:allPosts.filter(p=>String(p.location_id)===marketFilter);
  const wrap=$('discount-feed'), empty=$('feed-empty'), moreBtn=$('feed-more-btn');
  if(!wrap)return;
  if(filtered.length===0){wrap.innerHTML='';if(empty)empty.style.display='block';if(moreBtn)moreBtn.style.display='none';return}
  if(empty)empty.style.display='none';
  const visible=feedExpanded?filtered:filtered.slice(0,3);
  wrap.innerHTML=visible.map(postCardHtml).join('');
  if(moreBtn){moreBtn.style.display=filtered.length>3?'inline-flex':'none';st('feed-more-txt',feedExpanded?TX[lang].seeLess:TX[lang].seeMore)}
  startCountdowns();
}
function toggleFeedExpand(){
  feedExpanded=!feedExpanded;
  renderFeed();
  const fab=$('feed-collapse-fab');
  if(fab)fab.style.display=feedExpanded?'flex':'none';
  if(!feedExpanded){ document.getElementById('promo')?.scrollIntoView({behavior:'smooth'}); }
}
function collapseFeed(){
  feedExpanded=false;
  renderFeed();
  const fab=$('feed-collapse-fab'); if(fab)fab.style.display='none';
  document.getElementById('promo')?.scrollIntoView({behavior:'smooth'});
}
function postCardHtml(p){
  const imgs=(p.post_images||[]).slice().sort((a,b)=>a.sort_order-b.sort_order);
  const ended=new Date(p.discount_end).getTime()<Date.now();
  const likeCount=(p.likes||[]).length;
  const cmts=(p.comments||[]);
  const commentCount=cmts.length;
  const likedByMe=currentUser&&(p.likes||[]).some(l=>l.user_id===currentUser.id);

  // images (auto-slide if >1)
  const slides=imgs.length?imgs.map((im,i)=>`<img src="${im.image_url}" class="ps-img ${i===0?'active':''}" loading="lazy">`).join(''):'<div class="ps-noimg"><i class="fas fa-image"></i></div>';
  const dots=imgs.length>1?`<div class="ps-dots">${imgs.map((_,i)=>`<span class="${i===0?'on':''}"></span>`).join('')}</div>`:'';

  // TITLE: one line, add see-more if long
  const title=escapeHtml(p.title||'');
  const titleLong=(p.title||'').length>34;
  const titleHtml=`<h4 class="post-title">${title}</h4>${titleLong?`<button class="see-more-t" onclick="event.stopPropagation();openLightbox('${p.id}')">${TX[lang].seeMore}</button>`:''}`;

  // DETAIL: smaller secondary line, see-more if long
  const detail=escapeHtml(p.detail||'');
  const detailLong=(p.detail||'').length>48;
  const detailHtml=detail?`<p class="post-detail">${detail}</p>${detailLong?`<button class="see-more-d" onclick="event.stopPropagation();openLightbox('${p.id}')">${TX[lang].seeMore}</button>`:''}`:'';

  // RED 4-CELL DIGITAL COUNTDOWN
  const cd=`<div class="cd-timer ${ended?'ended':''}" data-end="${p.discount_end}">
    <div class="cd-cell"><span class="cd-num" data-u="d">00</span><span class="cd-lbl">${TX[lang].cdD}</span></div>
    <span class="cd-sep">:</span>
    <div class="cd-cell"><span class="cd-num" data-u="h">00</span><span class="cd-lbl">${TX[lang].cdH}</span></div>
    <span class="cd-sep">:</span>
    <div class="cd-cell"><span class="cd-num" data-u="m">00</span><span class="cd-lbl">${TX[lang].cdM}</span></div>
    <span class="cd-sep">:</span>
    <div class="cd-cell"><span class="cd-num" data-u="s">00</span><span class="cd-lbl">${TX[lang].cdS}</span></div>
  </div>`;

  // comment avatar stack (up to 3) + count
  let cmtStack='';
  if(commentCount){
    const uniq=[]; const seen=new Set();
    for(const c of cmts){ if(!seen.has(c.user_id)){seen.add(c.user_id);uniq.push(c);} if(uniq.length>=3)break; }
    const avs=uniq.map(c=>`<img src="${c.profiles?.avatar_url||('https://api.dicebear.com/7.x/thumbs/svg?seed='+c.user_id)}" class="cs-av">`).join('');
    const extra=commentCount>3?`<span class="cs-extra">+${commentCount-3}</span>`:'';
    cmtStack=`<div class="cmt-stack">${avs}${extra}<span class="cs-txt">${commentCount} ${TX[lang].commented}</span></div>`;
  }

  return `<article class="post-card" onclick="openLightbox('${p.id}')">
    ${ended?`<span class="post-ended-badge">${TX[lang].cdEnded}</span>`:''}
    <div class="post-cover" data-count="${imgs.length}">${slides}${dots}</div>
    <div class="post-body">
      <div class="post-titrow">${titleHtml}</div>
      ${detailHtml}
      ${cd}
      ${cmtStack}
      <div class="post-actions">
        <button class="pa-like ${likedByMe?'on':''}" onclick="event.stopPropagation();cardLike('${p.id}')">
          <i class="fas fa-heart"></i><span>${likeCount}</span>
        </button>
        <button class="pa-comment" onclick="event.stopPropagation();cardComment('${p.id}')">
          <i class="fas fa-comment"></i><span>${commentCount}</span>
        </button>
        <span class="pa-market">${escapeHtml(p.locations?.name||'')}</span>
      </div>
    </div></article>`;
}

// Like from card — login gate if guest
async function cardLike(postId){
  if(!currentUser){ openAuthModal(); return; }
  const post=allPosts.find(p=>p.id===postId); if(!post)return;
  const likes=post.likes||[];
  const already=likes.find(l=>l.user_id===currentUser.id);
  if(already){
    await sb.from('likes').delete().eq('post_id',postId).eq('user_id',currentUser.id);
    post.likes=likes.filter(l=>l.user_id!==currentUser.id);
  }else{
    await sb.from('likes').insert({post_id:postId,user_id:currentUser.id});
    post.likes=[...likes,{user_id:currentUser.id}];
  }
  renderFeed();
}
// Comment from card — login gate if guest, else open the post
function cardComment(postId){
  if(!currentUser){ openAuthModal(); return; }
  openLightbox(postId);
}

// Auto-slide card images every 4.5s
let cardSlideTimer=null;
function startCardSliders(){
  if(cardSlideTimer)clearInterval(cardSlideTimer);
  cardSlideTimer=setInterval(()=>{
    document.querySelectorAll('.post-cover').forEach(cover=>{
      const imgs=cover.querySelectorAll('.ps-img');
      if(imgs.length<2)return;
      let cur=0; imgs.forEach((im,i)=>{ if(im.classList.contains('active'))cur=i; });
      const next=(cur+1)%imgs.length;
      imgs[cur].classList.remove('active'); imgs[next].classList.add('active');
      const dots=cover.querySelectorAll('.ps-dots span');
      if(dots.length){ dots[cur]?.classList.remove('on'); dots[next]?.classList.add('on'); }
    });
  },4500);
}
function startCountdowns(){
  if(countdownTimer)clearInterval(countdownTimer);
  updateCountdowns(); countdownTimer=setInterval(updateCountdowns,1000);
  startCardSliders();
}
function pad2(n){ return n<10?'0'+n:''+n; }
function updateCountdowns(){
  document.querySelectorAll('.cd-timer').forEach(el=>{
    const diff=new Date(el.dataset.end).getTime()-Date.now();
    const set=(u,v)=>{ const n=el.querySelector(`.cd-num[data-u="${u}"]`); if(n)n.textContent=pad2(v); };
    if(diff<=0){ el.classList.add('ended'); set('d',0);set('h',0);set('m',0);set('s',0); return; }
    const d=Math.floor(diff/86400000);
    const h=Math.floor((diff%86400000)/3600000);
    const m=Math.floor((diff%3600000)/60000);
    const s=Math.floor((diff%60000)/1000);
    set('d',d);set('h',h);set('m',m);set('s',s);
  });
}
document.addEventListener('click',e=>{
  const tab=e.target.closest('.mtab');
  if(tab)setMarketFilter(tab.dataset.market);
});

/* ── LIGHTBOX ── */
async function openLightbox(postId){
  lightboxPost=allPosts.find(p=>p.id===postId); if(!lightboxPost)return;
  lightboxIndex=0;
  st('lb-title',lightboxPost.title); st('lb-detail',lightboxPost.detail||'');
  const del=$('lb-admin-delete'); if(del)del.style.display=isAdmin?'inline-flex':'none';
  renderLightboxImages(); renderLightboxLike(); await loadComments(postId);
  const ov=$('lightbox-ov'); ov.classList.add('open');
  // gentle zoom-in highlight on open
  const box=ov.querySelector('.lightbox');
  if(box){ box.classList.remove('lb-pop'); void box.offsetWidth; box.classList.add('lb-pop'); }
}
function closeLightbox(){ $('lightbox-ov').classList.remove('open'); lightboxPost=null }
function renderLightboxImages(){
  const imgs=(lightboxPost.post_images||[]).slice().sort((a,b)=>a.sort_order-b.sort_order);
  const ratio=(lightboxPost.gallery_ratio||'1:1').replace(':','/');
  const box=$('lb-imgs'); box.parentElement.style.setProperty('--ratio',ratio);
  box.innerHTML=imgs.map((img,i)=>`<img src="${img.image_url}" class="${i===lightboxIndex?'active':''}">`).join('');
  // Click left half = prev, right half = next
  box.onclick=(e)=>{
    if(imgs.length<2)return;
    const r=box.getBoundingClientRect();
    const x=e.clientX-r.left;
    const isRTL=document.documentElement.dir==='rtl';
    const clickedRight = x > r.width/2;
    // In RTL, right side = previous (natural reading direction)
    if(clickedRight){ isRTL?lbPrev():lbNext(); } else { isRTL?lbNext():lbPrev(); }
  };
}
function lbPrev(){ const imgs=$('lb-imgs').children; if(!imgs.length)return; lightboxIndex=(lightboxIndex-1+imgs.length)%imgs.length; Array.from(imgs).forEach((im,i)=>im.classList.toggle('active',i===lightboxIndex)); }
function lbNext(){ const imgs=$('lb-imgs').children; if(!imgs.length)return; lightboxIndex=(lightboxIndex+1)%imgs.length; Array.from(imgs).forEach((im,i)=>im.classList.toggle('active',i===lightboxIndex)); }
function renderLightboxLike(){
  const likes=lightboxPost.likes||[]; st('lb-like-count',likes.length);
  const on=currentUser&&likes.some(l=>l.user_id===currentUser.id);
  $('lb-like-btn').classList.toggle('liked',!!on);
}
async function toggleLike(){
  if(!currentUser){openAuthModal();return}
  const likes=lightboxPost.likes||[], already=likes.find(l=>l.user_id===currentUser.id);
  if(already){ await sb.from('likes').delete().eq('post_id',lightboxPost.id).eq('user_id',currentUser.id); lightboxPost.likes=likes.filter(l=>l.user_id!==currentUser.id); }
  else{ await sb.from('likes').insert({post_id:lightboxPost.id,user_id:currentUser.id}); lightboxPost.likes=[...likes,{user_id:currentUser.id}]; }
  renderLightboxLike();
}

/* ── COMMENTS ── */
async function loadComments(postId){
  const { data, error } = await sb.from('comments').select('*, profiles(display_name,avatar_url)').eq('post_id',postId).order('created_at',{ascending:true});
  if(error){console.error(error);return}
  renderComments(data||[]);
}
function renderComments(comments){
  const top=comments.filter(c=>!c.parent_comment_id), replies=comments.filter(c=>c.parent_comment_id);
  $('lb-comments').innerHTML=top.map(c=>{
    const mine=replies.filter(r=>r.parent_comment_id===c.id);
    return `<div class="comment-row">
      <img class="comment-av" src="${c.profiles?.avatar_url||('https://api.dicebear.com/7.x/thumbs/svg?seed='+c.user_id)}">
      <div class="comment-body">
        <span class="comment-name">${escapeHtml(c.profiles?.display_name||'بەکارهێنەر')}</span>
        <p class="comment-text">${escapeHtml(c.content)}</p>
        ${mine.map(r=>`<div class="comment-reply"><span class="comment-name admin-tag">ئەدمین</span><p class="comment-text">${escapeHtml(r.content)}</p></div>`).join('')}
        ${isAdmin?`<button class="comment-reply-btn" onclick="replyTo('${c.id}')">وەڵام</button>`:''}
        ${(isAdmin||(currentUser&&currentUser.id===c.user_id))?`<button class="comment-del-btn" onclick="deleteComment('${c.id}')">سڕینەوە</button>`:''}
      </div></div>`;
  }).join('');
}
function replyTo(id){ replyingTo=id; const i=$('lb-comment-input'); i.placeholder='وەڵامدانەوە...'; i.focus(); }
async function submitComment(){
  if(!currentUser){openAuthModal();return}
  const input=$('lb-comment-input'), content=input.value.trim(); if(!content)return;
  const row={post_id:lightboxPost.id,user_id:currentUser.id,content};
  if(replyingTo)row.parent_comment_id=replyingTo;
  const { error } = await sb.from('comments').insert(row);
  if(!error){input.value='';replyingTo=null;input.placeholder='کۆمێنتێک بنووسە...';await loadComments(lightboxPost.id)}
}
async function deleteComment(id){ await sb.from('comments').delete().eq('id',id); await loadComments(lightboxPost.id); }

/* ── START ── */
initAuth();
loadFeed();
