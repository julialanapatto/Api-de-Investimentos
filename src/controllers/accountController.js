const accountService = require('../services/accountService');

async function getAllAcounts(_req, res) {
  const data = await accountService.getAllAcounts();

  if (!data) {
    return res.status(500).json({ message: 'Internal server error'});
  }

  res.status(200).json(data);
}

async function getByAccount(req, res) {
  const { cod_cliente } = req.params;

  const data = await accountService.getByAccount(cod_cliente);

  if (!data) {
    return res.status(500).json({ message: 'Internal server error'});
  }

  return res.status(200).json(data)
}

module.exports = {
  getAllAcounts,
  getByAccount,
};