type Logger = {
  log: (...msg: string[]) => any
  warn: (...msg: string[]) => any
  error: (...msg: string[]) => any
}

const logger: Logger = {
  log(...msg: string[]) {
    console.log(msg.join(', '))
  },
  warn(...msg: string[]) {
    console.warn(msg.join(', '))
  },
  error(...msg: string[]) {
    console.error(msg.join(', '))
  },
}

export default logger
