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
        "page.title": "Article 48: Is Radar Radiation Harmful? — Radar Explorer",
        "page.description": "Article 48: Radar emits radio waves, but the intensity falls fast with distance. Where the exposure limits actually come from, what a radar looks like from outside, and why the microwave analogy misleads.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 14, 2026",
        "article.title": "Is Radar Radiation Harmful?",
        "article.subtitle": "The intensity falls off fast. The rules exist because it is not fast enough.",
        "toc.title": "On this page",
        "toc.s1": "The falloff problem",
        "toc.s2": "Falloff animation",
        "toc.s3": "The microwave analogy",
        "toc.s4": "Worked example",
        "toc.s5": "Where the limits come from",
        "toc.s6": "What you actually see",
        "article.p1": "Radar uses a lot of power. Is it dangerous to stand next to one?",
        "article.p2": "Radar does send out radio waves, but the strength drops quickly with distance. Proper radars have safety distances and rules. For everyday radar, as long as you don't stay very close for a long time, it's usually safe.",
        "article.p3": "Think of a microwave — don't press your face against it while it's running, but normal use is fine. High-power radar stations set warning zones and keep people away. Whether radiation is harmful depends on frequency, power, distance, and time.",
        "article.p4": "Military and civilian radars both have safety standards. So no need to panic, but do follow the rules.",
        "visual1.name": "THE FALLOFF PROBLEM",
        "visual1.title": "Intensity Falls as One Over R Squared",
        "visual1.intro": "Spreading a wave over a sphere is why a radar's own neighbourhood is safe but its mast is not.",
        "fig1.title": "Why the field falls away so quickly",
        "fig1.shed": "equipment",
        "fig1.inside": "inside",
        "fig1.z1": "inside",
        "fig1.z2": "near",
        "fig1.z3": "public",
        "fig1.z4": "perimeter",
        "fig1.axis": "distance from the antenna",
        "fig1.law": "intensity ∝ 1 / R²",
        "fig1.note": "double the distance, one quarter the field",
        "visual1.caption": "The wave leaves the antenna in every direction at once. Almost all of that energy is wasted, and that waste is exactly what keeps the perimeter safe.",
        "visual2.name": "FALLOFF ANIMATION",
        "visual2.title": "Walking Away From the Mast",
        "visual2.intro": "One antenna, one person, and a power level that falls by 100 dB in a short walk.",
        "visual2.fallback": "Your browser does not support the video tag.",
        "visual2.cc1": "1. AT THE MAST -- inside the controlled area, restricted",
        "visual2.cc2": "2. WALKING OUT -- the field falls as one over R squared",
        "visual2.cc3": "3. AT THE FENCE -- down 40 dB, far below the limit",
        "visual2.cc4": "4. BEYOND -- the radar is still transmitting, still safe",
        "visual2.caption": "The radar does not switch off when you leave. It is the distance doing the work.",
        "visual3.name": "THE MICROWAVE ANALOGY",
        "visual3.title": "Why the Analogy Is Reasonable but Wrong",
        "visual3.intro": "A microwave oven leaks 5 watts into a sealed steel box. A radar runs 100 kilowatts into open air.",
        "visual3.app1.tag": "SAME",
        "visual3.app1.title": "Why It Feels Right",
        "visual3.app1.desc": "Both are microwave-frequency devices. Both put an intense field inside a small space. Both have a power source you should not open while it runs.",
        "visual3.app2.tag": "DIFFERENT",
        "visual3.app2.title": "The Leak Is Backwards",
        "visual3.app2.desc": "A microwave oven leaks 5 watts outwards from a small cavity. A radar emits 100 kW into open space, and you are the small cavity standing in it.",
        "visual3.app3.tag": "SHIELDED",
        "visual3.app3.title": "The Oven Is Enclosed",
        "visual3.app3.desc": "A microwave oven is a Faraday cage. A radar has no cage at all — by design it must radiate into the sky, which is the entire point.",
        "visual3.app4.tag": "PULSED",
        "visual3.app4.title": "Duty Cycle Saves People",
        "visual3.app4.desc": "Radar transmits in microsecond bursts and listens between them. The time-averaged field is orders of magnitude below the peak, and exposure limits are averaged, not peak.",
        "visual3.app5.tag": "WHY",
        "visual3.app5.title": "Why There Are Fences",
        "visual3.app5.desc": "Not because a passer-by is in danger, but because someone standing at the mast for a whole shift is. The rules are about occupation, not about passing.",
        "visual3.app6.tag": "RESULT",
        "visual3.app6.title": "The Honest Summary",
        "visual3.app6.desc": "Radar fields are strong at the antenna and weak at the fence. There is no established mechanism by which a radar causes illness at legal exposure levels.",
        "visual3.caption": "The microwave comparison is good for intuition and bad for physics. Keep the caution, drop the arithmetic.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "One Antenna, Four Distances",
        "visual4.intro": "A 20 kW average-output radar antenna, and the field at a few distances from it.",
        "visual4.row1.label": "At the mast, 2 m",
        "visual4.row1.value": "well above the occupational limit — fenced off",
        "visual4.row2.label": "At 20 m",
        "visual4.row2.value": "down 20 dB, around the limit",
        "visual4.row3.label": "At the perimeter, 100 m",
        "visual4.row3.value": "down 34 dB — this is where the fence is",
        "visual4.row4.label": "At 1 km",
        "visual4.row4.value": "down 54 dB, far below any limit",
        "visual4.row5.label": "At 10 km",
        "visual4.row5.value": "down 74 dB — irrelevant to health",
        "visual4.row6.label": "The arithmetic behind this",
        "visual4.row6.value": "every doubling of distance costs 6 dB",
        "visual4.caption": "The rule of thumb to remember: double the distance, lose 6 dB. Going from 2 m to 100 m is a factor of 50, which is 34 dB.",
        "visual5.name": "WHERE THE LIMITS COME FROM",
        "visual5.title": "How a Number Is Decided",
        "visual5.intro": "Exposure limits are not physics. They are the output of a long argument between evidence and precaution.",
        "visual5.app1.tag": "ICNIRP",
        "visual5.app1.title": "The Guideline",
        "visual5.app1.desc": "International limits for workers and the public, derived from the levels at which established effects appear. Above the limit, thermal effects on tissue are the accepted mechanism.",
        "visual5.app2.tag": "BODY",
        "visual5.app2.title": "SAR",
        "visual5.app2.desc": "Specific absorption rate, measured in watts per kilogram. Whole-body limits are far lower than local limits, because the whole body cannot shed heat anywhere.",
        "visual5.app3.tag": "AVERAGE",
        "visual5.app3.title": "Time Matters",
        "visual5.app3.desc": "Limits apply to a time-averaged field. A radar transmitting 0.2 percent of the time is, for exposure purposes, transmitting at a fifth of its power.",
        "visual5.app4.tag": "BAND",
        "visual5.app4.title": "Which Frequency",
        "visual5.app4.desc": "Radar bands sit in the microwave region, where absorbed energy heats tissue. At lower frequencies absorption is much weaker, at higher it is absorbed in the skin.",
        "visual5.app5.tag": "SIGN",
        "visual5.app5.title": "The Unsettled Part",
        "visual5.app5.desc": "Long-term effects below the limits are still argued about. The mainstream position is that established evidence supports the limits, while some researchers disagree.",
        "visual5.app6.tag": "RULE",
        "visual5.app6.title": "Why Precaution Persists",
        "visual5.app6.desc": "Because radar sites are easy to fence off and the cost of doing so is trivial. There is no engineering reason to expose anyone to a limit that can be avoided for free.",
        "visual5.caption": "Two honest things at once: the limits are conservative, and there is no good reason to test them by standing in the field.",
        "visual6.name": "WHAT YOU ACTUALLY SEE",
        "visual6.title": "Radar in Public Space",
        "visual6.intro": "Radars sit beside roads, airports and sports grounds. Here is how they handle it.",
        "visual6.app1.tag": "FENCE",
        "visual6.app1.title": "The Perimeter",
        "visual6.app1.desc": "A physical fence around the mast, sized so that the field at the boundary is comfortably below the public limit. Signs mark it as a controlled area.",
        "visual6.app2.tag": "RAIL",
        "visual6.app2.title": "Height as Shielding",
        "visual6.app2.desc": "Mounting the antenna high on a mast or tower is the most effective measure available. Height is the cheapest way to buy distance.",
        "visual6.app3.tag": "PLUME",
        "visual6.app3.title": "Waveguide above People",
        "visual6.app3.desc": "Where power is fed through the air — an airport surface radar, for instance — the waveguide is routed overhead and above head height, not across a walkway.",
        "visual6.app4.tag": "SHUTDOWN",
        "visual6.app4.title": "Switch Off for Work",
        "visual6.app4.desc": "Maintenance inside the perimeter is done with the transmitter off or at reduced power. The rules are procedural as much as physical.",
        "visual6.app5.tag": "MONITOR",
        "visual6.app5.title": "Measuring It",
        "visual6.app5.desc": "Field strength is measured at the perimeter as part of routine safety work. The result is recorded, and the fence is sized from that measurement.",
        "visual6.app6.tag": "BOTTOM",
        "visual6.app6.title": "The Practical Answer",
        "visual6.app6.desc": "Fences, height, shutdown procedures and measurement. None of it implies that standing outside a radar fence is dangerous. It implies that the margin is worth keeping.",
        "visual6.caption": "A fence around a radar says the field inside is managed, not that the machine is dangerous.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Radar has radiation, but following safety distances usually keeps you safe.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 48：雷达辐射对人体有害吗？ — 雷达探索者",
        "page.description": "文章 48：雷达确实发射电磁波，但强度随距离迅速下降。曝光限值从哪来、雷达在外面看起来什么样，以及微波炉类比为什么会误导人。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月14日",
        "article.title": "雷达辐射对人体有害吗？",
        "article.subtitle": "强度掉得快。之所以还要立规矩，是因为还不够快。",
        "toc.title": "本页目录",
        "toc.s1": "衰减问题",
        "toc.s2": "衰减动画",
        "toc.s3": "微波炉类比",
        "toc.s4": "计算示例",
        "toc.s5": "限值是怎么来的",
        "toc.s6": "现实中看到的雷达",
        "article.p1": "雷达功率那么大，站在旁边会不会有危险？",
        "article.p2": "雷达确实发射电磁波，但强度随距离迅速下降。正规雷达有安全距离和防护规定。日常接触的雷达，只要不在近距离长时间停留，通常安全。",
        "article.p3": "像微波炉，工作时不要贴着看，但正常使用没问题。大功率雷达站会设警戒区，禁止无关人员靠近。电磁辐射是否有害，取决于频率、功率、距离、时间。",
        "article.p4": "军用和民用雷达都有安全标准。所以不用恐慌，但也要遵守规定。",
        "visual1.name": "衰减问题",
        "visual1.title": "强度按距离平方反比下降",
        "visual1.intro": "波被摊在一个球面上——这就是雷达自己的院子安全、但桅杆附近不安全的原因。",
        "fig1.title": "为什么场强掉得这么快",
        "fig1.shed": "设备",
        "fig1.inside": "内部",
        "fig1.z1": "内部",
        "fig1.z2": "近处",
        "fig1.z3": "公共区",
        "fig1.z4": "围界",
        "fig1.axis": "离天线的距离",
        "fig1.law": "强度 ∝ 1 / R²",
        "fig1.note": "距离翻倍，场强只剩四分之一",
        "visual1.caption": "波从天线向四面八方射出去。其中绝大部分能量是浪费的，而这些浪费恰恰是围界安全的根本原因。",
        "visual2.name": "衰减动画",
        "visual2.title": "从桅杆往外走",
        "visual2.intro": "一根天线、一个人，以及走一小段路就掉 100 dB 的场强。",
        "visual2.fallback": "你的浏览器不支持 video 标签。",
        "visual2.cc1": "1. 桅杆旁——在管制区内，禁止无关人员",
        "visual2.cc2": "2. 往外走——场强按距离平方反比下降",
        "visual2.cc3": "3. 围界处——下降 40 dB，远低于限值",
        "visual2.cc4": "4. 围界外——雷达仍在发射，依然安全",
        "visual2.caption": "你离开时雷达并不会关机。真正起作用的是距离。",
        "visual3.name": "微波炉类比",
        "visual3.title": "这个类比为什么合理又不对",
        "visual3.intro": "微波炉往密闭钢腔里漏 5 瓦。雷达往开放空间里打 100 千瓦。",
        "visual3.app1.tag": "相同",
        "visual3.app1.title": "为什么感觉有道理",
        "visual3.app1.desc": "两者都是微波频段设备，都在很小的空间里产生强场，也都有一个不该在运行时打开的电源。",
        "visual3.app2.tag": "不同",
        "visual3.app2.title": "泄漏方向是反的",
        "visual3.app2.desc": "微波炉是从小腔体里向外漏 5 瓦；雷达是往开放空间里送 100 千瓦，而你站在里面就是那个小腔体。",
        "visual3.app3.tag": "屏蔽",
        "visual3.app3.title": "微波炉是封闭的",
        "visual3.app3.desc": "微波炉是个法拉第笼。雷达根本没有笼子——它必须往天上打，这正是它的用途。",
        "visual3.app4.tag": "脉冲",
        "visual3.app4.title": "占空比在保护人",
        "visual3.app4.desc": "雷达以微秒脉冲发射，中间用来接收。时间平均场强比峰值低好几个数量级，而曝光限值算的是平均值，不是峰值。",
        "visual3.app5.tag": "原因",
        "visual3.app5.title": "为什么要有围栏",
        "visual3.app5.desc": "不是因为路人有危险，而是因为在桅杆边站一整班的人有。规定针对的是长期驻留，不是路过。",
        "visual3.app6.tag": "结论",
        "visual3.app6.title": "老实说的结论",
        "visual3.app6.desc": "天线处场强很大，围界处很小。在合法曝光水平下，没有任何已确立的机制能说明雷达会导致疾病。",
        "visual3.caption": "微波炉这个比方用来建立直觉很好，用来算账则不行。谨慎可以留下，算术要丢掉。",
        "visual4.name": "计算示例",
        "visual4.title": "一根天线，四个距离",
        "visual4.intro": "一部平均输出 20 千瓦的雷达天线，以及几个距离上的场强。",
        "visual4.row1.label": "桅杆边 2 米",
        "visual4.row1.value": "远高于职业限值——已隔离",
        "visual4.row2.label": "20 米",
        "visual4.row2.value": "下降 20 dB，接近限值",
        "visual4.row3.label": "围界 100 米",
        "visual4.row3.value": "下降 34 dB——围栏就画在这里",
        "visual4.row4.label": "1 公里",
        "visual4.row4.value": "下降 54 dB，远低于任何限值",
        "visual4.row5.label": "10 公里",
        "visual4.row5.value": "下降 74 dB——与健康无关",
        "visual4.row6.label": "背后的算术",
        "visual4.row6.value": "距离每翻一倍就损失 6 dB",
        "visual4.caption": "要记住的经验法则：距离翻倍，掉 6 dB。从 2 米走到 100 米是 50 倍，正好 34 dB。",
        "visual5.name": "限值是怎么来的",
        "visual5.title": "一个数字是怎么定出来的",
        "visual5.intro": "曝光限值不是物理定律，它是证据和预防之间长期争论的产物。",
        "visual5.app1.tag": "ICNIRP",
        "visual5.app1.title": "那份指南",
        "visual5.app1.desc": "国际非电离辐射防护委员会给工人和公众定的限值，来源是已确认效应出现的电平。超过限值时，公认机制是组织受热。",
        "visual5.app2.tag": "全身",
        "visual5.app2.title": "SAR",
        "visual5.app2.desc": "比吸收率，单位是瓦每公斤。全身限值远低于局部限值，因为全身没有任何地方能散热。",
        "visual5.app3.tag": "平均",
        "visual5.app3.title": "时间很关键",
        "visual5.app3.desc": "限值针对时间平均场强。一部只有 0.2% 时间在发射的雷达，就曝光而言相当于用五分之一的功率在发射。",
        "visual5.app4.tag": "频段",
        "visual5.app4.title": "是哪个频率",
        "visual5.app4.desc": "雷达频段位于微波区，被吸收的能量会加热组织。频率更低吸收弱得多，更高则主要在皮肤就被吸收。",
        "visual5.app5.tag": "科学争议",
        "visual5.app5.title": "尚无定论的部分",
        "visual5.app5.desc": "限值以下的长期效应仍在争论。主流立场是已有证据支持现行限值，也有研究者持不同意见。",
        "visual5.app6.tag": "规则",
        "visual5.app6.title": "为什么预防原则一直还在",
        "visual5.app6.desc": "因为雷达站很容易围起来，做这件事的成本几乎为零。没有工程上的理由去让人暴露在一个本可免费避开的限值之上。",
        "visual5.caption": "两件诚实的话可以同时说：限值是保守的，而且没有理由靠站在场里去验证它。",
        "visual6.name": "现实中看到的雷达",
        "visual6.title": "公共空间里的雷达",
        "visual6.intro": "雷达建在路边、机场和体育场旁边。它们是这样处理的。",
        "visual6.app1.tag": "围栏",
        "visual6.app1.title": "那道围界",
        "visual6.app1.desc": "桶杆周围有实体围栏，尺寸是按边界场强明显低于公众限值来定的，并有标牌标明是管制区。",
        "visual6.app2.tag": "抬高",
        "visual6.app2.title": "高度本身就是屏蔽",
        "visual6.app2.desc": "把天线架高到桶杆或塔上，是最有效的措施。高度是买到距离最便宜的方式。",
        "visual6.app3.tag": "波导",
        "visual6.app3.title": "波导从人头顶走",
        "visual6.app3.desc": "凡是靠空中馈电的场合（比如机场场面雷达），波导会从高处、从头顶上方走，而不是横穿人行道。",
        "visual6.app4.tag": "停机",
        "visual6.app4.title": "检修时关机",
        "visual6.app4.desc": "围界内的检修要在发射机关闭或降功率的情况下进行。规定既是物理的，也是流程的。",
        "visual6.app5.tag": "实测",
        "visual6.app5.title": "测量它",
        "visual6.app5.desc": "场强会在围界处实测，作为常规安全工作的一部分。结果会被记录，围栏尺寸也据此确定。",
        "visual6.app6.tag": "结论",
        "visual6.app6.title": "实践的回答",
        "visual6.app6.desc": "围栏、高度、停机流程和实测。这一切都不意味着站在雷达围栏外有危险，只意味着这点余量值得保留。",
        "visual6.caption": "雷达周围的围栏说明的是「里面的场受管理」，而不是「这台机器危险」。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "雷达有辐射，但遵守安全距离通常不用担心。",
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
