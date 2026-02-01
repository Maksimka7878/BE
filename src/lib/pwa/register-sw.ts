/**
 * PWA Service Worker Registration with iOS-specific fixes
 */

// Detect iOS
export const isIOS = (): boolean => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
};

// Detect if running as PWA
export const isStandalone = (): boolean => {
    return (
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true
    );
};

// Register service worker with iOS fixes
export const registerServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
    if (!('serviceWorker' in navigator)) {
        console.warn('[PWA] Service Worker not supported');
        return null;
    }

    try {
        // iOS-specific: Wait for load event
        if (isIOS()) {
            await new Promise<void>((resolve) => {
                if (document.readyState === 'complete') {
                    resolve();
                } else {
                    window.addEventListener('load', () => resolve());
                }
            });
        }

        const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
            updateViaCache: 'none',
        });

        // Check for updates periodically (important for iOS)
        setInterval(() => {
            registration.update();
        }, 60 * 1000); // Every minute

        // Handle updates
        registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        // New content available, show update prompt
                        dispatchEvent(new CustomEvent('sw-update-available'));
                    }
                });
            }
        });

        console.log('[PWA] Service Worker registered successfully');
        return registration;
    } catch (error) {
        console.error('[PWA] Service Worker registration failed:', error);
        return null;
    }
};

// Force update the service worker
export const updateServiceWorker = async (): Promise<void> => {
    const registration = await navigator.serviceWorker.ready;
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    window.location.reload();
};
