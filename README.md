# ryanmoore.science

Source for [ryanmoore.science](https://ryanmoore.science), built with Jekyll and hosted on GitHub Pages.

## Updating the site

**Add or edit a publication** — edit [`_data/publications.yml`](_data/publications.yml) directly on GitHub.com (or locally). Each publication is one YAML block; copy an existing one and fill in the fields. Field-by-field instructions are in the comment at the top of that file. No HTML or template editing needed — the Research page renders every entry automatically.

**Update your CV** — the CV page and the About page's "CV" link both point to a Google Doc (set to "Anyone with the link → Viewer"). Just edit that doc directly — the site is instantly current, no repo edit required. Only touch [`_pages/CV.md`](_pages/CV.md) / [`index.md`](index.md) if the doc's URL itself ever changes.

**Edit your bio / About page** — edit [`index.md`](index.md).

**Add a publication thumbnail** — drop an image in [`assets/pubs/`](assets/pubs/) (roughly square, 200px+ recommended) and reference it from that publication's `image:` field in `publications.yml`. If you skip this, a placeholder icon is shown instead.

Any push to the `main` branch (or edit + commit via GitHub.com's web editor) rebuilds and redeploys the live site automatically — no build step to run yourself.

## Local preview

This repo uses the `github-pages` gem, which mirrors the exact Jekyll/plugin versions GitHub Pages uses in production. To preview locally you need Ruby 3.0+ (the system Ruby on most Macs is older):

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
