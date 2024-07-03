const express = require('express');

const app = express();

let counter = 0;

app.get('/pingpong', (req, res) => {
  res.type('text/plain').send(`pong ${counter}`);
  counter++;
});

app.listen(process.env.PORT || 8080);
