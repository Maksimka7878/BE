/**
 * BroadcastService - Cross-tab communication
 */

type MessageHandler = (data: any) => void;

class BroadcastServiceClass {
    private static instance: BroadcastServiceClass;
    private channel: BroadcastChannel | null = null;
    private handlers: Map<string, MessageHandler[]> = new Map();

    private constructor() {
        if ('BroadcastChannel' in window) {
            this.channel = new BroadcastChannel('befree-app');
            this.channel.onmessage = this.handleMessage.bind(this);
        }
    }

    static getInstance(): BroadcastServiceClass {
        if (!BroadcastServiceClass.instance) {
            BroadcastServiceClass.instance = new BroadcastServiceClass();
        }
        return BroadcastServiceClass.instance;
    }

    private handleMessage(event: MessageEvent): void {
        const { type, payload } = event.data;
        const handlers = this.handlers.get(type) || [];
        handlers.forEach((handler) => handler(payload));
    }

    // Subscribe to a message type
    on(type: string, handler: MessageHandler): () => void {
        const handlers = this.handlers.get(type) || [];
        handlers.push(handler);
        this.handlers.set(type, handlers);

        // Return unsubscribe function
        return () => {
            const current = this.handlers.get(type) || [];
            this.handlers.set(
                type,
                current.filter((h) => h !== handler)
            );
        };
    }

    // Send message to all tabs
    send(type: string, payload?: any): void {
        if (this.channel) {
            this.channel.postMessage({ type, payload });
        }
    }

    // Cart sync
    syncCart(items: any[]): void {
        this.send('CART_UPDATE', { items });
    }

    // User session sync
    syncSession(user: any): void {
        this.send('SESSION_UPDATE', { user });
    }
}

export const BroadcastService = BroadcastServiceClass.getInstance();
