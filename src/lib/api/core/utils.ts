export function resolveEndpoint(
  endpoint: string,
  params: Record<string, unknown>
): string {
  let endpointResolved = endpoint;
  Object.keys(params ?? {}).forEach((key) => {
    const value = params[key] as string;
    endpointResolved = endpoint.replace(`:${key}`, value);
  });

  return endpointResolved;
}
