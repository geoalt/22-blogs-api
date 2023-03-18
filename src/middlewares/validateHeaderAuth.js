const { verifyToken } = require('../auth/auth');

const isEmpty = (req, res) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
};

const validateToken = (req, res) => {
  const { authorization: token } = req.headers;

  const result = verifyToken(token);

  if (result.status === 401) {
    return res.status(result.status).json(result.payload);
  }
};

const validateHeaderAuth = (req, res, next) =>
  isEmpty(req, res) || validateToken(req, res) || next();

module.exports = validateHeaderAuth;
