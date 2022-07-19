const accountModel = require('../models/accountModel');

async function getAllAcounts() {
  const [accounts] = await accountModel.getAllAcounts();
  return accounts;
}

async function getByAccount(cod_cliente) {
  const [account] = await accountModel.getByAccount(cod_cliente);
  return account;
}

async function createDeposit(codCliente, valor) {
  await accountModel.createDeposit(codCliente, valor)
  return {codCliente, valor};
}

module.exports = {
  getAllAcounts,
  getByAccount,
  createDeposit
};