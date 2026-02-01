/// <reference lib="webworker" />
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

declare let self: ServiceWorkerGlobalScope;

// Precache static assets (injected by vite-plugin-pwa)
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// Cache Google Fonts
registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
    new CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
            new CacheableResponsePlugin({ statuses: [0, 200] }),
            new ExpirationPlugin({ maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 }),
        ],
    })
);

// Cache images with CacheFirst
registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'images-cache',
        plugins: [
            new CacheableResponsePlugin({ statuses: [0, 200] }),
            new ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }),
        ],
    })
);

// Cache CSS and JS with StaleWhileRevalidate
registerRoute(
    ({ request }) => request.destination === 'style' || request.destination === 'script',
    new StaleWhileRevalidate({
        cacheName: 'static-resources',
    })
);

// API requests with NetworkFirst
registerRoute(
    ({ url }) => url.pathname.startsWith('/api/'),
    new NetworkFirst({
        cacheName: 'api-cache',
        networkTimeoutSeconds: 10,
        plugins: [
            new CacheableResponsePlugin({ statuses: [0, 200] }),
            new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 }),
        ],
    })
);

// Handle navigation requests (SPA)
registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        cacheName: 'navigations',
        networkTimeoutSeconds: 3,
    })
);

// Listen for push notifications
self.addEventListener('push', (event) => {
    const data = event.data?.json() ?? { title: 'BEFREE', body: 'Новое уведомление' };

    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: '/icons/icon-192x192.png',
            badge: '/icons/icon-192x192.png',
            data: data.url || '/',
        })
    );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    event.waitUntil(
        self.clients.matchAll({ type: 'window' }).then((clientList) => {
            // Focus existing window or open new one
            for (const client of clientList) {
                if ('focus' in client) {
                    return client.focus();
                }
            }
            return self.clients.openWindow(event.notification.data || '/');
        })
    );
});

// Broadcast channel for cross-tab communication
const broadcast = new BroadcastChannel('befree-notifications');

broadcast.onmessage = (event) => {
    if (event.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: '/icons/icon-192x192.png',
        });
    }
};

// Skip waiting and claim clients immediately
self.addEventListener('message', (event) => {
    if (event.data?.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});
