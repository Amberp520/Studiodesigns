import { ArrowLeft, Users, Target, Lightbulb, TrendingUp, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EcommerceRedesign = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">E-commerce Redesign</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              End-to-end product redesign focusing on streamlined checkout flow and personalized product discovery to reduce cart abandonment.
            </p>
          </div>
        </section>

        {/* Project Overview Image */}
        <section className="container mx-auto px-6 mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop" 
              alt="E-commerce Homepage"
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
                  <ShoppingCart className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The platform was experiencing a 72% cart abandonment rate. Users found product discovery overwhelming and the checkout process had too many friction points, leading to lost conversions.
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
                A complete UX overhaul with intelligent product recommendations, simplified checkout in 3 steps, and persistent cart that syncs across devices. Focus on building trust at every step.
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
                <h3 className="text-xl font-semibold mb-2">Funnel Analysis</h3>
                <p className="text-muted-foreground">
                  Mapped the entire user journey from landing to purchase, identifying 7 major drop-off points in the conversion funnel.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Session Recordings</h3>
                <p className="text-muted-foreground">
                  Reviewed 200+ session recordings to understand actual user behavior, frustration points, and navigation patterns.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">User Surveys</h3>
                <p className="text-muted-foreground">
                  Collected feedback from 500+ customers to understand their expectations, concerns, and reasons for abandonment.
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
                <h3 className="text-xl font-semibold mb-4">Checkout Flow Redesign</h3>
                <p className="text-muted-foreground mb-4">
                  Reduced the checkout from 5 steps to 3, with clear progress indicators and the ability to edit any section without losing data.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Guest checkout as default option</li>
                  <li>• Auto-fill for returning customers</li>
                  <li>• Multiple payment options visible upfront</li>
                  <li>• Real-time order summary updates</li>
                </ul>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop" 
                  alt="Checkout Flow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop" 
                  alt="Product Page"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-4">Product Discovery Enhancement</h3>
                <p className="text-muted-foreground mb-4">
                  Implemented AI-powered recommendations and improved filtering to help users find products faster and more intuitively.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Personalized homepage based on history</li>
                  <li>• Smart filters that learn preferences</li>
                  <li>• Visual search functionality</li>
                  <li>• Quick view without page navigation</li>
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
                  <span className="text-4xl font-bold gradient-text">25%</span>
                </div>
                <p className="text-muted-foreground">Reduction in cart abandonment</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">32%</span>
                <p className="text-muted-foreground mt-2">Increase in conversion rate</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">18%</span>
                <p className="text-muted-foreground mt-2">Higher average order value</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">45%</span>
                <p className="text-muted-foreground mt-2">Faster checkout completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Trust Signals Matter</h3>
              <p className="text-muted-foreground">
                Adding security badges, clear return policies, and social proof at checkout significantly reduced hesitation.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Reduce Cognitive Load</h3>
              <p className="text-muted-foreground">
                Every additional field or option increases abandonment. Only ask for what's absolutely necessary at each step.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Speed is a Feature</h3>
              <p className="text-muted-foreground">
                Optimizing page load times had as much impact on conversion as UX improvements. Performance is part of the experience.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default EcommerceRedesign;