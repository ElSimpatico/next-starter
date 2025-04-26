import { PropsWithChildren } from "react";
import { TranslationsFn } from "./Translations";

export type Params = Record<string, unknown>;

export interface CommonServerProps extends PropsWithChildren {
  params?: Promise<Params>;
  t?: TranslationsFn;
}
