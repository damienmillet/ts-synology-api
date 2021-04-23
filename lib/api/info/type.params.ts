type base = {
  api?: string;
  version?: number;
  method?: string;
};

export type queryParams = base & {
  query: string[] | string;
};
