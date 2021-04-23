import { getConfigParams, setConfigParams } from "./type.params";

const baseDefault = {
  api: "SYNO.DownloadStation.Schedule",
  version: 1,
  _sid: undefined,
};

export const getConfigDefault: getConfigParams = {
  ...baseDefault,
  ...{ method: "getconfig" },
};
export const setConfigDefault: setConfigParams = {
  ...baseDefault,
  ...{ method: "setconfig" },
};
