export type site = {
  id: number;
  is_updating: boolean;
  title?: string;
  url?: string;
  last_update?: string;
  username?: string;
};

export type list = {
  offset: number;
  total: number;
  site: site[];
};

export type refresh = undefined;
