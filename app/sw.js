/*
 * Service worker dell'app di controllo.
 *
 * Due compiti, per ora:
 *
 * 1. rendere l'app installabile a schermo intero (Chrome su Android lo chiede);
 * 2. non mostrare MAI una versione vecchia. GitHub Pages dice ai browser di
 *    tenere i file 10 minuti, e un'app installata non ha un pulsante per
 *    ricaricare: dopo T2 il telefono dell'operatore continuava a mostrare il
 *    guscio di T1. Ogni file dell'app si richiede con `cache: 'no-cache'`: il
 *    browser chiede a GitHub se e' cambiato, e se non lo e' riceve una risposta
 *    vuota e usa la copia che ha. Costa una domanda, non un download.
 *
 * Le chiamate a api.github.com non passano da qui: sono di un'altra origine.
 * In T11 si aggiungono le notifiche.
 */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request, { cache: 'no-cache' }));
});
