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
        "page.title": "Article 41: The Signal Processor — Radar Explorer",
        "page.description": "Article 41: How does a radar decide what is a target? Filtering, integration, Doppler processing and CFAR detection — the four stages that turn noise into a track.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 4, 2026",
        "article.title": "The Signal Processor — The Radar's Brain",
        "article.subtitle": "Noise is not the enemy. A fixed threshold is.",
        "toc.title": "On this page",
        "toc.s1": "The raw signal",
        "toc.s2": "Four stages",
        "toc.s3": "Doppler animation",
        "toc.s4": "Worked example",
        "toc.s5": "CFAR in detail",
        "toc.s6": "Where the time goes",
        "article.p1": "What the antenna receives is a mix — targets, clutter, and noise. How do you pick out the real target?",
        "article.p2": "The signal processor's job: find real targets in the mess. Common methods include filtering, integration, Doppler processing, and constant false alarm rate detection.",
        "article.p3": "Think of a teacher picking out one voice in a noisy classroom. Doppler processing separates moving targets from still clutter. Integration adds up multiple pulses to strengthen weak targets. Constant false alarm rate keeps alarms steady in different environments.",
        "article.p4": "The faster it processes, the faster the radar reacts and the more targets it can track. Modern radars also use AI to help identify targets.",
        "visual1.name": "THE RAW SIGNAL",
        "visual1.title": "What Actually Arrives",
        "visual1.intro": "Every range cell arrives with everything that happened at that distance, mixed together.",
        "fig1.title": "One range cell: target, clutter and noise together",
        "fig1.noise": "thermal noise",
        "fig1.clutter": "ground clutter",
        "fig1.target": "target",
        "fig1.range": "range →",
        "fig1.amp": "strength",
        "fig1.quote": "nothing here says which bump is a plane",
        "visual1.caption": "The processor never sees \"an aircraft\". It sees one number per range cell per antenna, repeated for every pulse. Everything after this is arithmetic on those numbers.",
        "visual2.name": "FOUR STAGES",
        "visual2.title": "The Processing Chain",
        "visual2.intro": "Four stages, each solving a different problem. The order matters.",
        "fig2.title": "Raw echoes to target tracks",
        "fig2.raw": "raw",
        "fig2.rawsub": "I / Q samples",
        "fig2.t1": "every pulse",
        "fig2.bank": "filter",
        "fig2.banksub": "matched pulse",
        "fig2.t2": "1 pulse",
        "fig2.dop": "Doppler",
        "fig2.dopsub": "FFT over pulses",
        "fig2.t3": "1 dwell",
        "fig2.cfar": "CFAR",
        "fig2.cfarsub": "adaptive threshold",
        "fig2.t4": "per cell",
        "fig2.filter": "boost the signal",
        "fig2.sep": "separate by speed",
        "fig2.decide": "decide what is real",
        "fig2.note": "then a tracker groups surviving detections into tracks, and only those become blips on the display",
        "visual2.caption": "Filtering raises signal-to-noise. Doppler adds a third axis. CFAR decides. Tracking then decides which detections are the same object over time.",
        "visual3.name": "ANIMATION: DOPPLER SEPARATION",
        "visual3.title": "Moving or Standing Still",
        "visual3.intro": "A still building and a moving aircraft look identical in range. Their Doppler is not.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. RANGE -- both objects sit at the same distance",
        "visual3.cc2": "2. ACROSS PULSES -- the moving target shifts its phase each pulse",
        "visual3.cc3": "3. FFT -- the shift becomes a frequency, and shows up as a peak",
        "visual3.cc4": "4. SEPARATED -- clutter at zero speed, aircraft at its own",
        "visual3.caption": "The FFT turns \"how the phase changed\" into \"how fast\". Zero Doppler means still, so buildings, ground and towers all pile up at the centre line.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Why the Threshold Cannot Be Fixed",
        "visual4.intro": "Two radars, the same target, very different surroundings.",
        "visual4.row1.label": "Radar A clutter",
        "visual4.row1.value": "sea and sky — very low",
        "visual4.row2.label": "Fixed threshold",
        "visual4.row2.value": "works — few false alarms",
        "visual4.row3.label": "Radar B clutter",
        "visual4.row3.value": "forest and hills — very high",
        "visual4.row4.label": "Same threshold",
        "visual4.row4.value": "hundreds of thousands of false alarms",
        "visual4.row5.label": "CFAR result",
        "visual4.row5.value": "both report the same false-alarm rate",
        "visual4.caption": "CFAR measures the local noise floor and sets the threshold just above it. The number of false alarms stays constant while the required detection threshold moves with the clutter.",
        "visual5.name": "CFAR IN DETAIL",
        "visual5.title": "Six Words, One Idea",
        "visual5.intro": "Constant false alarm rate: the alphabet soup that hides the most important idea in detection.",
        "visual5.app1.tag": "CELL UNDER TEST",
        "visual5.app1.title": "CUT",
        "visual5.app1.desc": "The one cell being decided. Its value is compared against the threshold — but never against the reference cells, so a real target cannot raise its own alarm level.",
        "visual5.app2.tag": "REFERENCE",
        "visual5.app2.title": "Training Cells",
        "visual5.app2.desc": "A ring of guard-banded cells around the CUT, split into leading and trailing halves. They sample the local background without touching the target itself.",
        "visual5.app3.tag": "CA-CA",
        "visual5.app3.title": "Cell Averaging",
        "visual5.app3.desc": "Take the mean of the reference cells and multiply by a factor alpha. Simple, but assumes the clutter is uniformly distributed — badly wrong next to buildings or sea clutter.",
        "visual5.app4.tag": "OS-CFAR",
        "visual5.app4.title": "Cut the Outliers",
        "visual5.app4.desc": "Discard the largest few reference values before averaging, so one interfering target cannot drag the threshold up and hide a real one next to it.",
        "visual5.app5.tag": "CFAR",
        "visual5.app5.title": "Clutter Estimate",
        "visual5.app5.desc": "Replace the mean with the median of the reference cells. Far more resistant to non-Gaussian clutter than any average, which is why it is the usual choice for real radars.",
        "visual5.app6.tag": "ALPHA",
        "visual5.app6.title": "The Trade-off",
        "visual5.app6.desc": "Alpha sets how many false alarms you accept. Low alpha means few false alarms but missed weak targets; high alpha catches everything but floods the screen. There is no good value, only a chosen one.",
        "visual5.caption": "Every CFAR variant is the same idea with a different statistic. The alphabet changes; the logic does not.",
        "visual6.name": "WHERE THE TIME GOES",
        "visual6.title": "The Arithmetic Budget",
        "visual6.intro": "How much compute a single scan needs, and why the answer is always \"more\".",
        "visual6.app1.tag": "FFT",
        "visual6.app1.title": "Most of the Work",
        "visual6.app1.desc": "One FFT per range cell per pulse, over 64 to 1024 pulses. A radar with 900 range cells and 64 pulses is doing about 58 000 transforms per dwell — every dwell, every scan.",
        "visual6.app2.tag": "GPGPU",
        "visual6.app2.title": "Thousands of Cores",
        "visual6.app2.desc": "The transforms are embarrassingly parallel, so a radar signal processor is essentially a small supercomputer. Modern radars use FPGA plus GPU for exactly this workload.",
        "visual6.app3.tag": "GPU vs FPGA",
        "visual6.app3.title": "Predictable or Flexible",
        "visual6.app3.desc": "FPGAs give fixed, guaranteed latency, which matters for a rotating antenna. GPUs are far more flexible and easier to reprogram, so most radars run both together.",
        "visual6.app4.tag": "RESOLUTION",
        "visual6.app4.title": "The Cost of Sharpness",
        "visual6.app4.desc": "More pulses gives a finer Doppler resolution, and every extra pulse is another FFT. Doubling the pulse count doubles the compute for a factor of two in sharpness.",
        "visual6.app5.tag": "AI",
        "visual6.app5.title": "What Machine Learning Adds",
        "visual6.app5.desc": "CFAR is optimal only for Gaussian noise. Real clutter is not, so neural networks trained on recorded data learn a decision CFAR cannot express — at the cost of a training set you have to keep current.",
        "visual6.app6.tag": "TRACKING",
        "visual6.app6.title": "The Last Stage",
        "visual6.app6.desc": "After detection, a tracker such as a Kalman filter associates detections over time, predicts where each target will be, and assigns a track number. This is what makes the blip move smoothly instead of jumping.",
        "visual6.caption": "Detection decides what exists now. Tracking decides what it is. The display only ever shows the second answer.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "The signal processor is the radar's brain — it picks targets out of noise.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 41：信号处理机——雷达的大脑 — 雷达探索者",
        "page.description": "文章 41：雷达怎么判断什么是目标？滤波、积累、多普勒处理与恒虚警检测——四步把噪声变成航迹。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月4日",
        "article.title": "信号处理机——雷达的大脑",
        "article.subtitle": "噪声不是敌人，固定门限才是。",
        "toc.title": "本页目录",
        "toc.s1": "原始信号",
        "toc.s2": "四个阶段",
        "toc.s3": "多普勒动画",
        "toc.s4": "计算示例",
        "toc.s5": "CFAR 详解",
        "toc.s6": "算力花在哪",
        "article.p1": "天线收回来的是混杂信号，有目标、有杂波、有噪声。怎么挑出真目标？",
        "article.p2": "信号处理机的任务：从乱七八糟的信号里挑出真目标。常见处理有滤波、积累、多普勒处理、恒虚警检测。",
        "article.p3": "像在嘈杂教室里，老师能听出谁在说话。多普勒处理能区分动目标和静止杂波。积累是把多个脉冲加起来，增强弱目标。恒虚警检测让雷达在不同环境下保持稳定报警。",
        "article.p4": "处理越快，雷达反应越快，能同时跟踪更多目标。现代雷达还用人工智能辅助识别目标。",
        "visual1.name": "原始信号",
        "visual1.title": "到底收到了什么",
        "visual1.intro": "每一个距离单元回来的，是那个距离上发生的一切混在一起。",
        "fig1.title": "一个距离单元：目标、杂波和噪声混在一起",
        "fig1.noise": "热噪声",
        "fig1.clutter": "地物杂波",
        "fig1.target": "目标",
        "fig1.range": "距离 →",
        "fig1.amp": "强度",
        "fig1.quote": "这里没有任何东西告诉你哪个凸起是飞机",
        "visual1.caption": "处理机从来没见过「一架飞机」。它看到的是每个距离单元、每个天线上的一个数，每个脉冲重复一次。往后的一切都是对这些数做算术。",
        "visual2.name": "四个阶段",
        "visual2.title": "处理链路",
        "visual2.intro": "四个阶段，各解决不同的问题。顺序很重要。",
        "fig2.title": "从原始回波到目标航迹",
        "fig2.raw": "原始",
        "fig2.rawsub": "I / Q 采样",
        "fig2.t1": "每个脉冲",
        "fig2.bank": "滤波",
        "fig2.banksub": "匹配脉冲",
        "fig2.t2": "1 个脉冲",
        "fig2.dop": "多普勒",
        "fig2.dopsub": "对脉冲做 FFT",
        "fig2.t3": "1 次驻留",
        "fig2.cfar": "CFAR",
        "fig2.cfarsub": "自适应门限",
        "fig2.t4": "逐单元",
        "fig2.filter": "抬高信号",
        "fig2.sep": "按速度分开",
        "fig2.decide": "判断什么是真的",
        "fig2.note": "然后跟踪器把存活的检测点归并成航迹，只有它们才会变成屏幕上的光点",
        "visual2.caption": "滤波抬高信噪比。多普勒加上第三个维度。CFAR 做判断。跟踪再判断哪些检测在时间上是同一个东西。",
        "visual3.name": "动画：多普勒分离",
        "visual3.title": "在动还是静止",
        "visual3.intro": "一栋静止的楼和一架飞行的飞机，在距离上看起来一样。多普勒可不一样。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 距离——两个目标在同样的距离上",
        "visual3.cc2": "2. 跨脉冲——运动目标每个脉冲都在改变相位",
        "visual3.cc3": "3. FFT——相位移变成频率，表现为一个峰",
        "visual3.cc4": "4. 分开了——杂波在零速，飞机在自己的频率上",
        "visual3.caption": "FFT 把「相位怎么变」变成「有多快」。零多普勒意味着静止，所以建筑物、地面和塔全都堆在中心线上。",
        "visual4.name": "计算示例",
        "visual4.title": "为什么门限不能固定",
        "visual4.intro": "两部雷达，同一个目标，环境天差地别。",
        "visual4.row1.label": "A 台的杂波",
        "visual4.row1.value": "海面和天空——很低",
        "visual4.row2.label": "固定门限",
        "visual4.row2.value": "好用——虚警很少",
        "visual4.row3.label": "B 台的杂波",
        "visual4.row3.value": "森林和山地——很高",
        "visual4.row4.label": "同样的门限",
        "visual4.row4.value": "几十万条虚警",
        "visual4.row5.label": "CFAR 的结果",
        "visual4.row5.value": "两台报出同样的虚警率",
        "visual4.caption": "CFAR 测量局部噪声底，把门限设在它稍稍上面一点。虚警数量保持恒定，而所需门限随杂波上下移动。",
        "visual5.name": "CFAR 详解",
        "visual5.title": "六个词，一个意思",
        "visual5.intro": "恒虚警率：这串字母缩写里，藏着检测中最关键的一个想法。",
        "visual5.app1.tag": "被检单元",
        "visual5.app1.title": "CUT",
        "visual5.app1.desc": "正在做判断的那一个单元。它的值只和门限比，不和参考单元比——所以一个真目标无法抬高自己的报警门限。",
        "visual5.app2.tag": "参考",
        "visual5.app2.title": "训练单元",
        "visual5.app2.desc": "围绕 CUT 的一圈带保护的单元，分成前半圈和后半圈。它们采样局部背景，但不碰目标本身。",
        "visual5.app3.tag": "CA-CA",
        "visual5.app3.title": "单元平均",
        "visual5.app3.desc": "取参考单元的均值再乘一个系数 alpha。做法简单，但假设杂波均匀分布——在建筑物旁边或海杂波环境下会错得很厉害。",
        "visual5.app4.tag": "OS-CFAR",
        "visual5.app4.title": "剔掉离群值",
        "visual5.app4.desc": "平均之前先扔掉最大的几个参考值，这样一个干扰目标就不会把门限抬起来，把旁边的真目标藏住。",
        "visual5.app5.tag": "CFAR",
        "visual5.app5.title": "杂波估计",
        "visual5.app5.desc": "把均值换成参考单元的中位数。对非高斯杂波的抵抗力远强于任何平均值，所以真实雷达通常选它。",
        "visual5.app6.tag": "ALPHA",
        "visual5.app6.title": "取舍",
        "visual5.app6.desc": "alpha 决定你接受多少虚警。低 alpha 虚警少但漏掉弱目标；高 alpha 什么都抓到但屏幕被淹没。没有好值，只有选定的值。",
        "visual5.caption": "所有 CFAR 变体都是同一个思路配不同统计量。字母在变，逻辑没变。",
        "visual6.name": "算力花在哪",
        "visual6.title": "算术预算",
        "visual6.intro": "一次扫描需要多少算力，以及为什么答案永远是「更多」。",
        "visual6.app1.tag": "FFT",
        "visual6.app1.title": "大头在这",
        "visual6.app1.desc": "每个距离单元、每个脉冲做一次 FFT，脉冲数 64 到 1024。一部 900 个距离单元、64 个脉冲的雷达，一次驻留要做大约 58000 次变换——每次驻留，每次扫描都要做。",
        "visual6.app2.tag": "GPGPU",
        "visual6.app2.title": "成千上万个核心",
        "visual6.app2.desc": "这些变换天然适合并行，所以雷达信号处理机本质上就是一台小型超算。现代雷达正是为这个负载组合 FPGA 加 GPU。",
        "visual6.app3.tag": "GPU 对 FPGA",
        "visual6.app3.title": "可预测还是灵活",
        "visual6.app3.desc": "FPGA 的延迟固定可保证，这对旋转天线很重要。GPU 灵活得多也更容易重编程，所以多数雷达两者一起用。",
        "visual6.app4.tag": "分辨率",
        "visual6.app4.title": "清晰度的代价",
        "visual6.app4.desc": "脉冲越多，多普勒分辨率越细，而每多一个脉冲就多一次 FFT。脉冲数翻一倍，算力翻一倍，清晰度只细一倍。",
        "visual6.app5.tag": "AI",
        "visual6.app5.title": "机器学习补上了什么",
        "visual6.app5.desc": "CFAR 只在高斯噪声下才是最优的。真实杂波不是，所以在录音数据上训练的神经网络能学到 CFAR 表达不了的判断——代价是你得一直维护那份训练集。",
        "visual6.app6.tag": "跟踪",
        "visual6.app6.title": "最后一步",
        "visual6.app6.desc": "检测之后，像卡尔曼滤波这样的跟踪器把检测点在时间上关联起来，预测每个目标下一步会在哪，并分配航迹号。这就是光点为什么平滑移动而不是乱跳。",
        "visual6.caption": "检测决定此刻存在什么，跟踪决定那是什么。屏幕上显示的永远只是第二个答案。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "信号处理机是雷达的大脑，负责从噪声里挑目标。",
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
