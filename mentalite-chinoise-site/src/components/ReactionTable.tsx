import React from 'react';
import { reactionData } from '../data/bookContent';
import { ArrowRight } from 'lucide-react';

export const ReactionTable = () => {
  return (
    <div className="my-12 overflow-x-auto">
      <div className="min-w-[600px] border border-warrior-gold/20 rounded-lg overflow-hidden bg-warrior-dark/50 backdrop-blur-sm">
        <div className="grid grid-cols-12 bg-warrior-gold/10 border-b border-warrior-gold/20 p-4 font-serif font-bold text-warrior-gold">
          <div className="col-span-4">SITUATION</div>
          <div className="col-span-4 text-warrior-muted">LE FAIBLE (Réaction)</div>
          <div className="col-span-4 text-warrior-text">LE FORT (Réponse)</div>
        </div>
        
        <div className="divide-y divide-warrior-gold/10">
          {reactionData.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 p-4 hover:bg-white/5 transition-colors items-center text-sm md:text-base">
              <div className="col-span-4 font-bold text-warrior-gold">{row.situation}</div>
              <div className="col-span-4 text-warrior-muted pr-2 border-r border-warrior-gold/5 flex items-center gap-2">
                <span className="text-red-900/50">✕</span> {row.weak}
              </div>
              <div className="col-span-4 pl-4 text-warrior-text font-medium flex items-center gap-2">
                <ArrowRight size={14} className="text-warrior-gold" /> {row.strong}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-center text-warrior-muted mt-4 font-mono uppercase tracking-widest opacity-50">
        Tableau de calibrage émotionnel - V.4.2
      </p>
    </div>
  );
};
