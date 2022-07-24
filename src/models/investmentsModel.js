const connection = require('./connection');

function getAllAssets() {
  return connection.execute('SELECT c.cod_cliente AS codCliente, c.cod_ativo AS codAtivo, acoes.trade_name AS ativo, acoes.ticker AS ticker, acoes.valor_acao AS valor, acoes.qtde_ativo AS qtdeAtivoMax, c.soma - v.soma AS qtdeInvestida FROM (SELECT SUM(compras.qtde_ativo_comprado) AS soma, compras.cod_ativo, compras.cod_cliente FROM investimentos.compras GROUP BY compras.cod_ativo, compras.cod_cliente) AS c INNER JOIN (SELECT SUM(vendas.qtde_ativo_vendido) AS soma, vendas.cod_ativo, vendas.cod_cliente FROM investimentos.vendas GROUP BY vendas.cod_ativo, vendas.cod_cliente) AS v ON (v.cod_ativo = c.cod_ativo and v.cod_cliente = c.cod_cliente) INNER JOIN investimentos.acoes ON (acoes.cod_ativo = c.cod_ativo)');
}

function getAllPurchases() {
  return connection.execute('SELECT id_compra AS id, cod_cliente AS codCliente, cod_ativo AS codAtivo, qtde_ativo_comprado AS qtdeComprada FROM investimentos.compras');
}

function getAllSales() {
  return connection.execute('SELECT id_ AS id, cod_cliente AS codCliente, cod_ativo AS codAtivo, qtde_ativo_vendido AS qtdeVendida FROM investimentos.vendas');
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