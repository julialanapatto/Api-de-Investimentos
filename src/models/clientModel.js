const connection = require('./connection');

function getAllClients() {
  return connection.execute('SELECT * FROM investimentos.clientes');
}

function getByClient(cod_cliente) {
  return connection.execute(`
  SELECT c.cod_cliente, 
  c.cod_ativo, 
  c.qtde_ativo_comprado, 
  v.qtde_ativo_vendido, a.valor_acao
  FROM investimentos.acoes AS a
  INNER JOIN investimentos.compras AS c ON a.cod_ativo = c.cod_ativo
  INNER JOIN investimentos.vendas AS v ON a.cod_ativo = v.cod_ativo
  WHERE c.cod_cliente = ?`, [cod_cliente]);
}

module.exports = {
  getAllClients,
  getByClient
};