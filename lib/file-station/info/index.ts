import Api from "../../api";
import { getDefault } from "./default";
import { getParams } from "./type.params";
import { info } from "./type.return";

const path = "/webapi/entry.cgi";

/**
 * @api SYNO.FileStation.Info
 * @requires DSM6+
 * @version 2
 */
const Info = Api && {
  /**
   * @api SYNO.FileStation.Info
   * @method get
   * @version 1|2
   * @param [_sid] token id
   * @return info
   */
  get: (params?: getParams) =>
    fetch(Api.queryUrl(path, { ...getDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: info) => res),
};

export default Info;
