import { ProductListSkeleton } from "@/app/[locale]/products/_components";

export default function Loading() {
  return (
    <div>
      <div
        style={{ backgroundColor: "gray", height: "24px", width: "400px" }}
      ></div>
      <ProductListSkeleton />
    </div>
  );
}
