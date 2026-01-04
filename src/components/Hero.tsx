import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import apLogo from "@/assets/ap-logo.png";
import heroCutout from "@/assets/hero-cutout.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
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

      {/* Main Content - JAXON STEEL Style */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 pt-8 md:pt-12">
        
        {/* Background Name - Large Text Behind Image */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full opacity-0 animate-fade-up pointer-events-none">
          <h1 className="font-playfair text-[12vw] md:text-[10vw] font-black tracking-tighter text-foreground/[0.06] whitespace-nowrap text-center leading-none">
            AMBER PRECIOUS
          </h1>
        </div>

        {/* Foreground Name */}
        <div className="opacity-0 animate-fade-up mb-8 relative z-10">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-foreground whitespace-nowrap">
            AMBER <span className="text-primary">PRECIOUS</span>
          </h1>
        </div>

        {/* Content Grid with Cutout Image */}
        <div className="grid md:grid-cols-12 gap-8 mt-4 relative">
          {/* Left - Description */}
          <div className="md:col-span-4 flex flex-col justify-center opacity-0 animate-fade-up animation-delay-200 order-2 md:order-1">
            <p className="font-eb-garamond text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
              I create clean, modern interfaces and seamless experiences that 
              turn user needs into business growth.
            </p>
            
            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["UI/UX Designer", "Product Designer", "Creative"].map((role) => (
                <span 
                  key={role}
                  className="px-3 py-1.5 rounded-full text-xs font-space-mono tracking-wide border border-foreground/20 text-foreground/70"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Center - Cutout Image */}
          <div className="md:col-span-4 relative opacity-0 animate-fade-up animation-delay-400 order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent blur-2xl scale-110" />
              
              {/* Cutout Image - No border, no background */}
              <img 
                src={heroCutout}
                alt="Amber Precious - UI/UX Designer"
                className="relative z-10 w-full max-w-sm h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right - CTA */}
          <div className="md:col-span-4 flex flex-col justify-center items-end opacity-0 animate-fade-up animation-delay-600 order-3">
            <a href="#contact">
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 font-space-grotesk tracking-wide border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                Book a free call
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Skills Bar */}
        <div className="mt-16 md:mt-24 pb-8 opacity-0 animate-fade-up animation-delay-800">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { icon: "✏️", label: "Wireframing" },
              { icon: "💻", label: "Web App" },
              { icon: "🎯", label: "UX Design" },
              { icon: "🎨", label: "UI Design" },
              { icon: "🔍", label: "User Research" },
              { icon: "📱", label: "Mobile App Design" },
            ].map((skill) => (
              <div 
                key={skill.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 hover:border-primary/50 transition-colors group"
              >
                <span className="text-primary">{skill.icon}</span>
                <span className="font-space-mono text-xs tracking-wide text-foreground/70 group-hover:text-foreground transition-colors">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-between items-end mt-8 pb-8">
          <a 
            href="#work"
            className="font-space-mono text-xs tracking-wider text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group"
          >
            <span className="w-8 h-px bg-foreground/30 group-hover:w-12 group-hover:bg-primary transition-all" />
            SCROLL TO EXPLORE 
            <ArrowDown className="w-3 h-3 animate-bounce-gentle" />
          </a>
          
          <div className="text-right">
            <p className="font-space-mono text-xs tracking-wider text-foreground/50">BASED IN NIGERIA</p>
            <p className="font-space-mono text-xs tracking-wider text-foreground/50">AVAILABLE FOR WORK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
