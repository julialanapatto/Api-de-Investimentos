const accountModel = require('../models/accountModel');

async function getAllAcounts() {
  const [account] = await accountModel.getAllAcounts();
  return account;
}

async function getByAccount(cod_cliente) {
  const [conta] = await accountModel.getByAccount(cod_cliente);
  return conta;
}

module.exports = {
  getAllAcounts,
  getByAccount
};