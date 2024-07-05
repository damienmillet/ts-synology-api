import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.DownloadStation.BTSearch";
const apiPath = "DownloadStation/btsearch.cgi";

export async function start(): Promise<any> {
  return fetchAPI(service, "start", apiPath, { method: "start", version: "1" });
}

export async function list(): Promise<any> {
  return fetchAPI(service, "list", apiPath, { method: "list", version: "1" });
}
