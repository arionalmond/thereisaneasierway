# There Is An Easier Way

Blog-style portfolio built with [Hugo](https://gohugo.io) and a custom theme (`themes/chalk`), hosted on GitHub Pages.  

This site serves as an example of how to host a static site.  

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

TODO  
1. Review and commit, e.g. git add -A && git commit -m "SEO: canonical, social meta, robots.txt; stop tracking public/", then push. Your draft site-apps.md would be included too, but it has draft = true so it won't be published.  

2. Make a share image: a 1200×630 PNG, say your site name on the paper background. Save it as static/og-default.png and uncomment ogImage in hugo.toml. Any post can use its own image with image = '/path.png' in its front matter.

3. Google Search Console (search.google.com/search-console): add a Domain property for thereisaneasierway.com. Verify it with the DNS TXT record it gives you, added wherever your DNS is managed. Then go to Sitemaps and submit sitemap.xml.

4. Bing Webmaster Tools: you can import the site straight from Search Console, which also covers DuckDuckGo.
Turn on Enforce HTTPS: check it's ticked in your repo under Settings → Pages. If www.thereisaneasierway.com resolves, make sure it redirects to the bare domain (GitHub Pages does this when DNS has both records).

5. Test after deploying: paste a post URL into opengraph.xyz and Google's Rich Results Test to see the share preview, and confirm https://thereisaneasierway.com/robots.txt loads.

6. Keep writing a description for each post. It's the text Google shows under your link.