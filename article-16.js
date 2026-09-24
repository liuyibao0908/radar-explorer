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
        "page.title": "Article 16: Astronomical Radar — Radar Explorer",
        "page.description": "Article 16: How does astronomical radar study planets, asteroids, and space debris? A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "article.author": "By Editorial",
        "article.date": "Sept 5, 2024",
        "toc.title": "On this page",
        "toc.s1": "Radar to space",
        "toc.s2": "Why so big and powerful",
        "toc.s3": "Asteroid scan animation",
        "toc.s4": "Worked example",
        "toc.s5": "Planetary defense",
        "toc.s6": "Space debris",
        "article.title": "Astronomical Radar",
        "article.subtitle": "Radar does not only look at Earth — it can also probe planets, asteroids and meteors millions of kilometres away.",
        "article.p1": "Radar is not only used on Earth — it can also study space.",
        "article.p2": "Astronomical radar sends waves to planets, asteroids, and meteors. It receives echoes to measure distance, shape, and surface features. It can study asteroid orbits and assess impact risks. It can also track space debris to protect spacecraft.",
        "article.p3": "It is like giving space objects a radar scan. Astronomical radar uses high power and large antennas. It is an important tool for planetary science and space monitoring. Radar adds another method to astronomy.",
        "article.p4": "Astronomical radar turns a single radio dish into a giant measuring stick for the solar system. From the Moon to distant asteroids, radar gives precise answers where optical telescopes only see a point of light.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Astronomical radar uses radio waves to study planets, asteroids, and space debris.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2024",
        "fig1.title": "Earth radar pinging an asteroid",
        "fig1.earth": "EARTH",
        "fig1.asteroid": "ASTEROID",
        "fig1.distance": "~ 22 million km",
        "fig1.bottom": "Earth radar → round-trip echo → asteroid orbit",
        "visual1.num": "01",
        "visual1.name": "RADAR TO SPACE",
        "visual1.title": "From Earth to Millions of Kilometres Away",
        "visual1.intro": "Astronomical radar is just like the radar on Earth — but the antenna is huge and the target is millions of kilometres away. The echo is tiny, but it carries distance, shape and orbit information.",
        "visual1.caption": "A big dish on Earth fires a powerful pulse at an asteroid. The echo returns minutes later, telling us exactly how far away the asteroid is and how fast it is moving.",
        "visual2.left.tag": "NORMAL RADAR",
        "visual2.left.radar": "ground radar",
        "visual2.left.dist": "~ 100 km",
        "visual2.left.power": "~ 50 kW power",
        "visual2.right.tag": "ASTRONOMICAL",
        "visual2.right.dish": "70 m dish",
        "visual2.right.dist": "~ 22 million km",
        "visual2.right.power": "~ 500 kW power",
        "visual2.num": "02",
        "visual2.name": "WHY SO BIG AND POWERFUL",
        "visual2.title": "Space Is Far and Echoes Are Tiny",
        "visual2.intro": "Radar signal drops with the fourth power of distance. Asteroids are millions of kilometres away, so the echo is incredibly weak. Astronomical radar uses the biggest dishes on Earth and the highest transmitter power.",
        "visual2.caption": "Bigger dish captures more energy. Higher power sends more signal. Together they make the impossible round-trip work.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: ASTEROID SCAN",
        "visual3.title": "Watch the Pulse Travel Across the Solar System",
        "visual3.intro": "The animation shows a radar pulse leaving Earth, crossing the void, bouncing off a small asteroid, and returning. The round-trip time tells us the distance.",
        "visual3.fallback": "Your browser does not support embedded video. The animation shows the radar pulse leaving Earth, reaching an asteroid, and returning minutes later.",
        "visual3.cc1": "1. SEND — Earth radar fires a powerful pulse toward the asteroid",
        "visual3.cc2": "2. TRAVEL — pulse crosses millions of kilometres in minutes",
        "visual3.cc3": "3. BOUNCE — the asteroid reflects a tiny fraction of the energy",
        "visual3.cc4": "4. RETURN — echo comes home, distance and orbit are measured",
        "visual3.caption": "The round-trip time of the echo is the simplest measurement — distance = c × time / 2.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "22 Million km, Round-Trip in 146 s",
        "visual4.intro": "An asteroid is 22 million km away. How long does it take for a radar pulse to go there and back?",
        "visual4.row1.label": "Asteroid distance D",
        "visual4.row1.value": "22 × 10⁶ km",
        "visual4.row2.label": "Round-trip 2D",
        "visual4.row2.value": "44 × 10⁶ km",
        "visual4.row3.label": "Travel time",
        "visual4.row3.formula": "2D / c",
        "visual4.row4.label": "Travel time",
        "visual4.row4.value": "≈ 146 s",
        "visual4.caption": "With c = 300,000 km/s, a round-trip to a near-Earth asteroid takes only a few minutes — fast enough to repeat many times and refine the measurement.",
        "fig5.title": "Asteroid orbit + Earth risk",
        "fig5.sun": "SUN",
        "fig5.earth": "EARTH",
        "fig5.asteroid": "ASTEROID",
        "fig5.range": "R = 0.02 AU",
        "fig5.note": "Radar measures orbit → predicts future positions → decades of warning",
        "fig5.torino": "Torino 0: no threat",
        "visual5.num": "05",
        "visual5.name": "PLANETARY DEFENSE",
        "visual5.title": "Tracking Asteroids That Could Hit Earth",
        "visual5.intro": "Most asteroids orbit the Sun far from Earth. A few near-Earth asteroids come close. Radar pinpoints their orbit so we can predict whether they will ever hit Earth — decades into the future.",
        "visual5.caption": "The Torino Scale classifies impact risk from 0 (none) to 10 (certain collision). Radar observations keep pushing objects down the scale by tightening orbit predictions.",
        "visual6.app1.tag": "PLANETARY SCIENCE",
        "visual6.app1.title": "Mapping Planets",
        "visual6.app1.desc": "Radar imaging of Venus, Mercury, the Moon and Mars reveals surfaces hidden under clouds or in deep craters. Resolution rivals orbiters — from Earth.",
        "visual6.app2.tag": "ASTEROID DEFENSE",
        "visual6.app2.title": "Impact Risk",
        "visual6.app2.desc": "Radar gives asteroid orbits to within a few metres. With decades of warning, deflection missions become feasible (NASA DART, 2022).",
        "visual6.app3.tag": "METEOR PHYSICS",
        "visual6.app3.title": "Meteors & Comets",
        "visual6.app3.desc": "Radar echoes from meteor trails measure their speed, size and composition. Used to characterise incoming objects.",
        "visual6.app4.tag": "SPACE DEBRIS",
        "visual6.app4.title": "Orbital Surveillance",
        "visual6.app4.desc": "Earth-based radars track objects down to 2 cm in low Earth orbit. Used for collision warnings to the ISS and active satellites.",
        "visual6.app5.tag": "MOON & PLANETS",
        "visual6.app5.title": "Lunar Mapping",
        "visual6.app5.desc": "Radar mapping from Arecibo and Goldstone revealed hidden terrain features, polar ice deposits, and shadowed craters.",
        "visual6.app6.tag": "SCIENCE",
        "visual6.app6.title": "Fundamental Tests",
        "visual6.app6.desc": "Radar ranging to planets and the Moon tests general relativity, gravitational constant stability over time, and the Earth-Moon distance drift.",
        "visual6.num": "06",
        "visual6.name": "SPACE DEBRIS",
        "visual6.title": "Tracking Junk Around Earth",
        "visual6.intro": "Astronomical radar has many uses: from planetary mapping to asteroid defence, meteor physics to space-debris tracking. Some of the biggest dishes on Earth work as astronomical radars part of the time.",
        "visual6.caption": "Astronomical radar is rare because only a few facilities (Goldstone, Arecibo legacy sites, EVLA, Effelsberg) have the combination of power and antenna size to do it."
    },

    zh: {
        "page.title": "第16篇：天文雷达（Astronomical Radar）— 雷达探索者",
        "page.description": "第16篇：天文雷达如何研究行星、小行星和太空碎片。面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "article.author": "作者：小编",
        "article.date": "2024年9月5日",
        "toc.title": "本页目录",
        "toc.s1": "雷达看太空",
        "toc.s2": "为什么这么大功率",
        "toc.s3": "探测小行星动画",
        "toc.s4": "详解例题",
        "toc.s5": "行星防卫",
        "toc.s6": "太空碎片",
        "article.title": "天文雷达",
        "article.subtitle": "雷达不仅看地球——还能探测上千万公里外的行星、小行星和流星。",
        "article.p1": "雷达不只在地球用，还能用来研究太空。",
        "article.p2": "天文雷达向行星、小行星、流星发波。接收回波，测距离、形状、表面特征。能研究小行星轨道，评估撞击风险。还能监测太空碎片，保护航天器。",
        "article.p3": "像给太空天体做雷达扫描。天文雷达功率大、天线大。是行星科学和太空监测的重要工具。雷达让天文观测多了一种手段。",
        "article.p4": "天文雷达把一个雷达台变成一把太阳系里的巨型测量标。从月球到远处小行星，那些只能看到一点光的天体，雷达能给出精准的数据。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "天文雷达用电磁波研究行星、小行星和太空碎片。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2024",
        "fig1.title": "地球雷达探测小行星",
        "fig1.earth": "地球",
        "fig1.asteroid": "小行星",
        "fig1.distance": "约 2200 万公里",
        "fig1.bottom": "地球雷达 → 双程回波 → 小行星轨道",
        "visual1.num": "01",
        "visual1.name": "雷达看太空",
        "visual1.title": "从地球到数千万公里外",
        "visual1.intro": "天文雷达和地面雷达原理一样——只不过天线很大、目标远在数千万公里外。回波很弱，但运走着距离、形状和轨道信息。",
        "visual1.caption": "地球上的巨型天线发出强功率脉冲，撞上小行星。回波数分钟后返回，告诉我们小行星精准的距离和运动速度。",
        "visual2.left.tag": "一般雷达",
        "visual2.left.radar": "地面雷达",
        "visual2.left.dist": "约 100 公里",
        "visual2.left.power": "约 50 kW 功率",
        "visual2.right.tag": "天文雷达",
        "visual2.right.dish": "70 米天线",
        "visual2.right.dist": "约 2200 万公里",
        "visual2.right.power": "约 500 kW 功率",
        "visual2.num": "02",
        "visual2.name": "为什么这么大功率",
        "visual2.title": "太空远，回波弱",
        "visual2.intro": "雷达信号随距离四次方衰减。小行星在数千万公里外，回波极其微弱。天文雷达重复了人类最大的天线和最高的发射功率。",
        "visual2.caption": "更大的天线接收更多信号，更高的功率发出更强脉冲。两者结合才能让这种极其困难的双程反射成为可能。",
        "visual3.num": "03",
        "visual3.name": "动画：探测小行星",
        "visual3.title": "看脉冲走越太阳系",
        "visual3.intro": "动画展示一个脉冲从地球发出，跨越净空撞上小行星，然后返回。双程时间就是距离。",
        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示雷达脉冲从地球发出，达到小行星，数分钟后返回。",
        "visual3.cc1": "1. 发送 — 地球雷达向小行星发强脉冲",
        "visual3.cc2": "2. 传播 — 脉冲几分钟跨越数千万公里",
        "visual3.cc3": "3. 反射 — 小行星反射一点点信号",
        "visual3.cc4": "4. 返回 — 回波返回，测量距离与轨道",
        "visual3.caption": "双程时间是最简单的测量——距离 = c × 时间 / 2。",
        "visual4.num": "04",
        "visual4.name": "详解例题",
        "visual4.title": "2200 万公里，双程 146 秒",
        "visual4.intro": "一颗小行星距离 2200 万公里。雷达脉冲去一趟返回需多久？",
        "visual4.row1.label": "小行星距离 D",
        "visual4.row1.value": "22 × 10⁶ km",
        "visual4.row2.label": "双程距离 2D",
        "visual4.row2.value": "44 × 10⁶ km",
        "visual4.row3.label": "传播时间",
        "visual4.row3.formula": "2D / c",
        "visual4.row4.label": "传播时间",
        "visual4.row4.value": "≈ 146 秒",
        "visual4.caption": "c = 300,000 km/s，双程到近地小行星只需几分钟——够快，可以重复多次以提高测量精度。",
        "fig5.title": "小行星轨道与地球风险",
        "fig5.sun": "太阳",
        "fig5.earth": "地球",
        "fig5.asteroid": "小行星",
        "fig5.range": "R = 0.02 AU",
        "fig5.note": "雷达测量轨道 → 预报未来位置 → 预警数十年",
        "fig5.torino": "狄里诺 0 级：无威胁",
        "visual5.num": "05",
        "visual5.name": "行星防卫",
        "visual5.title": "跟踪可能撞地球的小行星",
        "visual5.intro": "大部分小行星都在太阳周围远处。一少部分近地小行星会越过地球。雷达能精准测量轨道，预报它们是否会撞地球——预警可达数十年。",
        "visual5.caption": "狄里诺量表将撞击风险分为 0 — 10 级（0 是无威胁，10 是必撞）。雷达观测能让它们反复下调。",
        "visual6.app1.tag": "行星科学",
        "visual6.app1.title": "绘制行星地图",
        "visual6.app1.desc": "金星、水星、月球、火罗的雷达成像披露了被云层遮盖或低幽型台地下的表面。清晰度不劣于轨道器——从地球上。",
        "visual6.app2.tag": "小行星防卫",
        "visual6.app2.title": "撞击风险",
        "visual6.app2.desc": "雷达能把小行星轨道精确到几米以内。如果有数十年预警，踢偏任务就是可行的（NASA DART，2022）。",
        "visual6.app3.tag": "流星物理",
        "visual6.app3.title": "流星与彗星",
        "visual6.app3.desc": "雷达反射流星及彗星道测量其速度、大小和成分。用于鉴定近地天体。",
        "visual6.app4.tag": "太空碎片",
        "visual6.app4.title": "轨道监护",
        "visual6.app4.desc": "地面雷达能跟踪低轨道上小到 2 厘米的碎片。为国际空间站和活动卫星提供碰撞预警。",
        "visual6.app5.tag": "月球与行星",
        "visual6.app5.title": "月面测绘",
        "visual6.app5.desc": "Arecibo 和 Goldstone 雷达披露了月球两极可能的水冰、阴影灬灬及其他隐区地形。",
        "visual6.app6.tag": "基础科学",
        "visual6.app6.title": "基础物理验证",
        "visual6.app6.desc": "雷达测距用于检验广义相对论、万有引力常量随时间变化、地月距离長期漂移等。",
        "visual6.num": "06",
        "visual6.name": "太空碎片",
        "visual6.title": "跟踪地球周围的垃场",
        "visual6.intro": "天文雷达用途广泛：行星测绘、小行星防卫、流星物理、太空碎片跟踪。全球只有几个设施兼具足够的天线和功率。",
        "visual6.caption": "全球只有少数设施（Goldstone、Arecibo 遗载、EVLA、Effelsberg 等）兼具足够天线和功率能用于天文雷达。"
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
