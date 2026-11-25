/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to ./out, which
  // Cloudflare serves as static assets (see wrangler.jsonc). No Node server.
  output: 'export',
  images: {
    // There is no image optimisation server in a static export.
    unoptimized: true,
  },
}

module.exports = nextConfig
