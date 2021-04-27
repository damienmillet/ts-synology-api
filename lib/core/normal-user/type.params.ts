type base = {
  api?: string;
  version?: number;
  method?: string;
  session?: string | string[];
};
export type userParams = base;

export type setUserParams = base & {
  OTP_enable?: boolean;
  OTP_enforced?: boolean;
  disallowchpasswd?: boolean;
  editable?: boolean;
  email?: string;
  fullname?: string;
  username?: string;
};
