'use strict'
Object.defineProperty(exports, '__esModule', { value: !0 })
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
;(exports.add = (o, e) => o + e), (exports.default = () => o)
