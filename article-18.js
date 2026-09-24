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

        "page.title": "Article 18: Through-Wall Radar — Radar Explorer",

        "page.description": "Article 18: How does through-wall radar detect life signs behind walls? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "July 19, 2025",

        "toc.title": "On this page",

        "toc.s1": "Behind the wall",

        "toc.s2": "Vital signs behind",

        "toc.s3": "Rubble-scan animation",

        "toc.s4": "Worked example",

        "toc.s5": "Wall trade-off",

        "toc.s6": "Applications",

        "article.title": "Through-Wall Radar",

        "article.subtitle": "How do you know if someone is alive behind a wall of rubble? Through-wall radar listens for their breathing.",

        "article.p1": "During earthquake rescue, how do you know if someone is behind a wall? Through-wall radar can help.",

        "article.p2": "Through-wall radar can penetrate walls and rubble to detect targets behind them. It mainly detects weak movements like breathing and heartbeat. It is used in rescue, anti-terror, and security. It is like giving a wall a pair of X-ray eyes.",

        "article.p3": "But penetration is limited and depends on wall material. Signal processing must be powerful to find people in clutter. It is important equipment for emergency rescue. It can't really “see through everything,” but it has unique value.",

        "article.p4": "Through-wall radar is the practical cousin of bio-radar. Both chase the same signal — a few millimetres of chest motion — except one looks through open air and the other through concrete or rubble. The physics is the same; the clutter is much worse.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "Through-wall radar penetrates walls to detect life signs, used in rescue and security.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2025",

        "fig1.title": "Through-wall radar scenario",

        "fig1.air": "AIR (rescuer side)",

        "fig1.wall": "CONCRETE WALL",

        "fig1.rescuer": "RESCUER",

        "fig1.twr": "TW-RADAR",

        "fig1.beam": "microwaves ⇔",

        "fig1.survivor": "SURVIVOR",

        "fig1.breath": "breathing",

        "fig1.bottom": "radar ⇒ wall ⇒ survivor — echo carries tiny breathing motion",

        "visual1.num": "01",

        "visual1.name": "BEHIND THE WALL",

        "visual1.title": "Microwaves Slip Through Walls",

        "visual1.intro": "A small radar on the rescuer’s side emits low-power microwaves. Most bounce off the wall. A small fraction pass through, hit a survivor, and come back. The echo is tiny, but it carries the motion of a living chest.",

        "visual1.caption": "Through-wall radar works because the wall is not perfect — some microwaves leak through, and any breathing behind shifts the echo slightly.",

        "fig2.title": "Signal pattern",

        "fig2.clutter": "clutter",

        "fig2.breathLabel": "breathing (~5 mm, ~0.3 Hz)",

        "fig2.heartLabel": "heartbeat (~0.5 mm, ~1.2 Hz)",

        "fig2.time": "time →",

        "fig2.amplitude": "amplitude",

        "visual2.num": "02",

        "visual2.name": "VITAL SIGNS BEHIND",

        "visual2.title": "Tiny Chest Movements Are the Signal",

        "visual2.intro": "A survivor’s chest moves about 5 mm with each breath and a fraction of a millimetre with each heartbeat. Through-wall radar is built to pick out exactly these tiny motions — and ignore everything else.",

        "visual2.caption": "Slow waves are breathing. Tiny ripples on top are the heartbeat. Modern algorithms lock onto these even when the wall itself is moving slightly.",

        "fig2.bottom": "time →",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: RUBBLE SCAN",

        "visual3.title": "Watch the Beam Sweep Through Rubble",

        "visual3.intro": "The animation shows the radar emitting ultra-wideband pulses toward rubble. Most of the energy bounces off the wall; a tiny fraction passes through and hits anyone hiding behind it.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows the radar beam passing through rubble and detecting a survivor’s breathing.",

        "visual3.cc1": "1. SCAN — through-wall radar emits UWB pulses toward rubble",

        "visual3.cc2": "2. PASS — microwaves slip through concrete, wood, drywall",

        "visual3.cc3": "3. ECHO — chest micro-motion modulates the returned signal",

        "visual3.cc4": "4. LOCATE — processing extracts breathing and heartbeat",

        "visual3.caption": "Even a weak echo can be processed because the motion it carries is so regular — a slow rhythm unique to a living person.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "A Concrete Wall 20 cm, Round-Trip Loss ≈ 48 dB",

        "visual4.intro": "A typical concrete wall is 20 cm thick. How much signal gets through a single round-trip?",

        "visual4.row1.label": "Wall thickness d",

        "visual4.row1.value": "0.20 m",

        "visual4.row2.label": "Concrete attenuation",

        "visual4.row2.value": "~ 12 dB / 0.1 m",

        "visual4.row3.label": "Total one-way loss",

        "visual4.row3.formula": "≈ 24 dB",

        "visual4.row4.label": "Round-trip loss",

        "visual4.row4.value": "≈ 48 dB",

        "visual4.caption": "48 dB sounds like a lot — and it is. The radar must amplify the weak echo a hundred-thousand-fold and still pick out the breathing signal.",

        "fig5.title": "Wall materials and penetration",

        "fig5.wood.tag": "WOOD",

        "fig5.wood.loss": "~ 3 dB / 0.1 m",

        "fig5.wood.use": "good: walls",

        "fig5.wood.use2": "floors",

        "fig5.wood.bar": "| | | |",

        "fig5.dry.tag": "DRYWALL",

        "fig5.dry.loss": "~ 5 dB / 0.1 m",

        "fig5.dry.use": "good: indoor",

        "fig5.dry.use2": "office walls",

        "fig5.dry.bar": "| | | |",

        "fig5.conc.tag": "CONCRETE",

        "fig5.conc.loss": "~ 12 dB / 0.1 m",

        "fig5.conc.use": "limited: walls",

        "fig5.conc.use2": "low-res",

        "fig5.conc.bar": "| |",

        "fig5.rebar.tag": "REBAR CONCRETE",

        "fig5.rebar.loss": "~ 20 dB / 0.1 m",

        "fig5.rebar.use": "very hard",

        "fig5.rebar.use2": "rebar scatters",

        "fig5.rebar.bar": "|",

        "fig5.note": "penetration gets harder as walls get denser and rebar shows up",

        "visual5.num": "05",

        "visual5.name": "WALL TRADE-OFF",

        "visual5.title": "Walls Block Different Amounts",

        "visual5.intro": "Wood and drywall are easy to look through. Plain concrete is harder. Steel-reinforced concrete is the hardest, because the metal scatters the signal in every direction.",

        "visual5.caption": "Operators pick the right frequency and antenna for the wall they expect. Low frequencies go further; higher frequencies give sharper images of what is behind.",

        "visual6.app1.tag": "SEARCH & RESCUE",

        "visual6.app1.title": "Earthquake & Collapse",

        "visual6.app1.desc": "After earthquakes or building collapses, through-wall radar finds trapped survivors under metres of rubble — the canonical use case.",

        "visual6.app2.tag": "POLICE & SWAT",

        "visual6.app2.title": "Hostage / Standoff",

        "visual6.app2.desc": "Police use handheld units to confirm whether a room is occupied before entry. Helps avoid walking into an ambush.",

        "visual6.app3.tag": "FIREFIGHTING",

        "visual6.app3.title": "Smoke-Filled Rooms",

        "visual6.app3.desc": "Firefighters use it to find victims when visibility is zero and heat sensors are saturated by the fire itself.",

        "visual6.app4.tag": "BORDER SECURITY",

        "visual6.app4.title": "Vehicle Checkpoints",

        "visual6.app4.desc": "Mounted systems scan trucks and containers for hidden people, without opening the vehicle.",

        "visual6.app5.tag": "ELDERLY CARE",

        "visual6.app5.title": "Fall Detection",

        "visual6.app5.desc": "Through-wall sensors in care homes detect falls and irregular breathing, alerting staff without intrusive cameras.",

        "visual6.app6.tag": "URBAN COMBAT",

        "visual6.app6.title": "Room Clearing",

        "visual6.app6.desc": "Soldiers use it to detect people in the next room before opening a door, reducing exposure to ambush.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Where Through-Wall Radar Is Used",

        "visual6.intro": "Through-wall radar shows up wherever you cannot see but must know: rescue, policing, firefighting, security.",

        "visual6.caption": "It does not see everything, but in the right situation it can save lives."

    },

    zh: {

        "page.title": "第18篇：穿墙雷达（Through-Wall Radar）— 雷达探索者",

        "page.description": "第18篇：穿墙雷达如何在墙后探测生命体征。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2025年7月19日",

        "toc.title": "本页目录",

        "toc.s1": "墙的背后",

        "toc.s2": "背后的生命信号",

        "toc.s3": "废墟扫描动画",

        "toc.s4": "详解例题",

        "toc.s5": "墙体取舍",

        "toc.s6": "应用领域",

        "article.title": "穿墙雷达",

        "article.subtitle": "废墟墙后有没有活着的人？穿墙雷达能“听”到他们的呼吸。",

        "article.p1": "地震救援时，怎么知道墙后有没有人？穿墙雷达能帮忙。",

        "article.p2": "穿墙雷达能穿透墙壁、废墟，探测后方目标。主要探测人的呼吸、心跳等微弱运动。用于救援、反恐、安防。像给墙装了一双透视眼。",

        "article.p3": "但穿透能力有限，受墙体材质影响。信号处理要很强，才能从杂波里找人。是应急救援的重要装备。不能真的“看透一切”，但有独特价值。",

        "article.p4": "穿墙雷达是生物雷达的实战堂兄弟。两个都追同一个信号——几毫米的胸壁起伏——一个看穿空气，一个看穿混凝土或废墟。物理一样，杂波严重得多。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "穿墙雷达能穿透墙壁探测生命，用于救援和安防。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2025",

        "fig1.title": "穿墙雷达探测示意图",

        "fig1.air": "空气（救援者一侧）",

        "fig1.wall": "混凝土墙",

        "fig1.rescuer": "救援者",

        "fig1.twr": "穿墙雷达",

        "fig1.beam": "微波 ⇔",

        "fig1.survivor": "被埋者",

        "fig1.breath": "呼吸",

        "fig1.bottom": "雷达 ⇔ 墙体 ⇔ 被埋者——回波带着微弱呼吸起伏",

        "visual1.num": "01",

        "visual1.name": "墙的背后",

        "visual1.title": "微波能穿透墙体",

        "visual1.intro": "救援者一侧的小型雷达发出低功率微波。大部分被墙体反射，一小部分穿过去打到被埋者身上并返回。回波很弱，但带着活着的人的呼吸起伏。",

        "visual1.caption": "穿墙雷达能工作的原因是墙不是完美的——总有少量微波漏过去，而墙后的任何呼吸都会让回波发生微弱变化。",

        "fig2.title": "信号模式",

        "fig2.clutter": "杂波",

        "fig2.breathLabel": "呼吸（~5 毫米，~0.3 Hz）",

        "fig2.heartLabel": "心跳（~0.5 毫米，~1.2 Hz）",

        "fig2.time": "时间 →",

        "fig2.amplitude": "幅度",

        "visual2.num": "02",

        "visual2.name": "背后的生命信号",

        "visual2.title": "微弱胸壁起伏就是信号",

        "visual2.intro": "被埋者的胸壁随呼吸起伏约 5 毫米，随心跳起伏不到 1 毫米。穿墙雷达就是要把这种微弱动作挑出来，忽略其他一切。",

        "visual2.caption": "慢波是呼吸，上面的细密波纹是心跳。即使墙体本身有微小晃动，现代算法也能锁定。",

        "visual3.num": "03",

        "visual3.name": "动画：废墟扫描",

        "visual3.title": "看波束穿透废墟",

        "visual3.intro": "动画展示雷达朝废墟发出超宽带脉冲。绝大部分能量被墙体反弹；一小部分穿透并打到藏在后面的人身上。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示穿墙雷达的波束穿透废墟并探测被埋者的呼吸。",

        "visual3.cc1": "1. 扫描 — 穿墙雷达朝废墟发出 UWB 脉冲",

        "visual3.cc2": "2. 穿透 — 微波穿过混凝土、木材或石膏板",

        "visual3.cc3": "3. 回波 — 胸壁微弱起伏调制返回信号",

        "visual3.cc4": "4. 定位 — 处理算法提取呼吸与心跳",

        "visual3.caption": "即使回波很弱也能处理，因为它的运动规律非常规律——这是活人独有的慢节律。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "20 厘米混凝土墙，双程损失 ~48 dB",

        "visual4.intro": "典型的混凝土墙 20 厘米厚。一次来回信号损失多少？",

        "visual4.row1.label": "墙体厚度 d",

        "visual4.row1.value": "0.20 米",

        "visual4.row2.label": "混凝土衰减",

        "visual4.row2.value": "约 12 dB / 0.1 米",

        "visual4.row3.label": "单程总损失",

        "visual4.row3.formula": "约 24 dB",

        "visual4.row4.label": "双程损失",

        "visual4.row4.value": "约 48 dB",

        "visual4.caption": "48 dB 听起来很大，确实很大。雷达必须把微弱回波放大 10 万倍，还能挑出呼吸信号。",

        "fig5.title": "墙体材料与穿透",

        "fig5.wood.tag": "木材",

        "fig5.wood.loss": "约 3 dB / 0.1 米",

        "fig5.wood.use": "容易：墙壁",

        "fig5.wood.use2": "地板",

        "fig5.wood.bar": "| | | |",

        "fig5.dry.tag": "石膏板",

        "fig5.dry.loss": "约 5 dB / 0.1 米",

        "fig5.dry.use": "容易：室内",

        "fig5.dry.use2": "办公室墙",

        "fig5.dry.bar": "| | | |",

        "fig5.conc.tag": "混凝土",

        "fig5.conc.loss": "约 12 dB / 0.1 米",

        "fig5.conc.use": "受限：墙体",

        "fig5.conc.use2": "分辨率低",

        "fig5.conc.bar": "| |",

        "fig5.rebar.tag": "钢筋混凝土",

        "fig5.rebar.loss": "约 20 dB / 0.1 米",

        "fig5.rebar.use": "非常困难",

        "fig5.rebar.use2": "钢筋散射",

        "fig5.rebar.bar": "|",

        "fig5.note": "墙越密、含钢筋越多，穿透越难",

        "visual5.num": "05",

        "visual5.name": "墙体取舍",

        "visual5.title": "不同墙体阻挡程度不同",

        "visual5.intro": "木材和石膏板容易看穿。素混凝土难一些。钢筋混凝土最难——金属会把信号向四面八方散射。",

        "visual5.caption": "操作员根据预期墙体选频率和天线。低频穿得远；高频给更清晰的墙后图像。",

        "visual6.app1.tag": "搜救",

        "visual6.app1.title": "地震与坍塌",

        "visual6.app1.desc": "地震或建筑坍塌后，穿墙雷达在数米废墟下寻找被埋者——这是最经典的应用场景。",

        "visual6.app2.tag": "警察与特警",

        "visual6.app2.title": "人质 / 对峙",

        "visual6.app2.desc": "警察用手持设备在进入房间前确认是否有人，避免走进埋伏。",

        "visual6.app3.tag": "消防",

        "visual6.app3.title": "浓烟弥漫的房间",

        "visual6.app3.desc": "能见度为零、热传感器被火本身干扰时，消防员用它寻找受困者。",

        "visual6.app4.tag": "边境安全",

        "visual6.app4.title": "车辆检查站",

        "visual6.app4.desc": "装载系统扫描卡车和集装箱里的偷渡者，无需打开车辆。",

        "visual6.app5.tag": "养老护理",

        "visual6.app5.title": "摔倒检测",

        "visual6.app5.desc": "养老院的穿墙传感器检测摔倒和呼吸异常，无须侵犯隐私的摄像头即可报警。",

        "visual6.app6.tag": "城市作战",

        "visual6.app6.title": "房间清扫",

        "visual6.app6.desc": "士兵在开门前用穿墙雷达探测隔壁是否有人，减少暴露在埋伏下的风险。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "穿墙雷达用在哪里",

        "visual6.intro": "凡是看不见但必须知道的地方都用得着穿墙雷达——救援、警务、消防、安全。",

        "visual6.caption": "它不能看穿一切，但在关键时刻它能救命。"

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
