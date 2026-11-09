/* Gaon · Mi cuenta: service worker sencillo. Guarda solo la carcasa estática de la app.
   Nunca guarda nada de api/ (sesión, planes, pedidos, chat): eso va siempre a la red. */
const V = "gaon-app-5790801cfb";
const SHELL = ["mi-cuenta.html", "manifest.webmanifest", "css/site.css", "css/planificador.css", "css/soporte.css", "css/amaestro.css", "css/mi-cuenta.css", "js/site.js", "js/cuentas-nucleo.js", "js/cuentas.js", "js/plan-motor.js", "js/amaestro-nucleo.js", "js/adjuntos.js", "js/soporte-almacen.js", "js/soporte.js", "js/mi-cuenta.js", "fonts/archivo.woff2", "fonts/instrument.woff2", "img/favicon.svg", "img/app-192.png", "img/app-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("gaon-app-") && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;
  const ruta = u.pathname.slice(new URL(self.registration.scope).pathname.length);
  if (ruta.startsWith("api/")) return; // datos de la cuenta: solo red
  if (r.mode === "navigate") {
    if (ruta !== "mi-cuenta.html" && ruta !== "") return;
    e.respondWith(fetch(r).catch(() => caches.match("mi-cuenta.html")));
    return;
  }
  if (!SHELL.includes(ruta)) return;
  // Red primero (así nunca se mezcla una versión nueva con archivos viejos); la caché solo sirve sin conexión.
  e.respondWith(fetch(r).then(x => { if (x.ok) { const y = x.clone(); caches.open(V).then(c => c.put(r, y)); } return x; })
    .catch(() => caches.match(r, { ignoreSearch: true })));
});
