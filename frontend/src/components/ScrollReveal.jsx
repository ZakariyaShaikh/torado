import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelector = [
  "main > div > *",
  "footer",
  "footer > div > *",
  ".grid > *",
  ".swiper-slide > *",
  "[class*='shadow']",
].join(",");

export const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observedElements = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    const shouldSkip = (element) => {
      return (
        element.closest(".fixed") ||
        element.closest("form") ||
        element.closest("[class*='Admin']") ||
        element.closest("[data-no-reveal]") ||
        element.tagName === "OPTION"
      );
    };

    const prepareElements = () => {
      const elements = Array.from(document.querySelectorAll(revealSelector));
      elements.forEach((element, index) => {
        if (observedElements.has(element) || shouldSkip(element)) return;

        const delay = Math.min(index % 6, 5) * 80;
        element.classList.add("scroll-reveal");
        element.style.setProperty("--reveal-delay", `${delay}ms`);
        observedElements.add(element);
        observer.observe(element);
      });
    };

    const timeoutId = window.setTimeout(prepareElements, 80);
    const mutationObserver = new MutationObserver(prepareElements);

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.clearTimeout(timeoutId);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};
