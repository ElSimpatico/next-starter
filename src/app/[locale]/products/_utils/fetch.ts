import { DummyAPI } from "@/lib/api";
import { Product } from "@/types/Products";

export async function getProducts(): Promise<Product[]> {
  try {
    const dummyProducts = await DummyAPI.getProducts();
    return (dummyProducts.products ?? []).map(
      (dummyProduct) =>
        ({
          id: dummyProduct?.id,
          name: dummyProduct?.title,
          description: dummyProduct?.description,
          imageUrl: dummyProduct?.thumbnail,
          price: dummyProduct?.price,
        }) as Product
    );
  } catch (err) {
    return [];
  }
}

export async function getProduct(id: string) {
  try {
    const productResponse = await DummyAPI.getProduct(id);
    return productResponse;
  } catch (err) {
    console.error(err);
    return null;
  }
}
