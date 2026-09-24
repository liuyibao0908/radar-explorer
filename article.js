/* =========================
   ARTICLE 11 — single-language i18n

   Behaviour matches the home page: at any moment, the page
   shows ONE language. Click the lang toggle → everything
   swaps to the other language.

   Dictionary is split into ARTICLE_I18N.en and
   ARTICLE_I18N.zh (both fully populated), NOT mixed keys.
========================= */

const ARTICLE_I18N = {

    en: {
        "page.title": "Article 11: Why Can Radar See Aircraft? — Radar Explorer",
        "page.description": "Article 11: Why can radar see aircraft? A student-friendly bilingual explainer with diagrams and animation.",

        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",

        "article.author": "By Editorial",
        "article.date": "Sept 19, 2026",

        "toc.title": "On this page",
        "toc.s1": "Radar wave reflection",
        "toc.s2": "Echo in a valley",
        "toc.s3": "The radar loop",
        "toc.s4": "Signal vs clutter",
        "toc.s5": "Process recap",
        "toc.s6": "Limitations",

        "article.title": "Why Can Radar See Aircraft?",
        "article.subtitle": "A radar has no eyes. So how can it find aircraft in the sky?",

        // 4-paragraph body, verbatim from the source article
        "article.p1": "A radar has no eyes. So how can it find aircraft in the sky? It doesn't use light \u2014 it uses radio waves.",
        "article.p2": "The radar sends out radio waves. These waves travel through the air and bounce off an aircraft. The wave that comes back is called an \u201cecho.\u201d When the radar receives the echo, it knows something is in that direction. Think of shouting in a valley \u2014 when you hear an echo, you know there is a hill or a wall ahead.",
        "article.p3": "Aircraft are made of metal and are large, so they reflect strongly. The echo is usually clear. A radar doesn't just \u201csee\u201d \u2014 it also measures distance, direction, and speed. If a target is too small, too far, or reflects too weakly, the radar may not see it.",
        "article.p4": "Weather, ground, and sea waves also reflect waves, creating \u201cclutter\u201d that must be filtered out. The basic flow is: send \u2014 reflect \u2014 receive \u2014 decide.",

        "article.summaryLabel": "ONE-LINE SUMMARY",
        "article.summary": "Radar finds aircraft by send-reflect-receive. The stronger the echo, the easier to find.",
        "article.back": "\u2190 Back to Radar Explorer",
        "article.meta": "Student Research \u00b7 2026",

        // Visual 1 — wave reflection diagram (figure + svg labels)
        "fig1.title": "Radar wave reflecting off an aircraft",
        "fig1.radar": "RADAR",
        "fig1.wave": "RADIO WAVE",
        "fig1.aircraft": "AIRCRAFT",
        "fig1.echo": "ECHO",
        "fig1.distance": "distance",

        "visual1.num": "01",
        "visual1.name": "RADAR WAVE REFLECTION",
        "visual1.title": "How a Radar Wave Bounces Off an Aircraft",
        "visual1.intro": "The radar sends out radio waves. These waves travel through the air and bounce off an aircraft. The wave that comes back is called an \u201cecho.\u201d",
        "visual1.caption": "Radar sends out a radio wave. The wave hits the aircraft and bounces back as an echo.",

        // Visual 2 — echo analogy
        "fig2.you": "YOU",
        "fig2.wall": "WALL",
        "fig2.radar": "RADAR",
        "fig2.aircraft": "AIRCRAFT",

        "visual2.num": "02",
        "visual2.name": "ANALOGY: ECHO IN A VALLEY",
        "visual2.title": "Like an Echo in a Valley",
        "visual2.intro": "Think of shouting in a valley \u2014 when you hear an echo, you know there is a hill or a wall ahead. Radar works the same way.",
        "visual2.left.tag": "SOUND ECHO",
        "visual2.right.tag": "RADAR ECHO",
        "visual2.caption": "Both sides show the same physics: send \u2192 hit wall or aircraft \u2192 bounce back.",

        // Visual 3 — Manim video + captions
        "visual3.num": "03",
        "visual3.name": "ANIMATION: SEND \u2192 REFLECT \u2192 RECEIVE \u2192 DECIDE",
        "visual3.title": "Watch the Radar Loop in Motion",
        "visual3.intro": "Each radar cycle has four steps: send a wave, let it reflect off a target, receive the echo, and decide what was detected. The loop then repeats \u2014 many times per second.",
        "visual3.fallback": "Your browser does not support embedded video. The animation shows: radar sends a wave \u2192 wave hits aircraft \u2192 echo returns \u2192 radar measures distance, direction and speed.",
        "visual3.cc1": "1. SEND \u2014 radar emits a radio wave",
        "visual3.cc2": "2. REFLECT \u2014 wave bounces off the aircraft",
        "visual3.cc3": "3. RECEIVE \u2014 radar catches the echo",
        "visual3.cc4": "4. DECIDE \u2014 distance, direction, speed",
        "visual3.caption": "The radar cycle. The animation loops automatically \u2014 the loop is the point.",

        // Visual 4 — signal vs clutter
        "fig4.title": "Aircraft echo vs clutter sources",
        "fig4.radar": "RADAR",
        "fig4.aircraft": "AIRCRAFT \u2014 STRONG ECHO",
        "fig4.rain": "RAIN \u2014 CLUTTER",
        "fig4.ground": "GROUND \u2014 CLUTTER",
        "fig4.sea": "SEA \u2014 CLUTTER",
        "fig4.legend.target": "real target",
        "fig4.legend.clutter": "clutter \u2014 filter out",

        "visual4.num": "04",
        "visual4.name": "SIGNAL vs CLUTTER",
        "visual4.title": "Strong Echo vs Background Clutter",
        "visual4.intro": "Weather, ground, and sea waves also reflect waves. They create \u201cclutter\u201d that the radar must filter out \u2014 only real targets like aircraft stay clear.",
        "visual4.caption": "Strong echoes (aircraft) are kept; weak echoes (rain, ground, sea) are filtered as clutter.",

        // Process recap
        "process.num": "05",
        "process.name": "PROCESS RECAP",
        "process.title": "The Radar Flow, in Four Steps",
        "process.intro": "Whether you are detecting a single aircraft or scanning the whole sky, every radar cycle follows the same four-step flow.",
        "process.s1.t": "SEND",
        "process.s1.d": "The radar emits a pulse of electromagnetic energy.",
        "process.s2.t": "REFLECT",
        "process.s2.d": "The wave hits an object and part of the energy bounces back.",
        "process.s3.t": "RECEIVE",
        "process.s3.d": "The radar antenna picks up the echo.",
        "process.s4.t": "DECIDE",
        "process.s4.d": "Distance, direction and speed are measured and reported.",

        // Limitations
        "limits.num": "06",
        "limits.name": "LIMITATIONS",
        "limits.title": "When Radar Cannot See",
        "limits.intro": "A radar doesn't just \u201csee\u201d \u2014 it also measures distance, direction, and speed. If a target is too small, too far, or reflects too weakly, the radar may not see it.",
        "limits.l1.t": "Too Small",
        "limits.l1.d": "A tiny drone or a bird may not return enough echo to be detected at long range.",
        "limits.l2.t": "Too Far",
        "limits.l2.d": "Beyond the radar's maximum range, echoes become too weak to distinguish from noise.",
        "limits.l3.t": "Too Weak",
        "limits.l3.d": "Materials that don't reflect radio waves well \u2014 like stealth coatings \u2014 can hide a target.",
        "limits.l4.t": "Buried in Clutter",
        "limits.l4.d": "If the echo is hidden inside strong clutter, the radar must filter very carefully to find it."
    },

    zh: {
        "page.title": "\u7b2c11\u7bc7\uff1a\u96f7\u8fbe\u4e3a\u4ec0\u4e48\u80fd\u770b\u89c1\u98de\u673a\uff1f\u2014 \u96f7\u8fbe\u63a2\u7d22\u8005",
        "page.description": "\u7b2c11\u7bc7\uff1a\u96f7\u8fbe\u4e3a\u4ec0\u4e48\u80fd\u770b\u89c1\u98de\u673a\uff1f\u9762\u5411\u5b66\u751f\u7684\u4e2d\u82f1\u53cc\u8bed\u79d1\u666e\uff0c\u914d\u793a\u610f\u56fe\u4e0e\u52a8\u753b\u3002",

        "nav.home": "\u9996\u9875",
        "nav.learn": "\u5b66\u4e60",
        "nav.articles": "\u6587\u7ae0",
        "nav.explore": "\u63a2\u7d22",
        "nav.research": "\u7814\u7a76",
        "nav.about": "\u5173\u4e8e",

        "article.author": "\u4f5c\u8005\uff1a\u5c0f\u7f16",
        "article.date": "2026\u5e749\u670819\u65e5",

        "toc.title": "\u672c\u9875\u76ee\u5f55",
        "toc.s1": "\u96f7\u8fbe\u6ce2\u53cd\u5c04",
        "toc.s2": "\u5c71\u8c37\u91cc\u7684\u56de\u58f0",
        "toc.s3": "\u96f7\u8fbe\u5faa\u73af\u52a8\u753b",
        "toc.s4": "\u56de\u6ce2 vs \u6742\u6ce2",
        "toc.s5": "\u6d41\u7a0b\u56de\u987e",
        "toc.s6": "\u5c40\u9650",

        "article.title": "\u96f7\u8fbe\u4e3a\u4ec0\u4e48\u80fd\u770b\u89c1\u98de\u673a\uff1f",
        "article.subtitle": "\u96f7\u8fbe\u6ca1\u6709\u773c\u775b\u3002\u5b83\u600e\u4e48\u53d1\u73b0\u5929\u4e0a\u7684\u98de\u673a\uff1f",

        // 4 \u4e2d\u6587\u6bb5\u843d\uff0c\u539f\u6587\u9010\u5b57
        "article.p1": "\u96f7\u8fbe\u6ca1\u6709\u773c\u775b\uff0c\u4e3a\u4ec0\u4e48\u80fd\u53d1\u73b0\u5929\u4e0a\u7684\u98de\u673a\uff1f\u5b83\u9760\u7684\u4e0d\u662f\u5149\uff0c\u800c\u662f\u7535\u78c1\u6ce2\u3002",
        "article.p2": "\u96f7\u8fbe\u53d1\u51fa\u7535\u78c1\u6ce2\uff0c\u7535\u78c1\u6ce2\u5728\u7a7a\u6c14\u4e2d\u4f20\u64ad\uff0c\u78b0\u5230\u98de\u673a\u4f1a\u53cd\u5c04\u56de\u6765\u3002\u53cd\u5c04\u56de\u6765\u7684\u6ce2\u53eb\u201c\u56de\u6ce2\u201d\uff0c\u96f7\u8fbe\u6536\u5230\u56de\u6ce2\uff0c\u5c31\u77e5\u9053\u90a3\u4e2a\u65b9\u5411\u6709\u4e1c\u897f\u3002\u5c31\u50cf\u5728\u5c71\u8c37\u91cc\u559a\u4e00\u58f0\uff0c\u542c\u5230\u56de\u58f0\uff0c\u5c31\u77e5\u9053\u5bf9\u9762\u6709\u5c71\u6216\u5899\u3002",
        "article.p3": "\u98de\u673a\u662f\u91d1\u5c5e\u505a\u7684\uff0c\u4f53\u79ef\u5927\uff0c\u53cd\u5c04\u80fd\u529b\u5f3a\uff0c\u6240\u4ee5\u56de\u6ce2\u901a\u5e38\u6bd4\u8f83\u660e\u663e\u3002\u96f7\u8fbe\u4e0d\u53ea\u662f\u201c\u770b\u89c1\u201d\uff0c\u8fd8\u80fd\u6d4b\u51fa\u8ddd\u79bb\u3001\u65b9\u5411\u3001\u901f\u5ea6\u3002\u5982\u679c\u76ee\u6807\u592a\u5c0f\u3001\u592a\u8fdc\uff0c\u6216\u8005\u53cd\u5c04\u592a\u5f31\uff0c\u96f7\u8fbe\u4e5f\u53ef\u80fd\u770b\u4e0d\u5230\u3002",
        "article.p4": "\u5929\u6c14\u3001\u5730\u9762\u3001\u6d77\u6d6a\u4e5f\u4f1a\u53cd\u5c04\u6ce2\uff0c\u5f62\u6210\u201c\u6742\u6ce2\u201d\uff0c\u9700\u8981\u5904\u7406\u6389\u3002\u96f7\u8fbe\u7684\u5de5\u4f5c\u6d41\u7a0b\u53ef\u4ee5\u7b80\u5355\u8bb0\u6210\uff1a\u53d1\u5c04\u2014\u53cd\u5c04\u2014\u63a5\u6536\u2014\u5224\u65ad\u3002",

        "article.summaryLabel": "\u4e00\u53e5\u8bdd\u603b\u7ed3",
        "article.summary": "\u96f7\u8fbe\u9760\u201c\u53d1\u5c04\u2014\u53cd\u5c04\u2014\u63a5\u6536\u201d\u53d1\u73b0\u98de\u673a\uff0c\u56de\u6ce2\u8d8a\u5f3a\u8d8a\u5bb9\u6613\u88ab\u53d1\u73b0\u3002",
        "article.back": "\u2190 \u8fd4\u56de\u96f7\u8fbe\u63a2\u7d22\u8005\u9996\u9875",
        "article.meta": "\u5b66\u751f\u7814\u7a76 \u00b7 2026",

        "fig1.title": "\u96f7\u8fbe\u6ce2\u53cd\u5c04\u98de\u673a",
        "fig1.radar": "\u96f7\u8fbe",
        "fig1.wave": "\u7535\u78c1\u6ce2",
        "fig1.aircraft": "\u98de\u673a",
        "fig1.echo": "\u56de\u6ce2",
        "fig1.distance": "\u8ddd\u79bb",

        "visual1.num": "01",
        "visual1.name": "\u96f7\u8fbe\u6ce2\u53cd\u5c04",
        "visual1.title": "\u7535\u78c1\u6ce2\u600e\u4e48\u4ece\u98de\u673a\u4e0a\u5f39\u56de\u6765",
        "visual1.intro": "\u96f7\u8fbe\u5411\u7a7a\u4e2d\u53d1\u5c04\u7535\u78c1\u6ce2\u3002\u6ce2\u5728\u7a7a\u4e2d\u4f20\u64ad\uff0c\u78b0\u5230\u98de\u673a\u540e\u4f1a\u88ab\u53cd\u5f39\u3002\u8fd4\u56de\u7684\u6ce2\u53eb\u201c\u56de\u6ce2\u201d\u3002",
        "visual1.caption": "\u96f7\u8fbe\u53d1\u5c04\u7535\u78c1\u6ce2 \u2192 \u6ce2\u78b0\u5230\u98de\u673a \u2192 \u56de\u6ce2\u8fd4\u56de\u3002",

        "fig2.you": "\u4f60",
        "fig2.wall": "\u5c71\u5899",
        "fig2.radar": "\u96f7\u8fbe",
        "fig2.aircraft": "\u98de\u673a",

        "visual2.num": "02",
        "visual2.name": "\u7c7b\u6bd4\uff1a\u5c71\u8c37\u91cc\u7684\u56de\u58f0",
        "visual2.title": "\u5c31\u50cf\u5c71\u8c37\u91cc\u7684\u56de\u58f0",
        "visual2.intro": "\u5728\u5c71\u8c37\u91cc\u559a\u4e00\u58f0\uff0c\u542c\u5230\u56de\u58f0\u5c31\u77e5\u9053\u5bf9\u9762\u6709\u5c71\u6216\u5899\u3002\u96f7\u8fbe\u7528\u540c\u6837\u7684\u65b9\u5f0f\u5de5\u4f5c\u3002",
        "visual2.left.tag": "\u58f0\u97f3\u56de\u58f0",
        "visual2.right.tag": "\u96f7\u8fbe\u56de\u6ce2",
        "visual2.caption": "\u4e24\u4fa7\u7684\u7269\u7406\u8fc7\u7a0b\u662f\u76f8\u4f3c\u7684\uff1a\u53d1\u51fa \u2192 \u649e\u5899/\u98de\u673a \u2192 \u53cd\u5f39\u56de\u6765\u3002",

        "visual3.num": "03",
        "visual3.name": "\u52a8\u753b\uff1a\u53d1\u5c04 \u2192 \u53cd\u5c04 \u2192 \u63a5\u6536 \u2192 \u5224\u65ad",
        "visual3.title": "\u770b\u96f7\u8fbe\u7684\u5faa\u73af\u52a8\u753b",
        "visual3.intro": "\u6bcf\u4e00\u6b21\u96f7\u8fbe\u626b\u63cf\u90fd\u5305\u542b\u56db\u4e2a\u6b65\u9aa4\uff1a\u53d1\u5c04\u6ce2\u3001\u76ee\u6807\u53cd\u5c04\u3001\u63a5\u6536\u56de\u6ce2\u3001\u5224\u65ad\u7ed3\u679c\u3002\u6574\u4e2a\u5faa\u73af\u6bcf\u79d2\u91cd\u590d\u5f88\u591a\u6b21\u3002",
        "visual3.fallback": "\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5d4c\u5165\u89c6\u9891\u3002\u52a8\u753b\u5c55\u793a\uff1a\u96f7\u8fbe\u53d1\u5c04\u6ce2 \u2192 \u6ce2\u78b0\u5230\u98de\u673a \u2192 \u56de\u6ce2\u8fd4\u56de \u2192 \u96f7\u8fbe\u6d4b\u51fa\u8ddd\u79bb\u3001\u65b9\u5411\u3001\u901f\u5ea6\u3002",
        "visual3.cc1": "1. \u53d1\u5c04 \u2014 \u96f7\u8fbe\u53d1\u51fa\u7535\u78c1\u6ce2",
        "visual3.cc2": "2. \u53cd\u5c04 \u2014 \u6ce2\u4ece\u98de\u673a\u53cd\u5f39",
        "visual3.cc3": "3. \u63a5\u6536 \u2014 \u96f7\u8fbe\u6355\u83b7\u56de\u6ce2",
        "visual3.cc4": "4. \u5224\u65ad \u2014 \u8ddd\u79bb\u3001\u65b9\u5411\u3001\u901f\u5ea6",
        "visual3.caption": "\u96f7\u8fbe\u7684\u5de5\u4f5c\u5faa\u73af\u3002\u52a8\u753b\u81ea\u52a8\u5faa\u73af\u2014\u2014\u5faa\u73af\u672c\u8eab\u5c31\u662f\u91cd\u70b9\u3002",

        "fig4.title": "\u98de\u673a\u56de\u6ce2 vs \u6742\u6ce2\u6765\u6e90",
        "fig4.radar": "\u96f7\u8fbe",
        "fig4.aircraft": "\u98de\u673a \u2014 \u5f3a\u56de\u6ce2",
        "fig4.rain": "\u96e8 \u2014 \u6742\u6ce2",
        "fig4.ground": "\u5730\u9762 \u2014 \u6742\u6ce2",
        "fig4.sea": "\u6d77\u6d6a \u2014 \u6742\u6ce2",
        "fig4.legend.target": "\u771f\u5b9e\u76ee\u6807",
        "fig4.legend.clutter": "\u6742\u6ce2 \u2014 \u9700\u8fc7\u6ee4",

        "visual4.num": "04",
        "visual4.name": "\u56de\u6ce2 vs \u6742\u6ce2",
        "visual4.title": "\u5f3a\u56de\u6ce2 vs \u80cc\u666f\u6742\u6ce2",
        "visual4.intro": "\u5929\u6c14\u3001\u5730\u9762\u3001\u6d77\u6d6a\u540c\u6837\u4f1a\u53cd\u5c04\u6ce2\u3002\u5b83\u4eec\u5f62\u6210\u201c\u6742\u6ce2\u201d\uff0c\u96f7\u8fbe\u8981\u628a\u5b83\u4eec\u8fc7\u6ee4\u6389\u2014\u2014\u53ea\u6709\u50cf\u98de\u673a\u8fd9\u6837\u7684\u771f\u5b9e\u76ee\u6807\u624d\u80fd\u4fdd\u7559\u4e0b\u6765\u3002",
        "visual4.caption": "\u5f3a\u56de\u6ce2\uff08\u98de\u673a\uff09\u88ab\u4fdd\u7559\uff1b\u5f31\u56de\u6ce2\uff08\u96e8\u3001\u5730\u9762\u3001\u6d77\u6d6a\uff09\u88ab\u5f53\u4f5c\u6742\u6ce2\u8fc7\u6ee4\u3002",

        "process.num": "05",
        "process.name": "\u6d41\u7a0b\u56de\u987e",
        "process.title": "\u96f7\u8fbe\u7684\u56db\u6b65\u6d41\u7a0b",
        "process.intro": "\u65e0\u8bba\u662f\u63a2\u6d4b\u4e00\u67b6\u98de\u673a\uff0c\u8fd8\u662f\u626b\u63cf\u6574\u7247\u5929\u7a7a\uff0c\u6bcf\u4e00\u4e2a\u96f7\u8fbe\u5faa\u73af\u90fd\u9075\u5faa\u540c\u6837\u7684\u56db\u6b65\u6d41\u7a0b\u3002",
        "process.s1.t": "\u53d1\u5c04",
        "process.s1.d": "\u96f7\u8fbe\u53d1\u51fa\u4e00\u675f\u7535\u78c1\u80fd\u91cf\u8109\u51b2\u3002",
        "process.s2.t": "\u53cd\u5c04",
        "process.s2.d": "\u6ce2\u78b0\u5230\u76ee\u6807\uff0c\u90e8\u5206\u80fd\u91cf\u88ab\u53cd\u5c04\u56de\u6765\u3002",
        "process.s3.t": "\u63a5\u6536",
        "process.s3.d": "\u96f7\u8fbe\u5929\u7ebf\u6355\u83b7\u56de\u6ce2\u3002",
        "process.s4.t": "\u5224\u65ad",
        "process.s4.d": "\u6d4b\u91cf\u5e76\u8f93\u51fa\u76ee\u6807\u7684\u8ddd\u79bb\u3001\u65b9\u5411\u4e0e\u901f\u5ea6\u3002",

        "limits.num": "06",
        "limits.name": "\u5c40\u9650",
        "limits.title": "\u96f7\u8fbe\u4ec0\u4e48\u65f6\u5019\u4f1a\u770b\u4e0d\u89c1",
        "limits.intro": "\u96f7\u8fbe\u4e0d\u53ea\u662f\u201c\u770b\u89c1\u201d\uff0c\u5b83\u8fd8\u80fd\u6d4b\u51fa\u8ddd\u79bb\u3001\u65b9\u5411\u3001\u901f\u5ea6\u3002\u4f46\u5982\u679c\u76ee\u6807\u592a\u5c0f\u3001\u592a\u8fdc\u3001\u6216\u8005\u53cd\u5c04\u592a\u5f31\uff0c\u96f7\u8fbe\u53ef\u80fd\u5c31\u770b\u4e0d\u5230\u4e86\u3002",
        "limits.l1.t": "\u76ee\u6807\u592a\u5c0f",
        "limits.l1.d": "\u5c0f\u578b\u65e0\u4eba\u673a\u6216\u9e1f\u7c7b\u7684\u56de\u6ce2\u592a\u5f31\uff0c\u8fdc\u8ddd\u79bb\u96be\u4ee5\u88ab\u53d1\u73b0\u3002",
        "limits.l2.t": "\u8ddd\u79bb\u592a\u8fdc",
        "limits.l2.d": "\u8d85\u8fc7\u96f7\u8fbe\u6700\u5927\u4f5c\u7528\u8ddd\u79bb\uff0c\u56de\u6ce2\u5c31\u6df9\u6ca1\u5728\u566a\u58f0\u91cc\u3002",
        "limits.l3.t": "\u53cd\u5c04\u592a\u5f31",
        "limits.l3.d": "\u5438\u6ce2\u6750\u6599\u6216\u9690\u8eab\u6d82\u5c42\u80fd\u8ba9\u76ee\u6807\u51e0\u4e4e\u4e0d\u53ef\u89c1\u3002",
        "limits.l4.t": "\u6df9\u6ca1\u5728\u6742\u6ce2\u91cc",
        "limits.l4.d": "\u82e5\u771f\u5b9e\u56de\u6ce2\u88ab\u5f3a\u6742\u6ce2\u8986\u76d6\uff0c\u96f7\u8fbe\u5fc5\u987b\u7cbe\u7ec6\u6ee4\u6ce2\u624d\u80fd\u63d0\u53d6\u3002"
    }

};


