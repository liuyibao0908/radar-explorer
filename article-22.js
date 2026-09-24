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

        "page.title": "Article 22: Automotive Radar — Radar Explorer",

        "page.description": "Article 22: How does automotive radar power adaptive cruise control and emergency braking? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "May 12, 2026",

        "toc.title": "On this page",

        "toc.s1": "Where it sits on the car",

        "toc.s2": "FMCW chirp",

        "toc.s3": "Range & velocity animation",

        "toc.s4": "Worked example",

        "toc.s5": "What it does",

        "toc.s6": "Applications",

        "article.title": "Automotive Radar",

        "article.subtitle": "Why can today's cars brake and cruise on their own? Because of a small millimeter-wave radar behind the bumper.",

        "article.p1": "Many cars today can brake automatically and cruise adaptively. What makes this possible? Automotive radar.",

        "article.p2": "Automotive radar mostly uses millimeter waves — small and low-cost. It mainly measures the distance and speed of vehicles ahead. It is used for adaptive cruise control, automatic emergency braking, and blind-spot monitoring.",

        "article.p3": "Millimeter waves penetrate rain and fog well, making them good for cars. It is like giving a car a pair of eyes that see ahead. Self-driving also combines lidar and cameras. Automotive radar is spreading fast.",

        "article.p4": "It is one of the core sensors of smart cars. Same physics as the speed radar (Doppler) and the bio-radar (tiny motion), but tuned for fast-moving metal plates a few meters to two hundred meters ahead.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "Automotive radar uses millimeter waves to measure distance and speed — a key sensor for smart driving.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2026",

        "fig1.title": "Car radar positions",

        "fig1.car": "our car",

        "fig1.front": "front",

        "fig1.corner": "corner",

        "fig1.blind": "blind",

        "fig1.target": "target",

        "fig1.bottom": "long-range front radar + corner + blind-spot → 360° sensing",

        "visual1.num": "01",

        "visual1.name": "WHERE IT SITS ON THE CAR",

        "visual1.title": "A Small Box Hidden Behind the Bumper",

        "visual1.intro": "Modern cars carry up to a dozen millimeter-wave radar modules. One looks forward for adaptive cruise and emergency braking; smaller ones sit at the corners for blind-spot and cross-traffic alerts.",

        "visual1.caption": "The forward radar is the most important. It sees 200 m ahead and tracks every car and truck in your lane.",

        "fig2.title": "FMCW chirp timing diagram",

        "fig2.tx": "TX",

        "fig2.rx": "RX",

        "fig2.label": "frequency",

        "fig2.delay": "t",

        "fig2.beat": "beat f_b → range",

        "fig2.bottom": "time delay → range · Doppler shift → speed",

        "visual2.num": "02",

        "visual2.name": "FMCW CHIRP",

        "visual2.title": "Frequency Chirp Measures Range and Speed",

        "visual2.intro": "Automotive radar does not send a single tone — it sends a chirp, a tone that ramps up in frequency over a few microseconds. The echo is a delayed copy of the chirp. Mixing them gives a beat frequency that encodes the round-trip time and thus the range.",

        "visual2.caption": "Modern FMCW chirps span several GHz in milliseconds. A single chip produces thousands of chirps per second — enough for crisp tracking.",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: RANGE & VELOCITY",

        "visual3.title": "Watch the Range and Speed Build Up",

        "visual3.intro": "The animation shows the radar chirp going out and the echo coming back. The beat between them gives distance. Tiny Doppler shifts give speed.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows the radar chirp and echo producing range and speed.",

        "visual3.cc1": "1. CHIRP — radar sweeps frequency 76–77 GHz",

        "visual3.cc2": "2. ECHO — car ahead reflects back, delayed",

        "visual3.cc3": "3. BEAT — mixed signal gives range",

        "visual3.cc4": "4. BRAKE — close range → automatic emergency brake",

        "visual3.caption": "FMCW radar is the same idea as a musical chord — the difference between two frequencies carries the information.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "A Car 50 m Ahead, Echo in 333 ns",

        "visual4.intro": "A car is 50 m ahead. How long does the radar echo take to come back?",

        "visual4.row1.label": "Distance R",

        "visual4.row1.value": "50 m",

        "visual4.row2.label": "Round-trip 2R",

        "visual4.row2.value": "100 m",

        "visual4.row3.label": "Echo time",

        "visual4.row3.formula": "2R / c",

        "visual4.row4.label": "Echo time",

        "visual4.row4.value": "≈ 333 ns",

        "visual4.caption": "333 nanoseconds is fast but easy for modern electronics. The radar fires thousands of chirps per second and averages the results for sub-meter accuracy.",

        "visual5.app1.tag": "ADAPTIVE CRUISE",

        "visual5.app1.title": "Maintain Distance",

        "visual5.app1.desc": "On the highway, the radar holds a constant gap to the car in front by adjusting throttle and brakes automatically.",

        "visual5.app2.tag": "AEB",

        "visual5.app2.title": "Auto Emergency Brake",

        "visual5.app2.desc": "If the gap shrinks too fast, the radar triggers full braking. Saves lives in slow city traffic.",

        "visual5.app3.tag": "BLIND SPOT",

        "visual5.app3.title": "Side & Rear Alerts",

        "visual5.app3.desc": "Corner radars watch for cars in adjacent lanes. A beep or light warns the driver before changing lanes.",

        "visual5.app4.tag": "LANE CHANGE",

        "visual5.app4.title": "Cross-Traffic Warning",

        "visual5.app4.desc": "When reversing out of a parking spot, rear radars detect cars approaching from the side and brake if needed.",

        "visual5.app5.tag": "PARKING",

        "visual5.app5.title": "Reverse & Park Assist",

        "visual5.app5.desc": "Short-range corner radars measure the gap to nearby cars and walls, guiding the driver into a tight space.",

        "visual5.app6.tag": "FUSION",

        "visual5.app6.title": "Sensor Fusion",

        "visual5.app6.desc": "Radar is best at distance and speed. Lidar is best at shape. Cameras read signs and lights. Smart cars fuse all three.",

        "visual5.num": "05",

        "visual5.name": "WHAT IT DOES",

        "visual5.title": "Three Functions from One Sensor",

        "visual5.intro": "One radar module powers three things at once: adaptive cruise control, automatic emergency braking, and blind-spot monitoring. Each uses the same range + speed measurement.",

        "visual5.caption": "Modern cars often have 5–8 radar modules covering 360° around the vehicle.",

        "visual6.app1.tag": "PASSENGER CARS",

        "visual6.app1.title": "Adaptive Cruise & AEB",

        "visual6.app1.desc": "Every modern mid-range car comes with forward radar. Luxury cars add corner and rear radars too.",

        "visual6.app2.tag": "TRUCKS",

        "visual6.app2.title": "Convoy Safety",

        "visual6.app2.desc": "Trucks use long-range radar for platooning: following closely to save fuel while the radar handles spacing automatically.",

        "visual6.app3.tag": "DRONES",

        "visual6.app3.title": "Obstacle Avoidance",

        "visual6.app3.desc": "Small mmWave radar chips give drones a tiny all-weather sense-and-avoid system. Lighter and cheaper than lidar.",

        "visual6.app4.tag": "ROBOTS",

        "visual6.app4.title": "Warehouse Navigation",

        "visual6.app4.desc": "Warehouse robots use radar to detect shelves, other robots, and humans in dim light and dust.",

        "visual6.app5.tag": "E-SCOOTERS",

        "visual6.app5.title": "Small Vehicle Safety",

        "visual6.app5.desc": "Cheap single-chip radars are starting to appear on electric bikes and scooters, warning of cars in the blind spot.",

        "visual6.app6.tag": "CHIPS",

        "visual6.app6.title": "Cheap mmWave ICs",

        "visual6.app6.desc": "Single-chip 77 GHz transceivers from TI, NXP, Infineon cost a few dollars each — making radar standard in every car.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Where Automotive Radar Is Used",

        "visual6.intro": "Automotive radar shows up in every smart car. The same chips power trucks, drones, robots and small vehicles.",

        "visual6.caption": "By 2025, automotive radar became the largest single use of millimetre-wave technology worldwide — more than military, weather and aerospace combined."

    },

    zh: {

        "page.title": "第22篇：汽车雷达（Automotive Radar）— 雷达探索者",

        "page.description": "第22篇：汽车毫米波雷达如何驱动自适应巡航和自动紧急刹车。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2026年5月12日",

        "toc.title": "本页目录",

        "toc.s1": "装在车的哪里",

        "toc.s2": "FMCW 调频",

        "toc.s3": "距离与速度动画",

        "toc.s4": "详解例题",

        "toc.s5": "它能做什么",

        "toc.s6": "应用领域",

        "article.title": "汽车雷达",

        "article.subtitle": "现代汽车怎么做到自动刹车和自适应巡航？因为保险杠后面藏着毫米波雷达。",

        "article.p1": "现在很多汽车能自动刹车、自适应巡航，靠的是什么？汽车雷达。",

        "article.p2": "汽车雷达多用毫米波，体积小、成本低。主要测前方车辆距离、速度。用于自适应巡航、自动紧急刹车、盲区监测。",

        "article.p3": "毫米波穿透雨雾能力强，适合车载。像给汽车装了一双提前看路的眼睛。自动驾驶还要结合激光雷达、摄像头。汽车雷达正在快速普及。",

        "article.p4": "它是智能汽车的核心传感器之一。物理和测速雷达（多普勒）、生物雷达（微弱动作）一样，只是针对几十米到两百米外快速移动的金属板。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "汽车雷达用毫米波测距离和速度，是智能驾驶的关键传感器。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2026",

        "fig1.title": "汽车雷达位置",

        "fig1.car": "本车",

        "fig1.front": "前方",

        "fig1.corner": "角部",

        "fig1.blind": "盲区",

        "fig1.target": "目标",

        "fig1.bottom": "远程前向 + 角部 + 盲区 → 360° 感知",

        "visual1.num": "01",

        "visual1.name": "装在车的哪里",

        "visual1.title": "保险杠后的小盒子",

        "visual1.intro": "现代汽车携带多达十几个毫米波雷达模块。一个朝前看，自适应巡航和紧急刹车；几个小的放在车角，处理盲区和横向交通警报。",

        "visual1.caption": "前向雷达最重要。它能看到 200 米外，跟踪你车道里所有车辆和卡车。",

        "fig2.title": "FMCW 调频时序图",

        "fig2.tx": "TX",

        "fig2.rx": "RX",

        "fig2.label": "频率",

        "fig2.delay": "t",

        "fig2.beat": "差频 f_b → 距离",

        "fig2.bottom": "时延 → 距离 · 多普勒频移 → 速度",

        "visual2.num": "02",

        "visual2.name": "FMCW 调频",

        "visual2.title": "调频波同时测距离和速度",

        "visual2.intro": "汽车雷达不发单音——它发调频波，频率在几微秒内线性升高。回波是延迟的拷贝。把它们混频得到差频，差频编码了双程时间，也就是距离。",

        "visual2.caption": "现代 FMCW 调频在几毫秒内扫几 GHz。单芯片每秒产生上千次调频——足够锐利地跟踪。",

        "visual3.num": "03",

        "visual3.name": "动画：距离和速度",

        "visual3.title": "看距离和速度如何生成",

        "visual3.intro": "动画展示雷达调频波发出，回波返回。它们之间的差频给出距离。多普勒频移给出速度。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示雷达调频波与回波生成距离和速度。",

        "visual3.cc1": "1. 调频 — 雷达在 76–77 GHz 扫频",

        "visual3.cc2": "2. 回波 — 前方车辆反射回来，有延迟",

        "visual3.cc3": "3. 差频 — 混频得到差频信号，导出距离",

        "visual3.cc4": "4. 刹车 — 距离过近 → 自动紧急刹车",

        "visual3.caption": "FMCW 雷达的原理就像音乐的和弦——两频率之差携带信息。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "前方 50 米的车，回波 333 纳秒",

        "visual4.intro": "前方一辆车 50 米远。雷达回波要多久回来？",

        "visual4.row1.label": "距离 R",

        "visual4.row1.value": "50 m",

        "visual4.row2.label": "双程 2R",

        "visual4.row2.value": "100 m",

        "visual4.row3.label": "回波时间",

        "visual4.row3.formula": "2R / c",

        "visual4.row4.label": "回波时间",

        "visual4.row4.value": "约 333 ns",

        "visual4.caption": "333 纳秒很快，但现代电子很容易处理。雷达每秒发上千次调频，平均后精度可达亚米级。",

        "visual5.app1.tag": "自适应巡航",

        "visual5.app1.title": "保持距离",

        "visual5.app1.desc": "高速上，雷达自动保持与前车的安全距离，根据情况自动调整油门和刹车。",

        "visual5.app2.tag": "AEB",

        "visual5.app2.title": "自动紧急刹车",

        "visual5.app2.desc": "距离缩得太快，雷达触发全力刹车。在慢速城市路况下能救命。",

        "visual5.app3.tag": "盲区",

        "visual5.app3.title": "侧方与后方警报",

        "visual5.app3.desc": "角部雷达观察相邻车道是否有车。变道前会发出声音或灯光警告。",

        "visual5.app4.tag": "变道",

        "visual5.app4.title": "横向交通警报",

        "visual5.app4.desc": "从停车位倒出时，后方雷达检测侧面来车，必要时自动刹车。",

        "visual5.app5.tag": "泊车",

        "visual5.app5.title": "倒车与泊车辅助",

        "visual5.app5.desc": "短程角部雷达测量与附近车辆和墙壁的距离，引导司机进入狭窄车位。",

        "visual5.app6.tag": "融合",

        "visual5.app6.title": "传感器融合",

        "visual5.app6.desc": "雷达擅长度和速度。激光雷达擅长度形。摄像头读路标和灯光。智能车融合三者。",

        "visual5.num": "05",

        "visual5.name": "它能做什么",

        "visual5.title": "一个传感器，三种功能",

        "visual5.intro": "一个雷达模块同时实现三件事：自适应巡航、自动紧急刹车、盲区监测。都用同一种距离 + 速度测量。",

        "visual5.caption": "现代汽车常有 5–8 个雷达模块，覆盖车辆四周 360°。",

        "visual6.app1.tag": "乘用车",

        "visual6.app1.title": "自适应巡航与 AEB",

        "visual6.app1.desc": "每辆现代中端车都配前向雷达。豪华车还加角部和后方雷达。",

        "visual6.app2.tag": "卡车",

        "visual6.app2.title": "车队安全",

        "visual6.app2.desc": "卡车用远程雷达组队跟车——近距离跟随省油，雷达自动控距。",

        "visual6.app3.tag": "无人机",

        "visual6.app3.title": "避障",

        "visual6.app3.desc": "小型毫米波雷达芯片给无人机提供微型全天候感知与避障系统，比激光雷达更轻更便宜。",

        "visual6.app4.tag": "机器人",

        "visual6.app4.title": "仓库导航",

        "visual6.app4.desc": "仓库机器人在昏暗和灰尘中用雷达检测货架、其他机器人和人。",

        "visual6.app5.tag": "电动滑板车",

        "visual6.app5.title": "小型车安全",

        "visual6.app5.desc": "廉价单芯片雷达开始出现在电动自行车和滑板车上，警告盲区里的汽车。",

        "visual6.app6.tag": "芯片",

        "visual6.app6.title": "廉价毫米波 IC",

        "visual6.app6.desc": "TI、NXP、英飞凌的单芯片 77 GHz 收发器每个仅几美元——雷达成为每辆车的标准配置。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "汽车雷达用在哪里",

        "visual6.intro": "汽车雷达出现在每一辆智能车上。同样的芯片驱动卡车、无人机、机器人和小型车辆。",

        "visual6.caption": "到 2025 年，汽车雷达成为全球毫米波技术最大单一应用——超过军用、气象和航空航天之和。"

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
