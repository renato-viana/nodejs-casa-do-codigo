require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use('/estatico', express.static('src/app/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;
