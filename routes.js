const express = require('express');

const router = express.Router();

const accountController = require('./src/controllers/accountController')
const clientController = require('./src/controllers/clientController')
const investmentsController = require('./src/controllers/investmentsController');


const { validateDeposit, validateWithdraw } = require('./src/middlewares/accountMiddleware')
const { validatePurchase } = require('./src/middlewares/investmentsMiddleware');
const { validateLogin } = require('./src/middlewares/loginMiddleware');
const loginController = require('./src/controllers/loginController');

const { authenticateToken } = require('./src/middlewares/loginMiddleware')


router.get('/contas', authenticateToken, accountController.getAllAcounts);

router.get('/conta/:codCliente', authenticateToken, accountController.getByAccount);


router.get('/clientes', authenticateToken, clientController.getAllClients);

router.get('/clientes/ativos/:codCliente', authenticateToken, clientController.getByClient);


router.get('/investimentos', authenticateToken, investmentsController.getAllAssets)

router.get('/investimentos/compras', authenticateToken, investmentsController.getAllPurchases)

router.get('/investimentos/vendas', authenticateToken, investmentsController.getAllSales)

router.get('/assets/ativos/:codAtivo', authenticateToken, investmentsController.getByAsset);


router.post('/investimentos/comprar', authenticateToken, validatePurchase, investmentsController.createPurchase);

router.post('/investimentos/vender', authenticateToken, investmentsController.createSale);


router.post('/conta/deposito', authenticateToken, validateDeposit, accountController.createDeposit);

router.post('/conta/saque', authenticateToken, validateWithdraw, accountController.createWithdraw);

router.post('/login', validateLogin, loginController.login)


module.exports = router;