const clientModel = require('../models/clientModel');

async function getAllClients () {
  const [clients] = await clientModel.getAllClients();
  return clients;
}

async function getByClient(codCliente) {
  const [client] = await clientModel.getByClient(codCliente);
  return client;
}

module.exports = {
  getAllClients,
  getByClient
};