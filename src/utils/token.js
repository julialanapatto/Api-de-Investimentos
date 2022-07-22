const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '6d',
  algorithm: 'HS256',
};

const generateToken = ({ email }) => {
  const result = jwt.sign({ email }, SECRET, jwtConfig);
  return result;
};

module.exports = generateToken;