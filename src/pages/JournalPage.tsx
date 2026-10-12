import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { journalEntries } from "../data/journal";

export default function JournalPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(journalEntries.map((entry) => entry.category)),
  ];

  const filteredEntries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return journalEntries.filter((entry) => {
      const matchesCategory =
        selectedCategory === "All" ||
        entry.category === selectedCategory;

      const searchableText =
        `${entry.title} ${entry.excerpt ?? ""} ${entry.category}`.toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [search, selectedCategory]);

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
    page.querySelectorAll(".journal-reveal").forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      delete page.dataset.revealReady;
    };
  }, [filteredEntries]);

  return (
    <main ref={pageRef} className="journal-page min-h-screen bg-white text-stone-900">
      <section className="journal-reveal flex flex-col justify-between gap-4 bg-stone-100 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold sm:text-5xl">Journal</h1>

        <nav aria-label="Breadcrumb" className="text-sm font-medium">
          <Link to="/" className="text-stone-500 hover:text-stone-900">
            Home
          </Link>
          <span className="mx-2 text-[#a75e3b]">&gt;</span>
          <span className="text-[#a75e3b]">Journal</span>
        </nav>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(260px,0.85fr)] lg:gap-14 lg:px-12 lg:py-20">
        <section aria-label="Journal articles" className="space-y-14">
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry) => (
              <article
                key={entry.id}
                id={entry.id}
                className="journal-reveal scroll-mt-24"
              >
                <p className="mb-3 text-sm font-medium text-[#a75e3b]">
                  {entry.category}
                </p>

                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  {entry.title}
                </h2>

                {entry.excerpt && (
                  <p className="mt-4 leading-7 text-stone-600">
                    {entry.excerpt}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-b border-stone-200 pb-5 text-sm text-stone-500">
                  {entry.publishedAt && <span>{entry.publishedAt}</span>}
                  <span>{entry.readTime}</span>
                  <span>
                    {entry.comments ?? 0}{" "}
                    {(entry.comments ?? 0) === 1 ? "Comment" : "Comments"}
                  </span>
                </div>

                <img
                  src={entry.image}
                  alt={entry.title}
                  className="mt-8 aspect-video w-full rounded-sm object-cover"
                />
              </article>
            ))
          ) : (
            <p className="py-12 text-stone-500">
              No journal articles match your search.
            </p>
          )}
        </section>

        <aside className="space-y-8">
          <section className="journal-reveal rounded-md border border-stone-200 p-6">
            <h2 className="mb-5 text-lg font-bold uppercase">Search</h2>
            <label className="sr-only" htmlFor="journal-search">
              Search journal
            </label>
            <input
              id="journal-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search here..."
              className="w-full rounded-md border border-stone-200 px-4 py-3 text-sm outline-none focus:border-[#a75e3b]"
            />
          </section>

          <section className="journal-reveal rounded-md border border-stone-200 p-6">
            <h2 className="mb-5 text-lg font-bold uppercase">Recent Posts</h2>

            <ul className="space-y-5">
              {journalEntries.slice(0, 3).map((entry) => (
                <li key={entry.id} className="border-b border-stone-100 pb-4 last:border-0">
                  <a
                    href={`#${entry.id}`}
                    className="font-semibold leading-snug hover:text-[#a75e3b]"
                  >
                    {entry.title}
                  </a>
                  <p className="mt-2 text-xs text-stone-500">
                    {entry.publishedAt}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="journal-reveal rounded-md border border-stone-200 p-6">
            <h2 className="mb-5 text-lg font-bold uppercase">Categories</h2>

            <ul className="space-y-2">
              {categories.map((category) => {
                const count =
                  category === "All"
                    ? journalEntries.length
                    : journalEntries.filter(
                        (entry) => entry.category === category
                      ).length;

                return (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm transition ${
                        selectedCategory === category
                          ? "bg-[#a75e3b] text-white"
                          : "bg-stone-50 hover:bg-stone-100"
                      }`}
                    >
                      <span>{category}</span>
                      <span>{count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}