# ts-synology-api

Api for wrappe Syno API wrote in ts, npm package's transpiled in js

- [x] api
  - [x] auth
  - [x] info
- [x] core
  - [x] normal-user
- [ ] download-station
  - [x] info
  - [x] rss
    - [x] site
    - [x] feed
  - [x] schedule
  - [x] statistic
  - [x] task
  - [ ] bt-search

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
