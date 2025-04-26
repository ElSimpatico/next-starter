import { getTranslations } from "next-intl/server";

import ProductCard from "./_components/product-card/ProductCard";

import { getProducts } from "./_utils/fetch";
import { fakeWaiter } from "@/lib/utils/fake";

export default async function Products() {
  const t = await getTranslations("Products");
  await fakeWaiter(1);
  const products = await getProducts();

  return (
    <div>
      <h1>{t("title")}</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
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

// import { Suspense } from "react";
// import { getTranslations } from "next-intl/server";
// import { ProductList } from "./_components/product-list/ProductList";
// import ProductListSkeleton from "./_components/product-list/ProductListSkeleton";

// export default async function Products() {
//   const t = await getTranslations("Products");

//   return (
//     <div>
//       <h1>{t("title")}</h1>

//       <Suspense fallback={<ProductListSkeleton />}>
//         <ProductList t={t} />
//       </Suspense>
//     </div>
//   );
// }
