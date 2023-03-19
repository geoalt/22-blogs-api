const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');

// ...
const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
// ...

app.use('/login', routes.login);
app.use('/user', routes.user);
app.use('/categories', middlewares.validateHeaderAuth, routes.categories);
app.use('/post', middlewares.validateHeaderAuth, routes.post);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
