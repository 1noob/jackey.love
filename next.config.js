module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ["res.cloudinary.com"],
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
