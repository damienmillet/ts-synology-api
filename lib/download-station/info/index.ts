import Api from "../../api";
import {
  getConfigDefault,
  infoDefault,
  setServerConfigDefault,
} from "./default";
import { info, config, setServerConfig } from "./type.return";
import {
  getConfigParams,
  infoParams,
  setServerConfigParams,
} from "./type.params";

const path = "/webapi/DownloadStation/info.cgi";

const Info = Api && {
  get: (params?: infoParams) =>
    fetch(Api.queryUrl(path, { ...infoDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: info) => res),
  getConfig: (params?: getConfigParams) =>
    fetch(Api.queryUrl(path, { ...getConfigDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: config) => res),
  setServerConfig: (params?: setServerConfigParams) =>
    fetch(Api.queryUrl(path, { ...setServerConfigDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: setServerConfig) => res),
};

export default Info;
