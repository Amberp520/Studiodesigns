import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  author: string;
}

const allBlogPosts: BlogPost[] = [
  {
    title: "The Art of Design Systems: Building for Scale",
    excerpt: "How to create a design system that grows with your product and keeps your team aligned on visual language.",
    date: "Dec 18, 2024",
    readTime: "5 min read",
    category: "Design Systems",
    slug: "design-systems",
    author: "Emenike Precious",
  },
  {
    title: "UX Research Methods That Actually Work",
    excerpt: "Practical research techniques I use to understand users and validate design decisions before building.",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    category: "UX Research",
    slug: "ux-research",
    author: "Emenike Precious",
  },
  {
    title: "Motion Design: Adding Life to Interfaces",
    excerpt: "Why thoughtful animation can transform a good interface into a great one, with practical examples.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Animation",
    slug: "motion-design",
    author: "Emenike Precious",
  },
  {
    title: "Designing for Accessibility: A Practical Guide",
    excerpt: "How to create inclusive digital experiences that work for everyone, regardless of ability.",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    category: "Accessibility",
    slug: "accessibility-guide",
    author: "Emenike Precious",
  },
  {
    title: "The Psychology of Color in UI Design",
    excerpt: "Understanding how color influences user behavior and emotions in digital products.",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    category: "UI Design",
    slug: "color-psychology",
    author: "Emenike Precious",
  },
  {
    title: "Prototyping Best Practices for Designers",
    excerpt: "From low-fidelity wireframes to high-fidelity prototypes: a complete workflow guide.",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    category: "Prototyping",
    slug: "prototyping-practices",
    author: "Emenike Precious",
  },
];

const Blog = () => {
  const [readPosts, setReadPosts] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load read posts from localStorage
    const saved = localStorage.getItem("readPosts");
    if (saved) {
      setReadPosts(JSON.parse(saved));
    }
  }, []);

  const getReadStatus = (slug: string) => {
    return readPosts[slug] || null;
  };

  const formatReadTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-12">
              <Link to="/#blog">
                <Button variant="ghost" className="mb-6 group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Button>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                All <span className="gradient-text">Blog Posts</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Insights on design, development, and creating digital experiences that people love to use.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allBlogPosts.map((post, index) => {
                const readTimestamp = getReadStatus(post.slug);
                
                return (
                  <Link 
                    key={post.slug} 
                    to={`/blog/${post.slug}`}
                    className="opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <article className="group glass-card rounded-2xl p-6 hover-lift cursor-pointer h-full flex flex-col shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]">
                      {/* Category Badge */}
                      <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium gradient-bg text-primary-foreground mb-4 w-fit">
                        {post.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </div>

                      {/* Read Status */}
                      {readTimestamp && (
                        <div className="mt-3 pt-3 border-t border-border/50">
                          <span className="text-xs text-primary flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Read {formatReadTime(readTimestamp)}
                          </span>
                        </div>
                      )}
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
