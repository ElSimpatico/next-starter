import { getTranslations } from "next-intl/server";

import { ProductCard } from "@routes/products/_components";
import { getProducts } from "@routes/products/_utils";

// import { fakeWaiter } from "@/lib/utils/fake";

import styles from "./styles.module.scss";
import { CommonServerPage } from "@/types/CommonProps";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: CommonServerPage): Promise<Metadata> {
  const { locale } = (await params) ?? {};
  const t = await getTranslations({ locale, namespace: "Products" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function Products({ params }: CommonServerPage) {
  const { locale } = (await params) ?? {};
  const t = await getTranslations({ locale, namespace: "Products" });
  // await fakeWaiter(1);
  const products = await getProducts();

  return (
    <div>
      <h1>{t("title", { total: products.length })}</h1>
      {/* <span>{`fetched at ${new Date().toISOString()}`}</span> */}
      <div className={styles.products__list}>
        {products.map((product) => (
          <ProductCard
            locale={locale}
            key={`${product.id}`}
            product={product}
            accessibleName={t("detailLink", { product: product.name })}
            accessibleImage={t("detailImage", { product: product.name })}
          />
        ))}
      </div>
    </div>
  );
}
