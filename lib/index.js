const logUpdate = require('log-update')
const getIcons = require('./icons')

module.exports = class Logger {
  static create(options) {
    return new Logger(options)
  }

  constructor(options) {
    this.setOptions(options)
  }

  setOptions(options) {
    this.options = Object.assign({
      logLevel: 3,
      logUpdate: true,
      statusType: 'emoji'
    }, this.options, options)

    if (this.options.debug) {
      this.options.logLevel = 4
    } else if (this.options.quiet) {
      this.options.logLevel = 1
    }

    this.icons = getIcons(this.options.statusType)
  }

  clear() {
    if (this.options.logUpdate) {
      logUpdate.clear()
    }
  }

  write(message, persistent = false) {
    if (persistent) {
      this.clear()
      return console.log(message)
    }

    if (this.options.logUpdate) {
      logUpdate(message)
    } else {
      console.log(message)
    }
  }

  // Debug message
  // Always persisted
  debug(message) {
    if (this.options.logLevel < 4) {
      return
    }

    this.write(message, true)
  }

  // Normal log
  // Persist by default
  log(message, update = false) {
    if (this.options.logLevel < 3) {
      return
    }

    this.write(message, !update)
  }

  // Warn status
  warn(message) {
    if (this.options.logLevel < 2) {
      return
    }

    this.status(this.icons.warning, message)
  }

  // Error status
  error(err) {
    if (this.options.logLevel < 1) {
      return
    }

    if (typeof err === 'string') {
      return this.status(this.icons.error, err)
    }

    if (err instanceof Error) {
      this.status(this.icons.error, err.stack)
    }
  }

  progress(message) {
    this.status(this.icons.progress, message, true)
  }

  success(message) {
    this.status(this.icons.success, message)
  }

  // Status message should be persisted
  // Unless `update` is set
  // Mainly used in `.progress`
  status(icon, message, update = false) {
    if (this.options.logLevel < 3) {
      return
    }

    const status = icon + ' '

    if (update && this.options.logUpdate) {
      return logUpdate(status + message)
    }

    this.clear()
    console.log(status + message)
  }
}
