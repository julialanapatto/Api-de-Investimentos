const express = require('express');

const router = express.Router();

const accountController = require('./src/controllers/accountController')
const clientController = require('./src/controllers/clientController')

router.get('/contas', accountController.getAllAcounts);
router.get('/clientes', clientController.getAllClients)

module.exports = router;