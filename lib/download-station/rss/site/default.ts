import { listParams, refreshParams } from "./type.params";

const baseDefault = {
  api: "SYNO.DownloadStation.RSS.Site",
  version: 1,
  _sid: undefined,
};

export const listDefault: listParams = {
  ...baseDefault,
  ...{ method: "list" },
};

export const refreshDefault: refreshParams = {
  ...baseDefault,
  ...{ method: "refresh", id: "all" },
};
