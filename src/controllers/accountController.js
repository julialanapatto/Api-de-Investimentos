const accountService = require('../services/accountService');

async function getAll(_req, res) {
  const data = await accountService.getAll();

  res.status(200).json(data);
}

module.exports = {
  getAll,
};