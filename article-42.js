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
        "page.title": "Article 42: The Servo System — Radar Explorer",
        "page.description": "Article 42: How does a radar antenna turn? Motors, drives, encoders and tracking loops, why big antennas are hard to slew, and why phased arrays still keep a servo.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 5, 2026",
        "article.title": "The Servo System — How the Radar Turns",
        "article.subtitle": "The neck. It carries a dish that can weigh thirty tonnes.",
        "toc.title": "On this page",
        "toc.s1": "The three parts",
        "toc.s2": "Why inertia hurts",
        "toc.s3": "Tracking animation",
        "toc.s4": "Worked example",
        "toc.s5": "Speed and accuracy",
        "toc.s6": "Why arrays keep a servo",
        "article.p1": "Many radar antennas spin all the time. How do they turn?",
        "article.p2": "The servo system = motor + gears + control system. Its job: turn the antenna to a given direction at a given speed. Mechanical-scan radars use it to spin the antenna; phased-array radars don't spin the antenna, but some still turn their base.",
        "article.p3": "Think of a camera gimbal that can pan and tilt. The servo must be steady and precise — if it shakes, the target is lost. It also has to track targets: when the target moves, the antenna follows.",
        "article.p4": "Big antennas are heavy, so the servo needs enough power and a strong structure. If the servo fails, the radar \"tilts its head.\"",
        "visual1.name": "THE THREE PARTS",
        "visual1.title": "Motor, Drive, Control",
        "visual1.intro": "A motor alone would spin. Three things together make it point.",
        "fig1.title": "Servo loop: command in, antenna out",
        "fig1.cmd": "Command",
        "fig1.cmd2": "where to point",
        "fig1.ctl": "Controller",
        "fig1.ctl2": "the loop",
        "fig1.drv": "Drive",
        "fig1.drv2": "motor + gears",
        "fig1.ant": "Antenna",
        "fig1.enc": "Encoder",
        "fig1.enc2": "where it really is",
        "fig1.fb": "feedback — closes the loop",
        "fig1.note": "without the encoder the motor only knows where it was told to go, not where it ended up",
        "visual1.caption": "The encoder is what makes it a servo rather than a motor. Without a measured position, wind and friction push the antenna off and nobody notices.",
        "visual2.name": "WHY INERTIA HURTS",
        "visual2.title": "A Thirty-Tonne Problem",
        "visual2.intro": "The bigger the antenna, the harder it is to start, stop, and turn accurately.",
        "visual2.row1.label": "Radar A dish",
        "visual2.row1.value": "3 m airport antenna, ~2 t",
        "visual2.row2.label": "Radar A slew",
        "visual2.row2.value": "fast, can stop within a degree",
        "visual2.row3.label": "Radar B dish",
        "visual2.row3.value": "25 m weather antenna, ~30 t",
        "visual2.row4.label": "Radar B slew",
        "visual2.row4.value": "one full revolution takes minutes",
        "visual2.caption": "Torque has to overcome inertia before anything moves, and braking has to absorb it after. Between those two limits sits the whole design problem.",
        "visual3.name": "ANIMATION: TRACKING",
        "visual3.title": "Watching the Antenna Follow",
        "visual3.intro": "The target drifts. The servo has to catch up without overshooting.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. STEADY -- the servo holds a fixed bearing",
        "visual3.cc2": "2. MOVE -- the target drifts and the command follows",
        "visual3.cc3": "3. LAG -- the heavy antenna trails behind",
        "visual3.cc4": "4. CORRECT -- the loop damps out the overshoot",
        "visual3.caption": "Tracking is a control problem. Too little gain and the antenna lags; too much and it oscillates around the target.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "How Fast Can It Turn?",
        "visual4.intro": "Full revolution, degrees per second, and the beam width that makes it useful.",
        "visual4.row1.label": "Sweep rate",
        "visual4.row1.value": "6 rpm — one revolution in 10 s",
        "visual4.row2.label": "Angular speed",
        "visual4.row2.value": "360° in 10 s = 36°/s",
        "visual4.row3.label": "Beam width",
        "visual4.row3.value": "1° — time on one target",
        "visual4.row4.label": "Illuminating a target",
        "visual4.row4.value": "1° ÷ 36°/s = 28 ms per pulse",
        "visual4.row5.label": "Pulses at 600 Hz",
        "visual4.row5.value": "16 pulses hit one target",
        "visual4.row6.label": "Integration needs 32",
        "visual4.row6.value": "the scan rate drops to 3 rpm",
        "visual4.caption": "Slew rate is not a free parameter. It is set by how many pulses you can afford to spend on one target before the whole sky has been swept once.",
        "visual5.name": "SPEED AND ACCURACY",
        "visual5.title": "Six Words Worth Knowing",
        "visual5.intro": "The vocabulary of pointing a very large object at a small angle.",
        "visual5.app1.tag": "SLEW",
        "visual5.app1.title": "Scan Rate",
        "visual5.app1.desc": "How many degrees per second the antenna can move. It sets the update rate for everything, because nothing is measured until the beam passes over it.",
        "visual5.app2.tag": "ACCURACY",
        "visual5.app2.title": "Pointing Error",
        "visual5.app2.desc": "How far the beam actually points from where the computer believes. A tenth of a degree error is a kilometre of position error at long range.",
        "visual5.app3.tag": "WIND",
        "visual5.app3.title": "Torque Compensation",
        "visual5.app3.desc": "Wind load on a large dish changes constantly. The controller measures it and biases the servo to hold the beam exactly where it was commanded.",
        "visual5.app4.tag": "BACKLASH",
        "visual5.app4.title": "Gear Gap",
        "visual5.app4.desc": "A worn gear takes up slack one way and not the other, so the encoder disagrees with the command depending on direction. It is why precision drives are sealed.",
        "visual5.app5.tag": "DAMPING",
        "visual5.app5.title": "Oscillation Control",
        "visual5.app5.desc": "A thirty-tonne mass on a bearing is a spring. Rate feedback is added so the loop damps the motion instead of ringing when it arrives.",
        "visual5.app6.tag": "ENCODER",
        "visual5.app6.title": "Absolute Position",
        "visual5.app6.desc": "An optical encoder on the axis knows the bearing even after a power cut. Without it the antenna has to slew slowly home to find out where it is.",
        "visual5.caption": "Every one of these exists because a dish is a large mass being asked to point at a precise angle.",
        "visual6.name": "WHY ARRAYS KEEP A SERVO",
        "visual6.title": "No Beam Rotation, Still a Motor",
        "visual6.intro": "A phased array steers electronically. The pedestal still moves — just very slowly.",
        "fig6.title": "Array elements steer the beam; the pedestal follows the weather",
        "fig6.face": "radome / array face",
        "fig6.face2": "does not rotate fast",
        "fig6.storm": "storm",
        "fig6.tilt": "slow tilt",
        "fig6.ped": "pedestal",
        "fig6.servo": "servo",
        "fig6.servosub": "1 turn / few min",
        "fig6.elec": "beam steered electronically: microseconds",
        "visual6.caption": "The phased array replaced the fast motor, not the motor. It just gets to be slow now.",
        "visual6.app1.tag": "WHY",
        "visual6.app1.title": "Steering Limits",
        "visual6.app1.desc": "A flat array can only steer away from its own face. Rolling the whole structure extends the reachable hemisphere and costs nothing electronically.",
        "visual6.app2.tag": "WHY",
        "visual6.app2.title": "Sun and Ice",
        "visual6.app2.desc": "Over years the tower settles and ice accumulates. A slow continuous correction keeps the face true, and the encoder makes it verifiable.",
        "visual6.app3.tag": "TRACK",
        "visual6.app3.title": "Storm Centroid",
        "visual6.app3.desc": "The servo is driven by where the significant weather actually is, not by a schedule. On a clear day it barely moves.",
        "visual6.app4.tag": "MODE",
        "visual6.app4.title": "Sector Scan",
        "visual6.app4.desc": "Some arrays rotate slowly for a full-volume sweep and can instead park and dwell on a small sector when a storm needs continuous attention.",
        "visual6.app5.tag": "LOAD",
        "visual6.app5.title": "Still Heavy",
        "visual6.app5.desc": "A 25 m radome on a tower is still tens of tonnes. Electronic steering removed the speed problem, not the structural one.",
        "visual6.app6.tag": "FAILURE",
        "visual6.app6.title": "Tilt and Hold",
        "visual6.app6.desc": "If the servo fails on a fixed array, electronic steering usually stops too — a mispointed array is useless. Hydraulics park and hold the face as a last resort.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "The servo system is the radar's neck — it turns the antenna.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 42：伺服系统——雷达怎么转头 — 雷达探索者",
        "page.description": "文章 42：雷达天线怎么转？电机、传动、编码器与跟踪环，为什么大天线难转，为什么相控阵还留着伺服。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月5日",
        "article.title": "伺服系统——雷达怎么转头",
        "article.subtitle": "雷达的脖子，托着一面可能重达三十吨的碗。",
        "toc.title": "本页目录",
        "toc.s1": "三个组成部分",
        "toc.s2": "惯性为什么难办",
        "toc.s3": "跟踪动画",
        "toc.s4": "计算示例",
        "toc.s5": "速度与精度",
        "toc.s6": "相控阵为什么还留着伺服",
        "article.p1": "很多雷达天线一直在转，它是怎么转的？",
        "article.p2": "伺服系统 = 电机 + 传动 + 控制系统。作用：让天线按指定方向、指定速度转动。机械扫描雷达靠它转天线；相控阵雷达不转天线，但有些也要转底座。",
        "article.p3": "像摄像头的云台，能上下左右转。伺服要稳、要准，不能抖，否则目标会丢。还要能跟踪目标，目标动，天线跟着动。",
        "article.p4": "大天线很重，伺服功率和结构强度都要够。伺服故障，雷达就「歪头」了。",
        "visual1.name": "三个组成部分",
        "visual1.title": "电机、传动、控制",
        "visual1.intro": "光有电机只会转。三样合在一起才能指准方向。",
        "fig1.title": "伺服环：进去是指令，出来是天线",
        "fig1.cmd": "指令",
        "fig1.cmd2": "要指哪里",
        "fig1.ctl": "控制器",
        "fig1.ctl2": "闭环",
        "fig1.drv": "传动",
        "fig1.drv2": "电机 + 齿轮",
        "fig1.ant": "天线",
        "fig1.enc": "编码器",
        "fig1.enc2": "实际在哪",
        "fig1.fb": "反馈——闭环靠它",
        "fig1.note": "没有编码器，电机只知道被要求去哪里，不知道最后停在哪",
        "visual1.caption": "编码器是它成为伺服而不是电机的原因。没有实测位置，风和摩擦会把天线推偏，而且没人会发现。",
        "visual2.name": "惯性为什么难办",
        "visual2.title": "三十吨的问题",
        "visual2.intro": "天线越大，越难起动、越难刹住、越难转准。",
        "visual2.row1.label": "A 雷达天线",
        "visual2.row1.value": "3 米机场天线，约 2 吨",
        "visual2.row2.label": "A 雷达转速",
        "visual2.row2.value": "快，能在一度之内刹住",
        "visual2.row3.label": "B 雷达天线",
        "visual2.row3.value": "25 米天气雷达天线，约 30 吨",
        "visual2.row4.label": "B 雷达转速",
        "visual2.row4.value": "转一整圈要好几分钟",
        "visual2.caption": "力矩要先克服惯性才能启动，刹车又要吸收惯性。整个设计问题就卡在这两个极限之间。",
        "visual3.name": "动画：跟踪",
        "visual3.title": "看天线怎么跟",
        "visual3.intro": "目标在漂，伺服必须追上去，而且不能冲过头。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 稳定——伺服保持固定方位",
        "visual3.cc2": "2. 移动——目标漂移，指令跟着走",
        "visual3.cc3": "3. 滞后——沉重的天线跟在后面",
        "visual3.cc4": "4. 修正——闭环把过冲压下去",
        "visual3.caption": "跟踪是一个控制问题。增益太小天线跟不上，太大就在目标两侧来回振荡。",
        "visual4.name": "计算示例",
        "visual4.title": "到底能转多快",
        "visual4.intro": "转一圈、每秒多少度，以及让它有用的那个波束宽度。",
        "visual4.row1.label": "扫描速度",
        "visual4.row1.value": "每分钟 6 圈——一圈 10 秒",
        "visual4.row2.label": "角速度",
        "visual4.row2.value": "360° 除以 10 秒 = 36°/秒",
        "visual4.row3.label": "波束宽度",
        "visual4.row3.value": "1°——在一个目标上的停留时间",
        "visual4.row4.label": "照射一个目标",
        "visual4.row4.value": "1° ÷ 36°/秒 = 每脉冲 28 毫秒",
        "visual4.row5.label": "600 Hz 下的脉冲数",
        "visual4.row5.value": "有 16 个脉冲打在这个目标上",
        "visual4.row6.label": "积累需要 32 个",
        "visual4.row6.value": "扫描速度降到每分钟 3 圈",
        "visual4.caption": "转速不是一个自由参数。它取决于在把整个天空扫一遍之前，你能花多少脉冲在同一个目标上。",
        "visual5.name": "速度与精度",
        "visual5.title": "六个值得记住的词",
        "visual5.intro": "让一个巨大的物体指准一个小角度的词汇表。",
        "visual5.app1.tag": "转速",
        "visual5.app1.title": "扫描速率",
        "visual5.app1.desc": "天线每秒能转多少度。它决定了全局的更新率，因为在波束扫过之前，什么都测不到。",
        "visual5.app2.tag": "精度",
        "visual5.app2.title": "指向误差",
        "visual5.app2.desc": "实际指向与计算机认为的指向差多少。十分之一度的误差，在远距离上就是一公里的位置误差。",
        "visual5.app3.tag": "风",
        "visual5.app3.title": "力矩补偿",
        "visual5.app3.desc": "大盘上的风载一直在变。控制器测出风载，给伺服加一个偏置，让波束精确停在指令方向上。",
        "visual5.app4.tag": "间隙",
        "visual5.app4.title": "齿轮空程",
        "visual5.app4.desc": "磨损的齿轮正转和反转时消隙不同，编码器读数和指令就会随方向对不上。这就是精密传动要密封的原因。",
        "visual5.app5.tag": "阻尼",
        "visual5.app5.title": "振荡控制",
        "visual5.app5.desc": "三十吨的质量装在轴承上就是一个弹簧。所以要加速度反馈，让闭环把运动压住，而不是到位之后还在振铃。",
        "visual5.app6.tag": "编码器",
        "visual5.app6.title": "绝对位置",
        "visual5.app6.desc": "轴上的光学编码器即使断过电也知道方位。没有它，天线得慢慢转回家去找自己在哪。",
        "visual5.caption": "这六项全都因为同一件事而存在：一面大质量的东西，要指准一个精确的角度。",
        "visual6.name": "相控阵为什么还留着伺服",
        "visual6.title": "波束不转了，电机还在",
        "visual6.intro": "相控阵靠电子扫描。但底座还是会动的——只是很慢。",
        "fig6.title": "阵元控制波束，底座跟着天气走",
        "fig6.face": "罩体 / 阵面",
        "fig6.face2": "不会快速旋转",
        "fig6.storm": "风暴",
        "fig6.tilt": "缓慢倾斜",
        "fig6.ped": "底座",
        "fig6.servo": "伺服",
        "fig6.servosub": "几分钟一圈",
        "fig6.elec": "波束电子扫描：微秒级",
        "visual6.caption": "相控阵取代的是高速电机，不是电机本身。它只是现在可以慢下来了。",
        "visual6.app1.tag": "原因",
        "visual6.app1.title": "扫描范围限制",
        "visual6.app1.desc": "平面阵只能把波束偏转到离开自己阵面的方向。整体倾斜能扩展可达半球，而且电子上不花任何代价。",
        "visual6.app2.tag": "原因",
        "visual6.app2.title": "日晒与结冰",
        "visual6.app2.desc": "几年下来塔会沉降、天线会结冰。缓慢的持续修正让阵面保持正确，编码器让这件事可验证。",
        "visual6.app3.tag": "跟踪",
        "visual6.app3.title": "风暴质心",
        "visual6.app3.desc": "伺服跟着重要天气的实际位置走，而不是按固定时间表。晴天时它几乎不动。",
        "visual6.app4.tag": "模式",
        "visual6.app4.title": "扇区扫描",
        "visual6.app4.desc": "有些阵列缓慢旋转做全覆盖扫描；遇到需要持续关注的风暴时，也可以停下来驻留在一个小扇区。",
        "visual6.app5.tag": "负载",
        "visual6.app5.title": "依然很重",
        "visual6.app5.desc": "塔上 25 米的罩体仍是几十吨。电子扫描解决的是速度问题，不是结构问题。",
        "visual6.app6.tag": "故障",
        "visual6.app6.title": "倾斜与保持",
        "visual6.app6.desc": "固定阵列的伺服坏了，电子扫描通常也用不了——指向错了的阵列毫无用处。最后手段是靠液压把阵面停住并保持。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "伺服系统是雷达的脖子，负责让天线转方向。",
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
