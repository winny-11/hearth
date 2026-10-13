import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero/hero-1.avif";
import hero2 from "../assets/hero/hero-2.avif";
import hero3 from "../assets/hero/hero-3.avif";
import hero4 from "../assets/hero/hero-4.avif";

const slides = [
  {
    image: hero1,
    eyebrow: "THE SLOW HOME EDIT",
    title: "Less, but better.",
    emphasis: "but better.",
    description:
      "Pieces with purpose. Materials with a story. A home that feels like you.",
    button: "Explore the collection",
    caption: "A softer kind of everyday.",
  },
  {
    image: hero2,
    eyebrow: "MADE FOR GATHERING",
    title: "Gather, linger, repeat.",
    emphasis: "linger, repeat.",
    description:
      "Comfortable pieces for long dinners, good conversation, and everyday rituals.",
    button: "Shop dining",
    caption: "Room for one more.",
  },
  {
    image: hero3,
    eyebrow: "NATURAL BY DESIGN",
    title: "Bring the outside in.",
    emphasis: "outside in.",
    description:
      "Natural textures and honest materials bring a little more calm into your home.",
    button: "Discover our pieces",
    caption: "Grounded in natural materials.",
  },
  {
    image: hero4,
    eyebrow: "A HOME THAT LASTS",
    title: "Make room to slow down.",
    emphasis: "to slow down.",
    description:
      "Considered furniture for slow mornings, peaceful evenings, and everything between.",
    button: "Find your favorite",
    caption: "Made for the everyday.",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative h-120 overflow-hidden sm:h-135 lg:h-150">
      {slides.map((item, index) => (
        <img
          key={item.eyebrow}
          src={item.image}
          alt={item.eyebrow}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-14">
        <div className="max-w-xl text-white">
          <p className="mb-5 text-[10px] font-semibold tracking-[0.24em]">
            {slide.eyebrow}
          </p>

          <h1 className="font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            {slide.title.replace(slide.emphasis, "")}
            <em className="font-normal text-[#dfad91]">{slide.emphasis}</em>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-6 text-white/90 sm:text-base">
            {slide.description}
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 bg-white px-5 py-4 text-xs font-medium text-stone-900 transition hover:bg-[#dfad91]"
          >
            {slide.button}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <p className="absolute bottom-8 right-6 z-10 hidden text-[10px] text-white sm:block lg:right-12">
        {slide.caption}
      </p>

      <div className="absolute bottom-7 left-6 z-20 flex gap-2 sm:left-10 lg:left-14">
        {slides.map((item, index) => (
          <button
            key={item.eyebrow}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeSlide
                ? "w-6 bg-[#dfad91]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}