const PREFIX = 'ChecksNBalances-';
const VERSION = 'v_01';
const CACHE_NAME = PREFIX + VERSION;

const FILES_TO_CACHE = [
    './index.html',
    './css/style.css',
    './icons/icon-72x72.png',
    './js/idb.js',
    './js/index.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(FILES_TO_CACHE)
        })
    )
});