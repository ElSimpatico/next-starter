import { use } from "react";
import { getProduct } from "@routes/products/_utils";
import { CommonServerProps } from "@/types/CommonProps";

import styles from "./ProductDimensions.module.scss";

export default function ProductDimensions({ params, t }: CommonServerProps) {
  const { id } = use(params!);

  const product = use(getProduct(id));

  return (
    <div className={styles.productDimensions}>
      <h2>{t!("dimensions")}</h2>
      <p className={styles.productDimensions__paragraph}>
        <strong>{t!("width")}: </strong> {product?.dimensions.width} cm
      </p>
      <p className={styles.productDimensions__paragraph}>
        <strong>{t!("height")}: </strong> {product?.dimensions.height} cm
      </p>
      <p className={styles.productDimensions__paragraph}>
        <strong>{t!("depth")}:</strong> {product?.dimensions.depth} cm
      </p>
    </div>
  );
}
