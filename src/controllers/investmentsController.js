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
  getAllSales,
  getByAsset,
  createPurchase,
  createSale
}