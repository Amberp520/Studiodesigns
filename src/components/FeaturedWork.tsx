import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectView {
  label: string;
  image: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  views: ProjectView[];
}

const projects: Project[] = [
  {
    title: "Fintech Dashboard",
    category: "Product Design",
    description: "Problem: Users struggled to understand investment performance. Solution: A fintech product with clear data visualization that helps users track investments, understand performance, and make informed financial decisions. Impact: 40% increase in user engagement.",
    views: [
      { label: "Dashboard Overview", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
      { label: "Analytics View", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
      { label: "Mobile Interface", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "E-commerce Redesign",
    category: "Product Design",
    description: "Problem: High cart abandonment and poor product discovery. Solution: End-to-end product redesign focusing on streamlined checkout flow and personalized recommendations. Impact: 25% reduction in cart abandonment.",
    views: [
      { label: "Homepage", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" },
      { label: "Product Page", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop" },
      { label: "Checkout Flow", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Health & Wellness App",
    category: "Product Design",
    description: "Problem: Users lacked motivation to maintain healthy habits. Solution: A mobile product that gamifies wellness through personalized workout plans, nutrition tracking, and progress milestones. Impact: 60% user retention improvement.",
    views: [
      { label: "Home Screen", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop" },
      { label: "Workout Tracker", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop" },
      { label: "Progress Stats", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Brand Identity System",
    category: "Design System",
    description: "Problem: Inconsistent brand representation across touchpoints. Solution: Comprehensive brand identity system with scalable components and clear guidelines. Impact: 50% faster design-to-development handoff.",
    views: [
      { label: "Logo Variations", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" },
      { label: "Color System", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop" },
      { label: "Brand Guidelines", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "SaaS Platform",
    category: "Product Design",
    description: "Problem: Teams struggled with fragmented collaboration tools. Solution: Unified SaaS platform with intuitive workflows, real-time updates, and seamless integrations. Impact: 35% improvement in team productivity.",
    views: [
      { label: "Dashboard", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop" },
      { label: "Team View", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" },
      { label: "Settings", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop" },
    ],
  },
  {
    title: "Travel Booking App",
    category: "Product Design",
    description: "Problem: Trip planning was overwhelming and time-consuming. Solution: A travel product that simplifies booking with smart recommendations and real-time updates. Impact: 45% increase in completed bookings.",
    views: [
      { label: "Explore", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop" },
      { label: "Booking Flow", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop" },
      { label: "Trip Details", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop" },
    ],
  },
];

const FeaturedWork = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeViewIndex, setActiveViewIndex] = useState(1); // Center card starts in front
  const activeProject = projects[activeProjectIndex];

  const getCardStyle = (index: number) => {
    // Calculate position based on which card is active (in front)
    const positions = [
      { // Left position
        left: "0%",
        top: "10%",
        transform: "perspective(1000px) rotateY(15deg)",
        zIndex: 5,
      },
      { // Center position (front)
        left: "31%",
        top: "10%",
        transform: "perspective(1000px) rotateY(0deg)",
        zIndex: 20,
      },
      { // Right position
        left: "auto",
        right: "0%",
        top: "10%",
        transform: "perspective(1000px) rotateY(-15deg)",
        zIndex: 5,
      },
    ];

    // Calculate which position this card should be in based on activeViewIndex
    const offset = (index - activeViewIndex + 3) % 3;
    const positionIndex = offset === 0 ? 1 : offset === 1 ? 2 : 0;
    
    return positions[positionIndex];
  };

  const handleCardClick = (index: number) => {
    if (index !== activeViewIndex) {
      setActiveViewIndex(index);
    }
  };

  return (
    <section id="work" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-up">
            Product <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-up animation-delay-200">
            A selection of product design projects where I solved real user problems 
            through research, strategy, and thoughtful design.
          </p>
        </div>

        {/* Gallery Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Thumbnail Navigation - Left Side */}
          <div className="lg:w-24 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 lg:max-h-[500px] scrollbar-hide">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveProjectIndex(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-500 ease-out ${
                  activeProjectIndex === index 
                    ? "ring-2 ring-primary scale-105 shadow-lg" 
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <img
                  src={project.views[0].image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {activeProjectIndex === index && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </button>
            ))}
          </div>

          {/* Main Display Area */}
          <div className="flex-1 flex flex-col lg:flex-row gap-8">
            {/* Project Images - 3 Angled Containers showing same project */}
            <div className="lg:w-2/3 relative h-[400px] lg:h-[500px]">
            {activeProject.views.map((view, index) => {
                const style = getCardStyle(index);
                const isCenter = index === activeViewIndex;
                
                return (
                  <div
                    key={view.label}
                    onClick={() => handleCardClick(index)}
                    className={`absolute rounded-2xl overflow-hidden transition-all duration-700 ease-out group w-[35%] aspect-square ${
                      !isCenter ? "cursor-pointer hover:scale-[1.02]" : ""
                    }`}
                    style={{
                      left: style.left,
                      right: style.right,
                      top: style.top,
                      transform: style.transform,
                      zIndex: style.zIndex,
                    }}
                  >
                    {/* Card with 3D shadow */}
                    <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] ${
                      isCenter ? "ring-2 ring-primary/30" : ""
                    }`}>
                      <img
                        src={view.image}
                        alt={view.label}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Animated gradient border - always visible */}
                      <div 
                        className="absolute inset-0 rounded-2xl pointer-events-none animate-border-spin"
                        style={{
                          background: 'conic-gradient(from var(--border-angle, 0deg), hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))',
                          padding: '2px',
                          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          maskComposite: 'xor',
                          WebkitMaskComposite: 'xor',
                        }}
                      />

                      {/* View label */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium">{view.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Project Info - Right Side */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="space-y-4">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {String(activeProjectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
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
                
                {/* View labels */}
                <div className="flex gap-2 pt-2">
                  {activeProject.views.map((view) => (
                    <span
                      key={view.label}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {view.label}
                    </span>
                  ))}
                </div>

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
              onClick={() => setActiveProjectIndex(index)}
              className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                activeProjectIndex === index 
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