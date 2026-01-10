import { Lightbulb } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-purple/20 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-red/15 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Product Designer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200">
            Designing Products That{" "}
            <span className="gradient-text">Solve</span>
            <br />
            Real Problems
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-400">
            Product Designer specializing in user-centered digital products that 
            balance business goals, usability, and visual clarity to create real impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-600">
            <a href="#work">
              <Button variant="gradient" size="xl">
                View Product Work
              </Button>
            </a>
            <a 
              href="https://wa.me/2349165920038?text=Hello%2C%20I%20am%20interested%20in%20your%20work.%20My%20name%20is%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="glass" size="xl">
                Let's Build a Product
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
