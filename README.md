# radar-explorer

An interactive bilingual educational website exploring radar technology.
Built as a student research project — radar explainers in plain English and Chinese,
with SVG diagrams, worked examples, and Manim-animated videos.

## Live site

Once GitHub Pages is set up (one-time web action, see below):

  https://liuyibao0908.github.io/radar-explorer/

## Articles

| # | Title (EN) | Title (ZH) |
|---|---|---|
| 11 | Why Can Radar See Aircraft? | 雷达为什么能看见飞机？ |
| 12 | How Does Radar Calculate Distance? | 雷达怎么算出距离？ |
| 13 | How Does Radar Know the Direction? | 雷达怎么知道方向？ |

Each article switches between English and Chinese with the language toggle in the
top-right corner. The choice persists in `localStorage`.

## Project structure

- `index.html` — homepage with the live radar read-out (range, targets, status)
- `articles.html` — list of all articles (searchable)
- `article-{11,12,13}.html` — individual article pages
- `style.css` / `article.css` / `articles.css` — styles
- `script.js` / `article-*.js` / `articles.js` — UI logic + i18n dictionaries
- `manim/` — Manim animation source scripts and rendered MP4s + posters

## Local preview

```bash
python -m http.server 8765
# then open http://127.0.0.1:8765/
```

## Deploying to GitHub Pages

The repo has two branches:

- `main` — all source (development branch)
- `gh-pages` — only the files needed to run the site in a browser

`gh-pages` is updated by running:

```bash
git checkout --orphan gh-pages
rm -rf manim/media/texts
git add LICENSE README.md .nojekyll \
        index.html script.js style.css \
        articles.html articles.js articles.css \
        article.js article.css \
        article-11.html article-12.html article-12.js \
        article-13.html article-13.js \
        manim/media/images manim/media/videos
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
```

### One-time GitHub settings

After the first push to `gh-pages`:

1. Open https://github.com/liuyibao0908/radar-explorer/settings/pages
2. **Source**: "Deploy from a branch"
3. **Branch**: `gh-pages` / `(root)`
4. Save

The site will be live at `https://liuyibao0908.github.io/radar-explorer/` within a minute.

## License

MIT — see `LICENSE`.