import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { ProductDetails } from './components/ProductDetails';
import { ValueCurve } from './components/ValueCurve';
import { Rights } from './components/Rights';
import { Roadmap } from './components/Roadmap';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-stone-900 selection:bg-amber-500/30 selection:text-amber-900 font-sans">
      <Navigation scrolled={scrolled} />
      
      <main>
        <Hero />
        <Comparison />
        <ProductDetails />
        <ValueCurve />
        <Rights />
        <Roadmap />
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
