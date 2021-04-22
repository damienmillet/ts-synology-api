export type info = {
  [x: string]: { maxVersion: number; minVersion: number; path: string };
};

export type infos = {
  data: info[];
  success: true;
};
