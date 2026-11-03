'use client';
// Paints an image in over whatever is behind it with a few rough brush strokes (an SVG mask whose
// strokes draw themselves). Fills its positioned parent like `object-fit: cover`.
import React, { useEffect, useId, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Strokes are drawn on a 1600×900 canvas, stretched to the box: zig-zag rows like a wide brush
const W = 1600;
const H = 900;
const STROKES = [
  'M -200 110 C 300 30, 950 200, 1800 80',
  'M 1800 290 C 1250 220, 500 380, -200 280',
  'M -200 470 C 400 400, 1100 560, 1800 460',
  'M 1800 660 C 1150 590, 450 750, -200 650',
  'M -200 850 C 500 780, 1050 930, 1800 830'
];
const STROKE_WIDTH = 270;
const STROKE_TIME = 0.5; // seconds per stroke
const STROKE_GAP = 0.22; // next stroke starts before the previous one ends

interface BrushRevealProps {
  src: string;
  // 1 paints left to right, -1 right to left
  direction?: number;
  onDone?: () => void;
  className?: string;
}

export const BrushReveal: React.FC<BrushRevealProps> = ({ src, direction = 1, onDone, className = '' }) => {
  const id = useId().replace(/:/g, '');
  const reduceMotion = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [loaded, setLoaded] = useState(false);
  const doneRef = useRef(onDone);
  useEffect(() => {
    doneRef.current = onDone;
  });

  // Wait for the image, so the brush never paints an empty area
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = src;
    img.decode().catch(() => {}).finally(() => !cancelled && setLoaded(true));
    return () => { cancelled = true; };
  }, [src]);

  // Draw in the box's own pixels so the image is framed exactly like the object-cover image behind it
  useEffect(() => {
    const el = svgRef.current?.parentElement;
    if (!el) return;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // No animation for people who asked for less motion: show it straight away
  useEffect(() => {
    if (reduceMotion && loaded) doneRef.current?.();
  }, [reduceMotion, loaded]);

  if (reduceMotion) return null;

  const ready = loaded && size && size.w > 0 && size.h > 0;
  const flip = direction < 0 ? `translate(${W} 0) scale(-1 1)` : '';

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox={size ? `0 0 ${size.w} ${size.h}` : `0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {ready && (
        <>
          <defs>
            {/* rough, bristly stroke edges */}
            <filter id={`brush-${id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.09" numOctaves="3" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="90" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <mask id={`mask-${id}`} maskUnits="userSpaceOnUse" x={-size.w} y={-size.h} width={size.w * 3} height={size.h * 3}>
              <rect x={-size.w} y={-size.h} width={size.w * 3} height={size.h * 3} fill="black" />
              <g transform={`scale(${size.w / W} ${size.h / H})`}>
                <g transform={flip} filter={`url(#brush-${id})`}>
                  {STROKES.map((d, i) => (
                    <motion.path
                      key={d}
                      d={d}
                      fill="none"
                      stroke="white"
                      strokeWidth={STROKE_WIDTH}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: STROKE_TIME, delay: i * STROKE_GAP, ease: [0.45, 0, 0.25, 1] }}
                      onAnimationComplete={i === STROKES.length - 1 ? () => doneRef.current?.() : undefined}
                    />
                  ))}
                </g>
              </g>
            </mask>
          </defs>
          <image
            href={src}
            x="0"
            y="0"
            width={size.w}
            height={size.h}
            preserveAspectRatio="xMidYMid slice"
            mask={`url(#mask-${id})`}
          />
        </>
      )}
    </svg>
  );
};
