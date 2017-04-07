var CACHE_NAME = 'ln-cache';
var CACHED_URLS = [
  'offline.html',
  'assets/script/tabs.js',    
  'assets/styles/styles.css',
    'assets/img/authur.jpg',
    'assets/img/beaut.jpg',
    'assets/img/galaxy.jpg',
    'assets/img/kong.jpg',
    'assets/img/power.jpg',
    'assets/img/smurf.jpg',
    'assets/img/home-a.svg',
    'assets/img/location.svg',
    'assets/img/news.svg',
    'assets/img/prom.svg'
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('offline.html');
        }
      });
    })
  );
});


