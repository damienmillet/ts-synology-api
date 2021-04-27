import { getParams } from "./type.params";

const baseDefault = {
  api: "SYNO.FileStation.Info",
  version: 1,
  _sid: undefined,
};

export const getDefault: getParams = {
  ...baseDefault,
  ...{ method: "get" },
};
