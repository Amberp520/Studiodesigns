import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import apLogo from "@/assets/ap-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="flex items-center gap-2">
          <img src={apLogo} alt="AP Logo" className="w-10 h-10 object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Work", "About", "Blog", "Contact"].map((item) => (
            <a 
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="text-sm font-space-grotesk tracking-wider text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 pt-8 md:pt-12">
        {/* Name on single line */}
        <div className="opacity-0 animate-fade-up mb-8">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-foreground whitespace-nowrap">
            AMBER <span className="text-primary">PRECIOUS</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 mt-4">
          {/* Left - Roles */}
          <div className="md:col-span-3 flex flex-col gap-3 opacity-0 animate-fade-up animation-delay-200">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              <span className="font-space-mono text-xs tracking-wide text-foreground/70">UI/UX DESIGNER</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-amber" />
              <span className="font-space-mono text-xs tracking-wide text-foreground/70">PRODUCT DESIGNER</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              <span className="font-space-mono text-xs tracking-wide text-foreground/70">CREATIVE</span>
            </div>
          </div>

          {/* Center - Image */}
          <div className="md:col-span-5 relative opacity-0 animate-fade-up animation-delay-400">
            <div className="relative max-w-sm mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary to-amber rounded-full opacity-60 blur-sm animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full opacity-40 animate-float" />
              
              {/* Main image - no border/background */}
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&crop=face"
                alt="Amber Precious - UI/UX Designer"
                className="w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right - Description */}
          <div className="md:col-span-4 flex flex-col justify-center opacity-0 animate-fade-up animation-delay-600">
            <p className="font-space-mono text-xs tracking-widest text-primary mb-4">
              ✦ DESIGNS THAT STAY WITH YOU
            </p>
            <p className="font-eb-garamond text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
              Design, for me, is a way to explore the beauty and chaos of human experience. 
              Through every project, I aim to create products that users can see themselves in — 
              <span className="text-primary font-medium"> experiences that inspire</span>, 
              delight, and solve real problems.
            </p>
            <a href="#work">
              <Button className="gradient-bg text-primary-foreground hover:opacity-90 rounded-full px-8 py-6 font-space-grotesk tracking-wide shadow-warm transition-all hover:shadow-glow">
                Explore My Work
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 md:mt-20 pb-8 opacity-0 animate-fade-up animation-delay-800">
          <a 
            href="#work"
            className="font-space-mono text-xs tracking-wider text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group"
          >
            <span className="w-8 h-px bg-foreground/30 group-hover:w-12 group-hover:bg-primary transition-all" />
            SCROLL TO EXPLORE 
            <ArrowDown className="w-3 h-3 animate-bounce-gentle" />
          </a>
          
          <div className="text-right mt-8 md:mt-0">
            <p className="font-space-mono text-xs tracking-wider text-foreground/50">BASED IN NIGERIA</p>
            <p className="font-space-mono text-xs tracking-wider text-foreground/50">AVAILABLE FOR WORK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;