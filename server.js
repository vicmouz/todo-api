const Firebase = require('firebase');
const app = require('./config/express')();

const port = app.get('port');
const config = {
  apiKey: 'AIzaSyBFsmkb0kJYdctnvkMNK2tMfjNax4gM5E4',
  authDomain: 'todo-list-945df.firebaseapp.com',
  databaseURL: 'https://todo-list-945df-default-rtdb.firebaseio.com',
  storageBucket: 'todo-list-945df.appspot.com',
};

Firebase.initializeApp(config);
// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
