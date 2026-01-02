import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  index: number;
  slug: string;
}

const BlogCard = ({ title, excerpt, date, readTime, category, index, slug }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <article 
        className="group bg-foreground/[0.03] border border-foreground/10 p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer opacity-0 animate-fade-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Category Badge */}
        <div className="inline-flex px-3 py-1 bg-foreground text-background text-xs font-space-mono tracking-wider mb-4">
          {category.toUpperCase()}
        </div>

        {/* Title */}
        <h3 className="font-playfair text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-eb-garamond text-foreground/60 mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
          <div className="flex items-center gap-4 font-space-mono text-xs text-foreground/50">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readTime}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-foreground/40 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
