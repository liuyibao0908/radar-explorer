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
        "page.title": "Article 17: Ground-Penetrating Radar — Radar Explorer",
        "page.description": "Article 17: How does ground-penetrating radar look underground without digging? A bilingual student-friendly explainer.",
        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",
        "article.author": "By Editorial",
        "article.date": "June 5, 2025",
        "toc.title": "On this page",
        "toc.s1": "A pulse into the ground",
        "toc.s2": "Echoes from soil layers",
        "toc.s3": "GPR scan animation",
        "toc.s4": "Worked example",
        "toc.s5": "Frequency trade-off",
        "toc.s6": "Applications",
        "article.title": "Ground-Penetrating Radar",
        "article.subtitle": "How do you see what is buried under the road without digging it up? Ground-penetrating radar can.",
        "article.p1": "How do you know if there are pipes or ancient tombs underground? Ground-penetrating radar can help.",
        "article.p2": "GPR sends waves into the ground and receives reflections from soil layers. Different materials reflect differently, revealing underground structures. It is used in archaeology, pipe detection, road inspection, and finding voids. It is like an ultrasound for the earth.",
        "article.p3": "Lower frequencies penetrate deeper but with lower resolution. Higher frequencies give better resolution but penetrate less. It is a common tool in engineering and archaeology. It detects underground without digging.",
        "article.p4": "GPR is the underground cousin of weather radar and bio-radar. Same physics, different medium: the radar wave travels through soil, rock, concrete or ice, and the echo tells us what is hidden beneath our feet.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Ground-penetrating radar sends waves underground to detect structures and buried objects.",
        "article.back": "← Back to Articles",
        "article.meta": "Student Research · 2025",
        "fig1.title": "GPR box pulled across a road",
        "fig1.air": "AIR",
        "fig1.surface": "SURFACE",
        "fig1.pipe": "PIPE",
        "fig1.void": "VOID",
        "fig1.box": "GPR BOX",
        "fig1.echo": "echo",
        "fig1.move": "scan direction →",
        "visual1.num": "01",
        "visual1.name": "A PULSE INTO THE GROUND",
        "visual1.title": "Radar Waves Go Down Through the Soil",
        "visual1.intro": "A small box is pulled across the ground. Inside, a transmitter fires a short radio pulse straight down. Receivers pick up echoes coming back from layers, pipes and voids.",
        "visual1.caption": "Each time the GPR is moved, it sends dozens of pulses. The echoes form a profile of what is hidden under the surface — a radargram.",
        "fig2.title": "Different layers reflect different amounts",
        "fig2.soil": "SOIL",
        "fig2.soilVal": "~30% ref.",
        "fig2.sand": "SAND",
        "fig2.sandVal": "~40% ref.",
        "fig2.water": "WATER",
        "fig2.waterVal": "~80% ref.",
        "fig2.metal": "METAL",
        "fig2.metalVal": "~95% ref.",
        "fig2.ice": "ICE",
        "fig2.iceVal": "~80% ref.",
        "fig2.air": "AIR",
        "fig2.airVal": "~100% ref.",
        "fig2.note": "stronger reflector → stronger echo → brighter line on the radargram",
        "fig2.scale": "reflectivity (low → high)",
        "visual2.num": "02",
        "visual2.name": "ECHOES FROM SOIL LAYERS",
        "visual2.title": "Different Materials Reflect Differently",
        "visual2.intro": "Every material reflects radio waves a little differently. Wet soil and metal reflect strongly; dry sand reflects weakly. GPR uses these differences to identify what is underground without touching it.",
        "visual2.caption": "The radargram shows echoes as bright stripes. Stripes from metal pipes and water tables stand out; loose soil shows up as gentler layers.",
        "visual3.num": "03",
        "visual3.name": "ANIMATION: GPR SCAN",
        "visual3.title": "Watch the Radargram Build Line by Line",
        "visual3.intro": "The animation shows the GPR moving across the surface. With each step it adds a new vertical line to the radargram. Pipes and voids appear as bright arcs.",
        "visual3.fallback": "Your browser does not support embedded video. The animation shows the GPR scanning and the radargram building up line by line.",
        "visual3.cc1": "1. PULSE — GPR fires a short radio pulse into the ground",
        "visual3.cc2": "2. ECHO — soil layers, pipes and voids reflect it back",
        "visual3.cc3": "3. TRACE — one scan-line on the radargram",
        "visual3.cc4": "4. SCAN — move the box, add the next line, see structure emerge",
        "visual3.caption": "A radargram is built from hundreds of vertical traces laid side by side — like a CT scan, but using radio echoes.",
        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "A Pipe 0.5 m Deep, Echo in 10 ns",
        "visual4.intro": "A buried pipe is 0.5 m below the surface. How long does it take for the radar pulse to come back?",
        "visual4.row1.label": "Depth d",
        "visual4.row1.value": "0.5 m",
        "visual4.row2.label": "Soil speed v",
        "visual4.row2.value": "~ 0.1 m/ns",
        "visual4.row3.label": "Round-trip time",
        "visual4.row3.formula": "2d / v",
        "visual4.row4.label": "Round-trip time",
        "visual4.row4.value": "≈ 10 ns",
        "visual4.caption": "Radar waves slow down in soil to about 10% of the speed of light. A 0.5 m pipe is detected in 10 nanoseconds — fast, but radar electronics can time it accurately.",
        "fig5.title": "Frequency vs depth vs resolution",
        "fig5.low.tag": "LOW FREQ",
        "fig5.low.freq": "~ 100 MHz",
        "fig5.low.depth": "deep ≈ 30 m",
        "fig5.low.res": "low resolution",
        "fig5.low.use": "use: geology",
        "fig5.low.use2": "ground water",
        "fig5.mid.tag": "MID FREQ",
        "fig5.mid.freq": "~ 500 MHz",
        "fig5.mid.depth": "medium ≈ 5 m",
        "fig5.mid.res": "mid resolution",
        "fig5.mid.use": "use: utility",
        "fig5.mid.use2": "pipe locating",
        "fig5.high.tag": "HIGH FREQ",
        "fig5.high.freq": "~ 1.5 GHz",
        "fig5.high.depth": "shallow ≈ 0.5 m",
        "fig5.high.res": "high resolution",
        "fig5.high.use": "use: archaeology",
        "fig5.high.use2": "concrete scanning",
        "fig5.trade1": "deeper",
        "fig5.trade2": "sharper",
        "visual5.num": "05",
        "visual5.name": "FREQUENCY TRADE-OFF",
        "visual5.title": "Lower Frequency Penetrates Deeper, but Less Detail",
        "visual5.intro": "Low-frequency radio waves dive deep but blur the details. High-frequency waves resolve small features but get absorbed quickly. GPR operators pick the frequency that matches their target.",
        "visual5.caption": "Archaeologists chasing a buried wall use 1 GHz for centimetre resolution. Geologists mapping aquifers use 100 MHz to see tens of metres down.",
        "visual6.app1.tag": "ARCHAEOLOGY",
        "visual6.app1.title": "Finding Ancient Sites",
        "visual6.app1.desc": "GPR reveals buried walls, tombs and roads under fields and cities without breaking ground. Used at Stonehenge, Pompeii, the Egyptian pyramids and many more.",
        "visual6.app2.tag": "UTILITIES",
        "visual6.app2.title": "Mapping Pipes & Cables",
        "visual6.app2.desc": "Before any roadwork, GPR maps buried water, gas, fibre and power lines. Saves construction crews from accidental strikes.",
        "visual6.app3.tag": "ROAD INSPECTION",
        "visual6.app3.title": "Checking Roads & Bridges",
        "visual6.app3.desc": "GPR scans asphalt and concrete layers, finds voids, delamination and rebar corrosion before the road fails.",
        "visual6.app4.tag": "GEOLOGY",
        "visual6.app4.title": "Bedrock & Groundwater",
        "visual6.app4.desc": "Low-frequency GPR maps bedrock depth and the water table across large areas. Used in environmental and mining surveys.",
        "visual6.app5.tag": "FORENSICS",
        "visual6.app5.title": "Buried Evidence",
        "visual6.app5.desc": "Forensic teams use GPR to find buried objects without disturbing a crime scene. Detect graves, hidden weapons or concealed caches.",
        "visual6.app6.tag": "CONSTRUCTION",
        "visual6.app6.title": "Rebar & Concrete",
        "visual6.app6.desc": "High-frequency GPR scans concrete for rebar and voids before drilling or cutting. Critical for bridge and tunnel inspections.",
        "visual6.num": "06",
        "visual6.name": "APPLICATIONS",
        "visual6.title": "Where GPR Is Used Today",
        "visual6.intro": "GPR shows up wherever something might be hidden underground: archaeology, utility mapping, road inspection, forensics, geology.",
        "visual6.caption": "A single GPR unit can serve civil engineering, archaeology, public safety and environmental monitoring at the same time."
    },

    zh: {
        "page.title": "第17篇：地质雷达（GPR）— 雷达探索者",
        "page.description": "第17篇：地质雷达如何在不挖地的情况下看到地下。面向学生的中英双语科普。",
        "nav.home": "首页",
        "nav.learn": "学习",
        "nav.articles": "文章",
        "nav.explore": "探索",
        "nav.research": "研究",
        "nav.about": "关于",
        "article.author": "作者：小编",
        "article.date": "2025年6月5日",
        "toc.title": "本页目录",
        "toc.s1": "向地下发脉冲",
        "toc.s2": "地层的回波",
        "toc.s3": "地质雷达扫描动画",
        "toc.s4": "详解例题",
        "toc.s5": "频率取舍",
        "toc.s6": "应用领域",
        "article.title": "地质雷达",
        "article.subtitle": "不挖开地面，怎么看到埋在底下的管线、古墓和空洞？地质雷达可以。",
        "article.p1": "怎么知道地下有没有管线、古墓？地质雷达能帮忙。",
        "article.p2": "地质雷达向地下发波，接收地层反射。不同介质反射不同，能看出地下结构。用于考古、探管线、查路基、找空洞。像给大地做B超。",
        "article.p3": "频率越低，穿透越深，分辨率越低。频率越高，分辨率越高，穿透越浅。是工程和考古的常用工具。不破坏地面就能探测地下。",
        "article.p4": "地质雷达是气象雷达、生物雷达的“地下表亲”。物理一样，仅仅传播介质不同：雷达波穿过土壤、岩石、混凝土或冰层，回波告诉我们脚下藏了什么。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "地质雷达向地下发波，探测地下结构和埋藏物。",
        "article.back": "← 返回文章列表",
        "article.meta": "学生研究 · 2025",
        "fig1.title": "GPR 探测管线示意图",
        "fig1.air": "空气",
        "fig1.surface": "地面",
        "fig1.pipe": "管线",
        "fig1.void": "空洞",
        "fig1.box": "地质雷达",
        "fig1.echo": "回波",
        "fig1.move": "扫描方向 →",
        "visual1.num": "01",
        "visual1.name": "向地下发脉冲",
        "visual1.title": "雷达波穿透土层向下",
        "visual1.intro": "一个小盒子被拉着在地面上移动。盒子里发射器垂直向下发出短脉冲，接收器收集来自地层、管线和空洞的回波。",
        "visual1.caption": "雷达每移动一次，就会发出几十个脉冲。所有回波拼成一张描绘地下结构的“雷达图”。",
        "fig2.title": "不同地层反射不同",
        "fig2.soil": "土壤",
        "fig2.soilVal": "约 30% 反射",
        "fig2.sand": "沙",
        "fig2.sandVal": "约 40% 反射",
        "fig2.water": "水",
        "fig2.waterVal": "约 80% 反射",
        "fig2.metal": "金属",
        "fig2.metalVal": "约 95% 反射",
        "fig2.ice": "冰",
        "fig2.iceVal": "约 80% 反射",
        "fig2.air": "空气",
        "fig2.airVal": "约 100% 反射",
        "fig2.note": "反射越强 → 回波越亮 → 雷达图上的条纹越亮",
        "fig2.scale": "反射率（低 → 高）",
        "visual2.num": "02",
        "visual2.name": "地层的回波",
        "visual2.title": "不同材料反射不同",
        "visual2.intro": "每种材料对雷达波的反射略有不同。湿土和金属反射强烈；干沙反射很弱。地质雷达利用这些差异，识别地下有什么，不接触任何东西。",
        "visual2.caption": "雷达图上亮条纹就是反射强的层。金属管、水层会独自亮起；松散土壤则较暗。",
        "visual3.num": "03",
        "visual3.name": "动画：GPR 扫描",
        "visual3.title": "看雷达图逐行生成",
        "visual3.intro": "动画展示地质雷达一步一步走过地表。每一步在雷达图上加一行。管线和空洞显示为亮弧。",
        "visual3.fallback": "你的浏览器不支持嵌入视频。动画展示地质雷达扫描地面、雷达图逐行生成。",
        "visual3.cc1": "1. 脉冲 — 地质雷达向地下发短脉冲",
        "visual3.cc2": "2. 回波 — 地层、管线和空洞反射回来",
        "visual3.cc3": "3. 跟踪 — 雷达图上一条扫描线",
        "visual3.cc4": "4. 扫描 — 移动盒子，加上下一行，看出隐藏结构",
        "visual3.caption": "雷达图是由成百上千条垂直跟踪串成的图像——你可以当它是用雷达回声做的 CT 扫描。",
        "visual4.num": "04",
        "visual4.name": "详解例题",
        "visual4.title": "0.5 米深的管线，10 纳秒回波",
        "visual4.intro": "一根埋在地下 0.5 米处的管线。雷达脉冲来回要多久？",
        "visual4.row1.label": "深度 d",
        "visual4.row1.value": "0.5 米",
        "visual4.row2.label": "土中速度 v",
        "visual4.row2.value": "约 0.1 m/ns",
        "visual4.row3.label": "双程时间",
        "visual4.row3.formula": "2d / v",
        "visual4.row4.label": "双程时间",
        "visual4.row4.value": "≈ 10 ns",
        "visual4.caption": "雷达波在土壤中只能达到光速的 10%。0.5 米管线的回波只需 10 纳秒——足够快，现代雷达电路能精确测量。",
        "fig5.title": "频率 vs 深度 vs 分辨率",
        "fig5.low.tag": "低频",
        "fig5.low.freq": "约 100 MHz",
        "fig5.low.depth": "深 ≈ 30 米",
        "fig5.low.res": "分辨率低",
        "fig5.low.use": "用途：地质",
        "fig5.low.use2": "地下水",
        "fig5.mid.tag": "中频",
        "fig5.mid.freq": "约 500 MHz",
        "fig5.mid.depth": "中 ≈ 5 米",
        "fig5.mid.res": "分辨率中等",
        "fig5.mid.use": "用途：管线",
        "fig5.mid.use2": "管线定位",
        "fig5.high.tag": "高频",
        "fig5.high.freq": "约 1.5 GHz",
        "fig5.high.depth": "浅 ≈ 0.5 米",
        "fig5.high.res": "分辨率高",
        "fig5.high.use": "用途：考古",
        "fig5.high.use2": "混凝土扫描",
        "fig5.trade1": "更深",
        "fig5.trade2": "更清",
        "visual5.num": "05",
        "visual5.name": "频率取舍",
        "visual5.title": "低频穿得深但细节少",
        "visual5.intro": "低频电磁波穿透能力强但细节模糊。高频能识别微小结构但吸收很快。地质雷达操作员根据目标选频率。",
        "visual5.caption": "考古学家追查原始墙垣用 1 GHz 看厘米级别细节。地质学家画含水层用 100 MHz 看几十米深。",
        "visual6.app1.tag": "考古",
        "visual6.app1.title": "古代遗址",
        "visual6.app1.desc": "地质雷达能在不破土的前提下，看到埋在土里的墙垣、墓葬、古路。在巨石阵、庞贝、埃及金字塔都有应用。",
        "visual6.app2.tag": "公用事业",
        "visual6.app2.title": "管线与电缆",
        "visual6.app2.desc": "施工前先用 GPR 画出埋在地下的给水、燃气、光纤、电力线。避免工人意外凿穿。",
        "visual6.app3.tag": "路面检查",
        "visual6.app3.title": "检查路面与桥梁",
        "visual6.app3.desc": "扫描沥青与混凝土层，发现空腔、脱层与钢筋锈蚀，赶在路面坏掉之前。",
        "visual6.app4.tag": "地质",
        "visual6.app4.title": "基岩与地下水",
        "visual6.app4.desc": "低频 GPR 能画出大面积基岩深度和地下水位。环保与矿业勘查里都有用。",
        "visual6.app5.tag": "法医",
        "visual6.app5.title": "埋藏物证",
        "visual6.app5.desc": "法医检查人员用 GPR 不打现场查找埋藏物品、暗藏的武器与人骨。",
        "visual6.app6.tag": "建筑",
        "visual6.app6.title": "钢筋与混凝土",
        "visual6.app6.desc": "高频 GPR 扫描混凝土中的钢筋与空腔，在钻孔或切割之前保证安全。",
        "visual6.num": "06",
        "visual6.name": "应用领域",
        "visual6.title": "地质雷达现在用在哪里",
        "visual6.intro": "只要可能隐藏在地下，地质雷达都看得到——考古、管线、道路、法医、地质。",
        "visual6.caption": "一个 GPR 设备可以同时服务于土木工程、考古、公共安全与环保监测。"
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
