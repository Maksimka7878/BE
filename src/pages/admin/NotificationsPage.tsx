import { useState } from 'react';
import { Send, Bell, Users, Clock } from 'lucide-react';
import { NotificationService } from '@/lib/notifications';

export function NotificationsPage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [sentNotifications, setSentNotifications] = useState<Array<{
        id: string;
        title: string;
        body: string;
        timestamp: Date;
    }>>([]);

    const handleSendNotification = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) return;

        setIsSending(true);

        try {
            // Request permission if not granted
            const permission = NotificationService.getPermission();
            if (permission === 'default') {
                await NotificationService.requestPermission();
            }

            // Send notification
            await NotificationService.showNotification(title, body);
            NotificationService.broadcastNotification(title, body);

            // Add to sent list
            setSentNotifications(prev => [
                { id: crypto.randomUUID(), title, body, timestamp: new Date() },
                ...prev
            ]);

            // Clear form
            setTitle('');
            setBody('');
        } catch (error) {
            console.error('Failed to send notification:', error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold">Уведомления</h1>
                <p className="text-gray-500">Отправка push-уведомлений пользователям</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Send Form */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Новое уведомление
                    </h2>

                    <form onSubmit={handleSendNotification} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Заголовок
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Например: Новая коллекция!"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                maxLength={50}
                            />
                            <p className="text-xs text-gray-400 mt-1">{title.length}/50 символов</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Текст уведомления
                            </label>
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                placeholder="Описание уведомления..."
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                                maxLength={200}
                            />
                            <p className="text-xs text-gray-400 mt-1">{body.length}/200 символов</p>
                        </div>

                        <button
                            type="submit"
                            disabled={isSending || !title.trim() || !body.trim()}
                            className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSending ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Отправка...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Отправить всем
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Stats */}
                <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Подписчиков</p>
                                <p className="text-2xl font-bold">1,247</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                <Bell className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Отправлено сегодня</p>
                                <p className="text-2xl font-bold">{sentNotifications.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sent Notifications */}
            {sentNotifications.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        История отправок
                    </h2>

                    <div className="space-y-3">
                        {sentNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="flex items-start justify-between p-4 bg-gray-50 rounded-xl"
                            >
                                <div>
                                    <p className="font-medium">{notification.title}</p>
                                    <p className="text-sm text-gray-500">{notification.body}</p>
                                </div>
                                <p className="text-xs text-gray-400">
                                    {notification.timestamp.toLocaleTimeString('ru-RU', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
