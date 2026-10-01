# Spec Library

Jekyll site published by GitHub Pages. Each project spec is one Markdown file.

## Adding a spec

1. Copy `_templates/spec.md` to `_specs/<kebab-case-name>.md`. The filename becomes the URL: `/specs/<name>/`.
2. Fill in the front matter:
   - `category`: an `id` from `_data/categories.yml` (system-design, spring, interview, web, ios, tools)
   - `status`: one of `draft`, `in-progress`, `shipped`, `archived`
   - `tools`: any of `claude-code`, `cursor`
   - `date`: creation date, `YYYY-MM-DD`
   - `source` (optional): the article or tutorial the project is based on
3. When you edit a spec, set `updated` and add a line to its Changelog.

Don't put specs anywhere other than `_specs/`, or they won't show on the index.

## Preview locally

Styles are Tailwind v4, compiled from `src/tailwind.css` to `assets/site.css` (gitignored, built in CI).

```bash
npm install
npm run watch:css          # in one terminal
bundle exec jekyll serve   # in another, then open http://localhost:4000/eds-gh-pages/
```

Deploys go through `.github/workflows/pages.yml` on every push to `main`. Classes created in `assets/filter.js` are picked up because Tailwind scans that file.

The site is public. Don't name employers or the companies behind interview-prep work, don't name or give ages for family members, and don't link private repos.
