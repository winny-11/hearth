import { useState } from "react";
import { Link } from "react-router-dom";
import HearthLogo from "./HearthLogo";
import { ChevronDown } from "lucide-react";

type HeaderProps = { cartCount: number };

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
]; 

export default function Header({ cartCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-9 items-center justify-center bg-[#282821] px-4 text-center text-[10px] tracking-wide text-white">
        <span className="mr-2 text-[#d8ad91]">✦</span> Free shipping on orders over $150
        <span className="absolute right-[6%] hidden text-stone-300 lg:block">Need help? <a href="#footer" className="underline">Contact us</a>　·　English　|　USD</span>
      </div>
      <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-stone-100 bg-white px-5 md:px-[6%]">
        <Link to="/" aria-label="Hearth home" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <HearthLogo className="h-11 w-11" />
          <span>Hearth<span className="text-[#a75e3b]">.</span></span>
        </Link>
        <button type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="text-xl md:hidden">☰</button>
        <nav className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 bg-white px-6 py-5 shadow-md md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none`}>

{links.map((link) =>
  link.label === "Shop" ? (
    <div key={link.label} className="group relative">
      <Link
        to="/shop"
        onClick={() => setMenuOpen(false)}
        className="flex items-center gap-1 py-2 text-sm text-stone-600 transition hover:text-stone-950"
      >
        Shop <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </Link>

      <div className="invisible absolute left-0 top-full z-50 min-w-48 translate-y-2 border border-stone-100 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {["All Products", "Popular", "On sale", "Best Rated"].map((category) => (
          <Link
            key={category}
            to={
              category === "All Products"
                ? "/shop"
                : `/shop?category=${encodeURIComponent(category)}`
            }
            onClick={() => setMenuOpen(false)}
            className="block px-5 py-3 text-sm text-stone-700 hover:bg-stone-50 hover:text-[#a75e3b]"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link
      key={link.label}
      to={link.href}
      onClick={() => setMenuOpen(false)}
      className="text-sm text-stone-600 transition hover:text-stone-950"
    >
      {link.label}
    </Link>
  )
)}
        </nav>


        <Link to="/cart" aria-label={`Cart with ${cartCount} items`} className="hidden items-center gap-2 text-sm sm:flex">Cart <span className="grid size-5 place-items-center rounded-full bg-[#a75e3b] text-[10px] text-white">{cartCount}</span></Link>
      </header>
    </>
  );
}
