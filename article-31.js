/* =========================

   ARTICLE 31 — What Does Weather Radar Measure?

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
        "page.title": "Article 31: What Does Weather Radar Measure? — Radar Explorer",
        "page.description": "Article 31: What is a weather radar actually measuring when it stares at the sky? Echo strength, radial velocity, spectrum width. A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "toc.title": "On this page",
        "toc.s1": "Three things it measures",
        "toc.s2": "Echo strength",
        "toc.s3": "Reflectivity animation",
        "toc.s4": "Worked example",
        "toc.s5": "Velocity, spectrum, products",
        "toc.s6": "Applications",
        "article.title": "What Does Weather Radar Measure?",
        "article.author": "By Editorial",
        "article.date": "Feb 13, 2026",
        "article.subtitle": "Staring at the sky every day. Echo, not a thumb on the glass.",
        "article.p1": "Weather radar keeps watching the sky every day. What is it actually measuring?",
        "article.p2": "Weather radar mainly measures three things: echo strength, radial velocity, and spectrum width. Echo strength: more or bigger precipitation particles mean a stronger echo. Radial velocity: whether raindrops move toward or away from the radar, which shows wind. Spectrum width: how turbulent or spread out the speeds are.",
        "article.p3": "Think of shining a flashlight into fog — thicker fog reflects more. Weather radar doesn't look at clouds; it looks at precipitation particles inside clouds. From this data, we can tell rain, snow, hail, and strong wind.",
        "article.p4": "Weather radar is a key tool for weather forecasting.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Weather radar measures echo strength, velocity, and spectrum width to describe precipitation.",
        "visual1.num": "01",
        "visual1.name": "THREE THINGS",
        "visual1.title": "Three Numbers per Pulse Volume",
        "visual1.intro": "Every pulse volume — a few hundred metres on a side — gives the radar three measurements at once.",
        "fig1.title": "Three quantities",
        "fig1.zname": "ECHO STRENGTH",
        "fig1.zval": "Z",
        "fig1.zunit": "dBZ",
        "fig1.zhint": "how dense is the rain",
        "fig1.vname": "RADIAL VELOCITY",
        "fig1.vval": "V",
        "fig1.vunit": "m/s",
        "fig1.vhint": "wind toward / away",
        "fig1.wname": "SPECTRUM WIDTH",
        "fig1.wval": "W",
        "fig1.wunit": "m/s",
        "fig1.whint": "turbulence, spread",
        "fig1.foot": "one ✕ three numbers per pulse volume",
        "visual1.caption": "Z, V, W — three numbers the radar records at every location in 3D space.",
        "visual2.num": "02",
        "visual2.name": "ECHO STRENGTH",
        "visual2.title": "Light vs Fog: The Reflectivity Analogy",
        "visual2.intro": "More droplets or larger droplets inside the beam mean a brighter return. The dBZ scale is logarithmic, so each 10 dBZ step is roughly a tenfold increase in echo power.",
        "fig2.title": "Flashlight into fog analogy",
        "fig2.weak": "WEAK RAIN",
        "fig2.weakval": "10 dBZ",
        "fig2.weakhint": "light rain, sparse drops",
        "fig2.heavy": "HEAVY RAIN",
        "fig2.heavyval": "50 dBZ",
        "fig2.heavyhint": "thunderstorm, large drops",
        "fig2.bottom": "flashlight & fog → more drops = stronger echo",
        "visual2.caption": "Reflectivity Z grows with droplet size and concentration. 10 dBZ is drizzle, 50 dBZ is a thunderstorm.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: REFLECTIVITY",
        "visual3.title": "Watching Reflectivity Build Up",
        "visual3.intro": "The animation shows a pulse volume filling up with droplets and the return brightening on the screen.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. EMPTY -- no drops, no return, low dBZ",
        "visual3.cc2": "2. LIGHT -- a few drops appear, echo brightens",
        "visual3.cc3": "3. HEAVY -- dense drops, the cell glows red",
        "visual3.cc4": "4. STORM -- hailstones, the brightest core of all",
        "visual3.caption": "Reflectivity sweep: empty, light, heavy, storm. Each step pushes dBZ higher.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "From dBZ to Rain Rate",
        "visual4.intro": "The classic Marshall-Palmer relation turns reflectivity into a rainfall rate. Real radars use a more refined version, but the math idea is the same.",
        "visual4.row1.label": "Reflectivity Z",
        "visual4.row1.value": "40 dBZ",
        "visual4.row2.label": "Marshall-Palmer",
        "visual4.row2.formula": "R = (Z / 200)^(1/1.6)",
        "visual4.row3.label": "Substituting",
        "visual4.row3.value": "(200 / 200)^(0.625)",
        "visual4.row4.label": "Rain rate R",
        "visual4.row4.value": "~ 5 mm/h",
        "visual4.caption": "Worked example: 40 dBZ maps to about 5 mm/h of rain under the Marshall-Palmer formula.",
        "visual5.num": "05",
        "visual5.name": "VELOCITY, SPECTRUM",
        "visual5.title": "The Other Two: Velocity and Spectrum",
        "visual5.intro": "Z tells you what's there; V and W tell you how it moves.",
        "visual5.app1.tag": "VELOCITY",
        "visual5.app1.title": "Doppler Wind",
        "visual5.app1.desc": "The radar measures the small phase shift between two round trips. That shift is the Doppler velocity along the beam.",
        "visual5.app2.tag": "SPECTRUM",
        "visual5.app2.title": "Turbulence Map",
        "visual5.app2.desc": "Spectrum width W is the spread of velocities inside the same pulse volume. High W often means turbulence or strong wind shear.",
        "visual5.app3.tag": "DUAL-POL",
        "visual5.app3.title": "Rain, Snow, or Hail",
        "visual5.app3.desc": "Modern dual-polarisation radars send horizontal AND vertical pulses, which tell apart rain, snow, and hail by shape.",
        "visual5.app4.tag": "DOPPLER",
        "visual5.app4.title": "Phase Shift",
        "visual5.app4.desc": "Doppler relies on tiny phase shifts in successive pulses — the same trick as police speed radar, applied to drops and hail.",
        "visual5.app5.tag": "SCAN",
        "visual5.app5.title": "3D Volume",
        "visual5.app5.desc": "The radar steps through several elevation angles every few minutes to build a full 3D snapshot of the sky.",
        "visual5.app6.tag": "SCAN HEIGHT",
        "visual5.app6.title": "Stacked Tilts",
        "visual5.app6.desc": "Each tilt scans a different height. Stacking the slices reveals the vertical structure of storms, not just the surface.",
        "visual5.caption": "V and W complete the picture: V is the wind, W is how messy the wind is.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "What a Forecast Desk Reads Every Morning",
        "visual6.intro": "All three quantities feed straight into the products a forecaster sees on screen.",
        "visual6.app1.tag": "RAIN",
        "visual6.app1.title": "Live Rain Map",
        "visual6.app1.desc": "The classic colour radar map is just a Z image painted over your region — green light rain, yellow moderate, red heavy.",
        "visual6.app2.tag": "WARNING",
        "visual6.app2.title": "Severe Storm Watch",
        "visual6.app2.desc": "When a cell's Z climbs past 50 dBZ and V shows rotation, a tornado watch can be issued within minutes.",
        "visual6.app3.tag": "SNOW",
        "visual6.app3.title": "Snowfall Rate",
        "visual6.app3.desc": "Snow has a different Z-to-rate relationship than rain. Dual-pol flags it and the rate map switches to a snow scale.",
        "visual6.app4.tag": "HAIL",
        "visual6.app4.title": "Hail Detection",
        "visual6.app4.desc": "Very high Z combined with low correlation from dual-pol almost always means hail. Severe-weather warnings follow.",
        "visual6.app5.tag": "WIND",
        "visual6.app5.title": "Wind Shear",
        "visual6.app5.desc": "Vertical stacks of V reveal shear — sudden changes in wind speed or direction with height that threaten aviation.",
        "visual6.app6.tag": "AVIATION",
        "visual6.app6.title": "Microburst Alert",
        "visual6.app6.desc": "A diverging V pattern near the ground is the signature of a microburst — the radar triggers an immediate airport warning.",
        "visual6.caption": "Three numbers in, six forecasts out. Z, V, and W are the building blocks of every product.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2026",
    },

    zh: {
        "page.title": "文章 31：天气雷达在测什么 — 雷达探索者",
        "page.description": "文章 31：天气雷达每天盯着天空，到底在测什么？回波强度、径向速度、谱宽。面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "toc.title": "本页目录",
        "toc.s1": "测的三样东西",
        "toc.s2": "回波强度",
        "toc.s3": "反射率动画",
        "toc.s4": "计算示例",
        "toc.s5": "速度和谱宽",
        "toc.s6": "应用",
        "article.title": "天气雷达在测什么",
        "article.author": "编辑部",
        "article.date": "2026年2月13日",
        "article.subtitle": "每天盯着天空，测的是回波，不是云。",
        "article.p1": "天气雷达每天盯着天空，它到底在测什么？",
        "article.p2": "天气雷达主要测三类东西：回波强度、径向速度、谱宽。回波强度：降水粒子越多越大，回波越强。径向速度：雨滴朝雷达来还是远离，能看出风。谱宽：反映湍流和速度分散程度。",
        "article.p3": "像用手电筒照雾，雾越浓，反射越强。天气雷达不是看云，而是看云里的降水粒子。通过这些数据，可以判断雨、雪、冰雹、大风。",
        "article.p4": "天气雷达是天气预报的重要工具。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "天气雷达测回波强度、速度和谱宽，用来描述降水。",
        "visual1.num": "01",
        "visual1.name": "三种测量",
        "visual1.title": "每个脉冲体三个数字",
        "visual1.intro": "每一个脉冲体（一个几百米见方的小盒子）会同时给出三个测量值。",
        "fig1.title": "三个物理量",
        "fig1.zname": "回波强度",
        "fig1.zval": "Z",
        "fig1.zunit": "dBZ",
        "fig1.zhint": "雨有多大",
        "fig1.vname": "径向速度",
        "fig1.vval": "V",
        "fig1.vunit": "米/秒",
        "fig1.vhint": "风朝雷达来 / 远离",
        "fig1.wname": "谱宽",
        "fig1.wval": "W",
        "fig1.wunit": "米/秒",
        "fig1.whint": "湍流、速度分散",
        "fig1.foot": "一个 ✕ 三个数 / 每个体素",
        "visual1.caption": "Z、V、W —— 雷达在三维空间的每个位置都会记下三个数字。",
        "visual2.num": "02",
        "visual2.name": "回波强度",
        "visual2.title": "手电筒照雾：反射率类比",
        "visual2.intro": "波束里的水滴越多或越大，返回信号就越强。dBZ 是对数刻度，每加 10 dBZ，回波功率增加约十倍。",
        "fig2.title": "手电筒照雾的类比",
        "fig2.weak": "弱雨",
        "fig2.weakval": "10 dBZ",
        "fig2.weakhint": "小雨，雨滴稀疏",
        "fig2.heavy": "强雨",
        "fig2.heavyval": "50 dBZ",
        "fig2.heavyhint": "雷暴，大雨滴",
        "fig2.bottom": "手电筒照雾 — 水滴越多，反射越强",
        "visual2.caption": "反射率 Z 随水滴大小和浓度增大。10 dBZ 是毛毛雨，50 dBZ 是雷暴。",
        "visual3.num": "03",
        "visual3.name": "动画：反射率",
        "visual3.title": "看着反射率涨上来",
        "visual3.intro": "动画展示一个脉冲体逐渐被水滴填满，回波越来越亮的过程。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 空 — 没有水滴，没有回波，dBZ 低",
        "visual3.cc2": "2. 轻 — 几滴出现，回波变亮",
        "visual3.cc3": "3. 强 — 水滴密集，回波变成红色",
        "visual3.cc4": "4. 暴 — 冰雹，最亮的核",
        "visual3.caption": "反射率变化：空 → 轻 → 强 → 暴，每一步 dBZ 都更高。",
        "visual4.num": "04",
        "visual4.name": "计算示例",
        "visual4.title": "从 dBZ 推出降雨率",
        "visual4.intro": "经典 Marshall-Palmer 公式把反射率转成降雨率。真实雷达用的更精细，但数学思路相同。",
        "visual4.row1.label": "反射率 Z",
        "visual4.row1.value": "40 dBZ",
        "visual4.row2.label": "Marshall-Palmer",
        "visual4.row2.formula": "R = (Z / 200)^(1/1.6)",
        "visual4.row3.label": "代入",
        "visual4.row3.value": "(200 / 200)^(0.625)",
        "visual4.row4.label": "降雨率 R",
        "visual4.row4.value": "~ 5 毫米/小时",
        "visual4.caption": "40 dBZ 在 Marshall-Palmer 公式下对应约 5 毫米/小时的降雨率。",
        "visual5.num": "05",
        "visual5.name": "速度和谱宽",
        "visual5.title": "另外两个：速度与谱宽",
        "visual5.intro": "Z 告诉你这里有什么，V 和 W 告诉你它们怎么运动。",
        "visual5.app1.tag": "速度",
        "visual5.app1.title": "多普勒风",
        "visual5.app1.desc": "雷达测量相邻往返路径之间的相位差，这个差就是波束方向的多普勒速度。",
        "visual5.app2.tag": "谱宽",
        "visual5.app2.title": "湍流图",
        "visual5.app2.desc": "谱宽 W 是同一脉冲体内速度的散布程度。W 大通常表示有湍流或强烈的风切变。",
        "visual5.app3.tag": "双偏振",
        "visual5.app3.title": "雨、雪还是冰雹",
        "visual5.app3.desc": "现代双偏振雷达同时发射水平和垂直脉冲，可以根据形状区分雨、雪、冰雹。",
        "visual5.app4.tag": "多普勒",
        "visual5.app4.title": "相位差",
        "visual5.app4.desc": "多普勒靠的是连续脉冲之间微小的相位偏移——和警察测速雷达原理相同，应用对象是雨滴和冰雹。",
        "visual5.app5.tag": "扫描",
        "visual5.app5.title": "三维体",
        "visual5.app5.desc": "雷达每隔几分钟切换几个仰角，逐步建出整片天空的三维快照。",
        "visual5.app6.tag": "扫描高度",
        "visual5.app6.title": "堆叠仰角",
        "visual5.app6.desc": "每个仰角扫描不同高度。叠加这些切片能看到风暴的垂直结构，不只是地面附近的情况。",
        "visual5.caption": "V 和 W 补完画面：V 是风，W 是风有多乱。",
        "visual6.num": "06",
        "visual6.name": "应用",
        "visual6.title": "气象台每天早上看的是什么",
        "visual6.intro": "三个物理量直接喂给预报员屏幕上看到的所有产品。",
        "visual6.app1.tag": "降雨",
        "visual6.app1.title": "实时降雨图",
        "visual6.app1.desc": "经典的彩色雷达图只是覆盖你所在区域的 Z 图 —— 绿色小雨、黄色中雨、红色大雨。",
        "visual6.app2.tag": "预警",
        "visual6.app2.title": "强对流监控",
        "visual6.app2.desc": "当一个单体的 Z 突破 50 dBZ 且 V 显示旋转，几分钟内就能发出龙卷风警报。",
        "visual6.app3.tag": "雪",
        "visual6.app3.title": "降雪率",
        "visual6.app3.desc": "雪有不同于雨的 Z-降雨率关系。双偏振标出来之后，降雨率图自动切换到降雪刻度。",
        "visual6.app4.tag": "冰雹",
        "visual6.app4.title": "冰雹识别",
        "visual6.app4.desc": "Z 极高 + 双偏振相关性低，几乎可以肯定是冰雹。强对流警报随之发出。",
        "visual6.app5.tag": "风",
        "visual6.app5.title": "风切变",
        "visual6.app5.desc": "把 V 沿垂直方向堆叠，可以看到风速或风向的突然变化，对航空有威胁。",
        "visual6.app6.tag": "航空",
        "visual6.app6.title": "微下击预警",
        "visual6.app6.desc": "贴近地面的 V 出现辐散模式是微下击暴流的标志，雷达会立刻触发机场告警。",
        "visual6.caption": "三个数字进来，六种预报出去。Z、V、V 和 W 是每种产品的基石。",
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
