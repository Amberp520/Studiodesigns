import { MessageCircle, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/amberprecious998/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/emenikeprecious", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/emenikeprecious", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/emenikeprecious", label: "Twitter" },
];

const Contact = () => {
  const whatsappMessage = encodeURIComponent("Hello, I am interested in your work. My name is ");
  const whatsappLink = `https://wa.me/2349165920038?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-500/10 via-purple-400/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <p className="font-space-mono text-xs tracking-widest text-foreground/60 mb-4 opacity-0 animate-fade-up">
            [ GET IN TOUCH ]
          </p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-200">
            Let's Create Something Amazing
          </h2>
          <p className="font-eb-garamond text-lg text-foreground/70 mb-10 opacity-0 animate-fade-up animation-delay-400">
            Have a project in mind or just want to chat about design? 
            I'd love to hear from you.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-up animation-delay-600">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 font-space-grotesk tracking-wide group">
                <MessageCircle className="w-5 h-5" />
                Let's Talk on WhatsApp
              </Button>
            </a>
          </div>

          {/* Divider */}
          <div className="my-12 flex items-center gap-4 opacity-0 animate-fade-in animation-delay-600">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
            <span className="font-space-mono text-xs tracking-wider text-foreground/50">or connect with me</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-600">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
