require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'segredo';

const config = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateToken = (user) => {
  try {
    return { token: jwt.sign(user, JWT_SECRET, config) };
  } catch (error) {
    throw new Error('Error:', error);
  }
};

const verifyToken = (token) => {
  try {
    const authenticate = jwt.verify(token, JWT_SECRET);
    return authenticate;
  } catch (error) {
    return {
      status: 401,
      payload: {
        message: 'Expired or invalid token',
      },
    };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
