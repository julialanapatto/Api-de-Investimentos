const investmentsService = require('../services/investmentsService');

async function getAllAssets(_req, res) {
  const data = await investmentsService.getAllAssets();

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  res.status(200).json(data);
}

async function getAllPurchases(_req, res) {
  const data = await investmentsService.getAllPurchases();

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  res.status(200).json(data);
}

async function getAllSales(_req, res) {
  const data = await investmentsService.getAllSales();

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  res.status(200).json(data);
}

async function getByAsset(req, res) {
  const { codAtivo } = req.params;

  const data = await investmentsService.getByAsset(codAtivo);

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  return res.status(200).json(data);
}

async function createPurchase (req, res) {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;

    const data = await investmentsService.createPurchase(codCliente, codAtivo, qtdeAtivo);

    if (!data) {
      return res.status(500).json({ message: 'Erro Interno do Servidor'});
    }

    return res.status(201).json(data);
  }

  async function createSale (req, res) {
    const { codCliente, codAtivo, qtdeAtivo } = req.body;

    const data = await investmentsService.createSale(codCliente, codAtivo, qtdeAtivo);

    if (!data) {
      return res.status(500).json({ message: 'Erro Interno do Servidor'});
    }

    return res.status(201).json(data);
  }

module.exports = {
  getAllAssets,
  getAllPurchases,
  getAllSales,
  getByAsset,
  createPurchase,
  createSale
}