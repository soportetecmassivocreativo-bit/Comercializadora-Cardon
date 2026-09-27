"use client";
import { useState, useCallback } from "react";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import Products from "@/components/Products/Products";
import WhyUs from "@/components/WhyUs/WhyUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import HologramOverlay from "@/components/HologramOverlay/HologramOverlay";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Navbar />
      <main className="main-wrapper">
        <HologramOverlay />
        <Hero />
        <About />
        <WhyUs />
        <Features />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
