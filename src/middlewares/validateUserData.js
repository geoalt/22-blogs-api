const validateNameLength = (req, res) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
};

const validateEmailPattern = (req, res) => {
  const { email } = req.body;
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (!pattern.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
};

const validatePasswordLength = (req, res) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
};

const validateUserData = (req, res, next) =>
  validateNameLength(req, res)
  || validateEmailPattern(req, res)
  || validatePasswordLength(req, res)
  || next();

module.exports = validateUserData;