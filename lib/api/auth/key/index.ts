import Api from "../../../api";
import { getDefault } from "./default";
import { getParams } from "./type.params";
import { get } from "./type.return";

const path = "/webapi/entry.cgi";

const Key = Api && {
  get: (params?: getParams) =>
    fetch(Api.queryUrl(path, { ...getDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: get) => res),
  // grant: (params?: grantParams) =>
  //   fetch(Api.queryUrl(path, { ...grantDefault, ...params }), {
  //     headers: Api.headers,
  //   })
  //     .then((res) => res.json())
  //     .then((res: grant) => res),
};

export default Key;
