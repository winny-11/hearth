export default function Hero() {
  return (
    <section id="home" className="grid bg-[#f2f0ea] md:grid-cols-[0.8fr_1.2fr]">
      <div className="flex flex-col items-start justify-center px-8 py-16 sm:px-12 md:px-16 lg:px-24">
        <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-stone-500">TIMELESS DESIGN · NATURAL MATERIALS</p>
        <h1 className="font-serif text-6xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">Make Room<br />For <em className="font-normal text-[#a56242]">Beautiful</em><br />Living.</h1>
        <p className="mt-6 max-w-sm text-sm leading-7 text-stone-500">Thoughtful furniture for the way you live today. Crafted to be loved for years.</p>
        <a href="#products" className="mt-8 inline-flex items-center gap-8 bg-[#282821] px-6 py-4 text-xs text-white transition hover:bg-[#a75e3b]">Shop the collection <span aria-hidden="true">↗</span></a>
        <p className="mt-12 text-[10px] tracking-widest text-stone-500"><span className="text-stone-900">01</span><span className="mx-3 inline-block w-12 border-t border-stone-400 align-middle" />03</p>
      </div>
      <div className="relative min-h-90 overflow-hidden md:min-h-155">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85" alt="Warm living room with natural wood furniture" className="absolute inset-0 size-full object-cover" />
        <div className="absolute bottom-6 right-6 max-w-40 bg-white/90 p-5 sm:bottom-10 sm:right-10"><p className="text-[9px] text-stone-500">HEARTH COLLECTION</p><h2 className="mt-2 font-serif text-xl leading-tight">The art of<br />slow living</h2><a href="#collections" className="mt-4 block border-t border-stone-200 pt-3 text-[10px]">Explore the edit ↗</a></div>
        <div className="absolute right-8 top-8 grid size-20 rotate-6 place-items-center rounded-full bg-[#f3eee2] text-center text-[9px] tracking-widest text-stone-700">MADE<br />TO LAST ✳</div>
      </div>
    </section>
  );
}
