const services = require('../services');

const insert = async (req, res) => {
  const result = await services.post.insert(req);
  return res.status(result.status).json(result.payload);
};

const findAll = async (_req, res) => {
  const result = await services.post.findAll();
  return res.status(result.status).json(result.payload);
};

module.exports = {
  insert,
  findAll,
};
