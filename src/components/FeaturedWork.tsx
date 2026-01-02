import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    size: 'large' as const,
  },
  {
    title: "E-commerce Redesign",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
    size: 'medium' as const,
  },
  {
    title: "Health & Wellness App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop",
    size: 'small' as const,
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
    size: 'medium' as const,
  },
  {
    title: "Social Platform",
    category: "UX Strategy",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop",
    size: 'small' as const,
  },
  {
    title: "Travel Experience",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    size: 'large' as const,
  },
];

const FeaturedWork = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mb-16 scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-px bg-primary" />
            <p className="font-space-mono text-xs tracking-widest text-primary">
              SELECTED PROJECTS
            </p>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="font-eb-garamond text-lg md:text-xl text-foreground/70 max-w-xl">
            A curated collection of projects where design meets purpose — 
            each piece crafted to create meaningful impact.
          </p>
        </div>

        {/* Masonry-style Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              index={index}
              size={project.size}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-space-mono text-sm text-foreground/60 mb-4">
            Want to see more?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 font-space-grotesk text-primary hover:text-primary/80 transition-colors group"
          >
            Let's discuss your project
            <span className="w-0 h-px bg-primary group-hover:w-8 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;