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
  UPDATE investimentos.conta
  SET saldo_conta = saldo_conta + ?
  WHERE cod_cliente = ?;`, [valor, codCliente]);
}

function createWithdraw (codCliente, valor) {
  return connection.execute(`
  UPDATE investimentos.conta
  SET saldo_conta = saldo_conta - ?
  WHERE cod_cliente = ?;`, [valor, codCliente]);
}

module.exports = {
  getAllAcounts,
  getByAccount,
  createDeposit,
  createWithdraw
};