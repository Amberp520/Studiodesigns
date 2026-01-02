import { useState } from "react";

interface Shape {
  id: number;
  type: 'circle' | 'triangle' | 'square' | 'blob';
  x: number;
  y: number;
  size: number;
  color: string;
  animationDelay: number;
}

const shapes: Shape[] = [
  { id: 1, type: 'circle', x: 15, y: 20, size: 80, color: 'hsl(var(--coral) / 0.15)', animationDelay: 0 },
  { id: 2, type: 'blob', x: 75, y: 15, size: 120, color: 'hsl(var(--amber) / 0.12)', animationDelay: 2 },
  { id: 3, type: 'triangle', x: 85, y: 60, size: 60, color: 'hsl(var(--accent) / 0.1)', animationDelay: 1 },
  { id: 4, type: 'square', x: 10, y: 70, size: 50, color: 'hsl(var(--sage) / 0.12)', animationDelay: 3 },
  { id: 5, type: 'circle', x: 60, y: 80, size: 100, color: 'hsl(var(--coral-light) / 0.1)', animationDelay: 1.5 },
  { id: 6, type: 'blob', x: 30, y: 45, size: 90, color: 'hsl(var(--amber-light) / 0.08)', animationDelay: 2.5 },
];

const AnimatedBackground = () => {
  const [hoveredShape, setHoveredShape] = useState<number | null>(null);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute pointer-events-auto cursor-pointer transition-all duration-700 ${
            hoveredShape === shape.id ? 'scale-125 blur-0' : 'scale-100'
          }`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            animationDelay: `${shape.animationDelay}s`,
          }}
          onMouseEnter={() => setHoveredShape(shape.id)}
          onMouseLeave={() => setHoveredShape(null)}
        >
          {shape.type === 'circle' && (
            <div 
              className="w-full h-full rounded-full animate-float"
              style={{ 
                backgroundColor: shape.color,
                animationDelay: `${shape.animationDelay}s`,
              }}
            />
          )}
          {shape.type === 'blob' && (
            <div 
              className="w-full h-full animate-morph animate-float-slow"
              style={{ 
                backgroundColor: shape.color,
                animationDelay: `${shape.animationDelay}s`,
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <div 
              className="w-0 h-0 animate-float"
              style={{ 
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid ${shape.color}`,
                animationDelay: `${shape.animationDelay}s`,
              }}
            />
          )}
          {shape.type === 'square' && (
            <div 
              className="w-full h-full animate-float rotate-12"
              style={{ 
                backgroundColor: shape.color,
                borderRadius: '8px',
                animationDelay: `${shape.animationDelay}s`,
              }}
            />
          )}
        </div>
      ))}

      {/* Decorative lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;