
const investmentsService = require('../services/investmentsService');

const validatePurchase = async (req, res, next) => {
  const { codAtivo, qtdeAtivo } = req.body; 
  
  const availableAssets = await investmentsService.getByAsset(codAtivo);
  
   if (qtdeAtivo > availableAssets.qtdeAtivo) return res.status(403).json({ message: 'Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora' });

  next();
}

module.exports = {
  validatePurchase
}