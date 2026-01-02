const Footer = () => {
  return (
    <footer className="py-12 border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-playfair text-xl font-bold tracking-tight">EP.</div>
          <p className="font-space-mono text-xs tracking-wider text-foreground/50">
            © {new Date().getFullYear()} Emenike Precious. Crafted with passion.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="font-space-mono text-xs tracking-wider text-foreground/50 hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="font-space-mono text-xs tracking-wider text-foreground/50 hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
