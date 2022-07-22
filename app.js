const express = require('express');

const routes = require('./routes')

const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('./src/docs/swagger.config');
const swaggerUI = require('swagger-ui-express')

app.use(bodyParser.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(routes);

module.exports = app;