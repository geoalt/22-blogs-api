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

const findAll = async () => {
  const result = await User.findAll();
  const list = result.map((user) => {
    const { password: _, ...data } = user.dataValues;
    return data;
  });

  return {
    status: 200,
    payload: list,
  };
};

const findOne = async (id) => {
  const result = await User.findByPk(id);

  if (!result) {
    return {
      status: 404,
      payload: { message: 'User does not exist' },
    };
  }

  const { password: _, ...user } = result.dataValues;
  return {
    status: 200,
    payload: user,
  };
};

module.exports = {
  insert,
  findAll,
  findOne,
};
