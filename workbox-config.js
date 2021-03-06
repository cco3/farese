module.exports = {
  skipWaiting: true,
  clientsClaim: true,
  cleanupOutdatedCaches: true,
  globDirectory: ".",
  globPatterns: [
    "**/*.{html,css,png,htm,gif,jpg,json,js,webmanifest}"
  ],
  globIgnores: ['legacy/**'],
  swDest: "sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
    },
    {
      urlPattern: /.*(?:api\.tiles|api|a\.tiles)\.mapbox\.com/,
      handler: 'CacheFirst'
    },
    {
      urlPattern: /.*farese\.com\/legacy/,
      handler: 'StaleWhileRevalidate'
    },
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: 'CacheFirst'
    },
    {
      urlPattern: 'https://cdn.google.com/example-script.min.js',
      handler: 'CacheFirst'
    },
    {
      urlPattern: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
      handler: 'CacheFirst'
    },
    {
      urlPattern: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
      handler: 'CacheFirst'
    },
    {
      urlPattern: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
      handler: 'CacheFirst'
    }
  ]
};
