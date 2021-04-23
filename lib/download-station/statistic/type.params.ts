type base = {
  api?: string;
  version?: number;
  method?: string;
  _sid: string | string[] | undefined;
};

export type infoParams = base;
