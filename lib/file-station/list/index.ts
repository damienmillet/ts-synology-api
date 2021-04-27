import Api from "../../api";
import { listDefault, listShareDefault, getInfoDefault } from "./default";
import { getInfoParams, listParams, listShareParams } from "./type.params";
import { listShare, list, info } from "./type.return";

const path = "/webapi/entry.cgi";

/**
 * @api SYNO.FileStation.List
 * @requires DSM6+
 * @version 2
 */
const List = Api && {
  /**
   * @api SYNO.FileStation.List
   * @method get
   * @version 2+
   * @param [_sid] token id
   * @return listShare
   */
  get: (params?: listShareParams) =>
    fetch(Api.queryUrl(path, { ...listShareDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: listShare) => res),
  /**
   * @api SYNO.FileStation.List
   * @method list
   * @version 2+
   * @param [_sid] token id
   * @return list
   */
  list: (params?: listParams) =>
    fetch(Api.queryUrl(path, { ...listDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: list) => res),
  /**
   * @api SYNO.FileStation.List
   * @method getinfo
   * @version 2+
   * @param [_sid] token id
   * @return files
   */
  getInfo: (params?: getInfoParams) =>
    fetch(Api.queryUrl(path, { ...getInfoDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: info) => res),
};

export default List;
