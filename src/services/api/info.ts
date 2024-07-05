import "dotenv/config";
import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.API.Info";
const apiPath = "entry.cgi";

export type info = {
  [key: string]: {
    maxVersion: number;
    minVersion: number;
    path: string;
  };
};

export type query = info[];

export async function query(query?: string): Promise<ApiResponse<query>> {
  return fetchAPI(service, "query", apiPath, {
    api: service,
    method: "query",
    version: "1",
    query: query || "all",
  });
}
