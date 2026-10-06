import React, { useState } from 'react';
import { Building2, Layers, CheckCircle2, ArrowRight, CheckSquare, Pickaxe, Map, Train } from 'lucide-react';
import { servicesData } from '../data/siteContent';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onNavigateContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Use more specific icons to match the engineering context
  const getIcon = (index: number) => {
    const props = { strokeWidth: 1.5, className: "w-7 h-7 text-slate-800" };
    switch (index) {
      case 0: return <Map {...props} />; // Karayolu
      case 1: return <Layers {...props} />; // Menfez & Hidrolik
      case 2: return <Pickaxe {...props} />; // İstinat Duvarı
      case 3: return <Train {...props} />; // Demiryolu
      default: return <Building2 {...props} />;
    }
  };

  return (
    <div className="w-full text-slate-900 relative">
      {/* Section Header - Centered */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2DF] border border-[#F1E0C3] text-[#A67E2E] text-xs font-bold tracking-wider uppercase mb-3">
          <span>Faaliyet Alanlarımız</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          Mühendislik ve Uygulama Hizmetlerimiz.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Uluslararası standartlarda, mühendislik çözümleri ve anahtar teslimi uygulama hizmetleri sunuyoruz.
        </p>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="group bg-white rounded-[1.25rem] p-6 sm:p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] shadow-xl shadow-slate-200/50 cursor-pointer relative overflow-hidden"
          >
            {/* Top Golden Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#C89D4B]" />

            {/* Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-[#FDF2DF] flex items-center justify-center mb-6 shadow-sm border border-[#F1E0C3] group-hover:scale-110 transition-transform duration-300">
              {getIcon(index)}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#B48C36] transition-colors leading-tight mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {service.shortDescription}
            </p>

            {/* Checklists */}
            <div className="space-y-3 w-full mb-8">
              {service.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0 mt-0.5 fill-slate-100" />
                  <span className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Bottom Action Link */}
            <div className="mt-auto pt-4 border-t border-slate-100/80 w-full flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#B48C36] transition-colors">
              <span>Detaylı Kapsam</span>
              <ArrowRight className="w-4 h-4 text-[#C89D4B] transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onNavigateContact={onNavigateContact}
      />
    </div>
  );
};
