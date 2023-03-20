const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const post = express.Router();

post.post('/', middlewares.validatePost, controllers.post.insert);

post.get('/', controllers.post.findAll);
post.get('/search', controllers.post.search);
post.get('/:id', controllers.post.findOne);

post.put('/:id', middlewares.validateUpdate, controllers.post.update);

post.delete('/:id', controllers.post.destroy);

module.exports = post;
