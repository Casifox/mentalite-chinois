import React, { useState, useEffect } from 'react';
import { bookContent } from '../data/bookContent';
import { Scroll, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    bookContent.forEach((chapter) => {
      const element = document.getElementById(chapter.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-warrior-gold/10 text-warrior-gold border border-warrior-gold/30 rounded-full md:hidden backdrop-blur-sm"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Sidebar */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-warrior-black/95 border-r border-warrior-gold/20 backdrop-blur-md transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 border-b border-warrior-gold/10">
          <div className="flex items-center gap-2 text-warrior-gold mb-2">
            <Scroll size={20} />
            <span className="font-serif font-bold tracking-widest text-sm">MANUEL</span>
          </div>
          <h1 className="font-serif text-xl text-white font-bold leading-none">
            L'Art du<br/>Détachement
          </h1>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-100px)] scrollbar-thin scrollbar-thumb-warrior-gold/20">
          <div className="space-y-1">
            <button 
                onClick={() => scrollToSection('hero')}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${activeId === 'hero' ? 'bg-warrior-gold/10 text-warrior-gold border-l-2 border-warrior-gold' : 'text-warrior-muted hover:text-white hover:bg-white/5'}`}
            >
                Couverture
            </button>
            {bookContent.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 group ${activeId === chapter.id ? 'bg-warrior-gold/10 text-warrior-gold border-l-2 border-warrior-gold' : 'text-warrior-muted hover:text-white hover:bg-white/5'}`}
              >
                <span className="block text-xs opacity-50 mb-1 font-mono">CHAPITRE {chapter.number}</span>
                <span className="font-serif font-medium">{chapter.title.split(':')[1] || chapter.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t border-warrior-gold/10 bg-warrior-black/95">
            <div className="text-xs text-warrior-muted text-center font-mono">
                MENTALITÉ CHINOISE
            </div>
        </div>
      </nav>
    </>
  );
};
