#!/usr/bin/env node

const Logger = require('../dist/bundle')
const logger = Logger()
const process = require('process')

logger.log(process.cwd())
