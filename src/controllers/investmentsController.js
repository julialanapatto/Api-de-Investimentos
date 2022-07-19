const investmentsService = require('../services/investmentsServices');

async function getAllSales(_req, res) {
  const data = await investmentsService.getAllSales();

  if (!data) {
    return res.status(500).json({ message: 'Internal server error'});
  }

  res.status(200).json(data);
}

async function getByAsset(req, res) {
  const { cod_ativo } = req.params;

  const data = await investmentsService.getByAsset(cod_ativo);

  if (!data) {
    return res.status(500).json({ message: 'Internal server error'});
  }

  return res.status(200).json(data)
}


module.exports = {
  getAllSales,
  getByAsset
}