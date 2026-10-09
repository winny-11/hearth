import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <article>
      <div className="group relative aspect-4/5 overflow-hidden rounded-[20px] bg-stone-100">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}><img src={product.image} alt={product.name} className="size-full rounded-[20px] object-cover transition duration-500 group-hover:scale-105" /></Link>
        {product.oldPrice && <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[9px]">SALE</span>}
        <button type="button" onClick={() => addItem(product)} className="absolute inset-x-2 bottom-2 bg-white/95 px-3 py-3 text-left text-xs transition hover:bg-[#282821] hover:text-white">Add to cart <span className="float-right">＋</span></button>
      </div>
      <div className="flex justify-between gap-2 pt-3"><div><Link to={`/product/${product.id}`} className="text-xs font-medium hover:underline">{product.name}</Link><p className="mt-1 text-[10px] text-stone-500">{product.materials}</p></div><p className="whitespace-nowrap text-xs">${product.price}.00</p></div>
      {product.oldPrice && <p className="mt-1 text-[10px] text-stone-400 line-through">${product.oldPrice}.00</p>}
    </article>
  );
}







