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
        "page.title": "Article 35: What Does a Radar Look Like? — Radar Explorer",
        "page.description": "Article 35: What does a radar look like? Antenna, transmitter, receiver, duplexer, signal processor, display, servo, power supply — the whole system in one cross-section diagram.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Jul 16, 2026",
        "article.title": "What Does a Radar Look Like?",
        "article.subtitle": "One diagram, eight parts, one complete cycle.",
        "toc.title": "On this page",
        "toc.s1": "The parts list",
        "toc.s2": "The radar body",
        "toc.s3": "One full cycle",
        "toc.s4": "Worked example",
        "toc.s5": "Why split it up?",
        "toc.s6": "Where these live",
        "article.p1": "Have you ever seen a radar? That spinning \"dish\" on top of an airport, a ship, or a weather station — that's a radar. But a radar is not just one antenna. It is a whole team of machines.",
        "article.p2": "A radar has these main parts: antenna, transmitter, receiver, duplexer, signal processor, display, servo system, and power supply. Think of it like a person: the antenna is the eyes and mouth, the transmitter is the voice, the receiver is the ears, the signal processor is the brain, the display is the face, the servo is the neck, and power and cooling are the backbone.",
        "article.p3": "Why split it up like this? Because a radar does something very complex: it sends out waves, receives them back, finds targets in the noise, and shows the result in a way people can understand. Each part handles one step, and none can be missing.",
        "article.p4": "One full cycle: send out, receive back, calculate, and show. It sounds simple, but every step involves precise timing and high-speed processing. Radars come in many sizes — some as small as a box, some as tall as a building — but the basic structure is the same.",
        "visual1.name": "THE PARTS LIST",
        "visual1.title": "Eight Parts, One Machine",
        "visual1.intro": "Every radar — airport, ship, weather — is built from the same eight blocks. Here they are.",
        "fig1.title": "Radar block diagram",
        "fig1.tx": "Transmitter",
        "fig1.power": "power",
        "fig1.ant": "Antenna",
        "fig1.tp": "tx + rx",
        "fig1.rx": "Receiver",
        "fig1.sens": "sensitive",
        "fig1.proc": "Processor",
        "fig1.fft": "FFT, filter",
        "fig1.disp": "Display",
        "fig1.pic": "picture",
        "fig1.dup": "Duplexer",
        "fig1.gate": "one path",
        "fig1.servo": "Servo",
        "fig1.aim": "aim",
        "fig1.psu": "Power",
        "fig1.cool": "cooling",
        "visual1.caption": "The eight blocks. The duplexer is what lets one antenna both transmit and receive at the same time.",
        "visual2.name": "THE RADAR BODY",
        "visual2.title": "Cross-Section of the Whole Machine",
        "visual2.intro": "Cut a radar open and you find the same stack: dish on top, electronics in the middle, power and cooling at the bottom.",
        "fig2.title": "Radar cross-section",
        "fig2.dish": "Antenna / dish",
        "fig2.servo": "Servo (neck)",
        "fig2.tx": "Transmitter",
        "fig2.rx": "Receiver",
        "fig2.dup": "Duplexer",
        "fig2.proc": "Processor",
        "fig2.disp": "Display / console",
        "fig2.psu": "Power + cooling",
        "fig2.shed": "shed / shelter",
        "fig2.target": "target",
        "visual2.caption": "Dish on top, electronics in the middle, power and cooling at the bottom. A small airport radar and a five-storey weather radar share this layout.",
        "visual3.name": "ANIMATION: ONE FULL CYCLE",
        "visual3.title": "Watching a Pulse Go Out and Come Back",
        "visual3.intro": "The animation sends a pulse to a target, brings the echo back, filters it, and paints the result.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. TRANSMIT — the transmitter sends a short pulse",
        "visual3.cc2": "2. REFLECT — the pulse bounces off the target",
        "visual3.cc3": "3. PROCESS — the processor pulls the target out of the noise",
        "visual3.cc4": "4. DISPLAY — the console paints the result",
        "visual3.caption": "Send, receive, calculate, show. The whole loop takes milliseconds; only the antenna turn takes seconds.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Which Part Does What?",
        "visual4.intro": "Match each step of one cycle to the part that does it.",
        "visual4.row1.label": "Produce the pulse",
        "visual4.row1.value": "Transmitter",
        "visual4.row2.label": "Send it into space",
        "visual4.row2.value": "Antenna",
        "visual4.row3.label": "Hear it come back",
        "visual4.row3.value": "Receiver",
        "visual4.row4.label": "Separate out and in",
        "visual4.row4.value": "Duplexer",
        "visual4.row5.label": "Find it in the noise",
        "visual4.row5.value": "Signal processor",
        "visual4.row6.label": "Show it to a human",
        "visual4.row6.value": "Display",
        "visual4.caption": "Six steps, six parts. Change one and the chain breaks.",
        "visual5.name": "THE HUMAN ANALOGY",
        "visual5.title": "Radar as a Person",
        "visual5.intro": "The easiest way to remember eight parts is to borrow a body.",
        "visual5.app1.tag": "ANTENNA",
        "visual5.app1.title": "Eyes and Mouth",
        "visual5.app1.desc": "The dish radiates the outgoing wave and catches the incoming echo. Same surface, two jobs.",
        "visual5.app2.tag": "TX / RX",
        "visual5.app2.title": "Voice and Ears",
        "visual5.app2.desc": "The transmitter shouts, the receiver listens. The receiver is far more sensitive than the transmitter is loud.",
        "visual5.app3.tag": "PROCESSOR",
        "visual5.app3.title": "The Brain",
        "visual5.app3.desc": "Thousands of pulses arrive at once, drowned in noise. The processor runs an FFT per pulse and decides what is a target.",
        "visual5.app4.tag": "DISPLAY",
        "visual5.app4.title": "The Face",
        "visual5.app4.desc": "Raw numbers are useless to a human. The display turns them into a picture you can read in a second.",
        "visual5.app5.tag": "SERVO",
        "visual5.app5.title": "The Neck",
        "visual5.app5.desc": "The servo turns the dish so it points where the operator wants. With a phased array the neck barely moves.",
        "visual5.app6.tag": "POWER",
        "visual5.app6.title": "The Backbone",
        "visual5.app6.desc": "A big weather radar draws as much power as a small town. Cooling is not optional; it is part of the design.",
        "visual5.caption": "Dish, throat, ears, brain, face, neck, backbone. Once you can picture it, the block diagram is obvious.",
        "visual6.name": "WHERE THESE LIVE",
        "visual6.title": "Same Parts, Different Sizes",
        "visual6.intro": "From a box on a drone to a building on a hill, the block list never changes.",
        "visual6.app1.tag": "AIRPORT",
        "visual6.app1.title": "Approach Radar",
        "visual6.app1.desc": "A rotating dish about 3 m across, on a small tower. Short range, high update rate, tracks aircraft on final approach.",
        "visual6.app2.tag": "MARINE",
        "visual6.app2.title": "Naval Surface Search",
        "visual6.app2.desc": "Slower rotation, very long range, built to survive salt and vibration. Often several radars stacked on one mast.",
        "visual6.app3.tag": "WEATHER",
        "visual6.app3.title": "WSR-88D / PAR",
        "visual6.app3.desc": "A radome about 25 m across on a hardened tower. The whole structure is the shelter; electronics sit inside it.",
        "visual6.app4.tag": "SPACE",
        "visual6.app4.title": "Synthetic Aperture",
        "visual6.app4.desc": "No dish at all. A moving antenna records successive pulses and the processor does the focusing after the fact.",
        "visual6.app5.tag": "GROUND",
        "visual6.app5.title": "GPR and Through-Wall",
        "visual6.app5.desc": "Small enough to carry. Same eight blocks, but the transmitter is a pistol and the display is a laptop screen.",
        "visual6.app6.tag": "SMALLEST",
        "visual6.app6.title": "Millimetre-Wave Modules",
        "visual6.app6.desc": "On a chip, the antenna and the power stage share the same few square millimetres. Range drops to tens of metres.",
        "visual6.caption": "Size changes, structure does not. That is why one diagram can describe a hundred different radars.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "A radar is a whole team of machines working together, not just one big antenna.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 35：雷达长什么样 — 雷达探索者",
        "page.description": "文章 35：雷达长什么样？天线、发射机、接收机、收发开关、信号处理机、显示器、伺服、电源，一张剖面图看懂整机。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年7月16日",
        "article.title": "雷达长什么样",
        "article.subtitle": "一张图，八个部件，一个完整循环。",
        "toc.title": "本页目录",
        "toc.s1": "部件清单",
        "toc.s2": "整机剖面",
        "toc.s3": "一个完整循环",
        "toc.s4": "计算示例",
        "toc.s5": "为什么要分开",
        "toc.s6": "它们都在哪",
        "article.p1": "你见过雷达吗？机场、军舰、气象站顶上那个会转的“锅”，就是雷达。但雷达不只是一个天线，它是一整套机器。",
        "article.p2": "雷达主要分这几个部分：天线、发射机、接收机、收发开关、信号处理机、显示器、伺服系统和电源。可以把它想成一个人：天线是眼睛和嘴，发射机是嗓子，接收机是耳朵，信号处理机是大脑，显示器是脸，伺服是脖子，电源和冷却是后勤。",
        "article.p3": "为什么这么分？因为雷达干的是一件很复杂的事：发出波、收回波、从噪声里找出目标、再把人能看懂的结果显示出来。每个部分负责其中一环，缺一不可。",
        "article.p4": "一次完整工作流程：发出去、收回来、算出来、显示出来。听起来简单，但每一步都涉及大量精密计算和高速处理。雷达大小差别很大，有的像小盒子，有的像几层楼高，但基本结构是相通的。",
        "visual1.name": "部件清单",
        "visual1.title": "八个部件，一台机器",
        "visual1.intro": "不论机场、军舰还是气象雷达，都是这八个模块搭出来的。",
        "fig1.title": "雷达方框图",
        "fig1.tx": "发射机",
        "fig1.power": "产生波",
        "fig1.ant": "天线",
        "fig1.tp": "发收",
        "fig1.rx": "接收机",
        "fig1.sens": "高灵敏度",
        "fig1.proc": "处理机",
        "fig1.fft": "快速傅里台",
        "fig1.disp": "显示器",
        "fig1.pic": "图像",
        "fig1.dup": "收发开关",
        "fig1.gate": "单路",
        "fig1.servo": "伺服",
        "fig1.aim": "方向",
        "fig1.psu": "电源",
        "fig1.cool": "冷却",
        "visual1.caption": "八个模块。收发开关就是让一叠天线能同时发射和接收的那个安排。",
        "visual2.name": "整机剖面",
        "visual2.title": "把整台雷达切开看",
        "visual2.intro": "将雷达横向切开，看到的是同一个堆叠：顶上是碗形天线，中间是电子设备，底下是电源和冷却。",
        "fig2.title": "雷达剖面图",
        "fig2.dish": "天线 / 碗形探测器",
        "fig2.servo": "伺服（脖子）",
        "fig2.tx": "发射机",
        "fig2.rx": "接收机",
        "fig2.dup": "收发开关",
        "fig2.proc": "处理机",
        "fig2.disp": "显示 / 控制台",
        "fig2.psu": "电源 + 冷却",
        "fig2.shed": "机房",
        "fig2.target": "目标",
        "visual2.caption": "顶上碗形天线，中间电子设备，底下电源和冷却。机场的小雷达和几层楼高的天气雷达用的是同一套布局。",
        "visual3.name": "动画：一个完整循环",
        "visual3.title": "看一个脉冲去了再回来",
        "visual3.intro": "动画把脉冲发到目标、得到回波、过滤并画出结果。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 发射 — 发射机发出一个短脉冲",
        "visual3.cc2": "2. 反射 — 脉冲在目标上反射回来",
        "visual3.cc3": "3. 处理 — 处理机把目标从噪声里挑出来",
        "visual3.cc4": "4. 显示 — 控制台画出结果",
        "visual3.caption": "发出、接收、计算、显示。整个循环只需几毫秒，只有天线转动要若干秒。",
        "visual4.name": "计算示例",
        "visual4.title": "哪个部件干什么活",
        "visual4.intro": "把一个循环里的每一步对应到干它的部件。",
        "visual4.row1.label": "产生脉冲",
        "visual4.row1.value": "发射机",
        "visual4.row2.label": "发到空间里",
        "visual4.row2.value": "天线",
        "visual4.row3.label": "听见回波",
        "visual4.row3.value": "接收机",
        "visual4.row4.label": "分开去和来",
        "visual4.row4.value": "收发开关",
        "visual4.row5.label": "从噪声里找目标",
        "visual4.row5.value": "信号处理机",
        "visual4.row6.label": "给人看",
        "visual4.row6.value": "显示器",
        "visual4.caption": "六步，六个部件。换掉其中一个，整条链子就断了。",
        "visual5.name": "人体类比",
        "visual5.title": "把雷达当成一个人",
        "visual5.intro": "记住八个部件最简单的办法，就是借用一副身体。",
        "visual5.app1.tag": "天线",
        "visual5.app1.title": "眼睛和嘴",
        "visual5.app1.desc": "碗形天线射出去的波，也接收回来的回波。同一面反射面，两件事。",
        "visual5.app2.tag": "发射 / 接收",
        "visual5.app2.title": "嗓子和耳朵",
        "visual5.app2.desc": "发射机往外喊，接收机待着听。接收机的灵敏度远远高于发射机的呼声。",
        "visual5.app3.tag": "处理机",
        "visual5.app3.title": "大脑",
        "visual5.app3.desc": "一次拿到几千个脉冲，全混在噪声里。处理机对每个脉冲跑一次傅里台变换，再判断哪些是目标。",
        "visual5.app4.tag": "显示器",
        "visual5.app4.title": "脸",
        "visual5.app4.desc": "原始数据对人来说没用。显示器把它们变成一张你一眼就能看懂的图。",
        "visual5.app5.tag": "伺服",
        "visual5.app5.title": "脖子",
        "visual5.app5.desc": "伺服起来让碗形天线指向操作员想要的方向。用相控阵时，这根脖子几乎不动。",
        "visual5.app6.tag": "电源",
        "visual5.app6.title": "后勤",
        "visual5.app6.desc": "一台大型天气雷达的功率消耗能当一个小镇。冷却不是可选项，它本身就是设计的一部分。",
        "visual5.caption": "碗、喇、耳、脑、脸、脖、后勤。一旦能想象出来，方框图就显然易懂。",
        "visual6.name": "部件去哪了",
        "visual6.title": "同一套部件，不同的大小",
        "visual6.intro": "从无人机上的小盒子到山上的几层楼大屋，这份清单从不变。",
        "visual6.app1.tag": "机场",
        "visual6.app1.title": "进场雷达",
        "visual6.app1.desc": "相当约 3 米角宽的位子式碗形天线，装在小塔上。范围短、刷新快，专保越地接近的飞机。",
        "visual6.app2.tag": "军舰",
        "visual6.app2.title": "水面搜索",
        "visual6.app2.desc": "转动更慢、范围更远，要耐受盐和振动。一根挡杆上常叠着好几部雷达。",
        "visual6.app3.tag": "天气",
        "visual6.app3.title": "WSR-88D / 相控阵",
        "visual6.app3.desc": "约 25 米直径的球形雦盖，安装在加固塔上。整个结构就是机房，电子设备都在其内部。",
        "visual6.app4.tag": "太空",
        "visual6.app4.title": "合成开口",
        "visual6.app4.desc": "完全没有碗形天线。移动的天线记录一系列脉冲，焦点交给处理机在之后完成。",
        "visual6.app5.tag": "地面",
        "visual6.app5.title": "地面探测与掠墙",
        "visual6.app5.desc": "小到可以拿着走。同样八个模块，只是发射机变成了手枪，显示器变成了电脑屏幕。",
        "visual6.app6.tag": "最小",
        "visual6.app6.title": "毫米波模块",
        "visual6.app6.desc": "到了芯片上，天线和功率级共享几平方毫米。但是范围也只剩下几十米。",
        "visual6.caption": "大小会变，结构不会。这就是为什么一张图就能描述上百种不同的雷达。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "雷达是一整套配合工作的系统，不只是一个大天线。",
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
