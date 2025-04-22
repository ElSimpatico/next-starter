import { PropsWithChildren } from "react";

export type Params = Record<string, unknown>;

export interface CommonServerProps extends PropsWithChildren {
  params?: Promise<Params>;
}
