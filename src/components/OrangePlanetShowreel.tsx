import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import type { CaseJourneyFrame, CaseStudy } from "@/data/cases";

/**
 * Zcool showreel for 桔子星球漫游日记.
 * Cover GIF is the UFO (`page-hero.gif`). The flower GIF stays on the homepage.
 */

const notoSansSc = localFont({
  src: [
    {
      path: "../fonts/noto-sans-sc-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/noto-sans-sc-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/noto-sans-sc-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto-sc",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const STILL_WIDTH = 750;
const STILL_HEIGHT = 1624;

const CHAPTERS = [
  {
    id: "problem",
    eyebrow: "PROBLEM  /  CONTEXT",
    title: "问题",
    caption:
      "年度总结容易变成指标堆砌：难读、难分享，也难让人感到被看见。",
    barLabel: "Problem / Context",
    barDetail: "Why this H5",
    background: "#FF6A00",
  },
  {
    id: "process",
    eyebrow: "PROCESS  /  APPROACH",
    title: "过程",
    caption: "分镜叙事 + 毡感 3D IP；按产品分页讲故事；数据位可配置。",
    barLabel: "Process / Approach",
    barDetail: "Storyboard + IP",
    background: "#FFD400",
  },
  {
    id: "journey",
    eyebrow: "JOURNEY  /  STILLS",
    title: "旅程",
    caption: "完整上滑旅程，风格统一可落地。以下为 11 帧分镜静帧（0 gap）。",
    barLabel: "Journey / Stills",
    barDetail: "11 screens",
    background: "#2B6CFF",
  },
] as const;

type OrangePlanetShowreelProps = {
  study: CaseStudy;
  previous: CaseStudy | null;
  next: CaseStudy | null;
};

function InfoBar({
  label,
  detail,
  year,
}: {
  label: string;
  detail: string;
  year: string;
}) {
  return (
    <div className="grid h-14 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center bg-[#111] px-4 text-white min-[1000px]:px-7">
      <div className="text-[10px] leading-[12px] text-[#ccc]">
        <p>{label}</p>
        <p>{detail}</p>
      </div>
      <p className="px-2 text-center text-[clamp(8px,2.6vw,11px)] font-semibold tracking-[1px] whitespace-nowrap">
        | ORANGE PLANET · UX |
      </p>
      <p className="text-right text-[12px]">{year}</p>
    </div>
  );
}

function ChapterBoard({
  id,
  eyebrow,
  title,
  caption,
  year,
  background,
}: {
  id: string;
  eyebrow: string;
  title: string;
  caption: string;
  year: string;
  background: string;
}) {
  return (
    <div
      className="flex flex-col gap-8 px-6 py-10 min-[1000px]:h-[420px] min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:justify-between min-[1000px]:px-12 min-[1000px]:pt-12"
      style={{ backgroundColor: background }}
    >
      <div>
        <p className="text-[14px] leading-none font-semibold tracking-[3px] text-[#111]">
          {eyebrow}
        </p>
        <h2
          id={`${id}-heading`}
          className="mt-7 text-[44px] leading-none font-bold text-[#111] min-[1000px]:text-[64px]"
        >
          {title}
        </h2>
        <p className="mt-9 text-[22px] leading-none font-bold text-[#111] min-[1000px]:text-[28px]">
          @ EXPERIENCE DESIGN
        </p>
        <p className="mt-[22px] inline-flex items-center rounded-full border-[1.5px] border-[#111] px-4 py-2 text-[13px] leading-none font-semibold text-[#111]">
          {year}
        </p>
      </div>
      <p className="max-w-[280px] text-[15px] leading-6 text-[#222] min-[1000px]:mt-[52px] min-[1000px]:w-[280px] min-[1000px]:shrink-0 min-[1000px]:text-right">
        {caption}
      </p>
    </div>
  );
}

function JourneyStills({ frames }: { frames: CaseJourneyFrame[] }) {
  if (frames.length === 0) {
    return null;
  }

  return (
    <ol className="m-0 flex list-none flex-col gap-0 p-0">
      {frames.map((frame) => (
        <li key={frame.src} className="m-0 bg-[#0e0e12] p-0">
          <Image
            src={frame.src}
            alt={frame.caption}
            width={frame.width ?? STILL_WIDTH}
            height={frame.height ?? STILL_HEIGHT}
            sizes="(min-width: 1000px) 1000px, 100vw"
            className="m-0 block aspect-[750/1624] h-auto w-full object-cover"
          />
        </li>
      ))}
    </ol>
  );
}

function CoverBoard({ year }: { year: string }) {
  return (
    <section
      aria-label="封面"
      className="relative bg-[#F6F4F0] min-[1000px]:aspect-[1000/1080]"
    >
      <div className="relative flex flex-col gap-6 px-6 py-10 min-[1000px]:absolute min-[1000px]:inset-0 min-[1000px]:block min-[1000px]:p-0">
        <p className="text-[14px] font-semibold tracking-[2px] text-[#FF6A00] min-[1000px]:absolute min-[1000px]:top-[5.19%] min-[1000px]:left-[4.8%]">
          ORANGE PLANET DIARY
        </p>
        <div className="text-[44px] leading-[1.05] font-bold text-[#1a1a1a] min-[1000px]:absolute min-[1000px]:top-[9.26%] min-[1000px]:left-[4.8%] min-[1000px]:text-[88px] min-[1000px]:leading-[100px]">
          <p>桔子星球</p>
          <p>漫游日记</p>
        </div>
        <p className="max-w-[420px] text-[16px] leading-7 text-[#666] min-[1000px]:absolute min-[1000px]:top-[31.48%] min-[1000px]:left-[4.8%] min-[1000px]:w-[42%] min-[1000px]:max-w-none min-[1000px]:text-[18px] min-[1000px]:leading-[30px]">
          一场可上滑的「小桔」星际漫游
          <br />
          年度效能数据 × 毡感 3D IP
        </p>
        <p className="inline-flex w-fit items-center rounded-full border-[1.5px] border-[#1a1a1a] px-4 py-2 text-[14px] leading-none font-semibold text-[#1a1a1a] min-[1000px]:absolute min-[1000px]:top-[39.81%] min-[1000px]:left-[4.8%]">
          {year}
        </p>
        <div className="relative mx-auto aspect-[322/240] w-full max-w-[40rem] overflow-hidden rounded-2xl min-[1000px]:absolute min-[1000px]:top-[56.67%] min-[1000px]:left-[15%] min-[1000px]:mx-0 min-[1000px]:aspect-auto min-[1000px]:h-[38.89%] min-[1000px]:w-[70%] min-[1000px]:max-w-none">
          <Image
            src="/cases/orange-planet-diary/page-hero.gif"
            alt="毡感小桔乘坐飞碟"
            fill
            unoptimized
            preload
            sizes="(min-width: 1000px) 700px, 90vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export function OrangePlanetShowreel({
  study,
  previous,
  next,
}: OrangePlanetShowreelProps) {
  const year = study.year;

  return (
    <main
      id="main-content"
      lang={study.locale ?? "zh-Hans"}
      className={`${notoSansSc.variable} showreel`}
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-white"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-[1000px] pb-20">
        <header className="flex flex-col items-start gap-2.5 px-6 py-6 min-[1000px]:px-0">
          <h1 className="text-[30px] leading-normal font-bold text-[#111] min-[1000px]:text-[36px]">
            {study.title}
          </h1>
          <p className="text-[16px] leading-[26px] text-[#555]">{study.dek}</p>
          <p className="text-[13px] font-medium text-[#888]">
            {study.role} · {study.client} · {year}
          </p>
        </header>

        <div className="flex flex-col gap-0">
          <CoverBoard year={year} />
          {CHAPTERS.map((chapter) => (
            <section
              key={chapter.id}
              id={chapter.id}
              aria-labelledby={`${chapter.id}-heading`}
            >
              <InfoBar
                label={chapter.barLabel}
                detail={chapter.barDetail}
                year={year}
              />
              <ChapterBoard
                id={chapter.id}
                eyebrow={chapter.eyebrow}
                title={chapter.title}
                caption={chapter.caption}
                year={year}
                background={chapter.background}
              />
              {chapter.id === "journey" ? (
                <JourneyStills frames={study.journey ?? []} />
              ) : null}
            </section>
          ))}
          <section
            id="result"
            aria-label="结果"
            className="flex h-[280px] flex-col items-center justify-center gap-3 bg-[#111] px-6 text-center"
          >
            <p className="text-[12px] font-semibold tracking-[2px] text-[#FF6A00]">
              RESULT
            </p>
            <p className="text-[22px] leading-normal font-bold text-white min-[1000px]:text-[28px]">
              完整上滑旅程，风格统一可落地。
            </p>
            <p className="text-[14px] text-[#aaa]">
              {study.title} · {year} · {study.role}
            </p>
          </section>
        </div>

        {previous || next ? (
          <nav
            aria-label="More case studies"
            className="mt-12 grid gap-8 px-6 min-[1000px]:px-0 sm:grid-cols-2"
          >
            {previous ? (
              <Link
                href={`/work/${previous.slug}`}
                className="group no-underline"
              >
                <p className="text-sm tracking-wide text-[#888] uppercase">
                  Previous
                </p>
                <p
                  lang={previous.locale}
                  className="mt-2 text-2xl font-bold group-hover:underline"
                >
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
                <p className="text-sm tracking-wide text-[#888] uppercase">
                  Next
                </p>
                <p
                  lang={next.locale}
                  className="mt-2 text-2xl font-bold group-hover:underline"
                >
                  {next.title}
                </p>
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
    </main>
  );
}
