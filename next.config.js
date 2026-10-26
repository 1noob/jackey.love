module.exports = {
  // `optimizeFonts` was removed in Next 15 (next/font handles it now).
  images: {
    formats: ['image/avif', 'image/webp'],
    // `domains` was removed in Next 15; remotePatterns is the supported form.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/jackeylove/**'
      }
    ]
  },
  transpilePackages: ['react-tweet'],

  // react-tweet builds photo URLs by moving the extension into the query string
  // - a tweet photo is requested as /tweet/<key>?format=jpg&name=small, never
  // /tweet/<key>.jpg - while the vendored file on disk is /tweet/<key>.jpg.
  // This maps one to the other. Plain `rewrites` run after the filesystem, so
  // /tweet/<id>.json and the avatar still resolve to their own files.
  async rewrites() {
    return [
      {
        source: '/tweet/:name',
        destination: '/tweet/:name.jpg'
      }
    ]
  }
}
