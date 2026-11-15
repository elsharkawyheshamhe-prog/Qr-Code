var C="emg-v1",F=["./","index.html","qrcode.min.js","manifest.json","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return Promise.all(F.map(function(u){return c.add(u).catch(function(){})}))}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(n){var cp=n.clone();caches.open(C).then(function(c){c.put(e.request,cp)});return n}).catch(function(){return r})}))});
