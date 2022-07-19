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
  await investmentsModel.createPurchase(codCliente, codAtivo, qtdeAtivo)
  return {codCliente, codAtivo, qtdeAtivo}
}

async function createSale (codCliente, codAtivo, qtdeAtivo) {
  await investmentsModel.createSale(codCliente, codAtivo, qtdeAtivo)
  return {codCliente, codAtivo, qtdeAtivo}
}

module.exports = {
  getAllSales,
  getByAsset,
  createPurchase,
  createSale
}