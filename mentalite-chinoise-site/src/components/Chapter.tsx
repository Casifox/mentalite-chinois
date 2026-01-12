import React from 'react';
import { Chapter as ChapterType, Section } from '../data/bookContent';
import { ReactionTable } from './ReactionTable';
import { Shield, Sword, Crown } from 'lucide-react';

interface ChapterProps {
  chapter: ChapterType;
  isEven: boolean;
}

const SectionContent = ({ section, chapterId }: { section: Section; chapterId: string }) => {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-2xl font-serif text-warrior-text mb-6 flex items-center gap-3">
        <span className="w-8 h-[1px] bg-warrior-gold"></span>
        {section.title}
      </h3>

      <div className="space-y-4 text-warrior-muted leading-relaxed text-lg">
        {section.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {section.highlight && (
        <div className="my-8 p-6 border-l-4 border-warrior-red bg-gradient-to-r from-warrior-red/10 to-transparent">
          <p className="text-xl font-serif text-warrior-text italic">
            "{section.highlight}"
          </p>
        </div>
      )}

      {section.list && (
        <ul className="my-6 space-y-3">
          {section.list.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-warrior-text">
              <span className="mt-1.5 w-1.5 h-1.5 bg-warrior-gold rotate-45 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.exercises && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          {section.exercises.map((ex, idx) => (
            <div key={idx} className="p-6 border border-warrior-gold/20 bg-black/40 rounded hover:border-warrior-gold/50 transition-colors">
              <h4 className="text-warrior-gold font-bold mb-2 uppercase text-sm tracking-wider flex items-center gap-2">
                <Sword size={14} /> {ex.title}
              </h4>
              <p className="text-sm text-warrior-muted">{ex.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Special Condition for Reaction Table in Chapter 4 */}
      {chapterId === 'stoicisme' && section.title.includes('Tableau') && (
        <ReactionTable />
      )}
    </div>
  );
};

export const Chapter = ({ chapter, isEven }: ChapterProps) => {
  return (
    <section 
      id={chapter.id} 
      className={`relative py-24 px-4 md:px-12 ${isEven ? 'bg-warrior-black' : 'bg-warrior-dark'}`}
    >
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <span className="text-[10rem] font-serif font-bold text-warrior-gold leading-none">
                {chapter.number}
            </span>
        </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-16 text-center">
            <span className="text-warrior-gold text-sm font-mono tracking-[0.5em] uppercase mb-4 block">
                Chapitre {chapter.number}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                {chapter.title.split(':')[1] || chapter.title}
            </h2>
            {chapter.subtitle && (
                <p className="text-xl text-warrior-muted font-light italic">
                    {chapter.subtitle}
                </p>
            )}
            
            {chapter.intro && (
                <div className="mt-8 text-left border-t border-b border-warrior-gold/10 py-8">
                    <p className="text-lg text-warrior-text leading-relaxed font-serif">
                        {chapter.intro}
                    </p>
                </div>
            )}
        </header>

        <div>
            {chapter.sections.map((section, idx) => (
                <SectionContent key={idx} section={section} chapterId={chapter.id} />
            ))}
        </div>

        {chapter.goldenRule && (
            <div className="mt-20 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-warrior-gold/30"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-warrior-black px-4 text-warrior-gold">
                        <Crown size={24} />
                    </span>
                </div>
                <div className="mt-8 text-center">
                    <h4 className="text-warrior-gold text-xs uppercase tracking-[0.3em] mb-4">Règle d'Or</h4>
                    <p className="text-2xl md:text-3xl font-serif text-white italic leading-tight px-4 md:px-12">
                        "{chapter.goldenRule}"
                    </p>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};
