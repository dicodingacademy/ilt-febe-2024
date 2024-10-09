const fileToCaches = [
  '/',
  '/index.html',
  '/app.webmanifest',
  '/src/styles/style.css',
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
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
];

const cacheName = 'calm';

self.addEventListener('install', (event) => {
  console.log('SW: Installed');

  const precache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(fileToCaches);
  };

  event.waitUntil(precache());
});

self.addEventListener('activate', (event) => {
  console.log('SW: Activated');

  const cleanCache = async () => {
    const cacheNames = await caches.keys();

    const deletePromises = cacheNames
      .filter((name) => name !== cacheName)
      .map((name) => caches.delete(name));
    await Promise.all(deletePromises);
  }

  event.waitUntil(cleanCache());
});

/**
 * Cache-first
 * see: https://web.dev/learn/pwa/serving/#cache-first
 */
// self.addEventListener('fetch', (event) => {
//   async function cacheFirstStrategy(request) {
//     // Resources from chrome extensions cannot be cached by Cache Storage, so it will be thrown an error
//     if (request.url.startsWith('chrome-extension')) {
//       return await fetch(request);
//     }
//
//     const cache = await caches.open(cacheName);
//     const cachedResponse = await cache.match(request);
//
//     if (cachedResponse) {
//       return cachedResponse;
//     }
//
//     return await fetch(request);
//   }
//
//   event.respondWith(cacheFirstStrategy(event.request));
// });

/**
 * Network-first
 * see: https://web.dev/learn/pwa/serving/#network-first
 */
// self.addEventListener('fetch', (event) => {
//   async function networkFirstStrategy(request) {
//     try {
//       return await fetch(request);
//     } catch {
//       const cache = await caches.open(cacheName);
//       return cache.match(request);
//     }
//   }
//
//   event.respondWith(networkFirstStrategy(event.request));
// });

/**
 * Stale while revalidate
 * see: https://web.dev/learn/pwa/serving/#stale-while-revalidate
 */
self.addEventListener('fetch', (event) => {
  const fetchAndRevalidateCache = async (request) => {
    const response = await fetch(request);

    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());

    return response;
  };

  async function staleWhileRevalidateStrategy(request) {
    // Resources from chrome extensions cannot be stored in Cache Storage, so it will be thrown an error
    if (request.url.startsWith('chrome-extension')) {
      return await fetch(request);
    }

    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      // It is cached, but we want to update it so request but not await
      fetchAndRevalidateCache(request);
      return cachedResponse;
    }

    // It was not cached yet so request and cache it
    return await fetchAndRevalidateCache(request);
  }

  event.respondWith(staleWhileRevalidateStrategy(event.request));
});
