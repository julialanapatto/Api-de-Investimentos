const clientService = require('../services/clientService');

async function getAllClients(_req, res) {
  const data = await clientService.getAllClients();

  res.status(200).json(data);
}

module.exports = {
  getAllClients,
};