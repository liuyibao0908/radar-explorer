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
        "page.title": "Article 39: The Duplexer — Radar Explorer",
        "page.description": "Article 39: How does one antenna send and receive without destroying itself? Gas discharge tubes, PIN diodes, recovery time, and the alternative of separate antennas.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Jul 31, 2026",
        "article.title": "The Duplexer — How One Antenna Does Both",
        "article.subtitle": "A door that opens and closes a hundred times a second.",
        "toc.title": "On this page",
        "toc.s1": "The problem",
        "toc.s2": "The door analogy",
        "toc.s3": "Switching animation",
        "toc.s4": "Worked example",
        "toc.s5": "Two technologies",
        "toc.s6": "The alternative",
        "article.p1": "A radar often uses just one antenna for both sending and receiving. How do they not clash?",
        "article.p2": "When sending, the power is very high — it would burn out the receiver. The duplexer protects the receiver during sending, and connects the antenna to the receiver during receiving. Think of a door: it closes the receiver side while sending, and opens it while receiving.",
        "article.p3": "Common types include gas discharge tubes and PIN diode switches. The switch must be fast, or it will miss close-range echoes. It also has to handle high power without breaking itself.",
        "article.p4": "Some radars use separate antennas for sending and receiving, so no duplexer is needed. It is a small but critical part.",
        "visual1.name": "THE PROBLEM",
        "visual1.title": "Two Numbers That Cannot Both Be True",
        "visual1.intro": "The same wire carries a megawatt out and a trillionth of a watt back.",
        "fig1.title": "The dynamic range problem in one picture",
        "fig1.tx": "TRANSMIT",
        "fig1.txval": "+80 dBm",
        "fig1.rx": "RECEIVE",
        "fig1.rxval": "−130 dBm",
        "fig1.gap": "210 dB apart",
        "fig1.issue": "if the transmit pulse reached the receiver input,",
        "fig1.result": "the receiver front end would be destroyed instantly",
        "visual1.caption": "A duplexer is a device whose only job is to make those two numbers never meet on the same wire at the same time.",
        "visual2.name": "THE DOOR ANALOGY",
        "visual2.title": "A Door, Not a Wall",
        "visual2.intro": "It does not block the signal permanently — it switches, thousands of times a second.",
        "fig2.title": "The duplexer as a switchable door",
        "fig2.ant": "ANTENNA",
        "fig2.oneport": "one port",
        "fig2.dup": "DUPLEXER",
        "fig2.dupsub": "routes the pulse",
        "fig2.tx": "TX",
        "fig2.txsub": "shut off",
        "fig2.rx": "RX",
        "fig2.rxsub": "open",
        "fig2.state1": "TRANSMIT: door to RX is closed",
        "fig2.state2": "RECEIVE: door opens, TX side terminated",
        "fig2.note": "the TX side still needs an absorber — reflected power would bounce back into the amplifier",
        "visual2.caption": "Blocking the receiver is only half the job. The transmitter side also needs somewhere to dump the power that does not leave the antenna.",
        "visual3.name": "ANIMATION: THE SWITCH CYCLE",
        "visual3.title": "One Full Pulse Cycle",
        "visual3.intro": "Watch the door open and close, and see how long the receiver stays deaf.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. TRANSMIT -- the RX door is shut, power goes out",
        "visual3.cc2": "2. SWITCH -- the device changes state in microseconds",
        "visual3.cc3": "3. LISTEN -- the RX door opens and the receiver recovers",
        "visual3.cc4": "4. DEAF ZONE -- anything closer than recovery time is lost",
        "visual3.caption": "Recovery time sets the minimum detectable range. A weather radar with 1 μs recovery simply cannot see the first 150 metres.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "What Recovery Time Costs You",
        "visual4.intro": "Two radars with the same 300 km range, and very different blind spots.",
        "visual4.row1.label": "Speed of light",
        "visual4.row1.value": "300 000 km per second",
        "visual4.row2.label": "Radar A recovery",
        "visual4.row2.value": "1 μs — blind to the first 150 m",
        "visual4.row3.label": "Radar B recovery",
        "visual4.row3.value": "5 μs — blind to the first 750 m",
        "visual4.row4.label": "Round trip",
        "visual4.row4.value": "150 km out and back = 1 ms",
        "visual4.caption": "Recovery is one round trip. A 1 μs device means anything inside 150 metres returns while the switch is still changing state.",
        "visual5.name": "TWO TECHNOLOGIES",
        "visual5.title": "Gas Tube or PIN Diode",
        "visual5.intro": "Two completely different ways to build the same switch.",
        "visual5.app1.tag": "GAS",
        "visual5.app1.title": "Gas Discharge Tube",
        "visual5.app1.desc": "A small tube filled with low-pressure gas. In transmit mode the high voltage strikes an arc; the ionised gas becomes conducting and blocks the receiver. It extinguishes when the voltage drops.",
        "visual5.app2.tag": "PROS",
        "visual5.app2.title": "Handles Huge Power",
        "visual5.app2.desc": "An arc will carry megawatts without complaint, so weather radars with very high peak power have used gas tubes for fifty years. The arc also carries the power the antenna does not radiate.",
        "visual5.app3.tag": "CONS",
        "visual5.app3.title": "Slow and Wearful",
        "visual5.app3.desc": "Extinction and re-striking take microseconds, and the electrodes erode over time. Only a few hundred pulses per minute are practical.",
        "visual5.app4.tag": "PIN",
        "visual5.app4.title": "PIN Diode",
        "visual5.app4.desc": "A silicon diode with a wide intrinsic region, used as a switch rather than a rectifier. Forward bias makes it conduct; reverse bias makes it block. No gas, no arc.",
        "visual5.app5.tag": "PROS",
        "visual5.app5.title": "Fast and Reliable",
        "visual5.app5.desc": "Switching takes nanoseconds and the device has no moving parts or consumable electrodes. Tens of thousands of pulses per second are routine.",
        "visual5.app6.tag": "CONS",
        "visual5.app6.title": "Limited by Current",
        "visual5.app6.desc": "A single diode carries only tens of amps. Megawatt systems use hundreds in parallel, which is why a phased array can afford them but a classic magnetron radar often could not.",
        "visual5.caption": "Gas for raw power, silicon for speed. Most modern radars use PIN diodes in large arrays.",
        "visual6.name": "THE ALTERNATIVE",
        "visual6.title": "Skip the Switch Entirely",
        "visual6.intro": "If two antennas are affordable, the problem does not exist.",
        "fig6.title": "Bistatic: separate transmit and receive antennas",
        "fig6.tx": "TX antenna",
        "fig6.rx": "RX antenna",
        "fig6.target": "target",
        "fig6.note": "no duplexer needed — the two never share a feed line",
        "fig6.one": "one-way",
        "fig6.two": "back to a different place",
        "visual6.caption": "One switch, two antennas, or one PIN diode per array element — every radar solves this trade-off differently.",
        "visual6.app1.tag": "BISTATIC",
        "visual6.app1.title": "Two Antennas",
        "visual6.app1.desc": "Transmit and receive on separate antennas far apart. No switching, no isolation problem, and the geometry itself hides the transmitter. Used for missile defence and over-the-horizon radar.",
        "visual6.app2.tag": "PASSIVE",
        "visual6.app2.title": "Receive Only",
        "visual6.app2.desc": "With no transmitter at all there is nothing to switch. Passive radars listen for other people's energy and are extremely hard to detect themselves.",
        "visual6.app3.tag": "T/R MODULE",
        "visual6.app3.title": "Switch Per Element",
        "visual6.app3.desc": "In a phased array every element has its own transmit/receive module containing a duplexer. Thousands of small PIN diode switches replace one big fragile one.",
        "visual6.app4.tag": "CIRCULATOR",
        "visual6.app4.title": "The Passive Version",
        "visual6.app4.desc": "A ferrite circulator routes signals by direction rather than by switching. It needs no control voltage at all, but the isolation is lower and it handles less power.",
        "visual6.app5.tag": "WHY BOTH",
        "visual6.app5.title": "Cost vs Capability",
        "visual6.app5.desc": "A duplexer is cheap, compact and keeps one antenna pointed at the sky. Bistatic is better physics but far harder to build. Most radars pick the duplexer.",
        "visual6.app6.tag": "SUMMARY",
        "visual6.app6.title": "Small but Critical",
        "visual6.app6.desc": "Nobody photographs the duplexer, but without it the receiver burns up on the first pulse. It is the least glamorous part of the most expensive machine.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "The duplexer is the traffic controller — it keeps sending and receiving from clashing.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 39：收发开关——一个天线怎么又发又收 — 雷达探索者",
        "page.description": "文章 39：一副天线怎么收发兼用而不把自己烧坏？气体放电管、PIN 二极管、恢复时间，以及干脆用两副天线的替代方案。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年7月31日",
        "article.title": "收发开关——一个天线怎么又发又收",
        "article.subtitle": "一扇每秒开关上百次的门。",
        "toc.title": "本页目录",
        "toc.s1": "问题",
        "toc.s2": "门的类比",
        "toc.s3": "切换动画",
        "toc.s4": "计算示例",
        "toc.s5": "两种技术",
        "toc.s6": "替代方案",
        "article.p1": "雷达常常只用一副天线，既要发又要收，它怎么不打架？",
        "article.p2": "发射时功率很大，直接进接收机会把它烧坏。收发开关的作用：发射时保护接收机，接收时把天线接到接收机。像一个门，发射时关住接收机那一边，接收时再打开。",
        "article.p3": "常见类型有气体放电管、PIN 二极管开关。开关速度要快，不然会漏掉近距离回波。收发开关还要承受高功率，不能自己先坏。",
        "article.p4": "有些雷达收发分置，用两副天线，就不用这个开关。它是雷达里不起眼但很关键的小部件。",
        "visual1.name": "问题",
        "visual1.title": "两个不可能同时成立的数字",
        "visual1.intro": "同一根线上，发出去是一兆瓦，回来是万亿分之一瓦。",
        "fig1.title": "一张图看懂动态范围问题",
        "fig1.tx": "发射",
        "fig1.txval": "+80 dBm",
        "fig1.rx": "接收",
        "fig1.rxval": "−130 dBm",
        "fig1.gap": "相差 210 dB",
        "fig1.issue": "如果发射脉冲进到接收机输入端，",
        "fig1.result": "接收前端会在瞬间被烧毁",
        "visual1.caption": "收发开关唯一的工作，就是让这两个数字永远不在同一根线上、同一时刻相遇。",
        "visual2.name": "门的类比",
        "visual2.title": "是门，不是墙",
        "visual2.intro": "它不是永久挡住信号——它在切换，每秒上千次。",
        "fig2.title": "收发开关就是一扇可切换的门",
        "fig2.ant": "天线",
        "fig2.oneport": "一个端口",
        "fig2.dup": "收发开关",
        "fig2.dupsub": "决定脉冲走向",
        "fig2.tx": "发射",
        "fig2.txsub": "关闭",
        "fig2.rx": "接收",
        "fig2.rxsub": "打开",
        "fig2.state1": "发射时：通向接收机的门关上",
        "fig2.state2": "接收时：门打开，发射端接吸收负载",
        "fig2.note": "发射端也需要吸收——反射回来的功率会打回放大器",
        "visual2.caption": "挡住接收机只是一半。发射端同样需要一个去处，来安置那些没有辐射出去的功率。",
        "visual3.name": "动画：切换循环",
        "visual3.title": "一个完整脉冲周期",
        "visual3.intro": "看这扇门开合，并看清接收机聋了多久。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 发射——接收端门关闭，功率打出去",
        "visual3.cc2": "2. 切换——器件在微秒内改变状态",
        "visual3.cc3": "3. 接收——门打开，接收机恢复",
        "visual3.cc4": "4. 盲区——比恢复时间更近的东西全部丢失",
        "visual3.caption": "恢复时间决定了最近可探测距离。恢复时间 1 微秒的天气雷达，就根本看不到最初那 150 米。",
        "visual4.name": "计算示例",
        "visual4.title": "恢复时间让你付出什么",
        "visual4.intro": "两部探测距离同为 300 公里的雷达，盲区却差很多。",
        "visual4.row1.label": "光速",
        "visual4.row1.value": "每秒 30 万公里",
        "visual4.row2.label": "A 台恢复时间",
        "visual4.row2.value": "1 微秒——前 150 米是盲的",
        "visual4.row3.label": "B 台恢复时间",
        "visual4.row3.value": "5 微秒——前 750 米是盲的",
        "visual4.row4.label": "往返",
        "visual4.row4.value": "150 公里去加回 = 1 毫秒",
        "visual4.caption": "恢复时间就是一个来回。1 微秒的器件，意味着 150 米以内的回波到达时开关还在换状态。",
        "visual5.name": "两种技术",
        "visual5.title": "气体管还是 PIN 二极管",
        "visual5.intro": "两种完全不同的做法，实现同一个开关。",
        "visual5.app1.tag": "气体",
        "visual5.app1.title": "气体放电管",
        "visual5.app1.desc": "一根装着低压气体的细管。发射时高电压击穿起弧，电离气体变成导体，挡住接收机。电压降下来弧就熄灭。",
        "visual5.app2.tag": "优点",
        "visual5.app2.title": "扛得住大功率",
        "visual5.app2.desc": "电弧能轻松通过兆瓦级功率，所以高峰值功率的天气雷达用了五十多年气体管。电弧同时也吸收了天线没有辐射出去的那部分功率。",
        "visual5.app3.tag": "缺点",
        "visual5.app3.title": "慢而且有磨损",
        "visual5.app3.desc": "熄弧和重新起弧都要微秒级，而且电极会随时间磨损。实际每分钟只能打几百个脉冲。",
        "visual5.app4.tag": "PIN",
        "visual5.app4.title": "PIN 二极管",
        "visual5.app4.desc": "一种本征区很宽的硅二极管，这里当开关用而不是当整流器用。正向导通，反向截止。没有气体，也没有电弧。",
        "visual5.app5.tag": "优点",
        "visual5.app5.title": "快而且可靠",
        "visual5.app5.desc": "切换只需纳秒，没有活动部件，也没有会消耗的电极。每秒几万个脉冲是家常便饭。",
        "visual5.app6.tag": "缺点",
        "visual5.app6.title": "受电流限制",
        "visual5.app6.desc": "单只二极管只能通过几十安培。兆瓦级系统要并联几百只——这就是相控阵用得起、而老式磁控管雷达往往用不起的原因。",
        "visual5.caption": "气体管管大功率，硅二极管管速度。现代雷达大多用大规模 PIN 二极管阵列。",
        "visual6.name": "替代方案",
        "visual6.title": "干脆不要这个开关",
        "visual6.intro": "如果买得起两副天线，这个问题就不存在了。",
        "fig6.title": "双基地：收发天线分开",
        "fig6.tx": "发射天线",
        "fig6.rx": "接收天线",
        "fig6.target": "目标",
        "fig6.note": "不需要收发开关——两者从不共用一根馈线",
        "fig6.one": "单程",
        "fig6.two": "回到另一个地方",
        "visual6.caption": "一个开关、两副天线、或者每个阵元一个 PIN 二极管——每种雷达对这个取舍都有不同答案。",
        "visual6.app1.tag": "双基地",
        "visual6.app1.title": "两副天线",
        "visual6.app1.desc": "收发天线相隔很远。不用切换、没有隔离问题，连几何布局本身就藏住了发射机。用于反导和超视距雷达。",
        "visual6.app2.tag": "被动",
        "visual6.app2.title": "只收不发",
        "visual6.app2.desc": "根本没有发射机，就没有东西需要切换。被动雷达监听别人的能量，自身也极难被发现。",
        "visual6.app3.tag": "收发组件",
        "visual6.app3.title": "每个单元一个开关",
        "visual6.app3.desc": "相控阵里每个阵元都有自己的收发组件，里面各有一个收发开关。几千个小 PIN 二极管开关取代了一个又大又脆的。",
        "visual6.app4.tag": "环行器",
        "visual6.app4.title": "无源版本",
        "visual6.app4.desc": "铁氧体环行器靠信号方向而不是靠开关来分配路径。它根本不需要控制电压，但隔离度更低，能承受的功率也更小。",
        "visual6.app5.tag": "为什么两种都有",
        "visual6.app5.title": "成本与能力",
        "visual6.app5.desc": "收发开关便宜、紧凑，还能让一副天线始终对着天空。双基地物理上更优，但建造难度大得多。多数雷达选择收发开关。",
        "visual6.app6.tag": "总结",
        "visual6.app6.title": "不起眼但关键",
        "visual6.app6.desc": "没人会给收发开关拍照，但少了它，接收机会在第一个脉冲上就烧掉。它是最贵机器里最不光鲜的部件。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "收发开关是雷达里的交通指挥，让收发不打架。",
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
