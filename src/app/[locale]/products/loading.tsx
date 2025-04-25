import ProductCardSkeleton from "./_components/product-card/ProductCardSkeleton";

export default function Loading() {
  const items = new Array(20).fill(0).map((_, index) => ({
    id: index + 1,
  }));

  return (
    <div>
      <div
        style={{ backgroundColor: "gray", height: "24px", width: "400px" }}
      ></div>
      <div className="products">
        {items.map((item) => (
          <ProductCardSkeleton key={`card_skeleton_${item.id}`} />
        ))}
      </div>
    </div>
  );
}
