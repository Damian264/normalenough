/*
 * Service worker dell'app di controllo.
 *
 * Per ora serve solo a rendere l'app installabile come app a schermo intero:
 * Chrome su Android lo chiede. Non mette in cache niente, quindi le richieste
 * vanno in rete come senza di lui. In T11 si aggiungono le notifiche.
 */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
