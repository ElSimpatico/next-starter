export interface DummyProductsResponse {
  limit: number;
  products: Record<string, unknown>[];
  skip: number;
  total: number;
}
