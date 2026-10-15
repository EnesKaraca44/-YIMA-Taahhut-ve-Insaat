import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, Building2, Briefcase, Ruler, Layers, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onNavigateContact }) => {
  useEffect(() => {
    if (!service) return;

    const scrollY = window.scrollY;
    const previousBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };
    const previousHtmlOverflow = document.documentElement.style.overflow;

    // Keep the page fixed while the modal's own content is being scrolled.
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyStyles.overflow;
      document.body.style.position = previousBodyStyles.position;
      document.body.style.top = previousBodyStyles.top;
      document.body.style.width = previousBodyStyles.width;
      window.scrollTo(0, scrollY);
    };
  }, [service]);

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
      <div 
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Header */}
        <div className="relative shrink-0 border-b border-brand-borderDark bg-brand-midnight p-5 pr-14 text-white sm:p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer sm:right-6 sm:top-6"
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
        <div className="min-h-0 overflow-y-auto overscroll-contain p-5 space-y-6 sm:p-8">
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
