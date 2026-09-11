type PlaceholderBannerProps = {
  children: React.ReactNode;
};

export function PlaceholderBanner({ children }: PlaceholderBannerProps) {
  return (
    <p
      role="note"
      className="border border-dashed border-accent/45 bg-accent-soft/60 px-3 py-2 text-xs font-medium tracking-[0.14em] text-accent uppercase"
    >
      [PLACEHOLDER] {children}
    </p>
  );
}
