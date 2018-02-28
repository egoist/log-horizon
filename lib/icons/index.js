const emoji = require('./emoji')
const badge = require('./badge')
const text = require('./text')

const icons = {
  emoji,
  badge,
  text
}

module.exports = type => icons[type] || icons.emoji
