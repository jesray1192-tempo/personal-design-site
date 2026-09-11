import Image from "next/image";
import type { CaseJourneyFrame } from "@/data/cases";

const DEFAULT_STILL_WIDTH = 750;
const DEFAULT_STILL_HEIGHT = 1624;

type CaseJourneyGalleryProps = {
  frames: CaseJourneyFrame[];
  locale?: string;
};

export function CaseJourneyGallery({
  frames,
  locale,
}: CaseJourneyGalleryProps) {
  if (frames.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="journey-heading">
      <header className="max-w-3xl space-y-3">
        <p className="font-serif text-sm tracking-[0.18em] text-muted">
          Frames
        </p>
        <h2 id="journey-heading" className="text-2xl sm:text-3xl">
          <span lang="zh-Hans">旅程</span>
          <span className="text-muted"> / Journey</span>
        </h2>
        <p className="text-base leading-relaxed text-muted">
          封面授权 through product data pages to the 幸运签分享卡 — eleven
          editorial stills in swipe order.
        </p>
      </header>

      <ol className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {frames.map((frame, index) => (
          <li key={frame.src}>
            <figure>
              <div className="flex justify-center border border-rule bg-paper-deep px-3 py-4 sm:px-4 sm:py-5">
                <Image
                  src={frame.src}
                  alt={frame.caption}
                  width={frame.width ?? DEFAULT_STILL_WIDTH}
                  height={frame.height ?? DEFAULT_STILL_HEIGHT}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 16rem, (min-width: 640px) 30vw, 45vw"
                />
              </div>
              <figcaption
                lang={locale}
                className="mt-3 text-sm leading-snug text-muted"
              >
                <span className="tabular-nums text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {" · "}
                {frame.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </section>
  );
}
