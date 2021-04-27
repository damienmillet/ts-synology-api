# ts-synology-api

Api to wrap Syno API wrote in ts, npm package's transpiled in js

```typescript
import Syno from "ts-synology-api";
```

## Coverage

- [x] api
  - [x] auth
    - [x] key
  - [x] info
- [x] core
  - [x] normal-user
    - [x] login-notify
- [ ] download-station
  - [x] info
  - [x] rss
    - [x] site
    - [x] feed
  - [x] schedule
  - [x] statistic
  - [x] task
  - [ ] bt-search
- [x] dsm
  - [x] info
- [x] file-station
  - [x] info
  - [x] list

## Configuration

```ini
# .env for process.env global
SYNOLOGY_URI="http[s]://ip:port"
SYNOLOGY_USER="user"
SYNOLOGY_PASS="passwd"
```

## How Api was build

- repository 're real path except when 're parameters
- api request 're save in Index
- return types 're optionals and save in Type.return
- params types 're optionals and save in Type.params
- body params types 're save in Type.body
- default params 're undefined if needed, they're update with explicite params

## How to test

```shell

    mkdir test-ts-synology-api && cd test-ts-synology-api
    # globaly install next and typescript
    npm i -g create-next-app typescript
    # create next app in the current folder
    create-next-app ./
    # create typescript config file
    tsc --init
    # run ur next app
    npm run dev
    # he tell u to install some dependencies
    npm install --save-dev typescript @types/react
    # clean ur app
    rm ./pages/**/*.js && rm -rf ./public ./styles
    # create ur .env file with ur config
    # run again ur app
    npm run dev
    # next ll detect ur tsconfig file and autofonfigure him
    # create ur first api file in the api folder and Enjoy 😀

```

## Basic route

```typescript
// pages/api/info/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Syno from "ts-synology-api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "GET") {
    return res.status(405).end("Method Not Allowed");
  }

  const query = await Syno.Api.Info.query();

  try {
    if (query.success && query.error?.code) {
      res.status(query.error?.code).json(query.error);
    }
    res.status(200).json(query.data);
  } catch (error) {
    console.error(error);
    res.status(500).end("");
  }
};
```

```typescript
// pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Syno from "ts-synology-api";
import { userParams } from "ts-synology-api/dist/core/normal-user/type.params";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "GET") {
    return res.status(405).end("Method Not Allowed");
  }

  const params: userParams = { _sid: (await Syno.Api.Auth.login()).data?.sid };

  const user = await Syno.Core.NormalUser.getUser(params);

  try {
    if (!user.success && user.error?.code) {
      const code = Syno.codeError(data);
      return res.status(code).json(user.error?.message || { user });
    }
    res.status(200).json(user.data);
  } catch (error) {
    console.error(error);
    res.status(500).end("");
  } finally {
    await Syno.Api.Auth.logout({ _sid: params._sid });
  }
};
```
