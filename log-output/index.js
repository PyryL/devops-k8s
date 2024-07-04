const express = require('express');
const { v4: uuid } = require('uuid');
const fs = require('node:fs');
const axios = require('axios').default;

const randomStr = uuid();

const app = express();

const getTimestamp = () => {
  return fs.readFileSync('/app/data/timestamp.txt', { encoding: 'utf-8' });
}

const getPingpongCounter = async () => {
  return (await axios.get('http://pingpong-svc:1234/pingpong/api/counter')).data.counter;
}

const logString = () => {
  console.log(getTimestamp(), randomStr)
}

logString();
setInterval(logString, 5000);

app.get('/', async (req, res) => {
  const infoFile = fs.readFileSync('/app/config/information.txt', { encoding: 'utf-8' });
  res.type('text/plain').send([
    `file content: ${infoFile}`,
    `env variable: MESSAGE=${process.env.MESSAGE}`,
    `${getTimestamp()}: ${randomStr}`,
    `Ping / Pongs: ${await getPingpongCounter()}`,
  ].join('\n'));
});

app.listen(process.env.PORT || 8080);
