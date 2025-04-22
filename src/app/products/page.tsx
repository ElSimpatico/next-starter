import Link from "next/link";

import { Routes } from "@/constants/Routes";

export default function Products() {
  return (
    <div>
      <h1>Pagina de productos</h1>

      <Link href={Routes.PRODUCT_DETAIL.replace("[id]", "1")}>
        Go to Product 1
      </Link>
    </div>
  );
}
