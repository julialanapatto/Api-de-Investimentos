const clientModel = require('../models/clientModel');


async function getByClient(codCliente) {
  const [client] = await clientModel.getByClient(codCliente);
  return client;
}

module.exports = {
  getByClient
};