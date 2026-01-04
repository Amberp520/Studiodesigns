import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description: "A comprehensive financial management platform with real-time analytics and intuitive controls.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    id: 2,
    title: "E-commerce Redesign",
    category: "Product Design",
    description: "Complete overhaul of shopping experience with focus on conversion and user delight.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    id: 3,
    title: "Health & Wellness App",
    category: "Mobile Design",
    description: "A holistic health tracking app that makes wellness accessible and engaging.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    description: "Strategic brand development from logo to full visual identity guidelines.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 5,
    title: "Social Platform",
    category: "UX Strategy",
    description: "Community-driven platform designed to foster meaningful connections.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    year: "2023",
  },
];

const FeaturedWork = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const [activeProject, setActiveProject] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveProject(prev => Math.max(0, prev - 1));
    } else {
      setActiveProject(prev => Math.min(projects.length - 1, prev + 1));
    }
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-foreground">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground to-foreground/95" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 scroll-reveal ${headerRevealed ? 'revealed' : ''}`}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-primary" />
              <p className="font-space-mono text-xs tracking-widest text-primary">
                SELECTED PROJECTS
              </p>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-background">
              Featured <span className="text-primary">Work</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <button 
              onClick={() => scrollToProject('left')}
              disabled={activeProject === 0}
              className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-primary hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToProject('right')}
              disabled={activeProject === projects.length - 1}
              className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-primary hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Project - Large Display */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Project Image */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* View Project Button */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <button className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow">
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-space-mono tracking-wide bg-primary/20 text-primary mb-4">
                {projects[activeProject].category}
              </span>
              <span className="ml-3 font-space-mono text-xs text-background/40">
                {projects[activeProject].year}
              </span>
            </div>
            
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-background mb-4">
              {projects[activeProject].title}
            </h3>
            
            <p className="font-eb-garamond text-lg text-background/70 mb-8 max-w-md">
              {projects[activeProject].description}
            </p>
            
            <a 
              href="#"
              className="inline-flex items-center gap-2 font-space-grotesk text-sm text-primary hover:text-primary/80 transition-colors group"
            >
              View Case Study
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`flex-shrink-0 relative group transition-all duration-300 ${
                activeProject === index 
                  ? 'w-32 md:w-40' 
                  : 'w-24 md:w-32 opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`aspect-square overflow-hidden rounded-xl transition-all duration-300 ${
                activeProject === index ? 'ring-2 ring-primary' : ''
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`font-space-mono text-xs mt-2 truncate transition-colors ${
                activeProject === index ? 'text-primary' : 'text-background/50'
              }`}>
                {project.title}
              </p>
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-background/10 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-primary transition-all duration-500"
              style={{ width: `${((activeProject + 1) / projects.length) * 100}%` }}
            />
          </div>
          <span className="font-space-mono text-xs text-background/50">
            {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-space-mono text-sm text-background/40 mb-4">
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
