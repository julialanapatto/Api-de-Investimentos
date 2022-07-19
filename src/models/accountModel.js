const connection = require('./connection');

function getAllAcounts() {
  return connection.execute('SELECT * FROM investimentos.conta');
}

module.exports = {
  getAllAcounts,
};