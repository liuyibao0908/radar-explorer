/* =========================

   ARTICLE 33 — What Is Dual Polarization?

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
        "page.title": "Article 33: What Is Dual Polarization? — Radar Explorer",
        "page.description": "Article 33: What does dual-polarization mean in weather radar? Horizontal and vertical pulses reveal rain, snow, and hail. A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "toc.title": "On this page",
        "toc.s1": "Two polarizations at once",
        "toc.s2": "Shape matters",
        "toc.s3": "Dual-pol signature animation",
        "toc.s4": "Worked example",
        "toc.s5": "Products and false echoes",
        "toc.s6": "Where dual-pol lives",
        "article.title": "What Is Dual Polarization?",
        "article.author": "By Editorial",
        "article.date": "Aug 21, 2025",
        "article.subtitle": "One pulse, two shapes. The sky remembers both.",
        "article.p1": "You often hear \"dual polarization\" in weather radar. What does it mean?",
        "article.p2": "A normal radar sends waves in one polarization direction. A dual-polarization radar sends both horizontal and vertical polarized waves at the same time. Precipitation particles have different shapes and reflect the two waves differently. By comparing them, we can tell rain, snow, hail, or sleet.",
        "article.p3": "Think of using two eyes instead of one — you get a better sense of depth. Dual polarization improves precipitation estimates. It can also identify non-weather echoes like insects and birds.",
        "article.p4": "Dual polarization plus phased array is the direction of modern weather radar.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Dual polarization sends two polarizations at once to tell precipitation types apart.",
        "visual1.num": "01",
        "visual1.name": "TWO AT ONCE",
        "visual1.title": "Two Polarizations at Once",
        "visual1.intro": "Traditional pulses point one way. Dual-pol radar sends both H and V at once and listens with both.",
        "fig1.title": "H and V polarizations",
        "fig1.legacy": "SINGLE POL",
        "fig1.legacyfoot": "one wave, one return",
        "fig1.dual": "DUAL POL (H + V)",
        "fig1.h": "H",
        "fig1.v": "V",
        "fig1.rh": "Z_H",
        "fig1.rv": "Z_V",
        "fig1.dualfoot": "two waves, two returns, one comparison",
        "visual1.caption": "Single-pol radar sees one number. Dual-pol radar sees two and compares them.",
        "visual2.num": "02",
        "visual2.name": "SHAPE MATTERS",
        "visual2.title": "Different Shapes, Different Signatures",
        "visual2.intro": "Rain is round, snow is flat, hail tumbles. The two polarizations pick up the shape difference.",
        "fig2.title": "Rain, snow, hail shapes",
        "fig2.rain": "RAIN",
        "fig2.rainzdr": "Zdr ≈ 0 dB",
        "fig2.raindesc": "round drops, both pol equal",
        "fig2.snow": "SNOW",
        "fig2.snowzdr": "Zdr > 3 dB",
        "fig2.snowdesc": "flat crystals, H return stronger",
        "fig2.hail": "HAIL",
        "fig2.hailzdr": "CC < 0.95",
        "fig2.haildesc": "tumbling, returns decorrelated",
        "fig2.foot": "Zdr and CC separate the three",
        "visual2.caption": "Three particle shapes produce three different polarimetric signatures.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: DUAL-POL SIGNATURE",
        "visual3.title": "Reading a Dual-Pol Signature",
        "visual3.intro": "The animation drops particles through the beam and shows how the four products separate them.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. RAIN -- round drops, Zdr near zero, both pols equal",
        "visual3.cc2": "2. SNOW -- flat plates, H return stronger, Zdr positive",
        "visual3.cc3": "3. HAIL -- tumbling chunks, CC drops below 0.95",
        "visual3.cc4": "4. INSECT -- non-weather, returns decorrelated, flag as clutter",
        "visual3.caption": "Zdr and CC together separate rain, snow, hail, and clutter into different regions.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "From Zdr and CC to a Call",
        "visual4.intro": "Three numbers — Z, Zdr, CC — are usually enough to make a particle-classification call.",
        "visual4.row1.label": "Reflectivity Z",
        "visual4.row1.value": "45 dBZ",
        "visual4.row2.label": "Differential power Zdr",
        "visual4.row2.value": "0.2 dB",
        "visual4.row3.label": "Correlation CC",
        "visual4.row3.value": "0.99",
        "visual4.row4.label": "Particle type",
        "visual4.row4.value": "heavy rain",
        "visual4.caption": "Worked example: high Z + near-zero Zdr + CC near 1 = heavy rain.",
        "visual5.num": "05",
        "visual5.name": "PRODUCTS",
        "visual5.title": "Products and False Echoes",
        "visual5.intro": "Three base products become a clutter filter, a particle classifier, and a better rainfall estimate.",
        "visual5.app1.tag": "Zdr",
        "visual5.app1.title": "Differential Reflectivity",
        "visual5.app1.desc": "Zdr is the ratio of horizontal to vertical return power in dB. Near 0 = round; positive = flat (snow, oblate drops).",
        "visual5.app2.tag": "CC",
        "visual5.app2.title": "Correlation Coefficient",
        "visual5.app2.desc": "CC compares the H and V signals sample by sample. Near 1 = uniform particles; below 0.95 = tumbling hail or mixed clutter.",
        "visual5.app3.tag": "Kdp",
        "visual5.app3.title": "Specific Differential Phase",
        "visual5.app3.desc": "Kdp is the differential phase shift per km. It is independent of absolute calibration and works in heavy rain where Z saturates.",
        "visual5.app4.tag": "HCA",
        "visual5.app4.title": "Hydrometeor Class",
        "visual5.app4.desc": "A fuzzy-logic or statistical classifier combines Z, Zdr, Kdp, and CC into a single best particle-type guess per pixel.",
        "visual5.app5.tag": "CLUTTER",
        "visual5.app5.title": "Non-Weather Filter",
        "visual5.app5.desc": "Insects, birds, and chaff have very low CC. Dual-pol makes it easy to drop them out of the rain map before users see them.",
        "visual5.app6.tag": "QPE",
        "visual5.app6.title": "Better Rainfall",
        "visual5.app6.desc": "Dual-pol rain rate uses Kdp plus Z. It is closer to ground truth, especially for heavy rain and tropical storms.",
        "visual5.caption": "Three numbers — Zdr, Kdp, CC — plus Z unlock an entire toolbox of forecaster products.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "Where Dual-Pol Radars Live",
        "visual6.intro": "Most national networks have already upgraded or are upgrading.",
        "visual6.app1.tag": "NWS",
        "visual6.app1.title": "WSR-88D (NEXRAD)",
        "visual6.app1.desc": "The 159 US NEXRAD radars were upgraded to dual-pol between 2011 and 2013. Almost every rain map you see now is dual-pol.",
        "visual6.app2.tag": "RESEARCH",
        "visual6.app2.title": "NCAR and NSSL",
        "visual6.app2.desc": "NCAR and NSSL drove the dual-pol upgrade and run the polarimetric radar data processing chain that everyone else uses.",
        "visual6.app3.tag": "CHINA",
        "visual6.app3.title": "CMA Dual-Pol Network",
        "visual6.app3.desc": "CMA's operational S-band and C-band radars are mostly dual-pol. The XinJiang and Yangtze networks feed flood warnings with Kdp rain rate.",
        "visual6.app4.tag": "EUROPE",
        "visual6.app4.title": "OPERA Polarimetric",
        "visual6.app4.desc": "Most European weather services run dual-pol radars and pool their products in OPERA. Germany, France, and Italy are among the heaviest users.",
        "visual6.app5.tag": "AVIATION",
        "visual6.app5.title": "Airport QPE",
        "visual6.app5.desc": "Busy airports run dual-pol X-band radars near the runway to measure rainfall on the apron and warn of snow or hail on approach.",
        "visual6.app6.tag": "RESEARCH",
        "visual6.app6.title": "Solid-State Dual-Pol",
        "visual6.app6.desc": "New solid-state transmit/receive modules let the radar run dual-pol at lower power and longer pulse — better data, smaller dish.",
        "visual6.caption": "From NEXRAD to CMA to the EU, dual-pol is the new normal for weather radar.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2026",
    },

    zh: {
        "page.title": "文章 33：双偏振是什么 — 雷达探索者",
        "page.description": "文章 33：天气雷达里的双偏振是什么？水平+垂直两种脉冲同时发送，区分雨、雪、冰雹。面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "toc.title": "本页目录",
        "toc.s1": "一次两种偏振",
        "toc.s2": "形状是关键",
        "toc.s3": "双偏振特征动画",
        "toc.s4": "计算示例",
        "toc.s5": "产品与杂泤",
        "toc.s6": "双偏振都在哪里",
        "article.title": "双偏振是什么",
        "article.author": "编辑部",
        "article.date": "2025年8月21日",
        "article.subtitle": "一个脉冲，两种形状。天空都记下了。",
        "article.p1": "天气雷达里常听到“双偏振”，这是什么意思？",
        "article.p2": "普通雷达发一种偏振方向的波。双偏振雷达同时发水平、垂直两种偏振波。降水粒子形状不同，对两种波的反射也不同。通过对比，可以判断是雨、雪、冰雹还是雨夹雪。",
        "article.p3": "像用两只眼睛看东西，比一只眼更有立体感。双偏振能提高降水估计精度。还能识别非降水回波，比如昆虫、鸟群。",
        "article.p4": "双偏振 + 相控阵，是现代天气雷达的方向。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "双偏振是同时发两种偏振波，用来区分降水类型。",
        "visual1.num": "01",
        "visual1.name": "同时两种",
        "visual1.title": "一次两种偏振",
        "visual1.intro": "传统脉冲只向一个方向。双偏振雷达同时发 H 和 V，同时接收两个回波。",
        "fig1.title": "H 和 V 偏振",
        "fig1.legacy": "单偏振",
        "fig1.legacyfoot": "一个波，一个回波",
        "fig1.dual": "双偏振 (H + V)",
        "fig1.h": "H",
        "fig1.v": "V",
        "fig1.rh": "Z_H",
        "fig1.rv": "Z_V",
        "fig1.dualfoot": "两个波，两个回波，一次对比",
        "visual1.caption": "单偏振雷达只拿到一个数。双偏振拿到两个数并对比。",
        "visual2.num": "02",
        "visual2.name": "形状是关键",
        "visual2.title": "不同形状不同特征",
        "visual2.intro": "雨黑水滴是圆的，雪花是薄片，冰雹则不停翻滚。两种偏振把这些形状差别读出来。",
        "fig2.title": "雨、雪、冰雹的形状",
        "fig2.rain": "雨",
        "fig2.rainzdr": "Zdr ≈ 0 dB",
        "fig2.raindesc": "圆雨滴，两种偏振回波相同",
        "fig2.snow": "雪",
        "fig2.snowzdr": "Zdr > 3 dB",
        "fig2.snowdesc": "薄片冰晶，H 回波更强",
        "fig2.hail": "冰雹",
        "fig2.hailzdr": "CC < 0.95",
        "fig2.haildesc": "不停翻滚，两个脉冲不同步",
        "fig2.foot": "Zdr 和 CC 把三种东西拆开",
        "visual2.caption": "三种东西的三个形状在双偏振上有三种特征。",
        "visual3.num": "03",
        "visual3.name": "动画：双偏振特征",
        "visual3.title": "读双偏振特征",
        "visual3.intro": "动画将不同粒子丢过脉冲，演示四个变量如何拆开它们。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 雨 — 圆雨滴，Zdr 接近零，两偏振回波相同",
        "visual3.cc2": "2. 雪 — 薄片冰晶，H 回波更强，Zdr 为正",
        "visual3.cc3": "3. 冰雹 — 不停翻滚，CC 跌到 0.95 下",
        "visual3.cc4": "4. 昆虫 — 非降水，两脉冲不同步，被判为杂泤",
        "visual3.caption": "Zdr 和 CC 联手把雨、雪、冰雹、杂泤拆成四个独立区。",
        "visual4.num": "04",
        "visual4.name": "计算示例",
        "visual4.title": "从 Zdr 和 CC 到一句话诊断",
        "visual4.intro": "三个数—Z、Zdr、CC—通常足够下一个粒子分类判断。",
        "visual4.row1.label": "反射率 Z",
        "visual4.row1.value": "45 dBZ",
        "visual4.row2.label": "差分反射率 Zdr",
        "visual4.row2.value": "0.2 dB",
        "visual4.row3.label": "相关系数 CC",
        "visual4.row3.value": "0.99",
        "visual4.row4.label": "粒子类型",
        "visual4.row4.value": "暴雨",
        "visual4.caption": "计算示例：高 Z + 接近零的 Zdr + 接近 1 的 CC 为 暴雨。",
        "visual5.num": "05",
        "visual5.name": "产品",
        "visual5.title": "产品与杂泤过滤",
        "visual5.intro": "三个基础变量拼出一个杂泤过滤、一个粒子分类器、一个更准的降雨量估计。",
        "visual5.app1.tag": "Zdr",
        "visual5.app1.title": "差分反射率",
        "visual5.app1.desc": "Zdr 是 H 与 V 回波功率比值的对数（干贝尔）。接近 0 = 粒子圆；正值越大 = 越薄。",
        "visual5.app2.tag": "CC",
        "visual5.app2.title": "相关系数",
        "visual5.app2.desc": "CC 按采样点对对比 H 和 V 信号。接近 1 = 粒子均匀；低于 0.95 = 冰雹翻滚或杂泤。",
        "visual5.app3.tag": "Kdp",
        "visual5.app3.title": "差分相位特征量",
        "visual5.app3.desc": "Kdp 是每公里的差分相位滑移量。它与绝对校冶无关，在大雨中付比 Z 更可靠。",
        "visual5.app4.tag": "HCA",
        "visual5.app4.title": "水气粒子分类",
        "visual5.app4.desc": "一个模糊逻辑或统计分类器把 Z、Zdr、Kdp、CC 合在一起，给每个像素一个最合适的粒子类型答案。",
        "visual5.app5.tag": "杂泤",
        "visual5.app5.title": "非降水过滤",
        "visual5.app5.desc": "昆虫、鸟、钉鸟钙的 CC 极低。双偏振可以在用户看到之前就把它们从降雨图里筛掉。",
        "visual5.app6.tag": "QPE",
        "visual5.app6.title": "更准的降雨量",
        "visual5.app6.desc": "双偏振降雨量量取决于 Kdp 与 Z。它更接近地面真值，尤其是暴雨与台风。",
        "visual5.caption": "三个数—Zdr、Kdp、CC—加上 Z 拼出预报员工具的一整个产品箱。",
        "visual6.num": "06",
        "visual6.name": "应用",
        "visual6.title": "双偏振都在哪里",
        "visual6.intro": "大多数国家网络已经完成或正在升级双偏振。",
        "visual6.app1.tag": "NWS",
        "visual6.app1.title": "WSR-88D (NEXRAD)",
        "visual6.app1.desc": "美国 159 部 NEXRAD 雷达于 2011–2013 年全部升级为双偏振。你现在看到的任何降雨图基本都是双偏振产品。",
        "visual6.app2.tag": "科研",
        "visual6.app2.title": "NCAR 和 NSSL",
        "visual6.app2.desc": "NCAR 和 NSSL 驱动了双偏振升级，并运营使用以外的极化处理链。",
        "visual6.app3.tag": "中国",
        "visual6.app3.title": "CMA 双偏振网络",
        "visual6.app3.desc": "中国气象局 S 带与 C 带雷达多为双偏振。新疆与长江网络采用 Kdp 降雨量交给洪水预警。",
        "visual6.app4.tag": "欧洲",
        "visual6.app4.title": "OPERA 双偏振",
        "visual6.app4.desc": "大多数欧洲国家天气服务都在运行双偏振雷达，在 OPERA 中共享产品。德、法、意是使用量最大的几个国家。",
        "visual6.app5.tag": "航空",
        "visual6.app5.title": "机场降雨量",
        "visual6.app5.desc": "主要机场近跑道部置双偏振 X 带雷达，探测机场面及贴近的降雨/降雪、冰雹预警。",
        "visual6.app6.tag": "科研",
        "visual6.app6.title": "固态双偏振",
        "visual6.caption": "从美国到中国再到欧盟，双偏振是天气雷达的新标配。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2026",
        "visual6.app6.desc": "新一代固态发收模块使小型双偏振雷达成为可能，低功耗、长脉冲，更多信息、更小天线。",
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
