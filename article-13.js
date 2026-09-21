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
        "page.title": "Article 13: How Does Radar Know the Direction? — Radar Explorer",
        "page.description": "Article 13: How does radar know the direction? A bilingual student-friendly explainer of antenna beams, mechanical scan, and phased arrays.",

        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",

        "article.author": "By Editorial",
        "article.date": "Sept 21, 2026",

        "toc.title": "On this page",
        "toc.s1": "The antenna beam",
        "toc.s2": "Mechanical vs phased-array",
        "toc.s3": "Beam-sweep animation",
        "toc.s4": "Worked example",
        "toc.s5": "Narrow vs wide beams",
        "toc.s6": "Azimuth and elevation",

        "article.title": "How Does Radar Know the Direction?",
        "article.subtitle": "A radar needs to know not only how far, but also where. How does it find the direction?",

        "article.p1": "A radar needs to know not only how far a target is, but also which direction it is in. This depends on the antenna beam.",
        "article.p2": "The antenna focuses radio waves into a narrow beam and sends it in one direction. Whichever direction the echo comes from, that’s where the target is. Mechanical-scan radars turn the antenna to sweep the beam across different directions. Phased-array radars don’t turn the antenna — they steer the beam electronically.",
        "article.p3": "A narrower beam means better direction accuracy, but a smaller search area. Think of a flashlight: wherever it shines, that’s where something is. Radars also use “azimuth” and “elevation” to describe direction.",
        "article.p4": "With many targets, the radar must switch beams quickly or use multiple beams at once. Direction measurement is a key step in radar positioning.",

        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Radar uses antenna beam direction to judge where a target is.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2026",

        "fig1.title": "Antenna beam diagram",
        "fig1.radar": "RADAR",
        "fig1.target": "TARGET",
        "fig1.beam": "BEAM DIRECTION",
        "fig1.width": "beam width θ",

        "visual1.num": "01",
        "visual1.name": "THE ANTENNA BEAM",
        "visual1.title": "The Antenna Focuses Waves into a Narrow Beam",
        "visual1.intro": "The antenna sends out a focused radio beam in one direction. Whatever lies inside that beam can reflect energy back.",
        "visual1.caption": "A narrow beam points in a single direction. If the echo returns, the target is somewhere along that beam.",

        "fig2.title": "Mechanical vs phased-array scan",
        "visual2.left.tag": "MECHANICAL SCAN",
        "visual2.left.motor": "← motor →",
        "visual2.right.tag": "PHASED ARRAY",
        "visual2.right.phase": "phase shift →",
        "visual2.right.noMove": "NO MOVING PARTS",

        "visual2.num": "02",
        "visual2.name": "MECHANICAL VS PHASED-ARRAY",
        "visual2.title": "Two Ways to Sweep the Beam",
        "visual2.intro": "Mechanical radars physically rotate the antenna. Phased-array radars keep the antenna still and steer the beam with electronic phase shifts.",
        "visual2.caption": "Both styles achieve the same goal — sweeping the beam across the sky — but phased arrays are faster and have no moving parts to wear out.",

        "visual3.num": "03",
        "visual3.name": "ANIMATION: BEAM SWEEPS AND LOCKS",
        "visual3.title": "Watch the Beam Sweep Across the Sky",
        "visual3.intro": "The beam rotates to scan. When the echo arrives, the current beam angle gives the direction. Range comes from time-of-flight.",
        "visual3.fallback": "Your browser does not support embedded video. The animation shows: the beam sweeps across the sky, finds a target, and reports both range and direction.",
        "visual3.cc1": "1. SWEEP — beam rotates to scan",
        "visual3.cc2": "2. DETECT — echo arrives when beam hits a target",
        "visual3.cc3": "3. LOCATE — direction = current beam angle",
        "visual3.cc4": "4. REPORT — range + direction = 3D position",
        "visual3.caption": "The beam sweeps the sky. When the echo returns, the beam angle gives the direction. Range comes from time-of-flight (see Article 12).",

        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "If the Beam is 2° Wide, How Accurate Is the Direction?",
        "visual4.intro": "Direction accuracy depends on beam width and target range. A narrower beam or a closer target means less cross-range error.",
        "visual4.row1.label": "Beam width θ",
        "visual4.row1.value": "2°",
        "visual4.row2.label": "Target range R",
        "visual4.row2.value": "100 km",
        "visual4.row3.label": "Cross-range error",
        "visual4.row3.formula": "R × tan(θ/2)",
        "visual4.row4.label": "Cross-range error",
        "visual4.row4.value": "1.75 km",
        "visual4.caption": "Plugging in: 100 × tan(1°) ≈ 100 × 0.0175 ≈ 1.75 km.",

        "fig5.title": "Narrow vs wide beam trade-off",
        "fig5.left.label": "WIDE BEAM",
        "fig5.left.note": "coarse direction",
        "fig5.right.label": "NARROW BEAM",
        "fig5.right.note": "precise direction",

        "visual5.num": "05",
        "visual5.name": "NARROW VS WIDE BEAMS",
        "visual5.title": "Narrow Beams Mean Better Accuracy but Less Coverage",
        "visual5.intro": "A wider beam covers more sky at once, but blurs the target’s direction. A narrower beam pinpoints the angle, but takes longer to scan the whole sky.",
        "visual5.caption": "Narrow beams give better angle accuracy; wide beams give faster scanning. Real radars balance the two.",

        "fig6.title": "Azimuth and elevation",
        "fig6.radar": "RADAR",
        "fig6.target": "TARGET",
        "fig6.azim": "AZIMUTH",
        "fig6.elev": "ELEV.",
        "fig6.leftLabel": "horizontal → azimuth",
        "fig6.upLabel": "vertical → elevation",

        "visual6.num": "06",
        "visual6.name": "AZIMUTH AND ELEVATION",
        "visual6.title": "Azimuth and Elevation: 3D Direction",
        "visual6.intro": "To fully locate a target in 3D space, the radar measures both the horizontal angle (azimuth) and the vertical angle (elevation).",
        "visual6.caption": "A 3D fix needs both angles. Azimuth says “which way around the horizon,” elevation says “how high above the horizon.”"
    },

    zh: {
        "page.title": "第13篇：雷达怎么知道方向？— 雷达探索者",
        "page.description": "第13篇：雷达怎么知道方向？面向学生的中英双语科普，讲解天线波束、机械扫描与相控阵。",

        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",

        "article.author": "作者：小编",
        "article.date": "2026年9月21日",

        "toc.title": "本页目录",
        "toc.s1": "天线波束",
        "toc.s2": "机械与相控阵",
        "toc.s3": "波束扫描动画",
        "toc.s4": "详解例题",
        "toc.s5": "窤与宽波束",
        "toc.s6": "方位与伸位",

        "article.title": "雷达怎么知道方向？",
        "article.subtitle": "雷达不只要知道多远，还要知道在哪里。它怎么办？",

        "article.p1": "雷达不只要知道目标多远，还要知道它在哪个方向。这靠的是天线波束。",
        "article.p2": "天线把电磁波聚成一个窄波束，只朝一个方向发。哪个方向收到回波，目标就在哪个方向。机械扫描雷达靠转动天线，让波束扫过不同方向。相控阵雷达不转天线，靠电子控制波束指向。",
        "article.p3": "波束越窄，方向越准，但搜索范围越小。就像手电筒照过去，哪里亮，哪里就有东西。雷达还会用“方位角”和“伸位角”来描述方向。",
        "article.p4": "多目标时，雷达需要快速切换波束或同时多波束。方向测量是雷达定位的关键一步。",

        "article.summaryLabel": "一句话总结",
        "article.summary": "雷达靠天线波束指向判断目标方向。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2026;",

        "fig1.title": "雷达天线波束示意图",
        "fig1.radar": "雷达",
        "fig1.target": "目标",
        "fig1.beam": "波束方向",
        "fig1.width": "波束宽度 θ",

        "visual1.num": "01",
        "visual1.name": "天线波束",
        "visual1.title": "天线把电磁波聚成一个窄波束",
        "visual1.intro": "天线向一个方向发出一个聚焦的电磁波。在这个波束里的任何物体都会把能量反射回来。",
        "visual1.caption": "波束指向一个方向。如果收到回波，目标就在这个波束里某个位置。",

        "fig2.title": "机械扫描 vs 相控阵",
        "visual2.left.tag": "机械扫描",
        "visual2.left.motor": "← 电机 →",
        "visual2.right.tag": "相控阵",
        "visual2.right.phase": "相位偏移 →",
        "visual2.right.noMove": "无运动部件",

        "visual2.num": "02",
        "visual2.name": "机械 vs 相控阵",
        "visual2.title": "两种扫描波束的方式",
        "visual2.intro": "机械雷达靠转动天纼扫波束。相控阵雷达保持天线不动，靠电子调节各个单元的相位使波束发生偏转。",
        "visual2.caption": "两种方式都实现了同样的目标——让波束扫过整个天空——但相控阵更快，也没有会耗损的运动部件。",

        "visual3.num": "03",
        "visual3.name": "动画: 波束扫描与锁定",
        "visual3.title": "看波束扫过天空",
        "visual3.intro": "波束转动扫描。收到回波的那一刻，波束的方位角就是目标的方向。距离则由时间推出。",
        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示:波束扫过天空，发现目标，同时报告距离和方向。",
        "visual3.cc1": "1. 扫描 — 波束转动检测",
        "visual3.cc2": "2. 发现 — 波束命中目标时回波到达",
        "visual3.cc3": "3. 定位 — 方向= 当前波束角度",
        "visual3.cc4": "4. 上报 — 距离 + 方向 = 三维位置",
        "visual3.caption": "波束扫过天空。收到回波的那一刻,波束角度就是目标方向。距离由时间推出。",

        "visual4.num": "04",
        "visual4.name": "详解例题",
        "visual4.title": "如果波束宽5°,方向精度是多少?",
        "visual4.intro": "方向精度取决于波束宽度和目标距离。波束越窄或距离越近,跨距误差越小。",
        "visual4.row1.label": "波束宽 θ",
        "visual4.row1.value": "2°",
        "visual4.row2.label": "目标距离 R",
        "visual4.row2.value": "100 公里",
        "visual4.row3.label": "跨距误差",
        "visual4.row3.formula": "R × tan(θ/2)",
        "visual4.row4.label": "跨距误差",
        "visual4.row4.value": "1.75 公里",
        "visual4.caption": "代入:100 × tan(1°) ≈ 100 × 0.0175 ≈ 1.75 公里。",

        "fig5.title": "窄与宽波束的取舍",
        "fig5.left.label": "宽波束",
        "fig5.left.note": "方向粗糕",
        "fig5.right.label": "窄波束",
        "fig5.right.note": "方向精准",

        "visual5.num": "05",
        "visual5.name": "窄与宽波束",
        "visual5.title": "波束越窄,精度越高,但覆盖越小",
        "visual5.intro": "越宽的波束一次能扫更多天空,但目标的方向会更模糊。越窄的波束能锁定角度,但扫描整个天空需要更长时间。",
        "visual5.caption": "窄波束给出更高的角度精度,宽波束能更快地扫描。现实雷达在两者之间取得平衡。",

        "fig6.title": "方位与伸位",
        "fig6.radar": "雷达",
        "fig6.target": "目标",
        "fig6.azim": "方位",
        "fig6.elev": "伸位",
        "fig6.leftLabel": "水平方向 → 方位",
        "fig6.upLabel": "垂直方向 → 伸位",

        "visual6.num": "06",
        "visual6.name": "方位与伸位",
        "visual6.title": "三维方向:方位与伸位",
        "visual6.intro": "要定位三维空间中的目标,雷达同时测量水平角度（方位）和垂直角度（伸位）。",
        "visual6.caption": "三维定位需要两个角度。方位说“在地平线的哪一边”,伸位说“在地平线上多高”。"
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
