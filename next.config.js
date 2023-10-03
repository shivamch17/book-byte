module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'library.lol',
        port: '',
        pathname: '/covers/**',
      },
      {
        protocol: 'http',
        hostname: 'library.lol',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};