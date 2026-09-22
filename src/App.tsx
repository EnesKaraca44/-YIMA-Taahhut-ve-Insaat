import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CorporateModal } from './components/CorporateModal';

export type TabType = 'hero' | 'kurumsal' | 'hizmetler' | 'projeler' | 'neden-yima' | 'iletisim';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('hero');
  const [isCorporateModalOpen, setIsCorporateModalOpen] = useState<boolean>(false);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className={`h-screen w-screen overflow-hidden flex flex-col selection:bg-[#C89D4B] selection:text-white relative font-sans transition-colors duration-500 ${activeTab === 'hero' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      
      {/* Full-bleed Cinematic Architectural Background (inspired by Reference 1 & 2) */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${activeTab === 'hero' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        {/* Dynamic Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/45 to-slate-950/90" />
      </div>

      {/* Luxury Dark Glass Header */}
      <Navbar
        activeSection={activeTab}
        onNavigate={(tabId) => handleTabChange(tabId as TabType)}
        onOpenCorporateModal={() => setIsCorporateModalOpen(true)}
      />

      {/* Main Single-Screen Viewport Content Area */}
      <main className="flex-1 pt-[74px] pb-[54px] h-[calc(100vh-128px)] overflow-y-auto relative z-10">
        <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col justify-center">
          
          {activeTab === 'hero' && (
            <div className="animate-in fade-in zoom-in-95 duration-300 h-full flex flex-col justify-center">
              <Hero onNavigate={(tabId) => handleTabChange(tabId as TabType)} />
            </div>
          )}

          {activeTab === 'kurumsal' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 py-4 h-full flex flex-col justify-center">
              <AboutSection onOpenCorporateModal={() => setIsCorporateModalOpen(true)} />
            </div>
          )}

          {activeTab === 'hizmetler' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 py-4 h-full flex flex-col justify-center">
              <ServicesSection onNavigateContact={() => handleTabChange('iletisim')} />
            </div>
          )}

          {activeTab === 'projeler' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 py-4 h-full flex flex-col justify-center">
              <ProjectsSection onNavigateContact={() => handleTabChange('iletisim')} />
            </div>
          )}

          {activeTab === 'neden-yima' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 py-4 h-full flex flex-col justify-center">
              <WhyUsSection />
            </div>
          )}

          {activeTab === 'iletisim' && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 py-4 h-full flex flex-col justify-center">
              <ContactSection />
            </div>
          )}
        </div>
      </main>

      {/* Floating WhatsApp Action Button (inspired by Reference 2) */}
      <a 
        href="https://wa.me/905301684412" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-14 right-6 z-50 p-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center gap-2 group border border-white/20"
        title="WhatsApp Doğrudan İletişim"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide pr-1">
          WhatsApp Danışma
        </span>
      </a>

      {/* Compact Clean Bottom Footer */}
      <Footer
        activeTab={activeTab}
        onNavigate={(tabId) => handleTabChange(tabId as TabType)}
        onOpenCorporateModal={() => setIsCorporateModalOpen(true)}
      />

      {/* Detailed Corporate Modal */}
      <CorporateModal
        isOpen={isCorporateModalOpen}
        onClose={() => setIsCorporateModalOpen(false)}
        onNavigateContact={() => {
          setIsCorporateModalOpen(false);
          handleTabChange('iletisim');
        }}
      />
    </div>
  );
};

export default App;
