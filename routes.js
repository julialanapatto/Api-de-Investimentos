const express = require('express');

const router = express.Router();

const accountController = require('./src/controllers/accountController')

router.get('/contas', accountController.getAll);

module.exports = router;