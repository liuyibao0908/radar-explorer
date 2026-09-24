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

        "page.title": "Article 24: Why Are Bats and Radar So Similar? — Radar Explorer",

        "page.description": "Article 24: How does bat echolocation work, and why does it look so much like radar? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "Aug 11, 2026",

        "toc.title": "On this page",

        "toc.s1": "How a bat sees with sound",

        "toc.s2": "Bat vs radar",

        "toc.s3": "Echo loop animation",

        "toc.s4": "Worked example",

        "toc.s5": "Differences",

        "toc.s6": "Applications",

        "article.title": "Why Are Bats and Radar So Similar?",

        "article.subtitle": "Bats fly in total darkness without hitting walls. How? With sound — and the trick is almost identical to radar.",

        "article.p1": "Bats fly in the dark without hitting walls. How do they do it? The answer is a lot like radar.",

        "article.p2": "A bat sends out ultrasound. When it hits an object, it bounces back, and the bat listens with its ears. A radar sends out radio waves. When they hit a target, they bounce back, and the antenna receives them. The principle is the same: send — reflect — receive — decide.",

        "article.p3": "The difference: bats use sound waves, radar uses radio waves. Bats can tell apart insects, branches, and walls. Radar can tell apart aircraft, ships, and raindrops. The bat's signal processing is in its brain; the radar's is in a computer.",

        "article.p4": "Humans learned from bats and invented radar and sonar. This is a classic example of biomimicry. Even modern drones and self-driving cars borrow from the same principle: send a wave, listen for the echo, decide.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "Bats and radar both use echoes to locate things — one with sound, one with radio waves.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2026",

        "fig1.title": "Bat echolocation",

        "fig1.bat": "bat",

        "fig1.moth": "moth",

        "fig1.wall": "wall",

        "fig1.bottom": "blue: outgoing · green: echo returning to bat's ears",

        "visual1.num": "01",

        "visual1.name": "HOW A BAT SEES WITH SOUND",

        "visual1.title": "A Tiny Mouth, A Burst of Ultrasound",

        "visual1.intro": "A hunting bat makes a sharp chirp in its mouth, then listens for the echo. The chirp is ultrasonic — far above human hearing — so detailed that a moth's wing echo sounds different from a leaf's.",

        "visual1.caption": "Bats can switch chirp rate and loudness to match the situation. Close to a moth: high frequency, fast clicks.",

        "fig2.title": "Bat vs radar comparison",

        "fig2.bat.title": "BAT",

        "fig2.bat.send": "send: mouth clicks",

        "fig2.bat.wave": "wave: ultrasound",

        "fig2.bat.freq": "freq: ~50 kHz",

        "fig2.bat.speed": "speed: 340 m/s",

        "fig2.bat.recv": "receive: ears",

        "fig2.bat.proc": "process: brain",

        "fig2.bat.range": "range: ~10 m",

        "fig2.radar.title": "RADAR",

        "fig2.radar.send": "send: antenna pulse",

        "fig2.radar.wave": "wave: radio",

        "fig2.radar.freq": "freq: 1–40 GHz",

        "fig2.radar.speed": "speed: 3 × 10⁸ m/s",

        "fig2.radar.recv": "receive: antenna",

        "fig2.radar.proc": "process: computer",

        "fig2.radar.range": "range: km to Mm",

        "fig2.bottom": "send → reflect → receive → decide",

        "visual2.num": "02",

        "visual2.name": "BAT VS RADAR",

        "visual2.title": "Same Recipe, Different Ingredients",

        "visual2.intro": "Both systems follow the same four-step recipe. The only difference is what they use as a probe: air vibration for bats, electromagnetic waves for radar.",

        "visual2.caption": "The recipe is universal: any wave that travels, bounces, and returns gives the same kind of information.",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: ECHO LOOP",

        "visual3.title": "Watch an Echo Travel Out and Back",

        "visual3.intro": "The animation shows a bat's chirp leaving the mouth, hitting a moth, and returning to the ears. The same loop works in radar, sonar, and ultrasound imaging.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows a chirp traveling out, hitting a target, and returning as an echo.",

        "visual3.cc1": "1. SEND — bat / radar emits a burst",

        "visual3.cc2": "2. TRAVEL — wave spreads through air",

        "visual3.cc3": "3. HIT — insect / target reflects the wave",

        "visual3.cc4": "4. HEAR — bat / radar hears the echo",

        "visual3.caption": "Bats do this 10–20 times per second when hunting — and modern radar fires thousands of pulses per second.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "A Moth 3 m Away, Echo in 17 ms",

        "visual4.intro": "A bat spots a moth 3 m ahead. How long does the echo take to come back to its ears?",

        "visual4.row1.label": "Distance R",

        "visual4.row1.value": "3 m",

        "visual4.row2.label": "Round-trip 2R",

        "visual4.row2.value": "6 m",

        "visual4.row3.label": "Echo time",

        "visual4.row3.formula": "2R / v",

        "visual4.row4.label": "Echo time",

        "visual4.row4.value": "≈ 17.6 ms",

        "visual4.caption": "Bats need millisecond timing — easy for brains. Sonar and radar need nanosecond timing — easy for electronics.",

        "visual5.app1.tag": "MEDIUM",

        "visual5.app1.title": "Sound Needs Air",

        "visual5.app1.desc": "Sound is air vibration. There is no sound in space — so bat-style echolocation does not work in vacuum. Radar uses electromagnetic waves and works anywhere.",

        "visual5.app2.tag": "SPEED",

        "visual5.app2.title": "Radar Is a Million Times Faster",

        "visual5.app2.desc": "Sound travels at 340 m/s; light and radio at 3×10⁸ m/s. Radar's wave makes a million round-trips for each one of sound's. That is why radar sees much finer detail.",

        "visual5.app3.tag": "RANGE",

        "visual5.app3.title": "Radar Sees Much Farther",

        "visual5.app3.desc": "Bats work at a few metres because sound fades fast in air. Radar works at hundreds of kilometres because radio waves fade slowly in air.",

        "visual5.app4.tag": "SIZE",

        "visual5.app4.title": "Different Scales",

        "visual5.app4.desc": "A bat looks for objects the size of insects. Radar looks for objects the size of aircraft, ships, or weather. The wavelength must match the target size.",

        "visual5.app5.tag": "CLUTTER",

        "visual5.app5.title": "Bats Hear Only the Echo",

        "visual5.app5.desc": "When a bat calls, its ears temporarily close to the outgoing sound. The echo comes back after that natural blanking. Engineers do the same thing in radar: switch off the receiver during transmission.",

        "visual5.app6.tag": "AI",

        "visual5.app6.title": "Different Brains",

        "visual5.app6.desc": "Bats' brains are tiny but evolved for echo. Computers are fast but general-purpose. Modern radar signal processing borrows ideas from both.",

        "visual5.num": "05",

        "visual5.name": "DIFFERENCES",

        "visual5.title": "Sound vs Radio: Three Real Differences",

        "visual5.intro": "The principle is the same, but the physics is very different. Three differences matter most: medium, speed, and scale.",

        "visual5.caption": "All three differences come down to wavelength. Sound has metre wavelengths; radio has millimetre to metre wavelengths.",

        "visual6.app1.tag": "DOLPHINS",

        "visual6.app1.title": "Dolphins & Whales",

        "visual6.app1.desc": "Dolphins click at frequencies up to 150 kHz. They use echolocation to find fish in dark or muddy water. Sperm whales hunt giant squid with the deepest clicks of any animal.",

        "visual6.app2.tag": "SONAR",

        "visual6.app2.title": "Submarine Sonar",

        "visual6.app2.desc": "Submarines use sonar (sound navigation and ranging) to detect ships and underwater terrain. The same idea as a bat, scaled up to kilometres.",

        "visual6.app3.tag": "OILBIRDS",

        "visual6.app3.title": "Oilbirds & Swiftlets",

        "visual6.app3.desc": "Two bird species echolocate: oilbirds of South America and cave swiftlets of Southeast Asia. They use audible clicks — not ultrasound — inside pitch-black caves.",

        "visual6.app4.tag": "MEDICAL",

        "visual6.app4.title": "Ultrasound Imaging",

        "visual6.app4.desc": "Medical ultrasound sends sound into the body and listens for echoes from organs. A pregnant woman's baby is photographed by the same trick bats use.",

        "visual6.app5.tag": "PARKING",

        "visual6.app5.title": "Car Reverse Buzzer",

        "visual6.app5.desc": "Reverse parking sensors in cars work by sonar: they send an ultrasonic ping and measure how long until the echo returns from a wall or another car.",

        "visual6.app6.tag": "ROBOTS",

        "visual6.app6.title": "Robot Sonar",

        "visual6.app6.desc": "Small robots and vacuum cleaners often use ultrasonic sensors for obstacle avoidance — directly inspired by bat and dolphin echolocation.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Other Animals & Machines That Echolocate",

        "visual6.intro": "Echolocation is not unique to bats. Dolphins, whales, cave birds and humans all use versions of it.",

        "visual6.caption": "Biomimicry is everywhere: medical ultrasound, parking sensors, robot navigation — all are echoes of the bat's 60-million-year-old invention."

    },

    zh: {

        "page.title": "第24篇：为什么说蝙蝠和雷达是一回事？— 雷达探索者",

        "page.description": "第24篇：蝙蝠的回声定位和雷达有什么相似之处。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2026年8月11日",

        "toc.title": "本页目录",

        "toc.s1": "蝙蝠怎么用声音看东西",

        "toc.s2": "蝙蝠 vs 雷达",

        "toc.s3": "回声循环动画",

        "toc.s4": "详解例题",

        "toc.s5": "差异",

        "toc.s6": "应用领域",

        "article.title": "为什么说蝙蝠和雷达是一回事？",

        "article.subtitle": "蝙蝠在漆黑中飞不撞墙，怎么做到？靠声音——原理和雷达几乎一样。",

        "article.p1": "蝙蝠在黑夜里飞，不会撞墙，它靠的是什么？答案和雷达很像。",

        "article.p2": "蝙蝠发出超声波，碰到物体反射回来，用耳朵听。雷达发出电磁波，碰到目标反射回来，用天线收。原理一样：发出—反射—接收—判断。",

        "article.p3": "区别：蝙蝠用声波，雷达用电磁波。蝙蝠能分辨虫子、树枝、墙壁，雷达能分辨飞机、船只、雨滴。蝙蝠的“信号处理”在脑子里，雷达的在计算机里。",

        "article.p4": "人类从蝙蝠身上得到启发，发明了雷达和声呐。这就是“仿生学”的典型例子。甚至现代无人机和自动驾驶汽车也借鉴同一原理：发射波，听回声，作判断。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "蝙蝠和雷达都是靠回声定位，一个用声波，一个用电磁波。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2026",

        "fig1.title": "蝙蝠回声定位",

        "fig1.bat": "蝙蝠",

        "fig1.moth": "飞蛾",

        "fig1.wall": "墙壁",

        "fig1.bottom": "蓝：发出的声波 · 绿：返回蝙蝠耳朵的回声",

        "visual1.num": "01",

        "visual1.name": "蝙蝠怎么用声音看东西",

        "visual1.title": "小嘴一吐，超声波一冲",

        "visual1.intro": "捕食中的蝙蝠嘴里发出一声尖锐的短叫，然后听回声。这种短叫是超声波——远高于人耳听力上限——足以分辨飞蛾翅膀和树叶的区别。",

        "visual1.caption": "蝙蝠会随情境切换叫声频率和响度。靠近飞蛾：高频、快节奏。",

        "fig2.title": "蝙蝠 vs 雷达对比",

        "fig2.bat.title": "蝙蝠",

        "fig2.bat.send": "发射：嘴里短叫",

        "fig2.bat.wave": "波形：超声波",

        "fig2.bat.freq": "频率：约 50 kHz",

        "fig2.bat.speed": "速度：340 m/s",

        "fig2.bat.recv": "接收：耳朵",

        "fig2.bat.proc": "处理：大脑",

        "fig2.bat.range": "作用距离：约 10 m",

        "fig2.radar.title": "雷达",

        "fig2.radar.send": "发射：天线脉冲",

        "fig2.radar.wave": "波形：无线电",

        "fig2.radar.freq": "频率：1–40 GHz",

        "fig2.radar.speed": "速度：3 × 10⁸ m/s",

        "fig2.radar.recv": "接收：天线",

        "fig2.radar.proc": "处理：计算机",

        "fig2.radar.range": "作用距离：km 至 Mm",

        "fig2.bottom": "发出 → 反射 → 接收 → 判断",

        "visual2.num": "02",

        "visual2.name": "蝙蝠 vs 雷达",

        "visual2.title": "同样的菜谱，不同的食材",

        "visual2.intro": "两者都遵循同一四步菜谱。唯一区别是探测波：蝙蝠用空气振动，雷达用电磁波。",

        "visual2.caption": "这个菜谱是普适的——任何能传播、能反射、能返回的波都能给出同样信息。",

        "visual3.num": "03",

        "visual3.name": "动画：回声循环",

        "visual3.title": "看回声出门又回家",

        "visual3.intro": "动画展示蝙蝠短叫离开嘴巴，击中飞蛾，再返回耳朵。同一循环适用于雷达、声呐和超声成像。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示短叫外出、击中目标、返回为回声。",

        "visual3.cc1": "1. 发出 — 蝙蝠 / 雷达发射一束波",

        "visual3.cc2": "2. 传播 — 波在空气中扩散",

        "visual3.cc3": "3. 击中 — 飞蛾 / 目标反射波",

        "visual3.cc4": "4. 听到 — 蝙蝠 / 雷达听到回声",

        "visual3.caption": "捕食时蝙蝠每秒短叫 10–20 次——现代雷达每秒发上千个脉冲。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "3 米外的飞蛾，回声 17 毫秒",

        "visual4.intro": "蝙蝠发现前方 3 米有一只飞蛾。回声多久回到耳朵？",

        "visual4.row1.label": "距离 R",

        "visual4.row1.value": "3 m",

        "visual4.row2.label": "双程 2R",

        "visual4.row2.value": "6 m",

        "visual4.row3.label": "回声时间",

        "visual4.row3.formula": "2R / v",

        "visual4.row4.label": "回声时间",

        "visual4.row4.value": "约 17.6 ms",

        "visual4.caption": "蝙蝠需要毫秒级时间分辨——大脑够用。声呐和雷达需要纳秒级时间分辨——电子器件够用。",

        "visual5.app1.tag": "介质",

        "visual5.app1.title": "声波需要空气",

        "visual5.app1.desc": "声音是空气振动。真空中没有声音——所以蝙蝠式的回声定位在真空里失效。雷达用电磁波，在任何地方都行。",

        "visual5.app2.tag": "速度",

        "visual5.app2.title": "雷达快一百万倍",

        "visual5.app2.desc": "声速 340 m/s；光速和无线电 3×10⁸ m/s。雷达波一秒钟的来回数，是声波的一百万倍。这就是雷达细节更细的原因。",

        "visual5.app3.tag": "距离",

        "visual5.app3.title": "雷达看得远得多",

        "visual5.app3.desc": "蝙蝠只看几米，因为声波在空气中衰减很快。雷达看几百公里，因为无线电在空气中衰减慢。",

        "visual5.app4.tag": "尺度",

        "visual5.app4.title": "不同的尺度",

        "visual5.app4.desc": "蝙蝠看虫子大小的目标。雷达看飞机、船只、天气尺度。波长必须匹配目标尺寸。",

        "visual5.app5.tag": "杂波",

        "visual5.app5.title": "蝙蝠只听回声",

        "visual5.app5.desc": "蝙蝠发出叫声时，耳朵会暂时关掉，避免被自己的叫声震聋。回声回来时再打开。工程师在雷达里做同样的事：发射时关闭接收机。",

        "visual5.app6.tag": "AI",

        "visual5.app6.title": "不同的大脑",

        "visual5.app6.desc": "蝙蝠脑小但为回声优化。计算机快但通用。现代雷达信号处理从两者借招。",

        "visual5.num": "05",

        "visual5.name": "差异",

        "visual5.title": "声波 vs 电磁波：三大区别",

        "visual5.intro": "原理一样，物理很不一样。三个区别最关键：介质、速度、尺度。",

        "visual5.caption": "三大区别都归结到波长。声波波长以米计；无线电波长从毫米到米。",

        "visual6.app1.tag": "海豚",

        "visual6.app1.title": "海豚和鲸鱼",

        "visual6.app1.desc": "海豚发出高达 150 kHz 的叫声。它们用回声定位在黑暗或浑浊的水里找鱼。抹香鲸用动物界最深的叫声捕大王乌贼。",

        "visual6.app2.tag": "声呐",

        "visual6.app2.title": "潜艇声呐",

        "visual6.app2.desc": "潜艇用声呐（声音导航与测距）探测船只和海底地形。同样的思路放大到公里级。",

        "visual6.app3.tag": "油鸱",

        "visual6.app3.title": "油鸱与金丝燕",

        "visual6.app3.desc": "两种鸟类能回声定位：南美的油鸱和东南亚的金丝燕。在漆黑的山洞里用可闻的咔嗒声——不是超声波。",

        "visual6.app4.tag": "医疗",

        "visual6.app4.title": "超声成像",

        "visual6.app4.desc": "医用超声把声音送进身体，听器官的回声。孕妇肚子里的宝宝就是用蝙蝠的同一招拍出来的。",

        "visual6.app5.tag": "泊车",

        "visual6.app5.title": "汽车倒车雷达",

        "visual6.app5.desc": "汽车的倒车雷达用声呐：发出超声波 ping，测量回波多久从墙或其他车返回。",

        "visual6.app6.tag": "机器人",

        "visual6.app6.title": "机器人声呐",

        "visual6.app6.desc": "小型机器人和扫地机常用超声波传感器避障——直接受蝙蝠和海豚启发。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "其他回声定位的动物与机器",

        "visual6.intro": "回声定位并非蝙蝠独有。海豚、鲸鱼、洞穴鸟类、人类都在用它的不同版本。",

        "visual6.caption": "仿生学处处都在：医用超声、倒车雷达、机器人导航——都是 6000 万年前蝙蝠发明的回声。"

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
