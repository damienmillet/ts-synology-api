import Api from "../../api";
import { infoDefault } from "./default";
import { infoParams } from "./type.params";
import { info } from "./type.return";

const path = "/webapi/DownloadStation/statistic.cgi";

const Statistic = Api && {
  info: (params?: infoParams) =>
    fetch(Api.queryUrl(path, { ...infoDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: info) => res),
};

export default Statistic;
