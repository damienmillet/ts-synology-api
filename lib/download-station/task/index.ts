import { stringify } from "querystring";
import Api from "../../api";
import {
  createDefault,
  deleteDefault,
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
  list: (params?: listParams) =>
    fetch(Api.queryUrl(path, { ...listDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: list) => res),

  info: (params: infoParams) =>
    fetch(Api.queryUrl(path, { ...infoDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: task) => res),

  create: (params?: createParams, File?: File) =>
    fetch(Api.queryUrl(path, { ...createDefault, ...params }), {
      method: File ? "POST" : "GET",
      headers: File ? undefined : Api.headers,
      //body: File,
    })
      .then((res) => res.json())
      .then((res: create) => res),

  delete: (params: deleteParams) =>
    fetch(Api.queryUrl(path, { ...deleteDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: deleteTask) => res),

  pause: (params: pauseParams) =>
    fetch(Api.queryUrl(path, { ...pauseDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: pause) => res),

  resume: (params: resumeParams) =>
    fetch(Api.queryUrl(path, { ...resumeDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: resume) => res),

  edit: (params: editParams) =>
    fetch(Api.queryUrl(path, { ...listDefault, ...params }), {
      headers: Api.headers,
    })
      .then((res) => res.json())
      .then((res: edit) => res),
};

export default Task;

Task.create({ _sid: "zss", uri: "" });
