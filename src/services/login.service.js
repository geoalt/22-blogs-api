const { User } = require('../models');
const { generateToken } = require('../auth/auth.js');

const authenticate = async (email, password) => {
  const result = await User.findOne({
    attributes: ['id', 'display_name', 'email'],
    where: { email, password },
  });

  if (!result) {
    return {
      status: 400,
      payload: { message: 'Invalid fields' },
    };
  }

  const token = generateToken(result.dataValues);

  return {
    status: 200,
    payload: token,
  };
};

module.exports = {
  authenticate,
};
