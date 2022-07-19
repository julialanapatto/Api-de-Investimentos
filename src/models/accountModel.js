const connection = require('./connection');

function getAllAcounts() {
  return connection.execute('SELECT * FROM investimentos.conta');
}

function getByAccount(cod_cliente) {
  return connection.execute(`
    SELECT cod_cliente AS codCliente, saldo_conta AS Saldo FROM investimentos.conta
    WHERE
      cod_cliente = ?`,
    [cod_cliente]);
}

module.exports = {
  getAllAcounts,
  getByAccount
};