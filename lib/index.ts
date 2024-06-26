import Auth from "./api/auth";
import Info from "./api/info";
import NormalUser from "./core/normal-user";
import Feed from "./download-station/rss/feed";
import Site from "./download-station/rss/site";
import Schedule from "./download-station/schedule";
import Statistic from "./download-station/statistic";
import Task from "./download-station/task";
import InfoDS from "./download-station/info";
import InfoDSM from "./dsm/info";
import InfoFS from "./file-station/info";
import List from "./file-station/list";

const Syno = {
  Api: {
    Auth: Auth,
    Info: Info,
  },
  Core: { NormalUser: NormalUser },
  DownloadStation: {
    Info: InfoDS,
    Rss: {
      Feed: Feed,
      Site: Site,
    },
    Schedule: Schedule,
    Statistic: Statistic,
    Task: Task,
  },
  Dsm: {
    Info: InfoDSM,
  },
  FileStation: {
    Info: InfoFS,
    List: List,
  },
};

export default Syno;
