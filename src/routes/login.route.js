const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const login = express.Router();

login.post('/', middlewares.validateLogin, controllers.login.authenticate);

module.exports = login;
