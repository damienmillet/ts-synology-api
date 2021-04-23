import Api from "../../../api";
import { listDefault, refreshDefault } from "./default";
import { listParams, refreshParams } from "./type.params";
import { list, refresh } from "./type.return";

const path = "/webapi/DownloadStation/RSSsite.cgi";

const Site = Api && {
  list: (params?: listParams) =>
    fetch(Api.queryUrl(path, { ...listDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: list) => res),
  refresh: (params?: refreshParams) =>
    fetch(Api.queryUrl(path, { ...refreshDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: refresh) => res),
};

export default Site;
