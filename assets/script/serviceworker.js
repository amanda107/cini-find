var CACHE_NAME = 'ln-cache';
var CACHED_URLS = [
  'offline.html',
  'assets/styles/styles.css',
    'https://fonts.googleapis.com/css?family=Roboto',
    'assets/img/authur.jpg',
    'assets/img/beaut.jpg',
    'assets/img/galaxy.jpg',
    'assets/img/kong.jpg',
    'assets/img/moana.jpg',
    'assets/img/power.jpg',
    'assets/img/smurf.jpg',
    'assets/img/home-a.svg',
    'assets/img/location.svg',
    'assets/img/news.svg',
    'assets/img/prom.svg',
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('gih-cache').then(function(cache) {
      return cache.add('offline.html');
    })
  );
});
