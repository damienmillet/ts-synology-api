import { response } from "../../../api";

export type feedData = {
  download_uri: string;
  external_link: string;
  size: string;
  time: number;
  title: string;
};

export type listData = {
  offset: number;
  total: number;
  feeds: feed[];
};

export type feed = response<feedData>;
export type list = response<listData>;
