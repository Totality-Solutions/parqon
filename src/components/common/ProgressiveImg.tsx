import React, { useState } from 'react';
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
}

const resolvePlaceholder = (src: string, override?: string) => {
  if (override) return override;
  const path = src.startsWith(CDN_BASE_URL) ? src.slice(CDN_BASE_URL.length) : src;
  return imagePlaceholders[path];
};

export const ProgressiveImg: React.FC<ProgressiveImgProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  priority = false,
  placeholderSrc,
  onLoad,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const placeholder = resolvePlaceholder(src, placeholderSrc);

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
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`relative transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...rest}
      />
    </span>
  );
};

export default ProgressiveImg;
