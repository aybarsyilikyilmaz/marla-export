import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function smoothScrollToTop(duration = 1200) {
  const start = window.scrollY;
  const startTime = performance.now();

  function scrollStep(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // easeInOut (premium hissiyat)
    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, start * (1 - ease));

    if (elapsed < duration) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScrollToTop(1500); // ⬅️ BURASI HIZ
  }, [pathname]);

  return null;
}
