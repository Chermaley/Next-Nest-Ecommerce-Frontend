export default (
  params: Record<string, string | number | null | undefined>,
): string =>
  Object.entries(params)
    .filter(([key, value]) => value !== null && value !== undefined && key)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
