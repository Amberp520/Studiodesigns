import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AccessibilityGuide = () => {
  useEffect(() => {
    // Track that this post was read
    const readPosts = JSON.parse(localStorage.getItem("readPosts") || "{}");
    readPosts["accessibility-guide"] = new Date().toISOString();
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
              Accessibility
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Designing for Accessibility: A Practical Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Emenike Precious
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Nov 28, 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Accessibility isn't just about compliance—it's about creating digital experiences that work for everyone. In this guide, I'll share practical techniques for building inclusive interfaces.
            </p>

            <h2>Why Accessibility Matters</h2>
            <p>
              Over 1 billion people worldwide live with some form of disability. When we design accessible products, we're not just helping a minority—we're creating better experiences for everyone. Accessible design often leads to cleaner, more intuitive interfaces.
            </p>

            <h2>Core Principles of Accessible Design</h2>
            
            <h3>1. Perceivable Content</h3>
            <p>
              Users must be able to perceive the content, regardless of their sensory abilities. This means providing text alternatives for images, captions for videos, and ensuring sufficient color contrast.
            </p>

            <h3>2. Operable Interfaces</h3>
            <p>
              All functionality should be accessible via keyboard navigation. Interactive elements need to have visible focus states, and users should have enough time to complete tasks.
            </p>

            <h3>3. Understandable Content</h3>
            <p>
              Content should be written clearly, navigation should be consistent, and error messages should be helpful. Avoid jargon and provide context where needed.
            </p>

            <h3>4. Robust Implementation</h3>
            <p>
              Use semantic HTML, proper ARIA labels, and test with assistive technologies. Ensure your code works across different browsers and devices.
            </p>

            <h2>Practical Tips</h2>
            <ul>
              <li>Always use semantic HTML elements (header, nav, main, footer)</li>
              <li>Maintain a minimum contrast ratio of 4.5:1 for normal text</li>
              <li>Provide visible focus indicators for interactive elements</li>
              <li>Include alt text for all meaningful images</li>
              <li>Test your designs with screen readers</li>
              <li>Ensure touch targets are at least 44x44 pixels</li>
            </ul>

            <h2>Testing for Accessibility</h2>
            <p>
              Automated tools like Lighthouse and axe can catch many issues, but manual testing is essential. Use keyboard-only navigation, test with screen readers, and involve users with disabilities in your research.
            </p>

            <blockquote>
              "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." — Tim Berners-Lee
            </blockquote>

            <h2>Conclusion</h2>
            <p>
              Accessibility should be integrated into your design process from the start, not added as an afterthought. By following these principles and testing regularly, you can create digital experiences that truly work for everyone.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityGuide;