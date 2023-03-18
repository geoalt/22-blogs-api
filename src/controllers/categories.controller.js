const services = require('../services');

const insert = async (req, res) => {
  const result = await services.categories.insert(req.body);
  return res.status(result.status).json(result.payload);
};

const findAll = async (req, res) => {
  const result = await services.categories.findAll();
  return res.status(result.status).json(result.payload);
};

module.exports = {
  insert,
  findAll,
};
