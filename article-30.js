/* =========================

   ARTICLE 30 — Passive vs Active Phased Array

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
        "page.title": "Article 30: Passive vs Active Phased Array — Radar Explorer",
        "page.description": "Article 30: What is the difference between a passive phased array (PESA) and an active phased array (AESA)? A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "toc.title": "On this page",
        "toc.s1": "The two flavours",
        "toc.s2": "Anatomy of PESA and AESA",
        "toc.s3": "Signal path animation",
        "toc.s4": "Trade-off example",
        "toc.s5": "Pros, cons, failure",
        "toc.s6": "Where each shows up",
        "article.title": "Passive vs Active Phased Array",
        "article.author": "By Editorial",
        "article.date": "Oct 4, 2026",
        "article.subtitle": "Same antenna face. Transmitter lives in two very different places.",
        "article.p1": "Phased arrays come in two types: passive and active. What's the difference?",
        "article.p2": "Passive phased array: one central transmitter sends the signal to all elements, and elements only shift phase. Active phased array: each element has its own transmit/receive module and works independently.",
        "article.p3": "Passive is simpler and cheaper, but has more loss and less flexibility. Active is more efficient and reliable — if one element fails, the rest still work. Active phased arrays can produce more complex waveforms and scan faster.",
        "article.p4": "Most modern advanced radars use active phased arrays. Passive ones still have some uses, especially in older systems. The key difference: is the transmitter central or distributed?",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Passive uses a central transmitter; active gives each element its own.",
        "visual1.num": "01",
        "visual1.name": "TWO FLAVOURS",
        "visual1.title": "One Antenna Face, Two Architectures",
        "visual1.intro": "The antenna panels look almost identical. The difference is hidden behind the face, where the transmitter sits.",
        "fig1.title": "PESA (left) vs AESA (right)",
        "fig1.pesa": "PASSIVE (PESA)",
        "fig1.tx": "1 TRANSMITTER",
        "fig1.pesanote": "central TX · shared feed network",
        "fig1.aesa": "ACTIVE (AESA)",
        "fig1.notx": "NO CENTRAL TX",
        "fig1.aesanote": "T/R module in every element",
        "visual1.caption": "PESA has one transmitter feeding a shared network; AESA puts a transmit/receive module in every element.",
        "visual2.num": "02",
        "visual2.name": "ANATOMY",
        "visual2.title": "Where the Energy Goes",
        "visual2.intro": "Signal paths look very different: one shared tree, or a digital bus to a thousand independent radios.",
        "fig2.title": "Signal path PESA vs AESA",
        "fig2.path.pesa": "PESA PATH",
        "fig2.txlabel": "TX",
        "fig2.splitter": "splitter",
        "fig2.phase": "P",
        "fig2.pesacost": "more feed loss · single point of failure",
        "fig2.pesarow": "1 TX → splitter → phase shifters → elements",
        "fig2.path.aesa": "AESA PATH",
        "fig2.tr": "T/R",
        "fig2.bus": "DIGITAL CONTROL BUS",
        "fig2.aesarow": "T/R in element → shared digital control",
        "visual2.caption": "PESA: one TX feeds many elements through a lossy splitter. AESA: every element has its own TX, joined only by a digital control bus.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: SIGNAL FLOW",
        "visual3.title": "One Transmitter, or One Per Element",
        "visual3.intro": "The animation contrasts the signal flowing through one shared feed (PESA) versus being generated right at every element (AESA).",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. PESA -- one transmitter feeds every element through a splitter",
        "visual3.cc2": "2. LIMIT -- the splitter adds loss and a single point of failure",
        "visual3.cc3": "3. AESA -- each element carries its own transmit and receive module",
        "visual3.cc4": "4. ROBUST -- one element failing barely dents the beam",
        "visual3.caption": "PESA vs AESA signal flow: one shared TX or one TX per element.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "One Element Out of a Thousand",
        "visual4.intro": "Imagine a 1000-element array where 10 elements have died. The two architectures react very differently.",
        "visual4.row1.label": "Elements in face",
        "visual4.row1.value": "1,000",
        "visual4.row2.label": "Elements failed",
        "visual4.row2.value": "10 (1%)",
        "visual4.row3.label": "PESA output",
        "visual4.row3.formula": "0%",
        "visual4.row4.label": "AESA output",
        "visual4.row4.value": "~99%",
        "visual4.caption": "If the central transmitter fails, PESA goes dark. In AESA, dead elements only shave a tiny fraction of the beam.",
        "visual5.num": "05",
        "visual5.name": "PROS, CONS, FAILURE",
        "visual5.title": "Where Each Architecture Pays Off",
        "visual5.intro": "The trade-off between cost and capability is what drives the choice in real systems.",
        "visual5.app1.tag": "PESA PLUS",
        "visual5.app1.title": "Cheaper to Build",
        "visual5.app1.desc": "One transmitter and a shared feed network cost far less than a thousand tiny transmit/receive modules.",
        "visual5.app2.tag": "PESA MINUS",
        "visual5.app2.title": "Single Point of Failure",
        "visual5.app2.desc": "When the central transmitter fails, the whole array goes dark. The loss through the feed network also wastes power.",
        "visual5.app3.tag": "AESA PLUS",
        "visual5.app3.title": "Built-In Redundancy",
        "visual5.app3.desc": "If a few modules die, the rest still radiate. Modern fighters even tolerate 5–10% element loss without serious degradation.",
        "visual5.app4.tag": "AESA MINUS",
        "visual5.app4.title": "Higher Cost, Higher Cooling",
        "visual5.app4.desc": "Each module needs its own amplifier, control line, and heat sinking. Cost is the price of redundancy and flexibility.",
        "visual5.app5.tag": "WAVEFORM",
        "visual5.app5.title": "Waveform Diversity",
        "visual5.app5.desc": "AESA can run different waveforms from different elements, enabling low-probability-of-intercept and adaptive modes.",
        "visual5.app6.tag": "SPECTRUM",
        "visual5.app6.title": "Wide Bandwidth",
        "visual5.app6.desc": "T/R modules can tune across a wide frequency range, giving AESA better electronic protection against jamming.",
        "visual5.caption": "PESA trades away flexibility for cost; AESA trades away cost for flexibility.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "Where Each Type Lives Today",
        "visual6.intro": "AESA dominates new designs; PESA still runs many older systems.",
        "visual6.app1.tag": "MILITARY",
        "visual6.app1.title": "Fighter AESA",
        "visual6.app1.desc": "F-35 AN/APG-81, F-22 AN/APG-77, and the J-20 radar are all AESA — built from GaAs or GaN T/R modules at every element.",
        "visual6.app2.tag": "AIR DEFENCE",
        "visual6.app2.title": "AEGIS Destroyer Radar",
        "visual6.app2.desc": "The original SPY-1 was PESA. The new SPY-6(V) on US Navy cruisers and destroyers is AESA, gaining sensitivity and resistance to jamming.",
        "visual6.app3.tag": "EARLY",
        "visual6.app3.title": "SPY-1 (PESA)",
        "visual6.app3.desc": "Ticonderoga cruisers and Burke Flight I still use the SPY-1 PESA — battle-proven but increasingly outclassed by newer AESA radars.",
        "visual6.app4.tag": "WEATHER",
        "visual6.app4.title": "TDWR and PAR",
        "visual6.app4.desc": "Most operational weather radars are still PESA, but new TDWR and PAR sites are switching to AESA for faster update rates.",
        "visual6.app5.tag": "COMMERCIAL",
        "visual6.app5.title": "5G Massive MIMO",
        "visual6.app5.desc": "5G base stations with 64 or 256 elements are all AESA — each element carries its own RF chain for simultaneous users.",
        "visual6.app6.tag": "AUTOMOTIVE",
        "visual6.app6.title": "77GHz Imaging Chip",
        "visual6.caption": "AESA is the default for new radar systems; PESA lives on in older installations.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2026",
        "visual6.app6.desc": "Modern 77 GHz automotive radar chips integrate a small AESA on silicon, letting multiple beams track several cars at once.",
    },

    zh: {
        "page.title": "文章 30：无源相控阵 vs 有源相控阵 — 雷达探索者",
        "page.description": "文章 30：无源相控阵（PESA）和有源相控阵（AESA）到底差在哪？面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "toc.title": "本页目录",
        "toc.s1": "两种架构",
        "toc.s2": "PESA 和 AESA 的结构",
        "toc.s3": "信号流动画",
        "toc.s4": "对比计算",
        "toc.s5": "优缺点与失效",
        "toc.s6": "应用场景",
        "article.title": "无源相控阵 vs 有源相控阵",
        "article.author": "编辑部",
        "article.date": "2026年10月4日",
        "article.subtitle": "天线面板看起来一样，发射机却住在完全不同的位置。",
        "article.p1": "相控阵分两种：无源和有源。它们差在哪？",
        "article.p2": "无源相控阵：一个中央发射机，信号分到各阵元，阵元只负责移相。有源相控阵：每个阵元自带发射/接收组件，独立工作。",
        "article.p3": "无源结构简单、成本低，但损耗大、灵活性差。有源效率高、可靠性好，一个阵元坏了不影响整体。有源相控阵能实现更复杂的波形和更快的扫描。",
        "article.p4": "现代先进雷达大多用有源相控阵。无源相控阵仍有部分应用，尤其是老式系统。两者核心区别：发射机是集中还是分散。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "无源是中央发射，有源是每个阵元自带发射。",
        "visual1.num": "01",
        "visual1.name": "两种架构",
        "visual1.title": "一张面板，两种结构",
        "visual1.intro": "天线面板看上去几乎一样。差别藏在面板背后 — 发射机放在哪里。",
        "fig1.title": "无源 vs 有源",
        "fig1.pesa": "无源 (PESA)",
        "fig1.tx": "1 台发射机",
        "fig1.pesanote": "中央 TX · 共用馈电网络",
        "fig1.aesa": "有源 (AESA)",
        "fig1.notx": "无中央 TX",
        "fig1.aesanote": "每个阵元自带 T/R 模块",
        "visual1.caption": "无源：共用一台发射机和馈电网络；有源：每个阵元都自带发射/接收模块。",
        "visual2.num": "02",
        "visual2.name": "结构解剖",
        "visual2.title": "能量走的是哪条路",
        "visual2.intro": "信号路径差别很大：一条共用树形总线，或是一根数字控制线连着一千个独立小电台。",
        "fig2.title": "无源 vs 有源信号路径",
        "fig2.path.pesa": "PESA 路径",
        "fig2.txlabel": "TX",
        "fig2.splitter": "功分器",
        "fig2.phase": "P",
        "fig2.pesacost": "馈电损耗大 · 单点故障",
        "fig2.pesarow": "1 台 TX → 功分器 → 移相器 → 阵元",
        "fig2.path.aesa": "AESA 路径",
        "fig2.tr": "T/R",
        "fig2.bus": "数字控制总线",
        "fig2.aesarow": "T/R 进入阵元 → 共用数字控制",
        "visual2.caption": "PESA：一台发射机经功分器给所有阵元；AESA：每个阵元自带发射机，仅共享一根数字控制总线。",
        "visual3.num": "03",
        "visual3.name": "动画：信号流",
        "visual3.title": "一台发射机，还是一千台",
        "visual3.intro": "动画对比信号穿过共用馈电（PESA）和每个阵元就地生成（AESA）两种方式。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. PESA — 一台发射机经功分器送信号到所有阵元",
        "visual3.cc2": "2. 局限 — 功分器带来损耗，且是单点故障",
        "visual3.cc3": "3. AESA — 每个阵元自带发射和接收模块",
        "visual3.cc4": "4. 鲁棒 — 一个阵元坏了对波束几乎没影响",
        "visual3.caption": "PESA vs AESA 信号流：共用一台 TX 还是每阵元一台 TX。",
        "visual4.num": "04",
        "visual4.name": "对比计算",
        "visual4.title": "一千个阵元坏掉十个",
        "visual4.intro": "想象 1000 阵元的阵列中已经坏了 10 个，两种架构反应完全不同。",
        "visual4.row1.label": "阵元总数",
        "visual4.row1.value": "1,000",
        "visual4.row2.label": "已坏阵元",
        "visual4.row2.value": "10（1%）",
        "visual4.row3.label": "PESA 输出",
        "visual4.row3.formula": "0%",
        "visual4.row4.label": "AESA 输出",
        "visual4.row4.value": "~99%",
        "visual4.caption": "中央发射机坏了 PESA 就罢工；AESA 只损失极小一部分波束。",
        "visual5.num": "05",
        "visual5.name": "优缺点与失效",
        "visual5.title": "哪种架构更适合哪种场景",
        "visual5.intro": "成本与性能的权衡决定了实际系统的选型。",
        "visual5.app1.tag": "PESA 优点",
        "visual5.app1.title": "造价低",
        "visual5.app1.desc": "一台发射机加共用馈电网络，远比一千个 T/R 模块便宜。",
        "visual5.app2.tag": "PESA 缺点",
        "visual5.app2.title": "单点故障",
        "visual5.app2.desc": "中央发射机一旦失效，整个阵列就停摆。馈电网络的损耗也浪费功率。",
        "visual5.app3.tag": "AESA 优点",
        "visual5.app3.title": "天然冗余",
        "visual5.app3.desc": "少量模块失效不影响整体。现代战机可容忍 5–10% 阵元损失而不显著降级。",
        "visual5.app4.tag": "AESA 缺点",
        "visual5.app4.title": "成本高、散热大",
        "visual5.app4.desc": "每个模块需要独立的功放、控制线和散热。成本换来了冗余与灵活性。",
        "visual5.app5.tag": "波形",
        "visual5.app5.title": "波形多样",
        "visual5.app5.desc": "AESA 可让不同阵元发不同波形，支持低截获概率和自适应模式。",
        "visual5.app6.tag": "频谱",
        "visual5.app6.title": "带宽更宽",
        "visual5.app6.desc": "T/R 模块频率可调范围宽，电子防御能力比 PESA 强很多。",
        "visual5.caption": "PESA 用灵活性换成本；AESA 用成本换灵活性。",
        "visual6.num": "06",
        "visual6.name": "应用",
        "visual6.title": "今天两种架构都在哪里",
        "visual6.intro": "新设计几乎都是 AESA；PESA 仍服役于很多老系统。",
        "visual6.app1.tag": "军用",
        "visual6.app1.title": "战机 AESA",
        "visual6.app1.desc": "F-35 的 AN/APG-81、F-22 的 AN/APG-77、歼-20 的雷达，都是 AESA —— 每个阵元都自带 GaAs 或 GaN 的 T/R 模块。",
        "visual6.app2.tag": "防空",
        "visual6.app2.title": "宙斯盾舰载雷达",
        "visual6.app2.desc": "老的 SPY-1 是 PESA，新的 SPY-6(V) 是 AESA，美军巡洋舰和驱逐舰已陆续换装。",
        "visual6.app3.tag": "老装备",
        "visual6.app3.title": "SPY-1（PESA）",
        "visual6.app3.desc": "提康德罗加巡洋舰和 Flight I 阿利·伯克仍用 SPY-1 PESA —— 实战经过验证，但被新型 AESA 雷达逐步超越。",
        "visual6.app4.tag": "气象",
        "visual6.app4.title": "TDWR 和 PAR",
        "visual6.app4.desc": "现役气象雷达多是 PESA，新建 TDWR 和相控阵气象站（PAR）已逐步转向 AESA 以获得更快的刷新。",
        "visual6.app5.tag": "商用",
        "visual6.app5.title": "5G 大规模 MIMO",
        "visual6.app5.desc": "5G 基站 64 或 256 阵元都是 AESA —— 每个阵元自带射频链路，可同时服务多用户。",
        "visual6.app6.tag": "汽车",
        "visual6.app6.title": "77 GHz 成像芯片",
        "visual6.app6.desc": "现代 77 GHz 汽车雷达芯片把小型 AESA 集成在硅片上，多个波束同时跟踪多辆车。",
        "visual6.caption": "AESA 是新雷达系统的默认选择；PESA 仍服役于老平台。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2026",
    },
}

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
