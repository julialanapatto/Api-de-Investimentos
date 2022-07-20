const investmentsService = require('../services/investmentsService');

async function getAllAssets(_req, res) {
  const data = await investmentsService.getAllAssets();

  if (!data) {
    return res.status(500).json({ message: 'Internal server error'});
  }

  res.status(200).json(data);
}

async function getAllSales(_req, res) {
  const data = await investmentsService.getAllSales();

  if (!data) {
    return res.status(500).json({ message: 'Internal server error'});
  }

  res.status(200).json(data);
}

async function getByAsset(req, res) {
  const { codAtivo } = req.params;

  const data = await investmentsService.getByAsset(codAtivo);

  if (!data) {
    return res.status(500).json({ message: 'Internal server error'});
  }

  return res.status(200).json(data)
}

async function createPurchase (req, res) {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  
    const data = await investmentsService.createPurchase(codCliente, codAtivo, qtdeAtivo);

    if (!data) {
      return res.status(500).json({ message: 'Internal server error'});
    }

    return res.status(201).json(data);
  }

  async function createSale (req, res) {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;
  
    const data = await investmentsService.createSale(codCliente, codAtivo, qtdeAtivo);

    if (!data) {
      return res.status(500).json({ message: 'Internal server error'});
    }
  
    return res.status(201).json(data);
  }
  
module.exports = {
  getAllAssets,
  getAllSales,
  getByAsset,
  createPurchase,
  createSale
}