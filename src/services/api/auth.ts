import "dotenv/config";
import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.API.Auth";
const apiPath = "entry.cgi";

export type login = {
  is_portal_port: boolean;
  sid: string;
  account: string;
  device_id: string;
  ik_message: string;
  synotoken: string;
};

export async function login(
  username = process.env.SYNOLOGY_USER as string,
  password = process.env.SYNOLOGY_PASS as string,
  options?: {
    format?: string;
    session?: string;
    otp_code?: string;
    enable_syno_token?: string;
    enable_device_token?: string;
    device_name?: string;
    device_id?: string;
  },
): Promise<ApiResponse<login>> {
  if (!username || !password) {
    throw new Error("Username and password are required");
  }
  return fetchAPI(service, "login", apiPath, {
    api: service,
    method: "login",
    version: "7",
    account: username,
    passwd: password,
    format: options?.format || "sid",
    ...(options?.session && { session: options?.session }),
    ...(options?.otp_code && { otp_code: options?.otp_code }),
    ...(options?.enable_syno_token &&
      { enable_syno_token: options?.enable_syno_token }),
    ...(options?.enable_device_token &&
      { enable_device_token: options?.enable_device_token }),
    ...(options?.device_name && { device_name: options?.device_name }),
    ...(options?.device_id && { device_id: options?.device_id }),
  });
}

export async function logout(
  sid?: string,
  session?: string,
): Promise<ApiResponse> {
  return fetchAPI(service, "logout", apiPath, {
    api: service,
    method: "logout",
    version: "1",
    ...(session && { session }),
    ...(sid && { _sid: sid }),
  });
}

export async function token(
  sid?: string,
  is_portal_port?: string,
  synotoken?: string,
): Promise<ApiResponse<login>> {
  return fetchAPI(service, "token", apiPath, {
    api: service,
    method: "token",
    version: "6",
    ...(sid && { _sid: sid }),
    ...(is_portal_port && { is_portal_port }),
    ...(synotoken && { synotoken }),
  });
}
