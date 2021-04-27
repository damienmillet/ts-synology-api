import { response } from "../../api";

export type item = { gid: number };
export type infoData = {
  enable_list_usergrp: boolean;
  hostname: string;
  is_manager: boolean;
  items: item[];
  support_file_request: boolean;
  support_sharing: boolean;
  support_vfs: boolean;
  support_virtual: {
    enable_iso_mount: boolean;
    enable_remote_mount: boolean;
  };
  support_virtual_protocol: string[];
  system_codepage: string;
  uid: number;
};

export type info = response<infoData>;
