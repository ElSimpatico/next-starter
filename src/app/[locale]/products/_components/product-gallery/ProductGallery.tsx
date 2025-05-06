import { use } from "react";
import { getProduct } from "@/app/[locale]/products/_utils/fetch";
import { fakeWaiter } from "@/lib/utils/fake";
import { CommonServerProps } from "@/types/CommonProps";

export default function ProductGallery({ params }: CommonServerProps) {
  use(fakeWaiter(2));
  const { id } = use(params!);

  const product = use(getProduct(id));

  return (
    <div className="productDetail__images">
      <img src={product?.thumbnail} alt={product?.title} />
    </div>
  );
}
