const express = require('express');

const router = express.Router();

const accountController = require('./src/controllers/accountController')
const clientController = require('./src/controllers/clientController')
const investmentsController = require('./src/controllers/investmentsController')
const { validateDeposit } = require('./src/middlewares/accountMiddleware')
const { validatePurchase } = require('./src/middlewares/investmentsMiddleware')

router.get('/contas', accountController.getAllAcounts);

router.get('/clientes', clientController.getAllClients);

router.get('/conta/:cod_cliente', accountController.getByAccount);

router.get('/clientes/ativos/:cod_cliente', clientController.getByClient);

router.get('/investimentos/compras', investmentsController.getAllSales)

router.get('/assets/ativos/:codAtivo', investmentsController.getByAsset);

router.get('/investimentos', investmentsController.getAllAssets)


router.post('/investimentos/comprar', validatePurchase, investmentsController.createPurchase);

router.post('/investimentos/vender', investmentsController.createSale);

router.post('/conta/deposito', validateDeposit, accountController.createDeposit);

router.post('/conta/saque', accountController.createWithdraw);


module.exports = router;