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

        "page.title": "Article 21: Weather Radar — Radar Explorer",

        "page.description": "Article 21: How does weather radar measure rain and storms? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "Dec 5, 2025",

        "toc.title": "On this page",

        "toc.s1": "Rain, snow, hail",

        "toc.s2": "Three moments",

        "toc.s3": "Rainfall animation",

        "toc.s4": "Worked example",

        "toc.s5": "The national network",

        "toc.s6": "Applications",

        "article.title": "Weather Radar",

        "article.subtitle": "Where does the rain map in a weather forecast come from? From weather radar.",

        "article.p1": "Where does the rain map in a weather forecast come from? From weather radar.",

        "article.p2": "Weather radar is built to detect precipitation particles. It measures echo strength, velocity, and spectrum width. Dual polarization can tell apart rain, snow, and hail. Networking covers a large area and stitches together a rain map.",

        "article.p3": "Think of giving the sky a CT scan — where the rain is, how strong, and where it's going. Weather radar is a core tool for forecasting and warning. Phased-array weather radar scans even faster.",

        "article.p4": "Its targets are different from normal radar — it watches weather. The Doppler shift that gives speed for a car is the same effect that tracks a storm. The radargram that maps buried pipes also maps rainfall.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "Weather radar focuses on precipitation and is a core tool for forecasts and warnings.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2025",

        "fig1.title": "Different precipitation echoes",

        "fig1.radar": "RADAR",

        "fig1.rain": "rain",

        "fig1.snow": "snow",

        "fig1.hail": "hail",

        "fig1.rainR": "rain Z 30",

        "fig1.snowZ": "snow Z 20",

        "fig1.hailZ": "hail Z 60",

        "fig1.bottom": "different shape → different reflectivity Z",

        "visual1.num": "01",

        "visual1.name": "RAIN, SNOW, HAIL",

        "visual1.title": "Different Precipitation Reflects Differently",

        "visual1.intro": "Rain, snow and hail all reflect microwaves back, but each does it differently. A drop of rain returns a moderate echo. Snowflakes — lighter and more irregular — return less. Hailstones — heavy and wet — return a lot.",

        "visual1.caption": "Dual-polarization radars send and receive in two directions at once, telling apart rain, snow and hail from the shape of the echo.",

        "visual2.left.tag": "REFLECTIVITY Z",

        "visual2.left.name": "echo power",

        "visual2.left.line": "how much",

        "visual2.left.line2": "how heavy",

        "visual2.left.bar": "Z",

        "visual2.mid.tag": "VELOCITY V",

        "visual2.mid.name": "Doppler shift",

        "visual2.mid.line": "how fast",

        "visual2.mid.line2": "which way",

        "visual2.mid.bar": "V",

        "visual2.right.tag": "SPECTRUM WIDTH W",

        "visual2.right.name": "turbulence",

        "visual2.right.line": "how rough",

        "visual2.right.line2": "how varied",

        "visual2.right.bar": "W",

        "visual2.num": "02",

        "visual2.name": "THREE MOMENTS",

        "visual2.title": "Reflectivity, Velocity, Spectrum Width",

        "visual2.intro": "Modern weather radars report three measurements per pixel. Reflectivity (Z) tells how much echo came back. Velocity (V) tells how fast the rain is moving, via Doppler. Spectrum width (W) tells how turbulent the wind is.",

        "visual2.caption": "Z + V + W together tell the meteorologist everything: how heavy, how fast, how rough.",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: RAINFALL SCAN",

        "visual3.title": "Watch the Rain Map Build Up",

        "visual3.intro": "The animation shows the radar dish tilting up to scan the atmosphere. Each elevation sweep fills in the rain map — light rain, heavy rain, snow, hail.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows the weather radar sweeping the sky and the rain map building up.",

        "visual3.cc1": "1. SCAN — weather radar tilts through the atmosphere",

        "visual3.cc2": "2. ECHO — raindrops and snowflakes reflect back",

        "visual3.cc3": "3. PAINT — bright spots fill the rainfall map",

        "visual3.cc4": "4. FORECAST — track motion to predict where the storm goes next",

        "visual3.caption": "A complete 3D scan of the sky takes 5 minutes. Doppler radars do it in seconds, but at the cost of detail.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "A Raindrop 50 km Away, Echo in 333 µs",

        "visual4.intro": "A rain cell is 50 km away. How long does the radar echo take to come back?",

        "visual4.row1.label": "Distance to rain D",

        "visual4.row1.value": "50 km",

        "visual4.row2.label": "Round-trip 2D",

        "visual4.row2.value": "100 km",

        "visual4.row3.label": "Echo time",

        "visual4.row3.formula": "2D / c",

        "visual4.row4.label": "Echo time",

        "visual4.row4.value": "≈ 333 µs",

        "visual4.caption": "A third of a millisecond is fast — but easy for the radar to time. The whole 3D scan takes only a few minutes.",

        "fig5.title": "Network of weather radars",

        "fig5.title2": "NEXRAD-style network",

        "fig5.bottom": "many radars → stitched rainfall map → national forecast",

        "visual5.num": "05",

        "visual5.name": "THE NATIONAL NETWORK",

        "visual5.title": "Many Radars Together Cover a Country",

        "visual5.intro": "One radar covers about 200 km. A whole country needs dozens — sometimes hundreds — stitched into a national network. Their overlapping coverage produces a continuous rainfall map from coast to coast.",

        "visual5.caption": "The US NEXRAD network has 159 radars. China, Europe, Japan and many other countries run similar networks. The data is shared in real time.",

        "visual6.app1.tag": "FORECASTING",

        "visual6.app1.title": "Daily Weather Reports",

        "visual6.app1.desc": "The colored rain map you see on TV and apps is a weather radar composite, refreshed every few minutes.",

        "visual6.app2.tag": "SEVERE WEATHER",

        "visual6.app2.title": "Tornado & Hail Warnings",

        "visual6.app2.desc": "Doppler radar sees the rotating winds inside a thunderstorm — the mesocyclone that becomes a tornado. Warnings come 10–20 minutes before touchdown.",

        "visual6.app3.tag": "AVIATION",

        "visual6.app3.title": "Pilot Weather Briefings",

        "visual6.app3.desc": "Pilots get radar images before takeoff to see thunderstorms, icing zones, and clear routes through the sky.",

        "visual6.app4.tag": "HYDROLOGY",

        "visual6.app4.title": "Flood Forecasting",

        "visual6.app4.desc": "Hourly rainfall totals from radar feed river flood models. Warnings can come hours before water rises.",

        "visual6.app5.tag": "RESEARCH",

        "visual6.app5.title": "Storm Structure",

        "visual6.app5.desc": "Researchers use weather radar to study hurricane eyes, supercell rotation, snow bands and tornado formation in fine detail.",

        "visual6.app6.tag": "PHASED ARRAY",

        "visual6.app6.title": "Faster Storm Tracking",

        "visual6.app6.desc": "New phased-array weather radars scan the whole sky in seconds instead of minutes, tracking fast-moving storms in real time.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Where Weather Radar Is Used",

        "visual6.intro": "Weather radar shows up wherever weather matters: daily forecasts, storm warnings, aviation, hydrology, research.",

        "visual6.caption": "A phased-array weather radar is one of the most expensive civilian radars in the world — and one of the most used."

    },

    zh: {

        "page.title": "第21篇：气象雷达（Weather Radar）— 雷达探索者",

        "page.description": "第21篇：气象雷达如何测量降雨和风暴。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2025年12月5日",

        "toc.title": "本页目录",

        "toc.s1": "雨、雪、冰雹",

        "toc.s2": "三个矩",

        "toc.s3": "降雨扫描动画",

        "toc.s4": "详解例题",

        "toc.s5": "全国网络",

        "toc.s6": "应用领域",

        "article.title": "气象雷达",

        "article.subtitle": "天气预报里的降雨图是从哪儿来的？从气象雷达来的。",

        "article.p1": "天气预报里的降雨图，是怎么来的？靠气象雷达。",

        "article.p2": "气象雷达专门探测降水粒子。测回波强度、速度、谱宽。双偏振还能区分雨、雪、冰雹。组网覆盖大范围，拼成降雨图。",

        "article.p3": "像给天空拍CT，看雨在哪、多强、往哪走。气象雷达是预报和预警的核心工具。相控阵气象雷达扫描更快。",

        "article.p4": "它的目标和普通雷达不同——专看天气。给汽车测速的多普勒频移，也能追踪风暴。把地下管线画成雷达图的雷达，也能画雨。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "气象雷达专测降水，是天气预报和预警的核心工具。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2025",

        "fig1.title": "不同降水的回波",

        "fig1.radar": "雷达",

        "fig1.rain": "雨",

        "fig1.snow": "雪",

        "fig1.hail": "冰雹",

        "fig1.rainR": "雨 Z 30",

        "fig1.snowZ": "雪 Z 20",

        "fig1.hailZ": "冰雹 Z 60",

        "fig1.bottom": "形状不同 → 反射率 Z 不同",

        "visual1.num": "01",

        "visual1.name": "雨、雪、冰雹",

        "visual1.title": "不同降水反射不同",

        "visual1.intro": "雨、雪、冰雹都能反射微波，但表现不一样。雨滴反射中等强度。雪花——更轻、更不规则——反射更弱。冰雹——又重又湿——反射很强。",

        "visual1.caption": "双偏振雷达同时在两个方向收发，根据回波形状区分雨、雪、冰雹。",

        "visual2.left.tag": "反射率 Z",

        "visual2.left.name": "回波强度",

        "visual2.left.line": "多少",

        "visual2.left.line2": "多强",

        "visual2.left.bar": "Z",

        "visual2.mid.tag": "速度 V",

        "visual2.mid.name": "多普勒偏移",

        "visual2.mid.line": "多快",

        "visual2.mid.line2": "哪边",

        "visual2.mid.bar": "V",

        "visual2.right.tag": "谱宽 W",

        "visual2.right.name": "湍流",

        "visual2.right.line": "多乱",

        "visual2.right.line2": "多变化",

        "visual2.right.bar": "W",

        "visual2.num": "02",

        "visual2.name": "三个矩",

        "visual2.title": "反射率、速度、谱宽",

        "visual2.intro": "现代气象雷达每个像素报告三个测量：反射率（Z）显示回波多少；速度（V）通过多普勒显示雨多快；谱宽（W）显示风多乱。",

        "visual2.caption": "Z + V + W 三者一起告诉气象学家：多大、多快、多乱。",

        "visual3.num": "03",

        "visual3.name": "动画：降雨扫描",

        "visual3.title": "看降雨图生成",

        "visual3.intro": "动画展示雷达天线向上倾斜扫描大气。每次仰角扫描填充降雨图——小雨、大雨、雪、冰雹。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示气象雷达扫描天空、降雨图生成。",

        "visual3.cc1": "1. 扫描 — 气象雷达向上倾斜扫大气",

        "visual3.cc2": "2. 回波 — 雨滴和雪花反射回来",

        "visual3.cc3": "3. 填充 — 亮点填满降雨图",

        "visual3.cc4": "4. 预报 — 追踪运动预测风暴走向",

        "visual3.caption": "完整扫描天空 5 分钟。多普勒雷达几秒，但损失细节。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "50 公里外的雨，回波 333 微秒",

        "visual4.intro": "一团雨在 50 公里外。雷达回波要多久回来？",

        "visual4.row1.label": "到雨的距离 D",

        "visual4.row1.value": "50 km",

        "visual4.row2.label": "双程距离 2D",

        "visual4.row2.value": "100 km",

        "visual4.row3.label": "回波时间",

        "visual4.row3.formula": "2D / c",

        "visual4.row4.label": "回波时间",

        "visual4.row4.value": "约 333 µs",

        "visual4.caption": "三毫秒多——很快，但雷达测起来轻松。整个 3D 扫描只要几分钟。",

        "fig5.title": "气象雷达网络",

        "fig5.title2": "NEXRAD 式网络",

        "fig5.bottom": "多部雷达 → 拼接降雨图 → 全国预报",

        "visual5.num": "05",

        "visual5.name": "全国网络",

        "visual5.title": "多部雷达覆盖全国",

        "visual5.intro": "一部雷达覆盖约 200 公里。全国需要几十甚至上百部拼成网络。它们的覆盖重叠，形成全国范围的连续降雨图。",

        "visual5.caption": "美国 NEXRAD 网络有 159 部雷达。中国、欧洲、日本等国都有类似网络，数据实时共享。",

        "visual6.app1.tag": "预报",

        "visual6.app1.title": "日常天气预报",

        "visual6.app1.desc": "你在电视和 App 上看到的彩色降雨图就是气象雷达合成图，每几分钟更新。",

        "visual6.app2.tag": "强天气",

        "visual6.app2.title": "龙卷风与冰雹预警",

        "visual6.app2.desc": "多普勒雷达看到雷暴内的旋转风——变成龙卷风的中气旋。预警能在龙卷风落地前 10–20 分钟发出。",

        "visual6.app3.tag": "航空",

        "visual6.app3.title": "飞行员气象通报",

        "visual6.app3.desc": "飞行员起飞前看雷达图，了解雷暴、结冰区，找到天空中清晰的航线。",

        "visual6.app4.tag": "水文",

        "visual6.app4.title": "洪水预报",

        "visual6.app4.desc": "雷达每小时雨量统计喂给河流洪水模型。预警能在水位上涨前几小时发出。",

        "visual6.app5.tag": "研究",

        "visual6.app5.title": "风暴结构",

        "visual6.app5.desc": "研究者用气象雷达精细研究飓风眼、超单体旋转、雪带和龙卷风形成。",

        "visual6.app6.tag": "相控阵",

        "visual6.app6.title": "更快风暴追踪",

        "visual6.app6.desc": "新式相控阵气象雷达几秒内扫遍整个天空，实时追踪快速移动的风暴。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "气象雷达用在哪里",

        "visual6.intro": "凡是要看天气的都看气象雷达：日常预报、风暴预警、航空、水文、研究。",

        "visual6.caption": "一部相控阵气象雷达是世界上最贵的民用雷达之一——也是用得最多的。"

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
