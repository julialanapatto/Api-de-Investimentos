const connection = require('./connection');

function getAll() {
  return connection.execute('SELECT * FROM investimentos.conta');
}

module.exports = {
  getAll,
};