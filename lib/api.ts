import { readFileSync } from "fs";
import { response } from "./types";

class Api {
  baseUrl = process.env.SYNOLOGY_URI;
  headers = {
    Authorization: `Bearer ${process.env.SYNOLOGY_API}`,
    Accept: "application/json",
  };

  queryUrl(uri: string, params?: any): string {
    const url = new URL(this.baseUrl + uri);
    if (params) url.search = new URLSearchParams(params).toString();
    return url.toString();
  }
  async fetch(
    url: string,
    options?: RequestInit,
  ) {
    const { searchParams } = new URL(url);
    const api = searchParams.get("api") as string;
    const method = searchParams.get("method") as string;

    const res = await fetch(url, { ...options, headers: this.headers });
    const data = async () => {
      if (res.status === 204) return;
      if (res.headers.get("Content-Type")?.includes("application/json")) {
        const json = await res.json();
        if (!json.success) {
          const error = readFileSync("./errors.json", "utf-8");
          const errors = JSON.parse(error);
          const message = errors[api][method][json.error.code];
          json.message = message;
        }
        return json;
      }
      return res;
    };

    return await data();
  }
  get<T = unknown>(
    url: string,
    params?: any,
    options?: RequestInit,
  ) {
    return this.fetch(this.queryUrl(url, params), options) as Promise<
      response<T>
    >;
  }
  post<T = unknown>(
    url: string,
    body: BodyInit,
    params?: any,
    options?: RequestInit,
  ) {
    return this.fetch(this.queryUrl(url, params), {
      ...options,
      method: "POST",
      body,
    }) as Promise<response<T>>;
  }
  put<T = unknown>(
    url: string,
    body: any,
    params?: any,
    options?: RequestInit,
  ) {
    return this.fetch(this.queryUrl(url, params), {
      ...options,
      method: "PUT",
      body: body,
    }) as Promise<response<T>>;
  }
  delete<T = unknown>(url: string, params?: any, options?: RequestInit) {
    return this.fetch(this.queryUrl(url, params), {
      ...options,
      method: "DELETE",
    }) as Promise<response<T>>;
  }
}

export default new Api();
