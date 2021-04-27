import { checkParams } from "./type.params";

const baseDefault = {
  api: "SYNO.Core.NormalUser.LoginNotify",
  version: 1,
  _sid: undefined,
};

export const checkDefault: checkParams = {
  ...baseDefault,
  ...{ method: "get" },
};
