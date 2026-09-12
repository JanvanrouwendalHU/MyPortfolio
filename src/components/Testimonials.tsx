import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
            Aanbevelingen
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 tracking-tight">
            Wat collega's & opdrachtgevers zeggen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-neutral-50 rounded-2xl p-7 sm:p-8 border border-neutral-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-neutral-300" />
                <p className="text-base sm:text-lg text-neutral-800 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-neutral-900 font-display text-base">
                    {t.author}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500">
                    {t.role} • <span className="text-neutral-700 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
