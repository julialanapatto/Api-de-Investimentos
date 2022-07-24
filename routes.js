const express = require('express');
const router = express.Router();

const accountController = require('./src/controllers/accountController')
const clientController = require('./src/controllers/clientController')
const investmentsController = require('./src/controllers/investmentsController');
const loginController = require('./src/controllers/loginController');


const { validateDeposit, validateWithdraw } = require('./src/middlewares/accountMiddleware')
const { validatePurchase } = require('./src/middlewares/investmentsMiddleware');
const { validateSale } = require('./src/middlewares/investmentsMiddleware')
const { validateLogin } = require('./src/middlewares/loginMiddleware');
const { authenticateToken } = require('./src/middlewares/loginMiddleware')

// Swagger Login
/**
 * @swagger
 *  tags:
 *    name: Login
 *    description: Endpoint de login
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
  *          email: juliaemail@gmail.com
  *          senha: $3b111$D4bHgG3ATHy8e53pPqY48a91Yo.day/HP47qpPAASq0JpHPp8P0Al.
  */
/**
 * @swagger
  *  components:
  *    schemas:
  *      token:
  *        type: object
  *        required:
  *          - token
  *        properties:
  *          token:
  *            type: object
  *        example:
  *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJub21lIjoiUm9iZXJ0byIsInNvYnJlbm9tZSI6IlNvdXNhIiwiZW1haWwiOiJyb2JlcnRvc291c2FAZ21haWwuY29tIiwiaWF0IjoxNjU4NTIxNTYwLCJleHAiOjE2NTkxMjYzNjB9. 0tdUYr5wbV6Oo3jUGCmDGd-EO4ZYCGE1tH9d_-vjTEk"
  */
 /**
  * @swagger
  *  /login:
  *    post:
  *      tags: [Login]
  *      description: Endpoint permite o login do usuário e autenticação
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              $ref: '#/components/schemas/Login'
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/token'
  */
router.post('/login', validateLogin, loginController.login)

// Swagger Conta
/**
 * @swagger
 *  tags:
 *    name: Conta
 *    description: Endpoint de conta bancária
 */
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
  *            type: string
  *        example:
  *          codCliente: 1
  *          saldo: 44084.51
  */
/**
  * @swagger
  *  /conta/{codCliente}:
  *    get:
  *      tags: [Conta]
  *      description: Endpoint permite verificar o saldo pelo código do cliente
  *      security:
  *        - bearerAuth: []
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

// Swagger Deposit
/**
 * @swagger
 *  tags:
 *    name: Deposito
 *    description: Endpoint de conta bancária - depósito
 */
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

// Swagger Saque
/**
 * @swagger
 *  tags:
 *    name: Saque
 *    description: Endpoint de conta bancária - Saque
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      Saque:
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
  *  /conta/saque:
  *    post:
  *      tags: [Saque]
  *      description: Endpoint para criar um saque bancário
  *      security:
  *        - bearerAuth: []
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              $ref: '#/components/schemas/Saque'
  *      responses:
  *        201:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Saque'
  */
router.post('/conta/saque', authenticateToken, validateWithdraw, accountController.createWithdraw);

// Swagger Ativos
/**
 * @swagger
 *  tags:
 *    name: Ativos
 *    description: Endpoint de ativos
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      Ativos:
  *        type: object
  *        required:
  *          - codAtivo
  *          - qtdeAtivo
  *          - valor
  *        properties:
  *          codAtivo:
  *            type: integer
  *          qtdeAtivo:
  *            type: integer
  *          valor: decimal(12,2)
  *        example:
  *          codAtivo: 1
  *          qtdeAtivo: 100
  *          valor: 35
  */
  /**
  * @swagger
  *  /ativos/{codAtivo}:
  *    get:
  *      tags: [Ativos]
  *      description: Endpoint permite verificar ativos pelo código pelo código do ativo
  *      security:
  *        - bearerAuth: []
  *      parameters:
  *        - in: path
  *          name: codAtivo
  *          type: integer
  *          required: true
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Ativos'
  */
router.get('/ativos/:codAtivo', authenticateToken, investmentsController.getByAsset);

// Swagger Ativos
/**
 * @swagger
 *  tags:
 *    name: Clientes
 *    description: Endpoint de clientes
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      Clientes:
  *        type: object
  *        required:
  *          - codCliente
  *          - codAtivo
  *          - qtdeAtivo
  *          - valor
  *        properties:
  *          codCliente:
  *            type: integer
  *          codAtivo:
  *            type: integer
  *          qtdeAtivo:
  *            type: string
  *          valor: decimal(12,2)
  *        example:
  *          codCliente: 1
  *          codAtivo: 1
  *          qtdeAtivo: "9"
  *          valor: 35
  */
  /**
  * @swagger
  *  /ativos/clientes/{codCliente}:
  *    get:
  *      tags: [Clientes]
  *      description: Endpoint permite verificar ativos do cliente pelo código do cliente
  *      security:
  *        - bearerAuth: []
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
  *                $ref: '#/components/schemas/Clientes'
  */
router.get('/ativos/clientes/:codCliente', authenticateToken, clientController.getByClient);

