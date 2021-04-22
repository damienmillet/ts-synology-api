import Api from "../../api";
import { infoDefault } from "./default";
import { infoParams } from "./type.params";
import { infos } from "./type.return";

const path = "/webapi/query.cgi";

const Info = Api && {
  get: (params?: infoParams) =>
    fetch(Api.queryUrl(path, { ...infoDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: infos) => res),
};

export default Info;
