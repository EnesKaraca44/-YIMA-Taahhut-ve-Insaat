import React, { useState, useEffect } from 'react';
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

  // Smooth scroll to target section
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (tab === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ScrollSpy: Automatically highlight active navbar item when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      
      // Bottom of page trigger for last section (contact)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveTab('iletisim');
        return;
      }

      const sections: TabType[] = ['hero', 'kurumsal', 'hizmetler', 'projeler', 'neden-yima', 'iletisim'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col relative font-sans selection:bg-[#C89D4B] selection:text-white overflow-x-hidden">
      
      {/* Fixed Luxury Dark Glass Header */}
      <Navbar
        activeSection={activeTab}
        onNavigate={(tabId) => handleTabChange(tabId as TabType)}
        onOpenCorporateModal={() => setIsCorporateModalOpen(true)}
      />

      {/* Main Content: Continuous Vertically Scrolling Sections */}
      <main className="w-full flex-1">
        
        {/* Section 1: Hero */}
        <section 
          id="hero" 
          className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center bg-slate-950 text-white pt-32 pb-14 scroll-mt-28 overflow-hidden"
        >
          {/* Full-bleed Cinematic Architectural Background */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
          >
            {/* Dynamic Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-slate-950/95" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <Hero onNavigate={(tabId) => handleTabChange(tabId as TabType)} />
          </div>
        </section>

        {/* Section 2: Kurumsal (About) */}
        <section 
          id="kurumsal" 
          className="w-full py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-100 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection onOpenCorporateModal={() => setIsCorporateModalOpen(true)} />
          </div>
        </section>

        {/* Section 3: Hizmetlerimiz (Services) */}
        <section 
          id="hizmetler" 
          className="w-full py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200/60 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesSection onNavigateContact={() => handleTabChange('iletisim')} />
          </div>
        </section>

        {/* Section 4: Projeler (Projects) */}
        <section 
          id="projeler" 
          className="w-full py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-100 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsSection onNavigateContact={() => handleTabChange('iletisim')} />
          </div>
        </section>

        {/* Section 5: Neden YİMA? (Why Us) */}
        <section 
          id="neden-yima" 
          className="w-full py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200/60 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyUsSection />
          </div>
        </section>

        {/* Section 6: İletişim (Contact) */}
        <section 
          id="iletisim" 
          className="w-full py-16 sm:py-24 bg-white text-slate-900 scroll-mt-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactSection />
          </div>
        </section>

      </main>

      {/* Floating WhatsApp Action Button */}
      <a 
        href="https://wa.me/905301684412" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center gap-2 group border border-white/20"
        title="WhatsApp Doğrudan İletişim"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide pr-1">
          WhatsApp Danışma
        </span>
      </a>

      {/* Clean Bottom Footer */}
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
