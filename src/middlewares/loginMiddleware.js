const { generateToken } = require('../utils/token');

const validateLogin = (req, res, next) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
return res.status(400)
  .json({ message: 'Alguns campos obrigatórios estão faltando' }); 
}
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const validate = /\S+@\S+\.\S+/;

  if (!validate.test(email)) {
      return res.status(400)
         .json({ message: '"e-mail" deve ser um e-mail válido' }); 
     }
         next();
};

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
      res.status(401).json({ message: 'Token não encontrado' });
  }

  try {
  generateToken(token);
  } catch (e) {
      return res.status(401).json({ message: 'Token expirado ou inválido' });
  } 

  next();
};

module.exports = {validateEmail, validateLogin, authenticateToken };