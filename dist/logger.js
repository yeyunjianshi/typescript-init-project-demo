'use strict'
const o = {
  log(...o) {
    console.log(o.join(', '))
  },
  warn(...o) {
    console.warn(o.join(', '))
  },
  error(...o) {
    console.error(o.join(', '))
  },
}
module.exports = () => o
