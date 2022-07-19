const clientService = require('../services/clientService');

async function getAllClients(_req, res) {
  const data = await clientService.getAllClients();

  if (!data) {
    return res.status(500).json({ message: 'Internal server error'});
  }

  res.status(200).json(data);
}


module.exports = {
  getAllClients,
};