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

## How to test

``` shell

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
    # run again ur app
    npm run dev
    # next ll detect ur tsconfig file and autofonfigure him
    # create ur .env file with ur config
    # create ur first api file in the api folder and Enjoy 😀
    
```
