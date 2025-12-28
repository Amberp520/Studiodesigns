import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UXResearch = () => {
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
                UX Research
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-up">
                UX Research Methods That <span className="gradient-text">Actually Work</span>
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Dec 12, 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none opacity-0 animate-fade-up animation-delay-400">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Practical research techniques I use to understand users and validate design decisions before building.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-4">The Foundation of Good Design</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Great design starts with understanding. Before we sketch, wireframe, or prototype, we need to deeply understand the people we're designing for. UX research bridges the gap between assumptions and reality.
              </p>

              <h2 className="text-2xl font-semibold mt-12 mb-4">Research Methods I Recommend</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">User Interviews:</strong> One-on-one conversations that reveal motivations, pain points, and unmet needs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Usability Testing:</strong> Watch real users interact with your product to identify friction points.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">Card Sorting:</strong> Understand how users mentally organize information to inform your IA.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">A/B Testing:</strong> Data-driven validation of design decisions at scale.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-12 mb-4">Making Research Actionable</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The best research is useless if it doesn't lead to action. Create clear, prioritized recommendations and share findings with your entire team. Research should inform every design decision.
              </p>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UXResearch;
