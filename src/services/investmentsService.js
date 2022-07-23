const investmentsModel = require('../models/investmentsModel');

async function getAllAssets() {
  const [assets] = await investmentsModel.getAllAssets();
  return assets;
}

async function getAllPurchases() {
  const [purchase] = await investmentsModel.getAllPurchases();
  return purchase;
}

async function getAllSales() {
  const [sale] = await investmentsModel.getAllSales();
  return sale;
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
  getAllPurchases,
  getAllSales,
  getByAsset,
  createPurchase,
  createSale
}