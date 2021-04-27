import { getParams, grantParams } from "./type.params";

const baseDefault = {
  api: "SYNO.API.Auth.Key",
  version: 7,
};

export const getDefault: getParams = {
  ...baseDefault,
  ...{
    method: "get",
    _sid: undefined,
  },
};

export const grantDefault: grantParams = {
  ...baseDefault,
  ...{
    method: "grant",
    _sid: undefined,
  },
};
