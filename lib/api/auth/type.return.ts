import { response } from "../../api";

export type login = response<{ sid: string }>;
export type logout = response<{}>;
