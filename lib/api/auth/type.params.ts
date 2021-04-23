type base = {
  api?: string;
  version?: number;
  method?: string;
  session?: string | string[];
  _sid: string | string[] | undefined;
};

export type loginParams = base & {
  account?: string;
  passwd?: string;
  format?: string;
};

export type logoutParams = base;
