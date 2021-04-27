import Api from "../../api";
import { infoDefault } from "./default";
import { infoParams } from "./type.params";
import { info } from "./type.return";

const path = "/webapi/entry.cgi";

const Info = Api && {
  /**
   * @api SYNO.DSM.Info
   * @method getinfo
   * @version 2
   * @param _sid token id
   * @return info about syno
   */
  get: (params?: infoParams) =>
    fetch(Api.queryUrl(path, { ...infoDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: info) => res),
};

export default Info;
