# Labeling Harness — landing page

The landing page for [Labeling Harness](https://github.com/Sagyam/labeling-harness), served at
<https://labeling-harness.sagyamthapa.com.np>.

Astro, shadcn/ui and Tailwind CSS 4, built with Bun. React components render at build time only,
so the page ships no framework JavaScript; the one script is the copy button in Quick start. The
palette and type (Space Grotesk, Work Sans, navy and sky blue) follow
[sagyamthapa.com.np](https://sagyamthapa.com.np); teal and amber come from the harness logo.

```bash
bun install
bun run dev       # http://localhost:4321
bun run build     # static site in dist/
bun run check     # astro check
```

## Content

Every claim and number on the page comes from the harness repository's `README.md`,
`docs/harness/guide.md` and `docs/nepanglish/README.md`. When those change, update the copy in
`src/components/` and `src/pages/index.astro` to match.

Screenshots in `src/assets/screens/` are copied from `docs/harness/screenshots/` (an invented
demo corpus, never real recordings) and converted to WebP at build. `public/hero.{webm,mp4}` is the
README's `hero.gif`, re-encoded:

```bash
G=../labeling-harness/docs/harness/screenshots/hero.gif
ffmpeg -i $G -movflags +faststart -pix_fmt yuv420p -c:v libx264 -crf 24 -preset slow -r 16 public/hero.mp4
ffmpeg -i $G -pix_fmt yuv420p -c:v libvpx-vp9 -b:v 0 -crf 36 -row-mt 1 -r 16 public/hero.webm
ffmpeg -i $G -vframes 1 -update 1 src/assets/hero-poster.png
```

## Deploy

Import the repository in Vercel; `vercel.json` sets Bun as the installer and long cache headers
on hashed assets. Then add `labeling-harness.sagyamthapa.com.np` under Project → Settings →
Domains and create the `CNAME` record Vercel shows (`labeling-harness` →
`cname.vercel-dns.com`) at the DNS provider for `sagyamthapa.com.np`.
