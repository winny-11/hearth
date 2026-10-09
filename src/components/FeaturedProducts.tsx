import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section id="products" className="px-5 py-12 sm:px-10 lg:px-[8%] lg:py-20">
      <div className="mb-7 flex items-end justify-between"><div><p className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-stone-500">GOOD THINGS, WELL MADE</p><h2 className="font-serif text-3xl sm:text-4xl">Meet the favourites.</h2></div><a href="/shop" className="border-b border-stone-400 pb-1 text-xs">Shop all ↗</a></div>
      <p className="mb-6 border-b border-stone-200 pb-4 font-serif text-sm text-stone-500">Furniture that earns its place.</p>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-5">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </section>
  );
}
