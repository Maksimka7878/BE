/**
 * NotificationService - Singleton for managing push notifications
 */

import { get, set } from 'idb-keyval';

type NotificationPermissionState = 'granted' | 'denied' | 'default';

interface QueuedNotification {
    id: string;
    title: string;
    body: string;
    timestamp: number;
    read: boolean;
}

class NotificationServiceClass {
    private static instance: NotificationServiceClass;
    private broadcastChannel: BroadcastChannel | null = null;

    private constructor() {
        if ('BroadcastChannel' in window) {
            this.broadcastChannel = new BroadcastChannel('befree-notifications');
        }
    }

    static getInstance(): NotificationServiceClass {
        if (!NotificationServiceClass.instance) {
            NotificationServiceClass.instance = new NotificationServiceClass();
        }
        return NotificationServiceClass.instance;
    }

    // Check if notifications are supported
    isSupported(): boolean {
        return 'Notification' in window && 'serviceWorker' in navigator;
    }

    // Get current permission status
    getPermission(): NotificationPermissionState {
        if (!this.isSupported()) return 'denied';
        return Notification.permission as NotificationPermissionState;
    }

    // Request notification permission
    async requestPermission(): Promise<NotificationPermissionState> {
        if (!this.isSupported()) return 'denied';

        try {
            const permission = await Notification.requestPermission();
            return permission as NotificationPermissionState;
        } catch (error) {
            console.error('[Notifications] Permission request failed:', error);
            return 'denied';
        }
    }

    // Show a local notification
    async showNotification(title: string, body: string, options?: NotificationOptions): Promise<void> {
        if (this.getPermission() !== 'granted') {
            // Queue for later
            await this.queueNotification(title, body);
            return;
        }

        try {
            const registration = await navigator.serviceWorker.ready;
            await registration.showNotification(title, {
                body,
                icon: '/icons/icon-192x192.png',
                badge: '/icons/icon-192x192.png',
                ...options,
            });
        } catch (error) {
            console.error('[Notifications] Failed to show notification:', error);
        }
    }

    // Broadcast notification to all tabs
    broadcastNotification(title: string, body: string): void {
        if (this.broadcastChannel) {
            this.broadcastChannel.postMessage({
                type: 'SHOW_NOTIFICATION',
                title,
                body,
            });
        }
    }

    // Queue notification for offline
    async queueNotification(title: string, body: string): Promise<void> {
        const queue = (await get<QueuedNotification[]>('notification-queue')) || [];
        queue.push({
            id: crypto.randomUUID(),
            title,
            body,
            timestamp: Date.now(),
            read: false,
        });
        await set('notification-queue', queue);
    }

    // Get queued notifications
    async getQueuedNotifications(): Promise<QueuedNotification[]> {
        return (await get<QueuedNotification[]>('notification-queue')) || [];
    }

    // Clear notification queue
    async clearQueue(): Promise<void> {
        await set('notification-queue', []);
    }

    // Process queued notifications (call when online)
    async processQueue(): Promise<void> {
        const queue = await this.getQueuedNotifications();
        if (queue.length === 0) return;

        for (const notification of queue) {
            if (!notification.read) {
                await this.showNotification(notification.title, notification.body);
            }
        }
        await this.clearQueue();
    }
}

export const NotificationService = NotificationServiceClass.getInstance();
