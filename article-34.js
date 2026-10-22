/* =========================

   ARTICLE 34 — How to Spot Heavy Rain, Hail, and Tornadoes

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
        "page.title": "Article 34: How to Spot Heavy Rain, Hail, and Tornadoes — Radar Explorer",
        "page.description": "Article 34: How does a forecaster read a radar screen to spot heavy rain, hail, and tornadoes? Hook echoes, velocity couplets, three-body scatter. A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "toc.title": "On this page",
        "toc.s1": "Heavy rain",
        "toc.s2": "Hail signatures",
        "toc.s3": "Hook echo animation",
        "toc.s4": "Worked example",
        "toc.s5": "Velocity couplet and shear",
        "toc.s6": "From screen to warning",
        "article.title": "How to Spot Heavy Rain, Hail, and Tornadoes",
        "article.author": "By Editorial",
        "article.date": "Jul 23, 2026",
        "article.subtitle": "The colors look the same. The shapes don't.",
        "article.p1": "Weather radar screens are full of colors. How do you spot dangerous weather?",
        "article.p2": "Heavy rain: strong echo, large area, lasting a long time. Hail: very strong echo, often with features like \"three-body scattering.\" Tornado: often with a hook echo and a velocity couplet. Velocity couplet: neighboring areas with opposite wind directions, meaning rotation.",
        "article.p3": "Think of reading a map — different colors mean different dangers. Dual polarization helps confirm the boundary between hail and rain. Phased-array fast scanning catches these features earlier.",
        "article.p4": "Recognizing these features is a basic skill for forecasters.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Heavy rain: strength. Hail: strong echo. Tornado: hook and velocity couplet.",
        "visual1.num": "01",
        "visual1.name": "HEAVY RAIN",
        "visual1.title": "Strong Echo, Wide Area, Long Time",
        "visual1.intro": "Heavy rain shows a broad, soft-edged blob of high dBZ — not a sharp point.",
        "fig1.title": "Reflectivity field for heavy rain",
        "fig1.legend": "dBZ",
        "fig1.core": "core",
        "fig1.heavy": "heavy band",
        "fig1.wide": "wide, soft edges",
        "fig1.note": "big yellow + red core, not pointy",
        "visual1.caption": "A heavy rain cell has the same warm colours as hail, but the edges fade out gradually over tens of kilometres.",
        "visual2.num": "02",
        "visual2.name": "HAIL",
        "visual2.title": "Three-Body Scatter and the Hail Spike",
        "visual2.intro": "The clearest hail signature is the spike sticking out behind a strong core — the radar beam bounces off the hail, off the ground, and back.",
        "fig2.title": "Three-body scatter signature",
        "fig2.radar": "radar",
        "fig2.hail": "hail core",
        "fig2.spike": "spike",
        "fig2.ground": "ground",
        "fig2.b1": "beam",
        "fig2.b2": "bounce",
        "fig2.b3": "return",
        "visual2.caption": "Three-body scatter: beam goes from radar to hail to ground to radar again. It draws a tail behind the storm — the spike.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: HOOK ECHO",
        "visual3.title": "Watching a Hook Echo Form",
        "visual3.intro": "The animation paints a healthy rain cell, then watches a red finger curl out of the south side — a hook echo.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. RAIN -- large yellow / red cell, no rotation",
        "visual3.cc2": "2. HOOK -- a finger of red juts out of the cell",
        "visual3.cc3": "3. COUPLET -- opposite winds on either side of the hook",
        "visual3.cc4": "4. WARN -- the radar lights up a tornado warning",
        "visual3.caption": "A hook echo on the reflectivity map plus opposite winds on the velocity map means rotation — usually a tornado.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Reading One Storm Step by Step",
        "visual4.intro": "A forecaster walks through three screens in order: reflectivity shape, then polarimetric hints, then velocity.",
        "visual4.row1.label": "Step 1 — echo shape",
        "visual4.row1.value": "rounded cell, 50+ dBZ",
        "visual4.row2.label": "Step 2 — spike",
        "visual4.row2.value": "3-body scatter present",
        "visual4.row3.label": "Step 3 — rotation",
        "visual4.row3.value": "velocity couplet at edge",
        "visual4.row4.label": "Forecast call",
        "visual4.row4.value": "possible tornado",
        "visual4.caption": "Worked example: shape + spike + couplet in three steps.",
        "visual5.num": "05",
        "visual5.name": "VELOCITY COUPLET",
        "visual5.title": "Velocity Couplet and Shear",
        "visual5.intro": "Velocity couplet, hook echo, TVS, shear, divergence, mesocyclone — six words a forecaster knows by heart.",
        "visual5.app1.tag": "COUPLET",
        "visual5.app1.title": "In vs Out",
        "visual5.app1.desc": "On the velocity map, the storm shows a bright green belt (winds toward the radar) right next to a bright red belt (winds away). That is rotation.",
        "visual5.app2.tag": "HOOK",
        "visual5.app2.title": "Hook on the Echo",
        "visual5.app2.desc": "The reflectivity shows a curl or hook on the south or southwest flank of a strong cell — the rotating updraft wrapping rain around itself.",
        "visual5.app3.tag": "TVS",
        "visual5.app3.title": "Tornado Vortex Signature",
        "visual5.app3.desc": "A TVS is a tight, deep layer of very high shear that matches the size of a tornado. It usually lights up below the hook.",
        "visual5.app4.tag": "SHEAR",
        "visual5.app4.title": "Wind Shear",
        "visual5.app4.desc": "Velocity difference between nearby pixels or successive altitude tilts. Strong shear without rotation still warns of damaging straight-line winds.",
        "visual5.app5.tag": "DIVERGENCE",
        "visual5.app5.title": "Outflow Aloft",
        "visual5.app5.desc": "Bright red away from the radar at upper altitudes marks the storm's exhaust. Divergence aloft plus convergence below is the engine of a supercell.",
        "visual5.app6.tag": "MESO",
        "visual5.app6.title": "Mesocyclone",
        "visual5.app6.desc": "A mesocyclone is the parent rotation, 2-10 km wide and several km up. Almost every long-lived supercell has one; only some of them produce tornadoes.",
        "visual5.caption": "Hook + couplet + mesocyclone is the textbook. Dual-pol sharpens the hail / rain boundary.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "From Screen to Warning",
        "visual6.intro": "What the forecaster does once they spot one or more signatures.",
        "visual6.app1.tag": "NWS",
        "visual6.app1.title": "Tornado Warning Flow",
        "visual6.app1.desc": "When a forecaster sees a TVS plus a hook and a strong couplet, they issue a tornado warning within 2-3 minutes. The polygon is drawn around the storm path, not the current cell.",
        "visual6.app2.tag": "RADAR ANALYST",
        "visual6.app2.title": "Shift Briefing",
        "visual6.app2.desc": "At the start of every shift, the radar analyst walks the new team through the day's ongoing storms — hook positions, meso trends, hail cores.",
        "visual6.app3.tag": "STORM SPOTTER",
        "visual6.app3.title": "Visual Confirmation",
        "visual6.app3.desc": "A hook + couplet triggers storm spotters on the ground. Radar alone is rarely used for the warning decision; spotter confirmation is often added.",
        "visual6.app4.tag": "FLASH FLOOD",
        "visual6.app4.title": "QPE for Floods",
        "visual6.app4.desc": "Dual-pol QPE estimates rainfall. When the rain keeps falling for several hours, the forecaster issues a flash flood warning and points at the high QPE areas.",
        "visual6.app5.tag": "AVIATION",
        "visual6.app5.title": "Microburst on Approach",
        "visual6.app5.desc": "A diverging velocity pattern in the lowest 1 km is the microburst signature. Airports issue a low-level wind shear alert and hold arrivals.",
        "visual6.app6.tag": "RESEARCH",
        "visual6.app6.title": "AI-Assisted Nowcasting",
        "visual6.app6.desc": "AI-assisted nowcasting models now scan reflectivity and velocity together. They spot small hooks earlier than a human and free the human to focus on the polygon.",
        "visual6.caption": "Signature + warning + polygon + spotter. Radar is one step; humans close the loop.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2026",
    },

    zh: {
        "page.title": "文章 34：怎么看出曨雨、冰雹、龙卷 — 雷达探索者",
        "page.description": "文章 34：预报员如何读雷达屏幕，识别曨雨、冰雹、龙卷？钩状回波、速度对、三体散射。面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "toc.title": "本页目录",
        "toc.s1": "暴雨",
        "toc.s2": "冰雹特征",
        "toc.s3": "钩状回波动画",
        "toc.s4": "计算示例",
        "toc.s5": "速度对和风切变",
        "toc.s6": "从屏幕到预警",
        "article.title": "怎么看出曨雨、冰雹、龙卷",
        "article.author": "编辑部",
        "article.date": "2026年7月23日",
        "article.subtitle": "颜色看起来都一样，形状不一样。",
        "article.p1": "天气雷达屏幕上花花绿绿，怎么看出危险天气？",
        "article.p2": "暴雨：回波强、范围大、持续时间长。冰雹：回波特别强，常出现“三体散射”等特征。龙卷：常伴随钩状回波、速度对。速度对：相邻区域风向相反，说明有旋转。",
        "article.p3": "像看地图找路，不同颜色代表不同危险。双偏振还能帮助确认冰雹和雨的分界。相控阵快速扫描，能更早捕捉这些特征。",
        "article.p4": "识别这些特征，是预报员的基本功。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "暴雨看强度，冰雹看强回波，龙卷看钩状和速度对。",
        "visual1.num": "01",
        "visual1.name": "暴雨",
        "visual1.title": "回波强、范围大、时间长",
        "visual1.intro": "暴雨在屏幕上是一块高 dBZ 的点面块、边缘逐渐深入轻雨，不是一个子一样的锁点。",
        "fig1.title": "暴雨反射率场",
        "fig1.legend": "反射率",
        "fig1.core": "中心",
        "fig1.heavy": "重雨带",
        "fig1.wide": "范围大，边缘逐渐淺入轻雨",
        "fig1.note": "大面积黄加红 + 边缘逐渐淺入",
        "visual1.caption": "暴雨单体的颜色跟冰雹相似，但边缘是几十公里内逐渐软出来的。",
        "visual2.num": "02",
        "visual2.name": "冰雹",
        "visual2.title": "三体散射与冰雹尖峰",
        "visual2.intro": "冰雹最明显的特征是在强回波核心后面延伸出一根“尖峰”—雷达波中走、拍到冰雹、再拍到地面、反射回雷达。",
        "fig2.title": "三体散射特征",
        "fig2.radar": "雷达",
        "fig2.hail": "冰雹核心",
        "fig2.spike": "尖峰",
        "fig2.ground": "地面",
        "fig2.b1": "脉冲",
        "fig2.b2": "1 拍",
        "fig2.b3": "2 拍",
        "visual2.caption": "三体散射：脉冲从雷达去到冰雹再拍地面反回雷达。在风暴后面画出一条“尖峰”。",
        "visual3.num": "03",
        "visual3.name": "动画：钩状回波",
        "visual3.title": "看钩状雏环形成",
        "visual3.intro": "动画先画一块健康的雨单体，再看南侧出现一根红色的钩子。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 雨 — 大面积黄红单体，无旋转",
        "visual3.cc2": "2. 钩 — 南侧出现一根红色的钩子",
        "visual3.cc3": "3. 对 — 钩子两侧风向相反",
        "visual3.cc4": "4. 预警 — 雷达点亮龙卷预警",
        "visual3.caption": "反射率上看到钩状、速度上看到旋转，两者合起来就是龙卷。",
        "visual4.num": "04",
        "visual4.name": "计算示例",
        "visual4.title": "一步一步读一块",
        "visual4.intro": "预报员连看三个屏幕：反射率形状，再双偏振提示，再看速度。",
        "visual4.row1.label": "步骤 1 — 回波形状",
        "visual4.row1.value": "圆润单体，50+ dBZ",
        "visual4.row2.label": "步骤 2 — 尖峰",
        "visual4.row2.value": "出现三体散射",
        "visual4.row3.label": "步骤 3 — 旋转",
        "visual4.row3.value": "边缘出现速度对",
        "visual4.row4.label": "诊断结果",
        "visual4.row4.value": "可能出现龙卷",
        "visual4.caption": "计算示例：形状 + 尖峰 + 对 三步走完。",
        "visual5.num": "05",
        "visual5.name": "速度对与风切变",
        "visual5.title": "速度对、风切变与中震旋",
        "visual5.intro": "对、钩、TVS、切变、发散、中震旋 — 预报员背得熟的六个词。",
        "visual5.app1.tag": "对",
        "visual5.app1.title": "进 vs 出",
        "visual5.app1.desc": "速度图上出现一条亮绿带（风向雷达）紧邻一条亮红带（风向远离雷达），这就是旋转。",
        "visual5.app2.tag": "钩",
        "visual5.app2.title": "反射率上的钩",
        "visual5.app2.desc": "反射率图上看到强单体南侧或西南侧出现“钩子”一样的小型巴。那是旋转上升气流抱着雨水裹了一圈。",
        "visual5.app3.tag": "TVS",
        "visual5.app3.title": "龙卷涡旋特征",
        "visual5.app3.desc": "TVS 是一个比龙卷还紧的、覆盖高度几公里的强风切变区。一般在钩下方点亮。",
        "visual5.app4.tag": "切变",
        "visual5.app4.title": "风切变",
        "visual5.app4.desc": "相邻像素或不同尚°层间的速度差。没有旋转但强切变也预警一下子线性大风。",
        "visual5.app5.tag": "发散",
        "visual5.app5.title": "高层发散",
        "visual5.app5.desc": "高层面出现亮红意表示风远离雷达。上发散加下准集，这是超细胞的引擎。",
        "visual5.app6.tag": "中震",
        "visual5.app6.title": "中震旋",
        "visual5.app6.desc": "中震旋是龙卷的“孩子”，直径 2-10 公里、位于几公里高。几乎每个长寿超细胞都有中震旋，但只有部分才会下亩龙卷。",
        "visual5.caption": "钩 + 对 + 中震旋是课本。双偏振让冰雩/雨的分界更决。",
        "visual6.num": "06",
        "visual6.name": "应用",
        "visual6.title": "从屏幕到预警",
        "visual6.intro": "预报员看到特征后起码到发出预警到何时谁。",
        "visual6.app1.tag": "美国 NWS",
        "visual6.app1.title": "龙卷预警流程",
        "visual6.app1.desc": "一旦预报员看到 TVS + 钩状 + 强对，他们会在 2-3 分钟内发出龙卷预警。多边形区域是按风暴未来路径画的，不是当前单体。",
        "visual6.app2.tag": "雷达分析员",
        "visual6.app2.title": "班次带引绅",
        "visual6.app2.desc": "每次交班开始，雷达分析员会在新班组面前过一遍今天所有运行的风暴—钩位置、中震旋趋势、冰雹核。",
        "visual6.app3.tag": "风暴接报员",
        "visual6.app3.title": "现场确认",
        "visual6.app3.desc": "一旦雷达看到钩 + 对，会发动接报员上线。单独雷达放出预警极少，接报员现场确认后才发出。",
        "visual6.app4.tag": "闪水",
        "visual6.app4.title": "QPE 与洪水",
        "visual6.app4.desc": "双偏振 QPE 估计降雨量。当雨连着下几小时，预报员发出洪水警报，引用高子指出洪水风险区。",
        "visual6.app5.tag": "航空",
        "visual6.app5.title": "近跑道微下击",
        "visual6.app5.desc": "低层 1 公里出现一个辐散型强风趋是微下击特征。机场必须立即发出风切变警告且暂停机。",
        "visual6.app6.tag": "科研",
        "visual6.app6.title": "AI 辅助现预报",
        "visual6.app6.desc": "AI 现预报模型现在会对反射率与速度联合识别。能贵于提前几分钟看到小钩状，让预报员空出手去处理预警多边形。",
        "visual6.caption": "特征 + 预警 + 多边形 + 接报员。雷达只是其中一步，人才是关键。",
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
