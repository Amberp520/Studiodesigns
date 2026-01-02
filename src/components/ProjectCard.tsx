import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, image, index }: ProjectCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden cursor-pointer opacity-0 animate-fade-up border border-foreground/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-space-mono text-xs tracking-wider text-primary mb-1">{category.toUpperCase()}</p>
            <h3 className="font-playfair text-lg font-semibold text-foreground">{title}</h3>
          </div>
          <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
