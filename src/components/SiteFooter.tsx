import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule">
      <div className="site-shell flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-serif text-2xl tracking-tight">{site.name}</p>
          <p className="text-sm leading-relaxed text-muted">
            Personal design site. Separate from any investment tools work.
            Content marked [PLACEHOLDER] is ready to be replaced.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <Link href="/contact" className="text-ink">
            Start a conversation
          </Link>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
