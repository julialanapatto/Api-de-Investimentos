const express = require('express');

const router = express.Router();

const accountController = require('./src/controllers/accountController')
const clientController = require('./src/controllers/clientController')
const investmentsController = require('./src/controllers/investmentsController')
const { validateDeposit, validateWithdraw } = require('./src/middlewares/accountMiddleware')
const { validatePurchase } = require('./src/middlewares/investmentsMiddleware')


router.get('/contas', accountController.getAllAcounts);

router.get('/conta/:codCliente', accountController.getByAccount);


router.get('/clientes', clientController.getAllClients);

router.get('/clientes/ativos/:codCliente', clientController.getByClient);


router.get('/investimentos', investmentsController.getAllAssets)

router.get('/investimentos/compras', investmentsController.getAllPurchases)

router.get('/investimentos/vendas', investmentsController.getAllSales)

router.get('/assets/ativos/:codAtivo', investmentsController.getByAsset);


router.post('/investimentos/comprar', validatePurchase, investmentsController.createPurchase);

router.post('/investimentos/vender',investmentsController.createSale);


router.post('/conta/deposito', validateDeposit, accountController.createDeposit);

router.post('/conta/saque', validateWithdraw, accountController.createWithdraw);


module.exports = router;