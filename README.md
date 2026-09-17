# ZAR Mechanical

Static marketing site for [ZAR Mechanical Inc.](https://www.zarmechanical.com/), a Canadian-owned mechanical contractor in North York, Ontario.

## Pages

- `index.html` — home
- `about.html` — company, mission, values
- `services.html` — HVAC, plumbing, sheet metal, design-build, maintenance
- `projects.html` — current projects and past experience
- `safety.html` — safety and quality
- `contact.html` — address, phone, and mailto estimate form

## Local preview

Serve the folder with any static file server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Hostinger (zarmechanical.com)

The files live in Hostinger `public_html`. Hostinger CDN can still serve a cached WordPress homepage at the bare domain `https://zarmechanical.com/`. The new site loads correctly at `https://www.zarmechanical.com/`.

`.htaccess` forces all non-www requests to `https://www.zarmechanical.com/…` and maps old WordPress paths like `/about/` to `/about.html`.

After uploading `.htaccess`:

1. In hPanel, purge **CDN / Cache** for the domain (Purge All). Until that cache drops, `https://zarmechanical.com/` may still show the old homepage instead of the www redirect.
2. Confirm `https://zarmechanical.com/` redirects to `https://www.zarmechanical.com/`.
3. Bookmark and share the www URL.
