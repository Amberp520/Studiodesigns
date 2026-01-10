import { ArrowLeft, Users, Target, Lightbulb, TrendingUp, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TravelBookingApp = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">Travel Booking App</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A travel product that simplifies trip planning with smart recommendations, seamless booking, and real-time updates.
            </p>
          </div>
        </section>

        {/* Project Overview Image */}
        <section className="container mx-auto px-6 mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&h=900&fit=crop" 
              alt="Travel Explore Screen"
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
                  <Plane className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Trip planning was overwhelming and time-consuming. Users bounced between 10+ tabs comparing flights, hotels, and activities, often abandoning plans due to decision fatigue.
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
                An all-in-one travel platform that curates personalized recommendations, bundles booking, and keeps all trip details organized with proactive updates.
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
                <h3 className="text-xl font-semibold mb-2">Traveler Interviews</h3>
                <p className="text-muted-foreground">
                  Interviewed 40+ travelers across different segments: solo adventurers, families, business travelers, and couples.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Journey Mapping</h3>
                <p className="text-muted-foreground">
                  Mapped the complete travel journey from inspiration to post-trip, identifying 12 key moments that matter.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Key Insight</h3>
                <p className="text-muted-foreground">
                  Travelers don't want more options—they want confident choices. Curation beats aggregation.
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
                <h3 className="text-xl font-semibold mb-4">Smart Trip Builder</h3>
                <p className="text-muted-foreground mb-4">
                  Designed an intelligent planning flow that asks the right questions and generates personalized itineraries.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Quick preference quiz (2 minutes)</li>
                  <li>• AI-curated destination suggestions</li>
                  <li>• Flexible vs. structured itinerary modes</li>
                  <li>• Budget-aware recommendations</li>
                </ul>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop" 
                  alt="Booking Flow"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop" 
                  alt="Trip Details"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-4">Trip Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Created a command center for trips that keeps travelers informed and prepared at every stage.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time flight and weather updates</li>
                  <li>• Offline access to all documents</li>
                  <li>• Day-by-day itinerary with maps</li>
                  <li>• Expense tracking and splitting</li>
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
                  <span className="text-4xl font-bold gradient-text">45%</span>
                </div>
                <p className="text-muted-foreground">Increase in completed bookings</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">70%</span>
                <p className="text-muted-foreground mt-2">Faster trip planning</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">4.8★</span>
                <p className="text-muted-foreground mt-2">App Store rating</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">65%</span>
                <p className="text-muted-foreground mt-2">Repeat booking rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Reduce Decision Fatigue</h3>
              <p className="text-muted-foreground">
                Limiting choices and providing clear recommendations increased conversion more than showing all options.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Trust Through Transparency</h3>
              <p className="text-muted-foreground">
                Showing price breakdowns and "why we recommend this" explanations built confidence in curated suggestions.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">The Trip Doesn't End at Booking</h3>
              <p className="text-muted-foreground">
                Investing in the post-booking experience (updates, documents, support) drove the highest NPS scores.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default TravelBookingApp;