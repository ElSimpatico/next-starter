import { Link } from "@/i18n/navigation";

import { Routes } from "@/constants/Routes";

import { ProductCardProps } from "./ProductCardProps";

import styles from "./styles.module.css";

export default async function ProductCard({
  product,
  accessibleImage,
  accessibleName,
  locale,
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
          locale={locale}
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
