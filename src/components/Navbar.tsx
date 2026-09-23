import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCorporateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Ana Sayfa' },
    { id: 'kurumsal', label: 'Kurumsal' },
    { id: 'hizmetler', label: 'Hizmetlerimiz' },
    { id: 'projeler', label: 'Projeler' },
    { id: 'neden-yima', label: 'Neden YİMA?' },
    { id: 'iletisim', label: 'İletişim' },
  ];

  const handleItemClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-2 sm:py-2.5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleItemClick('hero')}
            className="flex items-center focus:outline-none cursor-pointer text-left py-0.5 group"
            aria-label="YİMA Taahhüt ve İnşaat Ana Sayfa"
          >
            <img 
              src="/logo-white.png" 
              alt="YİMA Taahhüt ve İnşaat Logo" 
              className="h-16 sm:h-20 lg:h-[86px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg"
            />
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1.5 lg:space-x-2 bg-white/5 backdrop-blur-md p-1.5 rounded-xl border border-white/10" aria-label="Ana Navigasyon">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-xs lg:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-slate-950 bg-gradient-to-r from-[#C89D4B] to-[#D97706] shadow-md shadow-[#C89D4B]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleItemClick('iletisim')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg ${
                activeSection === 'iletisim'
                  ? 'bg-white text-slate-950'
                  : 'text-slate-950 bg-gradient-to-r from-[#C89D4B] to-[#D97706] hover:from-[#D97706] hover:to-[#B48C36] shadow-[#C89D4B]/25'
              }`}
            >
              <span>Teklif & İletişim</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C89D4B] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-slate-950 bg-gradient-to-r from-[#C89D4B] to-[#D97706]'
                      : 'text-slate-300 hover:text-[#C89D4B] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
