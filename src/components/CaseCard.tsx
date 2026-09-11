import Link from "next/link";
import type { CaseStudy } from "@/data/cases";

type CaseCardProps = {
  study: CaseStudy;
  featured?: boolean;
};

export function CaseCard({ study, featured = false }: CaseCardProps) {
  return (
    <article className="border-t border-rule py-8 first:border-t-0 first:pt-0">
      <Link
        href={`/work/${study.slug}`}
        className="group grid gap-5 no-underline sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-baseline"
      >
        <p className="font-serif text-sm tracking-[0.18em] text-muted">
          {study.number}
        </p>
        <div className="space-y-3">
          <p className="text-sm text-muted">
            {study.year} · {study.role}
          </p>
          <h3
            lang={study.locale}
            className={`font-serif tracking-tight text-ink group-hover:underline ${
              featured
                ? "text-3xl leading-tight sm:text-4xl"
                : "text-2xl leading-tight sm:text-3xl"
            }`}
          >
            {study.title}
          </h3>
          <p
            lang={study.locale}
            className="max-w-2xl text-base leading-relaxed text-muted"
          >
            {study.dek}
          </p>
          <ul className="flex flex-wrap gap-2 pt-1" aria-label="Topics">
            {study.tags.map((tag) => (
              <li
                key={tag}
                className="border border-rule px-2 py-0.5 text-xs tracking-wide text-muted uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm tracking-wide text-ink uppercase">
          Read case
        </p>
      </Link>
    </article>
  );
}
