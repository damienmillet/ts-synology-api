import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.FileStation.List";
const apiPath = "entry.cgi";

export type listShare = {
  offset: number;
  shares: { isdir: boolean; name: string; path: string }[];
  total: number;
};

// export async function getinfo(sid: string): Promise<ApiResponse<list>> {
//   return fetchAPI(service, "getinfo", apiPath, {
//     api: service,
//     method: "getinfo",
//     version: "2",
//     _sid: sid,
//   });
// }

export async function listShare(sid: string): Promise<ApiResponse<listShare>> {
  return fetchAPI(service, "list_share", apiPath, {
    api: service,
    method: "list_share",
    version: "2",
    _sid: sid,
  });
}

// export async function list(sid: string): Promise<ApiResponse<list>> {
//   return fetchAPI(service, "list", apiPath, {
//     api: service,
//     method: "list",
//     version: "2",
//     _sid: sid,
//   });
// }
