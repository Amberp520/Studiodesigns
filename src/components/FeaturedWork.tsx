import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "A comprehensive financial dashboard designed to help users track investments, manage portfolios, and visualize market trends with intuitive data visualization.",
  },
  {
    title: "E-commerce Redesign",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Complete redesign of an e-commerce platform focusing on conversion optimization, seamless checkout flow, and enhanced product discovery experience.",
  },
  {
    title: "Health & Wellness App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    description: "A mobile application designed to help users track their wellness journey, featuring workout plans, nutrition tracking, and mindfulness exercises.",
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description: "Comprehensive brand identity system including logo design, color palette, typography guidelines, and visual language for consistent brand representation.",
  },
];

const FeaturedWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="work" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-up">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-up animation-delay-200">
            A selection of projects that showcase my approach to design.
          </p>
        </div>

        {/* Gallery Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Thumbnail Navigation - Left Side */}
          <div className="lg:w-24 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? "ring-2 ring-primary scale-105" 
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </button>
            ))}
          </div>

          {/* Main Display Area */}
          <div className="flex-1 flex flex-col lg:flex-row gap-8">
            {/* Project Images - 3 Angled Containers */}
            <div className="lg:w-2/3 relative h-[400px] lg:h-[500px]">
              {/* Left angled image */}
              <button 
                onClick={() => setActiveIndex((activeIndex + projects.length - 1) % projects.length)}
                className="absolute left-0 top-8 w-[45%] h-[85%] rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-105 group cursor-pointer border-2 border-transparent hover:border-primary/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                style={{ transform: "perspective(1000px) rotateY(5deg)" }}
              >
                <img
                  src={projects[(activeIndex + projects.length - 1) % projects.length].image}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/0 to-secondary/0 group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-secondary/20 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)))', padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', WebkitMaskComposite: 'xor' }} />
              </button>

              {/* Center image (main) */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[50%] h-[90%] rounded-2xl overflow-hidden z-10 transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] ring-2 ring-primary/30"
              >
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right angled image */}
              <button 
                onClick={() => setActiveIndex((activeIndex + 1) % projects.length)}
                className="absolute right-0 top-8 w-[45%] h-[85%] rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:scale-105 group cursor-pointer border-2 border-transparent hover:border-primary/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
                style={{ transform: "perspective(1000px) rotateY(-5deg)" }}
              >
                <img
                  src={projects[(activeIndex + 1) % projects.length].image}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-accent/0 to-secondary/0 group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-secondary/20 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)))', padding: '2px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', WebkitMaskComposite: 'xor' }} />
              </button>
            </div>

            {/* Project Info - Right Side */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="space-y-4">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold">
                  {activeProject.title}
                </h3>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                  {activeProject.category}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {activeProject.description}
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity group mt-4">
                  View Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-primary w-6" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
