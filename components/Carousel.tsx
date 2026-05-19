"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CarouselProps {
  images: string[];
  alt: string;
  aspectRatio?: string;
  sizes?: string;
}

export default function Carousel({
  images,
  alt,
  aspectRatio = "3/2",
  sizes = "(max-width: 768px) calc(100vw - 48px), 720px",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const [mounted, setMounted] = useState(false);

  const [lbOpen, setLbOpen] = useState(false);      // portal presence
  const [lbVisible, setLbVisible] = useState(false);  // CSS opacity
  const [lbIndex, setLbIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMounted(true); }, []);

  // Carousel navigation
  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  const openLightbox = useCallback(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setLbIndex(current);
    setLbVisible(false);
    setLbOpen(true);
    // Two rAFs: first renders portal at opacity-0, second triggers the transition
    requestAnimationFrame(() => requestAnimationFrame(() => setLbVisible(true)));
  }, [current]);

  const closeLightbox = useCallback(() => {
    setLbVisible(false);
    closeTimerRef.current = setTimeout(() => setLbOpen(false), 220);
  }, []);

  // Direct index updates — strip slides via CSS, no setTimeout needed
  const lbPrev = useCallback(() => {
    setLbIndex((i) => { const n = i === 0 ? images.length - 1 : i - 1; setCurrent(n); return n; });
  }, [images.length]);

  const lbNext = useCallback(() => {
    setLbIndex((i) => { const n = i === images.length - 1 ? 0 : i + 1; setCurrent(n); return n; });
  }, [images.length]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  // Carousel keyboard (only when lightbox is closed)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleKey = (e: KeyboardEvent) => {
      if (lbOpen) return;
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    };
    el.addEventListener("keydown", handleKey);
    return () => el.removeEventListener("keydown", handleKey);
  }, [prev, next, lbOpen]);

  useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     { e.preventDefault(); closeLightbox(); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); lbPrev(); }
      if (e.key === "ArrowRight") { e.preventDefault(); lbNext(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lbOpen, closeLightbox, lbPrev, lbNext]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = lbOpen ? "hidden" : "";
  }, [lbOpen]);

  // Sliding strip — same mechanism as the page carousel.
  // All images live in the DOM from the moment the lightbox opens so the browser
  // starts downloading them all in parallel. Navigation is pure CSS translateX:
  // no setTimeout, no mount/unmount, no "previous image frozen while next loads".
  // Each slide has a dark bg so the loading state is a clean dark rectangle.
  const lightbox = (
    <div
      className="fixed inset-0 z-200 overflow-hidden bg-black/80 backdrop-blur-md"
      style={{ opacity: lbVisible ? 1 : 0, transition: "opacity 0.22s ease" }}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada: ${alt}`}
    >
      {/* Strip */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(calc(-${lbIndex} * 100vw))`,
          // Disable transition on first render so the strip snaps to the
          // correct index instantly (no spurious slide from index 0).
          transition: lbVisible
            ? "transform 0.36s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "none",
          willChange: "transform",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="w-screen h-screen shrink-0 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div
              className="relative"
              style={{ width: "90vw", height: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {!imgErrors[i] && (
                <Image
                  src={src}
                  alt={`${alt} - imagen ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-contain"
                  loading="eager"
                  priority={i === lbIndex}
                  onError={() => setImgErrors((p) => ({ ...p, [i]: true }))}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
        aria-label="Cerrar"
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-colors duration-200"
      >
        <X size={18} strokeWidth={2} className="text-white" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); lbPrev(); }}
          aria-label="Imagen anterior"
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-colors duration-200"
        >
          <ChevronLeft size={20} strokeWidth={2} className="text-white" />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); lbNext(); }}
          aria-label="Imagen siguiente"
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-colors duration-200"
        >
          <ChevronRight size={20} strokeWidth={2} className="text-white" />
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/55 text-sm font-light tracking-widest select-none">
        {lbIndex + 1} / {images.length}
      </div>
    </div>
  );

  return (
    <>
      <div
        ref={containerRef}
        tabIndex={0}
        role="region"
        aria-label={`Carrusel de imágenes: ${alt}`}
        aria-roledescription="carrusel"
        className="w-full max-w-300 mx-auto relative overflow-hidden bg-[#EBEBEB] outline-none focus-visible:ring-2 focus-visible:ring-black"
        style={{ aspectRatio }}
      >
        {/* Images track */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${images.length}`}
              aria-hidden={i !== current}
              className="relative h-full shrink-0 w-full bg-[#EBEBEB]"
            >
              {imgErrors[i] ? (
                <div className="w-full h-full flex items-center justify-center bg-[#EBEBEB]">
                  <span className="text-[#AAAAAA] text-sm font-light tracking-widest uppercase select-none">
                    {alt}
                  </span>
                </div>
              ) : (
                <Image
                  src={src}
                  alt={`${alt} - imagen ${i + 1}`}
                  fill
                  sizes={sizes}
                  className="object-cover transition-opacity duration-300 lg:cursor-zoom-in"
                  loading={i === 0 ? "eager" : "lazy"}
                  onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                  onClick={openLightbox}
                />
              )}
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/55 backdrop-blur-sm transition-all duration-200"
        >
          <ChevronLeft size={17} strokeWidth={2} className="text-white" />
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/55 backdrop-blur-sm transition-all duration-200"
        >
          <ChevronRight size={17} strokeWidth={2} className="text-white" />
        </button>

        {/* Dots */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2"
          role="tablist"
          aria-label="Selector de imagen"
        >
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Imagen ${i + 1}`}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300 p-0 min-w-0 min-h-0"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background:
                  i === current
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox — portal escapes ancestor transform stacking contexts */}
      {mounted && lbOpen && createPortal(lightbox, document.body)}
    </>
  );
}
