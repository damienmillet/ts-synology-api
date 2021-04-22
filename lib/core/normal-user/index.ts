import Api from "../../api";
import { userDefault } from "./default";
import { userParams } from "./type.params";
import { user } from "./type.return";

const path = "/webapi/entry.cgi";

const NormalUser = Api && {
  getUser: (params?: userParams) =>
    fetch(Api.queryUrl(path, { ...userDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: user) => res),
};

export default NormalUser;
