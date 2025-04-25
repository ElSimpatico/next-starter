import { IHTTPClient, HTTPMethod, HTTPClientOptions } from "./types";

export class HTTPClient implements IHTTPClient {
  private baseUrl: string;
  private options: HTTPClientOptions;

  constructor(baseUrl: string, options: HTTPClientOptions) {
    this.baseUrl = baseUrl;
    this.options = options;
  }

  private async request<T>(
    method: HTTPMethod,
    endpoint: string,
    options: HTTPClientOptions
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      method,
      headers: {
        ...this.options.headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Fetch Error - Status: ${response.status}, ${response.statusText}`
      );
    }

    return response.json();
  }

  get<T>(endpoint: string, options: RequestInit): Promise<T> {
    return this.request("GET", endpoint, options);
  }

  post<T>(endpoint: string, options: RequestInit): Promise<T> {
    throw new Error("Method not implemented.");
  }
  put<T>(endpoint: string, options: RequestInit): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete<T>(endpoint: string, options: RequestInit): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
