import { Link } from "react-router-dom";
import { journalEntries } from "../data/products";


export default function Journal() {
  return (
    <section id="journal" className="px-5 py-16 sm:px-10 lg:px-[8%] lg:py-20">
      <div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-stone-500">NOTES FROM HOME</p><h2 className="font-serif text-3xl sm:text-4xl">Read, rest, repeat.</h2></div><Link to="/journal" className="border-b border-stone-400 pb-1 text-xs">Visit the journal ↗</Link></div>
      <div className="grid gap-7 md:grid-cols-3">{journalEntries.map((entry) => <article key={entry.id}><Link to={`/journal/${entry.id}`}><img src={entry.image} alt="" className="mb-4 aspect-3/2 w-full rounded-[20px] object-cover" /></Link><p className="text-[9px] tracking-[0.12em] text-stone-500">{entry.category} · {entry.readTime}</p><h3 className="my-2 font-serif text-xl">{entry.title}</h3><Link to="/journal" className="border-b border-stone-400 pb-1 text-xs">Read more stories ↗</Link></article>)}</div>
    </section>
  );
}
