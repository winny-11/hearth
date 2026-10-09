const benefits = [
  { icon: "✳", title: "Considered materials", detail: "Natural, honest, enduring" },
  { icon: "◇", title: "Made with intention", detail: "Designed for everyday life" },
  { icon: "↗", title: "Delivered with care", detail: "Free shipping over $150" },
  { icon: "♡", title: "Here to help", detail: "Real people, real support" },
];

export default function Benefits() {
  return (
    <section aria-label="Our promises" className="grid grid-cols-2 gap-5 border-b border-stone-200 px-6 py-7 md:grid-cols-4 md:px-[7%]">
      {benefits.map((benefit) => <div key={benefit.title} className="flex items-center justify-center gap-3 md:justify-start"><span className="text-xl text-[#9b684d]">{benefit.icon}</span><p className="m-0 flex flex-col gap-1"><strong className="text-[10px] font-semibold">{benefit.title}</strong><span className="text-[9px] text-stone-500">{benefit.detail}</span></p></div>)}
    </section>
  );
}
