import { Skeleton } from "@/ui/components";

import styles from "./styles.module.scss";

export default function ProductCardSkeleton() {
  return (
    <article className={styles.productCard}>
      <Skeleton width={"100%"} height={"31.6rem"} image />
      <Skeleton width={"100%"} height={"2.4rem"} />
      <Skeleton width={"100%"} height={"2.4rem"} />
      <Skeleton width={"100px"} height={"2.4rem"} />
    </article>
  );
}
