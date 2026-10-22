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
        "page.title": "Article 49: Why Some Radar Antennas Spin — Radar Explorer",
        "page.description": "Article 49: Mechanical-scan radar versus phased array, compared across dwell time, tracks at once, cost, failure modes — and why the spinning dish is not going away.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 17, 2026",
        "article.title": "Why Some Antennas Spin and Others Don't",
        "article.subtitle": "Two ways to point a beam. One costs a motor; the other costs a computer.",
        "toc.title": "On this page",
        "toc.s1": "The two architectures",
        "toc.s2": "Dwell time is the difference",
        "toc.s3": "Fan versus lights animation",
        "toc.s4": "Worked example",
        "toc.s5": "The trade-offs",
        "toc.s6": "Why the dish survives",
        "article.p1": "Some radar antennas spin all the time. Others never move. Why?",
        "article.p2": "Spinning ones: mechanical-scan radar, which turns the antenna to change beam direction. Still ones: phased-array radar, which steers the beam electronically. Mechanical scanning is simple and cheap, but slow. Phased array is fast and flexible, but complex and expensive.",
        "article.p3": "Mechanical scanning is like an oscillating fan; phased array is like many small lights working together. Phased array can track many targets at once; mechanical scanning looks at one direction at a time. Modern warships and fighter jets use phased array more and more.",
        "article.p4": "But mechanical-scan radar still has its own uses and advantages.",
        "visual1.name": "THE TWO ARCHITECTURES",
        "visual1.title": "One Beam, Two Ways to Move It",
        "visual1.intro": "In both cases there is exactly one beam. The difference is what carries it across the sky.",
        "fig1.title": "A dish that turns, and a face that does not",
        "fig1.mech": "MECHANICAL SCAN",
        "fig1.beam": "the beam",
        "fig1.turn": "it turns",
        "fig1.mech1": "the whole dish is the aiming mechanism",
        "fig1.mech2": "mass, wind load, a motor, a bearing",
        "fig1.elec": "ELECTRONIC SCAN",
        "fig1.phase": "phase shifts, not motion",
        "fig1.elec1": "phase shifters are the aiming mechanism",
        "fig1.elec2": "no moving parts, but far more electronics",
        "visual1.caption": "The array face has no moving parts at all. It does not aim anything — it changes the phase of the wave leaving each element, and the beam goes somewhere else.",
        "visual2.name": "DWELL TIME IS THE DIFFERENCE",
        "visual2.title": "One Number Explains Almost Everything",
        "visual2.intro": "How long the beam rests on one direction decides what the radar can know.",
        "visual2.row1.label": "A 1° beam on a 36°/s sweep",
        "visual2.row1.value": "28 ms per direction",
        "visual2.row2.label": "Pulses you can spend there",
        "visual2.row2.value": "about 16 at 600 Hz",
        "visual2.row3.label": "Needed to integrate",
        "visual2.row3.value": "32 pulses — so the scan must slow",
        "visual2.row4.label": "A phased array at 1 ms",
        "visual2.row4.value": "600 pulses in the same 1 ms",
        "visual2.row5.label": "It can dwell on three",
        "visual2.row5.value": "targets at once and still integrate fully",
        "visual2.row6.label": "Then jump to a fourth",
        "visual2.row6.value": "in the time the dish has not finished 2°",
        "visual2.caption": "This is the whole argument in one line: the array does not scan faster, it does many things at once. The dish can only ever be looking at one thing.",
        "visual3.name": "ANIMATION: FAN VERSUS LIGHTS",
        "visual3.title": "The Oscillating Fan and the Panel of Lights",
        "visual3.intro": "Same job, same sky. Watch how each one covers it.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. DISH -- one beam, sweeping, never in two places at once",
        "visual3.cc2": "2. ARRAY -- one beam, jumping instantly to a new bearing",
        "visual3.cc3": "3. THREE TARGETS -- the array holds all three simultaneously",
        "visual3.cc4": "4. THE SAME THREE -- the dish reaches them one at a time",
        "visual3.caption": "Neither is better at pointing. The difference is that a point of light stays lit while you look at something else.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Missile Defence and Air Traffic Control",
        "visual4.intro": "The same physics, sized for two very different jobs.",
        "visual4.row1.label": "ATC wants",
        "visual4.row1.value": "fresh data on 20 aircraft within 60 km",
        "visual4.row2.label": "Missile defence wants",
        "visual4.row2.value": "many high-speed targets, guided continuously",
        "visual4.row3.label": "A dish at 60 km",
        "visual4.row3.value": "updates every 1–2 s — fine for the first, useless for the second",
        "visual4.row4.label": "A rotating array",
        "visual4.row4.value": "updates every 0.1 s — the reason arrays took over this role",
        "visual4.row5.label": "A fixed array",
        "visual4.row5.value": "10 Hz or better, and it can hold several interceptors at once",
        "visual4.row6.label": "Consequence",
        "visual4.row6.value": "every modern fighter radar is a fixed array",
        "visual4.caption": "A fighter cannot rely on a radar that looks away for two seconds while it is closing on a missile. That single requirement decided the design.",
        "visual5.name": "THE TRADE-OFFS",
        "visual5.title": "What Each One Is Bad At",
        "visual5.intro": "A fair comparison has to name both sides' weaknesses.",
        "visual5.app1.tag": "DISH SLOW",
        "visual5.app1.title": "One Direction at a Time",
        "visual5.app1.desc": "A fast, close target can cross the beam between two visits. The radar knows it was there once, and not where it went.",
        "visual5.app2.tag": "DISH SLOW",
        "visual5.app2.title": "No Elevation Without Tilting",
        "visual5.app2.desc": "A single-axis dish covers only one elevation band per pass. Pointing up means nothing is being watched below.",
        "visual5.app3.tag": "DISH SLOW",
        "visual5.app3.title": "Wear and Storm Loading",
        "visual5.app3.desc": "A bearing takes wear, ice loads the radome, and a gust pushes the beam off. A 25 m dish needs a real maintenance regime.",
        "visual5.app4.tag": "ARRAY BAD",
        "visual5.app4.title": "Cost and Heat",
        "visual5.app4.desc": "Thousands of modules, each needing power and cooling. The support building often costs more than the antenna face.",
        "visual5.app5.tag": "ARRAY BAD",
        "visual5.app5.title": "Scan Angle Is Not Free",
        "visual5.app5.desc": "A flat face steers poorly far off axis, so a real system still mounts the array on a slow-drive pedestal to face the working hemisphere.",
        "visual5.app6.tag": "ARRAY BAD",
        "visual5.app6.title": "Failure Adds Up",
        "visual5.app6.desc": "Losing one element degrades the beam slightly; losing a whole subarray leaves a notch in it. Faults have to be found and worked around.",
        "visual5.caption": "Neither architecture wins on merit. Each one is bad at the thing the other one is good at, which is exactly why both are still in service.",
        "visual6.name": "WHY THE DISH SURVIVES",
        "visual6.title": "Cases Where Mechanical Still Wins",
        "visual6.intro": "A rotating antenna is not a legacy technology. It is the right answer to several questions.",
        "visual6.app1.tag": "COST",
        "visual6.app1.title": "Long Range, Low Budget",
        "visual6.app1.desc": "Range needs aperture and power, not electronics. A big dish on open ground covers 400 km for a fraction of an array's cost.",
        "visual6.app2.tag": "BEAM",
        "visual6.app2.title": "High Gain per Watt",
        "visual6.app2.desc": "A parabolic dish is inherently efficient, with no phase-shifter losses. For a fixed long-range warning role, that is decisive.",
        "visual6.app3.tag": "SECTOR",
        "visual6.app3.title": "A Deliberate Gap",
        "visual6.app3.desc": "Sometimes you want a radar that is blind over your own city. A rotating dish is naturally blanked in a fixed sector.",
        "visual6.app4.tag": "WIDEBAND",
        "visual6.app4.title": "Several Wavelengths",
        "visual6.app4.desc": "A dish works across a broad band, so it can be switched between frequencies for different jobs. An array's modules are built for one band.",
        "visual6.app5.tag": "REPAIR",
        "visual6.app5.title": "Simple to Understand",
        "visual6.app5.desc": "When a rotating radar stops, the cause is usually mechanical and visible. Array diagnostics are genuinely harder in the field.",
        "visual6.app6.tag": "BOTH",
        "visual6.app6.title": "The Hybrid",
        "visual6.app6.desc": "Many modern weather radars are arrays on slow pedestals: electronic beam steering for the weather, with a servo keeping the face pointed at the storms.",
        "visual6.caption": "The spinning dish is not obsolete. It is simply no longer the only sensible answer, and it never will be.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Whether it spins depends on mechanical or electronic scanning.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 49：为什么雷达天线有的转、有的不转？ — 雷达探索者",
        "page.description": "文章 49：机械扫描雷达对相控阵雷达——停留时间、可同时跟踪目标数、成本、故障模式，以及为什么旋转天线并没有过时。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月17日",
        "article.title": "为什么雷达天线有的转、有的不转？",
        "article.subtitle": "两种指向波束的方法。一种要一个电机，另一种要一台计算机。",
        "toc.title": "本页目录",
        "toc.s1": "两种架构",
        "toc.s2": "停留时间才是差别",
        "toc.s3": "风扇与灯阵动画",
        "toc.s4": "计算示例",
        "toc.s5": "各自的短板",
        "toc.s6": "旋转天线为什么还活着",
        "article.p1": "有的雷达天线一直转，有的却一动不动，为什么？",
        "article.p2": "会转的：机械扫描雷达，靠转天线改变波束方向。不转的：相控阵雷达，靠电子控制波束方向。机械扫描简单、便宜，但扫描慢。相控阵快、灵活，但复杂、贵。",
        "article.p3": "机械扫描像摇头电风扇，相控阵像很多小灯一起亮。相控阵能同时跟踪多个目标，机械扫描一次只能看一个方向。现代军舰、战斗机越来越多用相控阵。",
        "article.p4": "但机械扫描雷达仍有自己的用途和优势。",
        "visual1.name": "两种架构",
        "visual1.title": "一道波束，两种搬运方式",
        "visual1.intro": "两者都只有一道波束。区别是谁把它搬过天空。",
        "fig1.title": "会转的碗，和不动的阵面",
        "fig1.mech": "机械扫描",
        "fig1.beam": "波束",
        "fig1.turn": "它在转",
        "fig1.mech1": "整面天线就是瞄准机构",
        "fig1.mech2": "质量、风载、电机、轴承",
        "fig1.elec": "电子扫描",
        "fig1.phase": "靠相移，不靠运动",
        "fig1.elec1": "相移器就是瞄准机构",
        "fig1.elec2": "没有运动部件，但电子量大得多",
        "visual1.caption": "阵面完全没有任何运动部件。它并不「瞄准」什么——它改变每个单元射出波的相位，波束就去了别处。",
        "visual2.name": "停留时间才是差别",
        "visual2.title": "一个数字解释几乎所有事",
        "visual2.intro": "波束在一个方向上停多久，决定了雷达能知道什么。",
        "visual2.row1.label": "1° 波束在 36°/秒 扫描下",
        "visual2.row1.value": "每个方向 28 毫秒",
        "visual2.row2.label": "这里能打的脉冲数",
        "visual2.row2.value": "600 Hz 下约 16 个",
        "visual2.row3.label": "积累需要的数量",
        "visual2.row3.value": "32 个脉冲——所以扫描必须放慢",
        "visual2.row4.label": "相控阵停在 1 毫秒",
        "visual2.row4.value": "同样 1 毫秒里能打 600 个脉冲",
        "visual2.row5.label": "它可以同时停在",
        "visual2.row5.value": "三个目标上，且每个都能完成积累",
        "visual2.row6.label": "然后跳到第四个",
        "visual2.row6.value": "用的时间，天线还没转完 2°",
        "visual2.caption": "整场争论可以压缩成一句：相控阵不是扫描得更快，而是一次做很多事。旋转天线一次只能看一件事。",
        "visual3.name": "动画：风扇对灯阵",
        "visual3.title": "摇头的风扇和一整面板灯",
        "visual3.intro": "同样的活，同样的天空。看各自怎么覆盖。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 天线——一道波束在扫，绝不会同时在两个地方",
        "visual3.cc2": "2. 阵面——一道波束瞬间跳到新方位",
        "visual3.cc3": "3. 三个目标——阵面同时盯住全部三个",
        "visual3.cc4": "4. 同样三个目标——天线只能一个一个到",
        "visual3.caption": "两者指向波束的能力不分上下。差别在于：你去看别的东西时，那个光点还亮着。",
        "visual4.name": "计算示例",
        "visual4.title": "反导与空中交通管制",
        "visual4.intro": "同一套物理，尺寸服务于两种完全不同的工作。",
        "visual4.row1.label": "空管要的",
        "visual4.row1.value": "60 公里内 20 架飞机的最新数据",
        "visual4.row2.label": "反导要的",
        "visual4.row2.value": "多个高速目标，持续制导",
        "visual4.row3.label": "60 公里的旋转天线",
        "visual4.row3.value": "每 1–2 秒更新一次——第一个够用，第二个没用",
        "visual4.row4.label": "旋转相控阵",
        "visual4.row4.value": "每 0.1 秒更新——阵面取代旋转天线就是这个原因",
        "visual4.row5.label": "固定阵面",
        "visual4.row5.value": "10 Hz 或更好，而且能同时盯住多枚拦截弹",
        "visual4.row6.label": "结果",
        "visual4.row6.value": "现代战斗机雷达全都是固定阵面",
        "visual4.caption": "战斗机正在逼近导弹时，不能依赖一部「有两秒钟在看别处」的雷达。就这一个需求决定了设计。",
        "visual5.name": "各自的短板",
        "visual5.title": "各自不擅长什么",
        "visual5.intro": "公平比较必须把双方的弱点都说出来。",
        "visual5.app1.tag": "天线慢",
        "visual5.app1.title": "一次只能看一个方向",
        "visual5.app1.desc": "一个又快又近的目标可能在两次照射之间穿过波束。雷达只知道它曾经在那儿，不知道它去哪儿了。",
        "visual5.app2.tag": "天线慢",
        "visual5.app2.title": "不抬头就没有俯仰覆盖",
        "visual5.app2.desc": "单轴天线每扫一圈只覆盖一个俯仰带。往上看的时候，下面就没人看着了。",
        "visual5.app3.tag": "天线慢",
        "visual5.app3.title": "磨损与风暴载荷",
        "visual5.app3.desc": "轴承会磨损，结冰会压罩体，一阵风就能把波束推偏。25 米的天线需要一套真正的维护制度。",
        "visual5.app4.tag": "阵面的短板",
        "visual5.app4.title": "成本与热量",
        "visual5.app4.desc": "几千个模块，每个都要供电和散热。配套机房往往比天线阵面还贵。",
        "visual5.app5.tag": "阵面的短板",
        "visual5.app5.title": "扫描角度不是白得的",
        "visual5.app5.desc": "平面阵面偏离正轴越远，指向越差。所以真实系统仍然把阵面装在慢速底座上，让它对着工作半球。",
        "visual5.app6.tag": "阵面的短板",
        "visual5.app6.title": "故障会累积",
        "visual5.app6.desc": "坏一个单元只是波束略微变差；坏一整个子阵就会在波束上留一个缺口。故障必须被发现并绕开。",
        "visual5.caption": "两种架构都没有性能上的全面胜利。各自都不擅长对方擅长的那件事——这正是两者都还在服役的原因。",
        "visual6.name": "旋转天线为什么还活着",
        "visual6.title": "机械扫描仍然胜出的场合",
        "visual6.intro": "旋转天线不是过时技术。对好几个问题来说，它就是正确答案。",
        "visual6.app1.tag": "成本",
        "visual6.app1.title": "远距离、低预算",
        "visual6.app1.desc": "距离要的是口径和功率，不是电子学。一面开阔地上的大天线，用阵列零头的成本就能覆盖 400 公里。",
        "visual6.app2.tag": "波束",
        "visual6.app2.title": "每瓦增益",
        "visual6.app2.desc": "抛物面本身就是高效的，没有相移器损耗。对一个固定的远程警戒任务来说，这一点是决定性的。",
        "visual6.app3.tag": "扇区",
        "visual6.app3.title": "故意留一个盲区",
        "visual6.app3.desc": "有时候你就想要一部「在自己城区上空是瞎的」雷达。旋转天线天然可以在固定扇区做消隐。",
        "visual6.app4.tag": "宽带",
        "visual6.app4.title": "多个波长",
        "visual6.app4.desc": "天线在很宽的频段都能工作，可以在不同频率之间切换以应对不同任务。阵面的模块则是为一个频段做的。",
        "visual6.app5.tag": "维修",
        "visual6.app5.title": "故障好理解",
        "visual6.app5.desc": "旋转雷达停了，原因通常是机械性的、看得见的。阵面的现场诊断确实更难。",
        "visual6.app6.tag": "两者兼有",
        "visual6.app6.title": "混合方案",
        "visual6.app6.desc": "很多现代天气雷达是装在慢速底座上的阵面：波束电子扫描看天气，同时用伺服把阵面对准风暴所在的方向。",
        "visual6.caption": "旋转天线没有过时。它只是不再是唯一合理的选择，而且永远不会是。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "转不转，取决于机械扫描还是电子扫描。",
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
