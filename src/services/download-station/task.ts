import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.DownloadStation.Task";
const apiPath = "DownloadStation/task.cgi";

export type info = {};
export type create = {};
export type remove = {};

export type detail = {
  completed_time?: number;
  connected_leechers?: number;
  connected_peers?: number;
  connected_seeders?: number;
  create_time?: number;
  total_peers?: number;
  total_pieces?: number;
  unzip_password?: string;
  priority?: number;
  uri?: string;
  waiting_seconds?: number;
  destination?: string;
};

export type file = {
  filename?: string;
  size?: string;
  size_downloaded?: string;
  priority?: string;
};

export type peer = {
  address?: string;
  agent?: string;
  progress?: number;
  speed_download?: number;
  speed_upload?: number;
};

export type tracker = {
  url?: string;
  status?: string;
  update_timer?: number;
  seeds?: number;
  peers?: number;
};

export type transfer = {
  downloaded_pieces?: number;
  size_downloaded?: number;
  size_uploaded?: number;
  speed_download?: number;
  speed_upload?: number;
};

export type task = {
  additional?: {
    detail?: detail;
    transfer?: transfer;
    file?: file;
    tracker?: tracker;
    peer?: peer;
  };
  id: string;
  size: number;
  status: string;
  status_extra?: {
    error_detail?: string;
    unzip_progress?: number;
  };
  title: string;
  type: string;
  username: string;
};

export type list = {
  offset: number;
  tasks: task[];
  total: number;
};

export type id = {
  error: number;
  id: string;
};

export type deleteTask = [id[]];
export type pause = [id[]];
export type resume = [id[]];
export type edit = [id[]];

/**
 * @param sid
 * @param options additional : can be "detail,transfer,file,tracker,peer", separated by comma. ("file,tracker,peer" : Bt only)
 * @returns
 */
export async function list(
  sid: string,
  options?: {
    offset?: string;
    limit?: string;
    additional?: string;
  },
): Promise<ApiResponse<list>> {
  return fetchAPI(service, "list", apiPath, {
    api: service,
    method: "list",
    version: "3",
    _sid: sid,
    ...options,
  });
}

export async function info(id: string, sid: string, options = {
  additional: "detail,transfer,file,tracker,peer",
}): Promise<ApiResponse<info>> {
  return fetchAPI(service, "getinfo", apiPath, {
    api: service,
    method: "getinfo",
    version: "3",
    _sid: sid,
    id,
    ...options,
  });
}

export async function create(sid: string, options?: {
  uri?: string;
  file?: string;
  username?: string;
  password?: string;
  unzip_password?: string;
  destination?: string;
}): Promise<ApiResponse<info>> {
  if (options?.file) {
    return fetchAPI(service, "create", apiPath, {
      api: service,
      method: "create",
      version: "3",
      _sid: sid,
      ...options,
    }, { method: "POST" });
  }

  return fetchAPI(service, "create", apiPath, {
    api: service,
    method: "create",
    version: "3",
    _sid: sid,
    ...options,
  });
}

export async function resume(
  id: string,
  sid: string,
): Promise<ApiResponse<info>> {
  return fetchAPI(service, "resume", apiPath, {
    api: service,
    method: "resume",
    version: "3",
    _sid: sid,
    id,
  });
}

export async function pause(
  id: string,
  sid: string,
): Promise<ApiResponse<info>> {
  return fetchAPI(service, "pause", apiPath, {
    api: service,
    method: "pause",
    version: "3",
    _sid: sid,
    id,
  });
}

export async function edit(
  id: string,
  destination: string,
  sid: string,
): Promise<ApiResponse<info>> {
  return fetchAPI(service, "edit", apiPath, {
    api: service,
    method: "edit",
    version: "3",
    _sid: sid,
    id,
    destination,
  });
}

export async function remove(
  id: string,
  sid: string,
  force_complete?: boolean,
): Promise<ApiResponse<info>> {
  return fetchAPI(service, "delete", apiPath, {
    api: service,
    method: "delete",
    version: "3",
    _sid: sid,
    id,
    force_complete: `${force_complete}`,
  });
}
