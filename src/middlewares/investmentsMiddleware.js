
const investmentsService = require('../services/investmentsService');
const clientService = require('../services/clientService');

const validatePurchase = async (req, res, next) => {
  const {codCliente, codAtivo, qtdeAtivo } = req.body;

  if (!codCliente) return res.status(400).json({ message: 'Código do cliente é obrigatório' });

  if(!codAtivo)  return res.status(400).json({ message: 'Código do ativo é obrigatório' });

  if(!qtdeAtivo) return res.status(400).json({ message: 'A quantidade do ativo é obrigatória' });

  const availableAssets = await investmentsService.getByAsset(codAtivo);

  if (qtdeAtivo > availableAssets.qtdeAtivo) return res.status(403).json({ message: 'Quantidade indisponível' });

  next();
}

const validateSale = async (req, res, next) => {
  const {codCliente, codAtivo, qtdeAtivo } = req.body;

  if (!codCliente) return res.status(400).json({ message: 'Código do cliente é obrigatório' });

  if(!codAtivo)  return res.status(400).json({ message: 'Código do ativo é obrigatório' });

  if(!qtdeAtivo) return res.status(400).json({ message: 'A quantidade do ativo é obrigatória' });

  const available = await clientService.getByClient(codCliente)
  const [validAmount] = available.filter((a) => a.codAtivo === codAtivo)

  if (qtdeAtivo > validAmount.qtdeAtivo) return res.status(403).json({ message: 'Quantidade indisponível para venda' });
   next();

}
module.exports = {
  validatePurchase,
  validateSale
}