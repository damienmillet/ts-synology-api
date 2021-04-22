import Api from "../../api";
import { taskDefault } from "./default";
import { getListParams } from "./type.params";
import { getList } from "./type.return";

const path = "/webapi/DownloadStation/task.cgi";

const Task = Api && {
  getList: (params?: getListParams) =>
    fetch(Api.queryUrl(path, { ...taskDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: getList) => res),

  getInfo: () => {},

  create: () => {},
};

export default Task;
