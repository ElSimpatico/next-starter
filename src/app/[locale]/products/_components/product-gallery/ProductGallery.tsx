import { getProduct } from "@/app/[locale]/products/_utils/fetch";
import { fakeWaiter } from "@/lib/utils/fake";
import { CommonServerProps } from "@/types/CommonProps";

export async function ProductGallery({ params }: CommonServerProps) {
  await fakeWaiter(2);

  const product = await getProduct(params!);

  return (
    <div className="productDetail__images">
      <img src={product?.thumbnail} alt={product?.title} />
    </div>
  );
}
