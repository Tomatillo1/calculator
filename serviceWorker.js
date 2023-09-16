const staticCalculator = "calculator-test";
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/main.js",
    "/image/launch-640x1136.png",
    "/image/launch-750x1294.png",
    "/image/launch-1125x2436.png",
    "/image/launch-1242x2436.png",
    "/image/launch-1536x2048.png",
    "/image/launch-1668x2224.png",
    "/image/launch-2048x2732.png"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCalculator).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});