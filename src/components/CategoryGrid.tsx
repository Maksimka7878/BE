import { Link } from 'react-router-dom';
import type { Category } from '@/types';

interface CategoryGridProps {
  categories: Category[];
  basePath: string;
}

export function CategoryGrid({ categories, basePath }: CategoryGridProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`${basePath}/${category.slug}`}
              className="group relative aspect-[3/4] overflow-hidden block"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              
              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-xs md:text-sm font-medium text-center lowercase tracking-wider drop-shadow-lg">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
