import { response } from "../../../api";

export type getData = { auth_key: string };
export type get = response<getData>;
export type grant = response<undefined>;
