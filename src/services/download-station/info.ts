import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.DownloadStation.Info";
const apiPath = "DownloadStation/info.cgi";

export type setServerConfig = {
  offset: number;
  shares: { isdir: boolean; name: string; path: string }[];
  total: number;
};

export type getInfo = {
  is_manager: boolean;
  version: number;
  version_string: string;
};

export type getConfig = {
  bt_max_download: number;
  bt_max_upload: number;
  default_destination: string;
  emule_default_destination: string | null;
  emule_enabled: boolean;
  emule_max_download: number;
  emule_max_upload: number;
  ftp_max_download: number;
  http_max_download: number;
  nzb_max_download: number;
  unzip_service_enabled: boolean;
};

export async function setServerConfig(
  sid: string,
  options?: {
    bt_max_download?: number;
    bt_max_upload?: number;
    emule_enabled?: boolean;
    emule_max_download?: number;
    emule_max_upload?: number;
    ftp_max_download?: number;
    http_max_download?: number;
    nzb_max_download?: number;
    unzip_service_enabled?: boolean;
    default_destination?: string;
    emule_default_destination?: string;
  },
): Promise<ApiResponse<setServerConfig>> {
  return fetchAPI(service, "setserverconfig", apiPath, {
    api: service,
    method: "setserverconfig",
    version: "1",
    _sid: sid,
  });
}

export async function getInfo(sid: string): Promise<ApiResponse<getInfo>> {
  return fetchAPI(service, "getinfo", apiPath, {
    api: service,
    method: "getinfo",
    version: "1",
    _sid: sid,
  });
}

export async function getConfig(sid: string): Promise<ApiResponse<getConfig>> {
  return fetchAPI(service, "getconfig", apiPath, {
    api: service,
    method: "getconfig",
    version: "1",
    _sid: sid,
  });
}
