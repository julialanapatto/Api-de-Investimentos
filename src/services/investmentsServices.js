const investmentsModel = require('../models/investmentsModel');

async function getAllSales() {
  const [sales] = await investmentsModel.getAllSales();
  return sales;
}

async function getByAsset(cod_ativo) {
  const [asset] = await investmentsModel.getByAsset(cod_ativo);
  return asset;
}

async function createPurchase (codCliente, codAtivo, qtdeAtivo) {
  const [purchase] = await investmentsModel.createPurchase(codCliente, codAtivo, qtdeAtivo)
  return {id: purchase.codCliente, codAtivo, qtdeAtivo}
}

module.exports = {
  getAllSales,
  getByAsset,
  createPurchase
}