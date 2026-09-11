import { CaseCard } from "@/components/CaseCard";
import { PlaceholderBanner } from "@/components/PlaceholderBanner";
import { caseStudies } from "@/data/cases";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Selected case studies from Jessica Ray — experience design for AI-native products, onboarding, and human review.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main-content" className="site-shell py-14 sm:py-20">
      <header className="max-w-3xl space-y-5">
        <p className="text-sm tracking-[0.2em] text-accent uppercase">Work</p>
        <h1 className="text-4xl leading-tight sm:text-6xl">Selected cases</h1>
        <p className="text-lg leading-relaxed text-muted sm:text-xl">
          Editorial notes on products where people have to think with a model —
          not around it. Stories below are scaffolded examples, written so the
          template reads like a real portfolio until the real work lands.
        </p>
        <PlaceholderBanner>
          Replace this index with Jessica&apos;s shipped case studies. Keep each
          entry short enough to scan, then open into the detail template.
        </PlaceholderBanner>
      </header>

      <section className="mt-14 border-t border-rule pt-4" aria-label="Case studies">
        {caseStudies.map((study) => (
          <CaseCard key={study.slug} study={study} />
        ))}
      </section>
    </main>
  );
}
