import Api from "../../api";
import { loginDefault, logoutDefault } from "./default";
import { loginParams, logoutParams } from "./type.params";
import { login, logout } from "./type.return";

const path = "/webapi/auth.cgi";

const Auth = Api && {
  login: (params?: loginParams) =>
    fetch(Api.queryUrl(path, { ...loginDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: login) => res),
  logout: (params?: logoutParams) =>
    fetch(Api.queryUrl(path, { ...logoutDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: logout) => res),
};

export default Auth;
