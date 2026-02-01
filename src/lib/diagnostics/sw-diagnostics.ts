/**
 * Service Worker Diagnostics Utility
 */

export interface SWDiagnostics {
    isSupported: boolean;
    isRegistered: boolean;
    isActive: boolean;
    scope: string | null;
    state: string | null;
    updateAvailable: boolean;
    notificationsSupported: boolean;
    notificationPermission: string;
    pushSupported: boolean;
    broadcastChannelSupported: boolean;
    indexedDBSupported: boolean;
    cacheStorageSupported: boolean;
    isOnline: boolean;
    isStandalone: boolean;
    platform: string;
}

export async function getSWDiagnostics(): Promise<SWDiagnostics> {
    const isSupported = 'serviceWorker' in navigator;
    let isRegistered = false;
    let isActive = false;
    let scope: string | null = null;
    let state: string | null = null;
    let updateAvailable = false;

    if (isSupported) {
        try {
            const registration = await navigator.serviceWorker.getRegistration();
            if (registration) {
                isRegistered = true;
                scope = registration.scope;

                if (registration.active) {
                    isActive = true;
                    state = registration.active.state;
                }

                if (registration.waiting) {
                    updateAvailable = true;
                }
            }
        } catch (error) {
            console.error('[Diagnostics] Failed to get SW registration:', error);
        }
    }

    const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true;

    let platform = 'unknown';
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        platform = 'ios';
    } else if (/Android/.test(navigator.userAgent)) {
        platform = 'android';
    } else if (/Windows/.test(navigator.userAgent)) {
        platform = 'windows';
    } else if (/Mac/.test(navigator.userAgent)) {
        platform = 'macos';
    }

    return {
        isSupported,
        isRegistered,
        isActive,
        scope,
        state,
        updateAvailable,
        notificationsSupported: 'Notification' in window,
        notificationPermission: 'Notification' in window ? Notification.permission : 'denied',
        pushSupported: 'PushManager' in window,
        broadcastChannelSupported: 'BroadcastChannel' in window,
        indexedDBSupported: 'indexedDB' in window,
        cacheStorageSupported: 'caches' in window,
        isOnline: navigator.onLine,
        isStandalone,
        platform,
    };
}

// Console-friendly diagnostics output
export async function logDiagnostics(): Promise<void> {
    const diag = await getSWDiagnostics();

    console.group('🔧 BEFREE PWA Diagnostics');
    console.log('%c Platform', 'font-weight: bold', diag.platform);
    console.log('%c Standalone Mode', 'font-weight: bold', diag.isStandalone ? '✅ Yes' : '❌ No');
    console.log('%c Online', 'font-weight: bold', diag.isOnline ? '✅ Yes' : '❌ Offline');
    console.log('---');
    console.log('%c Service Worker', 'font-weight: bold');
    console.log('  Supported:', diag.isSupported ? '✅' : '❌');
    console.log('  Registered:', diag.isRegistered ? '✅' : '❌');
    console.log('  Active:', diag.isActive ? '✅' : '❌');
    console.log('  State:', diag.state);
    console.log('  Scope:', diag.scope);
    console.log('  Update Available:', diag.updateAvailable ? '⚠️ Yes' : 'No');
    console.log('---');
    console.log('%c Features', 'font-weight: bold');
    console.log('  Notifications:', diag.notificationsSupported ? '✅' : '❌');
    console.log('  Permission:', diag.notificationPermission);
    console.log('  Push:', diag.pushSupported ? '✅' : '❌');
    console.log('  BroadcastChannel:', diag.broadcastChannelSupported ? '✅' : '❌');
    console.log('  IndexedDB:', diag.indexedDBSupported ? '✅' : '❌');
    console.log('  CacheStorage:', diag.cacheStorageSupported ? '✅' : '❌');
    console.groupEnd();
}

// Expose to window for easy debugging
if (typeof window !== 'undefined') {
    (window as any).befree = {
        diagnostics: getSWDiagnostics,
        logDiagnostics,
    };
}
