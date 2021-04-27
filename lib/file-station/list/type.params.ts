type base = {
  api?: string;
  version?: number;
  method?: string;
  session?: string | string[];
};

export type listShareParams = base & {
  offset?: number;
  limit?: number;
  sort_by?: string; // name, user, group, mtime, atime, ctime, crtime or posix
  sort_direction?: string; // asc, desc
  onlywritable?: boolean;
  additional?: string; // real_path, owner, time, perm, mount_point_type, sync_share, or volume_status
};

export type listParams = base & {
  folder_path?: string;
  offset?: number;
  limit?: number;
  sort_by?: string; // name, user, group, mtime, atime, ctime, crtime or posix
  sort_direction?: string; // asc, desc
  pattern?: string;
  filetype?: string; // file, dir or all
  goto_path?: string;
  additional?: string; // real_path, owner, time, perm, mount_point_type, sync_share, or volume_status
};

export type getInfoParams = base & {
  path?: string;
  additional?: string; // real_path, size, owner, time, perm, type or mount_point_type
};
