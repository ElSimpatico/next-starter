import { HTTPClient } from "@/lib/api/core";

import { BASE_URL, Endpoints } from "./constants";
import { resolveEndpoint } from "../core/utils";
import { DummyProductsResponse, DummySingleProductResponse } from "./types";

class DummyAPI {
  private http: HTTPClient;

  constructor() {
    this.http = new HTTPClient(BASE_URL, {});
  }

  async getProducts(): Promise<DummyProductsResponse> {
    return this.http.get(Endpoints.PRODUCTS, {});
  }

  async getProduct(id: string): Promise<DummySingleProductResponse> {
    const endpoint = resolveEndpoint(Endpoints.PRODUCT_DETAIL, { id });
    return this.http.get(endpoint, {});
  }
}

class DummyAPISingleton {
  private static instance?: DummyAPI;
  static getInstance(): DummyAPI {
    if (!this.instance) {
      this.instance = new DummyAPI();
    }

    return this.instance;
  }
}

export default DummyAPISingleton.getInstance();
