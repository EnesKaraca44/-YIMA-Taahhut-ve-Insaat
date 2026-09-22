import React from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, Building2, Briefcase, Ruler, Layers, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onNavigateContact }) => {
  if (!service) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-brand-amber" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-brand-amber" />;
      case 'Ruler': return <Ruler className="w-6 h-6 text-brand-amber" />;
      default: return <Layers className="w-6 h-6 text-brand-amber" />;
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Header */}
        <div className="bg-brand-midnight text-white p-6 sm:p-8 relative border-b border-brand-borderDark">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-xl bg-brand-navy border border-brand-amber/30 flex items-center justify-center mb-4">
            {renderIcon(service.iconName)}
          </div>

          <span className="text-xs uppercase tracking-widest text-brand-amber font-bold">Hizmet Kapsamı</span>
          <h3 id="service-modal-title" className="text-2xl font-bold text-white mt-1">
            {service.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Genel Tanım</h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {service.detailedDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Temel Yetkinlikler & Kapsam</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-lg bg-brand-sand border border-brand-borderLight">
                  <CheckCircle2 className="w-4 h-4 text-brand-amberDark shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Detaylı teknik şartname veya teklif talepleri için iletişime geçebilirsiniz.
            </span>
            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-brand-midnight bg-gradient-to-r from-brand-amber to-brand-amberLight hover:from-brand-amberLight hover:to-amber-200 transition-all cursor-pointer shadow-md shadow-brand-amber/20"
            >
              <span>Teklif & İletişim</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
