const PREFIX = 'ChecksNBalances-';
const VERSION = 'v_01';
const CACHE_NAME = PREFIX + VERSION;

const FILES_TO_CACHE = [
    './index.html',
    './css/styles.css',
    './js/idb.js',
    './js/index.js'
];

// The following 3 event listener code blocks were copied and modified from the University of Texas Code Bootcamp Module 19 project.
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE)
    })
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
    .then(function(keylist) {
      let cacheKeepList = keylist.filter(function(key) {
        return key.indexOf(PREFIX);
      });

      cacheKeepList.push(CACHE_NAME)

      return Promise.all(
        keylist.map(function(key, i) {
          if (cacheKeepList.indexOf(key) === -1) {
            return caches.delete(keylist[i]);
          }
        })
      )
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(request) {
      return request || fetch(event.request)
    })
  )
});