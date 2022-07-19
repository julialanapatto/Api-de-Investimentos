const express = require('express');

const routes = require('./routes')

const app = express();
app.use(express.json());

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(routes);

module.exports = app;