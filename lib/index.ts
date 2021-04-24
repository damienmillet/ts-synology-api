import Auth from "./api/auth";
import Info from "./api/info";
import NormalUser from "./core/normal-user";
import Feed from "./download-station/rss/feed";
import Site from "./download-station/rss/site";
import Schedule from "./download-station/schedule";
import Statistic from "./download-station/statistic";
import Task from "./download-station/task";
import InfoDS from "./download-station/info";

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
};

export default Syno;
