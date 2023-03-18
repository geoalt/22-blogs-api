const { Category } = require('../models');

const insert = async (data) => {
  const result = await Category.create(data);
  return {
    status: 201,
    payload: result,
  };
};

const findAll = async () => {
  const result = await Category.findAll();
  const list = result.map((category) => category.dataValues);

  return {
    status: 200,
    payload: list,
  };
};

module.exports = {
  insert,
  findAll,
};
