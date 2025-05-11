import { PropsWithChildren } from "react";
import { TranslationsFn } from "./Translations";

type Params = Record<string, string>;

export interface CommonServerProps extends PropsWithChildren {
  params?: Promise<Params>;
  className?: string;
  t?: TranslationsFn;
}

export interface CommonServerLayout extends PropsWithChildren {
  params?: Promise<Params>;
}
export interface CommonServerPage {
  params?: Promise<Params>;
}

export interface CommonProps extends PropsWithChildren {
  testId?: string;
  className?: string;
}
