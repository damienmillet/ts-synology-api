import { listShareParams, listParams, getInfoParams } from "./type.params";

const baseDefault = {
  api: "SYNO.FileStation.List",
  version: 2,
  _sid: undefined,
};

export const listShareDefault: listShareParams = {
  ...baseDefault,
  ...{ method: "list_share" },
};

export const listDefault: listParams = {
  ...baseDefault,
  ...{ method: "list" },
};

export const getInfoDefault: getInfoParams = {
  ...baseDefault,
  ...{ method: "getinfo" },
};
