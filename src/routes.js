import { Router } from 'express';
import TODOController from './app/controllers/TODOController';

const routes = new Router();
routes.get('/', (req, res) => {
  res.send('Server started');
});
routes.post('/new_todo', TODOController.store);
routes.get('/todos', TODOController.index);
routes.put('/todos/update/:todo_id', TODOController.update);
routes.delete('/todos/remove/:todo_id', TODOController.delete);

export default routes;
