/* =========================
   ARTICLES LIST PAGE

   i18n + search + year filter + nav state.
   Single-language layout: at any moment the page shows
   only the active language, exactly like the rest of
   the site.
========================= */

const ARTICLES_I18N = {

    en: {
        "page.title": "Articles — Radar Explorer",
        "page.description": "A growing collection of bilingual radar explainers, written for student researchers.",

        "nav.home": "Home",
        "nav.learn": "Learn",
        "nav.articles": "Articles",
        "nav.explore": "Explore",
        "nav.research": "Research",
        "nav.about": "About",

        "articles.eyebrow": "ARTICLES",
        "articles.title": "Articles",
        "articles.subtitle": "Bilingual radar explainers, diagrams and animations — built for student research.",

        "articles.search.placeholder": "Search by title\u2026",
        "articles.search.btn": "Search",
        "articles.filter.label": "Filter by year",
        "articles.filter.year": "Year:",
        "articles.filter.all": "All",

        "articles.countLabel": "articles",
        "articles.empty": "No articles match your search.",

        "articles.by": "By",
        "articles.author": "Editorial",
        "articles.coming": "COMING SOON",

        "articles.back": "\u2190 Back to Radar Explorer",

        "row.11.title": "Why Can Radar See Aircraft?",
        "row.11.desc":  "A radar has no eyes. So how can it find aircraft in the sky?",
        "row.11.date":  "Sept 19, 2026",

        "row.12.title": "How Does Radar Calculate Distance?",
        "row.12.desc":  "A radar screen shows how far away a target is. How does it calculate that?",
        "row.12.date":  "Sept 20, 2026",

        "row.13.title": "How Does Radar Know the Direction?",
        "row.13.desc":  "Direction comes from antenna beams — mechanical scan vs phased array.",
        "row.13.date":  "Sept 21, 2026",

        "row.14.title": "Synthetic Aperture Radar",
        "row.14.desc":  "A small antenna that pretends to be a huge one — imaging from satellites and aircraft.",
        "row.14.date":  "Sept 22, 2026",

        "row.10.title": "How Phased Arrays Steer a Beam",
        "row.10.desc":  "Electronic beam steering without moving parts.",
        "row.10.date":  "Dec 4, 2025",

        "row.9.title":  "Why Antennas Are Shaped Like That",
        "row.9.desc":   "Parabolic dishes, horns and the math behind them.",
        "row.9.date":   "Aug 21, 2025"
    },

    zh: {
        "page.title": "\u6587\u7ae0\u5217\u8868 \u2014 \u96f7\u8fbe\u63a2\u7d22\u8005",
        "page.description": "\u9762\u5411\u5b66\u751f\u7814\u7a76\u7684\u4e2d\u82f1\u53cc\u8bed\u96f7\u8fbe\u79d1\u666e\u96c6\u5408\u3002",

        "nav.home": "\u9996\u9875",
        "nav.learn": "\u5b66\u4e60",
        "nav.articles": "\u6587\u7ae0",
        "nav.explore": "\u63a2\u7d22",
        "nav.research": "\u7814\u7a76",
        "nav.about": "\u5173\u4e8e",

        "articles.eyebrow": "\u6587\u7ae0",
        "articles.title": "\u6587\u7ae0\u5217\u8868",
        "articles.subtitle": "\u4e2d\u82f1\u53cc\u8bed\u96f7\u8fbe\u79d1\u666e\uff0c\u914d\u4ee5\u56fe\u793a\u4e0e\u52a8\u753b\u2014\u2014\u4e3a\u5b66\u751f\u7814\u7a76\u800c\u4f5c\u3002",

        "articles.search.placeholder": "\u6309\u6807\u9898\u641c\u7d22\u2026",
        "articles.search.btn": "\u641c\u7d22",
        "articles.filter.label": "\u6309\u5e74\u4efd\u7b5b\u9009",
        "articles.filter.year": "\u5e74\u4efd\uff1a",
        "articles.filter.all": "\u5168\u90e8",

        "articles.countLabel": "\u7bc7",
        "articles.empty": "\u6ca1\u6709\u5339\u914d\u7684\u6587\u7ae0\u3002",

        "articles.by": "\u4f5c\u8005\uff1a",
        "articles.author": "\u5c0f\u7f16",
        "articles.coming": "\u5373\u5c06\u4e0a\u7ebf",

        "articles.back": "\u2190 \u8fd4\u56de\u96f7\u8fbe\u63a2\u7d22\u8005\u9996\u9875",

        "row.11.title": "\u96f7\u8fbe\u4e3a\u4ec0\u4e48\u80fd\u770b\u89c1\u98de\u673a\uff1f",
        "row.11.desc":  "\u96f7\u8fbe\u6ca1\u6709\u773c\u775b\uff0c\u5b83\u600e\u4e48\u53d1\u73b0\u5929\u4e0a\u7684\u98de\u673a\uff1f",
        "row.11.date":  "2026.09.19",

        "row.12.title": "\u96f7\u8fbe\u662f\u600e\u4e48\u7b97\u51fa\u8ddd\u79bb\u7684\uff1f",
        "row.12.desc":  "\u96f7\u8fbe\u5c4f\u5e55\u4e0a\u80fd\u663e\u793a\u76ee\u6807\u6709\u591a\u8fdc\uff0c\u5b83\u662f\u600e\u4e48\u7b97\u51fa\u6765\u7684\uff1f",
        "row.12.date":  "2026.09.20",

        "row.13.title": "\u96f7\u8fbe\u600e\u4e48\u77e5\u9053\u65b9\u5411\uff1f",
        "row.13.desc":  "\u96f7\u8fbe\u9760\u5929\u7ebf\u6ce2\u675f\u6307\u5411\u5224\u65ad\u65b9\u5411\u2014\u2014\u673a\u68b0\u626b\u63cf\u4e0e\u76f8\u63a7\u9635\u3002",
        "row.13.date":  "2026.09.21",

        "row.14.title": "\u5408\u6210\u5b54\u5f84\u96f7\u8fbe",
        "row.14.desc":  "\u5c0f\u5929\u7ebf\u4eff\u5192\u6210\u5de8\u5929\u7ebf\u2014\u2014\u4ece\u536b\u661f\u548c\u98de\u673a\u62cd\u9ad8\u6e05\u96f7\u8fbe\u56fe\u3002",
        "row.14.date":  "2026.09.22",

        "row.10.title": "\u76f8\u63a7\u9635\u5982\u4f55\u8f6c\u5411\u6ce2\u675f",
        "row.10.desc":  "\u4e0d\u7528\u673a\u68b0\u8f6c\u52a8\u5c31\u80fd\u6539\u53d8\u6ce2\u675f\u65b9\u5411\u3002",
        "row.10.date":  "2025.12.04",

        "row.9.title":  "\u5929\u7ebf\u4e3a\u4ec0\u4e48\u662f\u8fd9\u4e2a\u5f62\u72b6",
        "row.9.desc":   "\u629b\u7269\u9762\u3001\u5583\u53ed\u5929\u7ebf\uff0c\u4ee5\u53ca\u80cc\u540e\u7684\u6570\u5b66\u3002",
        "row.9.date":   "2025.08.21"
    }

};


