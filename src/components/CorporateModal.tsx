import React from 'react';
import { X, Target, Compass, HardHat, FileText, CheckCircle2 } from 'lucide-react';
import { companyData, corporateValues } from '../data/siteContent';

interface CorporateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const CorporateModal: React.FC<CorporateModalProps> = ({ isOpen, onClose, onNavigateContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="corporate-modal-title"
      >
        {/* Header */}
        <div className="bg-brand-midnight text-white p-6 sm:p-8 relative border-b border-brand-borderDark">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-navy border border-brand-amber/30 text-brand-amber text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Kurumsal Bilgilendirme</span>
          </div>

          <h2 id="corporate-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {companyData.legalName}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Mühendislik ilkeleri, kurumsal yönetim standartları ve faaliyet anlayışımız.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-10 space-y-8 overflow-y-auto">
          
          {/* General Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Şirket Profili & Yaklaşım</h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {companyData.descriptionLong}
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mt-3">
              İnşaat ve taahhüt sektöründe kalite güvencesi, iş sağlığı ve güvenliği ile çevreye duyarlı yaklaşımlarımız tüm saha süreçlerimizin temel belirleyicisidir.
            </p>
          </div>

          {/* Mission & Vision 2-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-brand-sand border border-brand-borderLight">
              <div className="w-10 h-10 rounded-lg bg-brand-midnight text-brand-amber flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Misyon</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {companyData.missionStatement}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-brand-sand border border-brand-borderLight">
              <div className="w-10 h-10 rounded-lg bg-brand-midnight text-brand-amber flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Vizyon</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {companyData.visionStatement}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Temel Kurumsal Değerlerimiz</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corporateValues.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-brand-borderLight shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-brand-amberDark shrink-0" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Health, Safety & Environment (HSE) Policy */}
          <div className="p-6 rounded-xl bg-brand-midnight text-white space-y-3 border border-brand-borderDark">
            <div className="flex items-center gap-2 text-brand-amber text-sm font-bold">
              <HardHat className="w-5 h-5" />
              <span>İş Sağlığı, Güvenliği ve Çevre Standartları</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              YİMA Taahhüt ve İnşaat Ltd. Şti. olarak sahadaki tüm operasyonlarımızda ulusal ve uluslararası mevzuatlara tam riayet ederek sıfır kaza hedefiyle çalışır; çevreye duyarlı, sürdürülebilir atık yönetimi ve enerji verimliliği prensiplerini uygularız.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Resmi şirket dokümanları ve kurumsal teklifler için lütfen iletişime geçiniz.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Kapat
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-brand-midnight bg-gradient-to-r from-brand-amber to-brand-amberLight hover:from-brand-amberLight hover:to-amber-200 transition-all cursor-pointer shadow-md shadow-brand-amber/20"
            >
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