// Swagger Transações de Investimentos
/**
 * @swagger
 *  tags:
 *    name: Investimentos
 *    description: Endpoint de transações de investimentos
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      Investimentos:
  *        type: object
  *        required:
  *          - codAtivo
  *          - ativo
  *          - tiker
  *          - valor
  *          - qtdeAtivoMax
  *          - qtdeInvestida
  *        properties:
  *          codAtivo:
  *            type: integer
  *          ativo:
  *            type: string
  *          tiker:
  *            type: string
  *          valor:
  *            type: decimal(12,2)
  *          qtdeAtivoMax:
  *            type:integer
  *          qtdeInvestida: string
  *        example:
  *          codAtivo: 2
  *          acao: "ELETROBRAS ON"
  *          tiker: "ELET3"
  *          valor: 44
  *          qtdeAtivoMax: 10000
  *          qtdeAtivo: 20000
  *          qtdeInvestida: "59"
  */
  /**
  * @swagger
  *  /investimentos:
  *    get:
  *      tags: [Investimentos]
  *      description: Endpoint permite verificar todas as informações sobre  os ativos incluindo informações da quantidade investida em cada ação
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Investimentos'
  */
   router.get('/investimentos', investmentsController.getAllAssets)

// Swagger Transações compra de ativos
/**
 * @swagger
 *  tags:
 *    name:  Extrato Compra
 *    description: Endpoint que registra todas as compras de ativos
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      ExtratoCompra:
  *        type: object
  *        required:
  *          - id
  *          - codCliente
  *          - codAtivo
  *          - qtdeComprada
  *        properties:
  *          id:
  *            type: integer
  *          codCliente:
  *            type: integer
  *          codAtivo:
  *            type: integer
  *          qtdeComprada:
  *            type: integer
  *        example:
  *          id: 8
  *          codCliente: 1
  *          codAtivo: 4
  *          qtdeComprada: 100
  */
/**
  * @swagger
  *  /investimentos/compras:
  *    get:
  *      tags: [Extrato Compra]
  *      description: Endpoint que registra todas as compras de ativos
  *      security:
  *        - bearerAuth: []
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/ExtratoCompra'
  */
router.get('/investimentos/compras', authenticateToken, investmentsController.getAllPurchases)

// Swagger Transações compra de ativos
/**
 * @swagger
 *  tags:
 *    name: Extrato
 *    description: Endpoint que registra todas as vendas de ativos
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      Extrato:
  *        type: object
  *        required:
  *          - id
  *          - codCliente
  *          - codAtivo
  *          - qtdeVendida
  *        properties:
  *          id:
  *            type: integer
  *          codCliente:
  *            type: integer
  *          codAtivo:
  *            type: integer
  *          qtdeVendida:
  *            type: integer
  *        example:
  *          id: 8
  *          codCliente: 1
  *          codAtivo: 4
  *          qtdeVendida: 100
  */
/**
  * @swagger
  *  /investimentos/vendas:
  *    get:
  *      tags: [Extrato]
  *      description: Endpoint que registra todas as vendas de ativos
  *      security:
  *        - bearerAuth: []
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Extrato'
  */
router.get('investimentos/vendas', authenticateToken, investmentsController.getAllSales)


// Swagger Compras
/**
 * @swagger
 *  tags:
 *    name: Compras
 *    description: Endpoint de compras de ativos
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      Compras:
  *        type: object
  *        required:
  *          - codCliente
  *          - codAtivo
  *          - qtdeAtivo
  *        properties:
  *          codCliente:
  *            type: integer
  *          codAtivo:
  *            type: integer
  *          qtdeAtivo:
  *            type: integer
  *        example:
  *          codCliente: 1
  *          codAtivo: 5
  *          qtdeAtivo: 100
  */
 /**
  * @swagger
  *  /investimentos/comprar:
  *    post:
  *      tags: [Compras]
  *      description: Endpoint para compras de ativos
  *      security:
  *        - bearerAuth: []
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              $ref: '#/components/schemas/Compras'
  *      responses:
  *        201:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Compras'
  */
router.post('/investimentos/comprar', authenticateToken, validatePurchase, investmentsController.createPurchase);

// Swagger Vendas
/**
 * @swagger
 *  tags:
 *    name: Vendas
 *    description: Endpoint de venda de ativos
 */
/**
 * @swagger
  *  components:
  *    schemas:
  *      Vendas:
  *        type: object
  *        required:
  *          - codCliente
  *          - codAtivo
  *          - qtdeAtivo
  *        properties:
  *          codCliente:
  *            type: integer
  *          codAtivo:
  *            type: integer
  *          qtdeAtivo:
  *            type: integer
  *        example:
  *          codCliente: 1
  *          codAtivo: 5
  *          qtdeAtivo: 100
  */
 /**
  * @swagger
  *  /investimentos/vender:
  *    post:
  *      tags: [Vendas]
  *      description: Endpoint para venda de ativos
  *      security:
  *        - bearerAuth: []
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              $ref: '#/components/schemas/Vendas'
  *      responses:
  *        201:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Vendas'
  */
router.post('/investimentos/vender',authenticateToken, validateSale, investmentsController.createSale);



module.exports = router;