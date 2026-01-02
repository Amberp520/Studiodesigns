import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-purple-400/20 to-blue-400/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="font-playfair text-xl font-bold tracking-tight">EP.</div>
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Work", "About", "Blog", "Contact"].map((item) => (
            <a 
              key={item}
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="text-sm font-space-grotesk tracking-wider text-foreground/80 hover:text-foreground transition-colors"
            >
              [{item.toUpperCase()}]
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 pt-8 md:pt-16">
        {/* Large Name */}
        <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-[0.85] opacity-0 animate-fade-up">
          <span className="block">EMENIKE</span>
          <span className="block text-foreground/90">PRECIOUS</span>
        </h1>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 mt-8 md:mt-12">
          {/* Left - Roles */}
          <div className="md:col-span-3 flex flex-col gap-2 opacity-0 animate-fade-up animation-delay-200">
            <div className="inline-block bg-foreground/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-foreground/10">
              <span className="font-space-mono text-sm tracking-wide">[ UI/UX DESIGNER ]</span>
            </div>
            <div className="inline-block bg-foreground/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-foreground/10">
              <span className="font-space-mono text-sm tracking-wide">[ PRODUCT DESIGNER ]</span>
            </div>
            <div className="inline-block bg-foreground/5 backdrop-blur-sm px-4 py-2 rounded-sm border border-foreground/10">
              <span className="font-space-mono text-sm tracking-wide">[ CREATIVE ]</span>
            </div>
          </div>

          {/* Center - Image placeholder */}
          <div className="md:col-span-5 relative opacity-0 animate-fade-up animation-delay-400">
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-sm rotate-45 opacity-80" />
              
              {/* Main image area */}
              <div className="relative h-full bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-sm overflow-hidden border border-foreground/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Emenike Precious - UI/UX Designer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="md:col-span-4 flex flex-col justify-center opacity-0 animate-fade-up animation-delay-600">
            <p className="font-space-mono text-xs tracking-widest text-foreground/60 mb-4">
              [ DESIGNS THAT STAY WITH YOU ]
            </p>
            <p className="font-eb-garamond text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
              Design, for me, is a way to explore the beauty and chaos of human experience. 
              Through every project, I aim to create products that users can see themselves in — 
              <span className="underline decoration-primary decoration-2 underline-offset-4">experiences that inspire</span>, 
              delight, and solve real problems.
            </p>
            <a href="#work">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 font-space-grotesk tracking-wide">
                Explore My Work
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 md:mt-24 pb-8 opacity-0 animate-fade-up animation-delay-600">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <a 
              href="#work"
              className="font-space-mono text-xs tracking-wider text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2"
            >
              FEATURED PROJECT <ArrowDown className="w-3 h-3" />
            </a>
          </div>
          
          <div className="text-right">
            <p className="font-space-mono text-xs tracking-wider text-foreground/60">UI/UX DESIGNER</p>
            <p className="font-space-mono text-xs tracking-wider text-foreground/60">PRODUCT DESIGNER</p>
            <p className="font-space-mono text-xs tracking-wider text-foreground/60">CREATIVE DEVELOPER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
