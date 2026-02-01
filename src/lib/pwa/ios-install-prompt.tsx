import { useState, useEffect } from 'react';
import { X, Share, Plus } from 'lucide-react';
import { isIOS, isStandalone } from './register-sw';

interface IOSInstallPromptProps {
    onDismiss?: () => void;
}

export function IOSInstallPrompt({ onDismiss }: IOSInstallPromptProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if should show prompt
        const dismissed = localStorage.getItem('ios-install-dismissed');
        if (dismissed) {
            setIsDismissed(true);
            return;
        }

        // Only show on iOS Safari when not in standalone mode
        if (isIOS() && !isStandalone()) {
            // Delay showing to not interrupt initial experience
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('ios-install-dismissed', 'true');
        onDismiss?.();
    };

    if (!isVisible || isDismissed) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-md mx-auto">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">BF</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Установите BEFREE</h3>
                            <p className="text-xs text-gray-500">Добавьте на главный экран</p>
                        </div>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Закрыть"
                    >
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                {/* Instructions */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                            <Share className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">1. Нажмите «Поделиться»</p>
                            <p className="text-xs text-gray-500">Внизу экрана Safari</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                            <Plus className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">2. «На экран "Домой"»</p>
                            <p className="text-xs text-gray-500">Прокрутите меню вниз</p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Быстрый доступ
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Работает офлайн
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Уведомления
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
