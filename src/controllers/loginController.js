const loginService = require('../services/loginService');

const login = async (req, res) => {
    const loginUser = await loginService.login(req.body);
    if (!loginUser) return res.status(400).json({ message: 'Campos inválidos' });

    return res.status(200).json(loginUser);
};

module.exports = {
  login
};