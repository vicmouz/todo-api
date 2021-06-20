import cors from 'cors';

const admin = require('firebase-admin');
const app = require('./config/express')();
const serviceAccount = require('./serviceAccountKey.json');

const port = app.get('port');
// initialize admin SDK using serciceAcountKey
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
