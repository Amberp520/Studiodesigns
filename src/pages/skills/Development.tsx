import { ArrowLeft, Code, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Development = () => {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link to="/#about">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to About
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
            <Code className="w-8 h-8 text-primary-foreground" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Development</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12">
            Bringing designs to life with clean, performant code that ensures your digital products are fast, accessible, and delightful to use.
          </p>

          <div className="space-y-8">
            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies I Use</h2>
              <ul className="space-y-4">
                {[
                  "React, TypeScript, and modern JavaScript frameworks",
                  "Tailwind CSS and CSS-in-JS solutions",
                  "Responsive and mobile-first development",
                  "Animation libraries like Framer Motion",
                  "Performance optimization and SEO best practices",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Setup", desc: "Clean architecture and modern tooling" },
                  { step: "02", title: "Build", desc: "Component-based, scalable development" },
                  { step: "03", title: "Deploy", desc: "Testing, optimization, and launch" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{item.step}</div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link to="/#contact">
              <Button variant="gradient" size="xl">
                Let's Work Together
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Development;
