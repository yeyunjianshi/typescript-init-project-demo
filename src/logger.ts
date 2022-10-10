type Logger = {
  log: (...msg: string[]) => void
  warn: (...msg: string[]) => void
  error: (...msg: string[]) => void
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
