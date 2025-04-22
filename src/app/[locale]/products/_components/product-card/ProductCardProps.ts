import { CommonServerProps } from "@/types/CommonProps";
import { Product } from "@/types/Products";

export interface ProductCardProps extends CommonServerProps {
  product: Product;
  accessibleName?: string;
  accessibleImage?: string;
}
