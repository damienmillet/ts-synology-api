import * as BTSearch from "./services/download-station/bt-search";
import * as APIAuth from "./services/api/auth";
import * as APIInfo from "./services/api/info";
import * as CoreNormalUser from "./services/core/normal-user";
import * as CoreUser from "./services/core/user";
import * as DSMInfo from "./services/dsm/info";
import * as FileStationInfo from "./services/file-station/info";
import * as FileStationList from "./services/file-station/list";
import * as DownloadStationInfo from "./services/download-station/info";
import * as DownloadStationTask from "./services/download-station/task";

const Index = {
  API: {
    Auth: APIAuth,
    Info: APIInfo,
  },
  DownloadStation: {
    BTSearch,
    Info: DownloadStationInfo,
    Task: DownloadStationTask,
  },
  Core: {
    NormalUser: CoreNormalUser,
    User: CoreUser,
  },
  DSM: {
    Info: DSMInfo,
  },
  FileStation: {
    Info: FileStationInfo,
    List: FileStationList,
  },
};

export default Index;
