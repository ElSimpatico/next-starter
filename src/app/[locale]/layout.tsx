import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { CommonServerLayout } from "@/types/CommonProps";

import { LanguageNav } from "@/ui/components";

import { PoppinsFont } from "@/ui/globals/fonts";

import "@/ui/globals/main.scss";

import styles from "./layout.module.scss";

export async function generateMetadata({
  params,
}: CommonServerLayout): Promise<Metadata> {
  const { locale } = (await params) ?? {};
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: CommonServerLayout) {
  const { locale } = (await params) ?? {};

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const t = await getTranslations({ locale, namespace: "Footer" });

  return (
    <html lang={locale as string} className={PoppinsFont.variable}>
      <body className={styles.layout}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header className={styles.layout__header}>
            <div className={styles.layout__headerContent}>
              <Image
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
              <LanguageNav />
            </div>
          </header>
          <main className={styles.layout__main}>{children}</main>
          <footer className={styles.layout__footer}>
            <div className={styles.layout__footerContent}>
              <p>{t("author", { name: "Aarón Velasco López" })}</p>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
