import { Package, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { womenProducts, menProducts } from '@/data/products';

export function Dashboard() {
    const totalProducts = womenProducts.length + menProducts.length;

    const stats = [
        {
            label: 'Всего товаров',
            value: totalProducts.toLocaleString(),
            icon: Package,
            change: '+12%',
            color: 'bg-blue-500'
        },
        {
            label: 'Заказов сегодня',
            value: '47',
            icon: ShoppingBag,
            change: '+8%',
            color: 'bg-green-500'
        },
        {
            label: 'Посетители',
            value: '1,234',
            icon: Users,
            change: '+23%',
            color: 'bg-purple-500'
        },
        {
            label: 'Конверсия',
            value: '3.8%',
            icon: TrendingUp,
            change: '+2%',
            color: 'bg-orange-500'
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold">Дашборд</h1>
                <p className="text-gray-500">Обзор статистики магазина</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">{stat.label}</p>
                                <p className="text-3xl font-bold mt-1">{stat.value}</p>
                                <p className="text-green-500 text-sm mt-2">{stat.change} за неделю</p>
                            </div>
                            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="font-bold text-lg mb-4">Последние заказы</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                                <div>
                                    <p className="font-medium">Заказ #{1000 + i}</p>
                                    <p className="text-sm text-gray-500">2 товара • Москва</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold">{(Math.random() * 10000 + 1000).toFixed(0)} ₽</p>
                                    <p className="text-xs text-green-500">Оплачен</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="font-bold text-lg mb-4">Популярные категории</h2>
                    <div className="space-y-4">
                        {['Платья', 'Джинсы', 'Верхняя одежда', 'Трикотаж', 'Аксессуары'].map((cat, i) => (
                            <div key={cat} className="flex items-center gap-4">
                                <div className="w-full bg-gray-100 rounded-full h-3">
                                    <div
                                        className="bg-black rounded-full h-3 transition-all"
                                        style={{ width: `${100 - i * 15}%` }}
                                    />
                                </div>
                                <span className="text-sm font-medium w-24 text-right">{cat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
