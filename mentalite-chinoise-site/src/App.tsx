import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Chapter } from './components/Chapter';
import { Footer } from './components/Footer';
import { bookContent } from './data/bookContent';

function App() {
  // Simple scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      const progressBar = document.getElementById('progressBar');
      if (progressBar) {
        progressBar.style.transform = `scaleX(${scroll})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-warrior-black min-h-screen text-warrior-text selection:bg-warrior-gold selection:text-black">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-warrior-gold/20">
            <div 
                id="progressBar"
                className="h-full bg-warrior-gold origin-left transform scale-x-0 transition-transform duration-100 ease-out"
            ></div>
        </div>

      <Navigation />
      
      <main className="md:pl-16 transition-all duration-300">
        <Hero />
        
        <div className="relative">
            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            
            {bookContent.map((chapter, index) => (
            <Chapter 
                key={chapter.id} 
                chapter={chapter} 
                isEven={index % 2 !== 0} 
            />
            ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
