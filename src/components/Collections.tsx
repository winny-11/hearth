import { collections } from "../data/products";

export default function Collections() {
    return (
        <section id="collections" className="px-5 py-16 sm:px-10 lg:px-[8%] lg:py-24">
            <div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-stone-500">FIND YOUR FEEL</p><h2 className="font-serif text-3xl sm:text-4xl">Rooms with a point of view.</h2></div><a href="#products" className="border-b border-stone-400 pb-1 text-xs">Shop all ↗</a></div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {collections.map((collection) => <a key={collection.id} href="#products" className="group relative flex h-72 flex-col items-start overflow-hidden rounded-[20px] p-5 text-white sm:h-80"><img src={collection.image} alt={`${collection.subtitle} furniture collection`} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" /><span className="relative text-[10px] tracking-[0.15em]">{collection.number} / {collection.subtitle.toUpperCase()}</span><h3 className="relative mt-auto mb-3 max-w-48 font-serif text-3xl">{collection.name}</h3><span className="relative w-full border-t border-white/60 pt-3 text-xs">Shop {collection.subtitle.toLowerCase()} ↗</span></a>)}
            </div>
        </section>
    );
}
