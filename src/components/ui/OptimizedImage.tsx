import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    onLoad?: () => void;
}

export function OptimizedImage({
    src,
    alt,
    className,
    width,
    height,
    priority = false,
    onLoad,
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (priority) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '50px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    return (
        <div
            ref={imgRef}
            className={cn(
                'relative overflow-hidden bg-gray-100',
                className
            )}
            style={{ width, height }}
        >
            {/* Blur placeholder */}
            <div
                className={cn(
                    'absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transition-opacity duration-500',
                    isLoaded ? 'opacity-0' : 'opacity-100'
                )}
            />

            {/* Shimmer effect */}
            {!isLoaded && (
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}

            {/* Actual image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={priority ? 'eager' : 'lazy'}
                    fetchPriority={priority ? 'high' : 'auto'}
                    onLoad={handleLoad}
                    className={cn(
                        'w-full h-full object-cover transition-opacity duration-500',
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    )}
                />
            )}
        </div>
    );
}
