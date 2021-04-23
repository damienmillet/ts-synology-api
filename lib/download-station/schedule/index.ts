import Api from "../../api";
import { getConfigDefault, setConfigDefault } from "./default";
import { config, setConfig } from "./type.return";
import { getConfigParams, setConfigParams } from "./type.params";

const path = "/webapi/DownloadStation/schedule.cgi";

const Schedule = Api && {
  getConfig: (params?: getConfigParams) =>
    fetch(Api.queryUrl(path, { ...getConfigDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: config) => res),
  setConfig: (params?: setConfigParams) =>
    fetch(Api.queryUrl(path, { ...setConfigDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: setConfig) => res),
};

export default Schedule;
