import { response } from "../../api";

type infoData = {
  is_manager: boolean;
  version: number;
  version_string: string;
};

type configData = {
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
};

export type info = response<infoData>;
export type config = response<configData>;
export type setServerConfig = response<undefined>;
