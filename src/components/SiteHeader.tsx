"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-rule">
      <div className="site-shell flex flex-col gap-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            className="font-serif text-2xl leading-none tracking-tight text-ink"
          >
            {site.name}
          </Link>
          <p className="text-sm text-muted">{site.role}</p>
        </div>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`tracking-wide uppercase ${
                      active
                        ? "text-ink underline decoration-ink decoration-1 underline-offset-6"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
