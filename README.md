
# log-horizon

[![NPM version](https://img.shields.io/npm/v/log-horizon.svg?style=flat)](https://npmjs.com/package/log-horizon) [![NPM downloads](https://img.shields.io/npm/dm/log-horizon.svg?style=flat)](https://npmjs.com/package/log-horizon) [![CircleCI](https://circleci.com/gh/egoist/log-horizon/tree/master.svg?style=shield&circle-token=d372afd8d560fb9522f85d967ba19e998a8ee321)](https://circleci.com/gh/egoist/log-horizon/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn add log-horizon
```

## Usage

```js
const LogHorizon = require('log-horizon')

const logger = new LogHorizon()
```

Check out the [example code](./examples/_log.js), preview:

<img src="https://cdn.rawgit.com/egoist/93995ac552ac66d38631ed4bff1d7cc1/raw/cf167f27e4033aff5be32115c4c313ebca885703/preview-log-horizon.svg" width="600" alt="preview">

## API

### new LogHorizon(options)

### options

#### options.logLevel

Type: `number`<br>
Default: `3`

- `1`: `error`
- `2`: `warn`
- `3`: `info`
- `4`: `debug`

#### options.debug

Type: `boolean`

A shortcut to set `options.logLevel` to `4`.

#### options.quiet

Type: `boolean`

A shortcut to set `options.logLevel` to `1`.

#### options.logUpdate

Type: `boolean`<br>
Default: `true`

Use `log-update` module instead of `console.log`.

#### options.statusType

Type: `string`<br>
Default: `'emoji'`<br>
Possible values: `'emoji'` `'badge'` `'text'`

### Methods

#### logger.setOptions(options)

#### logger.success(message)

#### logger.error(message)

#### logger.warn(message)

#### logger.debug(message)

#### logger.progress(message)

#### logger.log(message, update = false)

#### logger.status(status, message, update = false)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**log-horizon** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/log-horizon/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
