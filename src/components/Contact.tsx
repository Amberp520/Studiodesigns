import { MessageCircle, Linkedin, Github, Instagram, Figma } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/amberdesigns23/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/precious-emenike-8650402b7/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Amberp520", label: "GitHub" },
  { icon: Figma, href: "https://www.figma.com/files/team/1582066220419596752/recents-and-sharing?fuid=1582066218350051657", label: "Figma" },
];

const Contact = () => {
  const whatsappMessage = encodeURIComponent("Hello, I am interested in your work. My name is ");
  const whatsappLink = `https://wa.me/2349165920038?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-up">
            Let's Create Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 opacity-0 animate-fade-up animation-delay-200">
            Have a project in mind or just want to chat about design? 
            I'd love to hear from you.
          </p>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-up animation-delay-400">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" size="xl" className="group glow">
                <MessageCircle className="w-5 h-5" />
                Let's Talk on WhatsApp
              </Button>
            </a>
          </div>

          {/* Divider */}
          <div className="my-12 flex items-center gap-4 opacity-0 animate-fade-in animation-delay-600">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-muted-foreground text-sm">or connect with me</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-600">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
