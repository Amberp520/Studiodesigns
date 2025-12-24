import { ArrowLeft, Palette, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const UIDesign = () => {
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
            <Palette className="w-8 h-8 text-primary-foreground" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">UI Design</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12">
            Creating visually stunning interfaces that captivate and engage users through thoughtful design decisions and meticulous attention to detail.
          </p>

          <div className="space-y-8">
            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">What I Offer</h2>
              <ul className="space-y-4">
                {[
                  "Custom interface designs tailored to your brand identity",
                  "Responsive designs that work seamlessly across all devices",
                  "Design systems and component libraries for consistency",
                  "Visual hierarchy and typography optimization",
                  "Color theory and accessibility compliance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">My Process</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Research", desc: "Understanding your brand, audience, and goals" },
                  { step: "02", title: "Design", desc: "Creating stunning visuals that tell your story" },
                  { step: "03", title: "Refine", desc: "Iterating based on feedback until perfect" },
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

export default UIDesign;
