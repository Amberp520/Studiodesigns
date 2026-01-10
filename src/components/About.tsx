import { Palette, Code, Lightbulb, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";

const capabilities = [
  {
    icon: Palette,
    title: "UI Design",
    description: "Designing clear, scalable interfaces that support product usability and create visual clarity.",
    link: "/skills/ui-design",
  },
  {
    icon: Lightbulb,
    title: "UX Strategy",
    description: "Defining user flows, journeys, and product structure through research and strategic thinking.",
    link: "/skills/ux-strategy",
  },
  {
    icon: Code,
    title: "Development",
    description: "Collaborating with developers and building where needed to ensure technical feasibility.",
    link: "/skills/development",
  },
  {
    icon: Zap,
    title: "Prototyping",
    description: "Rapid prototyping to test and validate product ideas before committing to full development.",
    link: "/skills/prototyping",
  },
];

const AnimatedStat = ({ end, label }: { end: number; label: string }) => {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  
  return (
    <div ref={ref}>
      <div className="text-3xl md:text-4xl font-bold gradient-text">{count}+</div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
              Designing Products with <span className="gradient-text">Purpose</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 opacity-0 animate-fade-up animation-delay-200">
              I'm <span className="font-semibold text-foreground">Emenike Precious</span> — a Product Designer 
              who helps teams transform ideas into intuitive, scalable digital products. My work starts 
              with understanding users deeply and ends with solutions that create real value.
            </p>
            <p className="text-muted-foreground text-lg mb-8 opacity-0 animate-fade-up animation-delay-400">
              I think end-to-end: from research and ideation to design and validation. I don't just 
              design screens — I solve problems, define product structure, and ensure every decision 
              serves both users and business goals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 opacity-0 animate-fade-up animation-delay-600">
              <AnimatedStat end={50} label="Products Designed" />
              <AnimatedStat end={5} label="Years Experience" />
              <AnimatedStat end={30} label="Happy Clients" />
            </div>
          </div>

          {/* Capabilities Grid */}
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-4 opacity-0 animate-fade-up">
              How I Design Products
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <Link
                  key={capability.title}
                  to={capability.link}
                  className="glass-card rounded-2xl p-6 hover-lift opacity-0 animate-fade-up cursor-pointer group"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <capability.icon className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{capability.title}</h4>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
