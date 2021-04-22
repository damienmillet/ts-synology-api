import { getListParams } from "./type.params";

export const taskDefault: getListParams = {
  api: "SYNO.DownloadStation.Task",
  version: 1,
  method: "list",
  additional: "detail,transfer",
  _sid: undefined,
};
