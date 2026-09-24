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
        "page.title": "Article 14: Synthetic Aperture Radar — Radar Explorer",
        "page.description": "Article 14: How does synthetic aperture radar (SAR) produce high-resolution images from a moving platform? A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "article.author": "By Editorial",
        "article.date": "Sept 21, 2024",
        "toc.title": "On this page",
        "toc.s1": "Small antenna, big aperture",
        "toc.s2": "How SAR works",
        "toc.s3": "Aperture-synthesis animation",
        "toc.s4": "Worked example",
        "toc.s5": "Interferometric SAR",
        "toc.s6": "Applications",
        "article.title": "Synthetic Aperture Radar",
        "article.subtitle": "How do satellites and aircraft take radar images so sharp? With a small antenna that pretends to be a huge one.",
        "article.p1": "What takes those high-resolution radar images from satellites and aircraft? Synthetic aperture radar.",
        "article.p2": "Synthetic aperture radar (SAR) uses a small antenna to “synthesize” a large one. As the aircraft or satellite moves, echoes from different positions are combined. This acts like a very large antenna, giving high resolution. It sees through clouds and fog, day or night.",
        "article.p3": "It is used for mapping, disaster monitoring, ocean surveillance, and military reconnaissance. Think of using a moving phone to get DSLR-quality photos. Interferometric SAR can also measure terrain changes. It is a key tool in remote sensing.",
        "article.p4": "SAR turns a small, lightweight antenna into the equivalent of one hundreds of meters long. That is why it is the workhorse of modern Earth-observation satellites.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Synthetic aperture radar synthesizes a large aperture from a small antenna for high-resolution imaging.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2026",
        "fig1.title": "Small vs big antenna",
        "fig1.real": "REAL ANTENNA",
        "fig1.realLen": "L = 100 m",
        "fig1.realRes": "ΔR ≈ 1.5 m",
        "fig1.small": "SAR ANTENNA",
        "fig1.smallLen": "L = 2 m",
        "fig1.synthArc": "synthesized aperture ≈ 200 m",
        "fig1.synthRes": "ΔR ≈ 1.5 m",
        "fig1.leftNote": "hard to carry on a satellite",
        "fig1.rightNote": "flies around, pretends to be huge",
        "visual1.num": "01",
        "visual1.name": "SMALL VS BIG APERTURE",
        "visual1.title": "A Small Antenna That Pretends to Be Huge",
        "visual1.intro": "A real antenna hundreds of meters long is hard to launch. SAR uses a tiny antenna and stitches the echoes collected along the way.",
        "visual1.caption": "Real antennas need length to be sharp. SAR fakes that length by moving and combining — the antenna itself stays small.",
        "visual2.left.tag": "1. PULSE",
        "visual2.left.aircraft": "SATELLITE",
        "visual2.left.ground": "GROUND",
        "visual2.right.tag": "2. MOVE & COMBINE",
        "visual2.right.combine": "COMBINE 3 ECHOES",
        "visual2.num": "02",
        "visual2.name": "HOW SAR WORKS",
        "visual2.title": "Track, Pulse, Combine",
        "visual2.intro": "The satellite sends out a short pulse, then moves a little and pulses again. After many pulses, the echoes are combined to form one big “synthesized aperture.”",
        "visual2.caption": "Each position contributes its own echo. Stacking all of them gives the resolution of an antenna as wide as the whole flight path.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: APERTURE SYNTHESIS",
        "visual3.title": "Watch the Aperture Grow as the Radar Moves",
        "visual3.intro": "The animation shows a SAR sensor pulsing as it slides along its track. Each pulse adds another piece of the synthesized aperture.",
        "visual3.fallback": "Your browser does not support embedded video. The animation shows a SAR sensor pulsing as it flies, the synthesized aperture growing longer and longer.",
        "visual3.cc1": "1. PULSE — radar sends a chirp toward the ground",
        "visual3.cc2": "2. ECHO — ground reflects a tiny piece back",
        "visual3.cc3": "3. MOVE — radar shifts a few meters and pulses again",
        "visual3.cc4": "4. COMBINE — echoes from many positions are stacked = one big aperture",
        "visual3.caption": "Many short-pulse echoes, each from a slightly different position, are combined into one long synthetic aperture.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "A 2 m Antenna, a 200 m Aperture",
        "visual4.intro": "Suppose the real antenna is 2 m long and the satellite flies 200 m during the observation. How much sharper is the resulting image?",
        "visual4.row1.label": "Real antenna length L",
        "visual4.row1.value": "2 m",
        "visual4.row2.label": "Synthesized length L_s",
        "visual4.row2.value": "200 m",
        "visual4.row3.label": "Azimuth resolution",
        "visual4.row3.formula": "∝ D / 2",
        "visual4.row4.label": "Resolution gain",
        "visual4.row4.value": "100 × sharper",
        "visual4.caption": "Resolution is inversely proportional to the aperture length. 200 m vs 2 m → 100 × better resolution along the flight direction.",
        "fig5.title": "InSAR two-pass geometry",
        "fig5.pass1": "PASS 1",
        "fig5.pass2": "PASS 2",
        "fig5.ground": "GROUND",
        "fig5.dphi": "Δφ",
        "fig5.hmap": "→ height map",
        "fig5.bottom": "same area, two passes → tiny phase difference → terrain elevation",
        "visual5.num": "05",
        "visual5.name": "INTERFEROMETRIC SAR (INSAR)",
        "visual5.title": "Two Passes, One Height Map",
        "visual5.intro": "If the same area is imaged twice from slightly different positions, the echoes differ by a tiny phase shift. That shift encodes terrain elevation.",
        "visual5.caption": "A few millimeters of phase difference can be turned into a precise digital elevation model.",
        "visual6.app1.tag": "DISASTER MONITORING",
        "visual6.app1.title": "Floods & Earthquakes",
        "visual6.app1.desc": "SAR sees through cloud and darkness, mapping flooded zones within hours of a storm or earthquake damage in days.",
        "visual6.app2.tag": "MAPPING",
        "visual6.app2.title": "Terrain & DEM",
        "visual6.app2.desc": "Global digital elevation models (SRTM, Copernicus DEM) come from SAR and InSAR. They drive GPS, flood models and self-driving maps.",
        "visual6.app3.tag": "OCEAN SURVEILLANCE",
        "visual6.app3.title": "Ships & Oil Spills",
        "visual6.app3.desc": "Ship wakes, sea ice and oil spills all show up in SAR imagery, day or night, through fog.",
        "visual6.app4.tag": "MILITARY / RECON",
        "visual6.app4.title": "All-Day Reconnaissance",
        "visual6.app4.desc": "Because SAR works through clouds and at night, it is a key tool for reconnaissance — the satellite never has to “wait for good weather.”",
        "visual6.app5.tag": "AGRICULTURE",
        "visual6.app5.title": "Crop & Soil",
        "visual6.app5.desc": "SAR backscatter changes with crop type, soil moisture and growth stage. Used for yield forecast and irrigation planning.",
        "visual6.app6.tag": "GLACIOLOGY",
        "visual6.app6.title": "Ice & Glacier Flow",
        "visual6.app6.desc": "InSAR measures glacier and ice-sheet flow to centimeter precision, tracking climate-change effects.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "Where SAR Is Used Today",
        "visual6.intro": "SAR is everywhere once you start looking — it powers satellite maps, climate monitoring and even self-driving car perception.",
        "visual6.caption": "A single SAR sensor can serve mapping, disaster response, agriculture, oceanography, military surveillance and climate science at the same time."
    },

    zh: {
        "page.title": "第14篇：合成孔径雷达（SAR）— 雷达探索者",
        "page.description": "第14篇：合成孔径雷达如何用小天线拍出高分辨率的雷达图。面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "article.author": "作者：小编",
        "article.date": "2024年9月21日",
        "toc.title": "本页目录",
        "toc.s1": "小天线，大孔径",
        "toc.s2": "SAR 如何工作",
        "toc.s3": "合成孔径动画",
        "toc.s4": "详解例题",
        "toc.s5": "干涉 SAR",
        "toc.s6": "应用领域",
        "article.title": "合成孔径雷达",
        "article.subtitle": "卫星和飞机是怎么拍出这么清的雷达图的？靠小天线「装」成大天线。",
        "article.p1": "卫星和飞机上那种能拍高清雷达图的，是什么？合成孔径雷达。",
        "article.p2": "合成孔径雷达（SAR）用小天线「合成」大天线。飞机或卫星移动，把不同位置的回波合成。等效于一个很大的天线，分辨率很高。能穿云透雾，白天黑夜都能成像。",
        "article.p3": "用于测绘、灾害监测、海洋监视、军事侦察。像用移动的手机拍出单反的效果。干涉 SAR（InSAR）还能测地形变化。是遥感领域的重要工具。",
        "article.p4": "SAR 用一个轻小的天线，办成了一个几百米长天线的事。这是为什么它是现代地球观测卫星的主力。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "合成孔径雷达用小天线合成大孔径，实现高分辨率成像。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2026",
        "fig1.title": "小天线与大天线",
        "fig1.real": "真实天线",
        "fig1.realLen": "L = 100 米",
        "fig1.realRes": "ΔR ≈ 1.5 米",
        "fig1.small": "SAR 天线",
        "fig1.smallLen": "L = 2 米",
        "fig1.synthArc": "合成孔径 ≈ 200 米",
        "fig1.synthRes": "ΔR ≈ 1.5 米",
        "fig1.leftNote": "卫星上携带不便",
        "fig1.rightNote": "绕着飞一圈，仿冒成巨型天线",
        "visual1.num": "01",
        "visual1.name": "小天线与大孔径",
        "visual1.title": "小天线仿冒成大孔径",
        "visual1.intro": "真实天线要几百米长才能拍得清，卫星根本带不动。SAR 用一个小天线，沿轨道飞行把回波一点一点拼起来。",
        "visual1.caption": "真实天线要长才能准；SAR 通过移动和合成，「装」出大孔径——天线本身依旧小巧。",
        "visual2.left.tag": "1. 发射",
        "visual2.left.aircraft": "卫星",
        "visual2.left.ground": "地面",
        "visual2.right.tag": "2. 移动并合成",
        "visual2.right.combine": "合成 3 段回波",
        "visual2.num": "02",
        "visual2.name": "SAR 如何工作",
        "visual2.title": "发射，移动，合成",
        "visual2.intro": "卫星发出一段脉冲，然后挨一点再发一次。多次脉冲的回波合在一起，形成一个巨大的「合成孔径」。",
        "visual2.caption": "每个位置都贡献一份回波，全部叠加，就等于一架横跨整个飞行路径的巨型天线。",
        "visual3.num": "03",
        "visual3.name": "动画：合成孔径",
        "visual3.title": "看合成孔径越长越长",
        "visual3.intro": "动画展示 SAR 传感器沿轨道一边飞一边发射脉冲。每发一次，合成孔径就多一段。",
        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示一个 SAR 传感器一边飞行一边发射，合成孔径越来越长。",
        "visual3.cc1": "1. 发射 — 雷达向地面发出 chirp 脉冲",
        "visual3.cc2": "2. 回波 — 地面反射一小段能量回来",
        "visual3.cc3": "3. 移动 — 雷达向前挨几米，再次发射",
        "visual3.cc4": "4. 合成 — 多个位置的回波叠加 = 一个大孔径",
        "visual3.caption": "不同位置发射的多次脉冲回波，叠加成一个超长合成孔径。",
        "visual4.num": "04",
        "visual4.name": "详解例题",
        "visual4.title": "2 米的天线，200 米的孔径",
        "visual4.intro": "假设真实天线长 2 米，卫星在观测期间飞了 200 米。最终图像清晰多少倍？",
        "visual4.row1.label": "真实天线长度 L",
        "visual4.row1.value": "2 米",
        "visual4.row2.label": "合成孔径长度 L_s",
        "visual4.row2.value": "200 米",
        "visual4.row3.label": "方位分辨率",
        "visual4.row3.formula": "∝ D / 2",
        "visual4.row4.label": "分辨率提升",
        "visual4.row4.value": "100 × 更清晰",
        "visual4.caption": "分辨率与孔径长度成反比。200 米 vs 2 米 → 沿飞行方向提升 100 × 分辨率。",
        "fig5.title": "InSAR 双轨几何",
        "fig5.pass1": "第 1 次过境",
        "fig5.pass2": "第 2 次过境",
        "fig5.ground": "地面",
        "fig5.dphi": "Δφ",
        "fig5.hmap": "→ 高程图",
        "fig5.bottom": "同一地区两次过境 → 微弱相位差 → 地形高程",
        "visual5.num": "05",
        "visual5.name": "干涉 SAR（InSAR）",
        "visual5.title": "两次过境，一张高程图",
        "visual5.intro": "如果同一地区被两次从略有差异的轨道过境拍下来，回波会出现一个微小的相位差。这个相位差编码了地形高程。",
        "visual5.caption": "毫米级的相位差，就能反推出精确的数字高程模型。",
        "visual6.app1.tag": "灾害监测",
        "visual6.app1.title": "洪水与地震",
        "visual6.app1.desc": "SAR 能穿云透雾，在暴风雨几个小时内画出洪涝区，几天内评估地震损失。",
        "visual6.app2.tag": "测绘",
        "visual6.app2.title": "地形与数字高程",
        "visual6.app2.desc": "全球数字高程模型（SRTM、Copernicus DEM）来自 SAR 和 InSAR。它们支撑 GPS、洪水模型和自动驾驶地图。",
        "visual6.app3.tag": "海洋监视",
        "visual6.app3.title": "船舶与溢油",
        "visual6.app3.desc": "船舶尾迹、海冰、漏油——在 SAR 图像里全都看得见，无论白天黑夜、穿云透雾。",
        "visual6.app4.tag": "军事 / 侦察",
        "visual6.app4.title": "全天候侦察",
        "visual6.app4.desc": "SAR 穿云穿雾，所以卫星永远不用「等晴天」——这是它成为侦察利器的关键。",
        "visual6.app5.tag": "农业",
        "visual6.app5.title": "作物与土壤",
        "visual6.app5.desc": "SAR 后向散射随作物种类、土壤湿度、生育期变化，可用于产量预测与灌溉规划。",
        "visual6.app6.tag": "冰川学",
        "visual6.app6.title": "冰盖与冰川流动",
        "visual6.app6.desc": "InSAR 以厘米级精度测量冰川和冰盖的流动，用于追踪气候变化。",
        "visual6.num": "06",
        "visual6.name": "应用领域",
        "visual6.title": "SAR 今天在哪里使用",
        "visual6.intro": "一旦开始留意，你会发现 SAR 无处不在——从卫星地图到气候监测，再到自动驾驶感知。",
        "visual6.caption": "一个 SAR 传感器可以同时服务于测绘、灾害响应、农业、海洋学、军事侦察和气候科学。"
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
