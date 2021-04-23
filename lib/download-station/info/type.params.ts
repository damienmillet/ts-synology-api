type base = {
  api?: string;
  version?: number;
  method?: string;
  _sid: string | string[] | undefined;
};

export type infoParams = base;
export type getConfigParams = base;
export type setServerConfigParams = base & {
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
