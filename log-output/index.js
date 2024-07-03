const { v4: uuid } = require('uuid');

let randomStr = uuid();

const logString = () => {
  console.log(new Date().toISOString(), randomStr)
}

logString();
setInterval(logString, 5000);