// Active language. Default = "en" (matches the rest of the
// site convention). Persist via localStorage so reload keeps
// the user's choice, just like the home page.
const ARTICLE_LANG_KEY = "radar-explorer.lang";
let articleLang = "en";

try {
    const saved = window.localStorage.getItem(ARTICLE_LANG_KEY);
    if (saved === "en" || saved === "zh") {
        articleLang = saved;
    } else {
        const nav = (window.navigator.language || "en").toLowerCase();
        articleLang = nav.startsWith("zh") ? "zh" : "en";
    }
} catch (e) {
    /* localStorage may be blocked; fall back to en */
}

function tArticle(key) {
    const dict = ARTICLE_I18N[articleLang] || ARTICLE_I18N.en;
    if (dict[key] !== undefined) {
        return dict[key];
    }
    // Fall back to English if a key is missing in the active dict.
    if (ARTICLE_I18N.en[key] !== undefined) {
        return ARTICLE_I18N.en[key];
    }
    // Fall back to the site-wide i18n() function installed by
    // script.js (handles nav.* and other globally-shared keys).
    if (typeof window.t === "function") {
        try {
            const v = window.t(key);
            if (v && v !== key) return v;
        } catch (e) { /* ignore */ }
    }
    return key;
}


function applyArticleI18n() {
    // Sync document language with our active one.
    document.documentElement.lang = articleLang;

    // Apply every text-bearing data-i18n attribute.
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = tArticle(key);
    });

    document
        .querySelectorAll("[data-i18n-attr]")
        .forEach(el => {
            const spec = el.getAttribute("data-i18n-attr");
            const [attr, key] = spec.split("|");
            if (attr && key) {
                el.setAttribute(attr, tArticle(key));
            }
        });

    // Update the language-toggle button label.
    // We show the TARGET language — i.e. the language the user
    // will get if they click the button now. (Not the current
    // language.) This is the convention used by GitHub, Notion,
    // etc. and avoids "I'm in English but the button shows 中"
    // confusion.
    const langLabel = document.querySelector("[data-lang-label]");
    if (langLabel) {
        langLabel.textContent = articleLang === "zh" ? "EN" : "中";
    }
}


