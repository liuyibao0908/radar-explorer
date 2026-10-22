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
        "page.title": "Article 46: Weather Radar vs Normal Radar — Radar Explorer",
        "page.description": "Article 46: Weather radar and air-traffic radar send the same kind of wave and do almost opposite jobs. Targets versus fields, detection versus description, and why the antenna keeps turning.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 11, 2026",
        "article.title": "Weather Radar vs Normal Radar",
        "article.subtitle": "Same physics, opposite jobs. One wants a list, the other wants a picture.",
        "toc.title": "On this page",
        "toc.s1": "Targets versus fields",
        "toc.s2": "The same wave",
        "toc.s3": "Two pictures",
        "toc.s4": "Worked example",
        "toc.s5": "Eight differences",
        "toc.s6": "Same system, different aim",
        "article.p1": "Weather radar also sends and receives waves. How is it different from normal radar?",
        "article.p2": "Normal radar looks mainly at hard targets like aircraft and ships. Weather radar looks mainly at precipitation particles like raindrops, hail, and snow. Weather radar cares more about echo strength, speed, and distribution. Think of the same flashlight — one shines at people, one shines at fog.",
        "article.p3": "Weather radar often uses Doppler to measure wind speed. Dual-polarization weather radar can tell apart rain, snow, and hail. Weather radars work in networks to cover large areas.",
        "article.p4": "Normal radar wants to find targets; weather radar wants to describe the weather.",
        "visual1.name": "TARGETS VERSUS FIELDS",
        "visual1.title": "A Dot or a Cloud",
        "visual1.intro": "The single biggest difference is what counts as something worth seeing.",
        "fig1.title": "Hard targets and precipitation fields",
        "fig1.hard": "HARD TARGETS",
        "fig1.hard2": "a few dots, each one an aircraft",
        "fig1.soft": "PRECIPITATION",
        "fig1.soft2": "a field, no edges worth drawing around",
        "visual1.caption": "A flight radar gets a handful of dots and draws a track on each. A weather radar gets a continuous field and has to decide where the storm begins.",
        "visual2.name": "THE SAME WAVE",
        "visual2.title": "Identical Physics, Different Job",
        "visual2.intro": "Both send X- or S-band pulses, bounce them off something, and listen. Everything after that diverges.",
        "fig2.title": "Shared chain, different settings",
        "fig2.pulse": "pulse out",
        "fig2.echo": "echoes back",
        "fig2.rx": "receiver",
        "fig2.proc": "processor",
        "fig2.same": "identical in both",
        "fig2.air": "flight radar",
        "fig2.air2": "is that aircraft there?",
        "fig2.wx": "weather radar",
        "fig2.wx2": "how hard is it raining there?",
        "visual2.caption": "The hardware is closer than people expect. The difference is what the processor is asked to produce: a list of objects, or a map of intensity.",
        "visual3.name": "TWO PICTURES",
        "visual3.title": "What the Screen Actually Shows",
        "visual3.intro": "One display answers \"where is it\". The other answers \"how much, how fast, and what kind\".",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. REFLECTIVITY -- where the water is, and how heavy",
        "visual3.cc2": "3. DOPPLER VELOCITY -- is it moving toward or away",
        "visual3.cc3": "5. DUAL POL -- is it rain, snow or hail",
        "visual3.cc4": "7. THE WARNING -- the picture becomes a polygon",
        "visual3.caption": "Weather radar is really three radars in one housing. A flight radar is usually one, because one answer is enough.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Same Reflectivity, Different Meaning",
        "visual4.intro": "The number on the scale does not say what fell. It says how much came back.",
        "visual4.row1.label": "A ship returns 20 dBZ",
        "visual4.row1.value": "alarming on a flight radar",
        "visual4.row2.label": "20 dBZ of rain",
        "visual4.row2.value": "light drizzle, below any warning threshold",
        "visual4.row3.label": "A flock of birds",
        "visual4.row3.value": "weak but very close, so very strong",
        "visual4.row4.label": "Hail 5 cm across",
        "visual4.row4.value": "very high dBZ and a polarimetric signature",
        "visual4.row5.label": "Ground clutter",
        "visual4.row5.value": "static, zero Doppler velocity",
        "visual4.row6.label": "A tornado",
        "visual4.row6.value": "adjacent reds and greens — that is rotation",
        "visual4.caption": "This is why weather radar cannot stop at one product. A single number is ambiguous in a way an aircraft's echo never is.",
        "visual5.name": "EIGHT DIFFERENCES",
        "visual5.title": "The List Worth Knowing",
        "visual5.intro": "Everything that makes a weather radar a different machine from an air traffic radar.",
        "visual5.app1.tag": "WHAT",
        "visual5.app1.title": "Targets or Fields",
        "visual5.app1.desc": "A flight radar assumes a small number of discrete objects. A weather radar receives returns from everywhere inside its beam at once and must treat them as one continuous medium.",
        "visual5.app2.tag": "SCALE",
        "visual5.app2.title": "Centimetres or Decimetres",
        "visual5.app2.desc": "Aircraft radar wants centimetre wavelengths for resolution. Weather radar uses decimetre wavelengths because longer waves penetrate rain instead of being smothered by it.",
        "visual5.app3.tag": "POWER",
        "visual5.app3.title": "Kilowatts or Megawatts",
        "visual5.app3.desc": "A flight radar only needs to see aircraft with enormous radar cross sections. Hail is a poor reflector, so weather radar pushes hundreds of kilowatts to see rain at all.",
        "visual5.app4.tag": "RANGE",
        "visual5.app4.title": "Kilometres or Hundred",
        "visual5.app4.desc": "Warning lead time is the point. A flight radar needs a few minutes; a weather radar needs an hour, so it sees ten times further and accepts far worse resolution.",
        "visual5.app5.tag": "DOPPLER",
        "visual5.app5.title": "Optional or Essential",
        "visual5.app5.desc": "An aircraft's speed is found by tracking it between scans. Wind speed is only available from the Doppler shift inside a single pulse, so weather radar cannot work without it.",
        "visual5.app6.tag": "POLAR",
        "visual5.app6.title": "Rare or Routine",
        "visual5.app6.desc": "Dual polarization tells a flight radar nothing extra about an aircraft. For rain it is the difference between rain, snow and hail — a routine requirement, not a feature.",
        "visual5.app7.tag": "SCAN",
        "visual5.app7.title": "Fast or Slow",
        "visual5.app7.desc": "A flight radar spins quickly for a fresh picture of a fast-moving threat. A weather radar spins slowly because a storm changes more slowly than an aircraft does.",
        "visual5.app8.tag": "NET",
        "visual5.app8.title": "Standalone or Networked",
        "visual5.app8.desc": "One air traffic radar guards one airfield. A storm crosses hundreds of kilometres, so national coverage only works as a network of stations sharing data.",
        "visual5.caption": "Two of these are opposite: a flight radar trades resolution for speed, a weather radar trades resolution for range.",
        "visual6.name": "SAME SYSTEM, DIFFERENT AIM",
        "visual6.title": "Detect or Describe",
        "visual6.intro": "The cleanest way to hold both in your head.",
        "visual6.app1.tag": "OUTPUT",
        "visual6.app1.title": "A List or a Map",
        "visual6.app1.desc": "A flight radar produces a track file: identifiers, positions, velocities, intentions. A weather radar produces a grid of numbers covering every cell inside the beam.",
        "visual6.app2.tag": "ERRORS",
        "visual6.app2.title": "Missed or Overcalled",
        "visual6.app2.desc": "A flight radar's failure mode is a missed aircraft, which is catastrophic and rare. A weather radar's failure is a false alarm, which is common and embarrassing.",
        "visual6.app3.tag": "ALARM",
        "visual6.app3.title": "Per Target",
        "visual6.app3.desc": "Warnings attach to one aircraft and one interceptor. Weather warnings are polygons covering ground, because the danger is a region of wind and rain, not an object.",
        "visual6.app4.tag": "CLUTTER",
        "visual6.app4.title": "Everything Else",
        "visual6.app4.desc": "For an aircraft radar birds, clouds and rain are noise to be filtered out. For a weather radar much of that noise is the signal, and ground clutter is the enemy instead.",
        "visual6.app5.tag": "HORIZON",
        "visual6.app5.title": "Dome or Patch",
        "visual6.app5.desc": "Low-level flight radar covers a local cone. A weather radar sees the whole atmosphere out to the horizon, and is limited by curvature and beam height, not by the aircraft it serves.",
        "visual6.app6.tag": "MESSAGE",
        "visual6.app6.title": "One Number or Many",
        "visual6.app6.desc": "A flight controller asks one question: is it safe to land? A forecaster asks six at once: how much, how fast, which direction, what type, how tall, and how long.",
        "visual6.caption": "Same transmitter, same receiver, same mathematics. What differs is the question being asked of the result.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Weather radar watches precipitation; normal radar watches hard targets.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 46：天气雷达和普通雷达差在哪？ — 雷达探索者",
        "page.description": "文章 46：天气雷达和空中交通雷达发的是同一种波，干的却是几乎相反的事。目标与场、发现与描述，以及天线为什么一直转。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月11日",
        "article.title": "天气雷达和普通雷达差在哪？",
        "article.subtitle": "物理一样，活儿相反。一个要一份清单，另一个要一幅画面。",
        "toc.title": "本页目录",
        "toc.s1": "目标与场",
        "toc.s2": "同样的波",
        "toc.s3": "两幅画面",
        "toc.s4": "计算示例",
        "toc.s5": "八点区别",
        "toc.s6": "同样的系统，不同的目标",
        "article.p1": "天气雷达也能发波收波，它和普通雷达有什么不同？",
        "article.p2": "普通雷达主要看飞机、船只等硬目标。天气雷达主要看雨滴、冰雹、雪花等降水粒子。天气雷达更关注回波强度、速度、分布。像同样用手电筒，一个照人，一个照雾。",
        "article.p3": "天气雷达常用多普勒技术测风速。双偏振天气雷达还能区分雨、雪、冰雹。天气雷达要组网，才能覆盖大范围。",
        "article.p4": "普通雷达要的是发现目标，天气雷达要的是描述天气。",
        "visual1.name": "目标与场",
        "visual1.title": "一个点，还是一片云",
        "visual1.intro": "最大的差别，是什么才算「值得看见的东西」。",
        "fig1.title": "硬目标与降水场",
        "fig1.hard": "硬目标",
        "fig1.hard2": "几个光点，每个是一架飞机",
        "fig1.soft": "降水",
        "fig1.soft2": "一片连续的场，没有值得描边的边界",
        "visual1.caption": "飞行雷达拿到的是几个孤立的点，然后给每个点画一条航迹。天气雷达拿到的是连续的场，得自己判断风暴从哪里开始。",
        "visual2.name": "同样的波",
        "visual2.title": "物理一样，活儿不同",
        "visual2.intro": "两者都发射 X 波段或 S 波段脉冲，打到什么东西上弹回来，再听。之后才分道扬镳。",
        "fig2.title": "共用一条链路，参数不同",
        "fig2.pulse": "发出脉冲",
        "fig2.echo": "回波返回",
        "fig2.rx": "接收机",
        "fig2.proc": "处理机",
        "fig2.same": "两者完全相同",
        "fig2.air": "飞行雷达",
        "fig2.air2": "那架飞机在不在？",
        "fig2.wx": "天气雷达",
        "fig2.wx2": "那边雨下得有多大？",
        "visual2.caption": "两者的硬件比大多数人想的更接近。差别在于处理机被要求产出什么：一份目标清单，还是一张强度图。",
        "visual3.name": "两幅画面",
        "visual3.title": "屏幕上到底显示什么",
        "visual3.intro": "一种屏幕回答「它在哪」，另一种回答「多大、多快、是什么」。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 反射率——水在哪，有多大",
        "visual3.cc2": "3. 多普勒速度——在靠近还是远离",
        "visual3.cc3": "5. 双偏振——是雨、雪还是冰雹",
        "visual3.cc4": "7. 预警——画面变成一个多边形",
        "visual3.caption": "天气雷达其实是一台壳子里的三部雷达。飞行雷达通常只有一部，因为一个答案就够了。",
        "visual4.name": "计算示例",
        "visual4.title": "同样的反射率，不同的含义",
        "visual4.intro": "标尺上的数字不告诉你下的是什么，只告诉你回来多少。",
        "visual4.row1.label": "一艘船返回 20 dBZ",
        "visual4.row1.value": "在飞行雷达上足以报警",
        "visual4.row2.label": "20 dBZ 的雨",
        "visual4.row2.value": "小雨，连预警门限都不到",
        "visual4.row3.label": "一群鸟",
        "visual4.row3.value": "单个很弱，但离得近，所以回波很强",
        "visual4.row4.label": "5 厘米的冰雹",
        "visual4.row4.value": "dBZ 极高，并且有偏振特征",
        "visual4.row5.label": "地面杂波",
        "visual4.row5.value": "静止，多普勒速度为零",
        "visual4.row6.label": "龙卷",
        "visual4.row6.value": "红绿相邻——那是旋转",
        "visual4.caption": "这就是天气雷达不能停在单一产品上的原因。一个数字的歧义，是飞机回波永远不会有的。",
        "visual5.name": "八点区别",
        "visual5.title": "值得记住的清单",
        "visual5.intro": "让天气雷达成为另一类机器的所有原因。",
        "visual5.app1.tag": "看什么",
        "visual5.app1.title": "目标还是场",
        "visual5.app1.desc": "飞行雷达假设目标数量很少且彼此分明。天气雷达同时收到波束内所有地方的回波，必须把它们当成一个连续介质。",
        "visual5.app2.tag": "波长",
        "visual5.app2.title": "厘米还是分米",
        "visual5.app2.desc": "飞机雷达要厘米波来提高分辨率。天气雷达用分米波，因为长波能穿透雨，而不是被雨闷死。",
        "visual5.app3.tag": "功率",
        "visual5.app3.title": "千瓦还是兆瓦",
        "visual5.app3.desc": "飞行雷达只需看到雷达截面积巨大的飞机。冰雹反射很弱，所以天气雷达要推到几百千瓦才看得见雨。",
        "visual5.app4.tag": "距离",
        "visual5.app4.title": "几十公里还是几百",
        "visual5.app4.desc": "关键是预警提前量。飞行雷达需要几分钟，天气雷达需要一小时，所以它看得远十倍，并接受差得多的分辨率。",
        "visual5.app5.tag": "多普勒",
        "visual5.app5.title": "可选还是必需",
        "visual5.app5.desc": "飞机的速度靠多次扫描之间跟踪得到。风速只能从单个脉冲里的多普勒频移得到，所以天气雷达离了它不行。",
        "visual5.app6.tag": "偏振",
        "visual5.app6.title": "少见还是常规",
        "visual5.app6.desc": "双偏振对飞行雷达了解飞机没有额外帮助。对雨来说，它是区分雨、雪、冰雹的关键——是必需配置，不是选装。",
        "visual5.app7.tag": "扫描",
        "visual5.app7.title": "快还是慢",
        "visual5.app7.desc": "飞行雷达转得快，为了快速目标的新画面。天气雷达转得慢，因为风暴的变化比飞机慢得多。",
        "visual5.app8.tag": "组网",
        "visual5.app8.title": "独立还是组网",
        "visual5.app8.desc": "一部空中交通雷达守一个机场。一场风暴能跨几百公里，所以全国覆盖只能靠站网共享数据。",
        "visual5.caption": "其中两点正好相反：飞行雷达拿分辨率换速度，天气雷达拿分辨率换距离。",
        "visual6.name": "同样的系统，不同的目标",
        "visual6.title": "发现，还是描述",
        "visual6.intro": "把两者同时装进脑子里的最简洁方式。",
        "visual6.app1.tag": "产出",
        "visual6.app1.title": "清单还是地图",
        "visual6.app1.desc": "飞行雷达产出航迹文件：代号、位置、速度、意图。天气雷达产出一整张数字网格，覆盖波束里的每一个单元。",
        "visual6.app2.tag": "失误",
        "visual6.app2.title": "漏报还是虚警",
        "visual6.app2.desc": "飞行雷达的失误是漏掉一架飞机，罕见但灾难性。天气雷达的失误是虚警，常见且令人尴尬。",
        "visual6.app3.tag": "警报",
        "visual6.app3.title": "针对目标",
        "visual6.app3.desc": "飞行雷达的警报挂在某一架飞机和某架拦截机上。天气的警报是覆盖一片地面的多边形，因为危险是一片风雨区域，不是一个物体。",
        "visual6.app4.tag": "杂波",
        "visual6.app4.title": "其余一切",
        "visual6.app4.desc": "对飞机雷达来说，鸟、云、雨都是要滤掉的噪声。对天气雷达来说，那些噪声里很大一部分正是信号，而真正的敌人换成了地面杂波。",
        "visual6.app5.tag": "覆盖",
        "visual6.app5.title": "局部圆锥还是整片大气",
        "visual6.app5.desc": "低空飞行雷达覆盖一个局部锥体。天气雷达看到地平线以内的整片大气，它的限制是曲率和波束高度，而不是它服务的飞机。",
        "visual6.app6.tag": "问题",
        "visual6.app6.title": "一个问题还是六个问题",
        "visual6.app6.desc": "飞行管制问一个问题：能不能安全着陆？预报员一次问六个：多大、多快、什么方向、什么类型、多高、持续多久。",
        "visual6.caption": "同样的发射机、同样的接收机、同样的数学。不同的只是对结果提出的问题。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "天气雷达看降水，普通雷达看硬目标。",
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
