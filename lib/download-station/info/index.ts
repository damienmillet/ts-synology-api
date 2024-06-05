import Api from "../../api";
import {
  getConfigDefault,
  infoDefault,
  setServerConfigDefault,
} from "./default";
import { config, info, setServerConfig } from "./type.return";
import {
  getConfigParams,
  infoParams,
  setServerConfigParams,
} from "./type.params";

const path = "/webapi/DownloadStation/info.cgi";

const Info = Api && {
  get: (params?: infoParams) => Api.get(path, infoDefault, params),
  getConfig: (params?: getConfigParams) =>
    Api.get(path, getConfigDefault, params),
  setServerConfig: (params?: setServerConfigParams) =>
    Api.get(path, setServerConfigDefault, params),
};

export default Info;
