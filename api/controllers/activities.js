const admin = require('firebase-admin');

module.exports = app => {
  const activitiesDB = app.data.activities;
  const controller = {};

  controller.listActivities = async (req, res) => {
    const todos = admin.firestore().collection('todo');
    console.log('get ');
    const todoList = [];
    const snapshot = await todos.get();
    snapshot.forEach(doc => {
      const { id } = doc;
      const data = doc.data();
      todoList.push({ id, data });
      console.log(doc.id, '=>', doc.data());
    });

    return res.json(todoList);
  };

  controller.createActivity = async (req, res) => {
    const { name } = req.body;
    const todos = admin.firestore().collection('todo');
    console.log(name);
    const data = await todos.add({ name, status: 0 });
    console.log('new dialogue written to database');
    return res.json({ msg: 'success', data });
  };

  controller.updateActivity = async (req, res) => {
    const { activity_id } = req.params;
    const todos = admin.firestore().collection('todo');
    todos.doc(activity_id).update(req.body);
    return res.status(200).json({ msg: 'object updated' });
  };

  controller.removeActivity = async (req, res) => {
    const { activity_id } = req.params;
    const todos = admin.firestore().collection('todo');
    todos.doc(activity_id).delete();
    return res.status(200).json({ msg: 'object removed' });
  };

  return controller;
};
