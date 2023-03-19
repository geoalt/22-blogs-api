const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const post = express.Router();

post.post('/', middlewares.validatePost, controllers.post.insert);

module.exports = post;
