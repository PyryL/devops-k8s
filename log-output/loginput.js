const fs = require('node:fs');

setInterval(() => {
  const timestamp = new Date().toISOString();
  fs.writeFileSync('/app/data/timestamp.txt', timestamp, { encoding: 'utf-8' });
}, 5000);
