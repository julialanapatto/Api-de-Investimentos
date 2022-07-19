const connection = require('./connection');

function getAllClients() {
  return connection.execute('SELECT * FROM investimentos.clientes');
}

module.exports = {
  getAllClients,

};