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
        "page.title": "Article 45: How Far Can Radar See? — Radar Explorer",
        "page.description": "Article 45: There is no fixed answer to how far a radar can see. Power, antenna size, receiver noise figure, radar cross section, atmospheric loss and the horizon all pull in different directions.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 10, 2026",
        "article.title": "How Far Can Radar See?",
        "article.subtitle": "There is no number. There is a budget, and everything spends from it.",
        "toc.title": "On this page",
        "toc.s1": "The shouted conversation",
        "toc.s2": "The radar equation",
        "toc.s3": "Range animation",
        "toc.s4": "Worked example",
        "toc.s5": "The horizon",
        "toc.s6": "What the air does",
        "article.p1": "Is farther always better for radar? How far can it actually see?",
        "article.p2": "It depends on power, antenna size, and receiver sensitivity. More power, a bigger antenna, and a more sensitive receiver all mean longer range. The Earth's curvature also limits it: targets too low get hidden by the horizon.",
        "article.p3": "Bigger targets with stronger reflections are easier to find. Think of shouting — your voice, the environment, and the listener's ears all affect how far you can be heard. Atmospheric refraction, rain, and fog also affect wave travel.",
        "article.p4": "The radar equation can estimate range, but real conditions matter. So \"how far\" has no fixed answer — it depends on the situation.",
        "visual1.name": "THE SHOUTED CONVERSATION",
        "visual1.title": "Radar Is a Shout Across a Valley",
        "visual1.intro": "Both sides of the exchange are limited, and both are limited independently.",
        "fig1.title": "Radar range as a shouting conversation",
        "fig1.voice": "YOUR VOICE",
        "fig1.voice2": "power, beam width",
        "fig1.voice3": "transmitter + antenna",
        "fig1.ears": "THEIR EARS",
        "fig1.ears2": "gain, noise figure",
        "fig1.ears3": "receiver + antenna",
        "fig1.wall": "THE VALLEY",
        "fig1.wall2": "rain, fog, earth curve",
        "fig1.wall3": "propagation loss",
        "fig1.who": "AND WHO IS LISTENING",
        "fig1.rcs": "radar cross section",
        "fig1.note": "range depends on all four — changing any one moves the answer",
        "visual1.caption": "The shouting analogy is exactly right, and it is worth taking seriously: the loudness of your voice, the size of your ears and the size of the person answering all contribute.",
        "visual2.name": "THE RADAR EQUATION",
        "visual2.title": "One Line That Contains Everything",
        "visual2.intro": "The radar equation is the whole of radar theory compressed into a single relationship.",
        "fig2.title": "The radar equation and what each term does",
        "fig2.eq": "Rmax = ( Pt G² λ² σ τ )⁴ / ( (4π)³ L k⁴ F N k T B )",
        "fig2.eqsub": "fourth root of the numerator, square root of the denominator",
        "fig2.num": "IN THE NUMERATOR",
        "fig2.num2": "all of it is your fault",
        "fig2.den": "IN THE DENOMINATOR",
        "fig2.den2": "all of it is the target's",
        "fig2.terms1": "Pt power, G² antenna gain, λ wavelength",
        "fig2.terms2": "σ target area, λ wavelength, τ pulse width",
        "fig2.terms3": "L loss, σ target area",
        "fig2.terms4": "F noise figure, k T B thermal noise",
        "fig2.note": "doubling any single term changes range by a small power — that is why radar builds get enormous rather than merely powerful",
        "visual2.caption": "Range is a fourth root of the numerator and a square root of the denominator. That exponent is the single most important number in radar design.",
        "visual3.name": "ANIMATION: RANGE SCALES",
        "visual3.title": "Why Doubling Power Barely Helps",
        "visual3.intro": "Four identical radars, four different power levels. Watch the range move.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. 1 kW -- a short reach, a bird or a small boat",
        "visual3.cc2": "2. 10 kW -- ten times the power, only 1.8 times the range",
        "visual3.cc3": "3. 100 kW -- a long-range military or weather radar",
        "visual3.cc4": "4. 1 MW -- for a helicopter you would need about 1000 MW",
        "visual3.caption": "This is the reason a radar is built the size it is. Power alone cannot buy range, so the aperture grows instead.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Two Targets at the Same Range",
        "visual4.intro": "Same radar, same distance. One is seen, the other is not.",
        "visual4.row1.label": "Radar",
        "visual4.row1.value": "100 kW, 30 dB gain, 2 dB loss",
        "visual4.row2.label": "Detection threshold",
        "visual4.row2.value": "0.1 m² at 30 km",
        "visual4.row3.label": "A gull",
        "visual4.row3.value": "0.005 m² — missed at 30 km",
        "visual4.row4.label": "A fighter aircraft",
        "visual4.row4.value": "5 m² — seen well past 300 km",
        "visual4.row5.label": "A stealth shape",
        "visual4.row5.value": "0.01 m² front-on — missed at 30 km",
        "visual4.row6.label": "Same ship, beam aspect",
        "visual4.row6.value": "10 000 m² — seen at 600 km",
        "visual4.caption": "Detection range scales as the fourth root of cross section. Multiply the target area by ten thousand and you only quadruple the range.",
        "visual5.name": "THE HORIZON",
        "visual5.title": "The Earth Gets in the Way",
        "visual5.intro": "Before any equation matters, the geometry has to work.",
        "fig5.title": "Line-of-sight and radar horizon",
        "fig5.earth": "earth surface",
        "fig5.radar": "Radar",
        "fig5.h": "100 m",
        "fig5.rfl": "refracted beam — bends down with the earth",
        "fig5.straight": "straight line — hits the ground",
        "fig5.aircraft": "aircraft",
        "fig5.formula": "4.12 (√h in metres)",
        "fig5.both": "geometric horizon, radar added to each end",
        "visual5.caption": "A radar can see its own horizon plus the target's height. A 100 m radar sees a target 25 m high about 81 km away, and refraction adds roughly 8%.",
        "visual6.name": "WHAT THE AIR DOES",
        "visual6.title": "The Valley Is Not Empty",
        "visual6.intro": "Between radar and target there is always air, water and sometimes a storm.",
        "visual6.app1.tag": "RAIN",
        "visual6.app1.title": "Attenuation",
        "visual6.app1.desc": "Rain scatters and absorbs. At X-band in heavy rain, loss grows so steeply with range that a short-wavelength radar can be blinded at 30 km by a storm it is looking through.",
        "visual6.app2.tag": "WAVELENGTH",
        "visual6.app2.title": "The Rain Problem",
        "visual6.app2.desc": "Longer wavelengths suffer less, which is why weather radars for the 10 cm band see through storms that stop an X-band airborne radar entirely.",
        "visual6.app3.tag": "FOG",
        "visual6.app3.title": "Fog and Cloud",
        "visual6.app3.desc": "Radar was invented partly to see through weather. Fog has almost no effect on radio waves, which is exactly why radar penetrates it and light does not.",
        "visual6.app4.tag": "BEND",
        "visual6.app4.title": "Refraction",
        "visual6.app4.desc": "Radio waves bend slightly downward through the atmosphere, extending the radio horizon beyond the geometric one. Temperature inversions can extend it far enough to see ships beyond the horizon.",
        "visual6.app5.tag": "CLUTTER",
        "visual6.app5.title": "Sea and Land Clutter",
        "visual6.app5.desc": "Over the sea, ground clutter stops close to the radar, so a ship near the horizon may still be seen above it. Over land, buildings clutter the near range and hide everything low.",
        "visual6.app6.tag": "ASPECT",
        "visual6.app6.title": "Which Side You See",
        "visual6.app6.desc": "A ship seen broadside has an enormous cross section. The same ship seen bow-on can be a hundred times smaller. Aspect alone can double or halve the detection range.",
        "visual6.caption": "This is why a published range figure is a best case: one radar, one target, clear air, beam aspect.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Radar range depends on power, sensitivity, and the Earth's curvature.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 45：雷达能看多远？ — 雷达探索者",
        "page.description": "文章 45：雷达能看多远没有固定答案。功率、天线尺寸、接收机噪声系数、目标截面积、大气损耗和地平线，各自往不同方向拉扯。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月10日",
        "article.title": "雷达能看多远？",
        "article.subtitle": "没有一个数字。只有一份预算，所有东西都从里面花。",
        "toc.title": "本页目录",
        "toc.s1": "喊话的距离",
        "toc.s2": "雷达方程",
        "toc.s3": "距离尺度动画",
        "toc.s4": "计算示例",
        "toc.s5": "地平线",
        "toc.s6": "空气做了什么",
        "article.p1": "雷达是不是越远越好？它到底能看多远？",
        "article.p2": "受功率、天线大小、接收灵敏度影响。功率越大、天线越大、接收越灵敏，探测距离越远。还受地球曲率限制：太低的目标会被地平线挡住。",
        "article.p3": "目标越大、反射越强，越容易被发现。像喊话，嗓门、环境、对方耳朵都影响能听多远。大气折射、雨雾也会影响传播。",
        "article.p4": "雷达方程可以估算探测距离，但实际还要看环境。所以「能看多远」没有固定答案，要看条件。",
        "visual1.name": "喊话的距离",
        "visual1.title": "雷达是在山谷里喊一嗓子",
        "visual1.intro": "对话的两端都有限制，而且两端各自独立地受限。",
        "fig1.title": "把雷达距离看成一次喊话",
        "fig1.voice": "你的嗓门",
        "fig1.voice2": "功率、波束宽度",
        "fig1.voice3": "发射机 + 天线",
        "fig1.ears": "对方的耳朵",
        "fig1.ears2": "增益、噪声系数",
        "fig1.ears3": "接收机 + 天线",
        "fig1.wall": "山谷",
        "fig1.wall2": "雨、雾、地球曲率",
        "fig1.wall3": "传播损耗",
        "fig1.who": "以及对方是谁",
        "fig1.rcs": "雷达截面积",
        "fig1.note": "距离取决于这四者——改任何一项，答案都会动",
        "visual1.caption": "喊话这个类比完全正确，而且值得认真对待：你的嗓门大小、对方的耳朵大小、以及应答者的大小，三者都有份。",
        "visual2.name": "雷达方程",
        "visual2.title": "一行装下全部雷达理论",
        "visual2.intro": "雷达方程是把整个雷达理论压进一个关系式里的结果。",
        "fig2.title": "雷达方程，以及每一项在干什么",
        "fig2.eq": "Rmax = ( Pt G² λ² σ τ )⁴ / ( (4π)³ L k⁴ F N k T B )",
        "fig2.eqsub": "分子取四次方根，分母取平方根",
        "fig2.num": "在分子里",
        "fig2.num2": "全是你的问题",
        "fig2.den": "在分母里",
        "fig2.den2": "全是目标的问题",
        "fig2.terms1": "Pt 功率，G² 天线增益，λ 波长",
        "fig2.terms2": "σ 目标面积，λ 波长，τ 脉冲宽度",
        "fig2.terms3": "L 损耗，σ 目标面积",
        "fig2.terms4": "F 噪声系数，k T B 热噪声",
        "fig2.note": "任何一项翻倍，距离只按一个小幂次变化——这就是为什么雷达越造越大，而不是单纯越造越猛",
        "visual2.caption": "距离是分子的四次方根、分母的平方根。这个指数是雷达设计里最重要的一个数字。",
        "visual3.name": "动画：距离尺度",
        "visual3.title": "为什么功率翻倍几乎没用",
        "visual3.intro": "四台一模一样的雷达，四个功率档位。看距离怎么动。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 1 千瓦——短程，能看到鸟或小船",
        "visual3.cc2": "2. 10 千瓦——功率十倍，距离只有 1.8 倍",
        "visual3.cc3": "3. 100 千瓦——远程军用或天气雷达",
        "visual3.cc4": "4. 1 兆瓦——想看直升机，你得 1000 兆瓦",
        "visual3.caption": "这就是雷达要造这么大的原因。单靠功率买不到距离，所以口径要跟着长。",
        "visual4.name": "计算示例",
        "visual4.title": "同样距离的两个目标",
        "visual4.intro": "同一部雷达，同样的距离。一个看得见，另一个看不见。",
        "visual4.row1.label": "雷达",
        "visual4.row1.value": "100 千瓦，30 dB 增益，2 dB 损耗",
        "visual4.row2.label": "发现门限",
        "visual4.row2.value": "30 公里处 0.1 平方米",
        "visual4.row3.label": "一只海鸥",
        "visual4.row3.value": "0.005 平方米——30 公里发现不了",
        "visual4.row4.label": "一架战斗机",
        "visual4.row4.value": "5 平方米——300 公里外轻松看到",
        "visual4.row5.label": "一个隐身外形",
        "visual4.row5.value": "0.01 平方米正面——30 公里发现不了",
        "visual4.row6.label": "同一艘船，正横方向",
        "visual4.row6.value": "10 000 平方米——600 公里能看到",
        "visual4.caption": "探测距离按截面积的四次方根变化。目标面积放大一万倍，距离只变成四倍。",
        "visual5.name": "地平线",
        "visual5.title": "地球挡在中间",
        "visual5.intro": "在方程起作用之前，几何必须先成立。",
        "fig5.title": "视线地平线与雷达地平线",
        "fig5.earth": "地表",
        "fig5.radar": "雷达",
        "fig5.h": "100 米",
        "fig5.rfl": "折射后的波束——跟着地球一起弯下去",
        "fig5.straight": "直线——撞在地上",
        "fig5.aircraft": "飞机",
        "fig5.formula": "4.12（√h，单位米）",
        "fig5.both": "几何地平线，两端的高度都要算",
        "visual5.caption": "雷达能看到自己地平线加上目标高度之和。一部 100 米高的雷达，对 25 米高的目标大约能看到 81 公里，折射再加上 8% 左右。",
        "visual6.name": "空气做了什么",
        "visual6.title": "山谷不是空的",
        "visual6.intro": "雷达和目标之间，永远有空气、水，有时候还有风暴。",
        "visual6.app1.tag": "降雨",
        "visual6.app1.title": "衰减",
        "visual6.app1.desc": "雨会散射和吸收。在 X 波段的强降雨里，损耗随距离陡增，短波长雷达可能在 30 公里处就被自己正在穿透的那场风暴致盲。",
        "visual6.app2.tag": "波长",
        "visual6.app2.title": "雨的问题",
        "visual6.app2.desc": "波长越长损耗越小。所以 10 厘米波段的天气雷达能穿透让机载 X 波段雷达完全停摆的风暴。",
        "visual6.app3.tag": "雾",
        "visual6.app3.title": "雾和云",
        "visual6.app3.desc": "雷达的发明目的之一就是看穿天气。雾对无线电波几乎没有影响——这正是雷达能穿透它而光线不能的原因。",
        "visual6.app4.tag": "折射",
        "visual6.app4.title": "弯曲",
        "visual6.app4.desc": "无线电波穿过大气时会向下微弯，把雷达地平线延伸到几何地平线之外。温度逆温层能让它远到看见地平线之外的船。",
        "visual6.app5.tag": "杂波",
        "visual6.app5.title": "海面与地面杂波",
        "visual6.app5.desc": "海上地面杂波在靠近雷达处就结束了，所以地平线附近的船仍可能露在杂波之上。陆地上建筑物把近距搞成杂波，藏住所有低空目标。",
        "visual6.app6.tag": "姿态",
        "visual6.app6.title": "你看到的是哪一面",
        "visual6.app6.desc": "正横看到的船截面积巨大，同一艘船从船首方向看可能小一百倍。仅姿态一项就能让探测距离翻倍或减半。",
        "visual6.caption": "这就是为什么公开的探测距离是最好情况：一部雷达、一个目标、晴朗空气、正横姿态。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "雷达探测距离受功率、灵敏度和地球曲率共同影响。",
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
