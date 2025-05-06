import { use } from "react";
import { ProductCard } from "@/app/[locale]/products/_components";
import { getProducts } from "@/app/[locale]/products/_utils";
import { CommonServerProps } from "@/types/CommonProps";

export default function ProductList({ t }: CommonServerProps) {
  const products = use(getProducts());

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={`${product.id}`}
          product={product}
          accessibleName={t!("detailLink", { product: product.name })}
          accessibleImage={t!("detailImage", { product: product.name })}
        />
      ))}
    </div>
  );
}
