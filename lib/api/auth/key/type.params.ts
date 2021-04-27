type base = {
  api?: string;
  version?: number;
  method?: string;
};

export type getParams = base & { _sid?: string | undefined };
export type grantParams = base & {};
