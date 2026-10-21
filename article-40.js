/* =========================

   ARTICLE 35 — What Does a Radar Look Like?

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
        "page.title": "Article 40: The Display — Radar Explorer",
        "page.description": "Article 40: What do the dots on a radar screen mean? A-scope versus PPI, range rings, brightness and colour coding, track overlays and how operators actually read it.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 3, 2026",
        "article.title": "The Display — What Are Those Dots?",
        "article.subtitle": "Position is distance and bearing. Brightness is strength. Everything else is an overlay.",
        "toc.title": "On this page",
        "toc.s1": "Two ways to plot",
        "toc.s2": "Reading a PPI",
        "toc.s3": "Sweep animation",
        "toc.s4": "Worked example",
        "toc.s5": "Colour and brightness",
        "toc.s6": "Layers on top",
        "article.p1": "What do those dots and lines on a radar screen really mean?",
        "article.p2": "The display turns processed signals into something people can read. A-scope: distance on the horizontal axis, signal strength on the vertical. PPI: like a map, with you at the center and targets around you.",
        "article.p3": "A dot's position shows distance and direction; its brightness shows echo strength. Think of a mini-map in a video game — you at the center, bright dots are enemies. Modern radars often use color displays, where different colors mean different strengths.",
        "article.p4": "The display also overlays maps, tracks, and warnings. Operators use it to judge targets and make decisions.",
        "visual1.name": "TWO WAYS TO PLOT",
        "visual1.title": "A-Scope vs PPI",
        "visual1.intro": "The same data, two very different pictures. One answers \"how far\", the other answers \"where\".",
        "fig1.title": "A-scope on the left, PPI on the right",
        "fig1.ax": "range →",
        "fig1.ay": "strength",
        "fig1.ay2": "↑",
        "fig1.aTitle": "A-SCOPE",
        "fig1.peak1": "peak A",
        "fig1.floor": "clutter + noise",
        "fig1.pTitle": "PPI (plan position)",
        "fig1.pYou": "you are here",
        "visual1.caption": "The A-scope answers \"how strong and how far along this one beam\". The PPI answers \"where, all around me, at once\".",
        "visual2.name": "READING A PPI",
        "visual2.title": "Polar to Cartesian",
        "visual2.intro": "A dot is stored as one number for distance and one for angle. The screen converts them to a position.",
        "fig2.title": "How one blip becomes a pixel",
        "fig2.bearing": "bearing",
        "fig2.range": "range",
        "fig2.center": "radar at the centre",
        "fig2.box1": "range = 42 km",
        "fig2.box2": "bearing = 037°",
        "fig2.box3": "x = 37, y = 23",
        "fig2.plot": "plot",
        "fig2.cart": "Cartesian",
        "fig2.screen": "to the screen",
        "visual2.caption": "Range rings exist so you can read distance by eye without doing arithmetic. That is the only reason they are there.",
        "visual3.name": "ANIMATION: THE SWEEP",
        "visual3.title": "Watch the Sweep Paint the Picture",
        "visual3.intro": "A PPI builds one picture out of thousands of individual measurements, one per pulse.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. ONE PULSE -- a single line, one direction only",
        "visual3.cc2": "2. MANY PULSES -- rotate, and blips appear at each target",
        "visual3.cc3": "3. PAINTED -- the accumulated picture builds up",
        "visual3.cc4": "4. FADING -- old echoes decay so the display stays current",
        "visual3.caption": "Nothing is stored as a picture. Each blip is a single measurement, placed by its own range and bearing, and the picture is an illusion of accumulation.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Reading One Blip Out Loud",
        "visual4.intro": "An operator sees this and says one sentence. Here is every step behind it.",
        "visual4.row1.label": "Where on screen",
        "visual4.row1.value": "upper right, third ring out",
        "visual4.row2.label": "Converting to numbers",
        "visual4.row2.value": "42 km, bearing 037°",
        "visual4.row3.label": "Brightness says",
        "visual4.row3.value": "large — a metal aircraft, not a bird",
        "visual4.row4.label": "Track behaviour",
        "visual4.row4.value": "moving 240 m/s, inbound, closing",
        "visual4.row5.label": "Decision",
        "visual4.row5.value": "vector the interceptor, arm the ranges",
        "visual4.caption": "A display is a decision instrument, not a picture. Every pixel exists because somebody might have to act on it.",
        "visual5.name": "COLOUR AND BRIGHTNESS",
        "visual5.title": "Encoding Strength",
        "visual5.intro": "Echo strength spans 100 dB. The screen has to compress that into something an eye can rank.",
        "fig5.title": "How a 100 dB span becomes a colour scale",
        "fig5.b0": "below noise",
        "fig5.b1": "small",
        "fig5.b2": "medium",
        "fig5.b3": "large",
        "fig5.b4": "very large",
        "fig5.lin": "−110 dBm",
        "fig5.hin": "−10 dBm",
        "fig5.span": "logarithmic — each colour step is roughly 10 dB",
        "visual5.caption": "Colour is a ranking device. The operator's job is to spot which blip is in the wrong place on the scale.",
        "visual5.app1.tag": "MONO",
        "visual5.app1.title": "Black and Green",
        "visual5.app1.desc": "The original phosphor display. Brightness alone carried the strength, and green was the easiest colour for a long-persistence tube. Still used where colour is unavailable.",
        "visual5.app2.tag": "COLOUR",
        "visual5.app2.title": "False Colour",
        "visual5.app2.desc": "A rainbow ramp where hue means strength. Far easier to rank at a glance than brightness, but it wastes a channel — most displays keep one colour reserved for alarms.",
        "visual5.app3.tag": "ALARM",
        "visual5.app3.title": "Reserved Red",
        "visual5.app3.desc": "Red is removed from the strength ramp and used only for a priority target or a warning. If everything can be red, nothing is.",
        "visual5.app4.tag": "GRAIN",
        "visual5.app4.title": "Speckle",
        "visual5.app4.desc": "Below a threshold, a blip is shown as speckle rather than a solid mark. Speckle is usually noise or clutter; a solid return has persisted across several pulses.",
        "visual5.app5.tag": "VIDEO",
        "visual5.app5.title": "Integration",
        "visual5.app5.desc": "Enlarging each pixel to cover several range-azimuth cells averages neighbouring noise. The picture gets smoother and weak targets survive, at the cost of resolution.",
        "visual5.app6.tag": "HISTOGRAM",
        "visual5.app6.title": "Side Panel",
        "visual5.app6.desc": "Because position is now in polar coordinates, vertical stripes are clutter, lines are interference and isolated dots are noise. The side panel turns those into a shape you can recognise.",
        "visual6.name": "LAYERS ON TOP",
        "visual6.title": "Everything Except the Radar",
        "visual6.intro": "Most of what is drawn is not raw echo at all.",
        "visual6.app1.tag": "COAST",
        "visual6.app1.title": "The Shoreline",
        "visual6.app1.desc": "Drawn from a chart or satellite image. It gives every other mark a fixed reference, which is how an operator knows whether a target is over water or inland.",
        "visual6.app2.tag": "TRACK",
        "visual6.app2.title": "The History",
        "visual6.app2.desc": "Past positions of the same target joined by a line, with a short line showing its velocity. This is drawn by the tracker, not the radar.",
        "visual6.app3.tag": "LEAD",
        "visual6.app3.title": "The Prediction",
        "visual6.app3.desc": "A marker extrapolating where the track will be in a chosen time. This is the single most important symbol on the screen and it is pure arithmetic.",
        "visual6.app4.tag": "VECTORS",
        "visual6.app4.title": "Assigned Targets",
        "visual6.app4.desc": "A line from a friendly unit to its assigned target, or from a missile to the point it is predicted to intercept. Most dots acquire a vector only after a decision is made.",
        "visual6.app5.tag": "TACGRID",
        "visual6.app5.title": "The Tactical Grid",
        "visual6.app5.desc": "A coordinate grid laid over the picture so a position can be reported as a grid reference rather than a pixel. The bridge between what is seen and what can be said on a radio.",
        "visual6.app6.tag": "SCAN",
        "visual6.app6.title": "The Sweep Itself",
        "visual6.app6.desc": "A rotating line showing where the antenna points right now. Data outside the sector is stale, and an operator must know which parts of the picture are fresh.",
        "visual6.caption": "The raw radar picture is a minority of the pixels. The rest is chart data, arithmetic and decisions.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "The display turns radar signals into readable dots on a screen.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 40：显示器——屏幕上的光点是什么 — 雷达探索者",
        "page.description": "文章 40：雷达屏幕上的光点代表什么？A 显与 PPI 显对比、距离圈、亮度与颜色编码、航迹叠加，以及操作员到底怎么看图。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月3日",
        "article.title": "显示器——屏幕上的光点是什么",
        "article.subtitle": "位置是距离和方位，亮度是强度，其余全是叠加层。",
        "toc.title": "本页目录",
        "toc.s1": "两种画法",
        "toc.s2": "读懂 PPI 显",
        "toc.s3": "扫描动画",
        "toc.s4": "计算示例",
        "toc.s5": "颜色与亮度",
        "toc.s6": "叠加的图层",
        "article.p1": "雷达屏幕上那些光点、亮线，到底代表什么？",
        "article.p2": "显示器把处理后的信号变成人能看懂的画面。A 显：横轴距离，纵轴信号强度。PPI 显：像地图，中心是自己，周围是目标。",
        "article.p3": "光点位置代表距离和方位，亮度代表回波强弱。像游戏小地图，中心是你，周围亮点是敌人。现代雷达多用彩色显示，不同颜色代表不同强度。",
        "article.p4": "显示器还要叠加地图、航迹、告警信息。操作员通过显示器判断目标、做决策。",
        "visual1.name": "两种画法",
        "visual1.title": "A 显与 PPI 显",
        "visual1.intro": "同样的数据，两幅完全不同的图。一个回答「多远」，另一个回答「在哪」。",
        "fig1.title": "左边 A 显，右边 PPI 显",
        "fig1.ax": "距离 →",
        "fig1.ay": "强度",
        "fig1.ay2": "↑",
        "fig1.aTitle": "A 显",
        "fig1.peak1": "峰 A",
        "fig1.floor": "杂波 + 噪声",
        "fig1.pTitle": "PPI 显（平面位置）",
        "fig1.pYou": "你在这里",
        "visual1.caption": "A 显回答「这条波束上有多强、多远」。PPI 显回答「在我周围哪里」。",
        "visual2.name": "读懂 PPI 显",
        "visual2.title": "从极坐标到直角坐标",
        "visual2.intro": "一个光点存的是一个距离值和一个角度值。屏幕把它们换算成位置。",
        "fig2.title": "一个光点如何变成一个像素",
        "fig2.bearing": "方位",
        "fig2.range": "距离",
        "fig2.center": "雷达在圆心",
        "fig2.box1": "距离 = 42 公里",
        "fig2.box2": "方位 = 037°",
        "fig2.box3": "x = 37，y = 23",
        "fig2.plot": "极坐标",
        "fig2.cart": "直角坐标",
        "fig2.screen": "画到屏幕上",
        "visual2.caption": "距离圈存在的唯一理由，是让你不用算就能看出距离。",
        "visual3.name": "动画：扫描",
        "visual3.title": "看扫描线把图画出来",
        "visual3.intro": "PPI 显是用成千上万次单独测量拼成的一幅图，每个脉冲一次。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 一个脉冲——只是一条线，一个方向",
        "visual3.cc2": "2. 很多脉冲——转起来，每个目标上就出现光点",
        "visual3.cc3": "3. 画出来了——累积的画面逐渐成形",
        "visual3.cc4": "4. 衰减——旧回波淡出，画面才保持最新",
        "visual3.caption": "屏幕里并不存着一张图。每个光点都是一次独立测量，按自己的距离和方位放好，而画面只是累积产生的错觉。",
        "visual4.name": "计算示例",
        "visual4.title": "把一个光点念出来",
        "visual4.intro": "操作员看到这些，会说出一句话。下面是这句话背后的每一步。",
        "visual4.row1.label": "屏幕上位置",
        "visual4.row1.value": "右上方，第三个距离圈",
        "visual4.row2.label": "换算成数字",
        "visual4.row2.value": "42 公里，方位 037°",
        "visual4.row3.label": "亮度说明",
        "visual4.row3.value": "很强——是金属飞机，不是鸟",
        "visual4.row4.label": "航迹表现",
        "visual4.row4.value": "速度 240 米/秒，正在接近",
        "visual4.row5.label": "决策",
        "visual4.row5.value": "引导拦截机开机，进入作战状态",
        "visual4.caption": "显示器是决策工具，不是图画。每一个像素的存在，都是因为可能有人要据此行动。",
        "visual5.name": "颜色与亮度",
        "visual5.title": "把强度编码出来",
        "visual5.intro": "回波强度跨度有 100 dB。屏幕必须把它压缩成眼睛能排序的东西。",
        "fig5.title": "100 dB 的跨度如何变成颜色标尺",
        "fig5.b0": "低于噪声",
        "fig5.b1": "小",
        "fig5.b2": "中",
        "fig5.b3": "大",
        "fig5.b4": "很大",
        "fig5.lin": "−110 dBm",
        "fig5.hin": "−10 dBm",
        "fig5.span": "对数刻度——每一级颜色约等于 10 dB",
        "visual5.caption": "颜色是一种排序工具。操作员要做的是找出哪个光点放错了档位。",
        "visual5.app1.tag": "单色",
        "visual5.app1.title": "黑底绿点",
        "visual5.app1.desc": "最早的磷光显示器。强度全靠亮度表达，而绿色是长余辉管最容易实现的颜色。在没有彩显的地方至今还在用。",
        "visual5.app2.tag": "彩色",
        "visual5.app2.title": "伪彩色",
        "visual5.app2.desc": "用彩虹色阶表示强度，一眼就能排序，比亮度容易得多。但它占用了一个通道——多数显示会留出一种颜色专门给告警。",
        "visual5.app3.tag": "告警",
        "visual5.app3.title": "红色专用",
        "visual5.app3.desc": "红色从强度色阶里拿掉，只用来表示优先目标或警告。如果什么都可以是红的，那就等于什么都不是。",
        "visual5.app4.tag": "麻点",
        "visual5.app4.title": "散点与实点",
        "visual5.app4.desc": "低于门限的光点显示为麻点而非实心标记。麻点通常是噪声或杂波；实心回波意味着它在好几个脉冲里都存在。",
        "visual5.app5.tag": "视频",
        "visual5.app5.title": "积累",
        "visual5.app5.desc": "把每个像素放大到覆盖若干距离—方位单元，等于对邻近噪声做平均。画面更平滑、弱目标更容易保留，代价是分辨率。",
        "visual5.app6.tag": "侧板",
        "visual5.app6.title": "直方图",
        "visual5.app6.desc": "因为坐标变成了极坐标，竖条是杂波、线条是干扰、孤立点是噪声。侧板把这些变成一眼能认出的形状。",
        "visual6.name": "叠加的图层",
        "visual6.title": "几乎都不是雷达本身",
        "visual6.intro": "屏幕上画出来的大部分东西，都不是原始回波。",
        "visual6.app1.tag": "海岸线",
        "visual6.app1.title": "海岸",
        "visual6.app1.desc": "来自海图或卫星图。它给其他所有标记一个固定参照，操作员据此判断目标是海上还是陆上。",
        "visual6.app2.tag": "航迹",
        "visual6.app2.title": "历史",
        "visual6.app2.desc": "同一目标过去的位置连成线，再加一段短线表示速度方向。这是跟踪器画的，不是雷达画的。",
        "visual6.app3.tag": "提前量",
        "visual6.app3.title": "预测",
        "visual6.app3.desc": "标记出航迹在指定时间后会在哪里。这是屏幕上最重要的符号，而它完全是算出来的。",
        "visual6.app4.tag": "引导线",
        "visual6.app4.title": "已分配目标",
        "visual6.app4.desc": "从我方单位连到已分配目标的线，或从导弹连到预测拦截点。多数光点只有在决策之后才会带上引导线。",
        "visual6.app5.tag": "战术网格",
        "visual6.app5.title": "坐标格",
        "visual6.app5.desc": "在画面上叠一层坐标网格，让位置可以按方格基准而不是按像素来报告。这是「看到的」和「能用无线电说出去的」之间的桥。",
        "visual6.app6.tag": "扫描线",
        "visual6.app6.title": "扫描本身",
        "visual6.app6.desc": "一条旋转的线，显示天线此刻指在哪。扇区之外的数据是过期的，操作员必须知道画面哪部分是新的。",
        "visual6.caption": "原始雷达画面只占像素的少数。其余是海图数据、算术结果和决策。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "显示器把雷达信号变成看得懂的光点画面。",
        "article.meta": "学生研究 · 2026",
        "article.back": "← 返回文章列表",
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
