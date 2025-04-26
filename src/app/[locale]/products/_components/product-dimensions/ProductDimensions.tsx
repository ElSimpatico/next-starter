import { getProduct } from "@/app/[locale]/products/_utils/fetch";
import { fakeWaiter } from "@/lib/utils/fake";
import { CommonServerProps } from "@/types/CommonProps";

export async function ProductDimensions({ params }: CommonServerProps) {
  await fakeWaiter(1.5);

  const product = await getProduct(params!);

  return (
    <div className="productDetail__dimensions">
      <h2>Dimensions</h2>
      <p>Width: {product?.dimensions.width} cm</p>
      <p>Height: {product?.dimensions.height} cm</p>
      <p>Depth: {product?.dimensions.depth} cm</p>
    </div>
  );
}
