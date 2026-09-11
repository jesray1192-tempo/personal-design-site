import { CASE_NARRATIVE_SECTIONS, type CaseStudy } from "@/data/cases";

type CaseNarrativeProps = {
  study: CaseStudy;
};

export function CaseNarrative({ study }: CaseNarrativeProps) {
  return (
    <div className="space-y-14">
      <nav aria-label="问题 / 过程 / 结果" className="border-y border-rule py-4">
        <ol className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {CASE_NARRATIVE_SECTIONS.map((section, index) => (
            <li key={section.key}>
              <a href={`#${section.key}`} className="text-muted">
                <span className="tabular-nums text-ink">0{index + 1}</span>
                {" · "}
                <span lang="zh-Hans">{section.zh}</span>
                <span> / {section.en}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {CASE_NARRATIVE_SECTIONS.map((section, index) => (
        <section
          key={section.key}
          id={section.key}
          aria-labelledby={`${section.key}-heading`}
          className="scroll-mt-8 grid gap-4 md:grid-cols-[14rem_minmax(0,1fr)]"
        >
          <div className="space-y-2">
            <p className="font-serif text-sm tracking-[0.18em] text-muted">
              0{index + 1}
            </p>
            <h2 id={`${section.key}-heading`} className="text-2xl sm:text-3xl">
              <span lang="zh-Hans">{section.zh}</span>
              <span className="text-muted"> / {section.en}</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {study.narrative[section.key]}
          </p>
        </section>
      ))}
    </div>
  );
}
