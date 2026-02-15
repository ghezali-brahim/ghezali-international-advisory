// Service Worker pour GHEZALI Business Mastery
const CACHE_NAME = 'ghezali-business-mastery-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  // Ajoutez d'autres ressources critiques ici
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
      .catch(function () {})
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interception des requêtes : uniquement http(s) et same-origin pour le cache
self.addEventListener('fetch', function (event) {
  var requestUrl;
  try {
    requestUrl = new URL(event.request.url);
  } catch (e) {
    return;
  }
  var protocol = requestUrl.protocol;
  if (protocol !== 'http:' && protocol !== 'https:') {
    return;
  }
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      var fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function (response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var responseToCache = response.clone();
        var req = event.request;
        caches.open(CACHE_NAME)
          .then(function (cache) {
            return cache.put(req, responseToCache);
          })
          .catch(function () {});
        return response;
      });
    })
  );
});
