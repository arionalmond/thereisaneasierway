# Personal site

Blog-style portfolio built with [Hugo](https://gohugo.io) and a custom theme (`themes/chalk`), hosted on GitHub Pages.

## Local development

1. Install Hugo **extended** (match the version in `.github/workflows/hugo.yaml`):
   - macOS: `brew install hugo`
   - Windows: `winget install Hugo.Hugo.Extended`
   - Linux: download the `.deb`/binary from Hugo's GitHub releases
2. Run the dev server:
   ```sh
   hugo server -D
   ```
   Open http://localhost:1313 — the site live-reloads as you edit.

## Writing

```sh
hugo new content posts/my-idea.md        # new blog post
hugo new content projects/my-app.md      # new project page
hugo new content teaching/my-course.md   # new course page
```

Set `draft = false` in the front matter when ready to publish.

## First deploy to GitHub Pages

1. Create a GitHub repo and push this folder to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push (or re-run the workflow). The site goes live at `https://<username>.github.io/<repo>/`.

The workflow passes the correct `baseURL` automatically, so the placeholder in `hugo.toml` is only used locally.

## Custom domain

1. Create the file `static/CNAME` containing exactly your domain, e.g.:
   ```
   yourdomain.com
   ```
2. In the repo: **Settings → Pages → Custom domain** — enter the same domain and save.
3. At your DNS provider:
   - Apex domain (`yourdomain.com`): four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (verify these against GitHub's current docs)
   - `www` subdomain: `CNAME` record → `<username>.github.io`
4. Once DNS propagates, check **Enforce HTTPS** in the Pages settings.
5. Update `baseURL` in `hugo.toml` to `https://yourdomain.com/`.

## Theme

Everything lives in `themes/chalk/`. Styling is a single CSS file (`assets/css/main.css`) driven by CSS custom properties; the light/dark toggle is `assets/js/theme.js`. No webfonts, no frameworks.
