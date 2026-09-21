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
        "page.title": "Article 15: Bio-Radar — Radar Explorer",
        "page.description": "Article 15: How does bio-radar monitor breathing and heartbeat without touching the body? A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "article.author": "By Editorial",
        "article.date": "Oct 12, 2024",
        "toc.title": "On this page",
        "toc.s1": "Tiny body movements",
        "toc.s2": "Contactless vs contact",
        "toc.s3": "Waveform animation",
        "toc.s4": "Worked example",
        "toc.s5": "Challenges",
        "toc.s6": "Applications",
        "article.title": "Bio-Radar",
        "article.subtitle": "Monitoring breathing and heartbeat without ever touching the body — how does that work?",
        "article.p1": "Monitoring breathing and heartbeat without touching the body — what technology is this? Bio-radar.",
        "article.p2": "Bio-radar uses radio waves to detect tiny body movements. Breathing and heartbeat cause small chest movements. The radar receives echoes and extracts these signals. It is used in medical monitoring, elderly care, and rescue.",
        "article.p3": "It is like a contactless stethoscope. No contact, no disturbance — good for long-term monitoring. But the signals are weak and hard to process. It is an emerging application of radar.",
        "article.p4": "Bio-radar is a growing application of millimetre-wave radar. The same physics that lets a fighter radar find an aircraft, here helps a bedside monitor listen to a sleeping patient.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Bio-radar monitors breathing and heartbeat without contact, used in healthcare and rescue.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2024",
        "fig1.title": "Chest-wall micro-movements",
        "fig1.radar": "BIO-RADAR",
        "fig1.chest": "CHEST",
        "fig1.delta": "~5 mm",
        "fig1.line1": "breathing + heartbeat",
        "fig1.line2": "echo phase shift → vital signs",
        "visual1.num": "01",
        "visual1.name": "TINY BODY MOVEMENTS",
        "visual1.title": "Breathing and Heartbeat Are Tiny But Real",
        "visual1.intro": "When you breathe, your chest wall moves about 5 mm. When your heart beats, it moves a fraction of a millimetre. Bio-radar can see both — from across the room.",
        "visual1.caption": "A few millimetres of chest movement is enough for a sensitive radar to detect. The echo arrives back with its phase shifted by a tiny amount.",
        "visual2.left.tag": "CONTACT",
        "visual2.left.touch": "touches the body",
        "visual2.left.label": "stethoscope",
        "visual2.right.tag": "CONTACTLESS",
        "visual2.right.radar": "BIO-RADAR",
        "visual2.right.noTouch": "no contact",
        "visual2.right.label": "bio-radar module",
        "visual2.num": "02",
        "visual2.name": "CONTACTLESS VS CONTACT",
        "visual2.title": "Like a Contactless Stethoscope",
        "visual2.intro": "A traditional stethoscope has to touch the chest. Bio-radar senses the same signals from a distance — no skin contact, no wires, no disturbance.",
        "visual2.caption": "Both devices hear the heart and lungs. Bio-radar does it through the air, which is the whole point.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: PHASE WAVEFORM",
        "visual3.title": "Watch the Waveform Track Each Breath and Heartbeat",
        "visual3.intro": "The animation shows the echo phase moving up and down as the chest rises and falls. Tiny ripples on top of the big waves are the heartbeat.",
        "visual3.fallback": "Your browser does not support embedded video. The animation shows the bio-radar waveform tracking breathing and heartbeat as the chest rises and falls.",
        "visual3.cc1": "1. SEND — radar emits a continuous microwave toward the body",
        "visual3.cc2": "2. SHIFT — chest wall moves a few millimeters with each breath",
        "visual3.cc3": "3. PHASE — the echo phase shifts by tiny amounts",
        "visual3.cc4": "4. EXTRACT — signal processing pulls out breathing and heartbeat",
        "visual3.caption": "The radar trace is a clean waveform — slow waves are breathing, fast ripples are the heartbeat.",
        "visual4.md": "04",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "A 5 mm Breath, a Phase Shift of 288°",
        "visual4.intro": "How much does the radar echo phase change for a 5 mm breath at 24 GHz?",
        "visual4.row1.label": "Chest displacement Δd",
        "visual4.row1.value": "5 mm",
        "visual4.row2.label": "Wavelength λ (24 GHz)",
        "visual4.row2.value": "12.5 mm",
        "visual4.row3.label": "Phase shift",
        "visual4.row3.formula": "4π Δd / λ",
        "visual4.row4.label": "Phase shift",
        "visual4.row4.value": "≈ 288°",
        "visual4.caption": "A 5 mm breath causes a 288° phase change at 24 GHz — large enough for radar to detect easily. For heartbeat (~0.5 mm), phase shift is ~28° — small but measurable.",
        "fig5.title": "Challenges of bio-radar",
        "fig5.card1.tag": "WEAK SIGNAL",
        "fig5.card1.unit": "~ 5 mm chest",
        "fig5.card1.sub": "≈ 0.00000001 s delay",
        "fig5.card1.num": "μm",
        "fig5.card1.scale": "scale",
        "fig5.card2.tag": "NOISE & CLUTTER",
        "fig5.card2.unit": "random motion",
        "fig5.card2.sub": "furniture, fans, walking",
        "fig5.card2.num": "SNR",
        "fig5.card2.scale": "low",
        "fig5.card3.tag": "MULTI-PATH",
        "fig5.card3.unit": "wall reflections",
        "fig5.card3.sub": "echoes from room clutter",
        "fig5.card3.num": "≈ mm",
        "fig5.card3.scale": "careful geometry",
        "visual5.num": "05",
        "visual5.name": "CHALLENGES",
        "visual5.title": "The Signals Are Weak and Hard to Read",
        "visual5.intro": "The displacement to detect is sub-millimetre. The radar must separate breathing and heartbeat from random motion. Reflections off walls add noise.",
        "visual5.caption": "Bio-radar pushes signal processing to its limits. Modern algorithms (FMCW, phase tracking, ML) make it work in everyday settings.",
        "visual6.app1.tag": "HEALTHCARE",
        "visual6.app1.title": "Hospital Patient Monitoring",
        "visual6.app1.desc": "Continuous breathing and heartbeat monitoring without attaching electrodes. Fewer wires, fewer skin irritations, fewer false alarms from lead disconnects.",
        "visual6.app2.tag": "ELDERLY CARE",
        "visual6.app2.title": "Sleep & Fall Detection",
        "visual6.app2.desc": "A radar above the bed detects apnea, restlessness and falls. Helps people live independently at home longer.",
        "visual6.app3.tag": "SEARCH & RESCUE",
        "visual6.app3.title": "Trapped Survivors",
        "visual6.app3.desc": "After an earthquake or avalanche, bio-radar can detect breathing under rubble, through walls and debris.",
        "visual6.app4.tag": "INFANT CARE",
        "visual6.app4.title": "SIDS Prevention",
        "visual6.app4.desc": "Baby monitors with bio-radar sense irregular breathing or stoppages in real time, alerting parents.",
        "visual6.app5.tag": "DRIVER MONITORING",
        "visual6.app5.title": "Fatigue Detection",
        "visual6.app5.desc": "Steering-wheel bio-radar notices slow, irregular breathing — a sign of driver drowsiness.",
        "visual6.app6.tag": "PSYCHOLOGY",
        "visual6.app6.title": "Stress & Emotion",
        "visual6.app6.desc": "Breathing and heart-rate variability reveal stress. Used in UX research and mental-health monitoring.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "Where Bio-Radar Is Used Today",
        "visual6.intro": "Bio-radar shows up wherever you want to monitor a person without contact: hospitals, homes, cars, rescue scenes.",
        "visual6.caption": "A single bio-radar module can serve healthcare, elderly care, infant monitoring, driver safety, rescue and psychology at the same time."
    },

    zh: {
        "page.title": "第15篇：生物雷达（Bio-Radar）— 雷达探索者",
        "page.description": "第15篇：生物雷达如何在不接触体表的情况下监测呼吸和心跳？面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "article.author": "作者：小编",
        "article.date": "2024年10月12日",
        "toc.title": "本页目录",
        "toc.s1": "微小身体运动",
        "toc.s2": "非接触 vs 接触",
        "toc.s3": "波形动画",
        "toc.s4": "详解例题",
        "toc.s5": "技术难点",
        "toc.s6": "应用领域",
        "article.title": "生物雷达",
        "article.subtitle": "不接触体表就能监测呼吸和心跳，怎么办到？",
        "article.p1": "不用接触，就能监测呼吸和心跳，这是什么技术？生物雷达。",
        "article.p2": "生物雷达用电磁波探测人体微弱运动。呼吸、心跳会引起胸壁微小起伏。雷达接收回波，提取这些信号。用于医疗监护、养老、救援。",
        "article.p3": "像非接触式的「听诊器」。不接触、不打扰，适合长期监测。但信号弱，处理难度大。是雷达技术的新兴应用方向。",
        "article.p4": "生物雷达是毫米波雷达的一个新兴应用。战机雷达能在几十公里外看到飞机，完全相同的物理使完兴前的生物雷达能“听”到蹲在床上的患者。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "生物雷达非接触监测呼吸心跳，用于医疗和救援。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2024",
        "fig1.title": "胸壁微小起伏",
        "fig1.radar": "生物雷达",
        "fig1.chest": "胸部",
        "fig1.delta": "约 5 毫米",
        "fig1.line1": "呼吸 + 心跳",
        "fig1.line2": "回波相位变化 → 生命体征",
        "visual1.num": "01",
        "visual1.name": "微小身体运动",
        "visual1.title": "呼吸和心跳都是微但实实在在",
        "visual1.intro": "你呼吸的时候，胸壁会起伏约 5 毫米。心跳的时候，胸壁会运动到分之几毫米。生物雷达能“看见”这两种运动——跨越整个房间。",
        "visual1.caption": "几毫米的胸壁运动就够敏感的雷达感知。回波回来时相位会发生一点点变化。",
        "visual2.left.tag": "接触",
        "visual2.left.touch": "接触身体",
        "visual2.left.label": "听诊器",
        "visual2.right.tag": "非接触",
        "visual2.right.radar": "生物雷达",
        "visual2.right.noTouch": "不接触",
        "visual2.right.label": "生物雷达模块",
        "visual2.num": "02",
        "visual2.name": "非接触 vs 接触",
        "visual2.title": "像一个不接触的听诊器",
        "visual2.intro": "传统听诊器必须贴在胸部。生物雷达远距离似乎能听到同样的信号——不碰皮肤、不用电线、不会打扰你。",
        "visual2.caption": "两个设备都在“听”心肺。生物雷达的不同是——空气就能传信号，这正是它的价值。",
        "visual3.num": "03",
        "visual3.name": "动画：相位波形",
        "visual3.title": "看波形跟随每一次呼吸和心跳",
        "visual3.intro": "动画展示回波相位随胸部起伏上下波动。在大波上面的小涛流就是心跳。",
        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示生物雷达的波形跟随胸部起伏，提取呼吸和心跳信号。",
        "visual3.cc1": "1. 发送 — 雷达向人体持续发射微波",
        "visual3.cc2": "2. 偏移 — 胸壁随呼吸上下几毫米",
        "visual3.cc3": "3. 相位 — 回波相位产生微小变化",
        "visual3.cc4": "4. 提取 — 信号处理提取呼吸和心跳",
        "visual3.caption": "雷达轨迹是一条清晰的波形——慢波是呼吸，快动是心跳。",
        "visual4.md": "04",
        "visual4.num": "04",
        "visual4.name": "详解例题",
        "visual4.title": "5 毫米胸部起伏 = 288° 相位变化",
        "visual4.intro": "24 GHz 雷达看到 5 毫米胸壁运动，回波相位会变多少？",
        "visual4.row1.label": "胸部偏移 Δd",
        "visual4.row1.value": "5 毫米",
        "visual4.row2.label": "波长 λ（24 GHz）",
        "visual4.row2.value": "12.5 毫米",
        "visual4.row3.label": "相位变化",
        "visual4.row3.formula": "4π Δd / λ",
        "visual4.row4.label": "相位变化",
        "visual4.row4.value": "≈ 288°",
        "visual4.caption": "24 GHz 下 5 毫米呼吸产生约 288° 相位变化——雷达不难检测。心跳（约 0.5 毫米）产生约 28° 相位变化——较小但可测。",
        "fig5.title": "生物雷达的难点",
        "fig5.card1.tag": "信号弱",
        "fig5.card1.unit": "胸部 约 5 毫米",
        "fig5.card1.sub": "延迟约 10⁻⁸ 秒",
        "fig5.card1.num": "μm",
        "fig5.card1.scale": "量级",
        "fig5.card2.tag": "噪声与杂波",
        "fig5.card2.unit": "随机运动",
        "fig5.card2.sub": "家具、风扇、人走动",
        "fig5.card2.num": "SNR",
        "fig5.card2.scale": "低",
        "fig5.card3.tag": "多路径",
        "fig5.card3.unit": "墙面反射",
        "fig5.card3.sub": "房间杂物产生的回波",
        "fig5.card3.num": "≈ mm",
        "fig5.card3.scale": "谨慎布局",
        "visual5.num": "05",
        "visual5.name": "技术难点",
        "visual5.title": "信号弱且难读",
        "visual5.intro": "要检测的偏移小于一毫米。雷达必须从随机运动中拆分出呼吸和心跳。墙面反射会加多噪声。",
        "visual5.caption": "生物雷达技术推动了信号处理的极限。现代算法（FMCW、相位跟踪、机器学习）使它能在日常场景中工作。",
        "visual6.app1.tag": "医疗",
        "visual6.app1.title": "医院患者监护",
        "visual6.app1.desc": "持续监测呼吸和心跳不用贴电极。电线少、不会刺激皮肤、不会因导联脱落产生虚趋报警。",
        "visual6.app2.tag": "养老",
        "visual6.app2.title": "睡眠与掉东检测",
        "visual6.app2.desc": "完顺在床上方的雷达能检测呼吸暂停、不安全位移和掉东。让老人在家里安心居住。",
        "visual6.app3.tag": "救援",
        "visual6.app3.title": "被埋越者",
        "visual6.app3.desc": "地震或雪崩后，生物雷达可以穿过碎石和墙壁检测被埋者的呼吸。",
        "visual6.app4.tag": "婴儿护理",
        "visual6.app4.title": "突发性婴儿死亡预防",
        "visual6.app4.desc": "婴儿监控器与生物雷达结合，实时感知呼吸不规则或暂停，主动告警。",
        "visual6.app5.tag": "驾驶员监测",
        "visual6.app5.title": "疲劳检测",
        "visual6.app5.desc": "方向盘内置生物雷达能发现呼吸变慢、不规则——驾驶员困倦的信号。",
        "visual6.app6.tag": "心理学",
        "visual6.app6.title": "压力与情绪",
        "visual6.app6.desc": "呼吸和心率变异能反映压力。用于 UX 用户体验研究和心理健康监测。",
        "visual6.num": "06",
        "visual6.name": "应用领域",
        "visual6.title": "生物雷达现在用在哪里",
        "visual6.intro": "只要想不接触就能监测人的场景，都能看到生物雷达——医院、家庭、汽车、救援现场。",
        "visual6.caption": "一个生物雷达模块可以同时服务医疗、养老、婴儿监护、驾驶安全、救援和心理学。"
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
