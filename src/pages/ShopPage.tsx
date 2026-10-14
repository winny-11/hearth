import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import type { ProductCategory } from "../types";

const PAGE_SIZE = 8;

const categories: Array<"All" | ProductCategory> = [
  "All",
  "Popular",
  "On sale",
  "Best Rated",
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<"All" | ProductCategory>("All");
  const [page, setPage] = useState(1);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  const pageCount = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE)
  );

  const visibleProducts = filteredProducts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  function selectCategory(value: "All" | ProductCategory) {
    setSelectedCategory(value);
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-white px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <nav
        aria-label="Shop categories"
        className="mb-11 flex justify-center gap-8 text-sm font-semibold text-stone-500"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => selectCategory(item)}
            aria-pressed={selectedCategory === item}
            className={`transition-colors hover:text-[#a75e3b] ${
              selectedCategory === item ? "text-[#a75e3b]" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {visibleProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-16 rounded-lg sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-stone-500">
          No products in this section yet.
        </p>
      )}

      {pageCount > 1 && (
        <nav
          aria-label="Shop pages"
          className="mt-16 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            className="rounded-full border border-stone-300 px-4 py-2 text-sm disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from({ length: pageCount }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                aria-current={page === pageNumber ? "page" : undefined}
                className={`h-9 w-9 rounded-full text-sm ${
                  page === pageNumber
                    ? "bg-[#a75e3b] text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() =>
              setPage((current) => Math.min(pageCount, current + 1))
            }
            disabled={page === pageCount}
            className="rounded-full border border-stone-300 px-4 py-2 text-sm disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}
    </main>
  );
}