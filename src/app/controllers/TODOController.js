const admin = require('firebase-admin');

class TODOController {
  async store(req, res) {
    try {
      const { todo } = req.body;
      const todos = admin.firestore().collection('todo');
      const data = await todos.add({ todo, status: 0 });
      return res.json({ msg: 'success', data });
    } catch (err) {
      return res
        .status(400)
        .json({ msg: 'Não foi possível cadastrar o todo', error: err });
    }
  }

  async index(req, res) {
    try {
      const todos = admin.firestore().collection('todo');
      const todoList = [];
      const snapshot = await todos.get();
      snapshot.forEach(doc => {
        const { id } = doc;
        const data = doc.data();
        todoList.push({ id, data });
      });

      return res.json(todoList);
    } catch (err) {
      return res
        .status(400)
        .json({ msg: 'Não foi possível buscar os todos', error: err });
    }
  }

  async update(req, res) {
    try {
      const { todo_id } = req.params;
      const todos = admin.firestore().collection('todo');
      todos.doc(todo_id).update(req.body);
      return res.status(200).json({ msg: 'object updated' });
    } catch (err) {
      return res.status(400).json({
        msg: 'Não foi possível atualizar o todo',
        error: err,
      });
    }
  }

  async delete(req, res) {
    try {
      const { todo_id } = req.params;
      const todos = admin.firestore().collection('todo');
      todos.doc(todo_id).delete();
      return res.status(200).json({ msg: 'object removed' });
    } catch (err) {
      return res
        .status(400)
        .json({ msg: 'Não foi possível remover o todo', error: err });
    }
  }
}

export default new TODOController();
