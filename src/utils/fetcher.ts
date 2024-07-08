import { getErrorMessage } from "./errorHandler";

export async function fetchAPI(
  service: string,
  method: string,
  path: string,
  params: Record<string, string>,
  options?: RequestInit,
): Promise<any> {
  const url = new URL("/webapi/" + path, process.env.SYNOLOGY_URL);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const response = await fetch(url.toString(), {
    ...options,
    cache: "no-cache",
  });

  if (!response.ok) {
    return {
      success: false,
      error: { code: response.status, message: response.statusText },
    };
  }

  const data = await response.json();

  if (!data.success) {
    const errorMessage = getErrorMessage(service, method, data.error.code);
    return {
      success: false,
      error: { code: data.error.code, message: errorMessage },
    };
  }

  return { success: true, ...(data.data && { data: data.data }) };
}
