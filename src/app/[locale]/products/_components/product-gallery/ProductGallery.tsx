import Image from "next/image";
import { use } from "react";
import { getProduct } from "@routes/products/_utils/fetch";
// import { fakeWaiter } from "@/lib/utils/fake";
import { CommonServerProps } from "@/types/CommonProps";

import styles from "./ProdcutGallery.module.scss";

export default function ProductGallery({ params }: CommonServerProps) {
  // use(fakeWaiter(2));

  const { id } = use(params!);

  const product = use(getProduct(id));

  return (
    <div className={styles.productGallery}>
      <Image
        className={styles.productGallery__image}
        src={product?.thumbnail ?? ""}
        alt={product?.title ?? "Product image"}
        fill
        sizes={"(min-width: 768px) 40vw, 100vw"}
      ></Image>
      {/* <img src={product?.thumbnail} alt={product?.title} /> */}
    </div>
  );
}
