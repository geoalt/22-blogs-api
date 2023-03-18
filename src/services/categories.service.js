const { Category } = require('../models');

const insert = async (data) => {
  const result = await Category.create(data);
  return {
    status: 201,
    payload: result,
  };
};

module.exports = {
  insert,
};
