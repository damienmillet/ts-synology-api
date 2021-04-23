import { listParams } from "./type.params";

const baseDefault = {
  api: "SYNO.DownloadStation.RSS.Feed",
  version: 1,
  _sid: undefined,
};

export const listDefault: listParams = {
  ...baseDefault,
  ...{ method: "list", id: undefined },
};
