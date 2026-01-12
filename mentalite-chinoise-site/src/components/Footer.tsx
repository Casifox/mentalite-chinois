import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-warrior-gold/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
            <h2 className="text-2xl font-serif text-warrior-gold mb-4">L'ART DU DÉTACHEMENT</h2>
            <p className="text-warrior-muted text-sm max-w-md mx-auto mb-8 px-4">
                Imprimé dans le sang et l'encre de Shanghai. Ce site est un outil. Utilise-le.
            </p>
            <div className="text-xs text-warrior-muted/50 font-mono">
                © {new Date().getFullYear()} MENTALITÉ CHINOISE - ÉDITION PRIVÉE
            </div>
        </div>
    </footer>
  );
};
