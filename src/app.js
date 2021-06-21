import './bootstrap';

import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import Youch from 'youch';
import 'express-async-errors';
import routes from './routes';

// import reqRes from './app/middlewares/intercept';

class App {
  constructor() {
    global.__basedir = `${__dirname}/..`;
    process.env.TZ = 'America/Recife';

    this.server = express();

    this.app = http.createServer(this.server);

    this.middlewares();
    this.routes();
    this.exceptionHandle();
  }

  middlewares() {
    this.server.use(helmet());
    this.server.use(cors({ origin: true }));

    this.server.use(express.json());
  }

  routes() {
    this.server.use(`/api/v${process.env.API_VERSION}`, routes);
  }

  exceptionHandle() {
    this.server.use(async (err, req, res, next) => {
      const { error } = await new Youch(err, req).toJSON();
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
export default new App().app;
