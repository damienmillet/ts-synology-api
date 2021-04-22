import Auth from "./api/auth";
import Info from "./api/info";
import NormalUser from "./core/normal-user";
import Task from "./download-station/task";

const Syno = {
  Api: {
    Auth: Auth,
    Info: Info,
  },
  Core: { NormalUser: NormalUser },
  DownloadStation: {
    Task: Task,
  },
};

export default Syno;
