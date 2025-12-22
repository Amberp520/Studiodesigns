import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import BlogSection from "@/components/BlogSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Studio | UI/UX Designer & Creative Developer Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "UI/UX Designer specializing in beautiful, user-centered digital products. View my portfolio, read design insights, and let's create something amazing together.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <BlogSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
