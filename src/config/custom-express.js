require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;
