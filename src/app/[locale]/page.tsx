import { redirect } from "next/navigation";

import { Routes } from "@/constants/Routes";

export default function Root() {
   redirect(Routes.PRODUCTS);
}
  