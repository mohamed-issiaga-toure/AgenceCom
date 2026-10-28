"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  "main > section",
  ".pillar-card",
  ".impact-stat",
  ".value-item",
  ".method-step",
  ".service-group",
  ".service-row",
  ".faq-item",
  ".project-card",
  ".contact-details",
  ".contact-form-wrap",
].join(",");

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (!elements.length || !("IntersectionObserver" in window)) return;

    // Décale les animations des éléments  pour éviter leur apparition simultanée.
    const siblingIndexes = new Map<Element, number>();
    elements.forEach((element) => {
      const parent = element.parentElement;
      const index = parent ? siblingIndexes.get(parent) ?? 0 : 0;
      if (parent) siblingIndexes.set(parent, index + 1);

      element.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 85}ms`);
      element.dataset.scrollReveal = "pending";
    });

    document.body.classList.add("has-scroll-reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        (entry.target as HTMLElement).dataset.scrollReveal = "visible";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.body.classList.remove("has-scroll-reveal");
      elements.forEach((element) => {
        delete element.dataset.scrollReveal;
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return children;
}