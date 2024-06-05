import Api from "../../api";
import { loginDefault, logoutDefault } from "./default";
import Key from "./key";
import { loginParams, logoutParams } from "./type.params";
import { login } from "./type.return";

const path = "/webapi/auth.cgi";

const Auth = {
  /**
   * @api SYNO.API.Auth
   * @method login
   * @version 1-6
   * @account
   * @passwd
   * @param [_sid] token id
   * @params format type of security
   * @return login send api or create cookie
   */
  login: (params?: loginParams) => Api.get(path, loginDefault, params),
  /**
   * @api SYNO.API.Auth
   * @method logout
   * @version 1
   * @param [_sid] token id
   * @return logout remove cookie
   */
  logout: (params?: logoutParams) => Api.get(path, logoutDefault, params),
};

export default Auth;
