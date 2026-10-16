import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((item) => item.id === productId);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="grid min-h-[60vh] place-items-center px-6 text-center">
        <div>
          <h1 className="font-serif text-3xl text-stone-900">
            Product not found
          </h1>
          <p className="mt-3 text-sm text-stone-600">
            We couldn’t find that Hearth product.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block bg-[#a75e3b] px-6 py-3 text-sm text-white hover:bg-[#8f4e30]"
          >
            Back to shop
          </Link>
        </div>
      </main>
    );
  }

  const selectedProduct = product;

  function handleAddToCart() {
    addItem(selectedProduct);
    setAdded(true);
  }

  return (
    <main className="bg-[#faf9f6] px-5 py-10 sm:px-8 lg:px-[6%] lg:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
        <Link to="/" className="hover:text-[#a75e3b]">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-[#a75e3b]">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-800">{product.name}</span>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-4/5 w-full rounded-[20px] object-cover"
          />
        </div>

        <section className="py-2 lg:py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a75e3b]">
            {product.category}
          </p>

          <h1 className="mt-4 font-serif text-4xl text-stone-900 sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <p className="text-xl font-medium text-stone-900">
              ${product.price.toFixed(2)}
            </p>

            {product.oldPrice && (
              <p className="text-base text-stone-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </p>
            )}
          </div>

          <p className="mt-7 max-w-xl text-sm leading-7 text-stone-600">
            {product.description}
          </p>

          <div className="mt-8 border-y border-stone-200 py-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
              Materials
            </p>
            <p className="mt-2 text-sm text-stone-800">{product.materials}</p>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-8 w-full bg-[#a75e3b] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8f4e30] sm:w-auto rounded-2xl"
          >
            {added ? "Added to cart ✓" : "Add to cart"}
          </button>

          <p className="mt-4 text-xs text-stone-500">
            Thoughtfully selected for a more considered home.
          </p>
        </section>
      </div>
    </main>
  );
}