import { getProduct } from "@/app/[locale]/products/_utils/fetch";
import { fakeWaiter } from "@/lib/utils/fake";
import { CommonServerProps } from "@/types/CommonProps";

export async function ProductInfo({ params }: CommonServerProps) {
  await fakeWaiter(1);
  const product = await getProduct(params!);

  return (
    <div className="productDetail__info">
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>
        <strong>Category:</strong> {product?.category}
      </p>
      <p>
        <strong>Brand:</strong> {product?.brand}
      </p>
      <p>
        <strong>Price:</strong> ${product?.price.toFixed(2)}
      </p>
      <p>
        <strong>Discount:</strong> {product?.discountPercentage}%
      </p>
      <p>
        <strong>Stock:</strong> {product?.stock}
      </p>
      <p>
        <strong>Availability:</strong> {product?.availabilityStatus}
      </p>
    </div>
  );
}
