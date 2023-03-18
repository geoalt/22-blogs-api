const { User } = require('../models');
const { generateToken } = require('../auth/auth');

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

  const { password: _, ...user } = result.dataValues;

  const token = generateToken(user);

  return {
    status: 201,
    payload: token,
  };
};

module.exports = {
  insert,
};
