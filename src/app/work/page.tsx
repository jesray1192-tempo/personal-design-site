import { CaseCard } from "@/components/CaseCard";
import { PlaceholderBanner } from "@/components/PlaceholderBanner";
import { caseStudies } from "@/data/cases";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Selected case studies from Jessica Ray — including 桔子星球漫游日记, an enterprise annual-recap H5.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main-content" className="site-shell py-14 sm:py-20">
      <header className="max-w-3xl space-y-5">
        <p className="text-sm tracking-[0.2em] text-muted uppercase">Work</p>
        <h1 className="text-4xl leading-tight sm:text-6xl">Selected cases</h1>
        <p className="text-lg leading-relaxed text-muted sm:text-xl">
          Each case opens into a fixed template: 问题 / 过程 / 结果. Filters
          are deferred — this index stays a single list.
        </p>
        <PlaceholderBanner>
          桔子星球漫游日记 uses the case cover on this index and the case page.
          Journey stills live on the case page. Do not add filters yet.
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
