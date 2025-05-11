import { CommonProps } from "@/types/CommonProps";
import { CSSProperties } from "react";

export interface SkeletonProps
  extends CommonProps,
    Pick<CSSProperties, "width" | "height"> {
  circular?: boolean;
  image?: boolean;
}
