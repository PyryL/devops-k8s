FROM node:20-alpine

WORKDIR /app

ADD index.js package.json ./

RUN npm install --no-save

ENTRYPOINT ["npm"]
CMD ["start"]
