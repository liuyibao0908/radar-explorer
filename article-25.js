/* =========================

   ARTICLE 13 — How Does Radar Know the Direction?

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

        "page.title": "Article 25: Is Radar Afraid of Stealth? — Radar Explorer",

        "page.description": "Article 25: How does stealth make radar blind, and how do radars fight back? A bilingual student-friendly explainer.",

        "nav.home": "Home",

        "nav.learn": "Learn",

        "nav.articles": "Articles",

        "nav.explore": "Explore",

        "nav.research": "Research",

        "nav.about": "About",

        "article.author": "By Editorial",

        "article.date": "Mar 19, 2026",

        "toc.title": "On this page",

        "toc.s1": "Three stealth methods",

        "toc.s2": "Special shapes",

        "toc.s3": "Stealth vs radar animation",

        "toc.s4": "Worked example",

        "toc.s5": "Counter-measures",

        "toc.s6": "Applications",

        "article.title": "Is Radar Afraid of Stealth?",

        "article.subtitle": "Can stealth aircraft make radar completely blind? Not really — stealth only makes the echo very weak.",

        "article.p1": "Can stealth aircraft make radar blind? Not exactly. Stealth only makes radar harder to detect.",

        "article.p2": "Stealth is not invisibility — it makes the echo very weak. Method one: special shapes that bounce waves in other directions instead of back. Method two: radar-absorbing materials that soak up some waves. Method three: reducing heat and electronic emissions to avoid infrared and electronic detection.",

        "article.p3": "Radar counters: more power, multiple radars networked, and low-frequency radar. Low-frequency waves are long, so stealth shapes work less well. When several radars look from different directions, a stealth aircraft can't hide from all of them.",

        "article.p4": "So stealth and anti-stealth is an ongoing contest. Each new stealth shape pushes radar to new frequencies and new geometries. The radar R&amp;D community never sleeps.",

        "article.summaryLabel": "ONE-LINE SUMMARY",

        "article.summary": "Stealth reduces echoes — it doesn't make radar completely blind.",

        "article.back": "← Back to Articles",

        "article.meta": "Student Research · 2026",

        "fig1.title": "Stealth triangle",

        "fig1.center": "stealth",

        "fig1.m1.num": "01",

        "fig1.m1.name": "shape",

        "fig1.m2.num": "02",

        "fig1.m2.name": "absorber",

        "fig1.m3.num": "03",

        "fig1.m3.name": "silent",

        "fig1.bottom": "shape + absorber + emission control ⇒ tiny echo",

        "visual1.num": "01",

        "visual1.name": "THREE STEALTH METHODS",

        "visual1.title": "Three Ways to Hide from Radar",

        "visual1.intro": "Real stealth uses three tricks at the same time: shape, materials, and emission control. Each shrinks the radar echo from a different direction.",

        "visual1.caption": "Stealth is a system, not a single technology. Each trick tackles a different threat.",

        "fig2.title": "Stealth shape reflection",

        "fig2.radar": "radar",

        "fig2.stealth": "stealth jet",

        "fig2.away": "reflected away",

        "fig2.note": "no return → radar sees nothing",

        "fig2.bottom": "faceted shape ⇒ energy goes up, not back",

        "visual2.num": "02",

        "visual2.name": "SPECIAL SHAPES",

        "visual2.title": "Bounce the Wave to Another Direction",

        "visual2.intro": "Most stealth aircraft are faceted — flat surfaces at angles that send incoming radar waves up into the sky or sideways, never straight back. The radar dish only hears when a wave bounces back, so the return is tiny.",

        "visual2.caption": "This is why stealth planes look so angular. The angles are designed by computer to bounce the radar wave away from the radar.",

        "visual3.num": "03",

        "visual3.name": "ANIMATION: STEALTH VS RADAR",

        "visual3.title": "Watch the Wave Bounce Off a Stealth Shape",

        "visual3.intro": "The animation shows a wave leaving the radar, hitting the stealth shape, and bouncing sideways. Almost no energy goes back to the radar.",

        "visual3.fallback": "Your browser does not support embedded video. The animation shows a wave hitting a faceted stealth shape and bouncing away.",

        "visual3.cc1": "1. SEND — radar dish fires a beam at the target",

        "visual3.cc2": "2. SHAPE — faceted surface bounces it sideways",

        "visual3.cc3": "3. NOTHING — radar sees almost zero return",

        "visual3.cc4": "4. COUNTER — long wavelength pierces through",

        "visual3.caption": "For very long wavelengths, the small stealth shape is just a tiny dot in front of the wavelength — the geometry trick stops working.",

        "visual4.num": "04",

        "visual4.name": "WORKED EXAMPLE",

        "visual4.title": "Radar Cross Section Shrinks 1000 Times",

        "visual4.intro": "A typical fighter jet reflects about 1 square meter of radar energy. A stealth fighter reflects 0.001 square meters — a thousand times less. How does that change detection range?",

        "visual4.row1.label": "Normal jet RCS",

        "visual4.row1.value": "1 m²",

        "visual4.row2.label": "Stealth jet RCS",

        "visual4.row2.value": "0.001 m²",

        "visual4.row3.label": "Echo reduction",

        "visual4.row3.formula": "−30 dB",

        "visual4.row4.label": "Detection range",

        "visual4.row4.value": "× 0.18",

        "visual4.caption": "Range goes as the fourth root of RCS. Cutting RCS by 1000 shrinks detection range by ~5.6 times — the stealth plane must fly 5× closer to be seen.",

        "visual5.app1.tag": "POWER",

        "visual5.app1.title": "More Power",

        "visual5.app1.desc": "Just push more watts. A radar with ten times more power sees four times further — enough to overcome stealth shaping.",

        "visual5.app2.tag": "NETWORK",

        "visual5.app2.title": "Bistatic / Network",

        "visual5.app2.desc": "Multiple radars look from different angles. One angle might miss a stealth plane, but five angles together will catch some reflection.",

        "visual5.app3.tag": "VHF/UHF",

        "visual5.app3.title": "Long-Wave Radar",

        "visual5.app3.desc": "Very low frequency (VHF/UHF) radars use wavelengths of metres to tens of metres. At those wavelengths, stealth shaping becomes ineffective.",

        "visual5.app4.tag": "PASSIVE",

        "visual5.app4.title": "Listen, Don't Send",

        "visual5.app4.desc": "Passive radar listens for other transmitters (TV, radio, even other radars) and uses their signals. The stealth plane can't tell it's being tracked.",

        "visual5.app5.tag": "QUIET",

        "visual5.app5.title": "Silent Radar",

        "visual5.app5.desc": "Silent radar uses FM radio or cell tower signals as its transmitter. Low power, hard to detect, immune to radar warning receivers.",

        "visual5.app6.tag": "AI",

        "visual5.app6.title": "Smart Tracking",

        "visual5.app6.desc": "Modern AI trackers integrate weak, intermittent returns over many seconds — a stealth plane that blinks in and out still leaves a track.",

        "visual5.num": "05",

        "visual5.name": "COUNTER-MEASURES",

        "visual5.title": "How Radar Fights Back",

        "visual5.intro": "Stealth didn't end radar — it started a new arms race. Every stealth trick has a counter-measure.",

        "visual5.caption": "The VHF radar and the bistatic network are the two most powerful counter-stealth ideas today.",

        "visual6.app1.tag": "FIGHTERS",

        "visual6.app1.title": "F-22, F-35, J-20",

        "visual6.app1.desc": "Modern stealth fighters combine shape, absorber coating, and S-shaped inlets to hide the engine fan blades — the strongest radar reflector on any jet.",

        "visual6.app2.tag": "BOMBERS",

        "visual6.app2.title": "B-2, B-21",

        "visual6.app2.desc": "Flying-wing bombers push stealth to the limit: no vertical surfaces, smooth curved edges, and special paint that absorbs radar energy.",

        "visual6.app3.tag": "SHIPS",

        "visual6.app3.title": "Stealth Frigates",

        "visual6.app3.desc": "Modern frigates slope their hulls and hide their radars and missiles behind flat panels — looking from above, the radar return is just a small fishing boat.",

        "visual6.app4.tag": "DRONES",

        "visual6.app4.title": "Stealth UAV",

        "visual6.app4.desc": "Stealth drones carry the same ideas to small sizes. The challenge is fitting the inlets, antennas and electronics into a shape without flat surfaces.",

        "visual6.app5.tag": "SHIP RADAR",

        "visual6.app5.title": "Sea-Based Radar",

        "visual6.app5.desc": "Floating radar buoys and ship-mounted radars use VHF/UHF and powerful processors to detect stealth aircraft that ground radars miss.",

        "visual6.app6.tag": "EW",

        "visual6.app6.title": "Electronic Warfare",

        "visual6.app6.desc": "EW systems jam, deceive, or feed false echoes to enemy radars — making the enemy radar see ten planes instead of one.",

        "visual6.num": "06",

        "visual6.name": "APPLICATIONS",

        "visual6.title": "Stealth and Anti-Stealth in Real Life",

        "visual6.intro": "Stealth is no longer experimental. Real fighters, bombers, ships and drones use it every day — and so do real counter-radar systems.",

        "visual6.caption": "The F-22, F-35 and B-21 represent the current state of stealth; passive radar and VHF arrays are the cutting edge of counter-stealth."

    },

    zh: {

        "page.title": "第25篇：雷达怕不怕隐身？— 雷达探索者",

        "page.description": "第25篇：隐身怎么让雷达失效，雷达怎么反击。面向学生的中英双语科普。",

        "nav.home": "首页",

        "nav.learn": "学习",

        "nav.articles": "文章",

        "nav.explore": "探索",

        "nav.research": "研究",

        "nav.about": "关于",

        "article.author": "作者：小编",

        "article.date": "2026年3月19日",

        "toc.title": "本页目录",

        "toc.s1": "三种隐身方法",

        "toc.s2": "特殊外形",

        "toc.s3": "隐身 vs 雷达动画",

        "toc.s4": "详解例题",

        "toc.s5": "反隐身手段",

        "toc.s6": "应用领域",

        "article.title": "雷达怕不怕隐身？",

        "article.subtitle": "隐身飞机是不是让雷达完全看不见？其实不是——隐身只是让回波变得非常弱。",

        "article.p1": "隐身飞机是不是雷达完全看不见？其实不是，隐身只是让雷达更难发现。",

        "article.p2": "隐身不是消失，而是让回波变得非常弱。方法一：特殊外形，把波反射到别的方向，不原路返回。方法二：吸波材料，吸收一部分电磁波，减少反射。方法三：减少自身发热和电磁辐射，降低被红外和电子侦察发现的概率。",

        "article.p3": "雷达应对方法：加大功率、多站组网、使用低频雷达。低频雷达波长长，隐身外形效果会变差。多部雷达从不同方向看，隐身飞机很难对所有方向都隐身。",

        "article.p4": "所以隐身和反隐身，是一场持续的较量。每一种新隐身外形都逼迫雷达使用新频率、新几何。雷达研发社区永不停息。",

        "article.summaryLabel": "一句话总结",

        "article.summary": "隐身是减少回波，不是让雷达完全看不见。",

        "article.back": "← 返回文章列表",

        "article.meta": "学生研究 · 2026",

        "fig1.title": "隐身三角",

        "fig1.center": "隐身",

        "fig1.m1.num": "01",

        "fig1.m1.name": "外形",

        "fig1.m2.num": "02",

        "fig1.m2.name": "吸波",

        "fig1.m3.num": "03",

        "fig1.m3.name": "静默",

        "fig1.bottom": "外形 + 吸波 + 静默 ⇒ 回波极弱",

        "visual1.num": "01",

        "visual1.name": "三种隐身方法",

        "visual1.title": "三种躲避雷达的方法",

        "visual1.intro": "真正的隐身同时使用三个手段：外形、吸波材料、电磁静默。每一种从不同方向削弱雷达回波。",

        "visual1.caption": "隐身是一个系统，不是单一技术。每个手段针对不同的威胁。",

        "fig2.title": "隐身外形反射",

        "fig2.radar": "雷达",

        "fig2.stealth": "隐身战机",

        "fig2.away": "反射到别处",

        "fig2.note": "没有回波 ⇒ 雷达看不见",

        "fig2.bottom": "多面外形 ⇒ 能量向上走，不返回",

        "visual2.num": "02",

        "visual2.name": "特殊外形",

        "visual2.title": "把波反射到别的方向",

        "visual2.intro": "大多数隐身飞机是多面的——平板以一定角度安装，把入射雷达波向上反射到天空或侧向。雷达只听回波，所以反射很弱。",

        "visual2.caption": "这就是隐身飞机看起来多棱角的原因。棱角是计算机算出来的，专门把雷达波反射到远离雷达的方向。",

        "visual3.num": "03",

        "visual3.name": "动画：隐身 vs 雷达",

        "visual3.title": "看波从隐身外形反射走",

        "visual3.intro": "动画展示波从雷达出发，击中隐身外形后向侧面反弹。几乎没有能量返回雷达。",

        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示波击中多面隐身外形后反射走。",

        "visual3.cc1": "1. 发射 — 雷达天线向目标发射波",

        "visual3.cc2": "2. 外形 — 多面外形把波反射向侧面",

        "visual3.cc3": "3. 无回波 — 雷达几乎收不到回波",

        "visual3.cc4": "4. 反制 — 长波长波能穿透",

        "visual3.caption": "对很长波长，小小的隐身外形只是波长前的一个小点——外形技巧失效。",

        "visual4.num": "04",

        "visual4.name": "详解例题",

        "visual4.title": "雷达反射面积缩小 1000 倍",

        "visual4.intro": "典型战斗机反射约 1 平方米雷达能量。隐身战斗机反射 0.001 平方米——少 1000 倍。这对探测距离有何影响？",

        "visual4.row1.label": "普通战机 RCS",

        "visual4.row1.value": "1 m²",

        "visual4.row2.label": "隐身战机 RCS",

        "visual4.row2.value": "0.001 m²",

        "visual4.row3.label": "回波减弱",

        "visual4.row3.formula": "−30 dB",

        "visual4.row4.label": "探测距离",

        "visual4.row4.value": "× 0.18",

        "visual4.caption": "距离随 RCS 的 4 次方根变化。RCS 缩 1000 倍，探测距离缩约 5.6 倍——隐身飞机要飞近 5 倍才能被发现。",

        "visual5.app1.tag": "功率",

        "visual5.app1.title": "加大功率",

        "visual5.app1.desc": "直接堆功率。功率大 10 倍，探测距离远 4 倍——足以克服隐身外形。",

        "visual5.app2.tag": "网络",

        "visual5.app2.title": "多站组网",

        "visual5.app2.desc": "多部雷达从不同角度看。一个角度可能漏掉隐身飞机，五个角度合起来一定能抓到一些反射。",

        "visual5.app3.tag": "VHF/UHF",

        "visual5.app3.title": "长波雷达",

        "visual5.app3.desc": "甚低频（VHF/UHF）雷达用米到几十米波长。这种波长下，隐身外形不再有效。",

        "visual5.app4.tag": "被动",

        "visual5.app4.title": "只听不发",

        "visual5.app4.desc": "被动雷达利用其他发射源（电视、广播、甚至其他雷达）。隐身飞机不知道自己被跟踪。",

        "visual5.app5.tag": "静默",

        "visual5.app5.title": "静默雷达",

        "visual5.app5.desc": "静默雷达用调频广播或手机基站信号当发射源。低功率、难探测、雷达告警接收器收不到。",

        "visual5.app6.tag": "AI",

        "visual5.app6.title": "智能跟踪",

        "visual5.app6.desc": "现代 AI 跟踪器把微弱的、间歇的回波在几秒内融合——时隐时现的隐身飞机仍留下轨迹。",

        "visual5.num": "05",

        "visual5.name": "反隐身手段",

        "visual5.title": "雷达怎么反击",

        "visual5.intro": "隐身没有终结雷达——它开启了一场新的军备竞赛。每种隐身技巧都有反制手段。",

        "visual5.caption": "VHF 雷达和多站网络是当今最强大的反隐身思路。",

        "visual6.app1.tag": "战斗机",

        "visual6.app1.title": "F-22、F-35、歼-20",

        "visual6.app1.desc": "现代隐身战斗机综合外形、吸波涂层和 S 形进气道，把发动机风扇叶片藏起来——这是飞机上最强的雷达反射体。",

        "visual6.app2.tag": "轰炸机",

        "visual6.app2.title": "B-2、B-21",

        "visual6.app2.desc": "飞翼轰炸机把隐身推到极限：没有垂直面，平滑的曲线边，加上吸收雷达能量的特种涂料。",

        "visual6.app3.tag": "舰艇",

        "visual6.app3.title": "隐身护卫舰",

        "visual6.app3.desc": "现代护卫舰把船体倾斜，雷达和导弹藏在平板后面——从上看，雷达回波只是一艘小渔船。",

        "visual6.app4.tag": "无人机",

        "visual6.app4.title": "隐身无人机",

        "visual6.app4.desc": "隐身无人机把同样思路带向小型化。难点是把进气道、天线、电子设备塞进没有平面的外形里。",

        "visual6.app5.tag": "舰载雷达",

        "visual6.app5.title": "海上雷达",

        "visual6.app5.desc": "浮标雷达和舰载雷达用 VHF/UHF 加强大处理器，探测地面雷达漏掉的隐身飞机。",

        "visual6.app6.tag": "电子战",

        "visual6.app6.title": "电子战",

        "visual6.app6.desc": "电子战系统干扰、欺骗、或喂假回波给敌方雷达——让敌方雷达看到十架飞机而不是一架。",

        "visual6.num": "06",

        "visual6.name": "应用领域",

        "visual6.title": "真实世界的隐身与反隐身",

        "visual6.intro": "隐身不再是实验性的。真实战斗机、轰炸机、舰艇、无人机每天都在用——真实反雷达系统也是。",

        "visual6.caption": "F-22、F-35、B-21 代表隐身当下；被动雷达和 VHF 阵列代表反隐身前沿。"

    }

};

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
