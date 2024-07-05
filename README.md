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
  - [ ] rss
    - [ ] site
    - [ ] feed
  - [ ] schedule
  - [ ] statistic
  - [x] task
  - [ ] bt-search
- [ ] dsm
  - [x] info
- [ ] file-station
  - [x] info
  - [x] list
- [ ] create a script to get all definitions from a syno to update.

## Configuration

```ini
# .env for process.env global
SYNOLOGY_URL="http[s]://ip:port"
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
## Definition

INFO : `/var/packages/DownloadStation` - version
API : `/var/packages/DownloadStation/target/webapi` - api's folder
LIB : `/var/packages/DownloadStation/target/webapi` - definition json
CGI : `/var/packages/DownloadStation/target/webapi` - compiled
SO : `/var/packages/DownloadStation/target/webapi` - compiled

# INFO
Api's url was updated to respond to the /entry.cgi 
root: /usr/syno/synoman
