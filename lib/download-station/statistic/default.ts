import { infoParams } from "./type.params";

const baseDefault = {
  api: "SYNO.DownloadStation.Info",
  version: 1,
  _sid: undefined,
};

export const infoDefault: infoParams = {
  ...baseDefault,
  ...{ method: "getinfo" },
};
