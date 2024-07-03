const express = require('express');
const image = require('./image');

const app = express();

app.get('/', (req, res) => {
  res.type('html').send('<h1>Todo</h1><img src="/image.png"><p>Under construction...</p>');
});

app.get('/image.png', async (req, res) => {
  if (image.shouldLoadImage()) {
    try {
      await image.loadImage();
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }
  res.sendFile(image.imagePath);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
