import { Skeleton } from "@/ui/components";

import styles from "./ProductDimensions.module.css";

export default function ProductDimensionsSkeleton() {
  return (
    <div className={styles.productDimensions}>
      <Skeleton width={"100%"} height={"4.8rem"} />

      <Skeleton
        width={"130px"}
        height={"2.4rem"}
        className={styles.productDimensions__paragraph}
      />
      <Skeleton
        width={"130px"}
        height={"2.4rem"}
        className={styles.productDimensions__paragraph}
      />
      <Skeleton
        width={"130px"}
        height={"2.4rem"}
        className={styles.productDimensions__paragraph}
      />
    </div>
  );
}
