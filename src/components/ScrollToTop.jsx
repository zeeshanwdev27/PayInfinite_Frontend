import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "@/lib/lenisStore";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();

    // If lenis exists, smooth scroll. Otherwise fallback.
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;