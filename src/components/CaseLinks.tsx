type CaseLinksProps = {
  figma?: string;
  live?: string;
};

export function CaseLinks({ figma, live }: CaseLinksProps) {
  return (
    <aside className="border-t border-rule pt-6">
      <h2 className="text-sm tracking-[0.14em] text-muted uppercase">
        Links
      </h2>
      <ul className="mt-3 space-y-2 text-muted">
        <li>
          {figma ? (
            <a href={figma} rel="noreferrer">
              Figma
            </a>
          ) : (
            <span>[PLACEHOLDER] Figma file — add when the case has one</span>
          )}
        </li>
        <li>
          {live ? (
            <a href={live} rel="noreferrer">
              Live
            </a>
          ) : (
            <span>[PLACEHOLDER] Live URL — add when the work is public</span>
          )}
        </li>
      </ul>
    </aside>
  );
}
