const accountService = require('../services/accountService');

const validateDeposit = async (req, res, next) => {
  const { codCliente, valor } = req.body;

  if(!codCliente) res.status(400).json({ message: 'Código do cliente é obrigatório' })

  if(!valor) res.status(400).json({ message: 'Valor é obrigatório' })

  if (valor <= 0) res.status(403).json({ message: 'A quantidade a ser depositada é inválida' })

  next()
}

const validateWithdraw = async (req, res, next) => {

  const { codCliente, valor } = req.body;

  if(!codCliente) res.status(400).json({ message: 'Código do cliente é obrigatório' })

  if(!valor) res.status(400).json({ message: 'Valor é obrigatório'})

  const balance = await accountService.getByAccount(codCliente);

  if (valor > balance.saldo) return res.status(403).json({ message:'Saldo indisponível' });

   next()
}

module.exports = {
  validateDeposit,
  validateWithdraw
}