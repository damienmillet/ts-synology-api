import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.DSM.Info";
const apiPath = "entry.cgi";

export type dsminfo = {
  codepage: string;
  model: string;
  ram: number;
  serial: string;
  temperature: number;
  temperature_warn: false;
  time: string;
  uptime: number;
  version: string;
  version_string: string;
};

export async function getinfo(sid: string): Promise<ApiResponse<dsminfo>> {
  return fetchAPI(service, "getinfo", apiPath, {
    api: service,
    method: "getinfo",
    version: "2",
    _sid: sid,
  });
}
