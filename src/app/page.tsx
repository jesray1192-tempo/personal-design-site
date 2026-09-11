import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { PlaceholderBanner } from "@/components/PlaceholderBanner";
import { caseStudies } from "@/data/cases";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Home",
  description: site.description,
  path: "/",
});

const principles = [
  {
    title: "Make the model inspectable",
    body: "People should be able to see what the system used, what it ignored, and how to disagree with it — without becoming prompt engineers.",
  },
  {
    title: "Design the pause",
    body: "The valuable moment is often the hesitation before accept. Interfaces should honor review, reversal, and the right to do the work by hand.",
  },
  {
    title: "Write like a colleague",
    body: "AI-native products fail in the copy as often as in the model. Tone, empty states, and error language are part of the product, not decoration.",
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="site-shell py-14 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm tracking-[0.2em] text-muted uppercase">
            {site.role}
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.08] sm:text-6xl">
            I design how people live with intelligent products.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {site.shortBio} This site is a portfolio of product and experience
            work — not an investment platform.
          </p>
        </div>
        <aside className="space-y-4 border-t border-rule pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <p className="text-sm tracking-[0.16em] text-muted uppercase">
            Currently
          </p>
          <p className="font-serif text-2xl leading-snug">
            [PLACEHOLDER] One sentence about what you are designing now.
          </p>
          <p className="text-sm text-muted">{site.location}</p>
        </aside>
      </section>

      <div className="mt-10">
        <PlaceholderBanner>
          Swap the headline, current-work line, and case studies for Jessica&apos;s
          real voice and shipped work.
        </PlaceholderBanner>
      </div>

      <section className="mt-20" aria-labelledby="selected-work-heading">
        <div className="flex flex-col gap-4 border-b border-rule pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm tracking-[0.16em] text-muted uppercase">
              Index
            </p>
            <h2 id="selected-work-heading" className="mt-2 text-3xl sm:text-4xl">
              Selected work
            </h2>
          </div>
          <Link href="/work" className="text-sm tracking-wide uppercase">
            All cases
          </Link>
        </div>
        <div>
          {caseStudies.map((study) => (
            <CaseCard key={study.slug} study={study} featured />
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-rule pt-16" aria-labelledby="approach-heading">
        <h2 id="approach-heading" className="text-3xl sm:text-4xl">
          How I approach AI-native work
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {principles.map((principle, index) => (
            <li key={principle.title} className="space-y-3">
              <p className="font-serif text-sm tracking-[0.18em] text-muted">
                0{index + 1}
              </p>
              <h3 className="text-2xl leading-snug">{principle.title}</h3>
              <p className="text-base leading-relaxed text-muted">
                {principle.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 border-t border-rule pt-12">
        <p className="font-serif text-3xl leading-snug sm:text-4xl">
          If you are building something people will have to trust, I would like
          to hear about it.
        </p>
        <p className="mt-6">
          <Link href="/contact" className="button-primary no-underline">
            Get in touch
          </Link>
        </p>
      </section>
    </main>
  );
}
