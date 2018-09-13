const express = require('express');
const bodyParser = require('body-parser');

const actions = require('./actions');

const app = express();
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  console.log('req')
  res.json(actions.read());
});

app.listen(3001, () =>
  console.log(
    'Server is running on localhost:3001. Your client app request will be proxied to this host',
  ),
);
