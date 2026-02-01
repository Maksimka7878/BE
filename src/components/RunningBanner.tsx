import { useEffect, useRef } from 'react';

export function RunningBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    
    let animationId: number;
    let position = 0;
    
    const animate = () => {
      position -= 0.5;
      const width = scrollElement.scrollWidth / 2;
      
      if (Math.abs(position) >= width) {
        position = 0;
      }
      
      scrollElement.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  const message = 'Бесплатная доставка от 2000₽ | До 2000₽ всего 159₽';
  const items = Array(10).fill(message);
  
  return (
    <div className="bg-[#f5f5f5] py-3 overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {items.map((text, index) => (
          <span key={index} className="flex items-center flex-shrink-0">
            <span className="text-xs md:text-sm font-medium text-gray-700 px-4 md:px-6">
              {text}
            </span>
            <span className="text-gray-400">•</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((text, index) => (
          <span key={`dup-${index}`} className="flex items-center flex-shrink-0">
            <span className="text-xs md:text-sm font-medium text-gray-700 px-4 md:px-6">
              {text}
            </span>
            <span className="text-gray-400">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
