type PlaceholderBannerProps = {
  children: React.ReactNode;
};

export function PlaceholderBanner({ children }: PlaceholderBannerProps) {
  return (
    <p
      role="note"
      className="border border-dashed border-rule bg-paper-deep px-3 py-2 text-xs font-medium tracking-[0.14em] text-muted uppercase"
    >
      [PLACEHOLDER] {children}
    </p>
  );
}
