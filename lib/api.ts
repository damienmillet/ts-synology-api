import { stringify } from "querystring";

export type response<T> = {
  data?: T;
  success: boolean;
  error?: {
    code?: number;
    message?: string;
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
    // if (params) {
    //   const str = JSON.stringify(params);
    //   const url = Api.isUrl(str)?.[0];
    //   const e = url && str.replace(url, encodeURIComponent(url));
    //   params = e && JSON.parse(e);
    // }
    params && (url.search = new URLSearchParams(stringify(params)).toString());
    return url.toString();
  },
  // isUrl: (string: string) =>
  //   string.match(
  //     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  //   ),
};

export default Api;
