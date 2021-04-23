import { stringify } from "querystring";

export type response<T> = {
  data?: T;
  success: boolean;
  error?: {
    code: number;
  };
};

const Api = {
  baseUrl: process.env.SYNOLOGY_URI,
  headers: new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
  }),

  queryUrl: (uri: string, params?: {}) => {
    const url = new URL(Api.baseUrl + uri);
    params && (url.search = new URLSearchParams(stringify(params)).toString());
    return url.toString();
  },
};

export default Api;
