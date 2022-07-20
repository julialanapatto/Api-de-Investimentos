const investmentsModel = require('../models/investmentsModel');

async function getAllAssets() {
  const [sales] = await investmentsModel.getAllAssets();
  return sales;
}

async function getAllSales() {
  const [sales] = await investmentsModel.getAllSales();
  return sales;
}

async function getByAsset(codAtivo) {
  const [asset] = await investmentsModel.getByAsset(codAtivo);
  return asset[0];
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
  getAllAssets,
  getAllSales,
  getByAsset,
  createPurchase,
  createSale
}