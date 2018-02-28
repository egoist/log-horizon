const LogHorizon = require('..')

module.exports = opts => {
  const logger = new LogHorizon(opts)

  const log = (msg, index) => {
    setTimeout(() => {
      logger.progress(msg)
      if (index === 99) {
        logger.success('Done!')
      } else if (index === 12) {
        logger.error('Something is wrong!')
      } else if (index === 66) {
        logger.warn('Not cool!')
      }
    }, index * 50)
  }

  Array(100)
    .fill(null)
    .map((u, i) => `${i}% Compiling...`)
    .forEach(log)
}
