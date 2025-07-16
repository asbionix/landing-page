import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
