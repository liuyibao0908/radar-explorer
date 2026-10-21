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
        "page.title": "Article 36: The Antenna — Radar Explorer",
        "page.description": "Article 36: What does a radar antenna do? Transmit and receive, beam width versus aperture, dish versus array, mechanical versus electronic scanning, and side lobes.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Jul 21, 2026",
        "article.title": "The Antenna — Hands and Ears",
        "article.subtitle": "The reflector is the difference between a bulb and a flashlight.",
        "toc.title": "On this page",
        "toc.s1": "Two jobs",
        "toc.s2": "Bulb vs flashlight",
        "toc.s3": "Aperture and beam",
        "toc.s4": "Worked example",
        "toc.s5": "Shapes and scanning",
        "toc.s6": "Side lobes",
        "article.p1": "The antenna is the most visible part of a radar. Some look like dishes, some like flat panels, some like walls. What does it actually do?",
        "article.p2": "The antenna does two jobs: when sending, it focuses radio waves in one direction; when receiving, it catches the weak waves coming back. Think of a flashlight: a plain bulb shines everywhere, but a flashlight has a reflector that sends light far and focused.",
        "article.p3": "A bigger antenna means a narrower beam and better accuracy, but a smaller search area. Different shapes serve different uses: parabolic, flat panel, array. Some antennas spin — that's mechanical scanning. Some don't — that's electronic scanning.",
        "article.p4": "Antennas also have parameters like polarization, gain, and side lobes. Side lobes are like light leaking from a flashlight — they cause interference and clutter. The antenna is the radar's first gate, and it directly affects detection.",
        "visual1.name": "TWO JOBS",
        "visual1.title": "Hands and Ears",
        "visual1.intro": "The same metal surface radiates on transmit and collects on receive. Reciprocity is the whole trick.",
        "fig1.title": "Antenna transmit and receive",
        "fig1.hands": "TRANSMIT — hands",
        "fig1.target": "target",
        "fig1.ears": "RECEIVE — ears",
        "fig1.echo": "weak echo",
        "fig1.same": "same surface, both jobs",
        "visual1.caption": "One reflector, two directions. On transmit it focuses energy outward; on receive it gathers energy inward.",
        "visual2.name": "BULB VS FLASHLIGHT",
        "visual2.title": "Why a Reflector Changes Everything",
        "visual2.intro": "A bare radiator wastes almost all its power. The reflector recovers it.",
        "fig2.title": "Bare bulb vs reflector",
        "fig2.bulb": "Bare bulb",
        "fig2.bulbSub": "radiates everywhere",
        "fig2.wasted": "almost nothing forward",
        "fig2.flash": "Flashlight",
        "fig2.flashSub": "all power into the beam",
        "fig2.concentrated": "narrow, strong, long range",
        "visual2.caption": "Same bulb, same power. The reflector aims it. A radar antenna is exactly this reflector, scaled to radio wavelengths.",
        "visual3.name": "ANIMATION: APERTURE VS BEAM",
        "visual3.title": "Watch the Beam Narrow",
        "visual3.intro": "Grow the dish and the beam gets thinner. Thin beam means better angle accuracy and a slower sweep.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. SMALL DISH -- wide beam, weak and blunt",
        "visual3.cc2": "2. MEDIUM DISH -- beam tightens, gain rises",
        "visual3.cc3": "3. LARGE DISH -- narrow beam, sharp edges",
        "visual3.cc4": "4. TRADE-OFF -- precision up, scan speed down",
        "visual3.caption": "Beam width and aperture trade against each other. That is the central design choice in every antenna.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Trade the Trade-Off",
        "visual4.intro": "Two radars, same band, different dishes. Here is what each one is good at.",
        "visual4.row1.label": "Radar A aperture",
        "visual4.row1.value": "3 m — airport approach",
        "visual4.row2.label": "Radar A beam",
        "visual4.row2.value": "wide, updates every 1 s",
        "visual4.row3.label": "Radar B aperture",
        "visual4.row3.value": "25 m — weather radar",
        "visual4.row4.label": "Radar B beam",
        "visual4.row4.value": "narrow, full sweep in 4 min",
        "visual4.caption": "Airport radars want fresh data; weather radars want sharp angles. Different dishes, same physics.",
        "visual5.name": "SHAPES AND SCANNING",
        "visual5.title": "Dish, Panel, Array",
        "visual5.intro": "Three common shapes, three scanning styles, six words worth knowing.",
        "visual5.app1.tag": "PARABOLIC",
        "visual5.app1.title": "The Classic Dish",
        "visual5.app1.desc": "A curved surface with one feed. Excellent gain, simple to build, high wind load. Needs a motor to turn.",
        "visual5.app2.tag": "ARRAY",
        "visual5.app2.title": "The Phased Array",
        "visual5.app2.desc": "Hundreds of small radiators, each with its own phase shifter. Steers the beam in microseconds without moving anything.",
        "visual5.app3.tag": "FLAT PANEL",
        "visual5.app3.title": "The Wall",
        "visual5.app3.desc": "Low profile, low wind load, installable on rooftops and masts. Usually a small array with fixed electronic steering.",
        "visual5.app4.tag": "MECHANICAL",
        "visual5.app4.title": "It Turns",
        "visual5.app4.desc": "One beam, one direction at a time. The sweep rate is set by how fast the motor can turn the whole structure.",
        "visual5.app5.tag": "ELECTRONIC",
        "visual5.app5.title": "It Doesn't",
        "visual5.app5.desc": "Many beams at once. The radar can dwell on a storm for a second, then jump 30 degrees, without any moving parts.",
        "visual5.app6.tag": "HYBRID",
        "visual5.app6.title": "Best of Both",
        "visual5.app6.desc": "Today's weather radars turn slowly just to keep the antenna facing the weather, while the array does the actual scanning.",
        "visual5.caption": "Shape decides the beam; the scanning method decides how fast you can move that beam.",
        "visual6.name": "SIDE LOBES",
        "visual6.title": "The Light That Leaks Out",
        "visual6.intro": "No antenna is perfect. Some energy always escapes sideways, and that energy comes back as clutter.",
        "fig6.title": "Main lobe and side lobes",
        "fig6.angle": "angle",
        "fig6.main": "main lobe — where you point",
        "fig6.sl1": "side lobe",
        "fig6.sl2": "side lobe",
        "fig6.clutter": "strong ground clutter returns through the side lobes",
        "fig6.blank": "blanking, tapering and sidelobe cancellation are used to fight it",
        "visual6.caption": "The pattern is never one clean lobe. The small side lobes pick up the ground and the buildings, which is where most clutter comes from.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "The antenna is the radar's hands and ears — it sends and receives waves.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 36：天线—雷达的手和耳朵 — 雷达探索者",
        "page.description": "文章 36：雷达天线干什么？发射与接收、口径与波束宽度的关系、碗形与阵列、机械扫描与电子扫描、旁瓣。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年7月21日",
        "article.title": "天线—雷达的手和耳朵",
        "article.subtitle": "反射镜就是灯泡和手电筒的区别。",
        "toc.title": "本页目录",
        "toc.s1": "两件事",
        "toc.s2": "灯泡 vs 手电筒",
        "toc.s3": "口径与波束",
        "toc.s4": "计算示例",
        "toc.s5": "形状与扫描",
        "toc.s6": "旁瓣",
        "article.p1": "雷达最显眰的就是天线。有的像锅，有的像平板，有的像一面墙。它到底在干什么？",
        "article.p2": "天线干两件事：发射时把电磁波聚成一个方向发出去；接收时把回来的微弱波收进来。像手电筒：普通灯泡到处照，手电筒有反射碗，能照得又远又集中。",
        "article.p3": "天线越大，波束越窄，看得越准，但搜索范围越小。天线形状不同，用途也不同：抛物面、平板、阵列。有的天线会转，叫机械扫描；有的不转，叫电子扫描。",
        "article.p4": "天线还要考虑极化、增益、旁瓣等参数。旁瓣就像手电筒漏光，会带来干扰和杂波。天线是雷达的“第一道关口”，直接影响探测效果。",
        "visual1.name": "两件事",
        "visual1.title": "手和耳朵",
        "visual1.intro": "同一块金属面发射时输出波，接收时收集波。互易性就是整个关键。",
        "fig1.title": "天线发射与接收",
        "fig1.hands": "发射 — 手",
        "fig1.target": "目标",
        "fig1.ears": "接收 — 耳朵",
        "fig1.echo": "微弱回波",
        "fig1.same": "同一面，两件事",
        "visual1.caption": "一面反射镜，两个方向。发射时把能量聚到外面，接收时把能量收到里面。",
        "visual2.name": "灯泡 vs 手电筒",
        "visual2.title": "为什么反射镜至关重要",
        "visual2.intro": "裸辐射体基本浪费掉了自己的功率。反射镜把它收回来。",
        "fig2.title": "裸灯泡 vs 反射镜",
        "fig2.bulb": "裸灯泡",
        "fig2.bulbSub": "到处照",
        "fig2.wasted": "前方几乎没有能量",
        "fig2.flash": "手电筒",
        "fig2.flashSub": "功率全部进入波束",
        "fig2.concentrated": "窄、强、远",
        "visual2.caption": "同一只灯泡，同一功率。反射镜把它对准。雷达天线就是这个反射镜，放大到无线电波长。",
        "visual3.name": "动画：口径与波束",
        "visual3.title": "看波束变窄",
        "visual3.intro": "碗变大，波束变细。细波束意味着角度更准，但扫描变慢。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 小碗 — 波束宽，弱而等二",
        "visual3.cc2": "2. 中碗 — 波束收紧，增益上升",
        "visual3.cc3": "3. 大碗 — 波束窄，边缘强",
        "visual3.cc4": "4. 取舍 — 精度上升，扫描变慢",
        "visual3.caption": "口径和波束宽度永远相互制约。这是每一台天线的核心设计取舍。",
        "visual4.name": "计算示例",
        "visual4.title": "做出取舍",
        "visual4.intro": "两台雷达，同一频段，不同的碗。看看各自的强项是什么。",
        "visual4.row1.label": "A 台口径",
        "visual4.row1.value": "3 米 — 机场进场雷达",
        "visual4.row2.label": "A 台波束",
        "visual4.row2.value": "宽，每秒刷新一次",
        "visual4.row3.label": "B 台口径",
        "visual4.row3.value": "25 米 — 天气雷达",
        "visual4.row4.label": "B 台波束",
        "visual4.row4.value": "窄，4 分钟转一圈",
        "visual4.caption": "机场雷达要求新颗数换的清晰度，天气雷达要求角度精确。不同的碗，同一套物理。",
        "visual5.name": "形状与扫描",
        "visual5.title": "碗形、平板、阵列",
        "visual5.intro": "三种常见形状，三种扫描方式，六个值得记的词。",
        "visual5.app1.tag": "抛物面",
        "visual5.app1.title": "经典碗形",
        "visual5.app1.desc": "一块弧形反射面加一个馈源。增益好、做起来简单，风载大，需要电机转动。",
        "visual5.app2.tag": "阵列",
        "visual5.app2.title": "相控阵",
        "visual5.app2.desc": "数百个小辐射器，每个都带相位移相器。不动任何东西，微秒内就能把波束转过去。",
        "visual5.app3.tag": "平板",
        "visual5.app3.title": "一面墙",
        "visual5.app3.desc": "低配置、风载小，可以安装在屋顶和挡杆上。通常是一个小型阵列，用固定电子扫描。",
        "visual5.app4.tag": "机械扫描",
        "visual5.app4.title": "它转动",
        "visual5.app4.desc": "一条波束，同时只能指一个方向。扫描速度取决于电机能多快转动整台设备。",
        "visual5.app5.tag": "电子扫描",
        "visual5.app5.title": "它不转",
        "visual5.app5.desc": "同时很多条波束。雷达可以在风暴上停留一秒，然后跳远 30 度，不需要任何移动部件。",
        "visual5.app6.tag": "混合",
        "visual5.app6.title": "取长补短",
        "visual5.app6.desc": "当今的天气雷达慢慢转动，只是为了让天线面向天气，真正扫描的工作由阵列完成。",
        "visual5.caption": "形状决定波束；扫描方式决定你能多快移动这条波束。",
        "visual6.name": "旁瓣",
        "visual6.title": "漏出来的那部分光",
        "visual6.intro": "没有任何天线是完美的。总有一部分能量从侧面漏掉，而这部分能量会反过来成为杂波。",
        "fig6.title": "主叠与旁瓣",
        "fig6.angle": "角度",
        "fig6.main": "主叠 — 你指向的地方",
        "fig6.sl1": "旁瓣",
        "fig6.sl2": "旁瓣",
        "fig6.clutter": "强的地面杂波就是从旁瓣返回来的",
        "fig6.blank": "用空白、加权和旁瓣对消来对他它们",
        "visual6.caption": "方向图从来不只有一个干净的叠。那些小的旁瓣会探到地面和建筑物，而大部分杂波就是这么来的。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "天线是雷达的手和耳朵，负责发波和收波。",
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
