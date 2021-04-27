import { response } from "../../../api";

export type checkData = {
  need_notify: boolean;
};

export type check = response<checkData>;
