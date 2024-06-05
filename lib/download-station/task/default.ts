import {
  createParams,
  deleteParams,
  editParams,
  infoParams,
  listParams,
  pauseParams,
  resumeParams,
} from "./type.params";

const baseDefault = {
  api: "SYNO.DownloadStation.Task",
  version: 3,
  _sid: undefined,
};

export const listDefault: listParams = {
  ...baseDefault,
  ...{ method: "list", additional: "detail,transfer,file,tracker,peer" },
};

export const infoDefault: infoParams = {
  ...baseDefault,
  ...{
    method: "getinfo",
    id: undefined,
    additional: "detail,transfer,file,tracker,peer",
  },
};

export const createDefault: createParams = {
  ...baseDefault,
  ...{ method: "create", uri: undefined },
};

export const deleteDefault: deleteParams = {
  ...baseDefault,
  ...{ method: "delete", id: undefined },
};

export const pauseDefault: pauseParams = {
  ...baseDefault,
  ...{ method: "pause", id: undefined },
};

export const resumeDefault: resumeParams = {
  ...baseDefault,
  ...{ method: "resume", id: undefined },
};

export const editDefault: editParams = {
  ...baseDefault,
  ...{ method: "edit", id: undefined },
};
