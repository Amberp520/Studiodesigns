import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ColorPsychology = () => {
  useEffect(() => {
    // Track that this post was read
    const readPosts = JSON.parse(localStorage.getItem("readPosts") || "{}");
    readPosts["color-psychology"] = new Date().toISOString();
    localStorage.setItem("readPosts", JSON.stringify(readPosts));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex px-3 py-1 rounded-full text-sm font-medium gradient-bg text-primary-foreground mb-4">
              UI Design
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Psychology of Color in UI Design
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Emenike Precious
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Nov 20, 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 min read
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Color is one of the most powerful tools in a designer's arsenal. Understanding how colors affect emotions and behavior can help you create more effective and engaging interfaces.
            </p>

            <h2>The Emotional Impact of Color</h2>
            <p>
              Colors evoke specific emotional responses, often rooted in cultural associations and psychological patterns. Understanding these associations helps designers make intentional choices that align with their product's goals.
            </p>

            <h2>Color Meanings in Design</h2>
            
            <h3>Blue: Trust and Stability</h3>
            <p>
              Blue is the most popular color in UI design, associated with trust, security, and professionalism. It's commonly used by banks, social media platforms, and healthcare applications.
            </p>

            <h3>Red: Urgency and Energy</h3>
            <p>
              Red grabs attention and creates a sense of urgency. It's effective for call-to-action buttons, error states, and notifications. Use it sparingly to maintain its impact.
            </p>

            <h3>Green: Growth and Success</h3>
            <p>
              Green suggests growth, health, and success. It's perfect for confirmation messages, environmental brands, and financial apps showing positive trends.
            </p>

            <h3>Purple: Creativity and Luxury</h3>
            <p>
              Purple combines the stability of blue with the energy of red. It's often associated with creativity, luxury, and wisdom—making it popular in beauty and creative industries.
            </p>

            <h3>Orange and Yellow: Optimism and Warmth</h3>
            <p>
              These warm colors convey friendliness and optimism. They're great for drawing attention and creating a welcoming atmosphere, but can be overwhelming if overused.
            </p>

            <h2>Practical Application</h2>
            <ul>
              <li>Use your primary brand color for key actions and navigation</li>
              <li>Reserve red for errors and critical alerts</li>
              <li>Green works well for success states and positive feedback</li>
              <li>Neutral colors should dominate backgrounds and body text</li>
              <li>Accent colors should be used sparingly for emphasis</li>
            </ul>

            <h2>Cultural Considerations</h2>
            <p>
              Color meanings vary across cultures. White symbolizes purity in Western cultures but represents mourning in some Eastern cultures. Always research your target audience's cultural context when choosing colors.
            </p>

            <blockquote>
              "Color is a power which directly influences the soul." — Wassily Kandinsky
            </blockquote>

            <h2>Testing Your Color Choices</h2>
            <p>
              Always test color combinations for accessibility, ensuring sufficient contrast ratios. A/B testing can reveal how color changes affect user behavior and conversion rates.
            </p>

            <h2>Conclusion</h2>
            <p>
              Thoughtful color choices can significantly impact user experience and brand perception. By understanding color psychology and testing your decisions, you can create interfaces that resonate emotionally with your users.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ColorPsychology;