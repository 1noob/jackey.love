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
  transpilePackages: ['react-tweet']
}
