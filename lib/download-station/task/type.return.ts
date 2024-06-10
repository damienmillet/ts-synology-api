export type detail = {
  completed_time?: number;
  connected_leechers?: number;
  connected_peers?: number;
  connected_seeders?: number;
  create_time?: number;
  total_peers?: number;
  total_pieces?: number;
  unzip_password?: string;
  priority?: number;
  uri?: string;
  waiting_seconds?: number;
  destination?: string;
};

export type file = {
  filename?: string;
  size?: string;
  size_downloaded?: string;
  priority?: string;
};

export type peer = {
  address?: string;
  agent?: string;
  progress?: number;
  speed_download?: number;
  speed_upload?: number;
};

export type tracker = {
  url?: string;
  status?: string;
  update_timer?: number;
  seeds?: number;
  peers?: number;
};

export type transfer = {
  downloaded_pieces?: number;
  size_downloaded?: number;
  size_uploaded?: number;
  speed_download?: number;
  speed_upload?: number;
};

export type task = {
  additional?: {
    detail?: detail;
    transfer?: transfer;
    file?: file;
    tracker?: tracker;
    peer?: peer;
  };
  id: string;
  size: number;
  status: string;
  status_extra?: {
    error_detail?: string;
    unzip_progress?: number;
  };
  title: string;
  type: string;
  username: string;
};

export type list = {
  offset: number;
  tasks: task[];
  total: number;
};

export type id = {
  error: number;
  id: string;
};

export type deleteTask = [id[]];
export type pause = [id[]];
export type resume = [id[]];
export type edit = [id[]];
