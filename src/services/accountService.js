const accountModel = require('../models/accountModel');

async function getAllAcounts() {
  const [account] = await accountModel.getAll();
  return account;
}

module.exports = {
  getAllAcounts
};