import { Skeleton } from "@/ui/components";

import styles from "./ProductInfo.module.css";

export default function ProductInfoSkeleton() {
  return (
    <div className={styles.productInfo}>
      <div className={styles.productInfo__section}>
        <Skeleton width={"100%"} height={"4.8rem"} />
        <div
          className={`${styles.productInfo__price} ${styles.productInfo__paragraph}`}
        >
          <Skeleton width={"5.7rem"} height={"2.4rem"} />
          <Skeleton width={"5.7rem"} height={"2.4rem"} />
          <Skeleton width={"14.7rem"} height={"3.2rem"} />
        </div>
      </div>
      <hr />
      <div className={styles.productInfo__section}>
        <Skeleton
          width={"100%"}
          height={"5rem"}
          className={styles.productInfo__paragraph}
        />

        <Skeleton
          width={"170px"}
          height={"2.4rem"}
          className={styles.productInfo__paragraph}
        />

        <Skeleton
          width={"170px"}
          height={"2.4rem"}
          className={styles.productInfo__paragraph}
        />
        <Skeleton
          width={"100px"}
          height={"2.4rem"}
          className={styles.productInfo__paragraph}
        />

        <Skeleton
          width={"170px"}
          height={"2.4rem"}
          className={styles.productInfo__paragraph}
        />
      </div>
    </div>
  );
}
