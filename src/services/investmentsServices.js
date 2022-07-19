const investmentsModel = require('../models/investmentsModel');

async function getAllSales() {
  const [sales] = await investmentsModel.getAllSales();
  return sales;
}

async function getByAsset(cod_ativo) {
  const [asset] = await investmentsModel.getByAsset(cod_ativo);
  return asset;
}


module.exports = {
  getAllSales,
  getByAsset
}