const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const user = express.Router();

user.post('/', middlewares.validateUserData, controllers.user.insert);

user.get('/', middlewares.validateHeaderAuth, controllers.user.findAll);

module.exports = user;
