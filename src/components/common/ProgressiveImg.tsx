'use client';
import React, { useCallback, useState, useSyncExternalStore } from 'react';
import { CDN_BASE_URL } from '../../config/cdn';
import { imagePlaceholders } from '../../config/imagePlaceholders';

interface ProgressiveImgProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder'> {
  src: string;
  alt: string;
  /** Extra classes for the wrapping span (e.g. rounded corners, aspect ratio). */
  wrapperClassName?: string;
  /** Mark above-the-fold images (hero/banner) so they load eagerly at high priority instead of lazily. */
  priority?: boolean;
  /** Override the auto-detected low-quality placeholder. */
  placeholderSrc?: string;
  /** How wide the image shows on screen (HTML "sizes"), so the browser can pick the smaller copy. */
  sizes?: string;
}

const resolvePlaceholder = (src: string, override?: string) => {
  if (override) return override;
  const path = src.startsWith(CDN_BASE_URL) ? src.slice(CDN_BASE_URL.length) : src;
  return imagePlaceholders[path];
};

// CMS images carry their 900px copy after "#" (see fileUrl in src/lib/catalog/server.ts):
// "…/oak.jpg#w=1800&card=oak-900x600.jpg" → full image, its width and the smaller copy's URL
const readSizes = (src: string) => {
  const [url, hash] = src.split('#');
  const params = new URLSearchParams(hash ?? '');
  const card = params.get('card');
  const width = Number(params.get('w'));
  if (!card || !width) return { url, card: undefined, srcSet: undefined };
  const cardUrl = url.slice(0, url.lastIndexOf('/') + 1) + encodeURIComponent(card);
  return { url, card: cardUrl, srcSet: `${cardUrl} 900w, ${url} ${width}w` };
};

// Data Saver on, or a 2G/3G connection: always take the smaller copy (follows connection changes)
type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };
const connection = () =>
  typeof navigator === 'undefined' ? undefined : (navigator as Navigator & { connection?: Connection }).connection;
const slowNetwork = () => {
  const c = connection();
  return Boolean(c?.saveData || (c?.effectiveType && ['slow-2g', '2g', '3g'].includes(c.effectiveType)));
};
const onConnectionChange = (notify: () => void) => {
  const c = connection();
  c?.addEventListener('change', notify);
  return () => c?.removeEventListener('change', notify);
};

export const ProgressiveImg: React.FC<ProgressiveImgProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  priority = false,
  placeholderSrc,
  sizes = '100vw',
  onLoad,
  ...rest
}) => {
  // which src has finished loading (a new src shows the spinner again until it arrives)
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const loaded = loadedSrc === src;
  const slow = useSyncExternalStore(onConnectionChange, slowNetwork, () => false);
  const { url, card, srcSet } = readSizes(src || '');
  const placeholder = resolvePlaceholder(url, placeholderSrc);

  // An image already in the browser cache can finish before React is listening for "load":
  // show it straight away instead of leaving the spinner on
  const checkCached = useCallback(
    (img: HTMLImageElement | null) => {
      if (img?.complete && img.naturalWidth) setLoadedSrc(src);
    },
    [src]
  );

  // No image: plain blank tile
  if (!src) {
    return <span role="img" aria-label={alt} className={`block bg-gray-100 ${wrapperClassName}`} />;
  }

  return (
    <span className={`relative block overflow-hidden ${wrapperClassName}`}>
      {placeholder && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-105 object-cover blur-lg transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'} ${className}`}
        />
      )}

      {!loaded && (
        <span className="absolute inset-0 z-10 flex items-center justify-center">
          <span
            className={`h-6 w-6 animate-spin rounded-full border-2 border-t-transparent ${placeholder ? 'border-white/90' : 'border-[#837B55]/60'}`}
            role="status"
            aria-label="Loading image"
          />
        </span>
      )}

      {!placeholder && !loaded && (
        <span className="absolute inset-0 animate-pulse bg-gray-100" />
      )}

      <img
        ref={checkCached}
        src={slow && card ? card : url}
        srcSet={slow ? undefined : srcSet}
        sizes={srcSet && !slow ? sizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={(e) => {
          setLoadedSrc(src);
          onLoad?.(e);
        }}
        className={`relative transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...rest}
      />
    </span>
  );
};

export default ProgressiveImg;
