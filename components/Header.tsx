"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const links = [
    { href: "/", label: translations.home },
    { href: "/cv", label: translations.cv },
    { href: "/blog", label: translations.blog },
    { href: "/contact", label: translations.contact },
    { href: "/schedule", label: translations.schedule },
  ];

  return (
    <header className="border-b">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          RA
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-600 transition-colors ${
                pathname === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </nav>
    </header>
  );
}
