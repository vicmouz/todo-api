"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable prefer-template */
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
require('./bootstrap');
var _serviceAccountKeyjson = require('./config/serviceAccountKey.json'); var _serviceAccountKeyjson2 = _interopRequireDefault(_serviceAccountKeyjson);

const admin = require('firebase-admin');

// eslint-disable-next-line no-path-concat
admin.initializeApp({
  credential: admin.credential.cert(_serviceAccountKeyjson2.default),
});
const port = process.env.PORT || 3333;
_app2.default.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
