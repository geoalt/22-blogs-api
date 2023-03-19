const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const post = express.Router();

post.post('/', middlewares.validatePost, controllers.post.insert);

post.get('/', controllers.post.findAll);

module.exports = post;
