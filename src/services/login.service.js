const { User } = require('../models');
const { generateToken } = require('../utils/auth.js');

const authenticate = async (email, password) => {
  const result = await User.findOne({
    attributes: ['id', 'display_name', 'email'],
    where: { email, password },
  });

  console.log(result);

  if (!result) {
    return {
      status: 400,
      payload: { message: 'Invalid fields' },
    };
  }

  const token = generateToken(result);

  return {
    status: 200,
    payload: token,
  };
};

module.exports = {
  authenticate,
};