const ARTICLES_LANG_KEY = "radar-explorer.lang";
let articleLang = "en";

try {
    const saved = window.localStorage.getItem(ARTICLES_LANG_KEY);
    if (saved === "en" || saved === "zh") {
        articleLang = saved;
    } else {
        const nav = (window.navigator.language || "en").toLowerCase();
        articleLang = nav.startsWith("zh") ? "zh" : "en";
    }
} catch (e) { /* fall back to en */ }


function tA(key) {
    const dict = ARTICLES_I18N[articleLang] || ARTICLES_I18N.en;
    if (dict[key] !== undefined) return dict[key];
    if (ARTICLES_I18N.en[key] !== undefined) return ARTICLES_I18N.en[key];

    // Fall back to the site-wide i18n() installed by script.js
    // (nav.* etc.) when running on the same site.
    if (typeof window.t === "function") {
        try {
            const v = window.t(key);
            if (v && v !== key) return v;
        } catch (e) { /* ignore */ }
    }
    return key;
}


function applyArticlesI18n() {
    document.documentElement.lang = articleLang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = tA(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
        const spec = el.getAttribute("data-i18n-attr");
        const [attr, key] = spec.split("|");
        if (attr && key) el.setAttribute(attr, tA(key));
    });

    // Title/desc/title attributes that hold the row's text in
    // each language, used by the search filter.
    document.querySelectorAll(".article-row").forEach(row => {
        row.dataset.titleEn = tA(row.dataset.titleEnKey || "");
        // titleEnKey is set in HTML via data-title-en (used for
        // search). We rebuild it from data-* once, here.
    });

    const langLabel = document.querySelector("[data-lang-label]");
    if (langLabel) {
        langLabel.textContent = articleLang === "zh" ? "EN" : "\u4e2d";
    }
}


