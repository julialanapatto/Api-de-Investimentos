const connection = require('./connection');

function getAllAssets() {
  return connection.execute('SELECT a.cod_ativo, a.trade_name, a.ticker, a.valor_acao, a.qtde_ativo, SUM(qtde_ativo_comprado) AS qtde_investida FROM investimentos.compras AS c INNER JOIN investimentos.acoes as a ON a.cod_ativo = c.cod_ativo GROUP BY cod_ativo;');
}
function getAllPurchases() {
  return connection.execute('SELECT * FROM investimentos.compras');
}
function getAllSales() {
  return connection.execute('SELECT * FROM investimentos.vendas');
}

function getByAsset(codAtivo) {
  return connection.execute(`
  SELECT cod_ativo AS codAtivo, qtde_ativo AS qtdeAtivo, valor_acao AS valor
  FROM investimentos.acoes
    WHERE
      cod_ativo = ?`,
    [codAtivo]);
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
  getAllAssets,
  getAllPurchases,
  getAllSales,
  getByAsset,
  createPurchase,
  createSale
};