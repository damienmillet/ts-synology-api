import { response } from "../../api";

export type infoData = {
  speed_download: number;
  speed_upload: number;
  emule_speed_download: number;
  emule_speed_upload: number;
};

export type info = response<infoData>;
