let cacheData = 'appV1';
this.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/vendors~main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        '/static/media/logo1.ef15cafb.png',
        '/manifest.json',
        '/logo192.png',
        '/favicon.ico',
        '/index.html',
        '/',
      ]);
    })
  );
});
//Thực hiện fetch dữ liệu và lưu vào cache
this.addEventListener('fetch', (e) => {
  if (!navigator.onLine) {
    //show popup notification when internet is not working
    if (e.request.url === 'http://localhost:3000/static/js/bundle.js') {
      console.log('pooup must to show here');
      e.waitUntil(
        this.registration.showNotification('Network', {
          body: 'Internet is not working',
        })
      );
    }
    e.respondWith(
      caches.match(e.request).then((res) => {
        if (res) {
          return res;
        }
        let requestUrl = e.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
