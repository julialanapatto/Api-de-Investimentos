const accountService = require('../services/accountService');

const validateDeposit = async (req, res, next) => {
  const { valor } = req.body;

  if (valor <= 0) res.status(403).json({ message: 'a quantidade a ser sacada não pode ser negativa e não pode ser igual a zero.' })
  next()
}

const validateWithdraw = async (req, res, next) => {

  const { codCliente, valor } = req.body; 

  const balance = await accountService.getByAccount(codCliente)
  
  if (valor > balance.saldo) return res.status(403).json({ message: 'a quantidade a ser sacada não pode ser negativa e não pode ser igual a zero.' });

   next()
}

module.exports = {
  validateDeposit,
  validateWithdraw
}