function setArticleLanguage(lang) {
    if (lang !== "en" && lang !== "zh") return;
    articleLang = lang;
    try {
        window.localStorage.setItem(ARTICLE_LANG_KEY, lang);
    } catch (e) {
        /* ignore */
    }
    applyArticleI18n();
}


function hookLangToggle() {
    const btn = document.querySelector("[data-lang-toggle]");
    if (!btn) return;

    btn.addEventListener("click", () => {
        setArticleLanguage(articleLang === "zh" ? "en" : "zh");
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

    // Skip if already pointing at the right file.
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

    // Initial src = current language's video.
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
    } catch (e) {
        /* play() not implemented (e.g. test env); ignore. */
    }
}


/*
    Sync the <video> src with <html lang> using a
    MutationObserver. This way we don't fight script.js's
    own lang-toggle listener — whichever code path flips
    the lang attr, we follow.
*/
function hookVideoLangSync() {
    const v = document.getElementById("radar-loop-video");
    if (!v) return;

    const root = document.documentElement;
    const update = () => pickVideoSource(v);

    // React to <html lang> attribute changes.
    const mo = new MutationObserver(update);
    mo.observe(root, { attributes: true, attributeFilter: ["lang"] });

    // Also react to the data-lang-toggle click as a fast-path
    // (MutationObserver may not fire fast enough on synthetic
    // clicks in test envs; click listener is cheap insurance).
    document.addEventListener("click", (e) => {
        if (e.target.closest("[data-lang-toggle]")) {
            // setTimeout so script.js's setLanguage() / our
            // setArticleLanguage() finish first.
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
    tocLinks.forEach(a => {
        linkMap[a.getAttribute("data-toc")] = a;
    });

    const sections = Array.from(tocLinks)
        .map(a => document.getElementById(a.getAttribute("data-toc")))
        .filter(Boolean);

    if (!sections.length) return;

    function setActive(id) {
        tocLinks.forEach(a => a.classList.remove("active"));
        const link = linkMap[id];
        if (link) link.classList.add("active");
    }

    function onScroll() {
        // Pick the section whose top is closest above the
        // viewport's "reading line" (a bit below the top
        // edge, so the section header has scrolled into view).
        const READING_LINE = 140;
        let current = sections[0].id;
        for (const sec of sections) {
            const rect = sec.getBoundingClientRect();
            if (rect.top - READING_LINE <= 0) {
                current = sec.id;
            } else {
                break;
            }
        }
        setActive(current);
    }

    if ("IntersectionObserver" in window) {
        // Use IntersectionObserver to throttle scroll events.
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
        );
        sections.forEach(s => io.observe(s));
    } else {
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }
}


document.addEventListener("DOMContentLoaded", () => {
    applyArticleI18n();
    hookLangToggle();
    keepVideoPlaying();
    hookVideoLangSync();
    initTocScrollSpy();
});
