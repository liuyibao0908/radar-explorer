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
        "page.title": "Article 47: Can Radar Be Jammed? — Radar Explorer",
        "page.description": "Article 47: Jamming, deception and every technique a radar uses to fight back — frequency agility, sidelobe rejection, home-on-jam and why no counter defeats every jammer.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 13, 2026",
        "article.title": "Can Radar Be Jammed?",
        "article.subtitle": "Yes. That is the entire reason half of this website exists.",
        "toc.title": "On this page",
        "toc.s1": "Two kinds of attack",
        "toc.s2": "Noise jamming",
        "toc.s3": "Jamming animation",
        "toc.s4": "Worked example",
        "toc.s5": "How radar fights back",
        "toc.s6": "Deception",
        "article.p1": "Yes. A radar can be jammed — and this is one of the most contested parts of electronic warfare.",
        "article.p2": "There are two very different ways to attack a radar. One floods it with noise so the real echoes disappear underneath. The other sends it fake echoes that look exactly like real ones. Both work, and they are countered in completely different ways.",
        "article.p3": "Noise jamming is brute force: raise the noise floor until the signal sits inside it. Deception is subtler — return a pulse at the right moment with the right shape, so the radar plots an aircraft that isn't there.",
        "article.p4": "Every counter has a counter-counter. That is why radar and electronic warfare have advanced together for a century.",
        "visual1.name": "TWO KINDS OF ATTACK",
        "visual1.title": "Brawl Versus Bluff",
        "visual1.intro": "One attack hides your signal. The other fabricates one.",
        "fig1.title": "Noise jamming and deception, side by side",
        "fig1.noise": "NOISE JAMMING",
        "fig1.noiseSub": "make your echo invisible",
        "fig1.strength": "signal strength",
        "fig1.echo": "echo",
        "fig1.floor": "noise floor pushed up",
        "fig1.f1": "signal buried → nothing detected",
        "fig1.f2": "counter: filtering, frequency agility",
        "fig1.decep": "DECEPTION",
        "fig1.decepSub": "make a phantom appear",
        "fig1.real": "real",
        "fig1.ghost": "phantom",
        "fig1.scope": "scope",
        "fig1.f3": "false track drawn where nothing is",
        "fig1.f4": "counter: you cannot filter what looks real",
        "visual1.caption": "Noise jamming is an argument about signal-to-noise ratio, and it can be won by filtering. Deception is not: a well-formed echo survives every filter you have.",
        "visual2.name": "NOISE JAMMING",
        "visual2.title": "Raising the Floor",
        "visual2.intro": "You do not need to overpower the radar. You only need to be louder than the echoes.",
        "visual2.row1.label": "Radar peak transmit power",
        "visual2.row1.value": "+77 dBm",
        "visual2.row2.label": "Return from a fighter at 200 km",
        "visual2.row2.value": "−116 dBm",
        "visual2.row3.label": "Thermal noise in that cell",
        "visual2.row3.value": "−113 dBm",
        "visual2.row4.label": "A 1 kW jammer only needs",
        "visual2.row4.value": "about −100 dBm at the radar antenna",
        "visual2.row5.label": "That is a margin of",
        "visual2.row5.value": "16 dB over the signal — a 40× jammer",
        "visual2.row6.label": "Jammer effective range",
        "visual2.row6.value": "hundreds of km, because the path loss is shared",
        "visual2.caption": "This is the asymmetry that makes noise jamming cheap: the radar has to win 190 dB of round-trip path loss before it sees anything, and the jammer only faces one-way loss.",
        "visual3.name": "ANIMATION: THE FLOOR RISES",
        "visual3.title": "Watch the Target Disappear Into Noise",
        "visual3.intro": "The signal never changes. Only the floor underneath it does.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. CLEAN -- the echo sits above the noise floor",
        "visual3.cc2": "2. JAMMED -- the floor rises and swallows the echo",
        "visual3.cc3": "3. FILTERED -- the radar narrows its bandwidth and recovers",
        "visual3.cc4": "4. RE-JAMMED -- the jammer moves to the new frequency",
        "visual3.caption": "That last step is why counters and counter-counters exist: every defence narrows the frequency the attacker can use, and the attacker then has to find another one.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Why Weather Radar Is Hard to Jam",
        "visual4.intro": "The same physics that makes a search radar vulnerable makes a weather radar awkward to attack.",
        "visual4.row1.label": "A jammer would have to cover",
        "visual4.row1.value": "a 400 km disc, continuously, in the right band",
        "visual4.row2.label": "Available spectrum is",
        "visual4.row2.value": "narrow — the S band is a small slice",
        "visual4.row3.label": "Frequency agility defeats",
        "visual4.row3.value": "a jammer tuned to one frequency",
        "visual4.row4.label": "Striking radars are",
        "visual4.row4.value": "hardened, shielded and self-protected",
        "visual4.row5.label": "But weather data is public",
        "visual4.row5.value": "no reason to attack — jamming it helps nobody",
        "visual4.row6.label": "Result",
        "visual4.row6.value": "weather radar is essentially never jammed",
        "visual4.caption": "Countermeasures are aimed at radars whose output matters to somebody. A weather radar's output matters to everybody, which is its own kind of protection.",
        "visual5.name": "HOW RADAR FIGHTS BACK",
        "visual5.title": "Six Countermeasures",
        "visual5.intro": "Each one attacks a specific weakness of a specific jammer.",
        "visual5.app1.tag": "FREQ",
        "visual5.app1.title": "Frequency Agility",
        "visual5.app1.desc": "Change frequency between pulses. A jammer tuned to one frequency is now wasting its power, and it must retune fast enough to matter.",
        "visual5.app2.tag": "POWER",
        "visual5.app2.title": "More Peak Power",
        "visual5.app2.desc": "Raise the signal above the floor. Simple and effective, but it costs size, cost and electricity — which is why power is a blunt counter.",
        "visual5.app3.tag": "FILTER",
        "visual5.app3.title": "Narrow Bandwidth",
        "visual5.app3.desc": "Match the filter tightly to the transmitted pulse. Noise spread thinly across a wide band is cut hard; the signal inside the passband is not.",
        "visual5.app4.tag": "BEAM",
        "visual5.app4.title": "Sidelobe Rejection",
        "visual5.app4.desc": "A jammer arriving off the main axis enters through the antenna's sidelobes. Directing the antenna at the jammer and nulling it is a well-established technique.",
        "visual5.app5.tag": "SPACE",
        "visual5.app5.title": "Diverse Installations",
        "visual5.app5.desc": "Spread several radars around a site. A jammer close enough to silence one has to be silent against all of them at once.",
        "visual5.app6.tag": "HOME",
        "visual5.app6.title": "Home on Jam",
        "visual5.app6.desc": "Locate the jammer directly, then turn the radar into a sensor that points at it and fires. The attacker's own transmitter becomes the target.",
        "visual5.caption": "Notice that five of the six narrow what the attacker can do. Real radars combine several, because the jammer is not stupid.",
        "visual6.name": "DECEPTION",
        "visual6.title": "The Attack You Cannot Filter",
        "visual6.intro": "Noise jamming loses to a filter. A well-formed false echo does not.",
        "visual6.app1.tag": "RANGE",
        "visual6.app1.title": "Range Gate Stealing",
        "visual6.app1.desc": "The jammer receives the radar's pulse, delays it, and returns a stronger echo at a chosen range. The aircraft vanishes and a ghost appears behind it.",
        "visual6.app2.tag": "ANGLE",
        "visual6.app2.title": "Angle Deception",
        "visual6.app2.desc": "By controlling the phase across a antenna array, a jammer can make the return appear to come from a different bearing entirely.",
        "visual6.app3.tag": "TRACK",
        "visual6.app3.title": "False Tracks",
        "visual6.app3.desc": "Multiple false returns pulled slowly across the display form a plausible track with a plausible speed. The operator has to decide it is false.",
        "visual6.app4.tag": "TGT",
        "visual6.app4.title": "False Targets",
        "visual6.app4.desc": "A drone that mimics a missile's radar signature is now a real and widely deployed threat — the deception idea has become physical.",
        "visual6.app5.tag": "TELL",
        "visual6.app5.title": "Telling Them Apart",
        "visual6.app5.desc": "Deception is usually detected by inconsistencies: a track that appears from nowhere, moves at impossible speed, or appears from exactly the radar's own bearing.",
        "visual6.app6.tag": "LIMIT",
        "visual6.app6.title": "The Fundamental Limit",
        "visual6.app6.desc": "Radar cannot prove an echo is genuine. It can only look for reasons to doubt it — which is why the operator stays in the loop.",
        "visual6.caption": "Noise jamming asks the radar to see better. Deception asks it to doubt what it sees. The second question is much harder.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Yes — radar can be jammed, and no counter defeats every jammer.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 47：雷达会被干扰吗？ — 雷达探索者",
        "page.description": "文章 47：压制干扰、欺骗干扰，以及雷达的全部反制手段——频率捷变、旁瓣抑制、寻的干扰，以及为什么没有一种反制能对付所有干扰机。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月13日",
        "article.title": "雷达会被干扰吗？",
        "article.subtitle": "会。这正是本站存在的一半理由。",
        "toc.title": "本页目录",
        "toc.s1": "两种攻击方式",
        "toc.s2": "压制干扰",
        "toc.s3": "干扰动画",
        "toc.s4": "计算示例",
        "toc.s5": "雷达怎么反击",
        "toc.s6": "欺骗干扰",
        "article.p1": "会。雷达可以被干扰——这也是电子战里争议最大的部分之一。",
        "article.p2": "攻击雷达有两种很不一样的方式。一种用噪声淹没它，让真实回波消失在下面；另一种送回假回波，看起来和真的一模一样。两种都有效，而反制手段完全不同。",
        "article.p3": "压制干扰是硬碰硬：把噪声底抬到把信号包进去。欺骗干扰更微妙——在正确的时刻用正确的形状送回一个脉冲，于是雷达画出一架并不存在的飞机。",
        "article.p4": "每一种反制都有反反制。这就是雷达和电子战能一起进步一个世纪的原因。",
        "visual1.name": "两种攻击方式",
        "visual1.title": "硬碰硬对凭空捏造",
        "visual1.intro": "一种攻击藏起你的信号，另一种伪造一个。",
        "fig1.title": "压制干扰与欺骗干扰对比",
        "fig1.noise": "压制干扰",
        "fig1.noiseSub": "让你的回波消失",
        "fig1.strength": "信号强度",
        "fig1.echo": "回波",
        "fig1.floor": "噪声底被抬高",
        "fig1.f1": "信号被淹没 → 什么都没发现",
        "fig1.f2": "反制：滤波、频率捷变",
        "fig1.decep": "欺骗干扰",
        "fig1.decepSub": "造出一个幻影",
        "fig1.real": "真目标",
        "fig1.ghost": "幻影",
        "fig1.scope": "显示器",
        "fig1.f3": "在空无一物处画出一条假航迹",
        "fig1.f4": "反制：你无法滤波掉一个看起来真实的东西",
        "visual1.caption": "压制干扰是一场信噪比的争论，可以用滤波赢下来。欺骗不行：一个构造良好的假回波能活过你所有的滤波器。",
        "visual2.name": "压制干扰",
        "visual2.title": "抬高噪声底",
        "visual2.intro": "你不需要压过雷达，只需要比回波更响。",
        "visual2.row1.label": "雷达发射峰值功率",
        "visual2.row1.value": "+77 dBm",
        "visual2.row2.label": "200 公里处战斗机的回波",
        "visual2.row2.value": "−116 dBm",
        "visual2.row3.label": "该单元的热噪声",
        "visual2.row3.value": "−113 dBm",
        "visual2.row4.label": "1 千瓦干扰机只需要",
        "visual2.row4.value": "天线处约 −100 dBm",
        "visual2.row5.label": "这意味着余量",
        "visual2.row5.value": "16 dB——40 倍功率比",
        "visual2.row6.label": "干扰机有效距离",
        "visual2.row6.value": "数百公里，因为它只承担单向损耗",
        "visual2.caption": "这就是压制干扰便宜的不对称性：雷达要先赢下 190 dB 的往返路程损耗才看得见任何东西，而干扰机只面对单向损耗。",
        "visual3.name": "动画：噪声底抬升",
        "visual3.title": "看目标消失在噪声里",
        "visual3.intro": "信号本身没变，变的只是它脚下的那条底。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 干净——回波在噪声底之上",
        "visual3.cc2": "2. 被干扰——噪声底抬起来吞掉回波",
        "visual3.cc3": "3. 滤波——雷达收窄带宽，恢复了",
        "visual3.cc4": "4. 再被干扰——干扰机换到新频率",
        "visual3.caption": "最后那一步就是反制与反反制存在的原因：每道防线都压缩了攻击者可用的频率，攻击者就得再找一个。",
        "visual4.name": "计算示例",
        "visual4.title": "为什么天气雷达难被干扰",
        "visual4.intro": "让搜索雷达脆弱的那套物理，同样让天气雷达不好下手。",
        "visual4.row1.label": "干扰机必须覆盖",
        "visual4.row1.value": "一个 400 公里的圆盘、连续、在正确的频段上",
        "visual4.row2.label": "可用频谱只有",
        "visual4.row2.value": "一小段——S 波段是很窄的一片",
        "visual4.row3.label": "频率捷变能对付",
        "visual4.row3.value": "锁定单一频率的干扰机",
        "visual4.row4.label": "打击雷达本身",
        "visual4.row4.value": "是加固、屏蔽且有自我保护的",
        "visual4.row5.label": "但天气数据是公开的",
        "visual4.row5.value": "没有理由去攻击——干扰它对谁都没好处",
        "visual4.row6.label": "结果",
        "visual4.row6.value": "天气雷达基本上不会被干扰",
        "visual4.caption": "反制手段都是冲着「输出对某个人很重要」的雷达去的。天气雷达的输出对所有人都重要，这本身就是一种保护。",
        "visual5.name": "雷达怎么反击",
        "visual5.title": "六种反制",
        "visual5.intro": "每一种都针对某一种干扰机的某个弱点。",
        "visual5.app1.tag": "频率",
        "visual5.app1.title": "频率捷变",
        "visual5.app1.desc": "在脉冲之间换频率。锁定某个频率的干扰机这下在白费功率，而且必须跟得上重新调谐。",
        "visual5.app2.tag": "功率",
        "visual5.app2.title": "加大峰值功率",
        "visual5.app2.desc": "把信号抬到噪声底之上。简单有效，但代价是体积、成本和电——所以功率是个钝但可靠的反制。",
        "visual5.app3.tag": "滤波",
        "visual5.app3.title": "窄带接收",
        "visual5.app3.desc": "把滤波器调得和实际发出的脉冲一样窄。均匀铺在宽带里的噪声被狠狠砍掉，而通带里的信号没事。",
        "visual5.app4.tag": "波束",
        "visual5.app4.title": "旁瓣抑制",
        "visual5.app4.desc": "从主轴方向进来的干扰机走的是天线旁瓣。把天线指向干扰机并对其置零，是一项成熟技术。",
        "visual5.app5.tag": "空间",
        "visual5.app5.title": "分散部署",
        "visual5.app5.desc": "在场地周围布多部雷达。近到能压住一部的干扰机，必须同时压住所有几部才行。",
        "visual5.app6.tag": "寻的",
        "visual5.app6.title": "寻的干扰",
        "visual5.app6.desc": "直接定位干扰机，然后把雷达变成一个指向它开火的传感器。攻击者自己的发射机变成了目标。",
        "visual5.caption": "注意六种里有五种是在压缩攻击者能做的事。真实雷达会同时用几种，因为干扰机也不傻。",
        "visual6.name": "欺骗干扰",
        "visual6.title": "你滤不掉的那种攻击",
        "visual6.intro": "压制干扰输给滤波。构造良好的假回波不会输。",
        "visual6.app1.tag": "距离",
        "visual6.app1.title": "距离门拖引",
        "visual6.app1.desc": "干扰机收到雷达脉冲，延时，然后在选定距离上返回一个更强的回波。飞机消失，身后多出一个鬼影。",
        "visual6.app2.tag": "角度",
        "visual6.app2.title": "角度欺骗",
        "visual6.app2.desc": "控制天线阵列上各单元的相位，干扰机能让回波看起来来自完全不同的方位。",
        "visual6.app3.tag": "航迹",
        "visual6.app3.title": "假航迹",
        "visual6.app3.desc": "多个假回波缓慢地拖过屏幕，就能形成一条航迹合理、速度合理的假目标。得由操作员判断它是假的。",
        "visual6.app4.tag": "诱饵",
        "visual6.app4.title": "假目标",
        "visual6.app4.desc": "能模仿导弹雷达特征的无人机，如今已是真实且广泛部署的威胁——欺骗这个概念已经变成了实体。",
        "visual6.app5.tag": "识别",
        "visual6.app5.title": "怎么区分",
        "visual6.app5.desc": "欺骗通常靠矛盾暴露：凭空出现的航迹、不可能的速度，或者正好从雷达自身方位冒出来的目标。",
        "visual6.app6.tag": "极限",
        "visual6.app6.title": "根本性的极限",
        "visual6.app6.desc": "雷达无法证明一个回波是真的。它只能寻找怀疑的理由——这就是操作员始终留在回路里的原因。",
        "visual6.caption": "压制干扰是在问雷达「能不能看得更准」。欺骗干扰是在问它「敢不敢相信自己看到的」。第二个问题难得多。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "会——雷达可以被干扰，而且没有任何一种反制能对付所有干扰机。",
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
