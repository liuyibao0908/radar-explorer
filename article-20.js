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

        "page.title": "Article 20: Marine Radar — Radar Explorer",

        "page.description": "Article 20: How does marine radar help ships navigate and avoid collisions? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "Apr 9, 2026",

        "toc.title": "On this page",

        "toc.s1": "The radar screen",

        "toc.s2": "Range and bearing",

        "toc.s3": "Sweep animation",

        "toc.s4": "Worked example",

        "toc.s5": "Radar + AIS",

        "toc.s6": "Applications",

        "article.title": "Marine Radar",

        "article.subtitle": "How do ships avoid collisions in heavy fog? Marine radar watches the surrounding sea for them.",

        "article.p1": "How do ships avoid collisions in heavy fog? Marine radar helps a lot.",

        "article.p2": "Marine radar is mounted on ships and scans the surrounding sea. It finds other ships, buoys, and coastlines. It measures distance and direction to help avoid collisions. It is like the captain's eyes, seeing through fog.",

        "article.p3": "Modern marine radar can overlay electronic charts. It must resist salt fog, rolling, and vibration. It is essential navigation equipment for ships. It matters especially for night and fog navigation.",

        "article.p4": "Marine radar is the same basic physics as every other radar — short pulse, time of echo, antenna angle — but the display is uniquely useful: a circular Plan Position Indicator (PPI) where the ship is at the centre and the world rotates around it.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "Marine radar helps ships see nearby targets and avoid collisions in fog or at night.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2026",

        "fig1.title": "Marine radar PPI display",

        "fig1.target1": "TGT 1",

        "fig1.target2": "TGT 2",

        "fig1.target3": "TGT 3",

        "fig1.ownShip": "our ship",

        "fig1.north": "N",

        "fig1.range1": "1 nm",

        "fig1.range2": "2 nm",

        "fig1.range3": "3 nm",

        "fig1.bottom": "bright blip = echo from a target · distance & bearing from sweep geometry",

        "visual1.num": "01",

        "visual1.name": "THE RADAR SCREEN",

        "visual1.title": "A Round Screen With Sweeping Blip",

        "visual1.intro": "A marine radar screen is round, not square. The ship sits at the centre, North is up, and a bright green line sweeps around once every few seconds. Every target paints itself as a glowing dot at the angle and distance where the beam caught it.",

        "visual1.caption": "The PPI (Plan Position Indicator) is the iconic marine-radar display. Bright dots are echoes; rings show distance; the line is the antenna angle.",

        "fig2.title": "Range and bearing geometry",

        "fig2.ownShip": "our ship",

        "fig2.target": "target ship",

        "fig2.angle": "θ = 45° NE",

        "fig2.range": "range R = 3.6 nm",

        "fig2.formula": "R = c × t / 2",

        "fig2.north": "N",

        "fig2.heading": "heading",

        "fig2.bottom": "time of echo → range · antenna angle → bearing",

        "visual2.num": "02",

        "visual2.name": "RANGE AND BEARING",

        "visual2.title": "Distance from Time, Bearing from Angle",

        "visual2.intro": "Two simple measurements give a target's position. The time from pulse to echo gives the range. The angle of the antenna when the echo arrives gives the bearing. No GPS, no map — just the laws of physics.",

        "visual2.caption": "Range and bearing together place each target on the chart. Modern radars overlay the result on an electronic map.",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: PPI SWEEP",

        "visual3.title": "Watch the Green Sweep Paint the Targets",

        "visual3.intro": "The animation shows the radar beam sweeping round once. As the beam passes each target, a bright blip appears at the correct distance and bearing. The captain watches the screen and steers clear.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows the marine radar sweeping round once and painting targets on the PPI.",

        "visual3.cc1": "1. ANTENNA SPINS — a narrow beam rotates 360° once a few seconds",

        "visual3.cc2": "2. PULSE OUT — a short microwave pulse is fired each rotation",

        "visual3.cc3": "3. ECHO BACK — every target paints a bright blip on the screen",

        "visual3.cc4": "4. READ — range from distance, bearing from antenna angle",

        "visual3.caption": "A full 360° sweep in 2.5 seconds means a target is refreshed 24 times per minute — plenty for safe navigation.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "A Target 5 nm Away, Echo in 61.7 µs",

        "visual4.intro": "A ship is 5 nautical miles away. How long does the radar pulse take to come back?",

        "visual4.row1.label": "Target range R",

        "visual4.row1.value": "5 nm",

        "visual4.row2.label": "1 nm",

        "visual4.row2.value": "1.852 km",

        "visual4.row3.label": "Round-trip distance",

        "visual4.row3.formula": "2 × 9.26 km",

        "visual4.row4.label": "Echo time",

        "visual4.row4.value": "≈ 61.7 µs",

        "visual4.caption": "60 microseconds is faster than the blink of an eye. The radar electronics can time this easily — and so 5 nm away reads as a blip at the right ring on the screen.",

        "fig5.title": "Radar echo + AIS data overlay",

        "fig5.blip": "radar blip",

        "fig5.aisTri": "AIS triangle",

        "fig5.shipName": "M/V Aurora",

        "fig5.sog": "SOG 12.4 kn →",

        "fig5.cog": "COG 045° ↑",

        "fig5.bottom": "radar gives position · AIS gives identity and heading",

        "visual5.num": "05",

        "visual5.name": "RADAR + AIS",

        "visual5.title": "Radar Echo Plus AIS Data Equals Safer Sailing",

        "visual5.intro": "Modern bridges layer two systems. Radar echoes give the physical position of any ship. AIS (Automatic Identification System) shares each ship's GPS, name and heading. Together, they tell the captain not only where a ship is, but who it is and where it is going.",

        "visual5.caption": "AIS is digital — every ship broadcasts its data. Radar is physical — it senses real reflections. The two are far more powerful together than either is alone.",

        "visual6.app1.tag": "COMMERCIAL SHIPPING",

        "visual6.app1.title": "Cargo & Tanker Vessels",

        "visual6.app1.desc": "Every large commercial vessel carries marine radar by international regulation. Used continuously in fog, rain and night sailing.",

        "visual6.app2.tag": "FISHING",

        "visual6.app2.title": "Trawlers & Fleets",

        "visual6.app2.desc": "Fishing fleets use radar to find buoys, nets, other boats and the coastline at night. Modern fishing radar is cheap and rugged.",

        "visual6.app3.tag": "RECREATIONAL",

        "visual6.app3.title": "Sailboats & Yachts",

        "visual6.app3.desc": "Even small sailboats now carry radar. Cruisers and racers depend on it in busy harbours and crowded regattas.",

        "visual6.app4.tag": "MILITARY",

        "visual6.app4.title": "Warship Navigation",

        "visual6.app4.desc": "Naval radars come in many variants — navigation radar plus separate air-search and surface-search sets. Modern warships carry several at once.",

        "visual6.app5.tag": "HARBOR",

        "visual6.app5.title": "VTS Traffic Control",

        "visual6.app5.desc": "Vessel Traffic Services in busy harbours use shore-based marine radar to track every ship and guide them in and out safely.",

        "visual6.app6.tag": "SEARCH & RESCUE",

        "visual6.app6.title": "Survival Craft",

        "visual6.app6.desc": "Lifeboats and rescue craft carry small marine radar units for finding survivors, life rafts and other ships in heavy weather.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Where Marine Radar Is Used",

        "visual6.intro": "Marine radar shows up on every kind of vessel: cargo ships, fishing boats, yachts, warships. It is the most common navigation aid on the water.",

        "visual6.caption": "A marine radar on a small boat costs less than a smartphone today. On a large ship, it is the most important single navigation tool."

    },

    zh: {

        "page.title": "第20篇：航海雷达（Marine Radar）— 雷达探索者",

        "page.description": "第20篇：航海雷达如何帮船只导航和避碰。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2026年4月9日",

        "toc.title": "本页目录",

        "toc.s1": "雷达屏幕",

        "toc.s2": "距离与方位",

        "toc.s3": "扫描动画",

        "toc.s4": "详解例题",

        "toc.s5": "雷达 + AIS",

        "toc.s6": "应用领域",

        "article.title": "航海雷达",

        "article.subtitle": "大雾天轮船怎么不撞船？航海雷达替船长盯着周围海面。",

        "article.p1": "大雾天轮船怎么不撞船？航海雷达帮了大忙。",

        "article.p2": "航海雷达装在船上，扫描周围海面。发现其他船只、浮标、海岸线。测距离、方位，帮助避碰。像船长的眼睛，雾里也能看路。",

        "article.p3": "现代航海雷达还能叠加电子海图。要抗盐雾、抗摇摆、抗震动。是船舶必备的导航设备。对夜航、雾航尤其重要。",

        "article.p4": "航海雷达的物理和其他雷达一样——短脉冲、回波时间、天线角度——但显示屏独一无二：圆形 PPI 平面位置显示器，本船在中心，世界绕它转动。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "航海雷达帮船只看周围目标，雾天夜里也能避碰。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2026",

        "fig1.title": "航海雷达 PPI 显示屏",

        "fig1.target1": "目标 1",

        "fig1.target2": "目标 2",

        "fig1.target3": "目标 3",

        "fig1.ownShip": "本船",

        "fig1.north": "北",

        "fig1.range1": "1 海里",

        "fig1.range2": "2 海里",

        "fig1.range3": "3 海里",

        "fig1.bottom": "亮点 = 目标回波 · 距离与方位由扫描几何得出",

        "visual1.num": "01",

        "visual1.name": "雷达屏幕",

        "visual1.title": "圆形屏幕 + 扫描亮线",

        "visual1.intro": "航海雷达的屏幕是圆的，不是方的。本船在中心，北向上，每隔几秒一条亮绿色线扫一圈。每个目标在波束扫到的角度和距离位置上画出一个亮点。",

        "visual1.caption": "PPI（平面位置显示器）是航海雷达的标志——亮点是回波，圆环是距离，亮线是天线当前角度。",

        "fig2.title": "距离与方位几何",

        "fig2.ownShip": "本船",

        "fig2.target": "目标船",

        "fig2.angle": "θ = 45° 东北",

        "fig2.range": "距离 R = 3.6 海里",

        "fig2.formula": "R = c × t / 2",

        "fig2.north": "北",

        "fig2.heading": "航向",

        "fig2.bottom": "回波时间 → 距离 · 天线角度 → 方位",

        "visual2.num": "02",

        "visual2.name": "距离与方位",

        "visual2.title": "时间算距离，角度算方位",

        "visual2.intro": "两个简单测量就能定位目标。脉冲到回波的时间得到距离；回波到达时天线的角度得到方位。不用 GPS，不用地图——只有物理定律。",

        "visual2.caption": "距离 + 方位把每个目标标在海图上。现代雷达把结果直接叠加到电子海图里。",

        "visual3.num": "03",

        "visual3.name": "动画：PPI 扫描",

        "visual3.title": "看绿色扫描线点出目标",

        "visual3.intro": "动画展示雷达波束扫一圈。波束经过每个目标时，在正确距离和方位位置出现一个亮点。船长盯着屏幕避开它们。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示航海雷达扫描一圈并在 PPI 上点出目标。",

        "visual3.cc1": "1. 天线旋转 — 360° 窄波束几秒扫一圈",

        "visual3.cc2": "2. 脉冲发射 — 每转发射一段短微波脉冲",

        "visual3.cc3": "3. 回波回来 — 每个目标在屏幕上点一个亮点",

        "visual3.cc4": "4. 读取 — 距离从回波时间，方位从天线角度",

        "visual3.caption": "2.5 秒一圈，意味着每分钟刷新 24 次——足够安全航行。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "5 海里外目标，回波 61.7 微秒",

        "visual4.intro": "一艘船在 5 海里外。雷达脉冲来回要多久？",

        "visual4.row1.label": "目标距离 R",

        "visual4.row1.value": "5 海里",

        "visual4.row2.label": "1 海里",

        "visual4.row2.value": "1.852 km",

        "visual4.row3.label": "双程距离",

        "visual4.row3.formula": "2 × 9.26 km",

        "visual4.row4.label": "回波时间",

        "visual4.row4.value": "约 61.7 微秒",

        "visual4.caption": "60 微秒比眨眼还快。雷达电路能轻松测出来——5 海里外的目标就显示在对应圆环上。",

        "fig5.title": "雷达回波 + AIS 数据叠加",

        "fig5.blip": "雷达亮点",

        "fig5.aisTri": "AIS 三角",

        "fig5.shipName": "M/V Aurora",

        "fig5.sog": "航速 12.4 节 →",

        "fig5.cog": "航向 045° ↑",

        "fig5.bottom": "雷达给出位置 · AIS 给出身份和航向",

        "visual5.num": "05",

        "visual5.name": "雷达 + AIS",

        "visual5.title": "雷达回波加 AIS 数据 = 更安全航行",

        "visual5.intro": "现代驾驶台融合两套系统。雷达回波给出每艘船的物理位置。AIS（船舶自动识别系统）广播每艘船的 GPS、名字和航向。两者合起来，不仅知道船在哪，还知道是谁，要去哪。",

        "visual5.caption": "AIS 是数字的——每艘船广播自身数据。雷达是物理的——探测真实反射。两者合一，远比任一单独强。",

        "visual6.app1.tag": "商业航运",

        "visual6.app1.title": "货船与油轮",

        "visual6.app1.desc": "国际规定所有大型商船强制配备航海雷达。在雾、雨、夜航中持续使用。",

        "visual6.app2.tag": "渔业",

        "visual6.app2.title": "拖网渔船队",

        "visual6.app2.desc": "渔船队用雷达找浮标、渔网、其他船和海岸线。现代渔船雷达便宜耐用。",

        "visual6.app3.tag": "休闲",

        "visual6.app3.title": "帆船与游艇",

        "visual6.app3.desc": "如今连小帆船也装雷达。巡航和比赛船只都依赖它，尤其在繁忙港口和帆船赛。",

        "visual6.app4.tag": "军事",

        "visual6.app4.title": "军舰导航",

        "visual6.app4.desc": "海军雷达有多种——导航雷达加独立的空对空和对海搜索雷达。现代军舰同时携带多台。",

        "visual6.app5.tag": "港口",

        "visual6.app5.title": "船舶交通管制",

        "visual6.app5.desc": "繁忙港口的 VTS（船舶交通服务）使用岸基航海雷达追踪每艘船，引导它们安全进出。",

        "visual6.app6.tag": "搜救",

        "visual6.app6.title": "救生艇",

        "visual6.app6.desc": "救生艇和救援船携带小型航海雷达，用于在恶劣天气下寻找幸存者、救生筏和其他船只。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "航海雷达用在哪里",

        "visual6.intro": "各种船上都有航海雷达：货船、渔船、游艇、军舰。它是水上最常见的导航辅助设备。",

        "visual6.caption": "现代小船上的航海雷达比一部智能手机便宜。在大船上，它是最重要的单一导航工具。"

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
