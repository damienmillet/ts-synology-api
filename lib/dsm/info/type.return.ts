import { response } from "../../api";

export type infoData = {
  codepage: string;
  model: string;
  ram: number;
  serial: string;
  temperature: number;
  temperature_warn: false;
  time: string;
  uptime: number;
  version: string;
  version_string: string;
};

export type info = response<infoData>;
