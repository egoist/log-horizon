const chalk = require('chalk')

// Wrap with 2 spaces because of this issue:
// https://github.com/chalk/wrap-ansi/issues/26
module.exports = {
  progress: chalk.reset.inverse.bold.blue('  WAIT  '),
  success: chalk.reset.inverse.bold.green('  SUCCESS  '),
  error: chalk.reset.inverse.bold.red('  ERROR  '),
  warning: chalk.reset.inverse.bold.yellow('  WARN  ')
}
