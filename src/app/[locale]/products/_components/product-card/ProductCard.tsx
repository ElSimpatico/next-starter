import Link from "next/link";

import { Routes } from "@/constants/Routes";

import { ProductCardProps } from "./ProductCardProps";

import styles from "./styles.module.css";

export default function ProductCard({
  product,
  accessibleImage,
  accessibleName,
}: ProductCardProps) {
  return (
    <article className={styles.productCard}>
      <img
        className={styles.productCard__image}
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
