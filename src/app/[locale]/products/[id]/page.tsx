import { getTranslations } from "next-intl/server";

import { CommonServerPage } from "@/types/CommonProps";

import { getProduct } from "../_utils/fetch";
import { fakeWaiter } from "@/lib/utils/fake";

// export const dynamic = "force-static";

// export async function generateStaticParams() {
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
  // await fakeWaiter(1);
  const { id, locale } = (await params) ?? {};
  const productPromise = getProduct(id);
  const t = await getTranslations({ locale, namespace: "ProductDetail" });

  const product = await productPromise;

  return (
    <div className="productDetail">
      <h1 className="productDetail__titlePage">{t("title")}</h1>

      <div className="productDetail__images">
        <img src={product?.thumbnail} alt={product?.title} />
      </div>

      <div className="productDetail__info">
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>
          <strong>Category:</strong> {product?.category}
        </p>
        <p>
          <strong>Brand:</strong> {product?.brand}
        </p>
        <p>
          <strong>Price:</strong> ${product?.price.toFixed(2)}
        </p>
        <p>
          <strong>Discount:</strong> {product?.discountPercentage}%
        </p>
        <p>
          <strong>Stock:</strong> {product?.stock}
        </p>
        <p>
          <strong>Availability:</strong> {product?.availabilityStatus}
        </p>
      </div>

      <div className="productDetail__dimensions">
        <h2>Dimensions</h2>
        <p>Width: {product?.dimensions.width} cm</p>
        <p>Height: {product?.dimensions.height} cm</p>
        <p>Depth: {product?.dimensions.depth} cm</p>
      </div>
    </div>
  );
}

// import { Suspense } from "react";
// import { getTranslations } from "next-intl/server";

// import { CommonServerPage } from "@/types/CommonProps";
// import {
//   ProductGallery,
//   ProductInfo,
//   ProductDimensions,
// } from "@/app/[locale]/products/_components";

// // export const dynamic = "force-static";

// // export async function generateStaticParams() {
// //   return [
// //     { locale: "es", id: "1" },
// //     { locale: "en", id: "1" },
// //     { locale: "es", id: "2" },
// //     { locale: "en", id: "2" },
// //     { locale: "es", id: "3" },
// //     { locale: "en", id: "3" },
// //   ];
// // }

// export default async function Product({ params }: CommonServerPage) {
//   const { locale } = (await params) ?? {};
//   const t = await getTranslations({ locale, namespace: "ProductDetail" });

//   return (
//     <div className="productDetail">
//       <h1 className="productDetail__titlePage">{t("title")}</h1>

//       <Suspense fallback={<div>Loading product gallery...</div>}>
//         <ProductGallery params={params} />
//       </Suspense>

//       <Suspense fallback={<div>Loading product info...</div>}>
//         <ProductInfo params={params} />
//       </Suspense>

//       <Suspense fallback={<div>Loading product dimensions...</div>}>
//         <ProductDimensions params={params} />
//       </Suspense>
//     </div>
//   );
// }
