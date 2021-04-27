import { infoParams } from "./type.params";

const baseDefault = {
  api: "SYNO.DSM.Info",
  version: 2,
  _sid: undefined,
};

export const infoDefault: infoParams = {
  ...baseDefault,
  ...{ method: "getinfo" },
};
