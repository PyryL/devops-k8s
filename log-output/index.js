const express = require('express');
const { v4: uuid } = require('uuid');
const fs = require('node:fs');

const randomStr = uuid();

const app = express();

const getTimestamp = () => {
  return fs.readFileSync('/app/data/timestamp.txt', { encoding: 'utf-8' });
}

const getPingpongCounter = () => {
  if (!fs.existsSync('/app/pingpong-data/counter.txt')) {
    return 0;
  }
  const txt = fs.readFileSync('/app/pingpong-data/counter.txt', { encoding: 'utf-8' });
  return parseInt(txt)
}

const logString = () => {
  console.log(getTimestamp(), randomStr)
}

logString();
setInterval(logString, 5000);

app.get('/', (req, res) => {
  res.type('text/plain').send(`${getTimestamp()}: ${randomStr}\nPing / Pongs: ${getPingpongCounter()}`);
});

app.listen(process.env.PORT || 8080);
