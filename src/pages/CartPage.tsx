import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export default function CartPage() {
  const { items, subtotal, removeItem, setQuantity } = useCart();

  if (items.length === 0) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-[#faf9f6] px-6 py-16 text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a75e3b]">
            Your Hearth cart
          </p>
          <h1 className="mt-4 font-serif text-4xl text-stone-900">
            Your cart is empty
          </h1>
          <p className="mt-3 text-sm text-stone-600">
            Find something thoughtful for your home.
          </p>
          <Link
            to="/shop"
            className="mt-7 inline-block bg-[#a75e3b] px-6 py-3 text-sm text-white transition hover:bg-[#8f4e30] rounded-full"
          >
            Browse the shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[60vh] bg-[#faf9f6] px-5 py-10 sm:px-8 lg:px-[6%] lg:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a75e3b]">
          Your Hearth cart
        </p>
        <h1 className="mt-3 font-serif text-4xl text-stone-900">Shopping cart</h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
          <section aria-label="Cart items" className="space-y-5">
            {items.map(({ product, quantity }) => (
              <article
                key={product.id}
                className="flex gap-4 border-b border-stone-200 pb-5 sm:gap-6"
              >
                <Link to={`/product/${product.id}`} className="shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-28 rounded-[20px] bg-white object-cover sm:size-36"
                  />
                </Link>

                <div className="flex min-w-0 flex-1 flex-col justify-between sm:flex-row sm:items-start">
                  <div>
                    <Link
                      to={`/product/${product.id}`}
                      className="font-serif text-lg text-stone-900 hover:text-[#a75e3b]"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-1 text-xs text-stone-500">
                      {product.materials}
                    </p>
                    <p className="mt-3 text-sm text-stone-700">
                      {formatPrice(product.price)} each
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-5 sm:mt-0 sm:flex-col sm:items-end">
                    <div className="flex items-center border border-stone-300">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${product.name}`}
                        onClick={() => setQuantity(product.id, quantity - 1)}
                        className="px-3 py-2 text-stone-700 hover:bg-white"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${product.name}`}
                        onClick={() => setQuantity(product.id, quantity + 1)}
                        className="px-3 py-2 text-stone-700 hover:bg-white"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-medium text-stone-900">
                      {formatPrice(product.price * quantity)}
                    </p>

                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="text-xs text-stone-500 underline hover:text-[#a75e3b]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="h-fit border border-stone-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-stone-900">
              Order summary
            </h2>

            <div className="mt-6 flex justify-between border-b border-stone-200 pb-4 text-sm text-stone-600">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <p className="mt-4 text-xs leading-5 text-stone-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <button
              type="button"
              className="mt-6 w-full bg-[#a75e3b] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#8f4e30] rounded-full"
            >
              Continue to checkout
            </button>

            <Link
              to="/shop"
              className="mt-4 block text-center text-sm text-stone-600 underline hover:text-[#a75e3b]"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}