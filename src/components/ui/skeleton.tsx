import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "relative overflow-hidden bg-gray-200 rounded-md",
        "before:absolute before:inset-0 before:-translate-x-full",
        "before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent",
        className
      )}
      {...props}
    />
  )
}

// Product Card Skeleton
function ProductCardSkeleton() {
  return (
    <div className="group relative">
      <Skeleton className="aspect-[2/3] w-full mb-3" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Skeleton className="h-4 w-20 mt-2" />
    </div>
  );
}

// Product Grid Skeleton
function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Hero Skeleton
function HeroSkeleton() {
  return <Skeleton className="w-full aspect-[16/9] md:aspect-[21/9]" />;
}

// Category Grid Skeleton
function CategoryGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="aspect-square w-full rounded-lg" />
      ))}
    </div>
  );
}

export {
  Skeleton,
  ProductCardSkeleton,
  ProductGridSkeleton,
  HeroSkeleton,
  CategoryGridSkeleton
}
