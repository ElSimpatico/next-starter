import Link from "next/link";

import { Routes } from "@/constants/Routes";

import { ProductCardProps } from "./ProductCardProps";

export default async function ProductCard({
  product,
  accessibleImage,
  accessibleName,
}: ProductCardProps) {
  return (
    <article className="products__card">
      <img
        className="products__cardImage"
        src={product.imageUrl}
        alt={accessibleImage}
      />
      <h2>
        <Link
          href={Routes.PRODUCT_DETAIL.replace("[id]", product.id)}
          aria-label={accessibleName}
        >
          {product.name}
        </Link>
      </h2>
      <p>{product.description}</p>
      <strong>{`${product.price} €`}</strong>
    </article>
  );
}
