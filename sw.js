// service worker minimo: serve a Chrome/Android per proporre "Installa app".
// Non mette niente in cache: l'app ha sempre bisogno della rete per inviare
// le foto, e cosi' ogni aggiornamento del sito arriva subito
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
