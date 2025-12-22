import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import BlogSection from "@/components/BlogSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Studio | UI/UX Designer & Creative Developer Portfolio</title>
        <meta 
          name="description" 
          content="UI/UX Designer specializing in beautiful, user-centered digital products. View my portfolio, read design insights, and let's create something amazing together." 
        />
        <meta name="keywords" content="UI design, UX design, portfolio, digital design, web design, product design" />
        <link rel="canonical" href="/" />
      </Helmet>
      
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
    </>
  );
};

export default Index;
