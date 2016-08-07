const express = require('express');
const bodyParser = require('body-parser');
const horizon = require('@horizon/server');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8181;
const server = app.listen(PORT);
const options = {
  auth: {
    token_secret: 'find_it',
  },
};
const horizonServer = horizon(server, options);
