const services = require('../services');

const authenticate = async (req, res) => {
  const { email, password } = req.body;
  const result = await services.login.authenticate(email, password);
  return res.status(result.status).json(result.payload);
};

module.exports = {
  authenticate,
};
