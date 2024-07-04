const express = require('express');

const app = express();

let counter = 0;

app.get('/pingpong', (req, res) => {
  counter++;
  res.type('text/plain').send(`pong ${counter-1}`);
});

app.get('/pingpong/api/counter', (req, res) => {
  res.json({ counter });
});

app.listen(process.env.PORT || 8080);
