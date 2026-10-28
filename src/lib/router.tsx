'use client';
// The react-router API the site was written against (Link, NavLink, useNavigate, useLocation, useParams,
// useSearchParams), implemented on top of Next.js navigation so components didn't need rewriting.
import NextLink from 'next/link';
import {
  useParams as useNextParams,
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams
} from 'next/navigation';
import React, { forwardRef, useCallback, useMemo } from 'react';

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;

// Moving between product listing pages (/products/...) keeps the scroll position: the listing scrolls
// itself to its own top instead of jumping back to the hero
const isListing = (path: string) => path === '/products' || path.startsWith('/products/') || path.startsWith('?');
const keepScroll = (from: string, to: string) => isListing(from) && isListing(to.split('?')[0] || '?');

export interface LinkProps extends AnchorProps {
  to: string;
  // keep the scroll position (react-router's preventScrollReset)
  preventScrollReset?: boolean;
  replace?: boolean;
  className?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, preventScrollReset, replace, ...rest }, ref) => {
  const pathname = usePathname() ?? '/';
  return <NextLink ref={ref} href={to} scroll={!(preventScrollReset || keepScroll(pathname, to))} replace={replace} {...rest} />;
});
Link.displayName = 'Link';

export interface NavLinkProps extends Omit<AnchorProps, 'children'> {
  to: string;
  end?: boolean;
  className?: string | ((state: { isActive: boolean }) => string);
  children?: React.ReactNode | ((state: { isActive: boolean }) => React.ReactNode);
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ to, end, className, children, ...rest }, ref) => {
  const pathname = usePathname() ?? '/';
  const target = to.split('?')[0] || '/';
  const isActive = end || target === '/' ? pathname === target : pathname === target || pathname.startsWith(`${target}/`);
  return (
    <NextLink
      ref={ref}
      href={to}
      scroll={!keepScroll(pathname, to)}
      className={typeof className === 'function' ? className({ isActive }) : className}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {typeof children === 'function' ? children({ isActive }) : children}
    </NextLink>
  );
});
NavLink.displayName = 'NavLink';

export const useNavigate = () => {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  return useCallback(
    (to: string | number, options?: { replace?: boolean; preventScrollReset?: boolean }) => {
      if (typeof to === 'number') {
        if (to < 0) router.back();
        else router.forward();
        return;
      }
      const opts = { scroll: !(options?.preventScrollReset || keepScroll(pathname, to)) };
      if (options?.replace) router.replace(to, opts);
      else router.push(to, opts);
    },
    [router, pathname]
  );
};

export const useLocation = () => {
  const pathname = usePathname() ?? '/';
  const params = useNextSearchParams();
  const query = params?.toString() ?? '';
  return useMemo(() => ({ pathname, search: query ? `?${query}` : '', hash: '' }), [pathname, query]);
};

export const useParams = <T extends Record<string, string | string[] | undefined>>() => (useNextParams() ?? {}) as T;

export const useSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const params = useNextSearchParams();
  const searchParams = useMemo(() => new URLSearchParams(params?.toString() ?? ''), [params]);
  const setSearchParams = useCallback(
    (next: URLSearchParams | Record<string, string>, options?: { replace?: boolean; preventScrollReset?: boolean }) => {
      const query = new URLSearchParams(next).toString();
      const url = query ? `${pathname}?${query}` : pathname;
      const opts = { scroll: !options?.preventScrollReset };
      if (options?.replace) router.replace(url, opts);
      else router.push(url, opts);
    },
    [router, pathname]
  );
  return [searchParams, setSearchParams] as const;
};
