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

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-24 z-50 w-12 h-12 rounded-full glass-card border border-border/50 flex items-center justify-center transition-all duration-300 group hover:border-primary/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {/* Progress Ring */}
      <svg className="absolute inset-0 w-12 h-12 -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 20}`}
          strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
          className="transition-all duration-150"
        />
      </svg>
      <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  );
};

export default ScrollProgress;
