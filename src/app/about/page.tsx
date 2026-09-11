import Link from "next/link";
import { PlaceholderBanner } from "@/components/PlaceholderBanner";
import { PlaceholderFigure } from "@/components/PlaceholderFigure";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: `About ${site.name}, ${site.role} working on AI-native products.`,
  path: "/about",
});

const focus = [
  "AI-native product surfaces — copilots, review, and generative workspaces",
  "Research that stays close to the moment of use, not only the interview",
  "Language, empty states, and the ethics of what the system is allowed to do",
];

export default function AboutPage() {
  return (
    <main id="main-content" className="site-shell py-14 sm:py-20">
      <header className="max-w-3xl space-y-5">
        <p className="text-sm tracking-[0.2em] text-accent uppercase">About</p>
        <h1 className="text-4xl leading-tight sm:text-6xl">
          A designer for products that think with people.
        </h1>
        <p className="text-lg leading-relaxed text-muted sm:text-xl">
          {site.shortBio}
        </p>
        <PlaceholderBanner>
          Replace this biography, portrait, and timeline with Jessica&apos;s
          actual story. Keep the tone editorial, not corporate.
        </PlaceholderBanner>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <PlaceholderFigure
          caption="Portrait or a still from studio / fieldwork."
          ratio="square"
        />
        <div className="space-y-6 text-lg leading-relaxed text-muted">
          <p>
            [PLACEHOLDER] A short origin: how you came to experience design, and
            why AI-native products specifically — the ones where the interface
            has to explain a system that is not fully predictable.
          </p>
          <p>
            [PLACEHOLDER] How you work with product, research, and engineering.
            Mention the kinds of teams you like: small, senior, close to the
            people using the thing.
          </p>
          <p>
            This site is my personal design portfolio. It is not a product
            surface for investing, trading, or financial tools.
          </p>
        </div>
      </div>

      <section className="mt-16 border-t border-rule pt-12" aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="text-3xl">
          Focus
        </h2>
        <ul className="mt-6 max-w-2xl space-y-3 text-lg leading-relaxed text-muted">
          {focus.map((item) => (
            <li key={item} className="border-l-2 border-accent pl-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 grid gap-10 border-t border-rule pt-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl">Currently</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            [PLACEHOLDER] Role, studio, or independent practice. One or two
            sentences about what a typical week looks like.
          </p>
        </div>
        <div>
          <h2 className="text-3xl">Previously</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            [PLACEHOLDER] A short list of companies, labs, or studios. Names
            only, or a line each — enough to place the work, not a CV dump.
          </p>
        </div>
      </section>

      <p className="mt-16 text-lg">
        For collaborations, start on the{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </main>
  );
}
