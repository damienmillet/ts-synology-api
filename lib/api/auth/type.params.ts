type base = {
  api?: string;
  version?: number;
  method?: string;
  session?: string | string[];
};

export type loginParams = base & {
  account?: string;
  passwd?: string;
  format?: string;
};

export type logoutParams = base & {
  _sid: string | string[] | undefined;
};
