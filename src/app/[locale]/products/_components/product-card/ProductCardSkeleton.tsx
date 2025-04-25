export default function ProductCardSkeleton() {
  return (
    <article className="products__card">
      <div
        className="products__cardImage"
        style={{
          backgroundColor: "grey",
          borderRadius: "12px",
          width: "100%",
          height: "316px",
        }}
      />
      <div
        style={{
          backgroundColor: "grey",
          borderRadius: "12px",
          width: "100%",
          height: "24px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "grey",
          borderRadius: "12px",
          width: "100%",
          height: "24px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "grey",
          borderRadius: "12px",
          width: "100px",
          height: "24px",
        }}
      ></div>
    </article>
  );
}
