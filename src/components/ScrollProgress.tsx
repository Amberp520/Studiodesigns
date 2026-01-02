import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 28;
  const strokeDashoffset = circumference * (1 - scrollProgress / 100);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 w-16 h-16 flex items-center justify-center transition-all duration-500 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {/* Outer decorative ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-amber/20 animate-pulse-glow" />
      
      {/* Progress Ring */}
      <svg className="absolute inset-0 w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        {/* Background track */}
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="hsl(var(--background))"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--coral))" />
            <stop offset="50%" stopColor="hsl(var(--amber))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        {/* Progress circle */}
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-150"
        />
      </svg>

      {/* Center icon */}
      <div className="relative z-10 w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </div>

      {/* Percentage text */}
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-space-mono text-[10px] text-foreground/50">
        {Math.round(scrollProgress)}%
      </span>
    </button>
  );
};

export default ScrollProgress;