import { CommonServerProps } from "@/types/CommonProps";
import ProductCard from "../product-card/ProductCard";
import { getProducts } from "../../_utils/fetch";

export async function ProductList({ t }: CommonServerProps) {
  const products = await getProducts();

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
