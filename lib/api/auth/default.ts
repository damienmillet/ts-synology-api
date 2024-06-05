import { loginParams, logoutParams } from "./type.params";

const baseDefault = {
  api: "SYNO.API.Auth",
  version: 7,
  _sid: undefined,
};

export const loginDefault: loginParams = {
  ...baseDefault,
  ...{
    method: "login",
    account: process.env.SYNOLOGY_USER as string,
    passwd: process.env.SYNOLOGY_PASS as string,
    format: "sid",
  },
};

export const logoutDefault: logoutParams = {
  ...baseDefault,
  ...{
    method: "logout",
    _sid: undefined,
  },
};
