export type user = {
  data: {
    OTP_enable: boolean;
    OTP_enforced: boolean;
    disallowchpasswd: boolean;
    editable: boolean;
    email: string;
    fullname: string;
    username: string;
  };
  success: boolean;
  error: { code: number };
};
