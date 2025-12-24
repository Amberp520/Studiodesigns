import { ArrowLeft, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Prototyping = () => {
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
            <Zap className="w-8 h-8 text-primary-foreground" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Prototyping</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12">
            Rapid iteration with interactive prototypes to validate ideas quickly and ensure the final product meets user expectations before development begins.
          </p>

          <div className="space-y-8">
            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">Prototyping Services</h2>
              <ul className="space-y-4">
                {[
                  "Low-fidelity wireframes for quick concept validation",
                  "High-fidelity interactive prototypes",
                  "Micro-interaction and animation design",
                  "User testing with clickable prototypes",
                  "Figma, Framer, and other modern tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">Prototyping Workflow</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Sketch", desc: "Quick concepts to explore possibilities" },
                  { step: "02", title: "Prototype", desc: "Interactive models for testing" },
                  { step: "03", title: "Iterate", desc: "Refine based on user feedback" },
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

export default Prototyping;
