const express = require('express');

const router = express.Router();

const accountController = require('./src/controllers/accountController')
const clientController = require('./src/controllers/clientController')

router.get('/contas', accountController.getAllAcounts);
router.get('/clientes', clientController.getAllClients);
router.get('/conta/:cod_cliente', accountController.getByAccount);
router.get('/clientes/ativos/:cod_cliente', clientController.getByClient);

module.exports = router;