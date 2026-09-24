/* =========================

   ARTICLE 13 — How Does Radar Know the Direction?

   Single-language layout. At any moment the page shows
   only the active language, switched by the global toggle.

   IMPORTANT: this whole file is wrapped in an IIFE because
   <script> tags share the same top-level scope, and a
   previous copy of this file collided with `script.js`'s
   `const STORAGE_KEY`. The IIFE keeps our internal `const`s
   private.

========================= */
(function() {

const ARTICLE_I18N = {

    en: {

        "page.title": "Article 26: What Is a Phased Array? — Radar Explorer",

        "page.description": "Article 26: What is a phased array radar, and how does it steer a beam without moving? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "Aug 10, 2026",

        "toc.title": "On this page",

        "toc.s1": "An array of elements",

        "toc.s2": "Steering by phase",

        "toc.s3": "Beam steering animation",

        "toc.s4": "Worked example",

        "toc.s5": "Strengths &amp; tradeoffs",

        "toc.s6": "Applications",

        "article.title": "What Is a Phased Array?",

        "article.subtitle": "You may have heard the term “phased array radar.” What does it actually mean?",

        "article.p1": "You may have heard the term “phased array radar.” What does it actually mean?",

        "article.p2": "A phased array = many small antennas arranged in a group, working together. Each small antenna is called an “element,” and each can send and receive waves on its own. By controlling the “phase” of each element's wave, the beam can point in different directions. No need to turn the antenna — the beam direction changes electronically.",

        "article.p3": "Think of a choir: by adjusting when each person sings, the sound can be focused in one direction. Phased arrays were first used in the military, and now they are used in weather radar and car radar too.",

        "article.p4": "Their core strengths: fast, flexible, and able to do many things at once. But they are complex, expensive, and technically demanding. A modern military phased array may have 1,000 to 10,000 elements.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "A phased array is many small antennas working together, steering the beam by phase.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2026",

        "fig1.title": "Phased array grid",

        "fig1.bottom": "32 elements in 8 × 4 grid · beam shaped by phase",

        "fig1.el": "element",

        "visual1.num": "01",

        "visual1.name": "AN ARRAY OF ELEMENTS",

        "visual1.title": "Many Small Antennas in a Grid",

        "visual1.intro": "Instead of one big dish, a phased array uses dozens to thousands of small antennas arranged in a flat grid. Each element does the same job: emit a small wave and listen for echoes. The radar's computer tells every element what to do.",

        "visual1.caption": "Each element is tiny — about half a wavelength across — but together they make one big virtual antenna.",

        "fig2.title": "Phase steering",

        "fig2.b1": "all same phase",

        "fig2.b2": "phase shift left to right",

        "fig2.b3": "phase shift right to left",

        "fig2.bottom": "phase delay ⇒ beam tilts · no moving parts",

        "visual2.num": "02",

        "visual2.name": "STEERING BY PHASE",

        "visual2.title": "Adjust Each Element's Phase, Change the Beam",

        "visual2.intro": "When all elements fire at the same time, the wavefront travels straight forward. When the right-side elements fire a little later than the left-side ones, the wavefront tilts to the left. Add phase delay across the array, and you steer the beam anywhere within ±60° of broadside.",

        "visual2.caption": "This is how a phased array 'tilts' its beam without ever moving its antennas. The same trick lets it track fast-moving targets.",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: BEAM STEERING",

        "visual3.title": "Watch the Beam Sweep Electronically",

        "visual3.intro": "The animation shows five elements firing one after another. As the delay between elements changes, the combined wavefront tilts — and the beam follows.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows how phase delay steers the beam.",

        "visual3.cc1": "1. ARRAY — 5 elements fire in sequence",

        "visual3.cc2": "2. PHASE — delay grows left to right",

        "visual3.cc3": "3. BEAM — energy adds in one direction",

        "visual3.cc4": "4. STEER — flip phase, beam flips",

        "visual3.caption": "Each µs of delay moves the beam a fraction of a degree. So a modern array can switch direction millions of times per second.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "Steering a 10 GHz Beam 30° Off-Broadside",

        "visual4.intro": "A phased array works at 10 GHz with elements spaced half a wavelength apart. How far apart are the elements, and how big a phase shift steers the beam 30° off-broadside?",

        "visual4.row1.label": "Frequency f",

        "visual4.row1.value": "10 GHz",

        "visual4.row2.label": "Wavelength λ",

        "visual4.row2.value": "3 cm",

        "visual4.row3.label": "Element spacing d",

        "visual4.row3.formula": "λ / 2",

        "visual4.row4.label": "Steering angle",

        "visual4.row4.value": "≈ 30°",

        "visual4.caption": "The phase shift per element is d · sin(θ) / λ · 360°. With d = λ/2 and θ = 30°, that is about 90° — a quarter-wave delay.",

        "visual5.app1.tag": "SPEED",

        "visual5.app1.title": "Beam Switches in Microseconds",

        "visual5.app1.desc": "A mechanical radar dish takes seconds to swing. A phased array switches beam direction in microseconds — 10 million times faster. Perfect for tracking many fast targets.",

        "visual5.app2.tag": "FLEX",

        "visual5.app2.title": "Multiple Beams at Once",

        "visual5.app2.desc": "Because the array is just a computer feeding each element, the same antenna can form dozens of beams at the same time. One beam tracks a missile, another tracks a plane, another listens for weather.",

        "visual5.app3.tag": "RELIABLE",

        "visual5.app3.title": "No Moving Parts",

        "visual5.app3.desc": "No motors, no gears, no hydraulics. Less to break, easier to maintain, works in extreme environments. Even if a few elements fail, the array keeps working — just a bit weaker.",

        "visual5.app4.tag": "COST",

        "visual5.app4.title": "Expensive",

        "visual5.app4.desc": "Thousands of phase shifters, each with its own amplifier and control line. A military AESA radar can cost tens of millions of dollars.",

        "visual5.app5.tag": "COMPLEX",

        "visual5.app5.title": "Thousands of Phase Shifters",

        "visual5.app5.desc": "Modern arrays have 1,000 to 10,000 elements, each with its own transmitter and receiver. Calibration, cooling, and signal routing become very hard problems.",

        "visual5.app6.tag": "BANDWIDTH",

        "visual5.app6.title": "Bandwidth Tradeoff",

        "visual5.app6.desc": "If elements are spaced half a wavelength apart, the array works at one centre frequency. To work across a wide band, designers use clever digital beamforming instead.",

        "visual5.num": "05",

        "visual5.name": "STRENGTHS & TRADEOFFS",

        "visual5.title": "What Phased Arrays Buy You (and What They Cost)",

        "visual5.intro": "Phased arrays are powerful but not free. Three big strengths and three real costs to keep in mind.",

        "visual5.caption": "The trade-off is why phased arrays first went into military and weather radars — where their benefits paid for themselves. Now they are spreading into cars.",

        "visual6.app1.tag": "DEFENSE",

        "visual6.app1.title": "Military Radar",

        "visual6.app1.desc": "AESA (Active Electronically Scanned Array) radars on F-35, F-22, J-20, Aegis cruisers. Track dozens of targets, jam enemy radar, and steer the beam in microseconds.",

        "visual6.app2.tag": "WEATHER",

        "visual6.app2.title": "Weather Radar",

        "visual6.app2.desc": "Modern weather radars in the US, Japan and China use phased arrays. They scan the whole sky in seconds and pick out fast-developing storms.",

        "visual6.app3.tag": "AUTO",

        "visual6.app3.title": "Automotive Radar",

        "visual6.app3.desc": "A 77 GHz phased-array chip with 4 to 12 elements lets modern cars see forward, sideways, and behind from the same small box.",

        "visual6.app4.tag": "5G",

        "visual6.app4.title": "5G &amp; 6G Base Stations",

        "visual6.app4.desc": "Cell tower phased arrays steer their beam to follow your phone. Same principle — small antennas, phase delays — but for communications, not radar.",

        "visual6.app5.tag": "MEDICAL",

        "visual6.app5.title": "Ultrasound Imaging",

        "visual6.app5.desc": "Modern ultrasound probes use phased arrays of piezo elements. Doctors steer the beam electronically to look inside the body from any angle.",

        "visual6.app6.tag": "ASTRONOMY",

        "visual6.app6.title": "Radio Telescopes",

        "visual6.app6.desc": "ALMA, the VLA, and the SKA are giant phased arrays of radio dishes. By combining signals from many antennas, they act like one giant telescope.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Where You Find Phased Arrays Today",

        "visual6.intro": "Phased arrays started in military radar but have spread everywhere. Today you carry one in your pocket (cell phone base stations) and one in your car (radar chip).",

        "visual6.caption": "When you see 'phased array' on a spec sheet, remember: it just means many small antennas whose phase delays steer a beam electronically."

    },

    zh: {

        "page.title": "第26篇：什么是相控阵（Phased Array）？— 雷达探索者",

        "page.description": "第26篇：相控阵雷达是什么，不转动天线如何改变波束方向。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2026年8月10日",

        "toc.title": "本页目录",

        "toc.s1": "阵元阵列",

        "toc.s2": "用相位转向",

        "toc.s3": "波束转向动画",

        "toc.s4": "详解例题",

        "toc.s5": "优势与代价",

        "toc.s6": "应用领域",

        "article.title": "什么是相控阵？",

        "article.subtitle": "你可能听过“相控阵雷达”这个词，它到底是什么意思？",

        "article.p1": "你可能听过“相控阵雷达”这个词，它到底是什么意思？",

        "article.p2": "相控阵 = 很多个小天线排成阵列，一起工作。每个小天线叫“阵元”，单独发波、单独收波。通过控制每个阵元发波的“相位”，让波束指向不同方向。不需要转动天线，就能改变波束方向。",

        "article.p3": "像一群人合唱，调整每个人出声的时间，声音就能聚到某个方向。相控阵最早用于军事，现在也用于天气雷达、汽车雷达。",

        "article.p4": "它的核心优势：快、灵活、能同时干很多事。但结构复杂、成本高、技术难度大。现代军用相控阵可能包含 1000 到 10000 个阵元。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "相控阵是很多小天线一起工作，靠相位控制波束方向。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2026",

        "fig1.title": "相控阵阵列",

        "fig1.bottom": "32 阵元 8 × 4 排布 · 波束由相位塑形",

        "fig1.el": "阵元",

        "visual1.num": "01",

        "visual1.name": "阵元阵列",

        "visual1.title": "网格里的小天线",

        "visual1.intro": "相控阵不用一个大碟，而是几十到几千个小天线排成平面网格。每个阵元做同样的事：发一点波，听一点回波。雷达的计算机指挥每个阵元做什么。",

        "visual1.caption": "每个阵元很小——大约半波长——但合起来就是一个巨大的虚拟天线。",

        "fig2.title": "相位转向",

        "fig2.b1": "全部同相",

        "fig2.b2": "左到右相位推迟",

        "fig2.b3": "右到左相位推迟",

        "fig2.bottom": "相位延迟 ⇒ 波束倾斜 · 没有运动部件",

        "visual2.num": "02",

        "visual2.name": "用相位转向",

        "visual2.title": "调整每个阵元的相位，波束跟着变",

        "visual2.intro": "当所有阵元同时发波，波前直直向前。当右侧阵元比左侧晚一点点发波时，波前向左倾斜。给阵列加上相位延迟，就能把波束指向 ±60° 范围内的任何方向。",

        "visual2.caption": "这就是相控阵“倾斜”波束的方法，无需移动天线。同一招也能跟踪快速移动的目标。",

        "visual3.num": "03",

        "visual3.name": "动画：波束转向",

        "visual3.title": "看波束电子扫描",

        "visual3.intro": "动画展示 5 个阵元依次发射。当阵元之间的延迟变化时，合成波前倾斜——波束跟着改变方向。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示相位延迟如何引导波束。",

        "visual3.cc1": "1. 阵列 — 5 个阵元依次发射",

        "visual3.cc2": "2. 相位 — 延迟从左到右递增",

        "visual3.cc3": "3. 波束 — 能量在某个方向叠加",

        "visual3.cc4": "4. 转向 — 翻转相位，波束翻转",

        "visual3.caption": "每微秒延迟让波束动几分之一度。现代阵列每秒可改变方向数百万次。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "10 GHz 波束偏 30°",

        "visual4.intro": "一个相控阵工作在 10 GHz，阵元间距为半波长。阵元间距是多少？波束偏 30° 时需要多大相位差？",

        "visual4.row1.label": "频率 f",

        "visual4.row1.value": "10 GHz",

        "visual4.row2.label": "波长 λ",

        "visual4.row2.value": "3 cm",

        "visual4.row3.label": "阵元间距 d",

        "visual4.row3.formula": "λ / 2",

        "visual4.row4.label": "转向角",

        "visual4.row4.value": "≈ 30°",

        "visual4.caption": "每阵元相位差 = d · sin(θ) / λ · 360°。当 d = λ/2、θ = 30° 时，相位差约 90°——四分之一波长延迟。",

        "visual5.app1.tag": "速度",

        "visual5.app1.title": "微秒级转向",

        "visual5.app1.desc": "机械雷达天线要几秒才能转完一圈。相控阵只需几微秒——快一千万倍。非常适合跟踪多个快速目标。",

        "visual5.app2.tag": "灵活",

        "visual5.app2.title": "同时多波束",

        "visual5.app2.desc": "相控阵其实是一个计算机控制的小天线集合，同一个阵列可以同时形成几十个波束。一个跟踪导弹，一个跟踪飞机，一个监听天气。",

        "visual5.app3.tag": "可靠",

        "visual5.app3.title": "无运动部件",

        "visual5.app3.desc": "没有电机、齿轮、液压。故障少、维护简单、能在极端环境下工作。即使少数阵元失效，阵列仍能工作——只是稍弱一点。",

        "visual5.app4.tag": "成本",

        "visual5.app4.title": "贵",

        "visual5.app4.desc": "上千个移相器，每个都有自己的放大器和控制线。军用 AESA 雷达造价可达几千万美元。",

        "visual5.app5.tag": "复杂",

        "visual5.app5.title": "海量移相器",

        "visual5.app5.desc": "现代阵列有 1000 到 10000 个阵元，每个都有自己的收发模块。校准、散热、信号路由都是大难题。",

        "visual5.app6.tag": "带宽",

        "visual5.app6.title": "带宽折中",

        "visual5.app6.desc": "阵元间距为半波长时，阵列只在单一中心频率工作。要覆盖宽带，工程师改用数字波束成形。",

        "visual5.num": "05",

        "visual5.name": "优势与代价",

        "visual5.title": "相控阵换来什么（又付出什么）",

        "visual5.intro": "相控阵很强但不是免费的。三个大优势，三个真实代价。",

        "visual5.caption": "这就是为什么相控阵首先用于军用和气象雷达——那里收益大于成本。现在正进入汽车领域。",

        "visual6.app1.tag": "军用",

        "visual6.app1.title": "军用雷达",

        "visual6.app1.desc": "F-35、F-22、歼-20、宙斯盾舰载 AESA 雷达。跟踪几十个目标、压制敌方雷达、微秒级转向。",

        "visual6.app2.tag": "气象",

        "visual6.app2.title": "气象雷达",

        "visual6.app2.desc": "美、日、中新一代气象雷达用相控阵。几秒扫完整个天空，能捕捉快速发展的风暴。",

        "visual6.app3.tag": "汽车",

        "visual6.app3.title": "汽车雷达",

        "visual6.app3.desc": "77 GHz 单芯片相控阵（4 到 12 个阵元）让现代汽车用一个小盒子就能看前方、侧方、后方。",

        "visual6.app4.tag": "5G",

        "visual6.app4.title": "5G/6G 基站",

        "visual6.app4.desc": "手机基站用相控阵把信号束对准你的手机。原理相同——小天线 + 相位延迟——只是用于通信而非探测。",

        "visual6.app5.tag": "医疗",

        "visual6.app5.title": "超声成像",

        "visual6.app5.desc": "现代超声探头是压电阵元组成的相控阵。医生用电子转向，从任意角度看体内结构。",

        "visual6.app6.tag": "天文",

        "visual6.app6.title": "射电望远镜",

        "visual6.app6.desc": "ALMA、VLA、SKA 都是巨型射电望远镜阵列。把多个天线的信号合起来，等效于一个巨型望远镜。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "今天你在哪里能找到相控阵",

        "visual6.intro": "相控阵从军用雷达起步，现在无处不在。口袋里有一个（手机基站），车里也有一个（雷达芯片）。",

        "visual6.caption": "当你看到“相控阵”这个词：就是很多小天线 + 相位延迟 + 电子转向。"

    }

};

const STORAGE_KEY = "radar-explorer.lang";

let articleLang = "en";

try {

    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === "en" || saved === "zh") {

        articleLang = saved;

    } else {

        const nav = (window.navigator.language || "en").toLowerCase();

        articleLang = nav.startsWith("zh") ? "zh" : "en";

    }

} catch (e) { /* fall back to en */ }

function t(key) {

    const dict = ARTICLE_I18N[articleLang] || ARTICLE_I18N.en;

    if (dict[key] !== undefined) return dict[key];

    if (ARTICLE_I18N.en[key] !== undefined) return ARTICLE_I18N.en[key];

    if (typeof window.t === "function") {

        try {

            const v = window.t(key);

            if (v && v !== key) return v;

        } catch (e) { /* ignore */ }

    }

    return key;

}

function applyI18n() {

    document.documentElement.lang = articleLang;

    document.querySelectorAll("[data-i18n]").forEach(el => {

        el.textContent = t(el.getAttribute("data-i18n"));

    });

    document.querySelectorAll("[data-i18n-attr]").forEach(el => {

        const spec = el.getAttribute("data-i18n-attr");

        const [attr, key] = spec.split("|");

        if (attr && key) el.setAttribute(attr, t(key));

    });

    const langLabel = document.querySelector("[data-lang-label]");

    if (langLabel) {

        langLabel.textContent = articleLang === "zh" ? "EN" : "\u4e2d";

    }

}

function setLanguage(lang) {

    if (lang !== "en" && lang !== "zh") return;

    articleLang = lang;

    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    applyI18n();

}

function hookLangToggle() {

    const btn = document.querySelector("[data-lang-toggle]");

    if (!btn) return;

    btn.addEventListener("click", () => {

        setLanguage(articleLang === "zh" ? "en" : "zh");

    });

}

/* =========================

   VIDEO: bilingual src + autoplay

========================= */

function pickVideoSource(v) {

    const lang = (document.documentElement.lang || "en").toLowerCase();

    const key  = lang.startsWith("zh") ? "zh" : "en";

    const src  = v.getAttribute(`data-video-${key}`);

    if (!src) return;

    const fileName = src.split("/").pop();

    if (v.src && v.src.endsWith(fileName)) return;

    v.src = src;

    const poster = v.getAttribute(`data-poster-${key}`);

    if (poster) v.poster = poster;

    try { v.load(); } catch (e) { /* ignore */ }

}

function keepVideoPlaying() {

    const v = document.getElementById("radar-loop-video");

    if (!v) return;

    v.muted = true;

    v.loop = true;

    pickVideoSource(v);

    try {

        const p = v.play();

        if (p && typeof p.catch === "function") {

            p.catch(() => {

                const resume = () => {

                    try { v.play(); } catch (e) {}

                    document.removeEventListener("click", resume);

                    document.removeEventListener("keydown", resume);

                };

                document.addEventListener("click", resume, { once: true });

                document.addEventListener("keydown", resume, { once: true });

            });

        }

    } catch (e) { /* ignore */ }

}

function hookVideoLangSync() {

    const v = document.getElementById("radar-loop-video");

    if (!v) return;

    const root = document.documentElement;

    const update = () => pickVideoSource(v);

    const mo = new MutationObserver(update);

    mo.observe(root, { attributes: true, attributeFilter: ["lang"] });

    document.addEventListener("click", (e) => {

        if (e.target.closest("[data-lang-toggle]")) {

            setTimeout(update, 0);

        }

    });

}

/* =========================

   SCROLL-SPY for the TOC

========================= */

function initTocScrollSpy() {

    const tocLinks = document.querySelectorAll(".article-toc-nav a[data-toc]");

    if (!tocLinks.length) return;

    const linkMap = {};

    tocLinks.forEach(a => { linkMap[a.getAttribute("data-toc")] = a; });

    const sections = Array.from(tocLinks)

        .map(a => document.getElementById(a.getAttribute("data-toc")))

        .filter(Boolean);

    if (!sections.length) return;

    function setActive(id) {

        tocLinks.forEach(a => a.classList.remove("active"));

        const link = linkMap[id];

        if (link) link.classList.add("active");

    }

    if ("IntersectionObserver" in window) {

        const io = new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) setActive(entry.target.id);

                });

            },

            { rootMargin: "-120px 0px -60% 0px", threshold: 0 }

        );

        sections.forEach(s => io.observe(s));

    }

}

document.addEventListener("DOMContentLoaded", () => {

    applyI18n();

    hookLangToggle();

    keepVideoPlaying();

    hookVideoLangSync();

    initTocScrollSpy();

});

})();
