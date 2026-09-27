"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  locale: string;
  translations: {
    home: string;
    cv: string;
    blog: string;
    contact: string;
    schedule: string;
  };
}

export default function Header({ locale, translations }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: translations.home },
    { href: "/cv", label: translations.cv },
    { href: "/blog", label: translations.blog },
    { href: "/contact", label: translations.contact },
    { href: "/schedule", label: translations.schedule },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono-ui text-sm font-semibold tracking-tight flex items-center gap-1.5"
          onClick={() => setOpen(false)}
        >
          <span className="text-[var(--accent)]">~/</span>
          <span>robson</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono-ui text-sm transition-colors pb-1 border-b-2 ${
                pathname === link.href
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-transparent hover:text-[var(--accent)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-[var(--foreground)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-mono-ui text-sm ${
                pathname === link.href ? "text-[var(--accent)]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
        </div>
      )}
    </header>
  );
}
