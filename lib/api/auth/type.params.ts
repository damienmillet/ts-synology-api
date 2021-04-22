export type loginParams = {
  api?: string;
  version?: number;
  method?: string;
  account?: string | undefined;
  passwd?: string | undefined;
  session?: string | string[] | undefined;
  format?: string;
};

export type logoutParams = {
  api?: string;
  version?: number;
  method?: string;
  session?: string;
  _sid?: string | string[] | undefined;
};
