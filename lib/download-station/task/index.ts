import Api from "../../api";
import {
  createDefault,
  deleteDefault,
  editDefault,
  infoDefault,
  listDefault,
  pauseDefault,
  resumeDefault,
} from "./default";
import {
  createParams,
  deleteParams,
  editParams,
  infoParams,
  listParams,
  pauseParams,
  resumeParams,
} from "./type.params";
import {
  create,
  deleteTask,
  edit,
  list,
  pause,
  resume,
  task,
} from "./type.return";

const path = "/webapi/DownloadStation/task.cgi";

const Task = Api && {
  list: (params: listParams) =>
    Api.get<list>(path, { ...listDefault, ...params }),
  info: (params: infoParams) =>
    Api.get<task>(path, { ...infoDefault, ...params }),
  create: (params?: createParams, File?: File) =>
    Api.post(path, undefined, { ...createDefault, ...params }),
  delete: (params: deleteParams) =>
    Api.get<deleteTask>(path, { ...deleteDefault, ...params }),
  pause: (params: pauseParams) =>
    Api.get<pause>(path, { ...pauseDefault, ...params }),
  resume: (params: resumeParams) =>
    Api.get<resume>(path, { ...resumeDefault, ...params }),
  edit: (params: editParams) =>
    Api.get<edit>(path, { ...editDefault, ...params }),
};

export default Task;
