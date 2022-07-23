const express = require('express');
const router = express.Router();

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

/**
 * @swagger
 *  tags:
 *    name: Login
 *    description: Endpoint de login,
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      Login:
  *        type: object
  *        required:
  *          - email
  *          - senha
  *        properties:
  *          email:
  *            type: string
  *          senha:
  *            type: string
  *        example:
  *          email: seuemail@email.com
  *          senha: bGlhZW1haWxAZ21haWwuY29tIiwiaWF0IjoxNjU4NTMwNTMyLCJleHAiOjE2NTkw
  */
 /**
/**
 * @swagger
  *  components:
  *    schemas:
  *      Conta:
  *        type: object
  *        required:
  *          - codCliente
  *          - saldo
  *        properties:
  *          codCliente:
  *            type: integer
  *          saldo:
  *            type: decimal(12,2)
  *        example:
  *          codCliente: 1
  *          saldo: 44084.51
  */
 /**
  * @swagger
  *  /login:
  *    post:
  *      tags: [Login]
  *      description: Endpoint permite o login do usuário e autenticação
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Login'
  */

router.post('/login', validateLogin, loginController.login)

// account

/**
  * @swagger
  *  /conta/{codCliente}:
  *    get:
  *      tags: [Conta]
  *      description: Endpoint permite verificar o saldo pelo código do cliente
  *      parameters:
  *        - in: path
  *          name: codCliente
  *          type: integer
  *          required: true
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Conta'
  */


router.get('/conta/:codCliente', authenticateToken, accountController.getByAccount);


/**
 * @swagger
  *  components:
  *    schemas:
  *      Deposito:
  *        type: object
  *        required:
  *          - codCliente
  *          - valor
  *        properties:
  *          codCliente:
  *            type: integer
  *          valor:
  *            type: decimal(12,2)
  *        example:
  *          codCliente: 1
  *          valor: 40
  */
 /**
  * @swagger
  *  /conta/deposito:
  *    post:
  *      tags: [Deposito]
  *      description: Endpoint para criar um depósito bancário
  *      security:
  *        - bearerAuth: []
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              $ref: '#/components/schemas/Deposito'
  *      responses:
  *        201:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Deposito'
  */

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