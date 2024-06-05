export type feed = {
  download_uri: string;
  external_link: string;
  size: string;
  time: number;
  title: string;
};

export type list = {
  offset: number;
  total: number;
  feeds: feed[];
};
