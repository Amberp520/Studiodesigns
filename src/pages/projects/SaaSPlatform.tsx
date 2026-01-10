import { ArrowLeft, Users, Target, Lightbulb, TrendingUp, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SaaSPlatform = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">SaaS Platform</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unified collaboration platform with intuitive workflows, real-time updates, and seamless integrations to improve team productivity.
            </p>
          </div>
        </section>

        {/* Project Overview Image */}
        <section className="container mx-auto px-6 mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&h=900&fit=crop" 
              alt="SaaS Dashboard"
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
                  <Layers className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Teams were juggling 5+ tools for project management, communication, and file sharing. Context switching was killing productivity, and important information was scattered across platforms.
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
                A unified workspace that brings projects, communication, and documents together in one intuitive interface with powerful search and smart notifications.
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
                <h3 className="text-xl font-semibold mb-2">Workflow Mapping</h3>
                <p className="text-muted-foreground">
                  Shadowed 10 teams for a week each to understand their actual workflows, tools, and pain points in daily operations.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tool Audit</h3>
                <p className="text-muted-foreground">
                  Analyzed the feature overlap and gaps across existing tools to identify what to consolidate and what to keep separate.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Key Insight</h3>
                <p className="text-muted-foreground">
                  Teams didn't need more features—they needed fewer, better-connected ones. Integration depth beats feature breadth.
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
                <h3 className="text-xl font-semibold mb-4">Unified Navigation</h3>
                <p className="text-muted-foreground mb-4">
                  Designed a flexible navigation system that adapts to different team structures while maintaining consistency.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Contextual sidebar based on current project</li>
                  <li>• Universal search across all content types</li>
                  <li>• Customizable quick actions</li>
                  <li>• Keyboard-first navigation</li>
                </ul>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                  alt="Team View"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop" 
                  alt="Settings"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-4">Real-Time Collaboration</h3>
                <p className="text-muted-foreground mb-4">
                  Built seamless real-time features that feel native, not bolted on—from live cursors to instant updates.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Presence indicators and live cursors</li>
                  <li>• Conflict-free collaborative editing</li>
                  <li>• Threaded discussions on any element</li>
                  <li>• Activity feeds that reduce noise</li>
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
                  <span className="text-4xl font-bold gradient-text">35%</span>
                </div>
                <p className="text-muted-foreground">Team productivity increase</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">60%</span>
                <p className="text-muted-foreground mt-2">Less context switching</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">4.6★</span>
                <p className="text-muted-foreground mt-2">G2 rating</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">500+</span>
                <p className="text-muted-foreground mt-2">Teams onboarded</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Conventions Over Configuration</h3>
              <p className="text-muted-foreground">
                Smart defaults and opinionated design reduced onboarding friction. Users prefer "it just works" over endless customization.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Performance is a Feature</h3>
              <p className="text-muted-foreground">
                Real-time features only work if they're fast. Invested heavily in optimistic updates and efficient data syncing.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Migration is the Product</h3>
              <p className="text-muted-foreground">
                Built extensive import tools and provided white-glove migration support. Reducing switching costs was key to adoption.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default SaaSPlatform;