const clientModel = require('../models/clientModel');


async function getAllClients () {
  const [clients] = await clientModel.getAllClients();
  return clients;
}


module.exports = {
  getAllClients,
};