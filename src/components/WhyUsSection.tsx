import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { pillarsData } from '../data/siteContent';

export const WhyUsSection: React.FC = () => {
  return (
    <div className="w-full py-2 text-slate-900">
      {/* Section Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#B48C36] text-xs font-bold tracking-wider uppercase mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Kurumsal Değerler</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Neden YİMA Taahhüt ve İnşaat?
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Sektördeki taahhüt ve inşaat süreçlerinde güvenilirlik, teknik yetkinlik ve disiplinli proje yönetimini bir araya getiriyoruz.
        </p>
      </div>

      {/* 4 Numbered Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillarsData.map((pillar) => (
          <div
            key={pillar.number}
            className="py-6 transition-all duration-200 flex flex-col justify-between group border-t border-slate-200 first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0 md:pl-6"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-black text-[#C89D4B]">
                  {pillar.number}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  Standart
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-4 group-hover:text-[#B48C36] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#B48C36]">
              <Check className="w-3.5 h-3.5 text-[#C89D4B] shrink-0" />
              <span>YİMA Güvencesi</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
