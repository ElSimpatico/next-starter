"use client";

import { useCallback, useState, useRef, useEffect } from "react";

import { LOCALES } from "@/i18n/locales";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

import { GrLanguage } from "react-icons/gr";

import clsx from "clsx";

import { LanguageNavProps } from "./LanguageNavProps";

import styles from "./LanguageNav.module.scss";

export default function LanguageNav({
  variant = "dropdown",
}: LanguageNavProps) {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const localePattern = new RegExp(`^/(${LOCALES.join("|")})`);
  const pathWithoutLocale = pathname.replace(localePattern, "") || "/";

  const t = useTranslations("Languages");

  const getLinkClassname = useCallback(
    (locale: string) => {
      return clsx(styles.languages__link, {
        [styles.languages__linkIsActive]: locale === currentLocale,
      });
    },
    [currentLocale]
  );

  const renderLocales = () => {
    return LOCALES.map((locale) => {
      return (
        <Link
          className={getLinkClassname(locale)}
          key={locale}
          href={pathWithoutLocale}
          locale={locale}
        >
          {t(locale)}
        </Link>
      );
    });
  };

  const handlerClick = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  const handlerClickOut = useCallback((event: MouseEvent) => {
    if (!buttonRef.current?.contains(event.target as Node)) {
      setOpenMenu(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handlerClickOut);
    return () => {
      document.removeEventListener("click", handlerClickOut);
    };
  }, [handlerClickOut]);

  return (
    <nav className={styles.languages}>
      {variant === "dropdown" ? (
        <>
          <button
            ref={buttonRef}
            className={styles.languages__button}
            aria-label={t(currentLocale)}
            aria-expanded={openMenu ? "true" : "false"}
            onClick={handlerClick}
          >
            <GrLanguage />
            <span>{currentLocale}</span>
          </button>
          {openMenu && (
            <div className={styles.languages__menu}>{renderLocales()}</div>
          )}
        </>
      ) : (
        renderLocales()
      )}
    </nav>
  );
}
