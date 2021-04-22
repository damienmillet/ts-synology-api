import { loginParams, logoutParams } from "./type.params";

export const loginDefault: loginParams = {
  api: "SYNO.API.Auth",
  version: 2,
  method: "login",
  account: process.env.SYNOLOGY_USER,
  passwd: process.env.SYNOLOGY_PASS,
  session: "DownloadStation",
  format: "sid",
};

export const logoutDefault: logoutParams = {
  api: "SYNO.API.Auth",
  version: 1,
  method: "logout",
  session: "DownloadStation",
  _sid: undefined,
};
