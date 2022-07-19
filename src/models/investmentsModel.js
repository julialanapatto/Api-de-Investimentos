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

function createPurchase (codCliente, codAtivo, qtdeAtivo) {
  return connection.execute(`
 INSERT INTO investimentos.compras (cod_cliente, cod_ativo, qtde_ativo_comprado)VALUES (?, ?, ?)`, [codCliente, codAtivo, qtdeAtivo]);
}

function createSale (codCliente, codAtivo, qtdeAtivo) {
  return connection.execute(`
 INSERT INTO investimentos.vendas (cod_cliente, cod_ativo, qtde_ativo_vendido)VALUES (?, ?, ?)`, [codCliente, codAtivo, qtdeAtivo]);
}

module.exports = {
  getAllSales,
  getByAsset,
  createPurchase,
  createSale
};