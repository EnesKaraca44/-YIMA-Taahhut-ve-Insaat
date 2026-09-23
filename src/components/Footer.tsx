import React from 'react';
import { Shield, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/siteContent';

interface FooterProps {
  activeTab: string;
  onNavigate: (sectionId: string) => void;
  onOpenCorporateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ activeTab, onNavigate, onOpenCorporateModal }) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 py-6 sm:py-8 px-4 sm:px-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        {/* Left Brand info */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-wider text-[11px] sm:text-xs">
            {companyData.legalName}
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-semibold text-slate-300 border border-white/10">
            <Shield className="w-3 h-3 text-[#C89D4B]" />
            <span>Mühendislik & Kalite Standartları</span>
          </span>
        </div>

        {/* Center/Right quick links */}
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <button
            onClick={onOpenCorporateModal}
            className="hover:text-[#C89D4B] transition-colors cursor-pointer"
          >
            İSG & Çevre İlkeleri
          </button>
          
          <button
            onClick={() => onNavigate('iletisim')}
            className={`hover:text-[#C89D4B] transition-colors cursor-pointer flex items-center gap-1 font-semibold ${
              activeTab === 'iletisim' ? 'text-[#E5BE72]' : 'text-slate-300'
            }`}
          >
            <span>Doğrudan İletişim</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          <span className="text-slate-600 hidden sm:inline">&bull;</span>
          <span className="text-slate-500 hidden sm:inline">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
