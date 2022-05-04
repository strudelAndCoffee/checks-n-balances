const PREFIX = 'ChecksNBalances-';
const VERSION = 'v_01';
const CACHE_NAME = PREFIX + VERSION;

const FILES_TO_CACHE = [
    './index.html',
    './css/styles.css',
    './js/idb.js',
    './js/index.js'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
          console.log('installing cache : ' + CACHE_NAME)
          return cache.addAll(FILES_TO_CACHE)
        })
      )
});