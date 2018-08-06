const irc = require('irc-upd')

const client = new irc.Client('irc.anarchyplanet.org', 'jtest', {
  debug: true,
  showErrors: true,
  autoConnect: false,
  selfSigned: true,
  channels: ['#anarchyBots'],
})

client.addListener('message', function(from, to, message) {
  console.log(from + ' => ' + to + ': ' + message)
})

client.addListener('error', function(message) {
  console.log('error: ', message)
})

// client.addListener('raw', message => {
//     console.log(message)
// })

client.addListener('invite', (channel, from, message) => {
  console.log(channel, from, message)
})

client.connect()
