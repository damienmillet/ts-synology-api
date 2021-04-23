import { response } from "../../../api";

export type siteData = {
  id: number;
  is_updating: boolean;
  title?: string;
  url?: string;
  last_update?: string;
  username?: string;
};

export type listData = {
  offset: number;
  total: number;
  site: site[];
};

export type site = response<siteData>;
export type list = response<listData>;
export type refresh = response<undefined>;
