import Api from "../../api";
import { baseDefault, loginDefault, logoutDefault } from "./default";
import { loginParams, logoutParams } from "./type.params";
import { login, logout } from "./type.return";

const path = "/webapi/auth.cgi";

const Auth = {
  /**
   * @api SYNO.API.Auth
   * @method login
   * @version 7
   * @account
   * @passwd
   * @params format type of security cookie | sid
   * @return login
   */
  login: (params?: loginParams) =>
    Api.get<login>(path, { ...baseDefault, ...loginDefault, ...params }),
  /**
   * @api SYNO.API.Auth
   * @method logout
   * @version 7
   * @param [_sid] token id
   * @return logout
   */
  logout: (params?: logoutParams) =>
    Api.get<logout>(path, { ...baseDefault, ...logoutDefault, ...params }),
};

export default Auth;
