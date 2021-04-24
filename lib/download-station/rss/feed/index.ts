import Api from "../../../api";
import { listDefault } from "./default";
import { listParams } from "./type.params";
import { list } from "./type.return";

const path = "/webapi/DownloadStation/RSSfeed.cgi";

const Feed = Api && {
  list: (params?: listParams) =>
    fetch(Api.queryUrl(path, { ...listDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: list) => res),
};

export default Feed;
