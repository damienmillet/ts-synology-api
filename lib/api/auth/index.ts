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
  login: (session: string) =>
    Api.get<login>(path, { ...loginDefault, session }),
  /**
   * @api SYNO.API.Auth
   * @method logout
   * @version 7
   * @param [_sid] token id
   * @return logout
   */
  logout: (session: string) =>
    Api.get<logout>(path, { ...logoutDefault, session }),
};

export default Auth;
