import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <section className="grid gap-8 bg-[#f3f1eb] px-6 py-14 sm:px-12 md:grid-cols-2 md:items-center lg:px-[12%] lg:py-20">
      <div><p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-stone-500">A GOOD NOTE, NOW AND THEN</p><h2 className="font-serif text-4xl leading-tight">A little more lovely<br />in your inbox.</h2><p className="mt-3 text-xs text-stone-600">New arrivals, thoughtful homes, and 10% off your first order.</p></div>
      <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_auto] border-b border-stone-500"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="min-w-0 bg-transparent py-4 text-xs outline-none" /><button className="px-2 text-xs" type="submit">{subscribed ? "You're on the list ✓" : "Sign me up ↗"}</button><small className="col-span-2 py-3 text-[9px] text-stone-500">{subscribed ? "Thanks for joining Hearth." : "By subscribing, you agree to receive occasional updates."}</small></form>
    </section>
  );
}
