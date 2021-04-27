import Api from "../../api";
import { loginDefault, logoutDefault } from "./default";
import Key from "./key";
import { loginParams, logoutParams } from "./type.params";
import { login, logout } from "./type.return";

const path = "/webapi/auth.cgi";

const Auth = Api && {
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
  login: (params?: loginParams) =>
    fetch(Api.queryUrl(path, { ...loginDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: login) => res),
  /**
   * @api SYNO.API.Auth
   * @method logout
   * @version 1
   * @param [_sid] token id
   * @return logout remove cookie
   */
  logout: (params?: logoutParams) =>
    fetch(Api.queryUrl(path, { ...logoutDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: logout) => res),
  Key: Key,
};

export default Auth;
