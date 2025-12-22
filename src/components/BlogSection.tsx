import BlogCard from "./BlogCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Art of Design Systems: Building for Scale",
    excerpt: "How to create a design system that grows with your product and keeps your team aligned on visual language.",
    date: "Dec 18, 2024",
    readTime: "5 min read",
    category: "Design Systems",
  },
  {
    title: "UX Research Methods That Actually Work",
    excerpt: "Practical research techniques I use to understand users and validate design decisions before building.",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    category: "UX Research",
  },
  {
    title: "Motion Design: Adding Life to Interfaces",
    excerpt: "Why thoughtful animation can transform a good interface into a great one, with practical examples.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Animation",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-gradient-pink/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-up">
              Latest <span className="gradient-text">Thoughts</span>
            </h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-up animation-delay-200">
              Insights on design, development, and creating digital experiences 
              that people love to use.
            </p>
          </div>
          <Button variant="ghost" className="group self-start opacity-0 animate-fade-up animation-delay-400">
            View all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.title}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
