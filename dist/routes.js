"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TODOController = require('./app/controllers/TODOController'); var _TODOController2 = _interopRequireDefault(_TODOController);

const routes = new (0, _express.Router)();
routes.get('/', (req, res) => {
  res.send('Server started');
});
routes.post('/new_todo', _TODOController2.default.store);
routes.get('/todos', _TODOController2.default.index);
routes.put('/todos/update/:todo_id', _TODOController2.default.update);
routes.delete('/todos/remove/:todo_id', _TODOController2.default.delete);

exports. default = routes;
