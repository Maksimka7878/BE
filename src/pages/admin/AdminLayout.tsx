import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Bell, Settings, LogOut, Menu, X } from 'lucide-react';

const ADMIN_PASSWORD = 'befree2024';

export function AdminLayout() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('admin-auth') === 'true';
    });
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('admin-auth', 'true');
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Неверный пароль');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('admin-auth');
        setIsAuthenticated(false);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-2xl">BF</span>
                        </div>
                        <h1 className="text-2xl font-bold">Админ-панель</h1>
                        <p className="text-gray-500 text-sm mt-1">Введите пароль для входа</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Пароль"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                autoFocus
                            />
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                        >
                            Войти
                        </button>
                    </form>

                    <Link to="/" className="block text-center text-sm text-gray-500 mt-6 hover:text-black transition-colors">
                        ← Вернуться на сайт
                    </Link>
                </div>
            </div>
        );
    }

    const navItems = [
        { path: '/admin', icon: LayoutDashboard, label: 'Дашборд' },
        { path: '/admin/products', icon: Package, label: 'Товары' },
        { path: '/admin/notifications', icon: Bell, label: 'Уведомления' },
        { path: '/admin/settings', icon: Settings, label: 'Настройки' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:flex w-64 bg-white border-r border-gray-100 flex-col">
                <div className="p-6 border-b border-gray-100">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold">BF</span>
                        </div>
                        <span className="font-bold text-lg">BEFREE Admin</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                                    ? 'bg-black text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors w-full"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Выйти</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 inset-x-0 bg-white border-b border-gray-100 z-40">
                <div className="flex items-center justify-between px-4 h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">BF</span>
                        </div>
                        <span className="font-bold">Admin</span>
                    </Link>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2"
                    >
                        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <>
                    <div
                        className="lg:hidden fixed inset-0 bg-black/30 z-40"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    <div className="lg:hidden fixed top-16 left-0 bottom-0 w-64 bg-white z-50 border-r border-gray-100 overflow-y-auto">
                        <nav className="p-4 space-y-1">
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                                            ? 'bg-black text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                        <div className="p-4 border-t border-gray-100">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors w-full"
                            >
                                <LogOut className="w-5 h-5" />
                                <span className="font-medium">Выйти</span>
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Main Content */}
            <main className="flex-1 lg:p-8 p-4 pt-20 lg:pt-8">
                <Outlet />
            </main>
        </div>
    );
}
