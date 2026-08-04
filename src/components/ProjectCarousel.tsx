'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';

interface ProjectCarouselProps {
  images: string[];
  title: string;
  autoPlay?: boolean;
  imageFit?: 'cover' | 'contain';
}

export default function ProjectCarousel({ images, title, autoPlay = true, imageFit = 'cover' }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const imageCount = images.length;

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + imageCount) % imageCount);
  }, [imageCount]);

  const previous = useCallback(() => {
    setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
  }, [imageCount]);
  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % imageCount);
  }, [imageCount]);

  useEffect(() => {
    if (!autoPlay || isPaused || isModalOpen || imageCount < 2) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % imageCount), 5000);
    return () => window.clearInterval(timer);
  }, [autoPlay, imageCount, isModalOpen, isPaused]);

  useEffect(() => {
    if (!isModalOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false);
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, next, previous]);

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === 'touch') {
      didSwipe.current = false;
      touchStartX.current = event.clientX;
    }
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (event.pointerType !== 'touch' || touchStartX.current === null) return;
    const distance = event.clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 45) return;
    didSwipe.current = true;
    if (distance > 0) previous(); else next();
  };

  const controls = (modal = false) => imageCount > 1 && (
    <>
      <button type="button" onClick={(event) => { event.stopPropagation(); previous(); }} className={`carousel-arrow left-3 ${modal ? 'md:left-6' : ''}`} aria-label={`Imagen anterior de ${title}`}><Icon name="chevronLeft" className="size-5"/></button>
      <button type="button" onClick={(event) => { event.stopPropagation(); next(); }} className={`carousel-arrow right-3 ${modal ? 'md:right-6' : ''}`} aria-label={`Imagen siguiente de ${title}`}><Icon name="chevronRight" className="size-5"/></button>
    </>
  );

  const modal = typeof document !== 'undefined' && isModalOpen ? createPortal(
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#100b1e]/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`Galería ampliada de ${title}`} onClick={() => setIsModalOpen(false)}>
      <button type="button" onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-7 md:top-7" aria-label="Cerrar galería"><Icon name="close" className="size-6"/></button>
      <div className="relative h-[min(78vh,760px)] w-full max-w-6xl touch-pan-y overflow-hidden" onClick={(event) => event.stopPropagation()} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
        <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images.map((src, index) => <div key={src} className="relative h-full w-full shrink-0"><Image src={src} alt={`${title}, captura ${index + 1} de ${imageCount}`} fill priority={index === activeIndex} draggable={false} className="select-none object-contain" sizes="100vw"/></div>)}
        </div>
        {controls(true)}
        <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-3 text-white"><div className="flex gap-2 rounded-full bg-[#100b1e]/60 px-3 py-2 backdrop-blur-sm">{images.map((_, index) => <button key={index} type="button" onClick={() => goTo(index)} aria-label={`Ver imagen ${index + 1}`} aria-current={index === activeIndex} className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-[var(--secondary)]' : 'w-2 bg-white/40 hover:bg-white/70'}`}/>)}</div><span className="rounded-full bg-[#100b1e]/60 px-3 py-2 text-xs font-bold tabular-nums backdrop-blur-sm">{activeIndex + 1} / {imageCount}</span></div>
      </div>
    </div>, document.body) : null;

  return (
    <div className="relative aspect-video overflow-hidden bg-[var(--soft)] touch-pan-y" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
      <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((src, index) => <div key={src} className="relative h-full w-full shrink-0"><Image src={src} alt={`${title}, captura ${index + 1} de ${imageCount}`} fill loading="lazy" draggable={false} className={`select-none transition-transform duration-500 group-hover:scale-[1.03] ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>)}
      </div>
      <button type="button" onClick={() => { if (didSwipe.current) { didSwipe.current = false; return; } setIsModalOpen(true); }} className="absolute inset-0 z-10 cursor-zoom-in" aria-label={`Ampliar galería de ${title}`} />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#1E1833]/45 via-transparent to-transparent"/>
      {controls()}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-30 flex items-center justify-center gap-3"><div className="pointer-events-auto flex gap-1.5 rounded-full bg-[#1E1833]/55 px-2.5 py-2 backdrop-blur-sm">{images.map((_, index) => <button key={index} type="button" onClick={() => goTo(index)} aria-label={`Ver imagen ${index + 1} de ${title}`} aria-current={index === activeIndex} className={`h-1.5 rounded-full transition-all ${index === activeIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/55 hover:bg-white'}`}/>)}</div><span className="rounded-full bg-[#1E1833]/55 px-2.5 py-1.5 text-xs font-bold tabular-nums text-white backdrop-blur-sm">{activeIndex + 1} / {imageCount}</span></div>
      {modal}
    </div>
  );
}
