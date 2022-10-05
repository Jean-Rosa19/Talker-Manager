const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const talkerRoutes = require('./routes/talkerRoutes');
const loginRoutes = require('./routes/loginRoutes');

app.get('/', (_request, response) => {
  response.status(200).send();
});

app.use('/talker', talkerRoutes);

app.use('/login', loginRoutes);

module.exports = app;