import { response } from "../../api";

export type loginData = { sid: string };
export type login = response<loginData>;
export type logout = response<undefined>;
