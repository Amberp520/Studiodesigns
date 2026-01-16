import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CV = () => {
  const experiences = [
    {
      role: "Senior Product Designer",
      company: "Design Studio",
      period: "2022 - Present",
      description: "Led product design for B2B SaaS platforms, improving user engagement by 40%. Collaborated with cross-functional teams to ship features used by 50K+ users.",
      achievements: [
        "Redesigned core dashboard, reducing user task completion time by 35%",
        "Established design system used across 5 product teams",
        "Mentored junior designers and led design critiques",
      ],
    },
    {
      role: "Product Designer",
      company: "Tech Startup",
      period: "2020 - 2022",
      description: "Owned end-to-end design for mobile and web products. Conducted user research and translated insights into actionable product improvements.",
      achievements: [
        "Launched 3 major product features from concept to delivery",
        "Increased conversion rates by 25% through UX optimization",
        "Built and maintained component library in Figma",
      ],
    },
    {
      role: "UI/UX Designer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Designed user interfaces for clients across fintech, healthcare, and e-commerce industries.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Created responsive designs for web and mobile platforms",
        "Collaborated with developers to ensure design fidelity",
      ],
    },
  ];

  const skills = {
    design: ["Product Design", "UI/UX Design", "Design Systems", "Prototyping", "User Research", "Wireframing"],
    tools: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "Miro"],
    development: ["HTML/CSS", "React", "Tailwind CSS", "JavaScript", "Git"],
    soft: ["Problem Solving", "Communication", "Leadership", "Collaboration", "Critical Thinking"],
  };

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Lagos",
      year: "2018",
    },
    {
      degree: "Google UX Design Professional Certificate",
      school: "Google",
      year: "2020",
    },
  ];

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <Button variant="gradient" className="group w-fit">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>

          {/* CV Content */}
          <div className="max-w-4xl mx-auto">
            {/* Personal Info Header */}
            <div className="glass-card rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center text-3xl font-bold text-primary-foreground">
                  PE
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Precious Emenike</h1>
                  <p className="text-xl text-primary mb-4">Product Designer</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-4 h-4" />
                      contact@preciousemenike.com
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4" />
                      +234 916 592 0038
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      Lagos, Nigeria
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 gradient-bg rounded-full"></span>
                Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Product Designer with 5+ years of experience crafting user-centered digital products. 
                I specialize in translating complex problems into intuitive, scalable solutions that 
                balance business goals with exceptional user experience. Passionate about design systems, 
                user research, and creating products that make a real impact.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 gradient-bg rounded-full"></span>
                Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="glass-card rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 gradient-bg rounded-full"></span>
                Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-5">
                  <h3 className="font-semibold mb-3 text-primary">Design</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.design.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-card rounded-xl p-5">
                  <h3 className="font-semibold mb-3 text-primary">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-card rounded-xl p-5">
                  <h3 className="font-semibold mb-3 text-primary">Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.development.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-card rounded-xl p-5">
                  <h3 className="font-semibold mb-3 text-primary">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 gradient-bg rounded-full"></span>
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="glass-card rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <span className="text-sm text-primary">{edu.year}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Connect */}
            <section className="glass-card rounded-2xl p-6 text-center">
              <h2 className="text-xl font-bold mb-4">Let's Connect</h2>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/precious-emenike-8650402b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Amberp520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://bloom-and-pixel.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default CV;
