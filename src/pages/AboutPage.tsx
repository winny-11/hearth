import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import storyLeft from "../assets/story-left.avif";
import storyRight from "../assets/story-right.avif";
import featureDesign from "../assets/feature-design.avif";
import featureDetails from "../assets/feature-details.avif";

export default function AboutPage() {
  const pageRef = useRef<HTMLElement>(null);

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
    page.querySelectorAll(".about-reveal").forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      delete page.dataset.revealReady;
    };
  }, []);

  return (
    <main ref={pageRef} className="about-page bg-white text-stone-900">
     
      <section className="about-reveal flex flex-col justify-between gap-4 bg-stone-100 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold sm:text-5xl">About</h1>

        <nav aria-label="Breadcrumb" className="text-sm font-medium">
          <Link to="/" className="text-stone-500 hover:text-stone-900">
            Home
          </Link>
          <span className="mx-2 text-[#a75e3b]">&gt;</span>
          <span className="text-[#a75e3b]">About</span>
        </nav>
      </section>

      

      <section className="about-reveal mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="relative grid gap-6 md:grid-cols-2">
          <img
            src={storyLeft}
            alt="A welcoming furniture showroom"
            className="h-90 w-full rounded-md object-cover sm:h-115"
          />

          <img
            src={storyRight}
            alt="Furniture and natural materials in a home setting"
            className="h-90 w-full rounded-md object-cover sm:h-115"
          />

          <div className="bg-white px-6 py-8 text-center shadow-sm md:absolute md:left-1/2 md:top-1/2 md:w-[min(80%,520px)] md:-translate-x-1/2 md:-translate-y-1/2 md:px-12 md:py-10">
            <p className="mb-4 text-sm text-stone-600">
              <span className="mr-3 text-[#a75e3b]">~</span>
              The Hearth story
              <span className="ml-3 text-[#a75e3b]">~</span>
            </p>

            <h2 className="text-3xl font-bold uppercase sm:text-4xl">
              A place to feel at home
            </h2>
          </div>
        </div>
      </section>

      {/* Story and values */}
      <section className="about-reveal mx-auto grid max-w-7xl gap-10 px-5 pb-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr] lg:px-12">
        <p className="leading-7 text-stone-600">
          Hearth is about the pieces that make everyday spaces feel more like
          home. We bring together furniture for shared meals, quiet mornings,
          and the moments in between.
        </p>

        <p className="leading-7 text-stone-600">
          We believe a room comes together through thoughtful choices. Explore
          welcoming shapes, useful details, and materials that bring warmth to
          your home.
        </p>

        <ul className="space-y-6">
          <li className="flex gap-4">
            <span className="text-xl text-[#a75e3b]">✓</span>
            <span className="font-semibold">Comfort for everyday living</span>
          </li>
          <li className="flex gap-4">
            <span className="text-xl text-[#a75e3b]">✓</span>
            <span className="font-semibold">Thoughtful forms and details</span>
          </li>
          <li className="flex gap-4">
            <span className="text-xl text-[#a75e3b]">✓</span>
            <span className="font-semibold">Furniture to make your own</span>
          </li>
        </ul>
      </section>

      {/* Feature section one */}
      <section className="about-reveal mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-12">
        <img
          src={featureDesign}
          alt="A considered furniture arrangement"
          className="h-90 w-full rounded-md object-cover sm:h-105"
        />

        <div>
          <p className="mb-4 text-sm text-stone-600">
            <span className="mr-3 text-[#a75e3b]">~</span>
            The Hearth approach
          </p>

          <h2 className="text-3xl font-bold uppercase sm:text-4xl">
            Pieces that work together
          </h2>

          <p className="mt-6 leading-7 text-stone-600">
            Find pieces for different rooms and routines, with shapes and
            finishes that feel at home together. Start with one favorite item
            and build your space around it.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-md bg-[#a75e3b] px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-900"
          >
            Explore the collection
          </Link>
        </div>
      </section>

      {/* Feature section two */}
      <section className="about-reveal mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="mb-4 text-sm text-stone-600">
            <span className="mr-3 text-[#a75e3b]">~</span>
            Made for your home
          </p>

          <h2 className="text-3xl font-bold uppercase sm:text-4xl">
            Make space for living
          </h2>

          <p className="mt-6 leading-7 text-stone-600">
            Your home should reflect the way you live. Browse Hearth’s
            collection and find furniture that helps each room feel comfortable,
            useful, and personal.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-md bg-[#a75e3b] px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-900"
          >
            Get in touch
          </Link>
        </div>

        <img
          src={featureDetails}
          alt="Furniture details and textures"
          className="h-90 w-full rounded-md object-cover sm:h-105"
        />
      </section>
    </main>
  );
}