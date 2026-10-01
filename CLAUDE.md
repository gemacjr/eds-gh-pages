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

`bundle install && bundle exec jekyll serve`, then open http://localhost:4000/eds-gh-pages/

The site is public. Don't name employers or the companies behind interview-prep work, don't name or give ages for family members, and don't link private repos.
