import { Router } from 'express';
import ActivitiesController from '../controllers/ActivitiesController';

const routes = new Router();
routes.get('/', (req, res) => {
  res.send('Server started');
});

routes.get('/activities', ActivitiesController.index);

export default routes;
