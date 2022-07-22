const express = require('express');

const router = express.Router();
/**
 * @swagger
 *  tags:
 *      name: Account
 *      description: Endpoints de contas,
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          Account:
 *                type: object
 *                required:
 *                      - cod_cliente
 *                      - saldo_conta
 *                properties:
 *                      conta_cliente:
 *                          type: integer
 *                      cod_cliente:
 *                          type: integer
 *                      saldo_conta:
 *                          type: decimal(12,2)
 *                example:
 *                      cod_cliente: 1
 *                      saldo_conta: 1000.00
  */
 /**
  * @swagger
  *  /users:
  *      get:
  *           tags: [Account]
  */


const accountController = require('./src/controllers/accountController')
const clientController = require('./src/controllers/clientController')
const investmentsController = require('./src/controllers/investmentsController');


const { validateDeposit, validateWithdraw } = require('./src/middlewares/accountMiddleware')
const { validatePurchase } = require('./src/middlewares/investmentsMiddleware');
const { validateSale } = require('./src/middlewares/investmentsMiddleware')
const { validateLogin } = require('./src/middlewares/loginMiddleware');
const loginController = require('./src/controllers/loginController');

const { authenticateToken } = require('./src/middlewares/loginMiddleware')

// login

router.post('/login', validateLogin, loginController.login)

// account

router.get('/conta/:codCliente', authenticateToken, accountController.getByAccount);

router.post('/conta/deposito', authenticateToken, validateDeposit, accountController.createDeposit);

router.post('/conta/saque', authenticateToken, validateWithdraw, accountController.createWithdraw);


// assets

router.get('/ativos/:codAtivo', authenticateToken, investmentsController.getByAsset);

router.get('/ativos/clientes/:codCliente', authenticateToken, clientController.getByClient);


router.get('/ativos/compras', authenticateToken, investmentsController.getAllPurchases)

router.get('ativos/vendas', authenticateToken, investmentsController.getAllSales)

// investments

router.get('/investimentos', investmentsController.getAllAssets)

router.post('/investimentos/comprar', authenticateToken, validatePurchase, investmentsController.createPurchase);

router.post('/investimentos/vender',authenticateToken, validateSale, investmentsController.createSale);



module.exports = router;