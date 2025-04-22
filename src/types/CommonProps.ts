export type Params = Record<string, unknown>;

export interface CommonServerProps {
  params?: Promise<Params>;
}
