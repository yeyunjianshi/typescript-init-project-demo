define(function () {
  'use strict'

  const logger = {
    log(...msg) {
      console.log(msg.join(', '))
    },
    warn(...msg) {
      console.warn(msg.join(', '))
    },
    error(...msg) {
      console.error(msg.join(', '))
    },
  }

  var main = () => {
    return logger
  }

  return main
})
