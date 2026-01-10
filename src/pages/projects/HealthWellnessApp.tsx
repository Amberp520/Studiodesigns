import { ArrowLeft, Users, Target, Lightbulb, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HealthWellnessApp = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">Health & Wellness App</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A mobile product that gamifies wellness through personalized workout plans, nutrition tracking, and meaningful progress milestones.
            </p>
          </div>
        </section>

        {/* Project Overview Image */}
        <section className="container mx-auto px-6 mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=900&fit=crop" 
              alt="Health App Home Screen"
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
                  <Heart className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Users lacked motivation to maintain healthy habits long-term. Most wellness apps saw 80% drop-off after the first month due to generic programs and lack of personalization.
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
                A habit-building platform that adapts to individual goals, celebrates small wins, and creates accountability through community features and smart reminders.
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
                <h3 className="text-xl font-semibold mb-2">Behavioral Research</h3>
                <p className="text-muted-foreground">
                  Studied habit formation psychology and interviewed 30+ users who had both succeeded and failed with wellness apps.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Retention Analysis</h3>
                <p className="text-muted-foreground">
                  Analyzed retention patterns across 5 competing apps to identify what keeps users engaged beyond the first week.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Key Insight</h3>
                <p className="text-muted-foreground">
                  Users don't lack motivation—they lack the right feedback loops. Small, immediate rewards drive long-term behavior change.
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
                <h3 className="text-xl font-semibold mb-4">Gamification System</h3>
                <p className="text-muted-foreground mb-4">
                  Designed a reward system that balances intrinsic and extrinsic motivation, avoiding the pitfalls of over-gamification.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Streak system with recovery options</li>
                  <li>• Achievement badges tied to real progress</li>
                  <li>• Weekly challenges with community participation</li>
                  <li>• Progress visualization that inspires</li>
                </ul>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop" 
                  alt="Workout Tracker"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 aspect-video rounded-xl overflow-hidden bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop" 
                  alt="Progress Stats"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-4">Personalization Engine</h3>
                <p className="text-muted-foreground mb-4">
                  Built an adaptive system that learns user preferences and adjusts recommendations based on behavior patterns.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Onboarding that captures goals & constraints</li>
                  <li>• Workouts that adapt to energy levels</li>
                  <li>• Smart scheduling around user's routine</li>
                  <li>• Difficulty progression based on performance</li>
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
                  <span className="text-4xl font-bold gradient-text">60%</span>
                </div>
                <p className="text-muted-foreground">User retention improvement</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">4.7★</span>
                <p className="text-muted-foreground mt-2">App Store rating</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">85%</span>
                <p className="text-muted-foreground mt-2">Weekly active users</p>
              </div>
              <div className="text-center p-6">
                <span className="text-4xl font-bold gradient-text">3x</span>
                <p className="text-muted-foreground mt-2">Average session length</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Celebrate Small Wins</h3>
              <p className="text-muted-foreground">
                Micro-celebrations for completing daily goals created emotional investment that kept users coming back.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Recovery Over Punishment</h3>
              <p className="text-muted-foreground">
                Instead of breaking streaks, allowing "streak saves" reduced guilt and improved long-term engagement.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">Community Creates Accountability</h3>
              <p className="text-muted-foreground">
                Social features like group challenges and friend comparisons were the strongest retention drivers.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default HealthWellnessApp;