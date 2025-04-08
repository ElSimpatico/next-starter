import Link from "next/link";

import { getTranslations } from 'next-intl/server';

import { Routes } from "@/constants/Routes";


export default async function Products() {

  const t = await getTranslations("Products");

  return (
    <div>
        <h1>{t("title")}</h1>

        <Link href={Routes.PRODUCT_DETAIL.replace("[id]", "1")}>{t("detailLink", { product: "1" })}</Link>
    </div>
  );
}
