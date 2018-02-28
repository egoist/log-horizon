const prompts = require('prompts')
const log = require('./_log')

prompts.prompt({
  type: 'select',
  name: 'value',
  message: 'Pick status type',
  choices: [
      { title: 'emoji', value: 'emoji' },
      { title: 'badge', value: 'badge' },
      { title: 'text', value: 'text' }
  ],
  initial: 0
}).then(res => {
  log({
    statusType: res.value
  })
})
