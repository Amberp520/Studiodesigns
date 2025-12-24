import { Palette, Code, Lightbulb, Zap } from "lucide-react";
import { Link } from "react-router-dom";

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

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
              Designing with <span className="gradient-text">Purpose</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 opacity-0 animate-fade-up animation-delay-200">
              Hi, I'm <span className="font-semibold text-foreground">Emenike Precious</span> — a passionate 
              UI/UX Designer & Product Designer with over 5 years of experience creating 
              digital products that blend beauty with functionality. My approach centers 
              on understanding users deeply and crafting experiences that feel intuitive 
              and delightful.
            </p>
            <p className="text-muted-foreground text-lg mb-8 opacity-0 animate-fade-up animation-delay-400">
              When I'm not pushing pixels or writing code, you'll find me exploring 
              new design trends, contributing to the design community, or enjoying 
              a good cup of coffee.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 opacity-0 animate-fade-up animation-delay-600">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">30+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Link
                key={skill.title}
                to={skill.link}
                className="glass-card rounded-2xl p-6 hover-lift opacity-0 animate-fade-up cursor-pointer group"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
