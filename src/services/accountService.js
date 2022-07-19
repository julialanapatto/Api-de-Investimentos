const accountModel = require('../models/accountModel');

async function getAll() {
  const [account] = await accountModel.getAll();
  return account;
}

module.exports = {
  getAll
};