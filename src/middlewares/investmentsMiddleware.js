
const investmentsService = require('../services/investmentsService');

const validatePurchase = async (req, res, next) => {
  const {codCliente, codAtivo, qtdeAtivo } = req.body; 

  if (!codCliente) return res.status(400).json({ message: 'Código do cliente é obrigatório' });

  if(!codAtivo)  return res.status(400).json({ message: 'Código do ativo é obrigatório' });

  if(!qtdeAtivo) return res.status(400).json({ message: 'A quantidade do ativo é obrigatória' });
  
  const availableAssets = await investmentsService.getByAsset(codAtivo);
  
  if (qtdeAtivo > availableAssets.qtdeAtivo) return res.status(403).json({ message: 'Quantidade indisponível' });

  next();
}

module.exports = {
  validatePurchase
}