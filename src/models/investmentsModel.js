const connection = require('./connection');

function getAllSales() {
  return connection.execute('SELECT * FROM investimentos.compras');
}

function getByAsset(cod_ativo) {
  return connection.execute(`
  SELECT cod_ativo AS codAtivo, qtde_ativo AS qtdeAtivo, valor_acao AS valor
  FROM investimentos.acoes
    WHERE
      cod_ativo = ?`,
    [cod_ativo]);
}

module.exports = {
  getAllSales,
  getByAsset
};