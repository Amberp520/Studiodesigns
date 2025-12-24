import { ArrowDown, Sparkles } from "lucide-react";
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Available for freelance projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-up animation-delay-200">
            Crafting{" "}
            <span className="gradient-text">Digital</span>
            <br />
            Experiences
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-400">
            UI/UX Designer & Creative Developer specializing in beautiful, 
            user-centered digital products that make an impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-600">
            <a href="#work">
              <Button variant="gradient" size="xl">
                View My Work
              </Button>
            </a>
            <a href="#blog">
              <Button variant="glass" size="xl">
                Read the Blog
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
            <a 
              href="#work" 
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
