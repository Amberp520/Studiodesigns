import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReadTracking } from "@/hooks/useReadTracking";

const MotionDesign = () => {
  useReadTracking("motion-design");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Link to="/#blog">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>

            {/* Article Header */}
            <div className="mb-12">
              <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium gradient-bg text-primary-foreground mb-4">
                Animation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
                Motion Design: <span className="gradient-text">Adding Life to Interfaces</span>
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Dec 5, 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  6 min read
                </span>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none opacity-0 animate-fade-up animation-delay-400">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Why thoughtful animation can transform a good interface into a great one, with practical examples.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-4">The Power of Motion</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Motion is a powerful design tool that goes beyond aesthetics. When used purposefully, animation can guide attention, provide feedback, and create emotional connections with users.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-4">Principles of Effective Motion</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Purpose:</strong> Every animation should serve a function, whether guiding attention or providing feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Timing:</strong> The duration and easing of animations significantly impact how they feel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Subtlety:</strong> The best animations are often the ones users don't consciously notice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Performance:</strong> Smooth 60fps animations require careful optimization.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-12 mb-4">Where to Start</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Begin with micro-interactions—button hovers, loading states, and transitions between states. These small touches add up to create a polished, professional experience that users will love.
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MotionDesign;
