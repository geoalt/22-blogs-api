const validateHeaderAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  return next();
};

module.exports = validateHeaderAuth;
