import { useEffect } from "react";

/**
 * Adds `.is-visible` to any element with class `.reveal` when it enters viewport.
 * One-shot per element. No deps.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    const observeElements = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      els.forEach((el) => io.observe(el));
    };

    // Observe immediately
    observeElements();

    // Fallback/deferred checks for dynamic routing & delayed hydration
    const timer1 = setTimeout(observeElements, 50);
    const timer2 = setTimeout(observeElements, 250);

    // Watch DOM changes to capture newly inserted or dynamic elements
    const observer = new MutationObserver(() => {
      observeElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
}
