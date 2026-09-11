import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseLinks } from "@/components/CaseLinks";
import { CaseNarrative } from "@/components/CaseNarrative";
import { PlaceholderBanner } from "@/components/PlaceholderBanner";
import { PlaceholderFigure } from "@/components/PlaceholderFigure";
import {
  caseStudies,
  getAdjacentCases,
  getCaseBySlug,
} from "@/data/cases";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseBySlug(slug);

  if (!study) {
    return pageMetadata({
      title: "Case study",
      description: "Case study not found.",
      path: `/work/${slug}`,
    });
  }

  return pageMetadata({
    title: study.title,
    description: study.dek,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseBySlug(slug);

  if (!study) {
    notFound();
  }

  const { previous, next } = getAdjacentCases(study.slug);

  return (
    <main id="main-content" className="site-shell py-14 sm:py-20">
      <p className="text-sm">
        <Link href="/work">← All work</Link>
      </p>

      <header className="mt-8 max-w-4xl space-y-6">
        <p className="font-serif text-sm tracking-[0.2em] text-muted">
          {study.number} / {study.year}
        </p>
        <h1 className="text-4xl leading-[1.08] sm:text-6xl">{study.title}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
          {study.dek}
        </p>
        <PlaceholderBanner>
          Case template is fixed to 问题 / 过程 / 结果. Replace copy and figures
          with the real project. Do not use this page for investment-product
          work.
        </PlaceholderBanner>
      </header>

      <div className="mt-10">
        <PlaceholderFigure caption="Hero image, product still, or research artifact for this case." />
      </div>

      <section className="mt-14 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.7fr)]">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl">Overview</h2>
          <p className="text-lg leading-relaxed text-muted">{study.overview}</p>
        </div>
        <div className="space-y-8 border-t border-rule pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <dl className="space-y-5">
            <div>
              <dt className="text-sm tracking-[0.14em] text-muted uppercase">
                Role
              </dt>
              <dd className="mt-1 font-serif text-xl">{study.role}</dd>
            </div>
            <div>
              <dt className="text-sm tracking-[0.14em] text-muted uppercase">
                Client
              </dt>
              <dd className="mt-1 font-serif text-xl">{study.client}</dd>
            </div>
            <div>
              <dt className="text-sm tracking-[0.14em] text-muted uppercase">
                Duration
              </dt>
              <dd className="mt-1 font-serif text-xl">{study.duration}</dd>
            </div>
            <div>
              <dt className="text-sm tracking-[0.14em] text-muted uppercase">
                Focus
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-rule px-2 py-0.5 text-xs tracking-wide uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <CaseLinks figma={study.links?.figma} live={study.links?.live} />
        </div>
      </section>

      <div className="mt-16">
        <CaseNarrative study={study} />
      </div>

      <div className="mt-16">
        <PlaceholderFigure
          caption="Secondary artifact — journey, UI frame, or quote from research."
          ratio="wide"
        />
      </div>

      <nav
        aria-label="More case studies"
        className="mt-20 grid gap-8 border-t border-rule pt-10 sm:grid-cols-2"
      >
        {previous ? (
          <Link href={`/work/${previous.slug}`} className="group no-underline">
            <p className="text-sm tracking-wide text-muted uppercase">
              Previous
            </p>
            <p className="mt-2 font-serif text-2xl group-hover:text-ink">
              {previous.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group no-underline sm:text-right"
          >
            <p className="text-sm tracking-wide text-muted uppercase">Next</p>
            <p className="mt-2 font-serif text-2xl group-hover:text-ink">
              {next.title}
            </p>
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
