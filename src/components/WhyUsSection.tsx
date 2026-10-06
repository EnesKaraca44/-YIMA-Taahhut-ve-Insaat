import React from 'react';
import { ShieldCheck, Ruler, Truck, Building2, CalendarCheck, Award } from 'lucide-react';
import { pillarsData } from '../data/siteContent';

export const WhyUsSection: React.FC = () => {
  // We'll map the icons directly since they are visual
  const getIcon = (index: number) => {
    const props = { strokeWidth: 1.2, className: "w-16 h-16 text-[#C89D4B] mx-auto mb-4" };
    switch (index) {
      case 0: return <Ruler {...props} />;
      case 1: return <Truck {...props} />;
      case 2: return <Building2 {...props} />;
      case 3: return <CalendarCheck {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  return (
    <div className="w-full py-4 text-slate-900 relative">
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#B48C36] text-xs font-bold tracking-wider uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Kurumsal Değerler</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          Neden YİMA Taahhüt ve İnşaat?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Sektördeki taahhüt ve inşaat süreçlerinde güvenilirlik, teknik yetkinlik ve disiplinli proje yönetimini bir araya getiriyoruz.
        </p>
      </div>

      {/* 4 Premium Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {pillarsData.map((pillar, index) => (
          <div
            key={pillar.number}
            className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] shadow-xl shadow-slate-200/50 border border-slate-100 group relative overflow-hidden"
          >
            {/* Top Centered Icon */}
            <div className="w-full flex justify-center mb-6">
              {getIcon(index)}
            </div>

            {/* Watermark Number & Title */}
            <div className="relative z-10 w-full pt-2 mb-3">
              <span className="absolute -top-4 -left-3 text-[4.5rem] leading-none font-black text-slate-100 z-[-1] transition-colors duration-300 group-hover:text-amber-50">
                {pillar.number}
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#B48C36] transition-colors leading-tight">
                {pillar.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pillar.description}
            </p>

            {/* Luxury Badge at Bottom */}
            <div className="mt-auto pt-8 flex items-center gap-2.5 w-full">
              <div className="p-1.5 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0">
                <Award className="w-4 h-4 text-[#E5BE72]" />
              </div>
              <span className="text-xs font-bold text-slate-900">
                YİMA Güvencesi
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

