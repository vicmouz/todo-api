"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _winston = require('winston'); var _winston2 = _interopRequireDefault(_winston);

const logger = _winston2.default.createLogger({
  transports: [
    new _winston2.default.transports.File({
      filename: './logs/combined.log',
      timestamp: true,
    }),
  ],
});

const options = {
  from: new Date() - 24 * 60 * 60 * 1000,
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'asc',
  fields: ['message', 'level', 'timestamp'],
};

//
// Find items logged between today and yesterday.
//
logger.query(options, (err, results) => {
  if (err) {
    /* TODO: handle me */
    throw err;
  }
  results.file.forEach(({ timestamp, level, message }) => {
    // console.log(`${timestamp} ${level}: ${message}`);
  });
});

exports. default = logger;
