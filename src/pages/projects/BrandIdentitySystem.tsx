import { ArrowLeft, Users, Target, Lightbulb, TrendingUp, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BrandIdentitySystem = () => {
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Design System</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">Brand Identity System</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive brand identity system with scalable components and clear guidelines to ensure consistent brand representation across all touchpoints.
            </p>
          </div>
        </section>

        {/* Project Overview Image */}
        <section className="container mx-auto px-6 mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&h=900&fit=crop" 
              alt="Brand Logo Variations"
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
                  <Palette className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Inconsistent brand representation was diluting the company's market presence. Different teams used varying colors, fonts, and messaging, creating confusion for customers and internal stakeholders.
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
                A unified design system with clear documentation, reusable components, and governance processes that enables teams to move fast while maintaining brand consistency.
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
                <h3 className="text-xl font-semibold mb-2">Brand Audit</h3>
                <p className="text-muted-foreground">
                  Catalogued 200+ brand assets across 12 departments to understand the full scope of inconsistencies and usage patterns.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Stakeholder Interviews</h3>
                <p className="text-muted-foreground">
                  Spoke with 25+ team leads to understand their workflow challenges and what they needed from a design system.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Competitive Analysis</h3>
                <p className="text-muted-foreground">
                  Studied leading design systems (Material, Carbon, Polaris) to identify best practices for documentation and adoption.
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
                <h3 className="text-xl font-semibold mb-4">Foundation Elements</h3>
                <p className="text-muted-foreground mb-4">
                  Established the core visual language including color palette, typography scale, spacing system, and iconography.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Primary, secondary, and accent color systems</li>
                  <li>• Modular typography scale (8px base)</li>
                  <li>• Consistent spacing tokens</li>
                  <li>• Custom icon library (100+ icons)</li>
                </ul>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop" 
                  alt="Color System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop" 
                  alt="Brand Guidelines"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-4">Component Library</h3>
                <p className="text-muted-foreground mb-4">
                  Built a comprehensive component library with clear usage guidelines and code snippets for developers.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 50+ reusable UI components</li>
                  <li>• Figma library with auto-layout</li>
                  <li>• React component equivalents</li>
                  <li>• Accessibility guidelines for each</li>
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
                  <span className="text-4xl font-bold gradient-text">50%</span>
                </div>
                <p className="text-muted-foreground">Faster design-to-dev handoff</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">100%</span>
                <p className="text-muted-foreground mt-2">Brand consistency achieved</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">12</span>
                <p className="text-muted-foreground mt-2">Teams onboarded</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">3mo</span>
                <p className="text-muted-foreground mt-2">Full adoption timeline</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Documentation is Everything</h3>
              <p className="text-muted-foreground">
                A design system without clear documentation is just a collection of components. The "why" matters as much as the "what".
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Governance Enables Flexibility</h3>
              <p className="text-muted-foreground">
                Clear contribution guidelines and review processes actually increased innovation by giving teams confidence to build.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Adoption is a Product Problem</h3>
              <p className="text-muted-foreground">
                Treated the design system like a product with users (internal teams), requiring onboarding, support, and continuous improvement.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default BrandIdentitySystem;