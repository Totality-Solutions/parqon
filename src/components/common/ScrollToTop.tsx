import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Product listing pages (/products, /products/<brand>/<category>/...) handle their own scrolling
const isProductListing = (path: string) => path === "/products" || path.startsWith("/products/");

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previous = useRef(pathname);

  useEffect(() => {
    const from = previous.current;
    previous.current = pathname;
    // Moving between product listing pages keeps the visitor at the listing instead of the hero
    if (isProductListing(from) && isProductListing(pathname)) return;
    // This snaps the scroll to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every time the URL path changes

  return null;
};
