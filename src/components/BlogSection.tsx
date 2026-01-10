import BlogCard from "./BlogCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Building Design Systems That Scale With Your Product",
    excerpt: "How to create a design system that grows with your product, reduces design debt, and keeps cross-functional teams aligned.",
    date: "Dec 18, 2024",
    readTime: "5 min read",
    category: "Product Strategy",
    slug: "design-systems",
  },
  {
    title: "UX Research Methods That Drive Product Decisions",
    excerpt: "Practical research techniques I use to understand users, validate assumptions, and make confident product decisions.",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    category: "User Research",
    slug: "ux-research",
  },
  {
    title: "How Motion Design Improves Product Usability",
    excerpt: "Why thoughtful animation isn't just decoration — it guides users, reduces cognitive load, and improves product clarity.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Product Design",
    slug: "motion-design",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-up">
              Product Thinking & <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-up animation-delay-200">
              Thoughts on designing meaningful digital products, turning user problems 
              into opportunities, and creating solutions that drive business growth.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="ghost" className="group self-start opacity-0 animate-fade-up animation-delay-400">
              View all insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
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
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
