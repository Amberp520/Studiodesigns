import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import BlogSection from "@/components/BlogSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    document.title = "Emenike Precious | UI/UX Designer & Product Designer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "UI/UX Designer & Product Designer specializing in beautiful, user-centered digital products. View my portfolio, read design insights, and let's create something amazing together.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <FeaturedWork />
        <BlogSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollProgress />
    </div>
  );
};

export default Index;
