import Api from "../../api";
import { setUserDefault, userDefault } from "./default";
import LoginNotify from "./LoginNotify";
import { setUserParams, userParams } from "./type.params";
import { setUser, user } from "./type.return";

const path = "/webapi/entry.cgi";

const NormalUser = Api && {
  /**
   * @api SYNO.DSM.NormalUser
   * @method get
   * @version 1
   * @param [_sid] token id
   * @return check
   */
  getUser: (params?: userParams) =>
    fetch(Api.queryUrl(path, { ...userDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: user) => res),
  /**
   * @api SYNO.DSM.NormalUser.LoginNotify
   * @method set
   * @version 2
   * @param [_sid] token id
   * @return boolean
   */
  setUser: (params?: setUserParams) =>
    fetch(Api.queryUrl(path, { ...setUserDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: setUser) => res),
  LoginNotify: LoginNotify,
};

export default NormalUser;
