const express = require('express');
const path = require('node:path');
const image = require('./image');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'page.html'));
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
