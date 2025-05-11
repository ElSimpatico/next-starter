import { Skeleton } from "@/ui/components";
import ProductCardSkeleton from "./_components/product-card/ProductCardSkeleton";

import styles from "./styles.module.css";

export default function Loading() {
  const items = new Array(20).fill(0).map((_, index) => ({
    id: index + 1,
  }));
  return (
    <div>
      <div style={{ maxWidth: "400px" }}>
        <Skeleton width={"100%"} height={"4rem"} />
      </div>
      <div className={styles.products__list}>
        {items.map((item) => (
          <ProductCardSkeleton key={`card_skeleton_${item.id}`} />
        ))}
      </div>
    </div>
  );
}
