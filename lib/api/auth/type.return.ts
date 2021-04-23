import { response } from "../../api";

type loginData = { sid: string };
export type login = response<loginData>;
export type logout = response<undefined>;
