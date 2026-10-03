/* =========================

   ARTICLE 32 — Why Does Weather Radar Need a Phased Array?

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
        "page.title": "Article 32: Why Does Weather Radar Need a Phased Array? — Radar Explorer",
        "page.description": "Article 32: Why is phased-array weather radar better than the old mechanical kind? Faster scans, faster updates, earlier warnings. A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "toc.title": "On this page",
        "toc.s1": "Why upgrade the dish",
        "toc.s2": "Minutes vs tens of seconds",
        "toc.s3": "Scan speed animation",
        "toc.s4": "Worked example",
        "toc.s5": "Adaptive scanning",
        "toc.s6": "Where PAR lives",
        "article.title": "Why Does Weather Radar Need a Phased Array?",
        "article.author": "By Editorial",
        "article.date": "Aug 22, 2024",
        "article.subtitle": "Old radars turn. New ones don't. The storm doesn't wait either way.",
        "article.p1": "Traditional weather radar can measure weather too. So why use a phased array?",
        "article.p2": "Traditional weather radar turns mechanically and takes minutes to complete one scan. Phased-array weather radar scans electronically and can finish in tens of seconds. Weather changes fast — especially tornadoes and severe storms — and a few minutes makes a big difference.",
        "article.p3": "A phased array updates data faster and finds dangerous weather earlier. It can also adjust its scan pattern flexibly and revisit key areas more often. Think of sweeping a floor: one big broom slowly, or many small brooms quickly.",
        "article.p4": "Phased-array weather radar is the future trend. Speed and flexibility are its biggest advantages.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Phased-array weather radar scans and updates faster, warning earlier.",
        "visual1.num": "01",
        "visual1.name": "WHY UPGRADE",
        "visual1.title": "The Old Dish Couldn't Keep Up",
        "visual1.intro": "A traditional weather radar is a parabolic dish that physically moves. A phased-array radar is a flat array that scans by phase alone.",
        "fig1.title": "Mechanical vs phased-array",
        "fig1.mech": "MECHANICAL (PESA)",
        "fig1.slow": "slow spin",
        "fig1.minutes": "~ 5 minutes / scan",
        "fig1.par": "PHASED ARRAY (PAR)",
        "fig1.beam": "electronic beam",
        "fig1.seconds": "~ 30 seconds / scan",
        "visual1.caption": "Left: the dish must physically rotate. Right: the flat panel never moves; the beam jumps electronically.",
        "visual2.num": "02",
        "visual2.name": "SPEED",
        "visual2.title": "Minutes vs Tens of Seconds",
        "visual2.intro": "A whole-sky scan is the baseline. What matters is how often the radar can refresh it.",
        "fig2.title": "Timeline comparison",
        "fig2.par1vol": "PAR: 1 full sky",
        "fig2.par1sub": "in 30 seconds",
        "fig2.par2vol": "+ zoom on storm",
        "fig2.mechvol": "PESA: 1 full sky",
        "fig2.mechsub": "in 5 minutes",
        "fig2.note": "PAR scans 10× faster and can revisit a storm every 30 s",
        "visual2.caption": "Same sky, ten times the data. PAR can devote the leftover seconds to a closer look at a developing storm.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: SCAN SPEED",
        "visual3.title": "Watching the Sky Get Painted",
        "visual3.intro": "The animation paints a full sky first with the old mechanical sweep, then with the new electronic one.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. PESA -- dish slowly sweeps, blanks fill in over minutes",
        "visual3.cc2": "2. PAR -- full sky painted in under a minute",
        "visual3.cc3": "3. STORM -- PAR zooms back to the danger area every 30 s",
        "visual3.cc4": "4. EARLY -- warning issued minutes before the old radar would notice",
        "visual3.caption": "PESA draws the sky slowly. PAR covers it fast and then dwells on the storm.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "When a Tornado Needs 5 Minutes",
        "visual4.intro": "A supercell that becomes a tornado in six minutes would barely register on a 5-minute PESA scan in time.",
        "visual4.row1.label": "PESA scan time",
        "visual4.row1.value": "300 s",
        "visual4.row2.label": "PAR scan time",
        "visual4.row2.value": "30 s",
        "visual4.row3.label": "Saved per scan",
        "visual4.row3.formula": "300 - 30 = 270 s",
        "visual4.row4.label": "Warning lead time",
        "visual4.row4.value": "~ 4.5 min earlier",
        "visual4.caption": "Worked example: 5 minutes vs 30 seconds buys roughly 4.5 extra minutes of warning.",
        "visual5.num": "05",
        "visual5.name": "ADAPTIVE SCAN",
        "visual5.title": "Aim Where the Storm Is",
        "visual5.intro": "Speed isn't the only gift — PAR lets the radar spend the saved time on the part of the sky that matters right now.",
        "visual5.app1.tag": "ADAPTIVE",
        "visual5.app1.title": "Dwell on Danger",
        "visual5.app1.desc": "When a cell goes above a threshold, the radar switches to a faster refresh just over that area.",
        "visual5.app2.tag": "DUAL-SCAN",
        "visual5.app2.title": "Two Strategies at Once",
        "visual5.app2.desc": "Half the beams keep doing the full low-elevation scan; half focus on a storm. Both pictures update each minute.",
        "visual5.app3.tag": "RAPID",
        "visual5.app3.title": "Fast Low-Tilt Scan",
        "visual5.app3.desc": "PAR can finish a 0.5°-elevation sweep across the whole horizon in well under a minute.",
        "visual5.app4.tag": "CUSTOM",
        "visual5.app4.title": "Sector Searched Angles",
        "visual5.app4.desc": "Forecasts can ask for denser sampling over a tornado-prone county and let the radar focus there for ten minutes.",
        "visual5.app5.tag": "LOW POWER",
        "visual5.app5.title": "Quiet Mode",
        "visual5.app5.desc": "PAR can throttle itself at night when nothing is happening and wake up the moment a cell crosses a threshold.",
        "visual5.app6.tag": "CONTROL",
        "visual5.app6.title": "Per-Storm Schedule",
        "visual5.app6.desc": "Operators can hand-craft the scan sequence: more elevation sweeps here, faster revisits there, fewer pulses far away.",
        "visual5.caption": "Flexibility: PAR turns the radar into a steerable spotlight, not a fixed beacon.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "Where PAR Weather Radars Live",
        "visual6.intro": "A handful of countries already run PAR weather networks; more are rolling out.",
        "visual6.app1.tag": "NWS",
        "visual6.app1.title": "US NEXRAD PAR Upgrade",
        "visual6.app1.desc": "The US National Weather Service is replacing its WSR-88D dishes with phased-array systems over the next decade, project name: “PAR — the Next-Gen Radar”.",
        "visual6.app2.tag": "JAPAN",
        "visual6.app2.title": "Japan MP-PAWR",
        "visual6.app2.desc": "Japan's Multi-Parameter Phased-Array Weather Radar at Saitama refreshes every 10–30 seconds and feeds Tokyo's flood warnings.",
        "visual6.app3.tag": "CHINA",
        "visual6.app3.title": "X-Band PAR Network",
        "visual6.app3.desc": "CMA runs growing X-band phased-array networks in south China for typhoon microphysics and urban flash-flood warnings.",
        "visual6.app4.tag": "EUROPE",
        "visual6.app4.title": "OPERA Networks",
        "visual6.app4.desc": "The OPERA programme is testing PAR upgrades across national weather services in Europe — each country at its own pace.",
        "visual6.app5.tag": "AVIATION",
        "visual6.app5.title": "Airport TDWR",
        "visual6.app5.desc": "Terminal Doppler Weather Radars at busy airports are already partly PAR — wind shear and microbursts must be updated every few seconds.",
        "visual6.app6.tag": "RESEARCH",
        "visual6.app6.title": "NSSL and JMA",
        "visual6.app6.desc": "Research radars at NSSL (US) and JMA (Japan) are the test beds that proved PAR weather radar works at scale.",
        "visual6.caption": "From research to national networks: PAR weather radar is becoming the global standard.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2026",
    },

    zh: {
        "page.title": "文章 32：为什么天气雷达要相控阵 — 雷达探索者",
        "page.description": "文章 32：为什么相控阵天气雷达比老式机械雷达更好？扫德快、更新快、更早预警。面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "toc.title": "本页目录",
        "toc.s1": "为什么要换",
        "toc.s2": "几分钟 vs 几十秒",
        "toc.s3": "扫描速度动画",
        "toc.s4": "计算示例",
        "toc.s5": "自适应扫描",
        "toc.s6": "相控阵都在哪里",
        "article.title": "为什么天气雷达要相控阵",
        "article.author": "编辑部",
        "article.date": "2024年8月22日",
        "article.subtitle": "老雷达转，新雷达不转。风暴可不会等。",
        "article.p1": "传统天气雷达也能测天气，为什么还要用相控阵？",
        "article.p2": "传统天气雷达靠机械转动，扫一圈要几分钟。相控阵天气雷达靠电子扫描，几十秒就能扫完。天气变化快，尤其是龙卷、强对流，几分钟差别很大。",
        "article.p3": "相控阵能更快更新数据，更早发现危险天气。还能灵活调整扫描方式，重点区域多看几次。像用扫席扫地，一把大扫席慢慢扫，不如多把小扫席快快扫。",
        "article.p4": "相控阵天气雷达是未来趋势。快速、灵活是它最大的优势。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "相控阵天气雷达扫德快、更新快，能更早预警危险天气。",
        "visual1.num": "01",
        "visual1.name": "为什么要换",
        "visual1.title": "老天线跟不上了",
        "visual1.intro": "传统天气雷达是一个弯面天线，它必须物理转动。相控阵是一个平面阵列，只靠相位扫描。",
        "fig1.title": "机械 vs 相控阵",
        "fig1.mech": "机械 (PESA)",
        "fig1.slow": "慢慢转",
        "fig1.minutes": "~ 5 分钟/扫",
        "fig1.par": "相控阵 (PAR)",
        "fig1.beam": "电子扫的波束",
        "fig1.seconds": "~ 30 秒/扫",
        "visual1.caption": "左：天线必须物理转。右：面板从不走，波束电子跳。",
        "visual2.num": "02",
        "visual2.name": "速度",
        "visual2.title": "几分钟 vs 几十秒",
        "visual2.intro": "全天扫一圈是基准，关键是雷达多久能重复一次。",
        "fig2.title": "时间轴对比",
        "fig2.par1vol": "PAR: 1 个全天",
        "fig2.par1sub": "在 30 秒内",
        "fig2.par2vol": "+ 针对风暴下详",
        "fig2.mechvol": "PESA: 1 个全天",
        "fig2.mechsub": "在 5 分钟内",
        "fig2.note": "PAR 扫描快 10×，可以每 30 秒重访一次风暴",
        "visual2.caption": "同一片天，数据量十倍。PAR 能把多余的秒数用到面对发展中风暴的那个区域。",
        "visual3.num": "03",
        "visual3.name": "动画：扫描速度",
        "visual3.title": "看视天空被填色",
        "visual3.intro": "动画先用机械扫描把全天填默底重，再用电子扫描重做一遍。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. PESA — 天线慢慢过，走走停停完成一圈",
        "visual3.cc2": "2. PAR — 一分钟内填默完整个天",
        "visual3.cc3": "3. 风暴 — PAR 每 30 秒重访危险区一次",
        "visual3.cc4": "4. 预警 — 比老雷达提前几分钟发出提示",
        "visual3.caption": "PESA 慢慢画；PAR 快速填済，然后对风暴“贴身”重访。",
        "visual4.num": "04",
        "visual4.name": "计算示例",
        "visual4.title": "龙卷急剧变化时",
        "visual4.intro": "一个式在六分钟内完成变身的龙卷，5 分钟一圈的机械雷达刚刚什么都还不能看准。",
        "visual4.row1.label": "PESA 扫描时间",
        "visual4.row1.value": "300 秒",
        "visual4.row2.label": "PAR 扫描时间",
        "visual4.row2.value": "30 秒",
        "visual4.row3.label": "每次省出",
        "visual4.row3.formula": "300 - 30 = 270 秒",
        "visual4.row4.label": "预警提前量",
        "visual4.row4.value": "~ 4.5 分钟",
        "visual4.caption": "一个计算：5 分钟 vs 30 秒换来约 4.5 分钟额外的预警时间。",
        "visual5.num": "05",
        "visual5.name": "自适应",
        "visual5.title": "雷达可以对准风暴",
        "visual5.intro": "快只是一半。PAR 还能把多出来的秒数留给当前最重要的那个区域。",
        "visual5.app1.tag": "自适应",
        "visual5.app1.title": "对危险区停纸",
        "visual5.app1.desc": "当某个单体空越警戒线，雷达会在那块上面加密重访。",
        "visual5.app2.tag": "双重扫",
        "visual5.app2.title": "同时走两种策略",
        "visual5.app2.desc": "一半波束继续完成全地面低层扫描，另一半专注风暴。两份图都能每分钟更新。",
        "visual5.app3.tag": "快速",
        "visual5.app3.title": "快速低层扫描",
        "visual5.app3.desc": "PAR 可以在不到 1 分钟内完成 0.5° 低层的全周扫描。",
        "visual5.app4.tag": "定制",
        "visual5.app4.title": "区域密采",
        "visual5.app4.desc": "报警可以要求对某个龙卷多发县增加密采，让雷达在那里多停 10 分钟。",
        "visual5.app5.tag": "低功耗",
        "visual5.app5.title": "安静模式",
        "visual5.app5.desc": "PAR 夜里可以降低重访频率，一旦某个单体穿越阈值立刻起醛量。",
        "visual5.app6.tag": "控制",
        "visual5.app6.title": "按风暴调度",
        "visual5.app6.desc": "人工可以为你手定制扫描顺序：这里多几个低层、那里多跳几次、远处减脆。",
        "visual5.caption": "灵活性：PAR 把雷达变成“可控的聚光灯”，不是“固定的信标灯塔”。",
        "visual6.num": "06",
        "visual6.name": "应用",
        "visual6.title": "相控阵都在哪里",
        "visual6.intro": "几个国家已经运营雷达相控阵网络；更多在建中。",
        "visual6.app1.tag": "NWS",
        "visual6.app1.title": "美国 NEXRAD 升级",
        "visual6.app1.desc": "美国国家天气服务局在用「下一代雷达 PAR」项目逐步替换 WSR-88D。",
        "visual6.app2.tag": "日本",
        "visual6.app2.title": "日本 MP-PAWR",
        "visual6.app2.desc": "日本石家府的多参量相控阵天气雷达 10–30 秒就能完成一次全天扫描，供东京反洪作预警。",
        "visual6.app3.tag": "中国",
        "visual6.app3.title": "X 带相控阵网",
        "visual6.app3.desc": "中国气象局在南方布设一个 X 带相控阵网络，用于台风微物理及城市内涚水预警。",
        "visual6.app4.tag": "欧洲",
        "visual6.app4.title": "OPERA 网络",
        "visual6.app4.desc": "欧洲 OPERA 项目在试点成员国雷达服务的 PAR 升级，各国进度不一。",
        "visual6.app5.tag": "航空",
        "visual6.app5.title": "机场 TDWR",
        "visual6.app5.desc": "主要机场的终点多普勒雷达已经部分 PAR 化：风切变与微下击需要每几秒更新。",
        "visual6.app6.tag": "科研",
        "visual6.app6.title": "NSSL 与气象厅",
        "visual6.app6.desc": "美国 NSSL 和日本气象厅的科研雷达是验证 PAR 雷达可行的试验田。",
        "visual6.caption": "从科研到国家网络：PAR 正在成为全球标准。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2026",
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
