import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#282821] px-6 py-12 text-stone-100 sm:px-10 lg:px-[8%]">
      <div className="grid gap-8 border-b border-white/15 pb-9 sm:grid-cols-3"><Link to="/" className="flex items-center gap-2 text-2xl font-bold"> <span className="grid size-8 place-items-center rounded-full bg-white font-serif text-[#282821]">h</span> hearth<span className="text-[#d8ad91]">.</span></Link><p className="font-serif text-lg leading-snug text-stone-300">Objects for living.<br />Made to mean something.</p><div className="sm:justify-self-end"><p className="mb-2 text-[9px] tracking-widest text-stone-400">NEED A HAND?</p><a href="mailto:hello@hearth.example" className="text-sm">hello@hearth.example ↗</a></div></div>
      <div className="grid grid-cols-2 gap-8 py-8 sm:grid-cols-4"><div className="flex flex-col gap-3 text-xs"><b>Explore</b><Link to="/shop">Shop all</Link><Link to="/shop">Living</Link><Link to="/shop">Dining</Link></div><div className="flex flex-col gap-3 text-xs"><b>Hearth</b><Link to="/about">Our story</Link><Link to="/journal">Journal</Link><Link to="/contact">Contact</Link></div><div className="flex flex-col gap-3 text-xs"><b>Help</b><a href="/contact">Shipping & returns</a><a href="/contact">FAQs</a></div><div className="flex flex-col gap-3 text-xs"><b>Follow along</b><a href="#footer">Instagram ↗</a><a href="#footer">Pinterest ↗</a></div></div>
      <div className="flex flex-wrap justify-between gap-3 border-t border-white/15 pt-4 text-[9px] text-stone-400"><span>© 2026 Hearth Studio</span><span>Thoughtfully made, for living well.</span><span>Privacy · Terms</span></div>
    </footer>
  );
}
