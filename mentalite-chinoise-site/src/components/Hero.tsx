import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToStart = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/abstract-black-gold-chinese-ink-wash-landscape.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warrior-black via-transparent to-warrior-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-warrior-black via-transparent to-warrior-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6 inline-block border border-warrior-gold/30 px-4 py-1 rounded-full bg-black/50 backdrop-blur-sm">
            <span className="text-warrior-gold font-mono text-xs tracking-[0.3em] uppercase">Manuel de la Mentalité Chinoise</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
          <span className="block text-warrior-text">L'Art du</span>
          <span className="block gold-gradient-text mt-2">Détachement</span>
          <span className="block text-warrior-text">Absolu</span>
        </h1>

        <p className="text-xl md:text-2xl text-warrior-muted max-w-2xl mx-auto mb-12 font-light italic border-l-2 border-warrior-gold pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          "Deviens si fort que même ton ombre a peur de te suivre."
        </p>

        <button 
          onClick={scrollToStart}
          className="group relative px-8 py-4 bg-transparent border border-warrior-gold text-warrior-gold font-bold uppercase tracking-widest hover:bg-warrior-gold hover:text-black transition-all duration-300"
        >
          <span className="relative z-10">Commencer le Voyage</span>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-warrior-gold/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
