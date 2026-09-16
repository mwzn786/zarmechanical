# ZAR Mechanical

Static marketing site for [ZAR Mechanical Inc.](https://zarmechanical.com/), a Canadian-owned mechanical contractor in North York, Ontario.

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

The files live in Hostinger `public_html`. The origin already serves this static site, but Hostinger CDN (`hcdn`) can keep a cached copy of the old WordPress homepage at `https://zarmechanical.com/`.

After every upload:

1. In hPanel, purge **CDN / Cache** for the domain (Purge All).
2. Confirm `https://zarmechanical.com/` (no `www`, no `index.html`) shows the new homepage, not the old TheGem/WordPress theme.
3. Keep this repo’s `.htaccess` in `public_html` so old WordPress paths like `/about/` redirect to `/about.html` instead of 404.

Do not leave WordPress `index.php` as the directory index, or `/` will prefer PHP over `index.html` again.
