const CACHE_NAME = "ls-quiz-v1";
const urlsToCache = [
  "/", 
  "/index.html",
  "/manifest.json",
  "/service-worker.js",
  // 👉 Add your CSS + JS files here
  "/styles.css",
  "/script.js",

  // 👉 Add icons
  "/icons/icon-192.png",
  "/icons/icon-512.png"

  // 👉 Add any images/resources you want offline
  // "/resources/dna-paper1.pdf",
  // "/resources/meiosis-notes.pdf"
];

// ✅ Install Service Worker & Cache Files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching app files...");
      return cache.addAll(urlsToCache);
    })
  );
});

// ✅ Activate SW & Remove Old Caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// ✅ Fetch from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If cached, return it
      if (response) {
        return response;
      }
      // Else fetch from network & cache it dynamically
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          // Cache a clone for next time
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        // 👉 Optional: fallback page for offline
        return caches.match("/index.html");
      });
    })
  );
});
