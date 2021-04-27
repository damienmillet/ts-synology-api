import { response } from "../../api";

export type userData = {
  OTP_enable: boolean;
  OTP_enforced: boolean;
  disallowchpasswd: boolean;
  editable: boolean;
  email: string;
  fullname: string;
  username: string;
};

export type user = response<userData>;
export type setUser = response<undefined>;
