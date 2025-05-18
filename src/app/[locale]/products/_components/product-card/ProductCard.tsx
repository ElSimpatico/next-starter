import Image from "next/image";
import { Link } from "@/i18n/navigation";

import { Routes } from "@/constants/Routes";

import { ProductCardProps } from "./ProductCardProps";

import styles from "./styles.module.scss";

export default async function ProductCard({
  product,
  accessibleImage,
  accessibleName,
  locale,
}: ProductCardProps) {
  return (
    <article className={styles.productCard}>
      <div className={styles.productCard__imageWrapper}>
        <Image
          className={styles.productCard__image}
          src={product.imageUrl}
          alt={accessibleImage ?? "Product image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
        />
      </div>
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
