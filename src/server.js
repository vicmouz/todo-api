/* eslint-disable prefer-template */
import app from './app';
import './bootstrap';
const serviceAccount = require('./config/serviceAccountKey.json')
const admin = require('firebase-admin');

// eslint-disable-next-line no-path-concat
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
