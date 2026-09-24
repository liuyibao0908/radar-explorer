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

        "page.title": "Article 28: What Is an Element? — Radar Explorer",

        "page.description": "Article 28: What is an element in a phased array, and why does its count and spacing matter? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "Jan 30, 2026",

        "toc.title": "On this page",

        "toc.s1": "What is an element?",

        "toc.s2": "How elements are arranged",

        "toc.s3": "Element count & spacing animation",

        "toc.s4": "Worked example",

        "toc.s5": "Active vs passive, grating lobes",

        "toc.s6": "Applications",

        "article.title": "What Is an Element?",

        "article.subtitle": "A phased array is built from many small pieces. The piece is called an element.",

        "article.p1": "A phased array is made of many “elements.” What exactly is an element?",

        "article.p2": "An element is a small antenna unit in the array. Each element can send and receive radio waves independently. Elements can be arranged in lines, flat panels, circles, and more. More elements mean a narrower beam and better direction accuracy.",

        "article.p3": "The spacing between elements also matters — too wide causes “grating lobes.” In an active phased array, each element has its own transmit/receive module. In a passive phased array, a central transmitter is shared, and elements only handle phase shifting.",

        "article.p4": "Elements are the basic building blocks of a phased array. Modern military arrays have over 1,000 elements; a small radar chip may have just 4. The number, the spacing, and the per-element hardware together decide what the array can do.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "An element is one small antenna in a phased array; many work together.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2026",

        "fig1.title": "Single element",

        "fig1.el": "element",

        "fig1.bottom": "half-wavelength patch antenna",

        "visual1.num": "01",

        "visual1.name": "WHAT IS AN ELEMENT?",

        "visual1.title": "One Small Antenna With a Big Job",

        "visual1.intro": "Look at one element on its own. It looks tiny — just a small patch of metal on a circuit board. But it can send and receive radio waves on its own. Many of these little pieces, working together, act like one giant steerable antenna.",

        "visual1.caption": "An element is usually about half a wavelength across. Smaller than a fingernail at 10 GHz — but the building block of every phased array.",

        "fig2.title": "Element arrangements",

        "fig2.line": "LINEAR",

        "fig2.planar": "PLANAR",

        "fig2.circle": "CIRCULAR",

        "fig2.bottom": "linear: 1D steer · planar: 2D steer · circular: 360° steer",

        "visual2.num": "02",

        "visual2.name": "ARRANGEMENTS",

        "visual2.title": "Lines, Grids, and Circles",

        "visual2.intro": "A linear array steers the beam only in one dimension — left or right. A planar (flat) array steers in azimuth AND elevation — the full hemisphere. A circular array wraps the elements around a ring, giving seamless 360° coverage with no “blind cone” at the front.",

        "visual2.caption": "The shape of the array decides the shape of the steering. Cars use planar (front + corners). Airplanes use planar. Naval ships often use circular for full horizon.",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: COUNT & SPACING",

        "visual3.title": "Watch More Elements Make a Narrower Beam",

        "visual3.intro": "The animation builds an array from 4 to 8 to 16 elements. As the count grows, the beam gets sharper and the side lobes shrink. Then it shows what happens when spacing is too wide — grating lobes appear at unexpected angles.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows beam narrowing with more elements and grating lobes from wide spacing.",

        "visual3.cc1": "1. FEW — 4 elements make a wide, fuzzy beam",

        "visual3.cc2": "2. MORE — 8 elements make a tighter beam",

        "visual3.cc3": "3. MANY — 16 elements make a sharp pencil beam",

        "visual3.cc4": "4. SPACING — spacing too wide → grating lobes",

        "visual3.caption": "Beam width is roughly wavelength / array length. Twice the elements → about half the beam width. Four times → a quarter.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "Half-Wavelength Spacing at 10 GHz",

        "visual4.intro": "An array works at 10 GHz. The standard rule says elements should be spaced by half a wavelength to avoid grating lobes. How far apart is that?",

        "visual4.row1.label": "Frequency f",

        "visual4.row1.value": "10 GHz",

        "visual4.row2.label": "Wavelength λ",

        "visual4.row2.value": "3 cm",

        "visual4.row3.label": "Spacing d",

        "visual4.row3.formula": "λ / 2",

        "visual4.row4.label": "Element pitch",

        "visual4.row4.value": "≈ 1.5 cm",

        "visual4.caption": "At 77 GHz (car radar), wavelength is 4 mm, so spacing is just 2 mm. That is why car radar elements are tiny and packed very tight on a chip.",

        "visual5.app1.tag": "ACTIVE",

        "visual5.app1.title": "Active (AESA)",

        "visual5.app1.desc": "Each element has its own transmit/receive (T/R) module behind it. The element does send, receive, and phase shift. More capable but more expensive and harder to cool.",

        "visual5.app2.tag": "PASSIVE",

        "visual5.app2.title": "Passive (PESA)",

        "visual5.app2.desc": "One big central transmitter feeds all elements. Elements only have phase shifters. Simpler and cheaper, but one bad transmitter can fail the whole array.",

        "visual5.app3.tag": "SPACING",

        "visual5.app3.title": "Half-Wavelength Rule",

        "visual5.app3.desc": "Best practice: space elements at half a wavelength. This avoids grating lobes and gives the cleanest beam. Going wider adds lobes; going narrower wastes elements.",

        "visual5.app4.tag": "GRATING",

        "visual5.app4.title": "Grating Lobes",

        "visual5.app4.desc": "If elements are more than one wavelength apart, the array accidentally forms extra beams at wrong angles — like ghost images. They confuse tracking and waste power.",

        "visual5.app5.tag": "POLARIZATION",

        "visual5.app5.title": "Polarization Diversity",

        "visual5.app5.desc": "Each element can be designed for vertical, horizontal, or circular polarization. Dual-pol arrays double the information per pulse — helpful against weather and clutter.",

        "visual5.app6.tag": "FAILURE",

        "visual5.app6.title": "Element Failure",

        "visual5.app6.desc": "Real arrays lose elements over time. AESA tolerates this well — a few bad elements only reduce gain slightly. PESA is more sensitive — one bad phase shifter can ruin a whole row.",

        "visual5.num": "05",

        "visual5.name": "ACTIVE VS PASSIVE",

        "visual5.title": "Who Owns the Transmitter?",

        "visual5.intro": "Two big families of phased arrays differ in who owns the transmitter. Both work; they trade cost for flexibility.",

        "visual5.caption": "Modern military and 5G systems use AESA. Older and cheaper systems still use PESA. The line is fading as AESA chips get cheaper.",

        "visual6.app1.tag": "F-35",

        "visual6.app1.title": "AN/APG-81 Radar",

        "visual6.app1.desc": "About 1,600 GaAs T/R modules. Each element has its own solid-state amplifier, phase shifter, and control line. Cost: ~$1–2 million per radar.",

        "visual6.app2.tag": "5G",

        "visual6.app2.title": "64-Element Base Station",

        "visual6.app2.desc": "Modern 5G massive MIMO panels use 64, 128, or 256 small antennas. Each one is steered electronically to follow users across the cell.",

        "visual6.app3.tag": "CAR",

        "visual6.app3.title": "77 GHz Radar Chip",

        "visual6.app3.desc": "Phased-Array Radar (PAR) weather radars use thousands of elements on flat faces. Whole sky scans in seconds instead of minutes.",

        "visual6.app4.tag": "WEATHER",

        "visual6.app4.title": "PAR Antenna",
        "visual6.app4.desc": "A PAR antenna packs thousands of elements onto one flat panel. Scanning the whole sky drops from minutes to seconds.",

        "visual6.app5.tag": "SATELLITE",

        "visual6.app5.title": "Direct-Broadcast SAT",

        "visual6.app5.desc": "Starlink and similar satellite internet use phased arrays with thousands of elements on the satellite and on the ground dish. Each beam points at a different customer.",

        "visual6.app6.tag": "MEDICAL",

        "visual6.app6.title": "Ultrasound Probe",

        "visual6.app6.desc": "The probe head holds 64 to 192 piezo elements. Each one is a tiny ultrasound element, electronically steered to form the image.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Where Elements Show Up",

        "visual6.intro": "Everywhere a beam needs to point or scan, an array of elements is at work. From satellites to cars to hospital probes.",

        "visual6.caption": "The number of elements is the simplest measure of what an array can do. More elements → sharper beams, more targets, more flexibility."

    },

    zh: {

        "page.title": "第28篇：阵元是什么？— 雷达探索者",

        "page.description": "第28篇：相控阵的阵元是什么，阵元数量与间距为何关键。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2026年1月30日",

        "toc.title": "本页目录",

        "toc.s1": "阵元是什么",

        "toc.s2": "阵元排列方式",

        "toc.s3": "数量与间距动画",

        "toc.s4": "详解例题",

        "toc.s5": "有源 vs 无源、栅瓣",

        "toc.s6": "应用领域",

        "article.title": "阵元是什么？",

        "article.subtitle": "相控阵由很多小部件组成。这种部件叫阵元。",

        "article.p1": "相控阵由很多“阵元”组成，阵元到底是什么？",

        "article.p2": "阵元就是阵列里的一个小天线单元。每个阵元都能独立发射和接收电磁波。阵元排列方式有直线阵、平面阵、圆阵等。阵元越多，波束越窄，方向越准。",

        "article.p3": "阵元间距也很关键，太大会出现“栅瓣”。有源相控阵每个阵元自带发射/接收组件。无源相控阵共用中央发射机，阵元只负责移相。",

        "article.p4": "阵元是相控阵的基本砖块。现代军用阵列有 1000+ 阵元；小型雷达芯片可能只有 4 个。数量、间距、每个阵元的硬件，决定了整个阵列能做什么。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "阵元是相控阵里的一个小天线，很多阵元一起工作。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2026",

        "fig1.title": "单个阵元",

        "fig1.el": "阵元",

        "fig1.bottom": "半波长贴片天线",

        "visual1.num": "01",

        "visual1.name": "阵元是什么",

        "visual1.title": "一个小天线的大任务",

        "visual1.intro": "看一个独立的阵元——它很小，只是电路板上一小片铜。但它能独立发射和接收无线电波。很多这样的小部件一起工作，就像一个巨大的可转向天线。",

        "visual1.caption": "阵元尺寸大约为半波长。在 10 GHz 时比指甲还小——但每个相控阵的基本砖块。",

        "fig2.title": "阵元排列方式",

        "fig2.line": "直线阵",

        "fig2.planar": "平面阵",

        "fig2.circle": "圆形阵",

        "fig2.bottom": "直线：1D 转向 · 平面：2D 转向 · 圆形：360° 转向",

        "visual2.num": "02",

        "visual2.name": "排列方式",

        "visual2.title": "直线、网格、圆形",

        "visual2.intro": "直线阵只能在一个方向转向——左或右。平面阵能同时在方位和仰角上转向——覆盖整个半球。圆形阵把阵元绕成一个环，能无缝覆盖 360°，前方没有“盲锥”。",

        "visual2.caption": "阵列形状决定波束转向方式。汽车用平面阵（前方 + 角部）。飞机用平面阵。海军舰艇常用圆形阵扫全地平线。",

        "visual3.num": "03",

        "visual3.name": "动画：数量与间距",

        "visual3.title": "看阵元越多波束越窄",

        "visual3.intro": "动画从 4 个阵元增加到 8 个，再到 16 个。数量越多，波束越尖，副瓣越小。然后展示阵元间距太大——意外角度出现栅瓣。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示阵元越多波束越窄，间距太大会出现栅瓣。",

        "visual3.cc1": "1. 少 — 4 个阵元形成宽而散的波束",

        "visual3.cc2": "2. 较多 — 8 个阵元形成更紧的波束",

        "visual3.cc3": "3. 很多 — 16 个阵元形成尖锐的铅笔波束",

        "visual3.cc4": "4. 间距 — 间距过大 → 栅瓣出现",

        "visual3.caption": "波束宽度大约为波长除以阵列长度。阵元多 1 倍 → 波束窄约一半。多 4 倍 → 窄到四分之一。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "10 GHz 半波长间距",

        "visual4.intro": "一个阵列工作在 10 GHz。经验规则说阵元间距应为半波长以避免栅瓣。这个距离是多少？",

        "visual4.row1.label": "频率 f",

        "visual4.row1.value": "10 GHz",

        "visual4.row2.label": "波长 λ",

        "visual4.row2.value": "3 cm",

        "visual4.row3.label": "间距 d",

        "visual4.row3.formula": "λ / 2",

        "visual4.row4.label": "阵元间距",

        "visual4.row4.value": "≈ 1.5 cm",

        "visual4.caption": "在 77 GHz（汽车雷达），波长 4 mm，间距只有 2 mm。这就是为什么汽车雷达阵元非常小，在芯片上排得很密。",

        "visual5.app1.tag": "有源",

        "visual5.app1.title": "有源相控阵 (AESA)",

        "visual5.app1.desc": "每个阵元自带收发 (T/R) 模块。阵元负责发射、接收、移相。能力大、贵、散热难。",

        "visual5.app2.tag": "无源",

        "visual5.app2.title": "无源相控阵 (PESA)",

        "visual5.app2.desc": "一个中央发射机供所有阵元。阵元只移相。更便宜，但一台发射机坏可能毁整个阵列。",

        "visual5.app3.tag": "间距",

        "visual5.app3.title": "半波长规则",

        "visual5.app3.desc": "最佳实践：阵元间距半波长。避免栅瓣、给出最干净的波束。再宽会出瓣，再窄浪费阵元。",

        "visual5.app4.tag": "栅瓣",

        "visual5.app4.title": "栅瓣",

        "visual5.app4.desc": "阵元间距大于一个波长时，意外角度会出现额外波束——像幽灵影像。会扰乱跟踪，浪费功率。",

        "visual5.app5.tag": "极化",

        "visual5.app5.title": "极化多样性",

        "visual5.app5.desc": "每个阵元可设计成垂直、水平或圆极化。双极化阵列让单次脉冲信息翻倍——对抗天气和杂波很有用。",

        "visual5.app6.tag": "失效",

        "visual5.app6.title": "阵元失效",

        "visual5.app6.desc": "真实阵列会随时间损失阵元。AESA 容错强——几个坏阵元只略降低增益。PESA 更敏感——一个坏移相器毁整行。",

        "visual5.num": "05",

        "visual5.name": "有源 vs 无源",

        "visual5.title": "谁拥有发射机？",

        "visual5.intro": "两类相控阵的区别在于谁拥有发射机。两者都工作；以成本换灵活性。",

        "visual5.caption": "现代军用和 5G 系统用 AESA。老的便宜系统还在用 PESA。随着 AESA 芯片降价，界限在模糊。",

        "visual6.app1.tag": "F-35",

        "visual6.app1.title": "AN/APG-81 雷达",

        "visual6.app1.desc": "约 1600 个 GaAs 收发模块。每个阵元都有自己的固态放大器、移相器、控制线。成本：每部雷达约 100–200 万美元。",

        "visual6.app2.tag": "5G",

        "visual6.app2.title": "64 阵元基站",

        "visual6.app2.desc": "现代 5G 大规模 MIMO 面板用 64、128 或 256 个小天线。每个都电子转向，跟踪小区里的用户。",

        "visual6.app3.tag": "汽车",

        "visual6.app3.title": "77 GHz 雷达芯片",

        "visual6.app3.desc": "单个毫米波芯片容纳 4 到 12 个阵元，间距 2 mm。驱动自适应巡航、盲点监测、紧急刹车——全部来自一个雷达。",

        "visual6.app4.tag": "气象",

        "visual6.app4.title": "PAR 天线",

        "visual6.app4.desc": "相控阵气象雷达 (PAR) 用上千个阵元排在平面上。整个天空扫描从几分钟变成几秒。",

        "visual6.app5.tag": "卫星",

        "visual6.app5.title": "直播卫星",

        "visual6.app5.desc": "Starlink 等卫星互联网用相控阵：卫星上和地面用户端都有上千个阵元。每个波束对准一个不同客户。",

        "visual6.app6.tag": "医疗",

        "visual6.app6.title": "超声探头",

        "visual6.app6.desc": "探头头部容纳 64 到 192 个压电阵元。每个都是小超声阵元，电子转向形成图像。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "阵元在哪里出现",

        "visual6.intro": "凡是波束需要指向或扫描的地方，都有阵元阵列在工作。从卫星到汽车到医院的探头。",

        "visual6.caption": "阵元数量是衡量阵列能力的最简单指标。阵元越多 → 波束越尖、目标越多、灵活性越高。"

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
