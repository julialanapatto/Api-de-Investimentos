const validateDeposit = async (req, res, next) => {
  const { valor } = req.body;

  if (valor <= 0) res.status(505).json({ message: 'a quantidade a ser sacada não pode ser negativa e não pode ser igual a zero.' })
  next()
}

module.exports = {
  validateDeposit
}