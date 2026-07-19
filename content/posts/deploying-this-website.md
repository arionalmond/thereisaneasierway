+++
title = 'Deploying this website'
date = '2026-07-19T15:30:02-04:00'
draft = false
description = 'Notes on wiring up GitHub Actions, GitHub Pages, and Cloudflare DNS to get this site live at thereisaneasierway.com.'
tags = ['meta']
+++

This site is a static [Hugo](https://gohugo.io) build with a custom theme, and getting it live came down to three pieces: a build pipeline, a host, and a domain.

## The build pipeline

Rather than build locally and push the output, I added a GitHub Actions workflow (`.github/workflows/hugo.yaml`) that builds the site with Hugo on every push to `main` and deploys it to GitHub Pages. The Hugo version in the workflow is pinned to match what's installed locally, so `hugo server -D` and CI never drift apart.

## Picking a domain

I first set this up as a subdomain — `blog.thereisaneasierway.com` — using a single `CNAME` DNS record pointing at `<username>.github.io`. That's the simpler setup for a subdomain: one record, no ambiguity.

But for a one-site personal domain, a subdomain adds a layer of indirection without much benefit, so I switched to serving the site directly from the apex domain, `thereisaneasierway.com`. That meant swapping the `CNAME` DNS record for four `A` records pointing at GitHub Pages' IPs, and updating `baseURL` in `hugo.toml` and the `static/CNAME` file (which Hugo copies into the build output so GitHub Pages picks up the custom domain automatically) to match.

## DNS on Cloudflare

DNS is managed through Cloudflare, which has a couple of gotchas with GitHub Pages:

- **Proxy status matters.** Cloudflare's orange-cloud proxy sits in front of your DNS and can interfere with GitHub's domain verification and its automatic HTTPS certificate issuance. Keeping the records "DNS only" (grey cloud) sidesteps that entirely — and for a simple blog, the proxy isn't buying much anyway.
- **Domain verification.** Before GitHub accepted the custom domain, it asked for a verification `TXT` record to prove ownership of `thereisaneasierway.com`. That went in alongside the `A` records, also DNS-only.

Once DNS propagated and GitHub verified the domain, I flipped on **Enforce HTTPS** in the repo's Pages settings, and the site was live.

If you're setting up something similar, the two things worth getting right up front are pinning your Hugo version between local and CI, and leaving DNS records unproxied until the certificate is issued.
