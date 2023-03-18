const services = require('../services');

const insert = async (req, res) => {
  const result = await services.user.insert(req.body);
  return res.status(result.status).json(result.payload);
};

const findAll = async (_req, res) => {
  const result = await services.user.findAll();
  return res.status(result.status).json(result.payload);
};

module.exports = {
  insert,
  findAll,
};
