import Api from "../../../api";
import { checkDefault } from "./default";
import { checkParams } from "./type.params";
import { check } from "./type.return";

const path = "/webapi/entry.cgi";

const LoginNotify = Api && {
  /**
   * @api SYNO.DSM.NormalUser.LoginNotify
   * @method check
   * @version 1
   * @param _sid token id
   * @return check
   */
  check: (params?: checkParams) => Api.get(path, checkDefault, params),
};

export default LoginNotify;
