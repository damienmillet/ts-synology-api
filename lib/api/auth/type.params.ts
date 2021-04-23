export type loginParams = {
  api?: string;
  version?: number;
  method?: string;
  account?: string;
  passwd?: string;
  session?: string | string[];
  format?: string;
};

export type logoutParams = {
  api?: string;
  version?: number;
  method?: string;
  session?: string;
  _sid: string | string[] | undefined;
};
