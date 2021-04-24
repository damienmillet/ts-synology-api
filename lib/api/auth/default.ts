import { loginParams, logoutParams } from "./type.params";

const baseDefault = {
  api: "SYNO.API.Auth",
  version: 1,
};

export const loginDefault: loginParams = {
  ...baseDefault,
  ...{
    version: 2,
    method: "login",
    account: process.env.SYNOLOGY_USER,
    passwd: process.env.SYNOLOGY_PASS,
    session: "DownloadStation",
    format: "sid",
  },
};

export const logoutDefault: logoutParams = {
  ...baseDefault,
  ...{
    method: "logout",
    session: "DownloadStation",
    _sid: undefined,
  },
};
