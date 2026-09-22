import React, { useState } from 'react';
import { Briefcase, Building2, Ruler, Layers, ArrowUpRight, CheckSquare } from 'lucide-react';
import { servicesData } from '../data/siteContent';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onNavigateContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#C89D4B]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#C89D4B]" />;
      case 'Ruler': return <Ruler className="w-5 h-5 text-[#C89D4B]" />;
      default: return <Layers className="w-5 h-5 text-[#C89D4B]" />;
    }
  };

  return (
    <div className="w-full py-2 text-slate-900">
      {/* Section Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#B48C36] text-xs font-bold tracking-wider uppercase mb-2">
          <CheckSquare className="w-3.5 h-3.5" />
          <span>Faaliyet Alanlarımız</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Mühendislik ve Uygulama Hizmetlerimiz.
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Taahhüt ve inşaat süreçlerinde planlamadan teslimata kadar her aşamada şeffaf, güvenilir ve yüksek standartlı çözümler sunuyoruz.
        </p>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {servicesData.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="group relative py-6 transition-all duration-200 flex flex-col justify-between cursor-pointer border-t border-slate-200 first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0 md:pl-6"
          >
            <div>
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:bg-[#0F172A] group-hover:border-[#0F172A] transition-all">
                {getIcon(service.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B48C36] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                {service.shortDescription}
              </p>

              {/* Micro Highlights */}
              <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                {service.highlights.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C89D4B] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#B48C36] transition-colors">
              <span>Detaylı Kapsam</span>
              <ArrowUpRight className="w-4 h-4 text-[#C89D4B] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
