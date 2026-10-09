import { useEffect, useRef } from "react";
import Benefits from "../components/Benefits";
import Collections from "../components/Collections";
import Editorial from "../components/Editorial";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Journal from "../components/Journal";
import Newsletter from "../components/Newsletter";

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    page.dataset.revealReady = "true";
    page.querySelectorAll(".home-reveal").forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      delete page.dataset.revealReady;
    };
  }, []);

  return (
    <div ref={pageRef} className="home-page">
      <div className="home-reveal"><Hero /></div>
      <div className="home-reveal"><Benefits /></div>
      <div className="home-reveal"><Collections /></div>
      <div className="home-reveal"><FeaturedProducts /></div>
      <div className="home-reveal"><Editorial /></div>
      <div className="home-reveal"><Newsletter /></div>
      <div className="home-reveal"><Journal /></div>
    </div>
  );
}
