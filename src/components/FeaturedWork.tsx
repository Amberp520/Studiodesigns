import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "E-commerce Redesign",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Health & Wellness App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-24 relative bg-foreground/[0.02]">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-space-mono text-xs tracking-widest text-foreground/60 mb-4 opacity-0 animate-fade-up">
            [ SELECTED PROJECTS ]
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-up animation-delay-200">
            Featured Work
          </h2>
          <p className="font-eb-garamond text-lg text-foreground/70 opacity-0 animate-fade-up animation-delay-400">
            A selection of projects that showcase my approach to design — 
            combining aesthetics with functionality to create memorable experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