function setArticlesLanguage(lang) {
    if (lang !== "en" && lang !== "zh") return;
    articleLang = lang;
    try { window.localStorage.setItem(ARTICLES_LANG_KEY, lang); } catch (e) {}
    applyArticlesI18n();
    // Re-apply filter so the search input still works after re-render.
    applyFilter();
}


function hookLangToggle() {
    const btn = document.querySelector("[data-lang-toggle]");
    if (!btn) return;
    btn.addEventListener("click", () => {
        setArticlesLanguage(articleLang === "zh" ? "en" : "zh");
    });
}


/* =========================
   SEARCH + YEAR FILTER
========================= */

const state = {
    query: "",
    year: "all",
};


function applyFilter() {
    const list = document.getElementById("articles-list");
    const empty = document.getElementById("articles-empty");
    const counter = document.getElementById("articles-count");
    if (!list) return;

    const q = state.query.trim().toLowerCase();
    const year = state.year;

    let visible = 0;
    Array.from(list.children).forEach(row => {
        const titleEl = row.querySelector(".article-row-title");
        const titleText = titleEl ? titleEl.textContent.toLowerCase() : "";
        const matchesQ = !q || titleText.includes(q);
        const matchesY = year === "all" || row.dataset.year === year;

        const show = matchesQ && matchesY;
        row.hidden = !show;
        if (show) visible++;
    });

    if (counter) counter.textContent = String(visible);
    if (empty) empty.hidden = visible !== 0;

    // Sync count-label pluralisation is skipped for simplicity;
    // "articles" / "\u7bc7" both look fine as singular/plural.
}


function initSearch() {
    const input = document.getElementById("articles-search-input");
    const form  = document.querySelector(".articles-search");
    const clear = document.getElementById("articles-search-clear");
    const btn   = document.getElementById("articles-search-btn");

    if (!input) return;

    function updateClearVisibility() {
        if (!form) return;
        form.classList.toggle("has-text", input.value.length > 0);
    }

    input.addEventListener("input", () => {
        state.query = input.value;
        updateClearVisibility();
        applyFilter();
    });

    if (clear) {
        clear.addEventListener("click", () => {
            input.value = "";
            state.query = "";
            updateClearVisibility();
            applyFilter();
            input.focus();
        });
    }

    if (btn) {
        btn.addEventListener("click", () => applyFilter());
    }

    // Enter key inside the search box triggers a filter run
    // (the form itself is non-submitting).
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            applyFilter();
        }
    });

    updateClearVisibility();
}


function initYearFilter() {
    const buttons = document.querySelectorAll(".articles-filter");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.year = btn.getAttribute("data-year");
            applyFilter();
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    applyArticlesI18n();
    hookLangToggle();
    initSearch();
    initYearFilter();
    applyFilter();
});