import { Palette, Code, Lightbulb, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { icon: Palette, title: "UI Design", description: "Creating visually stunning interfaces that captivate and engage users.", link: "/skills/ui-design" },
  { icon: Lightbulb, title: "UX Strategy", description: "Research-driven design decisions that solve real user problems.", link: "/skills/ux-strategy" },
  { icon: Code, title: "Development", description: "Bringing designs to life with clean, performant code.", link: "/skills/development" },
  { icon: Zap, title: "Prototyping", description: "Rapid iteration with interactive prototypes to validate ideas.", link: "/skills/prototyping" },
];

const AnimatedStat = ({ end, label }: { end: number; label: string }) => {
  const { count, ref } = useCountUp({ end, duration: 2000 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text">{count}+</div>
      <p className="text-sm text-muted-foreground font-space-mono">{label}</p>
    </div>
  );
};

const About = () => {
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();
  const { ref: skillsRef, isRevealed: skillsRevealed } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef as React.RefObject<HTMLDivElement>} className={`scroll-reveal-left ${contentRevealed ? 'revealed' : ''}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-primary" />
              <p className="font-space-mono text-xs tracking-widest text-primary">ABOUT ME</p>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Designing with <span className="gradient-text">Purpose</span>
            </h2>
            <p className="font-eb-garamond text-lg text-foreground/70 mb-6">
              Hi, I'm <span className="font-semibold text-foreground">Amber Precious</span> — a passionate 
              UI/UX Designer & Product Designer with over 5 years of experience creating 
              digital products that blend beauty with functionality.
            </p>
            <p className="font-eb-garamond text-lg text-foreground/70 mb-8">
              When I'm not pushing pixels or writing code, you'll find me exploring 
              new design trends, contributing to the design community, or enjoying a good cup of coffee.
            </p>
            <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-foreground/[0.02] border border-border">
              <AnimatedStat end={50} label="Projects" />
              <AnimatedStat end={5} label="Years" />
              <AnimatedStat end={30} label="Clients" />
            </div>
          </div>

          <div ref={skillsRef as React.RefObject<HTMLDivElement>} className={`grid grid-cols-2 gap-4 scroll-reveal-right ${skillsRevealed ? 'revealed' : ''}`}>
            {skills.map((skill, index) => (
              <Link key={skill.title} to={skill.link}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-warm transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-space-grotesk text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="font-eb-garamond text-sm text-foreground/60">{skill.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;