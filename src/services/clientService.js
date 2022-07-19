const clientModel = require('../models/clientModel');

async function getAllClients () {
  const [clients] = await clientModel.getAllClients();
  return clients;
}

async function getByClient(cod_cliente) {
  const [client] = await clientModel.getByClient(cod_cliente);
  return client;
}


module.exports = {
  getAllClients,
  getByClient
};