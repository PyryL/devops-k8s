const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.type('html').send('<h1>Todo</h1><i>Under construction...</i>');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
