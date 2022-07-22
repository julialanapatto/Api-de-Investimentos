const accountService = require('../services/accountService');

async function getByAccount(req, res) {
  const { codCliente } = req.params;

  const data = await accountService.getByAccount(codCliente);

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  return res.status(200).json(data)
}

async function createDeposit (req, res) {
  const { codCliente, valor } = req.body;

  const data = await accountService.createDeposit(codCliente, valor);

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  return res.status(201).json(data);
}

async function createWithdraw (req, res) {
  const { codCliente, valor } = req.body;

  const data = await accountService.createWithdraw(codCliente, valor);

  if (!data) {
    return res.status(500).json({ message: 'Erro Interno do Servidor'});
  }

  return res.status(201).json(data);
}

module.exports = {
  getByAccount,
  createDeposit,
  createWithdraw
};