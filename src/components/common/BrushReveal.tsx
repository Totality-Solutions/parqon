'use client';
// "Morph brush" reveal: paints an image in over whatever is behind it with a liquid, blobby edge that sweeps
// across the box, with droplets forming just ahead of it. Fills its positioned parent like `object-fit: cover`.
//
// How: an SVG mask with two parts. The main area grows from one side; a low-frequency noise displacement
// bends its edge into waves. A band just ahead of the edge is broken into noise spots (the droplets). Both go
// through a "gooey" blur + alpha threshold, which turns them into smooth blobs.
import React, { useEffect, useId, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';

const DURATION = 1.6; // seconds for a full sweep
// blur + sharp alpha threshold: soft shapes become smooth blobs with crisp edges
const GOO = '0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 40 -18';

// Where the edge is, how much it wobbles and how wide the droplet band is, at progress 0..1
const geometry = (w: number, h: number, progress: number) => {
  const big = Math.max(w, h);
  // waves grow mid-sweep and settle at the end, so the edge looks like it's morphing
  const wobble = big * 0.16 * (0.6 + 0.8 * Math.sin(Math.PI * progress));
  const band = big * 0.22;
  const start = w + wobble * 0.6;
  const end = -wobble * 0.6 - band * 0.2;
  return {
    wobble,
    band,
    edge: start + (end - start) * progress,
    // the noise drifts a little as it sweeps, which keeps the blobs moving
    drift: 0.006 + progress * 0.002,
    blur: Math.max(6, w * 0.01)
  };
};

interface BrushRevealProps {
  src: string;
  // -1 sweeps from right to left, 1 from left to right
  direction?: number;
  onDone?: () => void;
  className?: string;
}

export const BrushReveal: React.FC<BrushRevealProps> = ({ src, direction = -1, onDone, className = '' }) => {
  const id = useId().replace(/:/g, '');
  const reduceMotion = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const doneRef = useRef(onDone);
  useEffect(() => {
    doneRef.current = onDone;
  });

  // Wait for the image, so the reveal never shows an empty area
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

  const ready = Boolean(loaded && size && size.w > 0 && size.h > 0);

  // Run the sweep once the image is ready; people who asked for less motion get it straight away
  useEffect(() => {
    if (!ready) return;
    if (reduceMotion) {
      doneRef.current?.();
      return;
    }
    const controls = animate(0, 1, {
      duration: DURATION,
      ease: [0.45, 0, 0.55, 1],
      onUpdate: setProgress,
      onComplete: () => doneRef.current?.()
    });
    return () => controls.stop();
  }, [ready, reduceMotion]);

  if (reduceMotion) return null;

  const w = size?.w ?? 0;
  const h = size?.h ?? 0;
  const { wobble, band, edge, drift, blur } = geometry(w, h, progress);
  const pad = wobble + 40;
  // drawn for a right-to-left sweep; mirrored for left to right
  const flip = direction > 0 ? `translate(${w} 0) scale(-1 1)` : undefined;
  const region = { x: -w, y: -h, width: w * 3, height: h * 3 };

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox={`0 0 ${w || 1} ${h || 1}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {ready && (
        <>
          <defs>
            <filter id={`edge-${id}`} filterUnits="userSpaceOnUse" {...region}>
              <feTurbulence type="fractalNoise" baseFrequency={`${drift} ${drift * 1.4}`} numOctaves="2" seed="11" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={wobble} xChannelSelector="R" yChannelSelector="G" result="wavy" />
              <feGaussianBlur in="wavy" stdDeviation={blur} result="soft" />
              <feColorMatrix in="soft" type="matrix" values={GOO} />
            </filter>
            <filter id={`drops-${id}`} filterUnits="userSpaceOnUse" {...region}>
              <feTurbulence type="fractalNoise" baseFrequency={drift * 2.4} numOctaves="2" seed="4" result="noise" />
              <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  9 0 0 0 -4.6" result="spots" />
              <feComposite in="spots" in2="SourceGraphic" operator="in" result="inBand" />
              <feGaussianBlur in="inBand" stdDeviation={blur} result="soft" />
              <feColorMatrix in="soft" type="matrix" values={GOO} />
            </filter>
            {/* droplets thin out the further they are ahead of the edge */}
            <linearGradient id={`fade-${id}`} gradientUnits="userSpaceOnUse" x1={edge - band} x2={edge} y1="0" y2="0">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="1" />
            </linearGradient>
            <mask id={`mask-${id}`} maskUnits="userSpaceOnUse" {...region}>
              <rect {...region} fill="black" />
              <g transform={flip}>
                <g filter={`url(#drops-${id})`}>
                  <rect x={edge - band} y={-pad} width={band} height={h + pad * 2} fill={`url(#fade-${id})`} />
                </g>
                <g filter={`url(#edge-${id})`}>
                  <rect x={edge} y={-pad} width={w * 2} height={h + pad * 2} fill="white" />
                </g>
              </g>
            </mask>
          </defs>
          <image
            href={src}
            x="0"
            y="0"
            width={w}
            height={h}
            preserveAspectRatio="xMidYMid slice"
            mask={`url(#mask-${id})`}
          />
        </>
      )}
    </svg>
  );
};
