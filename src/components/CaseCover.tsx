import Image from "next/image";

type CaseCoverProps = {
  src: string;
  alt: string;
  /** Intrinsic pixel size of the source file. */
  width: number;
  height: number;
  /** Preload the hero (LCP) image. Next.js 16 prefers this over `priority`. */
  preload?: boolean;
};

export function CaseCover({
  src,
  alt,
  width,
  height,
  preload = false,
}: CaseCoverProps) {
  return (
    <figure>
      <div className="flex justify-center border border-rule bg-paper-deep px-6 py-8 sm:px-12 sm:py-12">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full max-w-[17.5rem] sm:max-w-[20rem]"
          sizes="(min-width: 640px) 20rem, min(100vw - 5rem, 17.5rem)"
          preload={preload}
        />
      </div>
    </figure>
  );
}
