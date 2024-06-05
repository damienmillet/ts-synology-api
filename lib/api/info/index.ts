import Api from "../../api";
import { queryDefault } from "./default";
import { queryParams } from "./type.params";
import { query } from "./type.return";

const path = "/webapi/query.cgi";

const Info = Api && {
  /**
   * @api SYNO.API.Info
   * @method get
   * @version 1
   * @param [query] api
   * @return query
   */
  query: (params?: queryParams) => Api.get(path, queryDefault, params),
};

export default Info;
