import { response } from "../../api";

export type loginData = {
  is_portal_port: boolean;
  sid: string;
};
export type login = response<loginData>;
export type logout = response<undefined>;
