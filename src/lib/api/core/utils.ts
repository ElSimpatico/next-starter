export function resolveEndpoint(
  endpoint: string,
  params: Record<string, unknown>
): string {
  Object.keys(params ?? {}).forEach((key) => {
    const value = params[key] as string;
    endpoint.replace(`:${key}`, value);
  });

  return endpoint;
}
