const express = require('express');
const fs = require('node:fs');

const app = express();

const counterPath = '/app/data/counter.txt';

let counter = (() => {
  if (fs.existsSync(counterPath)) {
    return parseInt(fs.readFileSync(counterPath, { encoding: 'utf-8' }));
  }
  return 0;
})();

app.get('/pingpong', (req, res) => {
  counter++;
  fs.writeFileSync(counterPath, counter.toString(), { encoding: 'utf-8' });
  res.type('text/plain').send(`pong ${counter-1}`);
});

app.listen(process.env.PORT || 8080);
