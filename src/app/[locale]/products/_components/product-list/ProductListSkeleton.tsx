import ProductCardSkeleton from "../product-card/ProductCardSkeleton";

export default function ProductListSkeleton() {
  const items = new Array(20).fill(0).map((_, index) => ({
    id: index + 1,
  }));

  return (
    <div className="products">
      {items.map((item) => (
        <ProductCardSkeleton key={`card_skeleton_${item.id}`} />
      ))}
    </div>
  );
}
