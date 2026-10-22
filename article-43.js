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
        "page.title": "Article 43: How the Whole Radar Works Together — Radar Explorer",
        "page.description": "Article 43: All ten steps of one complete radar cycle, from the transmitter firing to the display drawing a blip — and why the whole system matters more than any single part.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 6, 2026",
        "article.title": "How the Whole Radar Works Together",
        "article.subtitle": "Ten steps, repeated thousands of times a second.",
        "toc.title": "On this page",
        "toc.s1": "The ten steps",
        "toc.s2": "The loop closes",
        "toc.s3": "Cycle animation",
        "toc.s4": "Where the time goes",
        "toc.s5": "The weakest link",
        "toc.s6": "Radar networks",
        "article.p1": "In the last nine articles, we looked at each part of a radar one by one. Now let's put them together and see how one full detection happens.",
        "article.p2": "One full cycle: transmitter creates the signal → duplexer switches to send → antenna sends the wave out → wave bounces off the target → antenna receives the echo → duplexer switches to receive → receiver amplifies the signal → signal processor picks out the target → display shows it → servo keeps the antenna scanning.",
        "article.p3": "These ten steps repeat over and over, sometimes thousands of times per second. If any step fails, detection suffers. If the transmitter is too weak, the radar can't see far. If the receiver is not sensitive enough, it misses small targets. If the processor is too slow, it can't track fast targets.",
        "article.p4": "Think of a radar like a sports team: every position does its job to score. A radar is not one amazing part — it is the whole system working together.",
        "visual1.name": "THE TEN STEPS",
        "visual1.title": "One Cycle, Part by Part",
        "visual1.intro": "Five steps send the wave out, five bring it back and turn it into a mark on a screen.",
        "fig1.title": "The ten steps of one complete cycle",
        "fig1.out": "OUTBOUND",
        "fig1.s1": "1. Transmitter makes a pulse",
        "fig1.s2": "2. Duplexer switches to TX",
        "fig1.s3": "3. Antenna focuses it into a beam",
        "fig1.s4": "4. The wave travels out",
        "fig1.s5": "5. It bounces off the target",
        "fig1.back": "INBOUND",
        "fig1.s6": "6. Antenna catches the echo",
        "fig1.s7": "7. Duplexer switches to RX",
        "fig1.s8": "8. Receiver amplifies it 80 dB",
        "fig1.s9": "9. Processor separates target from clutter",
        "fig1.s10": "10. Display draws one pixel",
        "fig1.servo": "11. Servo",
        "fig1.servosub": "turns the antenna",
        "fig1.loop": "back to step 1 — this loop is the radar",
        "fig1.timing": "but the wave itself takes 66 ms to come back from 100 km",
        "fig1.timing2": "the electrical work around it takes about 200 nanoseconds",
        "fig1.timing3": "a radar is mostly waiting",
        "visual1.caption": "Step 11 is not part of the cycle — it is what makes the cycle repeat in a different direction.",
        "visual2.name": "THE LOOP CLOSES",
        "visual2.title": "Why It Has to Loop",
        "visual2.intro": "One measurement gives you one direction. You need a whole circle to know where anything is.",
        "visual2.row1.label": "Pulse repetition frequency",
        "visual2.row1.value": "600 pulses per second",
        "visual2.row2.label": "Measurements per sweep",
        "visual2.row2.value": "600 × 0.04 s = 24 pulses per degree",
        "visual2.row3.label": "Pulses needed to integrate",
        "visual2.row3.value": "32 — so 12 pulses per degree",
        "visual2.row4.label": "Result",
        "visual2.row4.value": "360° covered in 0.03 s → 20 sweeps per second",
        "visual2.caption": "The loop exists because a target is only well measured after enough pulses have hit it from the same direction.",
        "visual3.name": "ANIMATION: THE CYCLE",
        "visual3.title": "Watching Ten Steps Run",
        "visual3.intro": "The whole loop, compressed. Watch which block lights up at each stage.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1-3. TRANSMIT -- power, switch, focused beam",
        "visual3.cc2": "4-5. OUT AND BACK -- the wave leaves and returns",
        "visual3.cc3": "6-8. RECEIVE -- switch, amplify, listen",
        "visual3.cc4": "9-10. DECIDE -- separate the target, draw the pixel",
        "visual3.caption": "The cycle is identical every time. Only the bearing changes, and that change comes from the servo.",
        "visual4.name": "WHERE THE TIME GOES",
        "visual4.title": "One Round Trip, Broken Down",
        "visual4.intro": "A radar at 100 km has 66 milliseconds of physics and 200 nanoseconds of electronics.",
        "visual4.row1.label": "Wave travels 100 km out",
        "visual4.row1.value": "333 μs",
        "visual4.row2.label": "Wave travels 100 km back",
        "visual4.row2.value": "333 μs",
        "visual4.row3.label": "Total round trip",
        "visual4.row3.value": "666 μs → 100 km in 667 μs",
        "visual4.row4.label": "Duplexer switching",
        "visual4.row4.value": "1–5 μs",
        "visual4.row5.label": "Receiver + processing",
        "visual4.row5.value": "1–10 μs",
        "visual4.row6.label": "Servo moves on",
        "visual4.row6.value": "the remaining 1.7 ms of the PRF",
        "visual4.caption": "This is why every microsecond of electronics matters: the wave is out of your control for 666 of the 700 microseconds.",
        "visual5.name": "THE WEAKEST LINK",
        "visual5.title": "Where the Budget Goes Wrong",
        "visual5.intro": "Improve one part and the limit simply moves somewhere else.",
        "visual5.app1.tag": "TX",
        "visual5.app1.title": "Not Enough Power",
        "visual5.app1.desc": "Range grows as the fourth root of power. Quadrupling the transmitter buys only about 1.4 times the distance — a very expensive improvement.",
        "visual5.app2.tag": "RX",
        "visual5.app2.title": "Not Sensitive Enough",
        "visual5.app2.desc": "A receiver that is 3 dB worse than it should be loses real detection range outright. Unlike power, this is not recoverable later.",
        "visual5.app3.tag": "PROC",
        "visual5.app3.title": "Too Slow",
        "visual5.app3.desc": "If processing lags behind the sweep, the display shows a picture of where things were, not where they are. Track prediction papers over the gap.",
        "visual5.app4.tag": "SERVO",
        "visual5.app4.title": "Too Slow to Point",
        "visual5.app4.desc": "A faster transmitter does nothing if the beam passes a target before the processor has finished with the previous direction.",
        "visual5.app5.tag": "DUPLEXER",
        "visual5.app5.title": "Too Slow to Switch",
        "visual5.app5.desc": "Recovery time sets a blind zone at close range. Everything inside it is simply not observed, no matter how good the rest of the radar is.",
        "visual5.app6.tag": "TEAM",
        "visual5.app6.title": "The Real Answer",
        "visual5.app6.desc": "Designs are limited by the tightest part, so engineers balance them rather than maximising any one. A balanced radar beats a brilliant one.",
        "visual5.caption": "The chain has no weakest link in the usual sense — it has a limiting link, and moving it requires redesigning everything around it.",
        "visual6.name": "RADAR NETWORKS",
        "visual6.title": "Many Radars, One Picture",
        "visual6.intro": "Two radars cover the gaps the other one cannot see.",
        "visual6.app1.tag": "COVERAGE",
        "visual6.app1.title": "Filling the Gaps",
        "visual6.app1.desc": "A target hidden by terrain from one site is often visible from another. Several sites together see continuously where one site sees in patches.",
        "visual6.app2.tag": "DOPPLER",
        "visual6.app2.title": "Two Look Rates",
        "visual6.app2.desc": "A slow radar sees far but measures speed poorly; a fast one is the reverse. A network combining both gets long range and accurate speed at once.",
        "visual6.app3.tag": "STEALTH",
        "visual6.app3.title": "Different Aspects",
        "visual6.app3.desc": "A shape designed to be invisible from the front is usually visible from the side. Sites at different angles cover each other's blind aspects.",
        "visual6.app4.tag": "TRACK",
        "visual6.app4.title": "Shared Tracks",
        "visual6.app4.desc": "Each radar passes its detections to a fusion centre, which correlates them into one track. Two confirmations from different sites are worth far more than two from one.",
        "visual6.app5.tag": "COST",
        "visual6.app5.title": "The Price",
        "visual6.app5.desc": "Several installations, several sets of buildings, and a communications network that itself needs protecting. Networks buy coverage with capital and complexity.",
        "visual6.app6.tag": "SCALE",
        "visual6.app6.title": "The Two Extremes",
        "visual6.app6.desc": "A chain of cheap short-range radars covering one building, and a national network of long-range radars. Same ten steps, thirty times over.",
        "visual6.caption": "Networking does not change the physics of any single radar. It changes what the operator sees by combining many incomplete pictures into one.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "A radar works only when all its parts work together.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 43：整机怎么协同工作 — 雷达探索者",
        "page.description": "文章 43：一次完整雷达循环的十个步骤，从发射机开火到显示器画出一个光点——以及为什么整套系统比任何单个部件都重要。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月6日",
        "article.title": "整机怎么协同工作",
        "article.subtitle": "十个步骤，每秒重复成千上万次。",
        "toc.title": "本页目录",
        "toc.s1": "十个步骤",
        "toc.s2": "为什么必须循环",
        "toc.s3": "循环动画",
        "toc.s4": "时间花在哪",
        "toc.s5": "瓶颈在哪",
        "toc.s6": "雷达组网",
        "article.p1": "前面九篇，我们一个一个看了雷达的部件。这一篇把它们串起来，看一次完整探测怎么完成。",
        "article.p2": "一次完整探测流程：发射机产生信号 → 收发开关切到发射 → 天线把波发出去 → 波碰到目标反射 → 天线收到回波 → 收发开关切到接收 → 接收机放大信号 → 信号处理机挑出目标 → 显示器画出来 → 伺服控制天线继续扫描。",
        "article.p3": "这十步循环往复，每秒可能重复成千上万次。任何一个环节出问题，都会影响探测效果。发射机功率不够，就看不远；接收机不灵敏，就漏掉小目标；信号处理不够快，就跟踪不上高速目标。",
        "article.p4": "可以把雷达想成一支球队：每个位置各司其职，才能完成一次进攻。雷达不是单个零件厉害，而是整套系统配合得好。",
        "visual1.name": "十个步骤",
        "visual1.title": "一次循环，逐步拆开",
        "visual1.intro": "五步把波送出去，五步把它收回来并变成屏幕上的一个标记。",
        "fig1.title": "一次完整循环的十个步骤",
        "fig1.out": "去程",
        "fig1.s1": "1. 发射机产生一个脉冲",
        "fig1.s2": "2. 收发开关切到发射",
        "fig1.s3": "3. 天线把它聚成一道波束",
        "fig1.s4": "4. 波向外传播",
        "fig1.s5": "5. 波在目标上反射",
        "fig1.back": "回程",
        "fig1.s6": "6. 天线接住回波",
        "fig1.s7": "7. 收发开关切到接收",
        "fig1.s8": "8. 接收机放大 80 dB",
        "fig1.s9": "9. 处理机把目标从杂波里分出来",
        "fig1.s10": "10. 显示器画出一个像素",
        "fig1.servo": "11. 伺服",
        "fig1.servosub": "转动天线",
        "fig1.loop": "回到第 1 步——这个环就是雷达",
        "fig1.timing": "但波本身从 100 公里外回来要 66 毫秒",
        "fig1.timing2": "周围的电子工作只花大约 200 纳秒",
        "fig1.timing3": "雷达大部分时间都在等",
        "visual1.caption": "第 11 步不属于这个循环——它是让循环换一个方向重复的东西。",
        "visual2.name": "为什么必须循环",
        "visual2.title": "环为什么要闭上",
        "visual2.intro": "一次测量只给你一个方向。要知道任何东西在哪，你得转满一圈。",
        "visual2.row1.label": "脉冲重复频率",
        "visual2.row1.value": "每秒 600 个脉冲",
        "visual2.row2.label": "每圈的测量次数",
        "visual2.row2.value": "600 × 0.04 秒 = 每度 24 个脉冲",
        "visual2.row3.label": "积累需要的脉冲数",
        "visual2.row3.value": "32 个——所以每度 12 个脉冲",
        "visual2.row4.label": "结果",
        "visual2.row4.value": "0.03 秒扫完 360° → 每秒 20 圈",
        "visual2.caption": "之所以要循环，是因为只有足够多的脉冲从同一方向打过来，目标才算测得准。",
        "visual3.name": "动画：循环",
        "visual3.title": "看十个步骤跑一遍",
        "visual3.intro": "整个环压缩成一段动画。看每个阶段是哪个模块亮起来。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1-3. 发射——功率、开关、聚焦波束",
        "visual3.cc2": "4-5. 去与回——波出去，再回来",
        "visual3.cc3": "6-8. 接收——切换、放大、聆听",
        "visual3.cc4": "9-10. 判断——分出目标，画出像素",
        "visual3.caption": "每一次循环都一模一样。变的只有方位，而方位的变化来自伺服。",
        "visual4.name": "时间花在哪",
        "visual4.title": "一次往返拆开看",
        "visual4.intro": "100 公里的雷达有 66 毫秒的物理时间，和 200 纳秒的电子时间。",
        "visual4.row1.label": "波向外走 100 公里",
        "visual4.row1.value": "333 微秒",
        "visual4.row2.label": "波往回走 100 公里",
        "visual4.row2.value": "333 微秒",
        "visual4.row3.label": "单程往返合计",
        "visual4.row3.value": "666 微秒 → 100 公里耗时 667 微秒",
        "visual4.row4.label": "收发开关切换",
        "visual4.row4.value": "1–5 微秒",
        "visual4.row5.label": "接收 + 处理",
        "visual4.row5.value": "1–10 微秒",
        "visual4.row6.label": "伺服转向下一处",
        "visual4.row6.value": "占用剩下 1.7 毫秒",
        "visual4.caption": "这就是每一微秒的电子学都值钱的原因：700 微秒里有 666 微秒，电波不在你手里。",
        "visual5.name": "瓶颈在哪",
        "visual5.title": "预算花错在哪儿",
        "visual5.intro": "把某一部分改好，瓶颈只是挪到了别处。",
        "visual5.app1.tag": "发射",
        "visual5.app1.title": "功率不够",
        "visual5.app1.desc": "距离随功率的四次方根增长。发射功率翻四倍，只换来约 1.4 倍距离——这是非常贵的提升。",
        "visual5.app2.tag": "接收",
        "visual5.app2.title": "不够灵敏",
        "visual5.app2.desc": "接收机比应有水平差 3 dB，实际探测距离就直接少一块。这和功率不同，后面没法补回来。",
        "visual5.app3.tag": "处理",
        "visual5.app3.title": "处理太慢",
        "visual5.app3.desc": "如果处理跟不上扫描，显示器画的是东西刚才在哪，不是现在在哪。航迹预测能补上这个差。",
        "visual5.app4.tag": "伺服",
        "visual5.app4.title": "转得太慢",
        "visual5.app4.desc": "如果波束还没等处理机处理完上一个方向就转过去了，发射机再快也没有用。",
        "visual5.app5.tag": "收发开关",
        "visual5.app5.title": "切得太慢",
        "visual5.app5.desc": "恢复时间决定了近距离盲区。里面的一切都根本没被观测到，不管雷达其他地方多好。",
        "visual5.app6.tag": "团队",
        "visual5.app6.title": "真正的答案",
        "visual5.app6.desc": "设计受限于最紧的那一环，所以工程师做的是平衡，而不是把某一项推到极致。一台均衡的雷达，胜过一台单科特别出色的雷达。",
        "visual5.caption": "这条链没有通常意义上的「最弱环」——它有的是「限制环」，而要挪动它，得把周围一切重新设计。",
        "visual6.name": "雷达组网",
        "visual6.title": "多部雷达，一张图",
        "visual6.intro": "两部雷达互相补上对方看不见的地方。",
        "visual6.app1.tag": "覆盖",
        "visual6.app1.title": "补上缝隙",
        "visual6.app1.desc": "被地形挡住的目标，换个站点往往就看得见。多站合起来是连续覆盖，单站只是断断续续。",
        "visual6.app2.tag": "多普勒",
        "visual6.app2.title": "两种观测节奏",
        "visual6.app2.desc": "慢雷达看得远但测速差，快雷达正相反。两者组网就能同时拿到远距离和准确速度。",
        "visual6.app3.tag": "隐身",
        "visual6.app3.title": "不同角度",
        "visual6.app3.desc": "为正面隐身的外形，从侧面通常就看得见了。不同角度的站点互相补上盲区。",
        "visual6.app4.tag": "航迹",
        "visual6.app4.title": "共享航迹",
        "visual6.app4.desc": "每部雷达把探测结果送给融合中心，中心把它们关联成一条航迹。来自两个站点的确认，远比同一站点的两次确认可靠。",
        "visual6.app5.tag": "代价",
        "visual6.app5.title": "要付的价钱",
        "visual6.app5.desc": "好几处设施、好几组建筑，外加一套本身也需要保护通信网。组网是用资本和复杂度买覆盖。",
        "visual6.app6.tag": "规模",
        "visual6.app6.title": "两个极端",
        "visual6.app6.desc": "一串便宜的短程雷达守住一栋楼，和一张全国范围的长程雷达网。同样十个步骤，各三十遍。",
        "visual6.caption": "组网不改变任何单部雷达的物理规律。它改变的是操作员看到的东西——把很多张不完整的图合成一张。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "雷达靠各部件协同，才能完成一次完整探测。",
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
