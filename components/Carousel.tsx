"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  alt: string;
}

export default function Carousel({ images, alt }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  // Keyboard navigation when carousel is focused
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    };
    el.addEventListener("keydown", handleKey);
    return () => el.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label={`Carrusel de imágenes: ${alt}`}
      aria-roledescription="carrusel"
      className="w-full max-w-300 mx-auto relative overflow-hidden bg-[#F5F5F5] outline-none focus-visible:ring-2 focus-visible:ring-black aspect-[3/2]"
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
              /* Placeholder when image is missing */
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
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition-opacity duration-300"
                loading={i === 0 ? "eager" : "lazy"}
                onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
              />
            )}
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/80 hover:bg-white opacity-70 hover:opacity-100 transition-all duration-300"
      >
        <ChevronLeft size={20} strokeWidth={2} className="text-black" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/80 hover:bg-white opacity-70 hover:opacity-100 transition-all duration-300"
      >
        <ChevronRight size={20} strokeWidth={2} className="text-black" />
      </button>

      {/* Dots */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3"
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
            className="w-2.5 h-2.5 rounded-full border border-black transition-colors duration-300 p-0 min-w-0 min-h-0"
            style={{ background: i === current ? "#000" : "transparent" }}
          />
        ))}
      </div>
    </div>
  );
}
