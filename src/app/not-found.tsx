import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="site-shell py-24">
      <p className="text-sm tracking-[0.2em] text-muted uppercase">404</p>
      <h1 className="mt-4 text-4xl sm:text-6xl">This page is not here.</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        The case or page you asked for is not part of this site. Return to the
        work index or start at the beginning.
      </p>
      <p className="mt-8 flex flex-wrap gap-6">
        <Link href="/work">Selected work</Link>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
