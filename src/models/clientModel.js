const connection = require('./connection');

function getByClient(codCliente) {
  return connection.execute(`
  SELECT c.cod_cliente AS codCliente,
  c.cod_ativo AS codAtivo,
  c.qtde_ativo_comprado AS qtdeComprada,
  v.qtde_ativo_vendido AS qtdeVendida,
  a.valor_acao AS valor
  FROM investimentos.acoes AS a
  INNER JOIN investimentos.compras AS c ON a.cod_ativo = c.cod_ativo
  INNER JOIN investimentos.vendas AS v ON a.cod_ativo = v.cod_ativo
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