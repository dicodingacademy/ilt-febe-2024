importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// Set configuration for workbox
workbox.setConfig({
  debug: false,
});

// PRECACHING
const { precacheAndRoute } = workbox.precaching;

const fileToCaches = [
  '/',
  '/index.html',
  '/src/styles/style.css',
  '/app.webmanifest',
  '/src/images/favicon.png',
  '/src/images/calm-hero.png',
  '/src/images/calm-logo.png',
  '/src/images/icons/icon-48.png',
  '/src/images/icons/icon-72.png',
  '/src/images/icons/icon-96.png',
  '/src/images/icons/icon-144.png',
  '/src/images/icons/icon-192.png',
  '/src/images/icons/icon-512.png',
  '/src/scripts/main.js',
  '/src/scripts/utils.js',
  '/src/scripts/data/api.js',
  '/src/scripts/data/local.js',
  '/src/scripts/routes/routes.js',
  '/src/scripts/routes/url-parser.js',
  '/src/scripts/views/app.js',
  '/src/scripts/views/pages/HomePage.js',
  '/src/scripts/views/pages/NotFoundPage.js',
  '/src/scripts/views/presenters/HomePresenter.js',
];
precacheAndRoute(fileToCaches);

// RUNTIME CACHING
const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate, CacheFirst } = workbox.strategies;

/* Google Fonts */
registerRoute(
  ({ request }) => {
    return request.destination === 'font';
  },
  new CacheFirst({
    cacheName: 'calm-fonts',
  }),
);

/* Calm Headphones API */
const BASE_URL = 'https://calm-music-api.dicoding.dev';

registerRoute(
  ({ request, url }) => {
    return request.destination === 'image' && url.href.startsWith(BASE_URL);
  },
  new StaleWhileRevalidate({
    cacheName: 'calm-api-images',
  }),
);

registerRoute(
  ({ url }) => {
    return url.href.startsWith(BASE_URL);
  },
  new StaleWhileRevalidate({
    cacheName: 'calm-api',
  }),
);
