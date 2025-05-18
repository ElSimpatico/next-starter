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
import { getProduct } from "@routes/products/_utils";

import styles from "./page.module.scss";
import { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: CommonServerPage): Promise<Metadata> {
  const { id } = (await params) ?? {};

  const product = await getProduct(id);

  if (!product) return {};

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      type: "website",
      title: product.title,
      description: product.title,
      images: product.images,
    },
  };
}

export default async function Product({ params }: CommonServerPage) {
  const { locale } = (await params) ?? {};

  const t = await getTranslations({ locale, namespace: "ProductDetail" });

  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetail__images}>
        <Suspense
          fallback={
            <Skeleton
              width={"100%"}
              className={styles.productDetail__imagesSkeleton}
              image
            />
          }
        >
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
