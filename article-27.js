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

        "page.title": "Article 27: Why Is It Called Phase Control? — Radar Explorer",

        "page.description": "Article 27: What is phase in a wave, and how does phase control steer a radar beam? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "Apr 22, 2026",

        "toc.title": "On this page",

        "toc.s1": "Peaks and valleys",

        "toc.s2": "Adding waves: in-phase vs opposite",

        "toc.s3": "Phase add & cancel animation",

        "toc.s4": "Worked example",

        "toc.s5": "Why phase control is fast",

        "toc.s6": "Applications",

        "article.title": "Why Is It Called Phase Control?",

        "article.subtitle": "The word “phase” hides in plain sight. It is the key trick behind every phased-array radar.",

        "article.p1": "The key to a phased array is the word “phase.” What exactly is phase?",

        "article.p2": "A wave has peaks and valleys. Phase describes where the wave is in its cycle. When multiple waves add up, matching phases strengthen each other, and opposite phases cancel out. By controlling the phase of each element's wave, the beam can be steered in a certain direction.",

        "article.p3": "Think of pushing a swing: if everyone pushes at the same time, it works best; if they push at different times, it gets messy. Phase control needs no mechanical turning, so it's called “electronic scanning.” The faster the phase changes, the faster the beam switches.",

        "article.p4": "This is why phased arrays react so fast. Phase control can also form multiple beams to track many targets at once. The same trick is used in 5G base stations, Wi-Fi routers, and medical ultrasound.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "Phase control adjusts when each element sends its wave, steering the beam where you want.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2026",

        "fig1.title": "Wave peaks and valleys",

        "fig1.time": "time",

        "fig1.peak": "peak",

        "fig1.valley": "valley",

        "fig1.phase": "phase",

        "fig1.bottom": "phase = angle in the cycle, 0 to 360°",

        "visual1.num": "01",

        "visual1.name": "PEAKS AND VALLEYS",

        "visual1.title": "Every Wave Has a Position in Its Cycle",

        "visual1.intro": "Imagine watching the sea surface. Some moments the water is high (peak), other moments it is low (valley). Phase is the angle that says, “where are we between two peaks?” It runs from 0° at one peak, through 90°, 180° at the next valley, 270°, and back to 360° at the next peak.",

        "visual1.caption": "Phase is the same idea for any wave: radio, sound, ocean, or even a swinging pendulum. The number just tells you the position in the cycle.",

        "fig2.title": "Phase add and cancel",

        "fig2.top": "SAME PHASE — doubles",

        "fig2.bot": "OPPOSITE PHASE — cancels",

        "fig2.a": "A",

        "fig2.b": "B",

        "fig2.sum": "A + B",

        "fig2.a2": "A",

        "fig2.b2": "B",

        "fig2.zero": "A + B = 0",

        "fig2.bottom": "same phase = louder · opposite phase = silent",

        "visual2.num": "02",

        "visual2.name": "IN-PHASE VS OPPOSITE",

        "visual2.title": "Two Waves: Same Phase, the Sum Doubles",

        "visual2.intro": "Add two waves at the same phase and the heights stack: peak plus peak is a double-height peak. Add them at opposite phase and they cancel: peak plus valley is nothing. This add-or-cancel rule is what makes phase control so powerful — it decides whether each point in space hears loud or quiet.",

        "visual2.caption": "The phase difference is the lever: zero difference = loud, 180° difference = silent, anything in between = partial echo.",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: PHASE ADD & CANCEL",

        "visual3.title": "Watch Two Waves Add, Then Cancel",

        "visual3.intro": "The animation shows two waves traveling together. When they are in phase, the peaks stack up and the wave looks big. As one wave slides forward, peaks meet valleys and the wave looks smaller. At 180° apart, the wave vanishes.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows two waves adding when in phase, cancelling when 180° apart.",

        "visual3.cc1": "1. PEAKS — wave A oscillates between peak and valley",

        "visual3.cc2": "2. ADD — wave B in phase → louder wave",

        "visual3.cc3": "3. CANCEL — shift phase 180° → silence",

        "visual3.cc4": "4. STEER — small phase delays change beam power",

        "visual3.caption": "For a phased array, the same math happens at every point in space: in-phase direction = strong echo, opposite direction = no echo.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "Adding Three Waves at 0°, 90°, 180°",

        "visual4.intro": "Three waves arrive at the same point with phases 0°, 90°, and 180°. The amplitude of each is 1. What is the sum?",

        "visual4.row1.label": "Wave A",

        "visual4.row1.value": "phase 0°",

        "visual4.row2.label": "Wave B",

        "visual4.row2.value": "phase 90°",

        "visual4.row3.label": "Wave C",

        "visual4.row3.formula": "phase 180°",

        "visual4.row4.label": "A + B + C",

        "visual4.row4.value": "≈ A",

        "visual4.caption": "A (cos 0 = 1) + B (cos 90 = 0) + C (cos 180 = −1) = 1 + 0 − 1 = 0 in vertical, but B still adds vertically. This is how phased-array beam shaping works: every angle gets a different mix.",

        "visual5.app1.tag": "SPEED",

        "visual5.app1.title": "Microsecond Switching",

        "visual5.app1.desc": "Mechanical antennas take seconds to swing. Phase shifters are tiny electrical voltages that change in microseconds. The beam can scan 100× faster.",

        "visual5.app2.tag": "RELIABLE",

        "visual5.app2.title": "No Moving Parts",

        "visual5.app2.desc": "Phase shifters are solid-state electronics. No motors, no bearings, no gears. Less wear, less vibration, longer life — even in space.",

        "visual5.app3.tag": "PRECISE",

        "visual5.app3.title": "Sub-Degree Control",

        "visual5.app3.desc": "Phase shifters resolve to 5° or 1° steps — even 0.1° in modern designs. That gives the beam a precision of a fraction of a degree.",

        "visual5.app4.tag": "MULTI",

        "visual5.app4.title": "Many Beams at Once",

        "visual5.app4.desc": "Each phase setting makes a beam in a different direction. With enough elements, the array can form dozens of beams at the same time, each tracking a different target.",

        "visual5.app5.tag": "ADAPTIVE",

        "visual5.app5.title": "Adaptive Beams",

        "visual5.app5.desc": "The phase settings can be updated thousands of times per second. The beam can chase a target, dodge a jammer, or shape itself to skip a known clutter spot.",

        "visual5.app6.tag": "LOW-POWER",

        "visual5.app6.title": "Tiny Voltages",

        "visual5.app6.desc": "A phase shifter only needs a few volts and microwatts to set its state. The whole beam-forming network draws very little extra power.",

        "visual5.num": "05",

        "visual5.name": "WHY IT'S FAST",

        "visual5.title": "No Spinning, No Waiting, Just Voltage",

        "visual5.intro": "Phase control is fast because it is electrical. Three reasons make phased arrays outrun any mechanical radar.",

        "visual5.caption": "Mechanical motion is limited by inertia and gravity. Electronic phase is limited only by how fast transistors can flip.",

        "visual6.app1.title": "Military Radar",
        "visual6.app1.tag": "AESA",

        "visual6.app1.desc": "AESA radars on F-35, F-22, Aegis cruisers — phase control lets one radar track 30+ targets, jam, and communicate at once.",

        "visual6.app2.tag": "5G",

        "visual6.app2.title": "5G / 6G Base Stations",

        "visual6.app2.desc": "Cell towers use phase arrays to steer signals to each phone. Same idea as radar but in reverse: the phone is the “target,” the signal is the beam.",

        "visual6.app3.tag": "AUDIO",

        "visual6.app3.title": "Speaker Arrays",

        "visual6.app3.desc": "Concert halls use line arrays of small speakers with phase delays. The sound beam can be aimed at the audience — and away from the walls.",

        "visual6.app4.tag": "ULTRASOUND",

        "visual6.app4.title": "Medical Ultrasound",

        "visual6.app4.desc": "The probe sends pulses with controlled phase. The echoes combine to form a sharp image of your organs — no moving parts inside the probe.",

        "visual6.app5.tag": "WIFI",

        "visual6.app5.title": "Wi-Fi Beamforming",

        "visual6.app5.desc": "Modern Wi-Fi 6 routers have 4 to 8 antennas. They phase-shift the signal to follow your laptop across the room.",

        "visual6.app6.tag": "ACOUSTICS",

        "visual6.app6.title": "Active Noise Cancel",

        "visual6.app6.desc": "Headphones use the same trick. A mic picks up the noise, a circuit adds a wave with opposite phase, and you hear silence.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Where Phase Control Shows Up",

        "visual6.intro": "Phase control is everywhere in modern tech. Anywhere a beam of energy needs to point somewhere specific, phase shifting is the trick.",

        "visual6.caption": "When you see a wireless device that follows you around or a doctor getting a clean ultrasound image, you are seeing phase control in action."

    },

    zh: {

        "page.title": "第27篇：为什么叫“相位”控制？— 雷达探索者",

        "page.description": "第27篇：波里的相位是什么，相位控制如何引导雷达波束。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2026年4月22日",

        "toc.title": "本页目录",

        "toc.s1": "波峰和波谷",

        "toc.s2": "波叠加：同相 vs 反相",

        "toc.s3": "相位叠加与抵消动画",

        "toc.s4": "详解例题",

        "toc.s5": "为什么快",

        "toc.s6": "应用领域",

        "article.title": "为什么叫“相位”控制？",

        "article.subtitle": "“相位”这个词藏在每个相控阵雷达背后。",

        "article.p1": "相控阵的关键在“相位”两个字，相位到底是什么？",

        "article.p2": "波有波峰和波谷，相位描述波在周期里的位置。多个波叠加时，相位一致会增强，相位相反会抵消。控制每个阵元发波的相位，就能让波束偏向某个方向。",

        "article.p3": "像多人推秋千，同时推力气最大，错开推就乱。相位控制不需要机械转动，所以叫“电子扫描”。相位变化越快，波束切换越快。",

        "article.p4": "这就是相控阵反应快的根本原因。相位控制还可以形成多个波束，同时跟踪多目标。同样的招数也用在 5G 基站、Wi-Fi 路由器和医用超声里。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "相位控制就是调整每个阵元发波的时间，让波束指向想去的方向。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2026",

        "fig1.title": "波峰与波谷",

        "fig1.time": "时间",

        "fig1.peak": "波峰",

        "fig1.valley": "波谷",

        "fig1.phase": "相位",

        "fig1.bottom": "相位 = 周期里的角度，0 到 360°",

        "visual1.num": "01",

        "visual1.name": "波峰和波谷",

        "visual1.title": "每个波在周期里都有一个位置",

        "visual1.intro": "想象看海面：有时水高（波峰），有时水低（波谷）。相位就是“我们在两个波峰之间的哪个位置”这个角度。从一个波峰 0°，经过 90°，到下一个波谷 180°，270°，再到下一个波峰 360°。",

        "visual1.caption": "任何波都有相位：无线电、声波、海浪、摆动钟摆。数字只告诉你“现在在周期的哪一点”。",

        "fig2.title": "相位叠加与抵消",

        "fig2.top": "同相 — 双倍",

        "fig2.bot": "反相 — 抵消",

        "fig2.a": "A",

        "fig2.b": "B",

        "fig2.sum": "A + B",

        "fig2.a2": "A",

        "fig2.b2": "B",

        "fig2.zero": "A + B = 0",

        "fig2.bottom": "同相 = 更大声 · 反相 = 沉默",

        "visual2.num": "02",

        "visual2.name": "同相 vs 反相",

        "visual2.title": "两个波：同相时叠加成双倍",

        "visual2.intro": "两个相位相同的波叠加：波峰加波峰 = 双倍波峰。两个相位相反的波叠加：波峰加波谷 = 没了。这个“加”或“消”的开关，就是相位控制的力量——它决定空间的每个点是“响”还是”静”。",

        "visual2.caption": "相位差就是那根杠杆：差 0 = 强，差 180° = 静，中间 = 部分回声。",

        "visual3.num": "03",

        "visual3.name": "动画：相位叠加与抵消",

        "visual3.title": "看两个波相加，再相互抵消",

        "visual3.intro": "动画展示两列波一起传播。同相时波峰叠波峰，波形变得很高；一个波往前挪后，波峰遇波谷，波形变小；差 180° 时波完全消失。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示两波同相相加，反相抵消。",

        "visual3.cc1": "1. 波峰 — 波 A 在波峰波谷间摆动",

        "visual3.cc2": "2. 叠加 — 波 B 同相 → 波形变大",

        "visual3.cc3": "3. 抵消 — 相位差 180° → 沉默",

        "visual3.cc4": "4. 引导 — 小的相位延迟改变波束强度",

        "visual3.caption": "对相控阵，同样的算术发生在空间每个点：同相方向 = 强回波，反相方向 = 零回波。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "三个波 0°、90°、180° 相加",

        "visual4.intro": "三列波同时到达一点，相位分别是 0°、90°、180°，每列幅度都是 1。总和是多少？",

        "visual4.row1.label": "波 A",

        "visual4.row1.value": "相位 0°",

        "visual4.row2.label": "波 B",

        "visual4.row2.value": "相位 90°",

        "visual4.row3.label": "波 C",

        "visual4.row3.formula": "相位 180°",

        "visual4.row4.label": "A + B + C",

        "visual4.row4.value": "≈ A",

        "visual4.caption": "A（cos0=1）+ B（cos90=0）+ C（cos180=−1）= 1+0−1 = 0（垂直方向），但 B 在垂直方向仍有贡献。这就是相控阵波束塑形的原理：每个方向都得到不同的混合。",

        "visual5.app1.tag": "速度",

        "visual5.app1.title": "微秒级转向",

        "visual5.app1.desc": "机械天线要几秒才能转完。移相器是几伏电压，微秒级翻转。波束扫描快 100 倍。",

        "visual5.app2.tag": "可靠",

        "visual5.app2.title": "无运动部件",

        "visual5.app2.desc": "移相器是固态电子器件。没有电机、没有轴承、没有齿轮。磨损少、振动少、寿命长——甚至在太空也能工作。",

        "visual5.app3.tag": "精度",

        "visual5.app3.title": "亚度控制",

        "visual5.app3.desc": "移相器精度可达 5° 或 1°，现代设计甚至 0.1°。波束精度小于 1 度。",

        "visual5.app4.tag": "多波束",

        "visual5.app4.title": "同时多波束",

        "visual5.app4.desc": "每组相位设置对应一个方向的波束。阵列够大，就能同时形成几十个波束，每个跟踪不同目标。",

        "visual5.app5.tag": "自适应",

        "visual5.app5.title": "自适应波束",

        "visual5.app5.desc": "相位设置每秒可更新几千次。波束能追目标、绕开干扰、跳过已知杂波区。",

        "visual5.app6.tag": "低功耗",

        "visual5.app6.title": "微小电压",

        "visual5.app6.desc": "移相器只需几伏、几微瓦。整个波束成形网络几乎不额外耗电。",

        "visual5.num": "05",

        "visual5.name": "为什么快",

        "visual5.title": "不转不等待，只靠电压",

        "visual5.intro": "相位控制快，因为它是电的。三个理由让相控阵跑赢任何机械雷达。",

        "visual5.caption": "机械转动受惯性和重力限制。电子相位只受晶体管翻转速度限制。",

        "visual6.app1.tag": "军用雷达",

        "visual6.app1.title": "军用雷达",

        "visual6.app1.desc": "F-35、F-22、宙斯盾的 AESA 雷达——相位控制让一部雷达同时跟踪 30+ 目标、压制、通信。",

        "visual6.app2.tag": "5G",

        "visual6.app2.title": "5G/6G 基站",

        "visual6.app2.desc": "基站用相控阵把信号束对准每部手机。原理同雷达，但方向反过来——手机是“目标”，信号是波束。",

        "visual6.app3.tag": "音响",

        "visual6.app3.title": "音箱阵列",

        "visual6.app3.desc": "音乐厅里线阵音箱用相位延迟，让声束对准观众——远离墙壁。",

        "visual6.app4.tag": "超声",

        "visual6.app4.title": "医用超声",

        "visual6.app4.desc": "探头用控制相位发出脉冲，回波合成出清晰的器官影像——探头里没有机械部件。",

        "visual6.app5.tag": "WIFI",

        "visual6.app5.title": "Wi-Fi 波束成形",

        "visual6.app5.desc": "现代 Wi-Fi 6 路由器有 4 到 8 根天线，用相位偏移让信号跟随你的笔记本移动。",

        "visual6.app6.tag": "降噪",

        "visual6.app6.title": "主动降噪",

        "visual6.app6.desc": "耳机用同一招：麦克风听噪音，电路加一列反相波，你就听不到声音了。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "相位控制在哪里出现",

        "visual6.intro": "相位控制在现代科技里到处都是。任何需要把能量波束指向特定地方的场景，都用到相位偏移。",

        "visual6.caption": "当你看到无线设备跟随你走动，或医生得到清晰的超声图像，你看到的都是相位控制在起作用。"

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
