import Api from "../../api";
import { queryDefault } from "./default";
import { queryParams } from "./type.params";
import { query } from "./type.return";

const path = "/webapi/query.cgi";

const Info = Api && {
  query: (params?: queryParams) =>
    fetch(Api.queryUrl(path, { ...queryDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: query) => res),
};

export default Info;
