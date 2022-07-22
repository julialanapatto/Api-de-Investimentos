const clientService = require('../services/clientService');

async function getByClient(req, res) {
  const { codCliente } = req.params;

  const data = await clientService.getByClient(codCliente);

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  return res.status(200).json(data);
}

module.exports = {
  getByClient
};