// const firebase = require('firebase');

// const config = {
//   apiKey: 'AIzaSyBFsmkb0kJYdctnvkMNK2tMfjNax4gM5E4',
//   authDomain: 'todo-list-945df.firebaseapp.com',
//   databaseURL: 'https://todo-list-945df-default-rtdb.firebaseio.com',
//   storageBucket: 'todo-list-945df.appspot.com',
// };
// firebase.initializeApp(config);
class ActivitiesController {
  async index(req, res) {
    const { name } = req.body;
    const data = firebase
      .database()
      .ref('users')
      .set({
        name,
        status: 0,
      });
    return res.json({ data });
  }

  async update(req, res) {}

  async store(req, res) {}

  async destroy(req, res) {}
}

export default new ActivitiesController();
