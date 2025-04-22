import { CommonServerProps } from "@/types/CommonProps";

export default async function Product({ params }: CommonServerProps) {
  const { id } = (await params) ?? {};

  return (
    <div>
      <h1>Pagina de producto</h1>
      <p>{`Este es el producto ${id}`}</p>
    </div>
  );
}
