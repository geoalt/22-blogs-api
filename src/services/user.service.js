const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const insert = async (data) => {
  const emailAlreayInUse = await User.findOne({ where: { email: data.email } });

  if (emailAlreayInUse) {
    return {
      status: 409,
      payload: {
        message: 'User already registered',
      },
    };
  }

  const result = await User.create(data);
  delete result.dataValues.password;

  const token = generateToken(result);

  return {
    status: 201,
    payload: token,
  };
};

module.exports = {
  insert,
};
