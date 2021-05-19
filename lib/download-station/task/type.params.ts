type base = {
  api?: string;
  version?: number;
  method?: string;
  _sid: string | string[] | undefined;
};

export type listParams = base & {
  offset?: number;
  limit?: number;
  additional?: string;
};

export type infoParams = base & {
  id: string | undefined;
  additional?: string;
};
export type createParams = base & {
  uri?: string | undefined | string[];
  username?: string | string[];
  password?: string | string[];
  unzip_password?: string | string[];
  destination?: string | string[];
};
export type deleteParams = base & {
  id: string | undefined;
  force_complete?: boolean;
};
export type pauseParams = base & {
  id: string | undefined;
};
export type resumeParams = base & {
  id: string | undefined;
};
export type editParams = base & {
  id: string | undefined;
  destination?: string;
};
