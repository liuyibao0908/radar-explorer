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
        "page.title": "Article 19: Speed Radar — Radar Explorer",
        "page.description": "Article 19: How does a police speed gun measure a car's speed? A bilingual student-friendly explainer of the Doppler effect.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "article.author": "By Editorial",
        "article.date": "Oct 19, 2025",
        "toc.title": "On this page",
        "toc.s1": "The Doppler effect",
        "toc.s2": "Frequency shift",
        "toc.s3": "Doppler shift animation",
        "toc.s4": "Worked example",
        "toc.s5": "Other speed methods",
        "toc.s6": "Applications",
        "article.title": "Speed Radar",
        "article.subtitle": "How does a small hand-held radar tell you exactly how fast a car is going? It listens to the Doppler shift of the echo.",
        "article.p1": "Why can a police speed gun measure how fast a car is going? Because of the Doppler effect.",
        "article.p2": "Speed radar sends a wave that bounces off the car. Because the car is moving, the echo frequency changes — this is the Doppler shift. The size of the shift relates to the car's speed, so the speed can be calculated. Think of an ambulance passing by — the pitch goes up and then down.",
        "article.p3": "Traffic enforcement and sports speed measurement both use this principle. Radar speed measurement is accurate and fast. Today there are also laser and video speed systems. Doppler is the core of speed radar.",
        "article.p4": "Speed radar is the simplest consumer application of the Doppler effect. Same physics, different medium: the source is microwaves instead of sound, the target is a vehicle instead of a siren. The math is identical — v = c × Δf / (2 × f).",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Speed radar uses the Doppler shift to calculate a car's speed.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2025",
        "fig1.title": "Doppler effect: source moving",
        "fig1.vLabel": "v",
        "fig1.front": "crests compressed",
        "fig1.frontSub": "higher frequency",
        "fig1.back": "crests spread",
        "fig1.backSub": "lower frequency",
        "fig1.bottom": "stationary observer hears the Doppler shift",
        "visual1.num": "01",
        "visual1.name": "THE DOPPLER EFFECT",
        "visual1.title": "Moving Targets Change the Echo Frequency",
        "visual1.intro": "When a source of waves moves toward you, the waves get squashed together — shorter wavelength, higher pitch. When it moves away, the waves stretch — longer wavelength, lower pitch. This is the Doppler effect, and it works for both sound and radio.",
        "visual1.caption": "A car moving toward a radar sends crests back sooner than expected. Toward a longer-shorter-l→h→h→higher frequency echo.",
        "fig2.title": "Sent vs received frequency",
        "fig2.sent": "SENT",
        "fig2.freq": "fₜ = 10 GHz",
        "fig2.recv": "RECEIVED",
        "fig2.recvFreq": "fₜ + Δf",
        "fig2.shift": "Δf → speed",
        "fig2.bottom": "the radar measures Δf and computes v",
        "visual2.num": "02",
        "visual2.name": "FREQUENCY SHIFT",
        "visual2.title": "Radar Sees the Same Effect With Microwaves",
        "visual2.intro": "A speed gun emits a continuous microwave at a fixed frequency. The moving car reflects it, and the echo comes back at a slightly higher frequency (if the car is approaching) or lower (if it is receding). The shift Δf is tiny but measurable.",
        "visual2.caption": "Continuous-wave radar never stops listening for the Doppler shift. Even a few kHz shift at 10 GHz is enough to compute the car's speed to 1 km/h precision.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: DOPPLER SHIFT",
        "visual3.title": "Watch the Echo Frequency Shift",
        "visual3.intro": "The animation shows a radar gun sending a continuous microwave at a moving car. The echo comes back at a higher frequency because the car has moved closer between crests.",
        "visual3.fallback": "Your browser does not support embedded video. The animation shows the Doppler shift of an echo from a moving car.",
        "visual3.cc1": "1. SEND — gun emits a continuous microwave",
        "visual3.cc2": "2. BOUNCE — the moving car reflects it",
        "visual3.cc3": "3. SHIFT — the echo arrives at a slightly different frequency",
        "visual3.cc4": "4. SOLVE — v = c × Δf / (2 × f)",
        "visual3.caption": "The Doppler formula is the same for any radar: v = c × Δf / (2 × f). Speed guns just do it in real time.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "A Car at 100 km/h, Δf ≈ 1.86 kHz",
        "visual4.intro": "A car is moving at 100 km/h. The radar gun operates at 10 GHz. What Doppler shift does it measure?",
        "visual4.row1.label": "Speed v",
        "visual4.row1.value": "100 km/h",
        "visual4.row2.label": "Radar frequency f",
        "visual4.row2.value": "10 GHz",
        "visual4.row3.label": "Speed in m/s",
        "visual4.row3.formula": "v ≈ 27.8 m/s",
        "visual4.row4.label": "Doppler shift Δf",
        "visual4.row4.value": "≈ 1.86 kHz",
        "visual4.caption": "Less than 2 kHz of shift, at a transmitted frequency of 10 GHz. A modern speed gun measures this shift in milliseconds and prints the speed to the officer.",
        "visual5.left.tag": "DOPPLER RADAR",
        "visual5.left.title": "Doppler shift",
        "visual5.left.line": "continuous wave",
        "visual5.left.line2": "hand-held gun",
        "visual5.left.use": "police, sports",
        "visual5.right.tag": "LIDAR / LASER",
        "visual5.right.title": "time of flight",
        "visual5.right.line": "pulse round-trip",
        "visual5.right.line2": "two snapshots",
        "visual5.right.use": "police, advanced",
        "visual5.num": "05",
        "visual5.name": "OTHER SPEED METHODS",
        "visual5.title": "Three Ways to Time a Moving Target",
        "visual5.intro": "Doppler radar is one of three common ways to measure speed. Lidar fires two quick snapshots and divides distance by time. Video systems track the car across multiple frames. Each has its strengths.",
        "visual5.caption": "Doppler is fast and simple but works best head-on. Lidar is more accurate at angles. Video is hardest to defeat. Police use a mix.",
        "visual6.app1.tag": "POLICE",
        "visual6.app1.title": "Highway Speed Traps",
        "visual6.app1.desc": "Hand-held Doppler guns and roadside cameras read car speeds in milliseconds. The most common consumer use of radar anywhere.",
        "visual6.app2.tag": "SPORTS",
        "visual6.app2.title": "Tennis & Baseball",
        "visual6.app2.desc": "Doppler radar guns measure serve speeds (up to 250 km/h) and baseball pitch speeds. Used in every major sport today.",
        "visual6.app3.tag": "AVIATION",
        "visual6.app3.title": "Aircraft Approach",
        "visual6.app3.desc": "Doppler radar on landing aircraft measures ground speed and helps in poor visibility. Used by every commercial flight.",
        "visual6.app4.tag": "WEATHER",
        "visual6.app4.title": "Doppler Weather Radar",
        "visual6.app4.desc": "Doppler weather radar uses the same effect — but on raindrops and snow — to measure wind speed and detect tornadoes.",
        "visual6.app5.tag": "TRAFFIC LIGHTS",
        "visual6.app5.title": "Adaptive Signals",
        "visual6.app5.desc": "Doppler sensors at intersections detect approaching cars and adjust green-light time on the fly. Saves fuel and time.",
        "visual6.app6.tag": "ASTRONOMY",
        "visual6.app6.title": "Exoplanet Discovery",
        "visual6.app6.desc": "Tiny Doppler shifts in starlight reveal planets orbiting distant stars. The wobble of the star gives away the planet’s mass.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "Where Speed Radar Is Used",
        "visual6.intro": "Speed radar shows up wherever something moves: police, sports, weather, traffic lights, astronomy.",
        "visual6.caption": "Doppler radar is one of the simplest, cheapest, and most widespread applications of radar in everyday life."
    },

    zh: {
        "page.title": "第19篇：测速雷达（Speed Radar）— 雷达探索者",
        "page.description": "第19篇：交警的测速枪是怎么测出车速的？多普勒效应双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "article.author": "作者：小编",
        "article.date": "2025年10月19日",
        "toc.title": "本页目录",
        "toc.s1": "多普勒效应",
        "toc.s2": "频率偏移",
        "toc.s3": "多普勒频移动画",
        "toc.s4": "详解例题",
        "toc.s5": "其他测速方法",
        "toc.s6": "应用领域",
        "article.title": "测速雷达",
        "article.subtitle": "手持小雷达怎么知道你车开多快？它听的是回波的“多普勒频移”。",
        "article.p1": "交警用的测速仪，为什么能测出车速？靠多普勒效应。",
        "article.p2": "测速雷达发波，碰到车反射回来。车在动，回波频率会变化，叫多普勒频移。频移大小和车速有关，算出速度。像听救护车驶过，音调会变高变低。",
        "article.p3": "交通执法、体育测速都用这个原理。雷达测速精度高、反应快。现在还有激光测速、视频测速。多普勒是测速雷达的核心。",
        "article.p4": "测速雷达是多普勒效应最常见的应用。物理一样，只是介质不同：声源换成了微波，救护车换成了汽车。算式也一样——v = c × Δf / (2 × f)。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "测速雷达靠多普勒频移算出车速。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2025",
        "fig1.title": "多普勒效应：声源移动",
        "fig1.vLabel": "v",
        "fig1.front": "波峰压缩",
        "fig1.frontSub": "频率更高",
        "fig1.back": "波峰拉长",
        "fig1.backSub": "频率更低",
        "fig1.bottom": "静止观察者听到多普勒偏移",
        "visual1.num": "01",
        "visual1.name": "多普勒效应",
        "visual1.title": "动目标改变回波频率",
        "visual1.intro": "波源向你靠近时，波被挤压——波长变短，音调变高；波源远去时，波被拉长——波长变长，音调变低。这就是多普勒效应，声音和电磁波都遵循。",
        "visual1.caption": "汽车朝雷达驶来时，波峰反射得更密集。频率更高——更高频的回波。",
        "fig2.title": "发射频率 vs 回波频率",
        "fig2.sent": "发射",
        "fig2.freq": "fₛ = 10 GHz",
        "fig2.recv": "回波",
        "fig2.recvFreq": "fₛ + Δf",
        "fig2.shift": "Δf → 速度",
        "fig2.bottom": "雷达测出 Δf 并算出 v",
        "visual2.num": "02",
        "visual2.name": "频率偏移",
        "visual2.title": "雷达用微波看到同样效应",
        "visual2.intro": "测速枪持续发射固定频率的微波。运动的汽车把它反射回来，回波频率会偏高（汽车靠近）或偏低（汽车远离）。这个频移 Δf 很小，但能精确测量。",
        "visual2.caption": "连续波雷达始终在“听”多普勒频移。即便 Δf 只有几 kHz（相对 10 GHz 的载波），也足以实现 ±1 km/h 的精度。",
        "visual3.num": "03",
        "visual3.name": "动画：多普勒频移",
        "visual3.title": "看回波频率漂移",
        "visual3.intro": "动画展示测速枪向行驶中的汽车发出连续微波。因为汽车在波峰之间已经靠近，回波的频率略高。",
        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示运动的汽车回波的多普勒频移。",
        "visual3.cc1": "1. 发射 — 测速枪发出连续微波",
        "visual3.cc2": "2. 反射 — 运动汽车反射回波",
        "visual3.cc3": "3. 频移 — 回波频率略变",
        "visual3.cc4": "4. 求解 — v = c × Δf / (2 × f)",
        "visual3.caption": "任何雷达的多普勒公式都一样：v = c × Δf / (2 × f)。测速枪只是实时算出来。",
        "visual4.num": "04",
        "visual4.name": "详解例题",
        "visual4.title": "100 km/h 的汽车，Δf ≈ 1.86 kHz",
        "visual4.intro": "汽车以 100 km/h 行驶。测速雷达工作在 10 GHz。多普勒频移是多少？",
        "visual4.row1.label": "速度 v",
        "visual4.row1.value": "100 km/h",
        "visual4.row2.label": "雷达频率 f",
        "visual4.row2.value": "10 GHz",
        "visual4.row3.label": "速度（m/s）",
        "visual4.row3.formula": "v ≈ 27.8 m/s",
        "visual4.row4.label": "多普勒频移 Δf",
        "visual4.row4.value": "≈ 1.86 kHz",
        "visual4.caption": "在 10 GHz 的载波下只有不到 2 kHz 的频移。现代测速枪在毫秒内测量，并显示给交警。",
        "visual5.left.tag": "多普勒雷达",
        "visual5.left.title": "频移法",
        "visual5.left.line": "连续波",
        "visual5.left.line2": "手持枪",
        "visual5.left.use": "警察、体育",
        "visual5.right.tag": "激光雷达",
        "visual5.right.title": "飞行时间法",
        "visual5.right.line": "脉冲往返",
        "visual5.right.line2": "两次快照",
        "visual5.right.use": "警察、高级",
        "visual5.num": "05",
        "visual5.name": "其他测速方法",
        "visual5.title": "三种测量速度的方式",
        "visual5.intro": "多普勒雷达只是三种常见测速方法之一。激光雷达发两个快速快照，距离除以时间。视频系统跨多帧追踪汽车。各有优势。",
        "visual5.caption": "多普勒法快速简单，但对准的正面最准。激光雷达在角度下更准。视频最难甩。警察一般混用。",
        "visual6.app1.tag": "警察",
        "visual6.app1.title": "高速公路测速",
        "visual6.app1.desc": "手持多普勒枪和路侧摄像头在毫秒内读取车速。这是雷达在日常生活中最普遍的应用。",
        "visual6.app2.tag": "体育",
        "visual6.app2.title": "网球与棒球",
        "visual6.app2.desc": "多普勒雷达测发球速度（可达 250 km/h）和棒球投球速度。今天每项主要运动都用。",
        "visual6.app3.tag": "航空",
        "visual6.app3.title": "飞机进近",
        "visual6.app3.desc": "飞机上的多普勒雷达测地速，能见度差时仍可用。每次商业航班都在用。",
        "visual6.app4.tag": "气象",
        "visual6.app4.title": "多普勒气象雷达",
        "visual6.app4.desc": "多普勒气象雷达同样效应作用在雨滴和雪花上，测风速，探测龙卷风。",
        "visual6.app5.tag": "交通灯",
        "visual6.app5.title": "自适应信号",
        "visual6.app5.desc": "路口的多普勒传感器探测来车，实时调整绿灯时长。节省燃料和时间。",
        "visual6.app6.tag": "天文学",
        "visual6.app6.title": "发现系外行星",
        "visual6.app6.desc": "恒星光的微小多普勒偏移揭示绕它的行星——恒星的摇摆暴露了行星的质量。",
        "visual6.num": "06",
        "visual6.name": "应用领域",
        "visual6.title": "测速雷达在哪里用",
        "visual6.intro": "凡是动的东西都看得到测速雷达：警察、体育、气象、信号灯、天文学。",
        "visual6.caption": "多普勒雷达是日常雷达应用中最简单、最便宜、最普及的一种。"
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

