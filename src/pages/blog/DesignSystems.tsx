import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DesignSystems = () => {
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
                Design Systems
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
                The Art of Design Systems: <span className="gradient-text">Building for Scale</span>
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Dec 18, 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none opacity-0 animate-fade-up animation-delay-400">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                How to create a design system that grows with your product and keeps your team aligned on visual language.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-4">Why Design Systems Matter</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A design system is more than just a collection of components—it's a shared language that enables teams to build consistent, scalable products. When implemented correctly, it can dramatically speed up development while maintaining visual coherence across your entire product ecosystem.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-4">Key Principles</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Consistency:</strong> Every component should follow the same design patterns and principles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Flexibility:</strong> Components should be adaptable to different contexts while maintaining their core identity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Documentation:</strong> Clear guidelines ensure everyone understands how and when to use each component.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-12 mb-4">Getting Started</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Start with an audit of your existing design patterns. Identify the components that are used most frequently and begin standardizing them. Remember, a design system is a living document that evolves with your product.
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DesignSystems;
