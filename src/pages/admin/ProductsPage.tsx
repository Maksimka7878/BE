import { useState } from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';
import { womenProducts, menProducts } from '@/data/products';
import type { Product } from '@/types';

interface ProductWithGender extends Product {
    gender: 'women' | 'men';
}

export function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGender, setSelectedGender] = useState<'all' | 'women' | 'men'>('all');

    const allProducts: ProductWithGender[] = [
        ...womenProducts.map(p => ({ ...p, gender: 'women' as const })),
        ...menProducts.map(p => ({ ...p, gender: 'men' as const })),
    ];

    const filteredProducts = allProducts
        .filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.id.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesGender = selectedGender === 'all' || p.gender === selectedGender;
            return matchesSearch && matchesGender;
        })
        .slice(0, 50); // Limit for performance

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Товары</h1>
                    <p className="text-gray-500">{allProducts.length.toLocaleString()} товаров</p>
                </div>

                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                    <Plus className="w-5 h-5" />
                    Добавить товар
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Поиск по названию или ID..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                </div>

                <div className="flex gap-2">
                    {(['all', 'women', 'men'] as const).map((gender) => (
                        <button
                            key={gender}
                            onClick={() => setSelectedGender(gender)}
                            className={`px-4 py-2 rounded-xl font-medium transition-colors ${selectedGender === gender
                                ? 'bg-black text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {gender === 'all' ? 'Все' : gender === 'women' ? 'Женское' : 'Мужское'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Товар</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">ID</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Категория</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Цена</th>
                                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Статус</th>
                                <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">Действия</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredProducts.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-12 h-16 object-cover rounded-lg bg-gray-100"
                                            />
                                            <div>
                                                <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                                                <p className="text-xs text-gray-500">{product.colors} цветов</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">{product.id}</code>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-600">{product.category}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-medium">{product.price.toLocaleString()} ₽</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {product.badge ? (
                                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${product.badge === 'hit'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {product.badge.toUpperCase()}
                                            </span>
                                        ) : (
                                            <span className="text-gray-400 text-sm">—</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">Товары не найдены</p>
                    </div>
                )}
            </div>
        </div>
    );
}
