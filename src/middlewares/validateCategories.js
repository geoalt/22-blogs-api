const isEmpty = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

const validateCategories = (req, res, next) => isEmpty(req, res) || next();

module.exports = validateCategories;
