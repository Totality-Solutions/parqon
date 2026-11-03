'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Uneven vertical strips (left %, right %) that bring in the next image one by one.
// Each strip starts zoomed in and settles, so mid-transition the panels show the
// image at different scales - the layered "collage" look.
const PANELS: { l: number; r: number; from: 'top' | 'bottom' }[] = [
  { l: 0, r: 62, from: 'bottom' },
  { l: 38, r: 38, from: 'top' },
  { l: 62, r: 22, from: 'bottom' },
  { l: 78, r: 0, from: 'top' },
];
const STAGGER = 0.14;
const DURATION = 1.1;
const EASE = [0.76, 0, 0.24, 1] as const;

const load = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.src = src;
    img.decode().then(resolve, resolve);
  });

interface PanelSliderProps {
  images: string[];
  interval?: number; // ms each image stays on screen
  alt?: string;
  className?: string;
}

export const PanelSlider: React.FC<PanelSliderProps> = ({ images, interval = 5000, alt = '', className = '' }) => {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const busy = useRef(false);

  const goTo = async (i: number) => {
    if (busy.current || i === current) return;
    busy.current = true;
    await load(images[i]);
    if (reduce) {
      setCurrent(i);
      busy.current = false;
    } else {
      setNext(i);
    }
  };

  const finish = () => {
    if (next === null) return;
    setCurrent(next);
    setNext(null);
    busy.current = false;
  };

  // autoplay; restarts the timer after every change
  useEffect(() => {
    if (images.length < 2 || next !== null) return;
    const t = setTimeout(() => goTo((current + 1) % images.length), interval);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, next, images.length, interval]);

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      <motion.img
        key={images[current]}
        src={images[current]}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        initial={current === 0 && next === null ? { scale: 1.2, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        fetchPriority="high"
      />

      {next !== null &&
        PANELS.map((p, i) => {
          const hidden = p.from === 'bottom' ? `inset(100% ${p.r}% 0% ${p.l}%)` : `inset(0% ${p.r}% 100% ${p.l}%)`;
          const delay = i * STAGGER;
          return (
            <motion.div
              key={`${next}-${i}`}
              className="absolute inset-0"
              initial={{ clipPath: hidden }}
              animate={{ clipPath: `inset(0% ${p.r}% 0% ${p.l}%)` }}
              transition={{ duration: DURATION, delay, ease: EASE }}
              onAnimationComplete={i === PANELS.length - 1 ? finish : undefined}
            >
              <motion.img
                src={images[next]}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                initial={{ scale: 1.12 + i * 0.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: DURATION + 0.3, delay, ease: EASE }}
              />
            </motion.div>
          );
        })}

      {/* slide markers */}
      {/* {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === (next ?? current) ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};
