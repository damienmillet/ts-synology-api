import { queryParams } from "./type.params";

const baseDefault = {
  api: "SYNO.API.Info",
  version: 1,
};

export const queryDefault: queryParams = {
  ...baseDefault,
  ...{ method: "query", query: "all" },
};
