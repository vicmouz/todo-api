"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('./bootstrap');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _youch = require('youch'); var _youch2 = _interopRequireDefault(_youch);
require('express-async-errors');
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

// import reqRes from './app/middlewares/intercept';

class App {
  constructor() {
    global.__basedir = `${__dirname}/..`;
    process.env.TZ = 'America/Recife';

    this.server = _express2.default.call(void 0, );

    this.app = _http2.default.createServer(this.server);

    this.middlewares();
    this.routes();
    this.exceptionHandle();
  }

  middlewares() {
    this.server.use(_helmet2.default.call(void 0, ));
    this.server.use(_cors2.default.call(void 0, { origin: true }));

    this.server.use(_express2.default.json());
  }

  routes() {
    this.server.use(`/api/v1`, _routes2.default);
  }

  exceptionHandle() {
    this.server.use(async (err, req, res, next) => {
      const { error } = await new (0, _youch2.default)(err, req).toJSON();
      if (error.name === 'ErroHandleLib') {
        const { message, status } = error;
        return res.status(status || 500).json({
          error: message,
        });
      }

      if (process.env.NODE_ENV === 'development') {
        return res.status(500).json(error);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}
exports. default = new App().app;
