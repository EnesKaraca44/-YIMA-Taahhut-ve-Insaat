import React from 'react';
import { Target, Compass, Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { companyData, corporateValues } from '../data/siteContent';

interface AboutSectionProps {
  onOpenCorporateModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCorporateModal }) => {
  return (
    <div className="w-full text-slate-900 py-2">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#B48C36] text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kurumsal Profil</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Sağlam Temeller, Mühendislik Disiplini.
          </h2>
        </div>
        
        <button
          onClick={onOpenCorporateModal}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-800 hover:text-[#C89D4B] hover:border-[#C89D4B]/50 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm"
        >
          <span>İSG & İlkeler Detayı</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C89D4B]" />
        </button>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mt-4">
        {/* Left Column: Photo Showcase & Description */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="relative flex-1 rounded-3xl overflow-hidden min-h-[300px] flex items-end">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            
            <div className="relative p-8 text-white z-10 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5BE72]">
                Uygulama & Saha Gücü
              </span>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                {companyData.descriptionLong}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-2">
            <div className="p-3 rounded-2xl bg-amber-50 text-[#C89D4B] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mühendislik standartlarına tavizsiz bağlı kalarak; güvenilir, sağlam ve estetik yapılar üretiyoruz.
            </p>
          </div>
        </div>

        {/* Right Column: Mission, Vision & Values */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="transition-all">
              <div className="w-10 h-10 rounded-2xl bg-slate-900 text-[#C89D4B] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Misyonumuz</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                {companyData.missionStatement}
              </p>
            </div>

            <div className="transition-all">
              <div className="w-10 h-10 rounded-2xl bg-slate-900 text-[#C89D4B] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Vizyonumuz</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                {companyData.visionStatement}
              </p>
            </div>
          </div>

          {/* Corporate Values */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-[#C89D4B]" />
              <span className="text-xs uppercase tracking-widest text-[#B48C36] font-bold">Çalışma Anlayışımız</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {corporateValues.map((val, idx) => (
                <div key={idx} className="flex flex-col">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C89D4B]" />
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
