"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _winston = require('winston'); var _winston2 = _interopRequireDefault(_winston);

exports. default = () => {
  const customSimpleFormat = _winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });
  const logger = _winston2.default.createLogger({
    transports: [
      new _winston2.default.transports.Console({
        format: _winston2.default.format.combine(
          _winston2.default.format.timestamp(),
          customSimpleFormat
        ),
      }),
    ],
  });
  if (process.env.NODE_ENV === 'production') {
    logger.add(
      new _winston2.default.transports.File({
        filename: './logs/combined.log',
        format: _winston2.default.format.combine(
          _winston2.default.format.timestamp(),
          _winston2.default.format.json()
        ),
      })
    );
    logger.add(
      new _winston2.default.transports.File({
        filename: './logs/error.log',
        level: 'error',
        format: _winston2.default.format.combine(
          _winston2.default.format.timestamp(),
          _winston2.default.format.json()
        ),
      })
    );
    // logger.exceptionHandlers(
    //   new winston.transports.File({ filename: './logs/error.log' })
    // );
  }
  // Overwrite some of the build-in console functions
  /*
  console.log = (text, ...rest) => {
    const textFormat = util.format(text, ...rest);
    logger.info(textFormat);
  };
  console.info = (text, ...rest) => {
    const textFormat = util.format(text, ...rest);
    logger.info(textFormat);
  };
  console.error = (text, ...rest) => {
    const textFormat = util.format(text, ...rest);
    logger.error(textFormat);
  };
  console.warn = (text, ...rest) => {
    const textFormat = util.format(text, ...rest);
    logger.warn(textFormat);
  };
  console.debug = (text, ...rest) => {
    const textFormat = util.format(text, ...rest);
    logger.debug(textFormat);
  };
  */
};
