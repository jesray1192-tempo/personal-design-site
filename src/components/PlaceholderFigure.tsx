type PlaceholderFigureProps = {
  caption?: string;
  ratio?: "wide" | "square";
};

export function PlaceholderFigure({
  caption = "Replace with a real image, film still, or interface capture.",
  ratio = "wide",
}: PlaceholderFigureProps) {
  return (
    <figure>
      <div
        className={`placeholder-field flex items-end p-5 sm:p-6 ${
          ratio === "square" ? "aspect-square" : "aspect-[16/9]"
        }`}
        aria-label="Placeholder image"
      >
        <p className="max-w-sm font-serif text-2xl leading-tight text-ink/80 italic sm:text-3xl">
          [PLACEHOLDER IMAGE]
        </p>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        [PLACEHOLDER] {caption}
      </figcaption>
    </figure>
  );
}
