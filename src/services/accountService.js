const accountModel = require('../models/accountModel');

async function getAllAcounts() {
  const [accounts] = await accountModel.getAllAcounts();
  return accounts;
}

async function getByAccount(codCliente) {
  const [account] = await accountModel.getByAccount(codCliente);
  return account[0];
}

async function createDeposit(codCliente, valor) {
  await accountModel.createDeposit(codCliente, valor)
  return {codCliente, valor};
}

async function createWithdraw (codCliente, valor) {
  await accountModel.createWithdraw(codCliente, valor)
  return {codCliente, valor};
}

module.exports = {
  getAllAcounts,
  getByAccount,
  createDeposit,
  createWithdraw
};