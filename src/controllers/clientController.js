const clientService = require('../services/clientService');

async function getAllClients(_req, res) {
  const data = await clientService.getAllClients();

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  res.status(200).json(data);
}

async function getByClient(req, res) {
  const { codCliente } = req.params;

  const data = await clientService.getByClient(codCliente);

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  return res.status(200).json(data);
}

module.exports = {
  getAllClients,
  getByClient
};