/* =========================

   ARTICLE 12 — How Does Radar Calculate Distance?

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
        "page.title": "Article 12: How Does Radar Calculate Distance? \u2014 Radar Explorer",
        "page.description": "Article 12: How does radar calculate distance? A bilingual student-friendly explainer of the speed-of-light round-trip formula.",

        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",

        "article.author": "By Editorial",
        "article.date": "Sept 20, 2026",

        "toc.title": "On this page",
        "toc.s1": "The round-trip formula",
        "toc.s2": "Why divide by two",
        "toc.s3": "Round-trip animation",
        "toc.s4": "Worked example",
        "toc.s5": "Timing precision",
        "toc.s6": "Real-world details",

        "article.title": "How Does Radar Calculate Distance?",
        "article.subtitle": "A radar screen shows how far away a target is. How does it calculate that?",

        "article.p1": "A radar screen shows how far away a target is. How does it calculate that? The answer is in time.",
        "article.p2": "The radar records the time between sending a signal and receiving the echo. Radio waves travel at the speed of light, about 300,000 km per second. Distance = speed of light \u00d7 time \u00f7 2. We divide by 2 because the wave goes there and comes back \u2014 a round trip.",
        "article.p3": "Shorter time means a closer target; longer time means a farther target. For example, if the echo takes 0.001 seconds, the distance is about 150 km. Radar timing must be extremely precise \u2014 a tiny error means a big distance error.",
        "article.p4": "In reality, signal processing, clock sync, and atmospheric effects all matter. So radar ranging is not simple multiplication \u2014 it\u2019s a whole precise system working together.",

        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Radar uses time difference to calculate distance: speed of light \u00d7 time \u00f7 2.",
        "article.back": "\u2190 Back to Articles",
        "article.meta": "Student Research \u00b7 2026",

        "fig1.title": "Radar round-trip time diagram",
        "fig1.radar": "RADAR",
        "fig1.aircraft": "AIRCRAFT",
        "fig1.t0": "t = 0",
        "fig1.thalf": "t = t/2",
        "fig1.t": "t = total time",
        "fig1.d1": "distance d",
        "fig1.d2": "distance d",
        "fig1.dtotal": "2d = c \u00d7 t",

        "visual1.num": "01",
        "visual1.name": "THE ROUND-TRIP FORMULA",
        "visual1.title": "Distance = speed of light \u00d7 time \u00f7 2",
        "visual1.intro": "The radar records the time between sending a signal and receiving the echo. With the speed of light known, distance follows directly from time.",
        "visual1.caption": "The wave travels from radar to aircraft (distance d), bounces, and returns (another d). The total path is 2d, so distance = c\u00d7t \u00f7 2.",

        "fig2.title": "Single-trip vs round-trip",
        "fig2.left.label": "IF WAVE STOPPED AT TARGET",
        "fig2.left.radar": "RADAR",
        "fig2.left.target": "TARGET",
        "fig2.left.dist": "d",
        "fig2.left.formula": "d = c \u00d7 t",
        "fig2.right.label": "REAL RADAR: ROUND TRIP",
        "fig2.right.radar": "RADAR",
        "fig2.right.target": "TARGET",
        "fig2.right.out": "out: d",
        "fig2.right.back": "back: d",
        "fig2.right.formula": "d = c \u00d7 t \u00f7 2",

        "visual2.num": "02",
        "visual2.name": "WHY DIVIDE BY TWO",
        "visual2.title": "Because the Wave Makes a Round Trip",
        "visual2.intro": "The measured time covers both the trip out and the trip back. The path is twice the one-way distance.",
        "visual2.caption": "The wave goes out and comes back. The measured time covers 2d, not just d \u2014 so we divide by 2.",

        "visual3.num": "03",
        "visual3.name": "ANIMATION: TIME AXIS \u2192 DISTANCE",
        "visual3.title": "Watch the Round Trip on a Time Axis",
        "visual3.intro": "Watch the wave leave the radar, hit the target, and return. The time between send and receive \u2014 divided by 2 \u2014 gives the one-way distance.",
        "visual3.fallback": "Your browser does not support embedded video. The animation shows: a radar emits a wave, the wave travels to the target, bounces back, and the radar computes distance = c \u00d7 t \u00f7 2.",
        "visual3.cc1": "1. SEND \u2014 radar emits the pulse at t=0",
        "visual3.cc2": "2. TRAVEL \u2014 wave covers distance d at the speed of light",
        "visual3.cc3": "3. ECHO \u2014 wave returns the same distance d",
        "visual3.cc4": "4. COMPUTE \u2014 distance = c \u00d7 t \u00f7 2",
        "visual3.caption": "The wave makes a round trip. The radar measures the time and divides by 2 to get the one-way distance.",

        "visual4.num": "04",
        "visual4.name": "WORKED EXAMPLE",
        "visual4.title": "If the Echo Takes 0.001 s, How Far Is the Target?",
        "visual4.intro": "Plug the numbers into the formula and the answer comes out directly.",
        "visual4.row1.label": "Speed of light c",
        "visual4.row1.value": "300,000 km/s",
        "visual4.row2.label": "Round-trip time t",
        "visual4.row2.value": "0.001 s (1 ms)",
        "visual4.row3.label": "Distance",
        "visual4.row3.formula": "c \u00d7 t \u00f7 2",
        "visual4.row4.label": "Distance",
        "visual4.row4.value": "150 km",
        "visual4.caption": "Plugging numbers in: 300,000 \u00d7 0.001 \u00f7 2 = 150 km.",

        "fig5.title": "Timing precision vs distance error",
        "fig5.row1.label": "1 \u03bcs error",
        "fig5.row1.value": "\u00b1150 m",
        "fig5.row2.label": "1 ns error",
        "fig5.row2.value": "\u00b115 cm",
        "fig5.row3.label": "10 ns error",
        "fig5.row3.value": "\u00b11.5 m",

        "visual5.num": "05",
        "visual5.name": "WHY TIMING MATTERS",
        "visual5.title": "A Tiny Timing Error Becomes a Big Distance Error",
        "visual5.intro": "Light is very fast, so even nanosecond-level clock errors translate into meters of range error.",
        "visual5.caption": "Because c is so large, even nanosecond errors translate into meters. Radar clocks must be very stable.",

        "visual6.num": "06",
        "visual6.name": "REAL-WORLD DETAILS",
        "visual6.title": "In Reality, Radar Has to Handle More Than One Echo",
        "visual6.intro": "The simple formula holds, but a real radar system layers signal processing, clock sync, atmospheric correction, and target separation on top.",
        "visual6.c1.t": "Clock Synchronization",
        "visual6.c1.d": "The transmit and receive timestamps must come from the same time base. Any drift becomes a distance error.",
        "visual6.c2.t": "Atmospheric Refraction",
        "visual6.c2.d": "Radio waves don\u2019t travel at exactly c through air. Humidity, temperature, and pressure all slow the wave slightly.",
        "visual6.c3.t": "Signal Processing",
        "visual6.c3.d": "Real echoes are noisy. Filtering and correlation techniques pick the true round-trip time out of background noise.",
        "visual6.c4.t": "Multiple Targets",
        "visual6.c4.d": "Many echoes return at once. The radar separates them by time-of-arrival to map each to its own target."
    },

    zh: {
        "page.title": "\u7b2c12\u7bc7\uff1a\u96f7\u8fbe\u662f\u600e\u4e48\u7b97\u51fa\u8ddd\u79bb\u7684\uff1f\u2014 \u96f7\u8fbe\u63a2\u7d22\u8005",
        "page.description": "\u7b2c12\u7bc7\uff1a\u96f7\u8fbe\u662f\u600e\u4e48\u7b97\u51fa\u8ddd\u79bb\u7684\uff1f\u9762\u5411\u5b66\u751f\u7684\u4e2d\u82f1\u53cc\u8bed\u79d1\u666e\uff0c\u8bb2\u89e3\u5149\u901f\u53cc\u7a0b\u516c\u5f0f\u3002",

        "nav.home": "\u9996\u9875",
        "nav.learn": "\u5b66\u4e60",
        "nav.articles": "\u6587\u7ae0",
        "nav.explore": "\u63a2\u7d22",
        "nav.research": "\u7814\u7a76",
        "nav.about": "\u5173\u4e8e",

        "article.author": "\u4f5c\u8005\uff1a\u5c0f\u7f16",
        "article.date": "2026\u5e749\u670820\u65e5",

        "toc.title": "\u672c\u9875\u76ee\u5f55",
        "toc.s1": "\u53cc\u7a0b\u516c\u5f0f",
        "toc.s2": "\u4e3a\u4ec0\u4e48\u8981\u9664\u4ee5\u4e8c",
        "toc.s3": "\u53cc\u7a0b\u52a8\u753b",
        "toc.s4": "\u8be6\u89e3\u4f8b\u9898",
        "toc.s5": "\u8ba1\u65f6\u7cbe\u5ea6",
        "toc.s6": "\u73b0\u5b9e\u95ee\u9898",

        "article.title": "\u96f7\u8fbe\u662f\u600e\u4e48\u7b97\u51fa\u8ddd\u79bb\u7684\uff1f",
        "article.subtitle": "\u96f7\u8fbe\u5c4f\u5e55\u4e0a\u80fd\u663e\u793a\u76ee\u6807\u6709\u591a\u8fdc\uff0c\u5b83\u662f\u600e\u4e48\u7b97\u51fa\u6765\u7684\uff1f",

        "article.p1": "\u96f7\u8fbe\u5c4f\u5e55\u4e0a\u80fd\u663e\u793a\u76ee\u6807\u6709\u591a\u8fdc\uff0c\u5b83\u662f\u600e\u4e48\u7b97\u51fa\u6765\u7684\uff1f\u7b54\u6848\u85cf\u5728\u201c\u65f6\u95f4\u201d\u91cc\u3002",
        "article.p2": "\u96f7\u8fbe\u8bb0\u5f55\u53d1\u51fa\u4fe1\u53f7\u5230\u6536\u5230\u56de\u6ce2\u7684\u65f6\u95f4\u3002\u7535\u78c1\u6ce2\u901f\u5ea6\u7b49\u4e8e\u5149\u901f\uff0c\u7ea6\u6bcf\u79d230\u4e07\u516c\u91cc\u3002\u8ddd\u79bb = \u5149\u901f \u00d7 \u65f6\u95f4 \u00f7 2\u3002\u9664\u4ee5 2 \u662f\u56e0\u4e3a\u6ce2\u53bb\u4e86\u4e00\u5e3d\u3001\u53c8\u56de\u6765\u4e00\u5e3d\uff0c\u8d70\u7684\u662f\u53cc\u7a0b\u3002",
        "article.p3": "\u65f6\u95f4\u8d8a\u77ed\uff0c\u76ee\u6807\u8d8a\u8fd1\uff1b\u65f6\u95f4\u8d8a\u957f\uff0c\u76ee\u6807\u8d8a\u8fdc\u3002\u6bd4\u5982\u56de\u6ce2\u7528\u4e860.001\u79d2\uff0c\u8ddd\u79bb\u5c31\u662f\u7ea6 150 \u516c\u91cc\u3002\u96f7\u8fbe\u8ba1\u65f6\u7cbe\u5ea6\u8981\u6c42\u6781\u9ad8\uff0c\u5dee\u4e00\u70b9\u70b9\uff0c\u8ddd\u79bb\u5c31\u5dee\u5f88\u591a\u3002",
        "article.p4": "\u5b9e\u9645\u4e2d\u8fd8\u8981\u8003\u8651\u4fe1\u53f7\u5904\u7406\u3001\u65f6\u949f\u540c\u6b65\u3001\u5927\u6c14\u5f71\u54cd\u7b49\u3002\u6240\u4ee5\u96f7\u8fbe\u6d4b\u8ddd\u4e0d\u662f\u7b80\u5355\u4e58\u6cd5\uff0c\u800c\u662f\u4e00\u6574\u5957\u7cbe\u5bc6\u7cfb\u7edf\u5728\u914d\u5408\u3002",

        "article.summaryLabel": "\u4e00\u53e5\u8bdd\u603b\u7ed3",
        "article.summary": "\u96f7\u8fbe\u7528\u201c\u65f6\u95f4\u5dee\u201d\u7b97\u51fa\u76ee\u6807\u8ddd\u79bb\uff0c\u516c\u5f0f\u662f\u5149\u901f\u00d7\u65f6\u95f4\u00f72\u3002",
        "article.back": "\u2190 \u8fd4\u56de\u6587\u7ae0\u5217\u8868",
        "article.meta": "\u5b66\u751f\u7814\u7a76 \u00b7 2026",

        "fig1.title": "\u96f7\u8fbe\u53cc\u7a0b\u65f6\u95f4\u793a\u610f\u56fe",
        "fig1.radar": "\u96f7\u8fbe",
        "fig1.aircraft": "\u98de\u673a",
        "fig1.t0": "t = 0",
        "fig1.thalf": "t = t/2",
        "fig1.t": "t = \u603b\u65f6\u95f4",
        "fig1.d1": "\u8ddd\u79bb d",
        "fig1.d2": "\u8ddd\u79bb d",
        "fig1.dtotal": "2d = c \u00d7 t",

        "visual1.num": "01",
        "visual1.name": "\u53cc\u7a0b\u516c\u5f0f",
        "visual1.title": "\u8ddd\u79bb = \u5149\u901f \u00d7 \u65f6\u95f4 \u00f7 2",
        "visual1.intro": "\u96f7\u8fbe\u8bb0\u5f55\u53d1\u51fa\u4fe1\u53f7\u548c\u6536\u5230\u56de\u6ce2\u7684\u65f6\u95f4\u3002\u5149\u901f\u662f\u5df2\u77e5\u7684\uff0c\u8ddd\u79bb\u5c31\u80fd\u4ece\u65f6\u95f4\u63a8\u51fa\u3002",
        "visual1.caption": "\u6ce2\u4ece\u96f7\u8fbe\u53d1\u51fa\uff0c\u98de\u5230\u98de\u673a\uff08\u8ddd\u79bb d\uff09\uff0c\u53cd\u5c04\u540e\u53c8\u56de\u5230\u96f7\u8fbe\uff08\u53e6\u4e00\u4e2a d\uff09\u3002\u603b\u8def\u5f84\u662f 2d\uff0c\u6240\u4ee5\u8ddd\u79bb = c\u00d7t \u00f7 2\u3002",

        "fig2.title": "\u5355\u7a0b vs \u53cc\u7a0b",
        "fig2.left.label": "\u5982\u679c\u6ce2\u5230\u76ee\u6807\u5c31\u505c",
        "fig2.left.radar": "\u96f7\u8fbe",
        "fig2.left.target": "\u76ee\u6807",
        "fig2.left.dist": "d",
        "fig2.left.formula": "d = c \u00d7 t",
        "fig2.right.label": "\u73b0\u5b9e\u96f7\u8fbe\uff1a\u53cc\u7a0b",
        "fig2.right.radar": "\u96f7\u8fbe",
        "fig2.right.target": "\u76ee\u6807",
        "fig2.right.out": "\u53bb\uff1ad",
        "fig2.right.back": "\u56de\uff1ad",
        "fig2.right.formula": "d = c \u00d7 t \u00f7 2",

        "visual2.num": "02",
        "visual2.name": "\u4e3a\u4ec0\u4e48\u8981\u9664\u4ee5\u4e8c",
        "visual2.title": "\u56e0\u4e3a\u6ce2\u8d70\u4e86\u4e00\u4e2a\u53cc\u7a0b",
        "visual2.intro": "\u6d4b\u91cf\u7684\u65f6\u95f4\u8986\u76d6\u4e86\u53bb\u8fd9\u4e00\u7a0b\u548c\u8fd4\u56de\u4e00\u7a0b\u3002\u603b\u8def\u5f84\u662f\u5355\u7a0b\u8ddd\u79bb\u7684\u4e24\u500d\u3002",
        "visual2.caption": "\u6ce2\u53bb\u4e86\u53c8\u56de\u6765\u3002\u6d4b\u91cf\u7684\u65f6\u95f4\u8986\u76d6 2d\uff0c\u4e0d\u53ea\u662f d\uff0c\u6240\u4ee5\u8981\u9664\u4ee5 2\u3002",

        "visual3.num": "03",
        "visual3.name": "\u52a8\u753b\uff1a\u65f6\u95f4\u8f74 \u2192 \u8ddd\u79bb",
        "visual3.title": "\u770b\u53cc\u7a0b\u5728\u65f6\u95f4\u8f74\u4e0a\u7684\u53d8\u5316",
        "visual3.intro": "\u770b\u6ce2\u4ece\u96f7\u8fbe\u53d1\u51fa\uff0c\u98de\u5411\u76ee\u6807\uff0c\u518d\u8fd4\u56de\u3002\u53d1\u5c04\u5230\u63a5\u6536\u7684\u65f6\u95f4\u5dee\u9664\u4ee5 2\uff0c\u5c31\u662f\u5355\u7a0b\u8ddd\u79bb\u3002",
        "visual3.fallback": "\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5d4c\u5165\u89c6\u9891\u3002\u52a8\u753b\u5c55\u793a\uff1a\u96f7\u8fbe\u53d1\u51fa\u6ce2 \u2192 \u6ce2\u98de\u5411\u76ee\u6807 \u2192 \u53cd\u5c04\u56de\u6765 \u2192 \u96f7\u8fbe\u8ba1\u7b97\u8ddd\u79bb=c\u00d7t\u00f72\u3002",
        "visual3.cc1": "1. \u53d1\u5c04 \u2014 t=0 \u96f7\u8fbe\u53d1\u51fa\u8109\u51b2",
        "visual3.cc2": "2. \u4f20\u64ad \u2014 \u6ce2\u4ee5\u5149\u901f\u8986\u76d6\u8ddd\u79bb d",
        "visual3.cc3": "3. \u56de\u6ce2 \u2014 \u6ce2\u8fd4\u56de\u540c\u6837\u7684\u8ddd\u79bb d",
        "visual3.cc4": "4. \u8ba1\u7b97 \u2014 \u8ddd\u79bb = c \u00d7 t \u00f7 2",
        "visual3.caption": "\u6ce2\u8d70\u4e86\u4e00\u4e2a\u53cc\u7a0b\u3002\u96f7\u8fbe\u6d4b\u91cf\u65f6\u95f4\u540e\u9664\u4ee5 2\uff0c\u5c31\u662f\u5355\u7a0b\u8ddd\u79bb\u3002",

        "visual4.num": "04",
        "visual4.name": "\u8be6\u89e3\u4f8b\u9898",
        "visual4.title": "\u56de\u6ce2\u7528\u4e860.001\u79d2\uff0c\u76ee\u6807\u6709\u591a\u8fdc\uff1f",
        "visual4.intro": "\u628a\u6570\u636e\u4ee3\u5165\u516c\u5f0f\uff0c\u7ed3\u679c\u76f4\u63a5\u51fa\u6765\u3002",
        "visual4.row1.label": "\u5149\u901f c",
        "visual4.row1.value": "300,000 \u516c\u91cc/\u79d2",
        "visual4.row2.label": "\u53cc\u7a0b\u65f6\u95f4 t",
        "visual4.row2.value": "0.001 \u79d2\uff081 ms\uff09",
        "visual4.row3.label": "\u8ddd\u79bb",
        "visual4.row3.formula": "c \u00d7 t \u00f7 2",
        "visual4.row4.label": "\u8ddd\u79bb",
        "visual4.row4.value": "150 \u516c\u91cc",
        "visual4.caption": "\u4ee3\u5165\u6570\u636e\uff1a300,000 \u00d7 0.001 \u00f7 2 = 150 \u516c\u91cc\u3002",

        "fig5.title": "\u8ba1\u65f6\u7cbe\u5ea6\u4e0e\u8ddd\u79bb\u8bef\u5dee",
        "fig5.row1.label": "1 \u5fae\u79d2\u8bef\u5dee",
        "fig5.row1.value": "\u00b1150 \u7c73",
        "fig5.row2.label": "1 \u7eb3\u79d2\u8bef\u5dee",
        "fig5.row2.value": "\u00b115 \u5398\u7c73",
        "fig5.row3.label": "10 \u7eb3\u79d2\u8bef\u5dee",
        "fig5.row3.value": "\u00b11.5 \u7c73",

        "visual5.num": "05",
        "visual5.name": "\u4e3a\u4ec0\u4e48\u8ba1\u65f6\u7cbe\u5ea6\u91cd\u8981",
        "visual5.title": "\u5fae\u5c0f\u7684\u8ba1\u65f6\u8bef\u5dee\u4f1a\u53d8\u6210\u5de8\u5927\u7684\u8ddd\u79bb\u8bef\u5dee",
        "visual5.intro": "\u5149\u901f\u5f88\u5feb\uff0c\u5373\u4f7f\u662f\u7eb3\u79d2\u7ea7\u522b\u7684\u65f6\u949f\u8bef\u5dee\uff0c\u4e5f\u4f1a\u53d8\u6210\u51e0\u7c73\u7684\u8ddd\u79bb\u8bef\u5dee\u3002",
        "visual5.caption": "\u5149\u901f\u5f88\u5927\uff0c\u5373\u4f7f\u662f\u7eb3\u79d2\u7ea7\u522b\u7684\u65f6\u949f\u8bef\u5dee\uff0c\u4e5f\u4f1a\u53d8\u6210\u51e0\u7c73\u7684\u8ddd\u79bb\u8bef\u5dee\u3002\u96f7\u8fbe\u65f6\u949f\u5fc5\u987b\u975e\u5e38\u7a33\u5b9a\u3002",

        "visual6.num": "06",
        "visual6.name": "\u73b0\u5b9e\u95ee\u9898",
        "visual6.title": "\u73b0\u5b9e\u4e2d\u7684\u96f7\u8fbe\u8fd8\u8981\u5904\u7406\u66f4\u591a\u95ee\u9898",
        "visual6.intro": "\u8d77\u522b\u516c\u5f0f\u6709\u6548\uff0c\u4f46\u4e00\u4e2a\u771f\u5b9e\u7684\u96f7\u8fbe\u7cfb\u7edf\u8fd8\u8981\u53e0\u52a0\u4fe1\u53f7\u5904\u7406\u3001\u65f6\u949f\u540c\u6b65\u3001\u5927\u6c14\u4fee\u6b63\u3001\u591a\u76ee\u6807\u5206\u79bb\u7b49\u5c42\u3002",
        "visual6.c1.t": "\u65f6\u949f\u540c\u6b65",
        "visual6.c1.d": "\u53d1\u5c04\u548c\u63a5\u6536\u7684\u65f6\u95f4\u6233\u5fc5\u987b\u6765\u81ea\u540c\u4e00\u4e2a\u65f6\u95f4\u57fa\u51c6\u3002\u4efb\u4f55\u6f02\u79fb\u90fd\u4f1a\u53d8\u6210\u8ddd\u79bb\u8bef\u5dee\u3002",
        "visual6.c2.t": "\u5927\u6c14\u4fee\u6b63",
        "visual6.c2.d": "\u7535\u78c1\u6ce2\u5728\u7a7a\u6c14\u4e2d\u7684\u4f20\u64ad\u901f\u5ea6\u4e0d\u6b62\u662f\u5149\u901f\u3002\u6e7f\u5ea6\u3001\u6e29\u5ea6\u3001\u538b\u5f3a\u90fd\u4f1a\u8ba9\u6ce2\u7565\u51cf\u901f\u3002",
        "visual6.c3.t": "\u4fe1\u53f7\u5904\u7406",
        "visual6.c3.d": "\u73b0\u5b9e\u56de\u6ce2\u662f\u5e26\u566a\u58f0\u7684\u3002\u8fc7\u6ee4\u548c\u76f8\u5173\u6280\u672f\u4ece\u80cc\u666f\u566a\u58f0\u4e2d\u63d0\u53d6\u771f\u6b63\u7684\u53cc\u7a0b\u65f6\u95f4\u3002",
        "visual6.c4.t": "\u591a\u76ee\u6807\u60c5\u51b5",
        "visual6.c4.d": "\u4e00\u6b21\u53ef\u80fd\u540c\u65f6\u8fd4\u56de\u591a\u4e2a\u56de\u6ce2\u3002\u96f7\u8fbe\u6309\u5230\u8fbe\u65f6\u95f4\u4e0d\u540c\u5c06\u5176\u5206\u5f00\uff0c\u6bcf\u4e2a\u5bf9\u5e94\u4e00\u4e2a\u76ee\u6807\u3002"
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
    applyFilter();
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

/* =========================
   Search and filter (kept for
   compatibility with index,
   but no-op on this page since
   there's no list).
========================= */

function applyFilter() { /* no-op on article pages */ }

document.addEventListener("DOMContentLoaded", () => {
    applyI18n();
    hookLangToggle();
    keepVideoPlaying();
    hookVideoLangSync();
    initTocScrollSpy();
});
})();
