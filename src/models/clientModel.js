const connection = require('./connection');

function getByClient(codCliente) {
  return connection.execute(`
  SELECT c.cod_cliente AS codCliente, c.cod_ativo AS codAtivo, c.soma - v.soma AS qtdeAtivo, acoes.valor_acao AS valor
  FROM (
     SELECT SUM(compras.qtde_ativo_comprado) AS soma, compras.cod_ativo, compras.cod_cliente
     FROM investimentos.compras
     GROUP BY compras.cod_ativo, compras.cod_cliente
  ) AS c
  INNER JOIN (
    SELECT SUM(vendas.qtde_ativo_vendido) AS soma, vendas.cod_ativo, vendas.cod_cliente
    FROM investimentos.vendas
    GROUP BY vendas.cod_ativo, vendas.cod_cliente
  ) AS v
  ON (v.cod_ativo = c.cod_ativo AND v.cod_cliente = c.cod_cliente)
  INNER JOIN investimentos.acoes
  ON (acoes.cod_ativo = c.cod_ativo)
  WHERE c.cod_cliente = ?`, [codCliente]);
}

function getUser() {
  return connection.execute(`
  SELECT email, senha FROM investimentos.clientes `)
}

module.exports = {
  getUser,
  getByClient
};