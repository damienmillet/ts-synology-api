import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.Core.User";
const apiPath = "entry.cgi";

export type user = {
  users: [{ name: string; uid: number }];
};

export async function get(
  user: string,
  sid: string,
): Promise<ApiResponse<user>> {
  return fetchAPI(service, "get", apiPath, {
    api: service,
    method: "get",
    version: "1",
    name: user,
    _sid: sid,
  });
}
