import { getTranslations } from "next-intl/server";

import { CommonServerProps } from "@/types/CommonProps";

import { getProduct } from "../_utils/fetch";
import { fakeWaiter } from "@/lib/utils/fake";

export default async function Product({ params }: CommonServerProps) {
  await fakeWaiter(1);
  const productPromise = getProduct(params!);
  const t = await getTranslations("ProductDetail");

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

// import { CommonServerProps } from "@/types/CommonProps";
// import { ProductGallery } from "../_components/product-gallery/ProductGallery";
// import { ProductInfo } from "../_components/product-info/ProductInfo";
// import { ProductDimensions } from "../_components/product-dimensions/ProductDimensions";

// export default async function Product({ params }: CommonServerProps) {
//   const t = await getTranslations("ProductDetail");

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
