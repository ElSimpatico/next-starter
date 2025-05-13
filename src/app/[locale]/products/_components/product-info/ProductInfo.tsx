import { use } from "react";
import { getProduct } from "@routes/products/_utils";
import { fakeWaiter } from "@/lib/utils/fake";
import { CommonServerProps } from "@/types/CommonProps";

import clsx from "clsx";

import styles from "./ProductInfo.module.scss";

export default function ProductInfo({ params, t }: CommonServerProps) {
  use(fakeWaiter(1));
  const { id } = use(params!);

  const product = use(getProduct(id));

  const percentage = 1 - (product?.discountPercentage ?? 0) / 100;
  const priceDiscount = (product?.price ?? 0) * percentage;

  const priceClassname = clsx({
    [styles.productInfo__priceTrough]: priceDiscount > 0,
  });

  return (
    <div className={styles.productInfo}>
      <div className={styles.productInfo__section}>
        <h2>{product?.title}</h2>
        <p
          className={`${styles.productInfo__price} ${styles.productInfo__paragraph}`}
        >
          <span className={priceClassname}>{product?.price.toFixed(2)}€</span>
          {priceDiscount > 0 && <span>{priceDiscount.toFixed(2)}€</span>}
          {(product?.discountPercentage ?? 0) > 0 && (
            <span className={styles.productInfo__discount}>
              {t!("discount", { percentage: product?.discountPercentage ?? 0 })}
            </span>
          )}
        </p>
      </div>
      <hr />
      <div className={styles.productInfo__section}>
        <p className={styles.productInfo__paragraph}>{product?.description}</p>
        <p className={styles.productInfo__paragraph}>
          <strong>{t!("category")}:</strong> {product?.category}
        </p>
        <p className={styles.productInfo__paragraph}>
          <strong>{t!("brand")}:</strong> {product?.brand}
        </p>
        <p className={styles.productInfo__paragraph}>
          <strong>{t!("stock")}:</strong> {product?.stock}
        </p>
        <p className={styles.productInfo__paragraph}>
          <strong>{t!("availability")}:</strong> {product?.availabilityStatus}
        </p>
      </div>
    </div>
  );
}
