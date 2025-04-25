import { getTranslations } from "next-intl/server";

import ProductCard from "./_components/product-card/ProductCard";
import { Product } from "@/types/Products";

import { DummyAPI } from "@/lib/api";

async function getProducts(): Promise<Product[]> {
  try {
    const dummyProducts = await DummyAPI.getProducts();
    return (dummyProducts.products ?? []).map(
      (dummyProduct) =>
        ({
          id: dummyProduct?.id,
          name: dummyProduct?.title,
          description: dummyProduct?.description,
          imageUrl: dummyProduct?.thumbnail,
          price: dummyProduct?.price,
        }) as Product
    );
  } catch (err) {
    return [];
  }
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
