import { Palette, Code, Lightbulb, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";

const skills = [
  {
    icon: Palette,
    title: "UI Design",
    description: "Creating visually stunning interfaces that captivate and engage users.",
    link: "/skills/ui-design",
  },
  {
    icon: Lightbulb,
    title: "UX Strategy",
    description: "Research-driven design decisions that solve real user problems.",
    link: "/skills/ux-strategy",
  },
  {
    icon: Code,
    title: "Development",
    description: "Bringing designs to life with clean, performant code.",
    link: "/skills/development",
  },
  {
    icon: Zap,
    title: "Prototyping",
    description: "Rapid iteration with interactive prototypes to validate ideas.",
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
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="font-space-mono text-xs tracking-widest text-foreground/60 mb-4 opacity-0 animate-fade-up">
              [ ABOUT ME ]
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-200">
              Designing with Purpose
            </h2>
            <p className="font-eb-garamond text-lg text-foreground/70 mb-6 opacity-0 animate-fade-up animation-delay-400">
              Hi, I'm <span className="font-semibold text-foreground">Emenike Precious</span> — a passionate 
              UI/UX Designer & Product Designer with over 5 years of experience creating 
              digital products that blend beauty with functionality. My approach centers 
              on understanding users deeply and crafting experiences that feel intuitive 
              and delightful.
            </p>
            <p className="font-eb-garamond text-lg text-foreground/70 mb-8 opacity-0 animate-fade-up animation-delay-600">
              When I'm not pushing pixels or writing code, you'll find me exploring 
              new design trends, contributing to the design community, or enjoying 
              a good cup of coffee.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 opacity-0 animate-fade-up animation-delay-600">
              <AnimatedStat end={50} label="Projects Completed" />
              <AnimatedStat end={5} label="Years Experience" />
              <AnimatedStat end={30} label="Happy Clients" />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Link
                key={skill.title}
                to={skill.link}
                className="bg-foreground/[0.03] border border-foreground/10 rounded-none p-6 hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-up cursor-pointer group"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <skill.icon className="w-6 h-6" />
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
