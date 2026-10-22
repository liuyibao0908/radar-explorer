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
        "page.title": "Article 44: Power and Cooling — Radar Explorer",
        "page.description": "Article 44: A high-power radar draws as much electricity as a small town and dumps most of it as heat. Power supplies, cooling loops, generators and UPS — the part nobody photographs.",
        "nav.home": "Home",
        "nav.articles": "Articles",
        "article.author": "By Editorial",
        "article.date": "Aug 7, 2026",
        "article.title": "Power and Cooling — The Radar's Backbone",
        "article.subtitle": "The part nobody photographs, and the part that decides whether it runs at all.",
        "toc.title": "On this page",
        "toc.s1": "Where the power goes",
        "toc.s2": "The heat budget",
        "toc.s3": "Cooling loop animation",
        "toc.s4": "Worked example",
        "toc.s5": "Why it gets big",
        "toc.s6": "When the grid fails",
        "article.p1": "A radar uses a lot of power and creates a lot of heat. How does it keep going?",
        "article.p2": "Power supply: feeds the transmitter, receiver, signal processor, and servo. Cooling: air or liquid cooling to stop parts from overheating. Think of a gaming PC — you need enough power and good cooling, or it lags and shuts down.",
        "article.p3": "In high-power radars, power and cooling systems take up a lot of space. Power must be stable — voltage swings affect performance. Cooling must be reliable — overheating burns out parts.",
        "article.p4": "Some radars also have generators and UPS systems to avoid power cuts. If the backbone fails, even the best radar can't perform.",
        "visual1.name": "WHERE THE POWER GOES",
        "visual1.title": "Only a Tenth Comes Out as Radio",
        "visual1.intro": "A radar draws far more from the grid than it puts into the air. The rest becomes heat.",
        "fig1.title": "A megawatt from the grid, 100 kW into the air",
        "fig1.grid": "GRID",
        "fig1.in": "1 MW",
        "fig1.tx": "TRANSMITTER",
        "fig1.rf": "100 kW to air",
        "fig1.heat": "900 kW to heat",
        "fig1.rest": "RX, DSP, SERVO",
        "fig1.rest2": "~150 kW",
        "fig1.heat2": "about 90% of everything drawn becomes heat",
        "fig1.heat3": "cooling must remove roughly 1 MW continuously",
        "fig1.note": "peak, not average",
        "visual1.caption": "The radar only gets to be brilliant for a few microseconds at a time. Everything else the machinery does is converting electricity into heat that has to be carried away.",
        "visual2.name": "THE HEAT BUDGET",
        "visual2.title": "Removing a Megawatt of Heat",
        "visual2.intro": "Heat has to go somewhere. The choice of where is the whole design.",
        "visual2.app1.tag": "AIR",
        "visual2.app1.title": "Forced Air",
        "visual2.app1.desc": "Fans move air through filters and heat exchangers. Simple, cheap and easy to maintain — but air carries far less heat per cubic metre than water, so it needs a lot of moving volume.",
        "visual2.app2.tag": "WATER",
        "visual2.app2.title": "Liquid Loop",
        "visual2.app2.desc": "Water carries about 4000 times more heat per unit volume than air. Most high-power installations use a water loop even though the final heat rejection is still often to air.",
        "visual2.app3.tag": "SEALED",
        "visual2.app3.title": "Closed Loop",
        "visual2.app3.desc": "The coolant never leaves the building; external radiators dump the heat to the atmosphere. This is what a modern weather radar does inside its radome.",
        "visual2.app4.tag": "COLD",
        "visual2.app4.title": "Why It Is Cold Outside",
        "visual2.app4.desc": "A radome is white for a reason. Sunlight on a dark dome of that size would add tens of kilowatts of heat on a still, clear day.",
        "visual2.app5.tag": "LIMIT",
        "visual2.app5.title": "Summer Peak",
        "visual2.app5.desc": "Cooling is sized for the hottest day of the year, not the average. On a hot still afternoon there is less margin than at any other time.",
        "visual2.app6.tag": "BLOWN",
        "visual2.app6.title": "When It Fails",
        "visual2.app6.desc": "A coolant pump stopping takes the radar down within minutes. Most stations watch coolant temperature as closely as they watch the transmitter.",
        "visual2.caption": "Water in, air out. The loop exists because air is a poor conductor of heat and a radome is a very large surface to cool.",
        "visual3.name": "ANIMATION: THE COOLING LOOP",
        "visual3.title": "Watching Heat Leave the Building",
        "visual3.intro": "Follow a packet of heat from the transmitter to the outside air.",
        "visual3.fallback": "Your browser does not support the video tag.",
        "visual3.cc1": "1. GENERATED -- the transmitter makes heat, not just waves",
        "visual3.cc2": "2. ABSORBED -- coolant picks it up at the cold plate",
        "visual3.cc3": "3. CARRIED -- a pump moves it through the loop",
        "visual3.cc4": "4. REJECTED -- radiators pass it into the open air",
        "visual3.caption": "A closed loop does not consume water, but it does depend on pumps running. Every stage is a possible failure.",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "One Radar's Power Bill",
        "visual4.intro": "A typical high-power weather radar, and where every kilowatt goes.",
        "visual4.row1.label": "Transmitter, peak",
        "visual4.row1.value": "800 kW",
        "visual4.row2.label": "Duty cycle",
        "visual4.row2.value": "0.2% — it is on for 2 ms, off for 1 s",
        "visual4.row3.label": "Transmitter, average",
        "visual4.row3.value": "1.6 kW",
        "visual4.row4.label": "Electronics + servo",
        "visual4.row4.value": "40 kW continuous",
        "visual4.row5.label": "Cooling and losses",
        "visual4.row5.value": "25 kW continuous",
        "visual4.row6.label": "Site total",
        "visual4.row6.value": "about 65 kW → 570 MWh a year",
        "visual4.caption": "The peak is what the cooling must handle instantly. The average is what the electricity bill looks like. They differ by a factor of two thousand.",
        "visual5.name": "WHY IT GETS BIG",
        "visual5.title": "Quality Has a Physical Size",
        "visual5.intro": "Nothing in a radar can be made perfect, because perfection would need infinite mass.",
        "visual5.app1.tag": "UPS",
        "visual5.app1.title": "Ride-Through",
        "visual5.app1.desc": "A radar cannot be stopped and restarted casually; the tube warms up over minutes and the crew lose the picture. Batteries hold the site for roughly ten minutes.",
        "visual5.app2.tag": "GEN",
        "visual5.app2.title": "Generator",
        "visual5.app2.desc": "A diesel set on site takes over when the grid fails. It must start, fuel and run unattended for hours, and it is tested on a schedule for that reason.",
        "visual5.app3.tag": "REG",
        "visual5.app3.title": "Voltage Regulation",
        "visual5.app3.desc": "A magnetron's output frequency and power depend on its anode voltage. Grid sag of a few per cent becomes a measurable shift in the transmitted wave.",
        "visual5.app4.tag": "TRANSIENT",
        "visual5.app4.title": "Switching Surges",
        "visual5.app4.desc": "Striking a magnetron draws a very short, very large pulse of current. Supply gear is sized for that surge, not for the average load.",
        "visual5.app5.tag": "GROUND",
        "visual5.app5.title": "Earthing",
        "visual5.app5.desc": "The radome is on a concrete foundation with its own earth. It protects the structure, and it keeps the RF ground plane consistent.",
        "visual5.app6.tag": "SPACE",
        "visual5.app6.title": "The Hidden Half",
        "visual5.app6.desc": "In a high-power radar, the support building is often larger than the tower. It holds the feeder, the cooling plant, the generator and the spares.",
        "visual5.caption": "The most advanced part of a radar is often not in the tower at all. It is in the hut beside it.",
        "visual6.name": "WHEN THE GRID FAILS",
        "visual6.title": "The Priority Order",
        "visual6.intro": "Not everything can keep running. Something has to be chosen.",
        "visual6.app1.tag": "T+0",
        "visual6.app1.title": "Grid Drops",
        "visual6.app1.desc": "The switchgear transfers to the generator or the UPS within seconds. The transmitter is the first thing switched off, because it is the biggest load and the least needed for a moment.",
        "visual6.app2.tag": "T+1min",
        "visual6.app2.title": "Survival Mode",
        "visual6.app2.desc": "On battery or generator power the radar reduces to the receiver, processor and display. No transmission, but the site still sees whatever is already in the air.",
        "visual6.app3.tag": "T+10min",
        "visual6.app3.title": "Shutdown",
        "visual6.app3.desc": "If the outage continues the site shuts down in a controlled order, cooling stopped last so the electronics can cool down as they go.",
        "visual6.app4.tag": "SAFE",
        "visual6.app4.title": "Why This Order",
        "visual6.app4.desc": "A warm magnetron is far harder to restart than a cold one, but damaging it is worse than losing coverage. The sequence is always built around not breaking hardware.",
        "visual6.app5.tag": "SITE",
        "visual6.app5.title": "Remote Sites",
        "visual6.app5.desc": "Offshore or mountain stations may have no grid at all, so a generator is the normal supply and a large battery bridges the start delay.",
        "visual6.app6.tag": "COST",
        "visual6.app6.title": "The Expensive Part",
        "visual6.app6.desc": "In many procurements the power, cooling and shelter cost more than the radar itself. That ratio is not widely known outside the industry.",
        "visual6.caption": "The backbone is invisible during normal operation, which is exactly why it is easy to under-budget.",
        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Power and cooling are the radar's backbone — they keep it running.",
        "article.meta": "Student Research · 2026",
        "article.back": "← Back to Articles",
    },

    zh: {
        "page.title": "文章 44：电源与冷却——雷达的后勤 — 雷达探索者",
        "page.description": "文章 44：大功率雷达的耗电量堪比一个小镇，而且大部分变成了热。电源、冷却回路、发电机与 UPS——没人会拍的那个部分。",
        "nav.home": "首页",
        "nav.articles": "文章",
        "article.author": "编辑部",
        "article.date": "2026年8月7日",
        "article.title": "电源与冷却——雷达的后勤",
        "article.subtitle": "没人会拍的那个部分，却是决定它能不能跑的那个部分。",
        "toc.title": "本页目录",
        "toc.s1": "电都去哪了",
        "toc.s2": "热量预算",
        "toc.s3": "冷却回路动画",
        "toc.s4": "计算示例",
        "toc.s5": "为什么越做越大",
        "toc.s6": "电网断电时",
        "article.p1": "雷达功率大，耗电多，发热也大。它怎么撑得住？",
        "article.p2": "电源：给发射机、接收机、信号处理、伺服供电。冷却：风冷、液冷，防止设备过热。像电脑打游戏，电源要够，散热要好，不然会卡会关机。",
        "article.p3": "大功率雷达的电源和冷却系统往往占很大体积。电源要稳，电压波动会影响雷达性能。冷却要可靠，过热会烧坏器件。",
        "article.p4": "有些雷达还要配发电机、UPS，保证不断电。后勤做不好，再好的雷达也发挥不出来。",
        "visual1.name": "电都去哪了",
        "visual1.title": "只有十分之一变成了无线电波",
        "visual1.intro": "雷达从电网取的电，远多于它打到空中的。其余全都变成了热。",
        "fig1.title": "从电网取 1 兆瓦，打到空中 100 千瓦",
        "fig1.grid": "电网",
        "fig1.in": "1 兆瓦",
        "fig1.tx": "发射机",
        "fig1.rf": "100 千瓦打到空中",
        "fig1.heat": "900 千瓦变成热",
        "fig1.rest": "接收 / 处理 / 伺服",
        "fig1.rest2": "约 150 千瓦",
        "fig1.heat2": "取来的电大约九成变成了热",
        "fig1.heat3": "冷却必须持续排走约 1 兆瓦",
        "fig1.note": "峰值，不是平均",
        "visual1.caption": "雷达只有在几微秒的时间里才「聪明」一次。其余时间，所有机械都在把电变成必须被搬走的热。",
        "visual2.name": "热量预算",
        "visual2.title": "怎么搬走一兆瓦的热",
        "visual2.intro": "热总得去个地方。去哪里，就是整个设计的核心。",
        "visual2.app1.tag": "风冷",
        "visual2.app1.title": "强制风冷",
        "visual2.app1.desc": "风扇把空气吹过滤网和换热器。简单、便宜、好维护——但空气单位体积带走的热量远少于水，所以需要极大的风量。",
        "visual2.app2.tag": "水冷",
        "visual2.app2.title": "液冷回路",
        "visual2.app2.desc": "水单位体积的携热能力大约是空气的 4000 倍。大多数大功率装置都用液冷回路，尽管最后排热往往还是排到空气里。",
        "visual2.app3.tag": "闭式",
        "visual2.app3.title": "封闭回路",
        "visual2.app3.desc": "冷却液不离开机房，由外部散热片把热排到大气里。现代天气雷达在罩体内部就是这么做的。",
        "visual2.app4.tag": "冷色",
        "visual2.app4.title": "为什么罩体是白的",
        "visual2.app4.desc": "罩体刷白是有原因的。那样大的一个深色穹顶，在无风的晴天晒太阳，会额外增加几十千瓦热量。",
        "visual2.app5.tag": "极限",
        "visual2.app5.title": "夏天峰值",
        "visual2.app5.desc": "冷却能力是按一年最热的那一天设计的，不是按平均。炎热的无风午后，余量比任何时候都小。",
        "visual2.app6.tag": "停泵",
        "visual2.app6.title": "泵一停就完",
        "visual2.app6.desc": "冷却泵一停，几分钟内雷达就下线。多数站点对冷却液温度的监控，和对发射机的监控一样紧。",
        "visual2.caption": "水进去，空气出来。之所以要这道回路，是因为空气导热差，而罩体又是一个极大的散热面。",
        "visual3.name": "动画：冷却回路",
        "visual3.title": "看热量离开机房",
        "visual3.intro": "跟着一份热量，从发射机一路走到外面的空气里。",
        "visual3.fallback": "你的浏览器不支持 video 标签。",
        "visual3.cc1": "1. 产生——发射机不只产生波，也产生热",
        "visual3.cc2": "2. 吸收——冷却液在冷板处接住它",
        "visual3.cc3": "3. 输送——水泵把它推过整条回路",
        "visual3.cc4": "4. 排出——散热片把它交给外面的空气",
        "visual3.caption": "闭式回路不耗水，但依赖水泵一直转。每一段都是可能的故障点。",
        "visual4.name": "计算示例",
        "visual4.title": "一部雷达的电费单",
        "visual4.intro": "一部典型的大功率天气雷达，以及每一度电都去了哪。",
        "visual4.row1.label": "发射机峰值",
        "visual4.row1.value": "800 千瓦",
        "visual4.row2.label": "占空比",
        "visual4.row2.value": "0.2%——开 2 毫秒，关 1 秒",
        "visual4.row3.label": "发射机平均",
        "visual4.row3.value": "1.6 千瓦",
        "visual4.row4.label": "电子设备 + 伺服",
        "visual4.row4.value": "40 千瓦，连续",
        "visual4.row5.label": "冷却与损耗",
        "visual4.row5.value": "25 千瓦，连续",
        "visual4.row6.label": "全站合计",
        "visual4.row6.value": "约 65 千瓦 → 一年 570 兆瓦时",
        "visual4.caption": "峰值是冷却必须瞬间扛住的，平均值是电费单上看到的。两者差了两千倍。",
        "visual5.name": "为什么越做越大",
        "visual5.title": "质量是有物理尺寸的",
        "visual5.intro": "雷达里没有哪一部分能做到完美，因为完美需要无穷大的质量。",
        "visual5.app1.tag": "UPS",
        "visual5.app1.title": "续电",
        "visual5.app1.desc": "雷达不能随便停机再开：电子管预热要几分钟，值班员也会丢掉画面。电池大约能撑十分钟。",
        "visual5.app2.tag": "发电机",
        "visual5.app2.title": "柴发",
        "visual5.app2.desc": "站内的柴油机组在市电故障时接管。它必须能启动、有油、能无人值守运行数小时——所以要定期试车。",
        "visual5.app3.tag": "稳压",
        "visual5.app3.title": "电压调节",
        "visual5.app3.desc": "磁控管的输出频率和功率取决于阳极电压。电网电压跌几个百分点，就变成发射波的可见偏移。",
        "visual5.app4.tag": "浪涌",
        "visual5.app4.title": "启辉冲击",
        "visual5.app4.desc": "磁控管起辉时会在极短时间内抽走很大一股电流。供电设备是按这个冲击选的型，不是按平均负载。",
        "visual5.app5.tag": "接地",
        "visual5.app5.title": "接地",
        "visual5.app5.desc": "罩体坐在有独立接地极的混凝土基础上。它保护结构，也保证射频地平面一致。",
        "visual5.app6.tag": "占地",
        "visual5.app6.title": "看不见的一半",
        "visual5.app6.desc": "大功率雷达的配套机房往往比塔本身还大。馈线、冷却设备、发电机和备件都在里面。",
        "visual5.caption": "雷达最先进的部分，往往根本不在塔上，而在塔旁边的小屋里。",
        "visual6.name": "电网断电时",
        "visual6.title": "关停的优先级",
        "visual6.intro": "不是所有东西都能继续跑。总得做出选择。",
        "visual6.app1.tag": "T+0",
        "visual6.app1.title": "市电断开",
        "visual6.app1.desc": "配电柜在几秒内切到发电机或 UPS。第一个被切掉的是发射机，因为它负载最大，而且短时间最不需要它。",
        "visual6.app2.tag": "T+1 分",
        "visual6.app2.title": "生存模式",
        "visual6.app2.desc": "在电池或发电机供电下，雷达降级到接收机、处理机和显示器。不发射，但站点仍能看到空中的目标。",
        "visual6.app3.tag": "T+10 分",
        "visual6.app3.title": "有序停机",
        "visual6.app3.desc": "如果停电持续，站点按受控顺序停机：冷却最后停，好让电子设备边走边降温。",
        "visual6.app4.tag": "安全",
        "visual6.app4.title": "为什么是这个顺序",
        "visual6.app4.desc": "热的磁控管比冷的难启动得多，但烧坏它比丢覆盖更严重。整个顺序都是围绕「别把硬件弄坏」设计的。",
        "visual6.app5.tag": "偏远站点",
        "visual6.app5.title": "偏远站点",
        "visual6.app5.desc": "海上或高山站点可能根本没有市电，发电机就是常规电源，再由大电池跨越启动延迟。",
        "visual6.app6.tag": "成本",
        "visual6.app6.title": "最贵的那部分",
        "visual6.app6.desc": "在很多采购项目里，电源、冷却和机房的花费高于雷达本体。这个比例在行业外并不广为人知。",
        "visual6.caption": "后勤在正常运行时完全看不见——这正是它容易被低估的原因。",
        "article.summaryLabel": "一句话总结",
        "article.summary": "电源与冷却是雷达的后勤，保障整机稳定工作。",
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
