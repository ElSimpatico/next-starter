export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

export type HTTPClientOptions = {
  headers?: HeadersInit;
};

export interface IHTTPClient {
  get<T>(endpoint: string, options: RequestInit): Promise<T>;
  post<T>(endpoint: string, options: RequestInit): Promise<T>;
  put<T>(endpoint: string, options: RequestInit): Promise<T>;
  delete<T>(endpoint: string, options: RequestInit): Promise<T>;
}
