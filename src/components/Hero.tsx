import React from 'react';
import { ArrowRight, Shield, Award, CheckCircle2, HardHat } from 'lucide-react';
import { companyData } from '../data/siteContent';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-4 sm:p-8 my-auto">
      
      {/* Subtle Warm Light Ambient behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[420px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-5xl mx-auto space-y-6 sm:space-y-7 z-10 w-full flex flex-col items-center">
        
        {/* Top Architectural Badge (inspired by Reference 1: EST. 2023 / Prestij Mimari) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/70 border border-white/15 backdrop-blur-md text-[#E5BE72] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-xl">
          <HardHat className="w-4 h-4 text-[#C89D4B]" />
          <span>Karayolları &bull; Demiryolları &bull; Sanat Yapıları</span>
        </div>

        {/* Primary Grand Headline (inspired by Reference 1 & 2) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.12] drop-shadow-2xl">
          Yolları, Köprüleri ve Altyapıyı, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#C89D4B] to-amber-400">
            Güvenle Geleceğe Taşıyoruz.
          </span>
        </h1>

        {/* Corporate Sub-paragraph */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-md">
          {companyData.descriptionShort}
        </p>

        {/* Action CTAs (inspired by Reference 2: Gold Solid + Translucent Glass) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onNavigate('hizmetler')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-extrabold tracking-wider text-slate-950 bg-gradient-to-r from-[#C89D4B] via-[#D97706] to-[#B48C36] hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#C89D4B]/30 cursor-pointer"
          >
            <span>Hizmet & İmalatlarımız</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
          
          <button
            onClick={() => onNavigate('iletisim')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg"
          >
            <span>Doğrudan İletişim & Teklif</span>
          </button>
        </div>

        {/* 3 Core Trust Cards in Dark Frosted Glass (inspired by Reference 1 & 2) */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left w-full">
          <div 
            onClick={() => onNavigate('hizmetler')}
            className="p-4 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/10 hover:border-[#C89D4B]/60 transition-all duration-200 cursor-pointer shadow-xl group"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-[#C89D4B] shrink-0 border border-amber-500/20 group-hover:bg-[#C89D4B] group-hover:text-slate-950 transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white group-hover:text-[#E5BE72] transition-colors">Menfez & Sanat Yapıları</h2>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Kutu ve boru menfezler, hidrolik yapılar.</p>
              </div>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('hizmetler')}
            className="p-4 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/10 hover:border-[#C89D4B]/60 transition-all duration-200 cursor-pointer shadow-xl group"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-[#C89D4B] shrink-0 border border-amber-500/20 group-hover:bg-[#C89D4B] group-hover:text-slate-950 transition-colors">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white group-hover:text-[#E5BE72] transition-colors">İstinat Duvarları</h2>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Betonarme ve taş istinat, şev stabilitesi.</p>
              </div>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('hizmetler')}
            className="p-4 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/10 hover:border-[#C89D4B]/60 transition-all duration-200 cursor-pointer shadow-xl group"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-[#C89D4B] shrink-0 border border-amber-500/20 group-hover:bg-[#C89D4B] group-hover:text-slate-950 transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white group-hover:text-[#E5BE72] transition-colors">Yol & Demiryolu Altyapı</h2>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">KGM & TCDD şartnamelerine tam uyum.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Mouse Indicator (inspired by Reference 1: MONS Yapı) */}
        <div className="hidden lg:flex flex-col items-center gap-1.5 pt-2 text-slate-400 text-[10px] tracking-[0.25em] uppercase font-semibold">
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C89D4B] rounded-full animate-bounce" />
          </div>
          <span>Keşfet</span>
        </div>

      </div>
    </div>
  );
};
