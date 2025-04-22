"use client";

import { LOCALES } from "@/i18n/locales";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageNav() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const t = useTranslations("Languages");

  return (
    <nav className="languages">
      {LOCALES.map((locale) => (
        <Link
          className={`languages__link${locale === currentLocale ? " active" : ""}`}
          key={locale}
          href={pathname ?? "/"}
          locale={locale}
        >
          {t(locale)}
        </Link>
      ))}
    </nav>
  );
}
