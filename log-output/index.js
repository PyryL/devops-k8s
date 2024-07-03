const express = require('express');
const { v4: uuid } = require('uuid');
const fs = require('node:fs');

const randomStr = uuid();

const app = express();

const getTimestamp = () => {
  return fs.readFileSync('/app/data/timestamp.txt', { encoding: 'utf-8' });
}

const logString = () => {
  console.log(getTimestamp(), randomStr)
}

logString();
setInterval(logString, 5000);

app.get('/', (req, res) => {
  res.type('text/plain').send(`${getTimestamp()}: ${randomStr}`);
});

app.listen(process.env.PORT || 8080);
