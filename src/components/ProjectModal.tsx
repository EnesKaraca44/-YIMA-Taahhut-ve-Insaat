import React, { useRef, useState } from 'react';
import { X, MapPin, Calendar, CheckCircle, ArrowRight, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectItem } from '../types';

import { createPortal } from 'react-dom';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigateContact }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const scrollGallery = (direction: -1 | 1) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({
      left: direction * galleryRef.current.clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  const closeLightbox = () => setSelectedImage(null);
  const showAdjacentImage = (direction: -1 | 1) => {
    const images = project?.galleryImages ?? [];
    if (images.length < 2) return;
    const nextIndex = (selectedImageIndex + direction + images.length) % images.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  if (!project) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
        <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header with Photo Background */}
        <div className="relative shrink-0 bg-slate-950 text-white pt-16 p-5 sm:p-6 flex flex-col justify-end overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${project.imagePlaceholderUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-black/40" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer z-10"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-950/90 text-[#C89D4B] text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-[#C89D4B]/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C89D4B] text-slate-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                {project.statusPlaceholder}
              </span>
            </div>

            <h3 id="project-modal-title" className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {project.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89D4B]" />
                <span>{project.locationPlaceholder}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C89D4B]" />
                <span>{project.yearPlaceholder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          <div className="p-5 sm:p-6 space-y-5">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Proje Tanımı & Kapsamı</h4>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Scope & Highlights */}
            {project.details && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Uygulama Kapsamı</h4>
                  <p className="text-slate-600 text-sm">{project.details.scope}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Öne Çıkan Standartlar</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.details.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-amber-50/50 border border-amber-100/50 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle className="w-4 h-4 text-[#C89D4B] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Media Gallery */}
            {(project.galleryImages?.length || project.videoUrl) && (
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Saha Fotoğrafları & Medya</h4>
                  {!!project.galleryImages?.length && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">Yana kaydırın</span>
                      <button
                        type="button"
                        onClick={() => scrollGallery(-1)}
                        aria-label="Önceki fotoğraflar"
                        className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:border-[#C89D4B] hover:text-[#B48C36]"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollGallery(1)}
                        aria-label="Sonraki fotoğraflar"
                        className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:border-[#C89D4B] hover:text-[#B48C36]"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
                {project.videoUrl && (
                  <div className="mb-3 bg-slate-900 rounded-xl overflow-hidden relative border border-slate-200 flex items-center justify-center">
                    <video
                      src={project.videoUrl}
                      controls
                      className="w-full h-auto max-h-[60vh] object-contain"
                      preload="metadata"
                    />
                  </div>
                )}
                {!!project.galleryImages?.length && (
                <div
                  ref={galleryRef}
                  className="flex gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2 touch-pan-x"
                  aria-label="Proje fotoğraf galerisi"
                >
                  {project.galleryImages.map((imgUrl, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setSelectedImageIndex(i);
                        setSelectedImage(imgUrl);
                      }}
                      aria-label={`${i + 1}. fotoğrafı büyüt`}
                      className="group relative aspect-video w-[82%] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left sm:w-[48%] lg:w-[32%]"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} saha fotoğrafı ${i + 1}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                        <ZoomIn className="h-6 w-6 text-white drop-shadow-md" />
                      </span>
                    </button>
                  ))}
                </div>
                )}
            </div>
          )}

          {/* Tags */}
          <div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 shrink-0 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Benzer taahhüt ve inşaat projeleriniz için bizimle görüşebilirsiniz.
          </span>
          <button
            onClick={() => {
              onClose();
              onNavigateContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-brand-midnight bg-gradient-to-r from-brand-amber to-brand-amberLight hover:from-brand-amberLight hover:to-amber-200 transition-all cursor-pointer shadow-md shadow-brand-amber/20"
          >
            <span>İletişime Geç</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-[calc(env(safe-area-inset-top)+1rem)] backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200 touch-pan-y"
          onClick={closeLightbox}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const deltaX = event.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(deltaX) > 50) showAdjacentImage(deltaX < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <button 
            type="button"
            aria-label="Galeriyi kapat"
            className="absolute right-4 top-[calc(env(safe-area-inset-top)+1rem)] z-10 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/25 sm:right-6 sm:top-6"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
          >
            <X className="w-6 h-6" />
          </button>
          {(project.galleryImages?.length ?? 0) > 1 && (
            <>
              <button
                type="button"
                aria-label="Önceki fotoğraf"
                className="absolute left-3 sm:left-6 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/25"
                onClick={(event) => {
                  event.stopPropagation();
                  showAdjacentImage(-1);
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Sonraki fotoğraf"
                className="absolute right-3 sm:right-6 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/25"
                onClick={(event) => {
                  event.stopPropagation();
                  showAdjacentImage(1);
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <span className="absolute bottom-[calc(env(safe-area-inset-bottom)+1rem)] rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                {selectedImageIndex + 1} / {project.galleryImages?.length}
              </span>
            </>
          )}
          <img 
            src={selectedImage} 
            alt={`${project.title} saha fotoğrafı ${selectedImageIndex + 1}`}
            draggable={false}
            className="max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>,
    document.body
  );
};
