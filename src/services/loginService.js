const clientModel = require('../models/clientModel');
const generateToken = require('../utils/token');

const login = async ({ email }) => {
    const [user] = await clientModel.getUser()
    const [validEmail] = user.filter((u) => u.email === email)
    if (!validEmail) return false;
    const token = generateToken(validEmail);
    return { token };
};

module.exports = {
  login
}
