import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.Core.NormalUser";
const apiPath = "entry.cgi";

export type normaluser = {
  email: string;
  fullname: string;
  username: string;
  editable: boolean;
  disallowchpasswd: boolean;
  OTP_enable: boolean;
  OTP_enforced: boolean;
  password_last_change: number;
};

export async function get(
  user: string,
  sid: string,
): Promise<ApiResponse<normaluser>> {
  return fetchAPI(service, "get", apiPath, {
    api: service,
    method: "get",
    version: "1",
    name: user,
    _sid: sid,
  });
}

//! todo
export async function set(
  options?: {
    OTP_enable?: boolean;
    OTP_enforced?: boolean;
    disallowchpasswd?: boolean;
    editable?: boolean;
    email?: string;
    fullname?: string;
    username?: string;
  },
) {}
