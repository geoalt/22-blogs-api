const services = require('../services');

const insert = async (req, res) => {
  const result = await services.post.insert(req);
  return res.status(result.status).json(result.payload);
};

const findAll = async (_req, res) => {
  const result = await services.post.findAll();
  return res.status(result.status).json(result.payload);
};

const findOne = async (req, res) => {
  const { id } = req.params;
  const result = await services.post.findOne(id);
  return res.status(result.status).json(result.payload);
};

const update = async (req, res) => {
  const result = await services.post.update(req);
  return res.status(result.status).json(result.payload);
};

const destroy = async (req, res) => {
  const result = await services.post.destroy(req);
  return res.status(result.status).json(result.payload);
};

const search = async (req, res) => {
  const { q } = req.query;
  const result = await services.post.search(q);
  return res.status(result.status).json(result.payload);
};

module.exports = {
  insert,
  findAll,
  findOne,
  update,
  destroy,
  search,
};
