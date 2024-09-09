const express = require('express');
const database = require('./database');

const app = express();

app.get('/pingpong', async (req, res) => {
  const counter = await database.getCounter();
  await database.setCounter(counter+1);
  res.type('text/plain').send(`pong ${counter}`);
});

app.get('/pingpong/api/counter', async (req, res) => {
  const counter = await database.getCounter();
  res.json({ counter });
});

app.listen(process.env.PORT || 8080);
