import { getConfigParams, setServerConfigParams } from "./type.params";

const baseDefault = {
  api: "SYNO.DownloadStation.Info",
  version: 1,
  _sid: undefined,
};

export const infoDefault: getConfigParams = {
  ...baseDefault,
  ...{ method: "getinfo" },
};

export const getConfigDefault: getConfigParams = {
  ...baseDefault,
  ...{ method: "getconfig" },
};

export const setServerConfigDefault: setServerConfigParams = {
  ...baseDefault,
  ...{ method: "setserverconfig" },
};
