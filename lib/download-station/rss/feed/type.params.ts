type base = {
  api?: string;
  version?: number;
  method?: string;
  _sid: string | string[] | undefined;
};

export type listParams = base & {
  offset?: number;
  limit?: number;
  id: string | undefined;
};
