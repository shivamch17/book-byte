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
      {
        protocol: 'http',
        hostname: 'libgen.is',
        port: '',
        pathname: '/covers/**',
      },
      {
        protocol: 'http',
        hostname: 'libgen.is',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};