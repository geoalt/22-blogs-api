const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const categories = express.Router();

categories.post('/', middlewares.validateCategories, controllers.categories.insert);

categories.get('/', controllers.categories.findAll);

module.exports = categories;
