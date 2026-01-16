import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xl font-bold gradient-text font-display tracking-tight">
            Precious<span className="text-primary">.</span>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Precious Emenike. Crafted with passion.
          </p>
          
          {/* CV Link */}
          <Link 
            to="/cv"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-all group"
          >
            <FileText className="w-4 h-4" />
            View My CV
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
