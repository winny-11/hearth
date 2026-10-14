import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#faf9f6] px-6 py-20">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a75e3b]">
          Hearth
        </p>

        <p className="mt-6 font-serif text-8xl leading-none text-[#a75e3b] sm:text-9xl">
          404
        </p>

        <h1 className="mt-6 font-serif text-3xl text-stone-900 sm:text-4xl">
          Looks like this page has moved.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-stone-600">
          The page you’re looking for may have been moved or no longer exists.
          Let’s get you back to the good things.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="bg-[#a75e3b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8f4e30]"
          >
            Back to home
          </Link>

          
        </div>
      </section>
    </main>
  );
}