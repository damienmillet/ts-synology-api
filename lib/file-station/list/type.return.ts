import { response } from "../../api";

export type acl = {
  append: boolean;
  del: boolean;
  exec: boolean;
  read: boolean;
  write: boolean;
};

export type advRight = {
  disable_download: boolean;
  disable_list: boolean;
  disable_modify: boolean;
};

export type volumeStatus = {
  freespace: number;
  totalspace: number;
  readonly: boolean;
};

export type sharedFolderPerm = {
  share_right: string;
  posix: number;
  adv_right: advRight;
  acl_enable: boolean;
  is_acl_mode: boolean;
  acl: acl;
};

export type time = {
  atime: number;
  mtime: number;
  ctime: number;
  crtime: number;
};

export type owner = {
  user: string;
  group: string;
  uid: number;
  gid: number;
};

export type sharedFolderAdditional = {
  real_path: string;
  owner: owner;
  time: time;
  perm: sharedFolderPerm;
  mount_point_type: string;
  volume_status: volumeStatus;
};

export type sharedFolder = {
  path: string;
  name: string;
  additional: sharedFolderAdditional;
};

export type filePerm = {
  posix: number;
  is_acl_mode: boolean;
  acl: acl;
};

export type fileAdditional = {
  real_path: string;
  size: number;
  owner: owner;
  time: time;
  perm: filePerm;
  mount_point_type: string;
  type: string;
};

export type file = {
  path: string;
  name?: string;
  isdir?: boolean;
  children?: listData;
  additional?: fileAdditional;
  code?: number;
};

export type listShareData = {
  total: number;
  offset: number;
  shares: sharedFolder[];
};

export type listData = {
  total: number;
  offset: number;
  files: file[];
};

export type infoData = { files: file[] };

export type listShare = response<listShareData>;
export type list = response<listData>;
export type info = response<infoData>;
