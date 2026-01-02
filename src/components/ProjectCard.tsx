import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
  size?: 'large' | 'medium' | 'small';
}

const ProjectCard = ({ title, category, image, index, size = 'medium' }: ProjectCardProps) => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.2 });

  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-1 md:row-span-1',
    small: 'md:col-span-1 md:row-span-1',
  };

  const aspectClasses = {
    large: 'aspect-[4/3]',
    medium: 'aspect-square',
    small: 'aspect-[3/4]',
  };

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative overflow-hidden cursor-pointer rounded-2xl ${sizeClasses[size]} scroll-reveal ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className={`${aspectClasses[size]} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-space-mono tracking-wide bg-primary/90 text-primary-foreground mb-3">
              {category}
            </span>
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-background">{title}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-warm">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
    </div>
  );
};

export default ProjectCard;