const connection = require('./connection');

function getAllAcounts() {
  return connection.execute('SELECT * FROM investimentos.conta');
}

function getByAccount(codCliente) {
  return connection.execute(`
    SELECT cod_cliente AS codCliente, saldo_conta AS saldo FROM investimentos.conta
    WHERE
      cod_cliente = ?`,
    [codCliente]);
}

function createDeposit (codCliente, valor) {
  return connection.execute(`
 INSERT INTO investimentos.conta (cod_cliente, saldo_conta) VALUES (?, ?)`, [codCliente, valor]);
}

function createWithdraw (codCliente, valor) {
  return connection.execute(`
 INSERT INTO investimentos.conta (cod_cliente, saldo_conta) VALUES (?, ?)`, [codCliente, valor]);
}

module.exports = {
  getAllAcounts,
  getByAccount,
  createDeposit,
  createWithdraw
};