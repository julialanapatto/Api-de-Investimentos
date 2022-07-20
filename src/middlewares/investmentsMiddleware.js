
const investmentsService = require('../services/investmentsService');

const validatePurchase = async (req, res, next) => {
  const {codCliente, codAtivo, qtdeAtivo } = req.body; 

  if (!codCliente) return res.status(400).json({ message: 'código do cliente is required' });

  if(!codAtivo)  return res.status(400).json({ message: 'código do ativo is required' });

  if(!qtdeAtivo) return res.status(400).json({ message: 'quantidade do ativo is required' });
  
  const availableAssets = await investmentsService.getByAsset(codAtivo);
  
  if (qtdeAtivo > availableAssets.qtdeAtivo) return res.status(403).json({ message: 'Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora' });

  next();
}

module.exports = {
  validatePurchase
}