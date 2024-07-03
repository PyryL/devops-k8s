const axios = require('axios').default;
const fs = require('node:fs');

const imagePath = '/app/data/image.png';
const imageDatePath = '/app/data/image-info.txt';

const shouldLoadImage = () => {
  if (!fs.existsSync(imagePath) || !fs.existsSync(imageDatePath)) return true;
  const loadDate = new Date(fs.readFileSync(imageDatePath, { encoding: 'utf-8' }));
  return new Date() - loadDate >= 1000*60*60;
}

const loadImage = async () => {
  fs.writeFileSync(imageDatePath, new Date().toISOString(), { encoding: 'utf-8' });

  const fileWriter = fs.createWriteStream(imagePath);

  const response = await axios.get('https://picsum.photos/1200', {
    responseType: 'stream',
  })

  return new Promise((resolve, reject) => {
    response.data.pipe(fileWriter);
    fileWriter.on('error', err => reject(err));
    fileWriter.on('close', () => resolve());
  })
}

module.exports = {
  imagePath,
  shouldLoadImage,
  loadImage,
}
