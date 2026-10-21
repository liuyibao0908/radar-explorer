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
        "page.title": "Article 38: The Receiver — Radar Explorer",
        "page.description": "Article 38: How does a radar hear a whisper? Amplifying a weak echo, filtering out noise, dynamic range, and the low-noise amplifier chain.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Jul 30, 2026",
        "article.title": "The Receiver — Finding Echoes in the Noise",
        "article.subtitle": "Hearing one voice across a crowded playground.",
        "toc.title": "On this page",
        "toc.s1": "How weak is weak",
        "toc.s2": "The signal chain",
        "toc.s3": "Noise vs signal",
        "toc.s4": "Worked example",
        "toc.s5": "Dynamic range",
        "toc.s6": "Stealth detection",
        "article.p1": "The wave a radar sends out comes back very, very weak after bouncing off a target. How can it still be heard?",
        "article.p2": "The receiver's job: amplify the weak echo and pick it out from the noise. Think of hearing a friend call your name across a noisy playground. The more sensitive the receiver, the better it finds small or distant targets.",
        "article.p3": "Too much sensitivity also amplifies noise, so filtering is needed. The receiver also handles dynamic range: strong signals must not saturate, weak signals must not be lost. Common parts include low-noise amplifiers, mixers, intermediate-frequency amplifiers, and detectors.",
        "article.p4": "When one antenna both sends and receives, a duplexer protects the receiver. Receiver performance directly affects whether a radar can detect stealth targets.",
        "visual1.name": "HOW WEAK IS WEAK",
        "visual1.title": "Four Round Trips of Loss",
        "visual1.intro": "The echo crosses the same distance twice, and spreads its energy over a sphere.",
        "fig1.title": "Why the echo is so weak",
        "fig1.radar": "radar",
        "fig1.target": "target",
        "fig1.out": "out",
        "fig1.back": "back (1 / R⁴)",
        "fig1.spread": "energy spreads over a sphere",
        "fig1.result": "echo is roughly 1 / R⁴ of what was sent",
        "fig1.resultsub": "double the distance, one hundredth the power",
        "visual1.caption": "Because energy spreads as the inverse fourth power of distance, radar is a one-way loss budget. Detecting a stealth aircraft means finding the few photons that come back.",
        "visual2.name": "THE SIGNAL CHAIN",
        "visual2.title": "Four Boxes That Save the Signal",
        "visual2.intro": "Each stage adds gain, but the first one decides how much noise comes along.",
        "fig2.title": "Receiver signal chain",
        "fig2.lna": "LNA",
        "fig2.lnasub": "low-noise amp",
        "fig2.g1": "+20 dB",
        "fig2.mix": "Mixer",
        "fig2.mixsub": "down to IF",
        "fig2.g2": "0 dB",
        "fig2.if": "IF amp",
        "fig2.ifsub": "fixed frequency",
        "fig2.g3": "+60 dB",
        "fig2.det": "Detector",
        "fig2.detsub": "to video / I / Q",
        "fig2.g4": "output",
        "fig2.rule": "the LNA decides the noise floor for everything downstream",
        "fig2.note": "80 dB of total gain turns microwatts into something a digitiser can sample",
        "visual2.caption": "Adding gain after the LNA cannot remove noise already mixed in. The first amplifier sets the limit for the whole chain.",
        "visual3.name": "ANIMATION: SIGNAL VS NOISE",
        "visual3.title": "Amplify, Then Filter",
        "visual3.intro": "Turn the gain up too far and the target drowns along with everything else.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. INCOMING -- one weak echo buried in noise",
        "visual3.cc2": "2. AMPLIFY -- everything grows, signal and noise alike",
        "visual3.cc3": "3. FILTER -- the noise floor drops away",
        "visual3.cc4": "4. CLEAN -- a clear pulse you can actually use",
        "visual3.caption": "Amplification raises signal and noise together. Only filtering separates them — that is why a receiver is far more than a bigger amp.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Putting the Numbers Together",
        "visual4.intro": "One stealth aircraft, one radar, and the arithmetic that decides detection.",
        "visual4.row1.label": "Transmit power",
        "visual4.row1.value": "100 kW peak",
        "visual4.row2.label": "Range",
        "visual4.row2.value": "100 km",
        "visual4.row3.label": "Radar cross section",
        "visual4.row3.value": "0.01 m² (stealth-shaped)",
        "visual4.row4.label": "Received power",
        "visual4.row4.value": "about −140 dBm",
        "visual4.row5.label": "Thermal noise there",
        "visual4.row5.value": "about −128 dBm",
        "visual4.row6.label": "Signal below noise",
        "visual4.row6.value": "integration over thousands of pulses recovers it",
        "visual4.caption": "A single pulse is invisible. Averaging thousands of them raises the target above the noise without raising the noise floor.",
        "visual5.name": "DYNAMIC RANGE",
        "visual5.title": "Loud and Quiet at Once",
        "visual5.intro": "A ground return and a distant bird arrive at the same input, differing by 100 dB.",
        "fig5.title": "Dynamic range: strong returns must not saturate",
        "fig5.ground": "ground",
        "fig5.target": "aircraft",
        "fig5.bird": "bird",
        "fig5.axis": "input level",
        "fig5.warn": "if the amp saturates on the ground return, the bird is lost",
        "visual5.app1.tag": "STC",
        "visual5.app1.title": "Sensitivity Time Control",
        "visual5.app1.desc": "Turn the gain up only while listening to echoes, after the transmit pulse ends. Close returns are quiet, far returns are loud — the gain rises with time.",
        "visual5.app2.tag": "AGC",
        "visual5.app2.title": "Automatic Gain Control",
        "visual5.app2.desc": "A feedback loop measures the average output and adjusts the gain. It keeps a storm from pinning the display while a weak target still gets recorded.",
        "visual5.app3.tag": "LOG",
        "visual5.app3.title": "Logarithmic Amplifier",
        "visual5.app3.desc": "A 100 dB span is far too much for a linear display. Logarithmic compression fits the whole range on one screen by turning dB into millimetres.",
        "visual5.app4.tag": "NOISE FIGURE",
        "visual5.app4.title": "How Much You Added",
        "visual5.app4.desc": "Noise figure measures the extra noise an amplifier contributes. A low-noise amplifier has a figure near 1 dB; a cheap wideband one might be 6 dB, which is a real detection loss.",
        "visual5.app5.tag": "FILTER",
        "visual5.app5.title": "Matched Filtering",
        "visual5.app5.desc": "The filter is shaped to the pulse the transmitter actually sent. This maximises the signal-to-noise ratio at the instant the echo arrives.",
        "visual5.app6.tag": "INTEGRATE",
        "visual5.app6.title": "Many Pulses, One Target",
        "visual5.app6.desc": "A real target stays put in range and azimuth across many pulses; noise does not. Summing N pulses raises the signal as N but the noise only as the square root of N.",
        "visual5.caption": "STC, AGC and integration are the three ways a real receiver copes with a 100 dB spread of return strengths.",
        "visual6.name": "STEALTH DETECTION",
        "visual6.title": "The Receiver Is Where Stealth Dies",
        "visual6.intro": "A stealth aircraft does not defeat the wave. It just gives the receiver almost nothing to work with.",
        "visual6.app1.tag": "LONG WAVE",
        "visual6.app1.title": "Low Frequency",
        "visual6.app1.desc": "Longer wavelengths need a smaller aircraft to be stealthy. VHF and UHF radars therefore see stealth shapes more easily than X-band does.",
        "visual6.app2.tag": "PASSIVE",
        "visual6.app2.title": "Listening Only",
        "visual6.app2.desc": "A passive radar emits nothing, so it is not a target itself. It picks up the energy the aircraft already reflects from other transmitters.",
        "visual6.app3.tag": "INTEGRATION",
        "visual6.app3.title": "Long Dwell",
        "visual6.app3.desc": "Stealth relies on being small in a single pulse. Dwelling on one spot for thousands of pulses brings the signal back above the noise floor.",
        "visual6.app4.tag": "NETWORK",
        "visual6.app4.title": "More Eyes",
        "visual6.app4.desc": "No single radar sees it, but four receivers sharing detections often do. A stealth shape that hides from one angle is usually visible from another.",
        "visual6.app5.tag": "IR / EO",
        "visual6.app5.title": "Other Sensors",
        "visual6.app5.desc": "Infrared and electro-optical sensors ignore radar cross section entirely. They trade weather independence for a very different view of the sky.",
        "visual6.app6.tag": "CONCLUSION",
        "visual6.app6.title": "Not a Force Field",
        "visual6.app6.desc": "Stealth reduces detection range; it does not make an aircraft invisible. Better receiver processing closes part of that gap every decade.",
        "visual6.caption": "A radar that cannot hear a whisper still finds it by listening longer, at a longer wavelength, with more receivers.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "The receiver finds echoes in the noise — the more sensitive, the better.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 38：接收机——在噪声里找回声 — 雷达探索者",
        "page.description": "文章 38：雷达怎么听见一声耳语？放大微弱回波、滤掉噪声、动态范围，以及低噪声放大器链路。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年7月30日",
        "article.title": "接收机——在噪声里找回声",
        "article.subtitle": "在嘈杂的操场上，听清远处同学叫你名字。",
        "toc.title": "本页目录",
        "toc.s1": "弱到什么程度",
        "toc.s2": "信号链路",
        "toc.s3": "噪声与信号",
        "toc.s4": "计算示例",
        "toc.s5": "动态范围",
        "toc.s6": "反隐身探测",
        "article.p1": "雷达发出去的波，碰到目标反射回来，已经非常非常弱。怎么还能听见？",
        "article.p2": "接收机的工作：把微弱回波放大，再从噪声里挑出来。像在很吵的操场上，听清远处同学叫你名字。接收机越灵敏，越能发现小目标、远目标。",
        "article.p3": "灵敏度太高也会把噪声放大，所以要做滤波。接收机还要处理动态范围：强信号不饱和，弱信号不丢失。常见结构有低噪声放大器、混频器、中频放大器、检波器。",
        "article.p4": "收发共用一副天线时，需要收发开关保护接收机。接收机性能直接影响雷达能不能发现隐身目标。",
        "visual1.name": "弱到什么程度",
        "visual1.title": "四次往返的损耗",
        "visual1.intro": "回波要往返同一段距离两次，而且能量摊在一个球面上。",
        "fig1.title": "回波为什么这么弱",
        "fig1.radar": "雷达",
        "fig1.target": "目标",
        "fig1.out": "发出去",
        "fig1.back": "回来（1 / R⁴）",
        "fig1.spread": "能量摊在球面上",
        "fig1.result": "回波大约只有发出去的 1 / R⁴",
        "fig1.resultsub": "距离翻倍，功率只剩百分之一",
        "visual1.caption": "因为能量按距离四次方反比摊开，雷达的单程损耗预算极其残酷。发现一架隐身飞机，靠的就是找回那仅有的一点光子。",
        "visual2.name": "信号链路",
        "visual2.title": "四个救命的方框",
        "visual2.intro": "每一级都加增益，但第一级决定了会带进来多少噪声。",
        "fig2.title": "接收机信号链路",
        "fig2.lna": "低噪声放大",
        "fig2.lnasub": "第一级",
        "fig2.g1": "+20 dB",
        "fig2.mix": "混频器",
        "fig2.mixsub": "降到中频",
        "fig2.g2": "0 dB",
        "fig2.if": "中频放大",
        "fig2.ifsub": "固定频率",
        "fig2.g3": "+60 dB",
        "fig2.det": "检波器",
        "fig2.detsub": "输出视频 / I / Q",
        "fig2.g4": "输出",
        "fig2.rule": "低噪声放大器决定了后面所有级的噪声底",
        "fig2.note": "总共 80 dB 增益，把微瓦级信号放大到数字采样能处理",
        "visual2.caption": "在低噪声放大器之后加增益，无法去掉已经混进去的噪声。第一级放大器就定下了整条链路的极限。",
        "visual3.name": "动画：信号与噪声",
        "visual3.title": "先放大，再滤波",
        "visual3.intro": "增益调得太高，目标会跟噪声一起被淹掉。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 进来的信号——一个微弱的回波埋在噪声里",
        "visual3.cc2": "2. 放大——信号和噪声一起变大",
        "visual3.cc3": "3. 滤波——噪声底被压下去",
        "visual3.cc4": "4. 干净了——一个真正能用的清晰脉冲",
        "visual3.caption": "放大让信号和噪声一起变大。只有滤波能把它们分开——这就是接收机远不止是一个更大的放大器的原因。",
        "visual4.name": "计算示例",
        "visual4.title": "把数字算一遍",
        "visual4.intro": "一架隐身飞机，一部雷达，以及决定能否发现的算术。",
        "visual4.row1.label": "发射功率",
        "visual4.row1.value": "峰值 100 千瓦",
        "visual4.row2.label": "距离",
        "visual4.row2.value": "100 公里",
        "visual4.row3.label": "雷达截面积",
        "visual4.row3.value": "0.01 平方米（隐身外形）",
        "visual4.row4.label": "接收功率",
        "visual4.row4.value": "大约 −140 dBm",
        "visual4.row5.label": "该处热噪声",
        "visual4.row5.value": "大约 −128 dBm",
        "visual4.row6.label": "信号低于噪声",
        "visual4.row6.value": "靠累积上千个脉冲把它找回来",
        "visual4.caption": "单个脉冲是看不见的。把上千个脉冲平均起来，能把目标抬到噪声之上，而噪声底本身并不抬高。",
        "visual5.name": "动态范围",
        "visual5.title": "同时很响和很轻",
        "visual5.intro": "地面回波和远处一只鸟同时进入输入端，相差 100 dB。",
        "fig5.title": "动态范围：强回波不能把放大器压饱和",
        "fig5.ground": "地面",
        "fig5.target": "飞机",
        "fig5.bird": "鸟",
        "fig5.axis": "输入电平",
        "fig5.warn": "如果放大器被地面回波压饱和，鸟就丢了",
        "visual5.app1.tag": "STC",
        "visual5.app1.title": "灵敏度时间控制",
        "visual5.app1.desc": "只在发射脉冲结束、开始接收回波时才把增益拉高。近处回波弱、远处回波强，增益随时间上升。",
        "visual5.app2.tag": "AGC",
        "visual5.app2.title": "自动增益控制",
        "visual5.app2.desc": "一个反馈回路测量输出平均值并调整增益。风暴不会把显示器顶死，而弱目标仍然被记录下来。",
        "visual5.app3.tag": "对数",
        "visual5.app3.title": "对数放大器",
        "visual5.app3.desc": "100 dB 的跨度对线性显示器来说太宽了。对数压缩把 dB 变成毫米，让整个范围能放进一屏。",
        "visual5.app4.tag": "噪声系数",
        "visual5.app4.title": "你加了多少噪声",
        "visual5.app4.desc": "噪声系数衡量放大器额外引入的噪声。低噪声放大器接近 1 dB；便宜的宽带器件可能是 6 dB，那就是实实在在的探测损失。",
        "visual5.app5.tag": "匹配滤波",
        "visual5.app5.title": "为脉冲量身定做",
        "visual5.app5.desc": "滤波器按发射机实际发出的脉冲形状来设计。这样在回波到达的瞬间，信噪比最大。",
        "visual5.app6.tag": "积累",
        "visual5.app6.title": "多个脉冲，一个目标",
        "visual5.app6.desc": "真实目标在很多个脉冲里距离和方位都不变，噪声则不会。累加 N 个脉冲，信号涨 N 倍，噪声只涨 √N 倍。",
        "visual5.caption": "STC、AGC 和积累，是真实接收机应对 100 dB 强度跨度三种办法。",
        "visual6.name": "反隐身探测",
        "visual6.title": "隐身是在接收机这里失效的",
        "visual6.intro": "隐身飞机并没有打败电波，它只是让接收机几乎没东西可用。",
        "visual6.app1.tag": "长波长",
        "visual6.app1.title": "低频率",
        "visual6.app1.desc": "波长越长，越小的飞机也容易做成隐身。VHF 和 UHF 雷达因此比 X 波段更容易发现隐身外形。",
        "visual6.app2.tag": "被动",
        "visual6.app2.title": "只听不发",
        "visual6.app2.desc": "被动雷达自己不发射，所以它本身不是目标。它接收飞机反射其他发射机的那部分能量。",
        "visual6.app3.tag": "积累",
        "visual6.app3.title": "长时间驻留",
        "visual6.app3.desc": "隐身靠的是在单个脉冲里很小。在同一位置驻留上千个脉冲，信号就能回到噪声底之上。",
        "visual6.app4.tag": "组网",
        "visual6.app4.title": "更多双眼睛",
        "visual6.app4.desc": "没有哪一部雷达能看见它，但四部接收机共享探测结果常常可以。一个角度藏得住的外形，换个角度通常就露出来了。",
        "visual6.app5.tag": "红外 / 光电",
        "visual6.app5.title": "别的传感器",
        "visual6.app5.desc": "红外和光电传感器完全不理会雷达截面积。它们牺牲抗天气能力，换来完全不同的天空视角。",
        "visual6.app6.tag": "结论",
        "visual6.app6.title": "不是力场",
        "visual6.app6.desc": "隐身缩短的是被发现的距离，不是让飞机隐形。更好的接收机处理，每十年都在缩小这个差距。",
        "visual6.caption": "听不见耳语的雷达，靠听得更久、用更长的波长、用更多接收机，依然能找到它。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "接收机负责在噪声里找回波，越灵敏越厉害。",
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
