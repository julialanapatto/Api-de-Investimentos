const jwt = require('jsonwebtoken');

const validateLogin = (req, res, next) => {
  const { email, senha } = req.body;
  const validate = /^[\w+.]+@\w+.\w{2,}(?:.\w{2})?$/i;

  if (!email || !senha) {
return res.status(400)
  .json({ message: 'e-mail e senha são campos obrigatórios' }); 
}

if (!validate.test(email)) {
  return res.status(400)
     .json({ message: '"e-mail" deve ser um e-mail válido' });
 }

  next();
};

const jwtConfig = {
  expiresIn: '60m',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;
const authenticateToken = async (req, res, next) => {

const auth = req.headers.authorization;

const [, token] = auth.split(' ');

if(!token) {
  return res.status(401).json({ message: 'Token expirado ou inválido' })
}

  try {
    jwt.verify(token, SECRET, jwtConfig);
  } catch (e) {
    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }

  next();
};

module.exports = {validateLogin, authenticateToken };