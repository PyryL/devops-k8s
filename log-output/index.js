const express = require('express');
const { v4: uuid } = require('uuid');

const randomStr = uuid();

const app = express();

const logString = () => {
  console.log(new Date().toISOString(), randomStr)
}

logString();
setInterval(logString, 5000);

app.get('/', (req, res) => {
  res.type('text/plain').send(`${new Date().toISOString()}: ${randomStr}`);
});

app.listen(process.env.PORT || 8080);
