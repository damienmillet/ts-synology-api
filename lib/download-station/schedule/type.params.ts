type base = {
  api?: string;
  version?: number;
  method?: string;
  _sid: string | string[] | undefined;
};

export type config = {
  enabled?: boolean;
  emule_enabled?: boolean;
};

export type getConfigParams = base;
export type setConfigParams = base & config;
