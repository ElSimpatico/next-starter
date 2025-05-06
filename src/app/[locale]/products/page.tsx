import { getTranslations } from "next-intl/server";

import { ProductCard } from "@/app/[locale]/products/_components";
import { getProducts } from "@/app/[locale]/products/_utils";

import { fakeWaiter } from "@/lib/utils/fake";

// export const dynamic = "force-static";

export default async function Products() {
  const t = await getTranslations("Products");
  await fakeWaiter(1);
  const products = await getProducts();

  return (
    <div>
      <h1>{t("title")}</h1>
      {/* <span>{`fetched at ${new Date().toISOString()}`}</span> */}
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
// import {
//   ProductList,
//   ProductListSkeleton,
// } from "@/app/[locale]/products/_components";

// export default async function Products() {
//   const t = await getTranslations("Products");

//   return (
//     <div>
//       <h1>{t("title")}</h1>
//       <span>{`fetched at ${new Date().toISOString()}`}</span>;
//       <Suspense fallback={<ProductListSkeleton />}>
//         <ProductList t={t} />
//       </Suspense>
//     </div>
//   );
// }
