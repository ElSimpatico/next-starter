import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

import {
  ProductGallery,
  ProductInfo,
  ProductInfoSkeleton,
  ProductDimensions,
  ProductDimensionsSkeleton,
} from "@routes/products/_components";

import { CommonServerPage } from "@/types/CommonProps";
import { Skeleton } from "@/ui/components";

import styles from "./page.module.scss";

// export function generateStaticParams() {
//   return [
//     { locale: "es", id: "1" },
//     { locale: "es", id: "2" },
//     { locale: "es", id: "3" },
//     { locale: "en", id: "1" },
//     { locale: "en", id: "2" },
//     { locale: "en", id: "3" },
//   ];
// }

export default async function Product({ params }: CommonServerPage) {
  const { locale } = (await params) ?? {};

  const t = await getTranslations({ locale, namespace: "ProductDetail" });

  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetail__images}>
        <Suspense fallback={<Skeleton width={"100%"} height={"300px"} image />}>
          <ProductGallery params={params} />
        </Suspense>
      </div>

      <div className={styles.productDetail__info}>
        <Suspense fallback={<ProductInfoSkeleton />}>
          <ProductInfo params={params} t={t} />
        </Suspense>
      </div>

      <div className={styles.productDetail__dimensions}>
        <Suspense fallback={<ProductDimensionsSkeleton />}>
          <ProductDimensions params={params} t={t} />
        </Suspense>
      </div>
    </div>
  );
}
