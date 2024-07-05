import { ApiResponse } from "../../types";
import { fetchAPI } from "../../utils/fetcher";

const service = "SYNO.FileStation.Info";
const apiPath = "entry.cgi";

export type info = {
  enable_list_usergrp: boolean;
  enable_send_email_attachment: boolean;
  enable_view_google: boolean;
  enable_view_microsoft: boolean;
  hostname: string;
  is_manager: boolean;
  items: [{ gid: number }, { gid: number }];
  support_file_request: boolean;
  support_sharing: boolean;
  support_vfs: boolean;
  support_virtual: { enable_iso_mount: boolean; enable_remote_mount: boolean };
  support_virtual_protocol: string[];
  system_codepage: string;
  uid: number;
};

export async function get(sid: string): Promise<ApiResponse<info>> {
  return fetchAPI(service, "get", apiPath, {
    api: service,
    method: "get",
    version: "2",
    _sid: sid,
  });
}
