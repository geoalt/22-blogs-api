const validateLogin = require('./validateLogin');
const validateUserData = require('./validateUserData');
const validateHeaderAuth = require('./validateHeaderAuth');
const validateCategories = require('./validateCategories');
const validatePost = require('./validatePost');
const validateUpdate = require('./validatePostUpdate');

module.exports = {
  validateLogin,
  validateUserData,
  validateHeaderAuth,
  validateCategories,
  validatePost,
  validateUpdate,
};
