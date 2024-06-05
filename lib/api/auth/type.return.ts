export type login = {
  is_portal_port: boolean;
  sid: string;
  account: string;
  device_id: string;
  ik_message: string;
  synotoken: string;
};

export type logout = {
  success: boolean;
};
