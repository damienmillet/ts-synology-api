const errorMessages: Record<
  string,
  Record<string, { code: number; message: string }[]>
> = {
  "COMMON": {
    "ERROR": [
      { code: 100, message: "Unknown error." },
      {
        code: 101,
        message: "No parameter of API, method or version. Invalid params.",
      },
      { code: 102, message: "The requested API does not exist." },
      { code: 103, message: "The requested method does not exist." },
      {
        code: 104,
        message: "The requested version does not support the functionality.",
      },
      { code: 105, message: "The logged in session does not have permission." },
      { code: 106, message: "Session timeout." },
      { code: 107, message: "Session interrupted by duplicate login." },
      { code: 119, message: "SID not found." },
    ],
  },
  "SYNO.API.Auth": {
    "login": [
      { code: 400, message: "No such account or incorrect password." },
      { code: 401, message: "Disabled account." },
      { code: 402, message: "Denied permission." },
      { code: 403, message: "2-factor authentication code required." },
      {
        code: 404,
        message: "Failed to authenticate 2-factor authentication code.",
      },
      {
        code: 406,
        message: "Enforce to authenticate with 2-factor authentication code.",
      },
      { code: 407, message: "Blocked IP source." },
      { code: 408, message: "Expired password cannot change." },
      { code: 409, message: "Expired password." },
      { code: 410, message: "Password must be changed." },
    ],
    "logout": [
      { code: 400, message: "No such account or incorrect password" },
      { code: 401, message: "Account disabled" },
      { code: 402, message: "Permission denied" },
      { code: 403, message: "2-step verification code required" },
      { code: 404, message: "Failed to authenticate 2-step verification code" },
      { code: 407, message: "Blocked IP source." },
    ],
  },
  "SYNO.DownloadStation.Task": {
    "create": [
      { code: 400, message: "File upload failed" },
      { code: 401, message: "Max number of tasks reached" },
      { code: 402, message: "Destination denied" },
      { code: 403, message: "Destination does not exist" },
      { code: 404, message: "Invalid task id" },
      { code: 405, message: "Invalid task action" },
      { code: 406, message: "No default destination" },
      { code: 407, message: "Set destination failed" },
      { code: 408, message: "File does not exist" },
    ],
    "delete": [
      { code: 404, message: "Invalid task id" },
      { code: 405, message: "Invalid task action" },
      { code: 408, message: "File does not exist" },
    ],
    "pause": [
      { code: 404, message: "Invalid task id" },
      { code: 405, message: "Invalid task action" },
      { code: 408, message: "File does not exist" },
    ],
    "resume": [
      { code: 404, message: "Invalid task id" },
      { code: 405, message: "Invalid task action" },
      { code: 408, message: "File does not exist" },
    ],
    "edit": [
      { code: 400, message: "File upload failed" },
      { code: 401, message: "Max number of tasks reached" },
      { code: 402, message: "Destination denied" },
      { code: 403, message: "Destination does not exist" },
      { code: 404, message: "Invalid task id" },
      { code: 405, message: "Invalid task action" },
      { code: 406, message: "No default destination" },
      { code: 407, message: "Set destination failed" },
      { code: 408, message: "File does not exist" },
    ],
    "getinfo": [],
    "list": [],
  },
  "SYNO.FileStation.Favorite": {
    "replace_all": [
      {
        code: 800,
        message:
          "A folder path of favorite folder is already added to user's favorites.",
      },
      {
        code: 801,
        message:
          "A name of favorite folder conflicts with an existing folder path in the user's favorites.",
      },
      { code: 802, message: "There are too many favorites to be added." },
    ],
  },
  "SYNO.FileStation.Upload": {
    "upload": [
      {
        code: 1800,
        message:
          "There is no Content-Length information in the HTTP header or the received size doesn't match the value of Content-Length information in the HTTP header.",
      },
      {
        code: 1801,
        message:
          "Wait too long, no data can be received from client (Default maximum wait time is 3600 seconds).",
      },
      {
        code: 1802,
        message: "No filename information in the last part of file content.",
      },
      { code: 1803, message: "Upload connection is cancelled." },
      {
        code: 1804,
        message: "Failed to upload oversized file to FAT file system.",
      },
      {
        code: 1805,
        message:
          "Can't overwrite or skip the existing file, if no overwrite parameter is given.",
      },
    ],
  },
  // Ajoutez d'autres services et méthodes ici
};

export function getErrorMessage(
  service: string,
  method: string,
  code: number,
): string {
  const serviceErrors = errorMessages[service];
  if (serviceErrors) {
    const methodErrors = serviceErrors[method];
    if (methodErrors) {
      const error = methodErrors.find((err) => err.code === code);
      if (error) {
        return error.message;
      }
      const commonErrors = errorMessages["COMMON"]["ERROR"];
      const commonError = commonErrors.find((err) => err.code === code);
      if (commonError) return commonError.message;
    }
  }
  return "Unknown error";
}
