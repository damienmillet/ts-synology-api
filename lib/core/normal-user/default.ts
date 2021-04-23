import { userParams } from "./type.params";

const baseDefault = {
  api: "SYNO.Core.NormalUser",
  version: 1,
  _sid: undefined,
};

export const userDefault: userParams = {
  ...baseDefault,
  ...{ method: "get" },
};
