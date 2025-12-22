import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-gradient-purple/10 via-gradient-red/5 to-transparent" />
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
            <Button variant="gradient" size="xl" className="group glow">
              <Mail className="w-5 h-5" />
              hello@studio.design
            </Button>
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
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
