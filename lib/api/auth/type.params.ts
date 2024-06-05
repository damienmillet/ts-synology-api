type base = {
  api: string;
  version: number;
  method: string;
  session?: string | string[];
};

export type loginParams = base & {
  account: string;
  passwd: string;
  format?: string; // sid | cookie
  otp_code?: string;
  enable_syno_token?: boolean;
  enable_device_token?: boolean;
  device_name?: string;
  device_id?: string;
};

export type logoutParams = base & {
  _sid: string | string[] | undefined;
};
