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
        className="group glass-card rounded-2xl p-6 hover-lift cursor-pointer opacity-0 animate-fade-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Category Badge */}
        <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium gradient-bg text-primary-foreground mb-4">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
