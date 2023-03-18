const services = require('../services');

const insert = async (req, res) => {
  const result = await services.user.insert(req.body);
  // console.log(result);
  return res.status(result.status).json(result.payload);
};

module.exports = {
  insert,
};