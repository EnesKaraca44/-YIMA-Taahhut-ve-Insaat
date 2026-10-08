import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'yima_intro_seen';

export const IntroOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem(STORAGE_KEY);
    }
    return false;
  });
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClose = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    
    // Save to sessionStorage so it doesn't show again in the same session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    }

    // Wait for fade-out animation to complete (700ms)
    setTimeout(() => {
      setIsVisible(false);
    }, 700);
  };

  useEffect(() => {
    if (!isVisible) return;

    // Set sessionStorage item on initial mount of intro screen
    sessionStorage.setItem(STORAGE_KEY, 'true');

    // Auto close intro after 5 seconds if video keeps playing or as fallback
    timerRef.current = setTimeout(() => {
      handleClose();
    }, 5000);

    // Prevent scrolling while intro screen is visible
    document.body.style.overflow = 'hidden';

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      id="intro-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
      }}
      className={`fixed inset-0 w-screen h-screen z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Fullscreen Video */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleClose}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      />

      {/* Ultra-subtle bottom shadow only for button readability - keeps video crisp & bright */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Top Corporate Branding Badge */}
      <div className="absolute top-6 sm:top-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-3 bg-slate-900/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/15 shadow-2xl">
        <img src="/logo-transparent.png" alt="YİMA İnşaat" className="h-7 sm:h-8 w-auto object-contain" />
        <span className="text-xs sm:text-sm tracking-widest text-slate-100 uppercase font-semibold border-l border-white/20 pl-3">
          YİMA TAAHHÜT & İNŞAAT
        </span>
      </div>

      {/* Central / Bottom Call-To-Action Button */}
      <div className="absolute bottom-12 sm:bottom-16 z-10 flex flex-col items-center gap-4">
        <button
          onClick={handleClose}
          type="button"
          aria-label="Ana Sayfaya Geç"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900/50 hover:bg-slate-900/80 backdrop-blur-md border border-white/25 hover:border-[#C89D4B] text-white font-medium text-sm sm:text-base tracking-wider transition-all duration-300 shadow-2xl hover:shadow-[#C89D4B]/20 active:scale-95 cursor-pointer"
        >
          <span className="relative z-10 font-semibold">Ana Sayfaya Geç</span>
          <ArrowRight className="w-5 h-5 text-[#C89D4B] group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C89D4B]/0 via-[#C89D4B]/20 to-[#C89D4B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>

        {/* Animated Progress Bar */}
        <div className="w-36 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-[#C89D4B] rounded-full transition-all duration-100 ease-linear"
            style={{
              animation: 'introProgress 5s linear forwards',
            }}
          />
        </div>
      </div>
    </div>
  );
};
