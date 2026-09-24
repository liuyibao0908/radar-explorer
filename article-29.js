/* =========================

   ARTICLE 29 — How Does the Beam Scan Electronically?

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
        "page.title": "Article 29: How Does the Beam Scan Electronically? — Radar Explorer",
        "page.description": "Article 29: How a phased array steers its beam electronically by changing the phase difference between elements. A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "toc.title": "On this page",
        "toc.s1": "What electronic scanning is",
        "toc.s2": "Phase difference steers the beam",
        "toc.s3": "Beam scanning animation",
        "toc.s4": "Worked example",
        "toc.s5": "Mechanical vs electronic",
        "toc.s6": "Applications",
        "article.title": "How Does the Beam Scan Electronically?",
        "article.author": "By Editorial",
        "article.date": "Feb 18, 2026",
        "article.subtitle": "The antenna never moves. Only the timing of the waves changes.",
        "article.p1": "A phased array doesn't turn its antenna. So how does the beam scan different directions?",
        "article.p2": "By changing the phase difference between elements. As the phase difference changes, the beam direction changes. This is called \"electronic scanning,\" and it is extremely fast.",
        "article.p3": "Mechanical scanning takes seconds to go around; electronic scanning takes milliseconds. Electronic scanning can jump anywhere instantly. It can also form multiple beams to track different targets at the same time.",
        "article.p4": "Think of stage lighting: without turning the lights, you can aim them anywhere by control. Electronic scanning is the core ability of a phased array.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Electronic scanning steers the beam by phase control — fast and flexible.",
        "visual1.num": "01",
        "visual1.name": "ELECTRONIC SCANNING",
        "visual1.title": "Steering Without Moving",
        "visual1.intro": "A mechanical radar physically rotates its dish. A phased array keeps the panel still and moves the beam by control alone.",
        "fig1.title": "Mechanical dish compared with a flat array",
        "fig1.left": "MECHANICAL",
        "fig1.spin": "turns",
        "fig1.leftnote": "whole dish rotates · seconds",
        "fig1.right": "ELECTRONIC",
        "fig1.rightnote": "panel stays still · beam jumps in milliseconds",
        "visual1.caption": "A rotating dish versus a flat array that holds still while the beam sweeps.",
        "visual2.num": "02",
        "visual2.name": "PHASE DIFFERENCE",
        "visual2.title": "A Tilted Wavefront",
        "visual2.intro": "Give each element a slightly later start than its neighbour, and the combined wavefront tilts. The beam points where the wavefront faces.",
        "fig2.title": "Phase shift per element tilts the wavefront",
        "fig2.p0": "0°",
        "fig2.p1": "45°",
        "fig2.p2": "90°",
        "fig2.p3": "135°",
        "fig2.p4": "180°",
        "fig2.p5": "225°",
        "fig2.p6": "270°",
        "fig2.p7": "315°",
        "fig2.beam": "beam",
        "fig2.theta": "θ",
        "fig2.top": "same frequency, staggered start time",
        "visual2.caption": "A constant phase step between neighbouring elements tilts the wavefront, which aims the beam.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: BEAM SCANNING",
        "visual3.title": "Watch the Beam Sweep Without Moving",
        "visual3.intro": "The animation ramps the phase step from zero upward. The panel never moves, yet the beam swings across the sky.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. FLAT — equal phase, beam points straight ahead",
        "visual3.cc2": "2. TILT — a small phase step tilts the wavefront",
        "visual3.cc3": "3. SWEEP — ramping the step sweeps the beam across the sky",
        "visual3.cc4": "4. MULTI — several phase sets make several beams at once",
        "visual3.caption": "Phase step ramped from 0° upward: the beam sweeps with no moving parts.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "A 90° Step Tilts the Beam 30°",
        "visual4.intro": "With half-wavelength spacing the beam angle follows sin θ = (λ / 2πd)·Δφ. A 90° phase step gives a 30° beam.",
        "visual4.row1.label": "Frequency f",
        "visual4.row1.value": "10 GHz",
        "visual4.row2.label": "Wavelength λ",
        "visual4.row2.value": "3 cm",
        "visual4.row3.label": "Element spacing d",
        "visual4.row3.value": "λ / 2 = 1.5 cm",
        "visual4.row4.label": "Phase step Δφ",
        "visual4.row4.formula": "90°",
        "visual4.row5.label": "Beam angle θ",
        "visual4.row5.value": "30°",
        "visual4.caption": "Worked example: half-wavelength spacing at 10 GHz, a 90° phase step steers the beam to 30°.",
        "visual5.num": "05",
        "visual5.name": "MECHANICAL VS ELECTRONIC",
        "visual5.title": "Seconds vs Milliseconds",
        "visual5.intro": "The two scanning methods differ in far more than speed.",
        "visual5.app1.tag": "SPEED",
        "visual5.app1.title": "Milliseconds, Not Seconds",
        "visual5.app1.desc": "A mechanically scanned dish needs seconds for one revolution. An electronically scanned array repoints in milliseconds.",
        "visual5.app2.tag": "RANDOM ACCESS",
        "visual5.app2.title": "Jump Anywhere Instantly",
        "visual5.app2.desc": "Electronic scanning does not sweep in order. The beam can jump straight to any angle in the field of view.",
        "visual5.app3.tag": "MULTI-BEAM",
        "visual5.app3.title": "Many Beams at Once",
        "visual5.app3.desc": "Because each element is driven independently, one array can form several beams and hold several targets at the same time.",
        "visual5.app4.tag": "DWELL TIME",
        "visual5.app4.title": "Longer Look Per Target",
        "visual5.app4.desc": "Time once spent spinning the dish can be spent staring at a target instead, which improves detection range.",
        "visual5.app5.tag": "WEAR",
        "visual5.app5.title": "No Moving Parts",
        "visual5.app5.desc": "Without a rotating joint or motor there is less mechanical wear and fewer parts that can fail in service.",
        "visual5.app6.tag": "COST",
        "visual5.app6.title": "More Electronics, Less Mechanics",
        "visual5.app6.desc": "The trade-off is complexity: an electronically scanned array needs thousands of phase shifters, amplifiers, and control lines.",
        "visual5.caption": "How the two steering methods compare on speed, flexibility, and cost.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "Where Electronic Scanning Shows Up",
        "visual6.intro": "Electronic scanning moved from military radar into weather, mobile networks, cars, and medicine.",
        "visual6.app1.tag": "AIR DEFENCE",
        "visual6.app1.title": "AESA Fire Control",
        "visual6.app1.desc": "Fighter and shipborne AESA radars scan the volume continuously, then hold a track on several threats at once.",
        "visual6.app2.tag": "WEATHER",
        "visual6.app2.title": "Phased-Array Weather Radar",
        "visual6.app2.desc": "PAR weather radars sweep the whole sky in seconds instead of minutes, catching fast-forming storms earlier.",
        "visual6.app3.tag": "5G",
        "visual6.app3.title": "Beam Steering in Mobile Networks",
        "visual6.app3.desc": "5G massive MIMO base stations steer beams electronically at individual users and switch angle as they move.",
        "visual6.app4.tag": "AUTOMOTIVE",
        "visual6.app4.title": "Scanning the Road Ahead",
        "visual6.app4.desc": "77 GHz automotive radar chips scan across lanes fast enough to track several vehicles, updating every few milliseconds.",
        "visual6.app5.tag": "SATELLITE",
        "visual6.app5.title": "Tracking LEO Passes",
        "visual6.app5.desc": "Ground terminals for low-Earth-orbit satellites repoint electronically to follow a fast-moving pass without a motorised mount.",
        "visual6.app6.tag": "MEDICAL",
        "visual6.app6.title": "Ultrasound Sweeping",
        "visual6.app6.desc": "Ultrasound probes steer their beam electronically across a 64- to 192-element array to build an image with no moving parts.",
        "visual6.caption": "Applications that depend on electronic beam steering.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2026",
    },

    zh: {
        "page.title": "文章 29：波束怎么“电子扫描” — 雷达探索者",
        "page.description": "文章 29：相控阵如何通过改变阵元之间的相位差来电子扫描波束。面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "toc.title": "本页目录",
        "toc.s1": "什么是电子扫描",
        "toc.s2": "相位差如何改变波束方向",
        "toc.s3": "波束扫描动画",
        "toc.s4": "计算示例",
        "toc.s5": "机械扫描 vs 电子扫描",
        "toc.s6": "应用",
        "article.title": "波束怎么“电子扫描”",
        "article.author": "编辑部",
        "article.date": "2026年2月18日",
        "article.subtitle": "天线一动不动，变的只是发波的时间。",
        "article.p1": "相控阵不转天线，波束怎么扫过不同方向？",
        "article.p2": "靠改变每个阵元发波的相位差。相位差变化，波束方向就变化。这个过程叫“电子扫描”，速度极快。",
        "article.p3": "机械扫描转一圈要几秒，电子扫描只要毫秒级。电子扫描可以随意跳转，想指哪就指哪。还能同时形成多个波束，分别跟踪不同目标。",
        "article.p4": "像舞台灯光，不用转灯，靠控制就能照到不同位置。电子扫描是相控阵的核心能力。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "电子扫描靠相位控制改变波束方向，快且灵活。",
        "visual1.num": "01",
        "visual1.name": "电子扫描",
        "visual1.title": "不动也能转向",
        "visual1.intro": "机械雷达要真的把天线转过去。相控阵的面板始终不动，只靠控制就让波束移动。",
        "fig1.title": "机械天线与平面阵对比",
        "fig1.left": "机械",
        "fig1.spin": "转动",
        "fig1.leftnote": "整个天线转 · 秒级",
        "fig1.right": "电子",
        "fig1.rightnote": "面板不动 · 波束毫秒级跳转",
        "visual1.caption": "转动的天线，对比静止不动、波束却在扫的平面阵。",
        "visual2.num": "02",
        "visual2.name": "相位差",
        "visual2.title": "倾斜的波前",
        "visual2.intro": "让每个阵元比邻居稍晚一点发波，合成的波前就会倾斜。波束指向波前正对的方向。",
        "fig2.title": "阵元相位差使波前倾斜",
        "fig2.p0": "0°",
        "fig2.p1": "45°",
        "fig2.p2": "90°",
        "fig2.p3": "135°",
        "fig2.p4": "180°",
        "fig2.p5": "225°",
        "fig2.p6": "270°",
        "fig2.p7": "315°",
        "fig2.beam": "波束",
        "fig2.theta": "θ",
        "fig2.top": "频率相同，起振时间错开",
        "visual2.caption": "相邻阵元之间固定的相位差让波前倾斜，从而把波束指出去。",
        "visual3.num": "03",
        "visual3.name": "动画：波束扫描",
        "visual3.title": "看波束不动天线地扫过",
        "visual3.intro": "动画把相位差从零逐渐拉大。面板始终不动，波束却在天空中扫过。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 平直 — 相位相同，波束指向正前方",
        "visual3.cc2": "2. 倾斜 — 小的相位差让波前倾斜",
        "visual3.cc3": "3. 扫描 — 相位差不断增大，波束扫过天空",
        "visual3.cc4": "4. 多波束 — 多组相位可以同时形成多个波束",
        "visual3.caption": "相位差从 0° 逐渐增大：没有任何机械转动，波束自己扫过去。",
        "visual4.num": "04",
        "visual4.name": "计算示例",
        "visual4.title": "90° 相位差让波束偏 30°",
        "visual4.intro": "半波长间距下，波束角满足 sin θ = (λ / 2πd) · Δφ。90° 的相位差对应 30° 的波束偏角。",
        "visual4.row1.label": "频率 f",
        "visual4.row1.value": "10 GHz",
        "visual4.row2.label": "波长 λ",
        "visual4.row2.value": "3 cm",
        "visual4.row3.label": "阵元间距 d",
        "visual4.row3.value": "λ / 2 = 1.5 cm",
        "visual4.row4.label": "相位差 Δφ",
        "visual4.row4.formula": "90°",
        "visual4.row5.label": "波束偏角 θ",
        "visual4.row5.value": "30°",
        "visual4.caption": "计算示例：10 GHz、半波长间距，90° 相位差把波束指向 30°。",
        "visual5.num": "05",
        "visual5.name": "机械 vs 电子",
        "visual5.title": "秒级 vs 毫秒级",
        "visual5.intro": "两种扫描方式的差别远不止速度。",
        "visual5.app1.tag": "速度",
        "visual5.app1.title": "毫秒级，不是秒级",
        "visual5.app1.desc": "机械扫描转一圈要几秒，电子扫描重新指向只要毫秒。",
        "visual5.app2.tag": "随机访问",
        "visual5.app2.title": "想指哪就指哪",
        "visual5.app2.desc": "电子扫描不是按顺序扫过去，波束可以直接跳到视场内的任意角度。",
        "visual5.app3.tag": "多波束",
        "visual5.app3.title": "同时多个波束",
        "visual5.app3.desc": "每个阵元独立驱动，一个阵面可以同时形成多个波束，跟踪多个目标。",
        "visual5.app4.tag": "驻留时间",
        "visual5.app4.title": "看目标的时间更长",
        "visual5.app4.desc": "原来花在转天线上的时间，现在可以用来盯住目标，探测距离因此提升。",
        "visual5.app5.tag": "磨损",
        "visual5.app5.title": "没有活动部件",
        "visual5.app5.desc": "没有转轴和电机，机械磨损更小，使用中会坏的部件也更少。",
        "visual5.app6.tag": "成本",
        "visual5.app6.title": "电子件多，机械件少",
        "visual5.app6.desc": "代价是复杂度：电子扫描阵面需要成千上万个移相器、放大器和控制线路。",
        "visual5.caption": "两种扫描方式在速度、灵活性和成本上的对比。",
        "visual6.num": "06",
        "visual6.name": "应用",
        "visual6.title": "电子扫描用在哪些地方",
        "visual6.intro": "电子扫描从军用雷达走进了气象、通信、汽车和医疗。",
        "visual6.app1.tag": "防空",
        "visual6.app1.title": "AESA 火控雷达",
        "visual6.app1.desc": "战斗机和舰载 AESA 雷达可以不间断扫描空域，并同时锁定多个威胁。",
        "visual6.app2.tag": "气象",
        "visual6.app2.title": "相控阵气象雷达",
        "visual6.app2.desc": "相控阵气象雷达把整个天空的扫描从几分钟缩短到几秒，更快发现快速发展的强对流。",
        "visual6.app3.tag": "5G",
        "visual6.app3.title": "移动网络中的波束赋形",
        "visual6.app3.desc": "5G 大规模 MIMO 基站用电子方式把波束对准每个用户，并随用户移动切换角度。",
        "visual6.app4.tag": "汽车",
        "visual6.app4.title": "扫描前方道路",
        "visual6.app4.desc": "77 GHz 汽车雷达芯片快速扫过车道，足以同时跟踪多辆车，几毫秒就更新一次。",
        "visual6.app5.tag": "卫星",
        "visual6.app5.title": "跟踪低轨卫星",
        "visual6.app5.desc": "低轨卫星的地面终端靠电子方式重新指向，不用机械转台就能跟住快速过境的卫星。",
        "visual6.app6.tag": "医疗",
        "visual6.app6.title": "超声扫查",
        "visual6.app6.desc": "超声探头在 64 到 192 个阵元上电子扫描波束，没有任何活动部件就能成像。",
        "visual6.caption": "依赖电子波束扫描的典型应用。",
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
