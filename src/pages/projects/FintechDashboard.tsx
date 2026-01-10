import { ArrowLeft, Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FintechDashboard = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-16">
          <Link to="/#work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
          
          <div className="max-w-4xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Product Design</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">Fintech Dashboard</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive investment tracking platform designed to help users understand their financial performance and make informed decisions.
            </p>
          </div>
        </section>

        {/* Project Overview Image */}
        <section className="container mx-auto px-6 mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop" 
              alt="Fintech Dashboard Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="container mx-auto px-6 mb-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Users struggled to understand their investment performance across multiple accounts. The existing tools were cluttered with unnecessary data, making it difficult to identify trends and take action on their financial goals.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">The Solution</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A clean, intuitive dashboard that surfaces the most important insights first. Clear data visualization helps users track performance, understand trends, and make informed financial decisions at a glance.
              </p>
            </div>
          </div>
        </section>

        {/* Research Phase */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Research & Discovery</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">User Interviews</h3>
                <p className="text-muted-foreground">
                  Conducted 15+ interviews with retail investors to understand their pain points, goals, and daily financial routines.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Competitive Analysis</h3>
                <p className="text-muted-foreground">
                  Analyzed 8 competing platforms to identify gaps in the market and opportunities for differentiation.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Key Insights</h3>
                <p className="text-muted-foreground">
                  Users wanted quick answers: "Am I on track?" and "What should I do next?" - not endless charts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Design Process & Iterations</h2>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Low-Fidelity Wireframes</h3>
                <p className="text-muted-foreground mb-4">
                  Started with paper sketches and low-fi wireframes to quickly explore different information architectures. Tested 3 different dashboard layouts with users.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Explored single-page vs. tabbed navigation</li>
                  <li>• Tested different chart placement strategies</li>
                  <li>• Validated information hierarchy with users</li>
                </ul>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                  alt="Analytics View"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop" 
                  alt="Mobile Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-4">High-Fidelity Prototypes</h3>
                <p className="text-muted-foreground mb-4">
                  Developed detailed prototypes with real data to test usability and visual clarity. Iterated based on user feedback across 4 rounds of testing.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Refined color coding for gains/losses</li>
                  <li>• Simplified navigation based on user flows</li>
                  <li>• Added personalized insights feature</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Measurable Outcomes</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="text-4xl font-bold gradient-text">40%</span>
                </div>
                <p className="text-muted-foreground">Increase in user engagement</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">65%</span>
                <p className="text-muted-foreground mt-2">Faster task completion</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">4.8/5</span>
                <p className="text-muted-foreground mt-2">User satisfaction score</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">50%</span>
                <p className="text-muted-foreground mt-2">Reduction in support tickets</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Less is More in Financial Data</h3>
              <p className="text-muted-foreground">
                Users don't need every metric visible at once. Progressive disclosure and smart defaults create a better experience.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Context Matters</h3>
              <p className="text-muted-foreground">
                Raw numbers are meaningless without context. Showing comparisons and trends helps users understand their actual performance.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Mobile-First Thinking</h3>
              <p className="text-muted-foreground">
                Many users check their investments on-the-go. Designing for mobile constraints first led to a cleaner desktop experience too.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default FintechDashboard;