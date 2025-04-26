import { TranslationValues } from "next-intl";

export type TranslationsFn = (id: string, params?: TranslationValues) => string;
