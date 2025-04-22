import MockProducts from "@/mocks/products.json";

import { getTranslations } from "next-intl/server";

import ProductCard from "./_components/product-card/ProductCard";
import { Product } from "@/types/Products";

async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(MockProducts), 1000)
  );
}

export default async function Products() {
  const t = await getTranslations("Products");
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
