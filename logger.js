// Require the framework and instantiate it
const winston = require('winston');
// const newrelicFormatter = require('@newrelic/winston-enricher')(winston);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.json()
    // winston.format.combine(winston.format.label({ label: 'test' }), newrelicFormatter())
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

module.exports.logger = logger;
