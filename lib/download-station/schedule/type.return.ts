import { response } from "../../api";

export type configData = {
  enabled?: boolean;
  emule_enabled?: boolean;
};

export type config = response<configData>;
export type setConfig = response<undefined>;
