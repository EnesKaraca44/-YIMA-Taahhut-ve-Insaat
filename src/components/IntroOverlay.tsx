import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'yima_intro_seen';

const hasSeenIntro = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
    return false;
  }
};

const markIntroSeen = () => {
  try {
    sessionStorage.setItem(STORAGE_KEY, 'true');
  } catch {
    // The intro should still work when session storage is unavailable.
  }
};

export const IntroOverlay: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState(() => {
    if (typeof window === 'undefined') return '/intro.mp4';
    return window.matchMedia('(max-width: 767px), (pointer: coarse)').matches
      ? '/intro-mobile.mp4'
      : '/intro.mp4';
  });
  const isMobileVideo = videoSrc === '/intro-mobile.mp4';
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    return typeof window !== 'undefined' && !hasSeenIntro();
  });
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClosingRef = useRef(false);
  const previousOverflowRef = useRef('');

  const handleClose = () => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setIsFadingOut(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    markIntroSeen();

    fadeTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 700);
  };

  useEffect(() => {
    if (!isVisible) return;

    const mobileMediaQuery = window.matchMedia('(max-width: 767px), (pointer: coarse)');
    const updateVideoSource = () => {
      setVideoSrc(mobileMediaQuery.matches ? '/intro-mobile.mp4' : '/intro.mp4');
    };
    if (mobileMediaQuery.addEventListener) {
      mobileMediaQuery.addEventListener('change', updateVideoSource);
    } else {
      mobileMediaQuery.addListener(updateVideoSource);
    }

    markIntroSeen();

    // Close after five seconds if playback does not end first.
    timerRef.current = setTimeout(() => {
      handleClose();
    }, 5000);

    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (fadeTimerRef.current) {
        clearTimeout(fadeTimerRef.current);
      }
      if (mobileMediaQuery.removeEventListener) {
        mobileMediaQuery.removeEventListener('change', updateVideoSource);
      } else {
        mobileMediaQuery.removeListener(updateVideoSource);
      }
      document.body.style.overflow = previousOverflowRef.current;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      id="intro-overlay"
      className={`fixed inset-0 w-full z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Fullscreen Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        onEnded={handleClose}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectFit: 'cover',
          // The mobile encode keeps the full landscape shot inside a blurred
          // portrait canvas. Enlarge it so the actual footage fills the screen.
          transform: isMobileVideo
            ? `scale(${Math.max(1, Math.min(4.5, (window.innerHeight / window.innerWidth) * (16 / 9)))})`
            : undefined,
        }}
      />

      {/* Ultra-subtle bottom shadow only for button readability - keeps video crisp & bright */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Top Corporate Branding Badge */}
      <div className="absolute top-[calc(env(safe-area-inset-top)+1.5rem)] sm:top-[calc(env(safe-area-inset-top)+2.5rem)] left-1/2 -translate-x-1/2 z-10 flex max-w-[calc(100vw-2rem)] items-center gap-2 sm:gap-3 bg-slate-900/40 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full border border-white/15 shadow-2xl">
        <img src="/logo-transparent.png" alt="YİMA İnşaat" className="h-6 sm:h-8 w-auto shrink-0 object-contain" />
        <span className="min-w-0 max-w-[calc(100vw-7rem)] whitespace-normal break-words text-[10px] leading-tight sm:max-w-none sm:text-sm tracking-wide sm:tracking-widest text-slate-100 uppercase font-semibold border-l border-white/20 pl-3">
          YİMA TAAHHÜT & İNŞAAT
        </span>
      </div>

      {/* Central / Bottom Call-To-Action Button */}
      <div className="absolute bottom-[calc(env(safe-area-inset-bottom)+3rem)] sm:bottom-[calc(env(safe-area-inset-bottom)+4rem)] z-10 flex flex-col items-center gap-4">
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
