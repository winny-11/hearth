import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

const CONTACT_EMAIL = "your-email@example.com";
const CONTACT_PHONE = "+2348000000000";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const subject = String(form.get("subject") ?? "Hearth enquiry");
    const message = String(form.get("message") ?? "");

    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;

    window.location.href =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col justify-between gap-4 bg-stone-100 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-stone-950 sm:text-5xl">
          Contact
        </h1>

        <nav aria-label="Breadcrumb" className="text-sm font-medium">
          <Link to="/" className="text-stone-500 hover:text-stone-900">
            Home
          </Link>
          <span className="mx-2 text-[#83bd2d]">&gt;</span>
          <span className="text-[#83bd2d]">Contact</span>
        </nav>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[2fr_1fr] lg:gap-16 lg:px-12 lg:py-24">
        <div>
          <p className="mb-5 text-sm text-stone-600">
            <span className="mr-3 text-lg text-[#83bd2d]">~</span>
            Contact us
          </p>

          <h2 className="mb-10 text-3xl font-semibold uppercase text-stone-950 sm:text-4xl">
            Make a custom request
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                aria-label="Full name"
                autoComplete="name"
                required
                className="h-14 rounded-md border border-stone-300 px-5 text-sm outline-none focus:border-[#83bd2d]"
              />

              <input
                name="email"
                type="email"
                placeholder="E-mail Address"
                aria-label="Email address"
                autoComplete="email"
                required
                className="h-14 rounded-md border border-stone-300 px-5 text-sm outline-none focus:border-[#83bd2d]"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone number"
                autoComplete="tel"
                className="h-14 rounded-md border border-stone-300 px-5 text-sm outline-none focus:border-[#83bd2d]"
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                aria-label="Subject"
                required
                className="h-14 rounded-md border border-stone-300 px-5 text-sm outline-none focus:border-[#83bd2d]"
              />
            </div>

            <textarea
              name="message"
              placeholder="Enter message"
              aria-label="Message"
              rows={8}
              required
              className="w-full resize-y rounded-md border border-stone-300 px-5 py-4 text-sm outline-none focus:border-[#83bd2d]"
            />

            <button
              type="submit"
              className="rounded-md bg-[#83bd2d] px-10 py-5 text-sm font-semibold text-white transition hover:bg-stone-900"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-sm text-stone-600">
                Your email app should open with your message ready to send.
              </p>
            )}
          </form>
        </div>

        <aside className="space-y-5">
          <div className="rounded-md bg-stone-50 px-8 py-10 sm:px-10">
            <h2 className="mb-9 text-center text-2xl font-semibold uppercase text-stone-950">
              Get in touch
            </h2>

            <div className="space-y-7 text-sm leading-6 text-stone-500">
              <p>
                <span className="mr-4 text-[#83bd2d]">⌖</span>
                Hearth online store
                <br />
                Add your store address here
              </p>

              <p>
                <span className="mr-4 text-[#83bd2d]">☎</span>
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-stone-900">
                  {CONTACT_PHONE}
                </a>
              </p>

              <p>
                <span className="mr-4 text-[#83bd2d]">◷</span>
                Store hours
                <br />
                Add Hearth’s support hours
              </p>
            </div>
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex min-h-14 items-center justify-center rounded-md border border-stone-300 text-sm font-semibold text-stone-950 transition hover:bg-stone-900 hover:text-white"
          >
            Email Hearth
          </a>

          <a
            href={`tel:${CONTACT_PHONE}`}
            className="flex min-h-14 items-center justify-center rounded-md border border-stone-300 text-sm font-semibold text-stone-950 transition hover:bg-stone-900 hover:text-white"
          >
            Call Hearth
          </a>
        </aside>
      </section>
    </main>
  );
}