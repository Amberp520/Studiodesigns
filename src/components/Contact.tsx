import { MessageCircle, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/amberprecious998/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/emenikeprecious", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/emenikeprecious", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/emenikeprecious", label: "Twitter" },
];

const Contact = () => {
  const { ref, isRevealed } = useScrollReveal();
  const whatsappMessage = encodeURIComponent("Hello, I am interested in your work. My name is ");
  const whatsappLink = `https://wa.me/2349165920038?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`max-w-3xl mx-auto text-center scroll-reveal-scale ${isRevealed ? 'revealed' : ''}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-primary" />
            <p className="font-space-mono text-xs tracking-widest text-primary">GET IN TOUCH</p>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="font-eb-garamond text-lg text-foreground/70 mb-10">
            Have a project in mind or just want to chat about design? I'd love to hear from you.
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="gradient-bg text-primary-foreground hover:opacity-90 rounded-full px-10 py-7 font-space-grotesk tracking-wide shadow-warm hover:shadow-glow transition-all text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Let's Talk on WhatsApp
            </Button>
          </a>

          <div className="my-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="font-space-mono text-xs text-foreground/50">or connect</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 hover:shadow-warm transition-all group">
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;