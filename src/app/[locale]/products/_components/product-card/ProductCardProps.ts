import { CommonServerProps } from "@/types/CommonProps";
import { Product } from "@/types/Products";

export interface ProductCardProps extends CommonServerProps {
  product: Product;
  locale: string;
  accessibleName?: string;
  accessibleImage?: string;
}
