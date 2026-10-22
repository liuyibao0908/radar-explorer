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
        "page.title": "Article 37: The Transmitter — Radar Explorer",
        "page.description": "Article 37: How does a radar transmit? Peak power, the shout-pause-listen cycle, pulse width versus range resolution, and the devices that make it possible.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Jul 28, 2026",
        "article.title": "The Transmitter — The Radar's Voice",
        "article.subtitle": "Shout, pause, listen. The pause is the whole trick.",
        "toc.title": "On this page",
        "toc.s1": "Why power is hard",
        "toc.s2": "Shout, pause, listen",
        "toc.s3": "Pulse width animation",
        "toc.s4": "Worked example",
        "toc.s5": "The devices",
        "toc.s6": "Self-interference",
        "article.p1": "A radar has to \"shout\" to hear an echo. The transmitter is its voice.",
        "article.p2": "The transmitter creates high-frequency radio waves. More power means longer range. But power can't be infinite — it uses electricity, creates heat, and takes up space. Think of shouting in a valley: a louder voice travels farther, but it tires you out.",
        "article.p3": "A pulse radar shouts, pauses, and listens — it doesn't shout non-stop. Shorter pulses give better range resolution; longer pulses carry more energy. Common devices include magnetrons, klystrons, traveling wave tubes, and solid-state amplifiers.",
        "article.p4": "The transmitter also has to work with the receiver without interfering with itself. Its efficiency and stability directly affect radar performance.",
        "visual1.name": "WHY POWER IS HARD",
        "visual1.title": "The Valley Metaphor",
        "visual1.intro": "More power buys range, and charges you in electricity, heat and volume.",
        "fig1.title": "Power buys range but costs heat",
        "fig1.power": "power",
        "fig1.range": "range",
        "fig1.heat": "heat / size",
        "fig1.p1": "1 kW",
        "fig1.p2": "100 kW",
        "fig1.p3": "1 MW",
        "fig1.note": "100x power buys a bit more range, not 100x the range",
        "visual1.caption": "Range grows like the fourth root of power, not linearly. Ten times the power buys roughly 1.8 times the range — which is why radars stay small.",
        "visual2.name": "SHOUT, PAUSE, LISTEN",
        "visual2.title": "Why a Radar Stops Shouting",
        "visual2.intro": "If it shouted continuously it would drown out the very echo it is waiting for.",
        "fig2.title": "Pulse timing: shout, pause, listen",
        "fig2.shout": "TRANSMIT",
        "fig2.pause": "PAUSE",
        "fig2.listen": "LISTEN",
        "fig2.t1": "1 μs",
        "fig2.t2": "1.5 ms",
        "fig2.t3": "0.7 ms",
        "fig2.blip1": "near",
        "fig2.blip2": "far",
        "fig2.sw": "same pulse repetition frequency",
        "fig2.rule": "rule of thumb: PRF limits the unambiguous range",
        "visual2.caption": "Transmit for a microsecond, then go deaf for a millisecond. That silence is what lets the receiver hear echoes at all.",
        "visual3.name": "ANIMATION: PULSE WIDTH",
        "visual3.title": "Short Pulse or Long Pulse",
        "visual3.intro": "Two targets walk toward the radar. See what the pulse length does to them.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. LONG PULSE -- strong echo, two targets blur into one",
        "visual3.cc2": "2. SHORT PULSE -- weaker, but the two targets separate",
        "visual3.cc3": "3. RESOLUTION -- spacing sets the shortest gap you can see",
        "visual3.cc4": "4. TRADE-OFF -- energy and clarity pull in opposite directions",
        "visual3.caption": "Range resolution is roughly half the pulse length. A 1 μs pulse can separate targets 150 m apart; a 10 μs pulse needs 1.5 km.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "Two Pulses, Two Radars",
        "visual4.intro": "Same target range, same band. Only the pulse length differs.",
        "visual4.row1.label": "Pulse A length",
        "visual4.row1.value": "1 μs",
        "visual4.row2.label": "Pulse A resolution",
        "visual4.row2.value": "150 m — sees two aircraft separately",
        "visual4.row3.label": "Pulse B length",
        "visual4.row3.value": "10 μs",
        "visual4.row4.label": "Pulse B resolution",
        "visual4.row4.value": "1.5 km — they merge into one blob",
        "visual4.caption": "Long pulses are for weather (where features are kilometres wide). Short pulses are for air traffic (where aircraft are hundreds of metres).",
        "visual5.name": "THE DEVICES",
        "visual5.title": "What Actually Makes the Power",
        "visual5.intro": "Four technologies, in the order they appeared.",
        "visual5.app1.tag": "1940s",
        "visual5.app1.title": "Magnetron",
        "visual5.app1.desc": "A tube where electrons spiral through a magnetic field and excite a resonant cavity. Cheap, rugged, still the standard for weather radar peak power.",
        "visual5.app2.tag": "1950s",
        "visual5.app2.title": "Klystron",
        "visual5.app2.desc": "Electrons pass through a series of cavities, first bunched then decelerated. Amplifies an input signal instead of generating it. Very high gain, very expensive.",
        "visual5.app3.tag": "1960s",
        "visual5.app3.title": "Traveling Wave Tube",
        "visual5.app3.desc": "An electron beam travels along a helix slower than light, so it keeps interacting and growing. Broad bandwidth, mostly used on radar and satellite ground stations.",
        "visual5.app4.tag": "1970s",
        "visual5.app4.title": "Solid-State Amplifier",
        "visual5.app4.desc": "Many transistor modules combined in parallel. No vacuum, no warm-up, long life — but power per module is limited, so hundreds are needed for megawatts.",
        "visual5.app5.tag": "GaN",
        "visual5.app5.title": "Modern Modules",
        "visual5.app5.desc": "Gallium nitride switches handle far more power than silicon at radio frequencies. This is what makes compact solid-state weather radars practical today.",
        "visual5.app6.tag": "EFFICIENCY",
        "visual5.app6.title": "Why It Matters",
        "visual5.app6.desc": "A magnetron runs near 10 percent efficiency. That means for every 100 kW of RF output it draws about 1 MW from the grid, and dumps the rest as heat.",
        "visual5.caption": "Tubes generate, amplifiers grow. The modern trend is thousands of tiny solid-state modules replacing one big tube.",
        "visual6.name": "SELF-INTERFERENCE",
        "visual6.title": "How to Not Hear Yourself",
        "visual6.intro": "The transmitter is the loudest thing in the building. The receiver must survive it.",
        "fig6.title": "Protecting the receiver from the transmitter",
        "fig6.tx": "TX",
        "fig6.txsub": "100 kW",
        "fig6.rx": "RX",
        "fig6.rxsub": "−130 dBm",
        "fig6.dup": "duplexer",
        "fig6.dupsub": "blocks TX",
        "fig6.ant": "antenna",
        "fig6.gap": "about 230 dB of isolation needed",
        "fig6.rule": "recovery time sets the minimum range",
        "visual6.caption": "The receiver must survive a signal roughly a hundred billion billion times stronger than what it is trying to detect. That is what the duplexer and the blanking are for.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "The transmitter is the radar's voice — it sends the signal out.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 37：发射机——雷达的嗓门 — 雷达探索者",
        "page.description": "文章 37：雷达怎么发波？峰值功率、喊—停—听循环、脉冲宽度与距离分辨率，以及实现这一切的器件。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年7月28日",
        "article.title": "发射机——雷达的嗓门",
        "article.subtitle": "喊一下、停一下、听回声。那个「停」才是关键。",
        "toc.title": "本页目录",
        "toc.s1": "功率为什么难",
        "toc.s2": "喊、停、听",
        "toc.s3": "脉冲宽度动画",
        "toc.s4": "计算示例",
        "toc.s5": "器件",
        "toc.s6": "自干扰",
        "article.p1": "雷达要「喊」出去，才能听到回声。发射机就是它的嗓门。",
        "article.p2": "发射机产生高频电磁波，功率越大，传得越远。但功率不能无限大：耗电、发热、体积都受限。像在山谷喊话，嗓门大传得远，但也更累。",
        "article.p3": "脉冲雷达是「喊一下、停一下、听回声」，不是一直喊。脉冲越短，距离分辨率越高；脉冲越长，能量越大。常见器件有磁控管、速调管、行波管、固态放大器。",
        "article.p4": "发射机还要和接收机配合，避免自己干扰自己。发射机效率、稳定性直接影响雷达性能。",
        "visual1.name": "功率为什么难",
        "visual1.title": "山谷类比",
        "visual1.intro": "功率能买到距离，代价是电、热和体积。",
        "fig1.title": "功率买到距离，代价是发热",
        "fig1.power": "功率",
        "fig1.range": "距离",
        "fig1.heat": "发热 / 体积",
        "fig1.p1": "1 千瓦",
        "fig1.p2": "100 千瓦",
        "fig1.p3": "1 兆瓦",
        "fig1.note": "功率翻 100 倍，距离只多一点点，不会多 100 倍",
        "visual1.caption": "距离随功率的四次方根增长，不是线性增长。功率翻十倍，距离大约只多 1.8 倍——这就是雷达体积一直做不大的原因。",
        "visual2.name": "喊、停、听",
        "visual2.title": "雷达为什么要停下来",
        "visual2.intro": "如果一直喊，它就会把自己的回声淹掉。",
        "fig2.title": "脉冲时序：喊、停、听",
        "fig2.shout": "发射",
        "fig2.pause": "静默",
        "fig2.listen": "接收",
        "fig2.t1": "1 微秒",
        "fig2.t2": "1.5 毫秒",
        "fig2.t3": "0.7 毫秒",
        "fig2.blip1": "近",
        "fig2.blip2": "远",
        "fig2.sw": "重复频率相同",
        "fig2.rule": "经验法则：重复频率限制了不模糊距离",
        "visual2.caption": "发一微秒，然后聋一毫秒。正是那段沉默，才让接收机听得见回波。",
        "visual3.name": "动画：脉冲宽度",
        "visual3.title": "短脉冲还是长脉冲",
        "visual3.intro": "两个目标朝雷达走来，看看脉冲长度会怎么改变它们。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 长脉冲——回波强，两个目标糊成一个",
        "visual3.cc2": "2. 短脉冲——回波弱，但两个目标分开了",
        "visual3.cc3": "3. 分辨率——间距决定你能看出的最小间隔",
        "visual3.cc4": "4. 取舍——能量和清晰度方向相反",
        "visual3.caption": "距离分辨率约等于脉冲长度的一半。1 微秒的脉冲能分开相距 150 米的两个目标；10 微秒的脉冲需要 1.5 公里。",
        "visual4.name": "计算示例",
        "visual4.title": "两种脉冲，两种雷达",
        "visual4.intro": "同样的目标距离，同样的频段，只有脉冲长度不同。",
        "visual4.row1.label": "脉冲 A 长度",
        "visual4.row1.value": "1 微秒",
        "visual4.row2.label": "脉冲 A 分辨率",
        "visual4.row2.value": "150 米——两架飞机能分开",
        "visual4.row3.label": "脉冲 B 长度",
        "visual4.row3.value": "10 微秒",
        "visual4.row4.label": "脉冲 B 分辨率",
        "visual4.row4.value": "1.5 公里——糊成一团",
        "visual4.caption": "长脉冲用于天气（天气特征以公里计）。短脉冲用于空中交通（飞机只有几百米）。",
        "visual5.name": "器件",
        "visual5.title": "功率到底是谁发出来的",
        "visual5.intro": "四种技术，按出现顺序排。",
        "visual5.app1.tag": "1940年代",
        "visual5.app1.title": "磁控管",
        "visual5.app1.desc": "电子在磁场中螺旋运动，激发谐振腔的真空管。便宜、耐用，至今仍是天气雷达峰值功率的主力。",
        "visual5.app2.tag": "1950年代",
        "visual5.app2.title": "速调管",
        "visual5.app2.desc": "电子穿过一串谐振腔，先聚束再减速。它是放大输入信号而不是自己产生信号。增益极高，也极贵。",
        "visual5.app3.tag": "1960年代",
        "visual5.app3.title": "行波管",
        "visual5.app3.desc": "电子束沿螺旋管以低于光速的速度前进，因此能持续作用并增长。带宽宽，主要用于雷达和卫星地面站。",
        "visual5.app4.tag": "1970年代",
        "visual5.app4.title": "固态放大器",
        "visual5.app4.desc": "多个晶体管模块并联。没有真空管，不用预热，寿命长——但单模块功率有限，兆瓦级要几百个。",
        "visual5.app5.tag": "氮化镓",
        "visual5.app5.title": "现代模块",
        "visual5.app5.desc": "氮化镓开关在射频下能承受的功率远高于硅。这正是小型固态天气雷达如今变得可行的原因。",
        "visual5.app6.tag": "效率",
        "visual5.app6.title": "为什么这很重要",
        "visual5.app6.desc": "磁控管的效率大约只有 10%。也就是说每输出 100 千瓦射频，它要从电网取约 1 兆瓦，其余全部变成热。",
        "visual5.caption": "电子管自己产生功率，放大器让功率长大。现在的趋势是几千个小固态模块取代一根大电子管。",
        "visual6.name": "自干扰",
        "visual6.title": "怎么做到不听见自己",
        "visual6.intro": "发射机是楼里最响的东西。接收机必须能活下来。",
        "fig6.title": "保护接收机不被发射机打聋",
        "fig6.tx": "发射机",
        "fig6.txsub": "100 千瓦",
        "fig6.rx": "接收机",
        "fig6.rxsub": "−130 dBm",
        "fig6.dup": "收发开关",
        "fig6.dupsub": "挡住发射",
        "fig6.ant": "天线",
        "fig6.gap": "需要大约 230 dB 的隔离度",
        "fig6.rule": "恢复时间决定了最近可探测距离",
        "visual6.caption": "接收机要活过的信号，比它想探测的目标强约一千亿亿倍。这就是收发开关和消隐门存在的意义。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "发射机是雷达的嗓门，负责把信号发出去。",
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
